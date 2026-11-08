import assert from 'node:assert/strict';
import { writeFile, mkdir } from 'node:fs/promises';
import { Cr as Vector3, bt as MathUtils } from '../src/vendor/three/core.js';
import { create_SnowboardPhysics, physicsTuning } from '../src/recovered/physics/skier.js';
import { createBiomePhysics } from '../src/experience/physics/biome-physics.js';
import { OCEAN, OCEAN_ISLANDS, OCEAN_WAVES, OceanSurface, sampleOceanHeight, sampleOceanNormal, sampleOceanVerticalVelocity } from '../src/experience/physics/ocean-surface.js';

const NEUTRAL = { steer: 0, tuck: false, brake: false, jump: false, walk: false, run: false };
const results = [];
function fixture() {
  Object.assign(physicsTuning, { gravityScale: 1, dragScale: 1, steeringScale: 1, maxSpeed: 0 });
  const scope = {
    Vector3, MathUtils, gravity: 9.81, crashedSlideFriction: .5, worldBoundaryMargin: 40,
    pushStartSpeedCutoff: 25 / 3.6,
    kickTimingParameters: { plant: .15, lift: .6, push: 5.6, strap: 1.4, glide: 1.5, steps: 2, stride: 4.2, pole: 7, rest: .8 },
    edgePumpParameters: { keep: .96, pump: 3.2, pumpTime: .35, pumpFade: [14, 30], drag: .2, dragFrom: 16, dragTo: 30 },
    nearestLakeShore: () => null, selectCrashMotion: () => 'chest', crashPoseKeyframes: { chest: { rest: 'chest' } },
    crashDuration: 3, shakeOffDuration: .3,
  };
  for (const name of ['Uc', 'Bc', 'zc', 'Vc', 'Hc']) scope[name] = new Vector3();
  const hf = { half: 10000, center: [0, 0], heightAt: (x, z) => .25 * z, normalAt: (x, z, out) => out.set(0, 1, -.25).normalize(), holeAt: () => false };
  const Physics = create_SnowboardPhysics(scope);
  const p = new Physics({ hf, piste: { distAt: () => 0 }, forest: { hit: () => null }, obstacles: [], lakes: [] });
  p.reset(0, 0, 0);
  const game = { phys: p, spawn: { x: 0, z: 0, dx: 0, dz: -1, toast: 'fixture' } };
  const modes = createBiomePhysics(game);
  return { game, p, modes };
}
function enter(f, mode) {
  const spawn = f.modes.setBiome(mode);
  f.p.reset(spawn.x, spawn.z, Math.atan2(-spawn.dx, -spawn.dz));
  return spawn;
}
function advance(f, seconds, input = {}, walk = false) {
  const steps = Math.round(seconds * 120);
  const initial = f.p.pos.clone();
  let peakSpeed = 0, maxWaterSeparation = 0;
  for (let i = 0; i < steps; i++) {
    f.p[walk ? 'stepWalk' : 'step'](1 / 120, { ...NEUTRAL, ...input });
    for (const value of [...f.p.pos.toArray(), ...f.p.vel.toArray(), f.p.yaw, f.p.normal.length()]) assert.ok(Number.isFinite(value));
    assert.ok(Math.abs(f.p.normal.length() - 1) < 1e-9);
    peakSpeed = Math.max(peakSpeed, Math.hypot(f.p.vel.x, f.p.vel.z));
    if (f.modes.mode === 'ocean' && f.p.grounded) maxWaterSeparation = Math.max(maxWaterSeparation, Math.abs(f.p.pos.y - f.modes.surface.heightAt(f.p.pos.x, f.p.pos.z)));
  }
  return { position: f.p.pos.toArray(), velocity: f.p.vel.toArray(), yaw: f.p.yaw,
    distance: initial.distanceTo(f.p.pos), peakSpeed, maxWaterSeparation,
    waveTime: f.modes.surface.time, grounded: f.p.grounded };
}
async function check(name, test) {
  try { const measurements = await test(); results.push({ name, status: 'passed', measurements }); console.log(`PASS ${name}`); }
  catch (error) { results.push({ name, status: 'failed', error: error.message, stack: error.stack }); console.error(`FAIL ${name}: ${error.message}`); }
}

await check('ocean analytic normal and water velocity match finite differences', () => {
  const epsilon = 1e-4, errors = [];
  for (const [x, z, time] of [[12000, -12000, 0], [12031.2, -11933.6, 4.3], [12450, -12500, 91]]) {
    const n = sampleOceanNormal(x, z, time, new Vector3());
    const dx = (sampleOceanHeight(x + epsilon, z, time) - sampleOceanHeight(x - epsilon, z, time)) / (2 * epsilon);
    const dz = (sampleOceanHeight(x, z + epsilon, time) - sampleOceanHeight(x, z - epsilon, time)) / (2 * epsilon);
    const dt = (sampleOceanHeight(x, z, time + epsilon) - sampleOceanHeight(x, z, time - epsilon)) / (2 * epsilon);
    const estimated = new Vector3(-dx, 1, -dz).normalize();
    assert.ok(n.distanceTo(estimated) < 1e-8);
    assert.ok(Math.abs(dt - sampleOceanVerticalVelocity(x, z, time)) < 1e-8);
    errors.push({ normal: n.distanceTo(estimated), velocity: Math.abs(dt - sampleOceanVerticalVelocity(x, z, time)) });
  }
  return errors;
});

await check('surf reset uses the rendered wave surface and enters with real velocity', () => {
  const f = fixture(), spawn = enter(f, 'ocean');
  assert.equal(f.p.hf, f.modes.surface);
  assert.equal(f.p.forest.hit(spawn.x, spawn.z, 1), null);
  assert.ok(Math.abs(f.p.pos.y - f.modes.surface.heightAt(spawn.x, spawn.z) - .08) < 1e-10);
  assert.ok(f.p.vel.length() > 5.5);
  assert.ok(f.p.vel.z < -5.5);
  return { spawn, position: f.p.pos.toArray(), velocity: f.p.vel.toArray() };
});

await check('paddling adds actual movement, while braking substantially slows the board', () => {
  const paddle = fixture(); enter(paddle, 'ocean');
  const coast = fixture(); enter(coast, 'ocean');
  const brake = fixture(); enter(brake, 'ocean');
  const a = advance(paddle, 8, { tuck: true });
  const b = advance(coast, 8);
  const c = advance(brake, 8, { brake: true });
  assert.ok(a.distance > b.distance + 4, JSON.stringify({ paddle: a, coast: b, brake: c }));
  assert.ok(a.distance > c.distance * 2);
  assert.ok(Math.hypot(...[a.velocity[0], a.velocity[2]]) > Math.hypot(...[c.velocity[0], c.velocity[2]]) + 3);
  return { paddle: a, coast: b, brake: c };
});

await check('carving changes the heading and creates lateral travel', () => {
  const f = fixture(); enter(f, 'ocean');
  const run = advance(f, 2, { steer: .55, tuck: true });
  assert.ok(Math.abs(run.yaw) > .8);
  assert.ok(Math.abs(run.position[0] - OCEAN.spawn.x) > 4);
  return run;
});

await check('buoyancy follows the same time-varying water without sinking', () => {
  const f = fixture(); enter(f, 'ocean');
  const run = advance(f, 35, { tuck: true, steer: .12 });
  assert.ok(run.maxWaterSeparation < .65, `board separated from water by ${run.maxWaterSeparation}`);
  assert.ok(Math.abs(run.waveTime - 35) < 1e-9);
  assert.equal(f.p.powder, 0);
  return run;
});

await check('charged pop leaves the water and lands back on the current swell', () => {
  const f = fixture(); enter(f, 'ocean');
  advance(f, .5, { jump: true });
  f.p.step(1 / 120, NEUTRAL);
  assert.equal(f.p.grounded, false);
  assert.ok(f.p.vel.y > 3);
  const result = advance(f, 3, { tuck: true });
  assert.equal(f.p.grounded, true);
  assert.ok(f.p.events.some(e => e.type === 'land'));
  return { ...result, events: f.p.events };
});

await check('speed settings, walking input, suspension and bay boundary remain safe', () => {
  const f = fixture(); enter(f, 'ocean');
  f.p.tuning.maxSpeed = 4;
  const result = advance(f, 3, { walk: true }, true);
  assert.ok(result.peakSpeed <= 4 + 1e-9);
  f.p.pos.x = OCEAN.center.x + OCEAN.rideRadius + 10;
  f.p.step(2, { ...NEUTRAL, tuck: true });
  assert.ok(Math.hypot(f.p.pos.x - OCEAN.center.x, f.p.pos.z - OCEAN.center.z) <= OCEAN.rideRadius + 1e-9);
  const before = f.p.pos.clone(); f.p.step(NaN, NEUTRAL);
  assert.equal(before.distanceTo(f.p.pos), 0);
  assert.ok(f.modes.surface.inside(f.p.pos.x, f.p.pos.z));
  return { ...result, afterBoundary: f.p.pos.toArray() };
});

await check('switching through all modes restores every original physics reference and snow tuning', () => {
  const f = fixture();
  const original = Object.fromEntries(['hf', 'piste', 'forest', 'obstacles', 'lakes', 'tuning'].map(k => [k, f.p[k]]));
  const originalValues = { ...f.p.tuning };
  enter(f, 'meadow');
  assert.equal(f.p.modeController, null);
  assert.ok(f.p.tuning.dragScale > originalValues.dragScale);
  advance(f, 2, { tuck: true });
  enter(f, 'ocean'); advance(f, 2, { tuck: true });
  f.p.tuning.dragScale = 2.8;
  enter(f, 'snow');
  for (const [k, value] of Object.entries(original)) assert.equal(f.p[k], value, k);
  assert.deepEqual(f.p.tuning, originalValues);
  assert.equal(f.p.modeController, null);
  const result = advance(f, 2);
  assert.ok(result.position[2] < -2);
  f.modes.destroy();
  assert.equal(f.game.biomePhysics, undefined);
  return result;
});

await check('shared island shorelines keep the surfer on the water side of every coast', () => {
  return OCEAN_ISLANDS.map(island => {
    const f = fixture(); enter(f, 'ocean');
    f.p.pos.set(OCEAN.center.x + island.x + island.rx + 12, 0, OCEAN.center.z + island.z);
    f.p.reset(f.p.pos.x, f.p.pos.z, Math.PI / 2);
    let minimum = Infinity;
    for (let i = 0; i < 180; i++) {
      f.p.step(1 / 120, { ...NEUTRAL, tuck: true });
      const q = Math.hypot((f.p.pos.x - OCEAN.center.x - island.x) / (island.rx + 8), (f.p.pos.z - OCEAN.center.z - island.z) / (island.rz + 8));
      minimum = Math.min(minimum, q);
      assert.ok(q >= 1 - 1e-10, 'surfer penetrated the shared shoreline');
    }
    return { island, minimumEllipseRadius: minimum };
  });
});

await check('surf integration at 30 and 120 Hz agrees with fixed substeps', () => {
  const runs = [30, 120].map(hz => {
    const f = fixture(); enter(f, 'ocean');
    for (let i = 0; i < hz * 4; i++) f.p.step(1 / hz, { ...NEUTRAL, tuck: true, steer: .25 });
    return { pos: f.p.pos, vel: f.p.vel, time: f.modes.surface.time };
  });
  assert.ok(runs[0].pos.distanceTo(runs[1].pos) < 1e-8);
  assert.ok(runs[0].vel.distanceTo(runs[1].vel) < 1e-8);
  assert.ok(Math.abs(runs[0].time - runs[1].time) < 1e-10);
  return { positionDifference: runs[0].pos.distanceTo(runs[1].pos), velocityDifference: runs[0].vel.distanceTo(runs[1].vel) };
});

await check('the main swell has five-metre faces while the wave groups retain fine detail', () => {
  const primary = OCEAN_WAVES[0];
  let min = Infinity, max = -Infinity;
  for (let i = 0; i <= 2048; i++) {
    const phase = i / 2048 * Math.PI * 2;
    const height = primary.amplitude * (Math.sin(phase) + primary.sharpness * Math.sin(phase * 2));
    min = Math.min(min, height); max = Math.max(max, height);
  }
  assert.ok(max - min > 4.8 && max - min < 5.4);
  assert.ok(OCEAN_WAVES.some(w => w.wavelength < 10 && w.amplitude < .25), 'large swell must retain short detail waves');
  const groups = [0, 4, 9, 21].map(time => {
    let low = Infinity, high = -Infinity, peakFoam = 0;
    const surface = new OceanSurface({ time });
    for (let i = 0; i <= 460; i++) {
      const distance = i * .1;
      const info = surface.waveInfoAt(OCEAN.spawn.x + primary.direction[0] * distance, OCEAN.spawn.z + primary.direction[1] * distance);
      low = Math.min(low, info.height); high = Math.max(high, info.height); peakFoam = Math.max(peakFoam, info.foam);
      for (const key of ['crest', 'foam', 'energy', 'rising', 'face']) assert.ok(info[key] >= 0 && info[key] <= 1, key);
      if (info.crest === 0) assert.equal(info.foam, 0, 'foam must follow the actual crest, not paint the troughs white');
    }
    assert.ok(high - low > 4, 'the shared visible field must contain a real large wave face');
    assert.ok(peakFoam > .3, 'wave group must expose useful crest foam');
    return { time, trough: low, crest: high, wallHeight: high - low, peakFoam };
  });
  return { mainWaveHeight: max - min, mainWavelength: primary.wavelength, groups };
});

await check('fresh runs find the nearest advancing front face at any ocean time', () => {
  const surface = new OceanSurface();
  return [0, 5, 18, 63, 240].map(time => {
    surface.setTime(time);
    const spawn = surface.rideSpawn();
    const moved = Math.hypot(spawn.x - OCEAN.spawn.x, spawn.z - OCEAN.spawn.z);
    const info = surface.waveInfoAt(spawn.x, spawn.z);
    assert.ok(moved <= OCEAN_WAVES[0].wavelength / 2 + 1e-8);
    assert.ok(info.energy > .2 && info.face > .4, 'spawn should meet a descending, advancing surf face');
    return { time, moved, height: info.height, face: info.face, energy: info.energy };
  });
});

await check('an aligned board gains real speed and distance from the moving large swell', () => {
  const f = fixture(); enter(f, 'ocean');
  const startSpeed = Math.hypot(f.p.vel.x, f.p.vel.z);
  const result = advance(f, 8);
  assert.ok(result.peakSpeed > startSpeed + 4, 'a surfable front face must propel the board without holding paddle');
  assert.ok(result.distance > 55);
  assert.equal(f.p.surf.paddle, false);
  assert.ok(f.p.events.every(e => e.type !== 'air'), 'swell drive must not be simulated as repeated launches');
  return { startSpeed, ...result };
});

await check('holding pressure and carving through wave groups never triggers automatic launches', () => {
  const f = fixture(); enter(f, 'ocean');
  let maximumSeparation = 0, maximumSpray = 0;
  for (let i = 0; i < 120 * 90; i++) {
    f.p.step(1 / 120, { ...NEUTRAL, tuck: true, steer: Math.sin(i / 120 * .25) * .4 });
    assert.equal(f.p.grounded, true, 'pressure is not an automatic jump command');
    assert.ok(f.p.surf.contact);
    maximumSeparation = Math.max(maximumSeparation, Math.abs(f.p.pos.y - f.modes.surface.heightAt(f.p.pos.x, f.p.pos.z)));
    maximumSpray = Math.max(maximumSpray, f.p.surf.spray);
    assert.ok(f.p.surf.spray >= 0 && f.p.surf.spray <= 1);
    assert.ok([...f.p.pos.toArray(), ...f.p.vel.toArray()].every(Number.isFinite));
  }
  assert.ok(maximumSeparation < .65, `pressure lost wave contact by ${maximumSeparation}m`);
  assert.ok(maximumSpray > .15);
  assert.equal(f.p.events.filter(e => e.type === 'air' || e.type === 'land').length, 0);
  return { seconds: 90, maximumSeparation, maximumSpray, position: f.p.pos.toArray() };
});

await check('jumps rejoin different moving wave groups with bounded relative landing impulse', () => {
  return [0, 4, 11, 23].map(time => {
    const f = fixture(); f.modes.surface.setTime(time); enter(f, 'ocean');
    advance(f, .45, { jump: true });
    f.p.step(1 / 120, NEUTRAL);
    assert.equal(f.p.grounded, false);
    assert.equal(f.p.surf.spray, 0);
    const result = advance(f, 4, { tuck: true, steer: .1 });
    assert.equal(f.p.grounded, true);
    const landing = f.p.events.find(e => e.type === 'land');
    assert.ok(landing && landing.impact > 0 && landing.impact < 22, 'relative wave landing speed should remain reasonable');
    return { initialOceanTime: time, impact: landing.impact, finalWaterSeparation: Math.abs(f.p.pos.y - f.modes.surface.heightAt(f.p.pos.x, f.p.pos.z)), ...result };
  });
});

const failed = results.filter(r => r.status === 'failed');
const evidence = { checkedAt: new Date().toISOString(),
  scope: 'Actual SnowboardPhysics delegation, SurfSolver and shared analytic wave field with project Three Vector3; includes shared elliptical island shorelines. Does not verify rendering, browser input, surf visuals or minor decorative rocks.',
  summary: { passed: results.length - failed.length, failed: failed.length }, results };
await mkdir(new URL('../evidence/', import.meta.url), { recursive: true });
await writeFile(new URL('../evidence/biome_physics_tests.json', import.meta.url), JSON.stringify(evidence, null, 2) + '\n');
console.log(`${results.length - failed.length}/${results.length} biome physics checks passed.`);
if (failed.length) process.exitCode = 1;
