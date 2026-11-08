import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import {
  Scene, Group, Mesh, BoxGeometry, Float32BufferAttribute, Vector3, Color, Fog, MathUtils,
} from '../src/experience/three.js';
import { createToonMaterial } from '../src/recovered/render/toon-materials.js';
import { create_SnowboardPhysics } from '../src/recovered/physics/skier.js';
import { createBiomePhysics } from '../src/experience/physics/biome-physics.js';
import { createBiomeWorlds } from '../src/experience/biomes.js';

/** Lifecycle regressions use actual Three objects and actual world listeners.
 * No WebGL context is created: shader checks inspect generated shader contracts,
 * while browser verification owns compilation and the absence of visible bands.
 */
const checks = [];
const measurements = {};
async function check(name, work) {
  try { const details = await work(); checks.push({ name, passed: true, ...(details ? { details } : {}) }); }
  catch (error) { checks.push({ name, passed: false, error: error.stack || error.message }); }
}

const sourceGeometries = new Set(), sourceMaterials = new Set();
function originalMesh(name, routes = false) {
  const geometry = new BoxGeometry(2, .2, 2);
  if (routes) geometry.setAttribute('aPiste', new Float32BufferAttribute(new Float32Array(geometry.attributes.position.count * 3), 3));
  const material = createToonMaterial({ color: '#d4d9c5' });
  const mesh = new Mesh(geometry, material); mesh.name = name;
  sourceGeometries.add(geometry); sourceMaterials.add(material);
  return { mesh, geometry, material };
}

const scene = new Scene(); scene.fog = new Fog('#b9d5ca', 700, 6200);
const terrain = new Group(), forest = { group: new Group() }, sky = new Group();
const originalGround = originalMesh('Original route tile', true);
const originalForest = originalMesh('Original tree batch');
const backdrop = originalMesh('Original backdrop');
terrain.add(originalGround.mesh); forest.group.add(originalForest.mesh);
sky.material = { uniforms: {
  uNight: { value: 0 }, uZenith: { value: new Color('#62b0b9') },
  uHorizon: { value: new Color('#c5dfcd') }, uCloudLight: { value: new Color('#fff0cd') },
  uCloudDark: { value: new Color('#7eafa8') },
} };
const ground = {
  center: [0, 0], half: 10000, heightAt: () => 0,
  normalAt: (x, z, out) => out.set(0, 1, 0), holeAt: () => false,
  inside: (x, z) => Math.abs(x) < 10000 && Math.abs(z) < 10000,
};
const Physics = create_SnowboardPhysics({ Vector3, MathUtils });
const phys = new Physics({ hf: ground, piste: { distAt: () => 30 }, forest: { hit: () => null }, lakes: [], obstacles: [] });
const rider = { root: new Group(), gear: 'board' };
scene.add(terrain, forest.group, backdrop.mesh, sky, rider.root);
const game = {
  scene, phys, rider, spawn: { x: 0, z: 0, dx: 0, dz: -1 }, weather: { kind: 'clear' },
  environment: { world: { terrain, forest }, ground, backdrop: backdrop.mesh, sky },
};
const physics = createBiomePhysics(game), worlds = createBiomeWorlds(game);
const newDirect = originalMesh('Dynamically created near LOD', true);
const nested = new Group(), nestedInner = new Group();
const nestedMesh = originalMesh('Nested LOD', false);
nestedInner.add(nestedMesh.mesh); nested.add(nestedInner);
const lateNestedMesh = originalMesh('Late nested LOD', true);
let destroyed = false;

function assertOriginal(record) {
  assert.equal(record.mesh.material, record.material, `${record.mesh.name} must recover its exact original material.`);
  assert.equal(record.mesh.geometry, record.geometry, `${record.mesh.name} must retain its original geometry.`);
}
function assertPatched(record) {
  assert.notEqual(record.mesh.material, record.material, `${record.mesh.name} must receive a seasonal material.`);
  assert.equal(record.mesh.geometry, record.geometry, 'Seasonal painting must not rebuild source geometry.');
}

try {
  await check('snow initialization leaves source materials and geometry untouched', () => {
    [originalGround, originalForest, backdrop].forEach(assertOriginal);
    assert.equal(worlds.state.terrainPatches, 0);
  });
  await check('entering meadow patches terrain, forest and a Mesh backdrop root once', async () => {
    await worlds.setBiome('meadow');
    [originalGround, originalForest, backdrop].forEach(assertPatched);
    assert.equal(worlds.state.terrainPatches, 3);
    const firstMaterial = originalGround.mesh.material;
    worlds.update(1 / 60, 1);
    assert.equal(originalGround.mesh.material, firstMaterial, 'Routine updates must keep the same material object.');
  });
  await check('a new direct LOD is painted synchronously before any next update or render', () => {
    const before = worlds.state.terrainPatches;
    terrain.add(newDirect.mesh);
    assertPatched(newDirect);
    assert.equal(worlds.state.terrainPatches, before + 1);
  });
  await check('new nested groups and later deep children are watched immediately', () => {
    const before = worlds.state.terrainPatches;
    terrain.add(nested);
    assertPatched(nestedMesh);
    nestedInner.add(lateNestedMesh.mesh);
    assertPatched(lateNestedMesh);
    assert.equal(worlds.state.terrainPatches, before + 2);
  });
  await check('removing direct and nested LODs restores source materials and drops retention records', () => {
    const before = worlds.state.terrainPatches;
    terrain.remove(newDirect.mesh); assertOriginal(newDirect);
    assert.equal(worlds.state.terrainPatches, before - 1);
    terrain.remove(nested); [nestedMesh, lateNestedMesh].forEach(assertOriginal);
    assert.equal(worlds.state.terrainPatches, before - 3);
    const detachedChild = originalMesh('Detached group child');
    nestedInner.add(detachedChild.mesh); assertOriginal(detachedChild);
  });
  await check('forest and backdrop subtree additions use the same reversible lifecycle', () => {
    const before = worlds.state.terrainPatches;
    const tree = originalMesh('New far-tree group'), distant = originalMesh('Backdrop detail');
    forest.group.add(tree.mesh); backdrop.mesh.add(distant.mesh);
    assertPatched(tree); assertPatched(distant);
    assert.equal(worlds.state.terrainPatches, before + 2);
    forest.group.remove(tree.mesh); backdrop.mesh.remove(distant.mesh);
    assertOriginal(tree); assertOriginal(distant);
    assert.equal(worlds.state.terrainPatches, before);
  });
  await check('returning to snow restores exact original references and defers new seasonal paint', async () => {
    await worlds.setBiome('snow');
    [originalGround, originalForest, backdrop].forEach(assertOriginal);
    assert.equal(worlds.state.terrainPatches, 0);
    terrain.add(newDirect.mesh); assertOriginal(newDirect);
    await worlds.setBiome('meadow');
    assertPatched(newDirect); assertPatched(originalGround);
  });

  const near = scene.getObjectByName('Soft curved tussock grass · near');
  const middle = scene.getObjectByName('Continuous grass fleece · middle distance');
  await check('active near and middle grass have finite ranges and one stable seed per connected blade', () => {
    measurements.grass = [];
    for (const mesh of [near, middle]) {
      assert.ok(mesh?.isInstancedMesh, 'Actual grass layers must be present.');
      const geometry = mesh.geometry, position = geometry.attributes.position;
      const seed = geometry.attributes.aBladeSeed, range = geometry.attributes.aGrassRange;
      assert.equal(seed?.count, position.count); assert.equal(range?.count, position.count);
      for (let i = 0; i < position.count; i++) {
        assert.ok(Number.isFinite(seed.getX(i)) && seed.getX(i) > 0 && seed.getX(i) < 1);
        assert.ok(Number.isFinite(range.getX(i)) && range.getX(i) >= 0);
        assert.ok(Number.isFinite(range.getY(i)) && range.getY(i) > range.getX(i));
      }
      // Discover connected ribbons from real triangle connectivity, independent
      // of the number of blades, segments or their vertex ordering.
      const parent = Array.from({ length: position.count }, (_, i) => i);
      const find = i => { while (parent[i] !== i) { parent[i] = parent[parent[i]]; i = parent[i]; } return i; };
      const join = (a, b) => { parent[find(a)] = find(b); };
      const indices = geometry.index;
      for (let i = 0; i < indices.count; i += 3) {
        const a = indices.getX(i), b = indices.getX(i + 1), c = indices.getX(i + 2);
        join(a, b); join(b, c);
      }
      const components = new Map();
      for (let i = 0; i < position.count; i++) {
        const component = find(i), value = seed.getX(i);
        if (!components.has(component)) components.set(component, value);
        assert.equal(value, components.get(component), 'Interpolating different seeds along one blade would cause moving holes.');
      }
      assert.ok(components.size > 4);
      assert.equal(new Set(components.values()).size, components.size);
      const matrix = mesh.instanceMatrix.array;
      for (let i = 0; i < mesh.count; i++) {
        const k = i * 16;
        for (let j = 0; j < 16; j++) assert.ok(Number.isFinite(matrix[k + j]));
        for (const offset of [0, 4, 8]) {
          const squared = matrix[k + offset] ** 2 + matrix[k + offset + 1] ** 2 + matrix[k + offset + 2] ** 2;
          assert.ok(squared > 1e-8, 'Visible grass must never reach a zero instance scale.');
        }
      }
      measurements.grass.push({ name: mesh.name, verticesPerTuft: position.count, bladeComponents: components.size, activeInstancesChecked: mesh.count });
    }
  });
  await check('grass fading discards complete stable blades without collapsing their geometry or writing outline depth', () => {
    for (const mesh of [near, middle]) {
      assert.equal(mesh.material.depthWrite, false);
      assert.equal(mesh.material.depthTest, true);
      assert.equal(mesh.castShadow, false);
      assert.equal(mesh.renderOrder, 1);
      assert.ok(worlds.outlineExclusions.includes(mesh));
      const shader = { uniforms: {},
        vertexShader: '#include <common>\n#include <begin_vertex>\n#include <skinning_vertex>\n#include <project_vertex>',
        fragmentShader: '#include <common>\n#include <clipping_planes_fragment>\n#include <opaque_fragment>',
      };
      mesh.material.onBeforeCompile(shader);
      assert.match(shader.fragmentShader, /if\s*\([^;]*vGrassVisibility[^;]*\)\s*discard\s*;/);
      assert.doesNotMatch(shader.vertexShader, /(?:transformed\.y|instanceMatrix)[^;\n]*(?:vGrassVisibility|outerFade|innerFade)/);
      assert.doesNotMatch(shader.vertexShader, /(?:vGrassVisibility|outerFade|innerFade)[^;\n]*(?:transformed\.y|instanceMatrix)/);
      assert.doesNotMatch(shader.vertexShader, /gl_FragCoord/);
      assert.ok(shader.uniforms.uMeadowPlayer?.value?.isVector3);
      assert.match(shader.vertexShader, /aBladeSeed/);
    }
  });
  await check('destroy restores originals and unbinds root and descendant lifecycle listeners', () => {
    worlds.destroy(); destroyed = true;
    [originalGround, originalForest, backdrop, newDirect].forEach(assertOriginal);
    assert.equal(worlds.state.terrainPatches, 0);
    const newRoot = new Group(), after = originalMesh('After destroy root child');
    terrain.add(newRoot); newRoot.add(after.mesh); assertOriginal(after);
    const tree = originalMesh('After destroy forest child'), skyDetail = originalMesh('After destroy backdrop child');
    forest.group.add(tree.mesh); backdrop.mesh.add(skyDetail.mesh);
    assertOriginal(tree); assertOriginal(skyDetail);
    assert.equal(worlds.state.terrainPatches, 0);
  });
} finally {
  if (!destroyed) worlds.destroy();
  physics.destroy();
  for (const geometry of sourceGeometries) geometry.dispose();
  for (const material of sourceMaterials) material.dispose();
}

const evidence = {
  checkedAt: new Date().toISOString(),
  scope: 'Actual Three Object3D add/remove events, createBiomeWorlds material lifecycle and retention counters; actual grass geometry connectivity, active transforms and generated shader contracts. No renderer, browser, full DOM or GPU shader compilation is simulated.',
  summary: { passed: checks.filter(x => x.passed).length, failed: checks.filter(x => !x.passed).length },
  measurements, checks,
};
await mkdir(new URL('../evidence/', import.meta.url), { recursive: true });
await writeFile(new URL('../evidence/meadow-material-tests.json', import.meta.url), JSON.stringify(evidence, null, 2) + '\n');
for (const check of checks) console.log(`${check.passed ? 'PASS' : 'FAIL'} ${check.name}${check.passed ? '' : '\n' + check.error}`);
console.log(`${evidence.summary.passed}/${checks.length} meadow material checks passed.`);
if (evidence.summary.failed) process.exitCode = 1;
