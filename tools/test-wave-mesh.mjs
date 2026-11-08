import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { Scene, Group, Vector3, Color, Fog, MathUtils } from '../src/experience/three.js';
import { create_SnowboardPhysics } from '../src/recovered/physics/skier.js';
import { createBiomePhysics } from '../src/experience/physics/biome-physics.js';
import { createBiomeWorlds } from '../src/experience/biomes.js';

/**
 * Regression for a board following the analytic sea while the visible triangle
 * surface cuts above its feet. This reads the actual ocean geometry and mode
 * controller, not copied subdivision constants or an idealized infinite mesh.
 * CPU wave evaluation supplies each actual vertex's deformed height. Browser
 * QA remains responsible for GPU compilation, lighting and screen appearance.
 */
const scene = new Scene();
scene.fog = new Fog('#b9d5ca', 700, 6200);
const terrain = new Group(), forest = { group: new Group() }, backdrop = new Group(), sky = new Group();
sky.material = { uniforms: {
  uNight: { value: 0 }, uZenith: { value: new Color('#62b0b9') },
  uHorizon: { value: new Color('#c5dfcd') }, uCloudLight: { value: new Color('#fff0cd') },
  uCloudDark: { value: new Color('#7eafa8') },
} };
const ground = {
  center: [0, 0], half: 10000, heightAt: () => 0,
  normalAt: (x, z, out) => out.set(0, 1, 0), holeAt: () => false,
};
const Physics = create_SnowboardPhysics({ Vector3, MathUtils });
const phys = new Physics({ hf: ground, piste: { distAt: () => 30 }, forest: { hit: () => null }, lakes: [], obstacles: [] });
const rider = { root: new Group(), gear: 'board' };
scene.add(terrain, forest.group, backdrop, sky, rider.root);
const game = { scene, phys, rider, spawn: { x: 0, z: 0, dx: 0, dz: -1 },
  weather: { kind: 'clear' }, environment: { world: { terrain, forest }, ground, backdrop, sky } };
const physics = createBiomePhysics(game), worlds = createBiomeWorlds(game);
const spawn = physics.setBiome('ocean');
phys.reset(spawn.x, spawn.z, Math.atan2(-spawn.dx, -spawn.dz));
await worlds.setBiome('ocean');
const mesh = scene.getObjectByName('Shared-wave surf surface');
assert.ok(mesh?.isMesh, 'The actual rendered ocean mesh must exist.');
const position = mesh.geometry.attributes.position, index = mesh.geometry.index;
assert.ok(position && index, 'The ocean must supply indexed triangles to sample.');

// Build a small spatial lookup from actual triangles around the board. The
// water patch follows its position, so far horizon triangles are irrelevant.
const bucketSize = 4, buckets = new Map();
let testedTriangles = 0;
for (let i = 0; i < index.count; i += 3) {
  const a = index.getX(i), b = index.getX(i + 1), c = index.getX(i + 2);
  const ax = position.getX(a), az = position.getZ(a);
  const bx = position.getX(b), bz = position.getZ(b);
  const cx = position.getX(c), cz = position.getZ(c);
  const x0 = Math.min(ax, bx, cx), x1 = Math.max(ax, bx, cx);
  const z0 = Math.min(az, bz, cz), z1 = Math.max(az, bz, cz);
  if (x1 < -32 || x0 > 32 || z1 < -32 || z0 > 32) continue;
  const determinant = (bx - ax) * (cz - az) - (bz - az) * (cx - ax);
  if (Math.abs(determinant) < 1e-10) continue;
  assert.ok(determinant < 0, 'Near-water triangles must face upward.');
  const triangle = { ax, az, bx, bz, cx, cz, determinant };
  testedTriangles++;
  for (let z = Math.floor(z0 / bucketSize); z <= Math.floor(z1 / bucketSize); z++)
    for (let x = Math.floor(x0 / bucketSize); x <= Math.floor(x1 / bucketSize); x++) {
      const key = `${x},${z}`;
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(triangle);
    }
}

function triangleWaterAt(x, z) {
  const localX = x - mesh.position.x, localZ = z - mesh.position.z;
  const candidates = buckets.get(`${Math.floor(localX / bucketSize)},${Math.floor(localZ / bucketSize)}`) || [];
  for (const t of candidates) {
    const px = localX - t.ax, pz = localZ - t.az;
    const u = (px * (t.cz - t.az) - pz * (t.cx - t.ax)) / t.determinant;
    const v = ((t.bx - t.ax) * pz - (t.bz - t.az) * px) / t.determinant;
    if (u < -1e-8 || v < -1e-8 || u + v > 1 + 1e-8) continue;
    const h = (x, z) => physics.surface.heightAt(x + mesh.position.x, z + mesh.position.z);
    const a = h(t.ax, t.az), b = h(t.bx, t.bz), c = h(t.cx, t.cz);
    return a * (1 - u - v) + b * u + c * v;
  }
  throw new Error(`No actual water triangle under board at local (${localX}, ${localZ}).`);
}

let maxHeightError = 0, maxWaterAboveBoard = -Infinity, submergedFrames = 0, worstSample;
const dt = 1 / 120, frames = 40 * 120;
for (let i = 0; i < frames; i++) {
  phys.step(dt, { tuck: true, steer: Math.sin(i / 120 * .25) * .4, jump: false, brake: false });
  worlds.update(dt, physics.surface.time);
  const visible = triangleWaterAt(phys.pos.x, phys.pos.z);
  const analytic = physics.surface.heightAt(phys.pos.x, phys.pos.z);
  maxHeightError = Math.max(maxHeightError, Math.abs(visible - analytic));
  const aboveBoard = visible - phys.pos.y;
  if (aboveBoard > maxWaterAboveBoard) {
    maxWaterAboveBoard = aboveBoard;
    worstSample = { time: physics.surface.time, position: phys.pos.toArray(), analytic, triangleSurface: visible };
  }
  if (aboveBoard > .1) submergedFrames++;
}

const measurements = {
  seconds: 40, frames, meshVertices: position.count, meshTriangles: index.count / 3,
  actualNearTrianglesSampled: testedTriangles, maxAnalyticToTriangleError: maxHeightError,
  maxTriangleWaterAboveBoard: maxWaterAboveBoard, framesWaterMoreThan10cmAboveBoard: submergedFrames,
  worstSample,
};
const checks = [
  { name: 'deformed near-water triangles stay within 6cm of the analytic wave', passed: maxHeightError < .06 },
  { name: 'visible water does not swallow the board by more than 10cm', passed: maxWaterAboveBoard < .1 && submergedFrames === 0 },
];
const evidence = { checkedAt: new Date().toISOString(),
  scope: 'Actual biomes.js ocean indexed mesh, live mode controller and SurfSolver, CPU analytic wave evaluation at rendered vertices followed by barycentric triangle interpolation. Covers a 40-second carving route. Does not compile GLSL or validate browser graphics.',
  summary: { passed: checks.filter(x => x.passed).length, failed: checks.filter(x => !x.passed).length },
  measurements, checks };
await mkdir(new URL('../evidence/', import.meta.url), { recursive: true });
await writeFile(new URL('../evidence/wave_mesh_tests.json', import.meta.url), JSON.stringify(evidence, null, 2) + '\n');
worlds.destroy(); physics.destroy();
for (const check of checks) console.log(`${check.passed ? 'PASS' : 'FAIL'} ${check.name}`);
console.log(JSON.stringify(measurements));
assert.equal(evidence.summary.failed, 0, 'Wave mesh regression: see evidence/wave_mesh_tests.json');
