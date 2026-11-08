import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
// These are the original public-build export names, not vendor local bindings.
import { Cr as Vector3, bt as MathUtils } from '../src/vendor/three/core.js';
import { create_SnowboardPhysics, physicsTuning } from '../src/recovered/physics/skier.js';

const DEFAULT_PHYSICS = Object.freeze({ gravityScale: 1, dragScale: 1, steeringScale: 1, maxSpeed: 0 });
const neutral = Object.freeze({ steer: 0, tuck: false, brake: false, jump: false, walk: false, run: false });
const results = [];
// Evaluate only the reviewed original class expression, not its browser
// bootstrap. This supplies an independent unchanged-algorithm reference.
const referenceClass = await readFile(new URL('./fixtures/original-skier-class.txt', import.meta.url), 'utf8');

/**
 * Execute the actual recovered skier solver. Only the infinite, obstacle-free
 * plane and rendering-independent dependencies are fixtures. Vector operations
 * use the project's actual Three implementation. No solver method is mocked.
 */
function createFixture({ slope = 0, speed = 0, airborne = false, tuning = {}, reference = false } = {}) {
  Object.assign(physicsTuning, DEFAULT_PHYSICS, tuning);
  const scope = {
    Vector3,
    MathUtils,
    gravity: 9.81,
    crashedSlideFriction: 0.5,
    worldBoundaryMargin: 40,
    pushStartSpeedCutoff: 25 / 3.6,
    kickTimingParameters: { plant: 0.15, lift: 0.6, push: 5.6, strap: 1.4, glide: 1.5, steps: 2, stride: 4.2, pole: 7, rest: 0.8 },
    edgePumpParameters: { keep: 0.96, pump: 3.2, pumpTime: 0.35, pumpFade: [14, 30], drag: 0.2, dragFrom: 16, dragTo: 30 },
    // Collision/pose helpers are not reached on this empty plane. Explicit
    // failure keeps an accidental crash from being hidden by a dummy response.
    selectCrashMotion() { throw new Error('Unexpected crash in obstacle-free physics fixture'); },
    crashPoseKeyframes: {},
    r: 3,
    i: 0.3,
    nearestLakeShore: () => null,
  };
  for (const name of ['Uc', 'Bc', 'zc', 'Vc', 'Hc']) scope[name] = new Vector3();
  const referenceDependencies = {
    w: Vector3, E: MathUtils, Nc: scope.gravity,
    Pc: scope.pushStartSpeedCutoff, Fc: scope.kickTimingParameters,
    Ic: scope.edgePumpParameters, Lc: scope.worldBoundaryMargin,
    Rc: scope.crashedSlideFriction, r: scope.r, i: scope.i,
    m: scope.selectCrashMotion, ye: scope.crashPoseKeyframes, b: scope.nearestLakeShore,
    ...Object.fromEntries(['Uc', 'Bc', 'zc', 'Vc', 'Hc'].map((key) => [key, scope[key]])),
  };
  const Physics = reference
    ? Function(...Object.keys(referenceDependencies), `'use strict'; return (${referenceClass});`)(...Object.values(referenceDependencies))
    : create_SnowboardPhysics(scope);
  const hf = {
    half: 10000,
    center: [0, 0],
    heightAt: (x, z) => slope * z,
    normalAt: (x, z, out) => out.set(0, 1, -slope).normalize(),
    holeAt: () => false,
  };
  const skier = new Physics({ hf, piste: { distAt: () => 0 }, forest: { hit: () => null }, lakes: [], obstacles: [] });
  skier.reset(0, 0, 0);
  skier.realistic = false;
  skier.vel.set(0, -slope, -1).normalize().multiplyScalar(speed);
  if (airborne) {
    skier.pos.y = 100;
    skier.grounded = false;
  }
  return skier;
}

function simulate(options, { duration = 1, dt = 1 / 120, input = {}, walk = false } = {}) {
  const skier = createFixture(options);
  const control = { ...neutral, ...input };
  const steps = Math.round(duration / dt);
  let peakSpeed = 0;
  let peakMovementSpeed = 0;
  let distance = 0;
  let firstStepDistance;
  for (let i = 0; i < steps; i++) {
    const previous = skier.pos.clone();
    walk ? skier.stepWalk(dt, control) : skier.step(dt, control);
    const moved = previous.distanceTo(skier.pos);
    firstStepDistance ??= moved;
    distance += moved;
    peakSpeed = Math.max(peakSpeed, skier.speed);
    peakMovementSpeed = Math.max(peakMovementSpeed, moved / dt);
    for (const value of [...skier.pos.toArray(), ...skier.vel.toArray(), skier.yaw]) assert.ok(Number.isFinite(value), 'Solver produced a non-finite value');
  }
  return { speed: skier.speed, position: skier.pos.toArray(), velocity: skier.vel.toArray(), yaw: skier.yaw, distance, firstStepDistance, peakSpeed, peakMovementSpeed, grounded: skier.grounded, duration: steps * dt, steps };
}

async function check(name, body) {
  try {
    const measurements = await body();
    results.push({ name, status: 'passed', measurements });
    console.log(`PASS ${name}`);
  } catch (error) {
    results.push({ name, status: 'failed', error: error.message, stack: error.stack });
    console.error(`FAIL ${name}: ${error.message}`);
  } finally {
    Object.assign(physicsTuning, DEFAULT_PHYSICS);
  }
}

await check('ground gravity changes downhill acceleration and displacement', () => {
  const low = simulate({ slope: 0.25, tuning: { gravityScale: 0.5 } }, { duration: 1.5 });
  const high = simulate({ slope: 0.25, tuning: { gravityScale: 1.5 } }, { duration: 1.5 });
  assert.ok(high.speed > low.speed * 2, 'Higher gravity must accelerate more on the same slope');
  assert.ok(-high.position[2] > -low.position[2] * 2, 'Higher gravity must move further downhill');
  assert.equal(low.grounded, true);
  assert.equal(high.grounded, true);
  return { low, high };
});

await check('airborne gravity changes vertical velocity by the expected amount', () => {
  const low = simulate({ airborne: true, tuning: { gravityScale: 0.5, dragScale: 0 } }, { duration: 0.5 });
  const high = simulate({ airborne: true, tuning: { gravityScale: 1.5, dragScale: 0 } }, { duration: 0.5 });
  assert.ok(Math.abs(low.velocity[1] - (-9.81 * 0.5 * 0.5)) < 1e-9);
  assert.ok(Math.abs(high.velocity[1] - (-9.81 * 1.5 * 0.5)) < 1e-9);
  assert.ok(high.position[1] < low.position[1]);
  return { low, high };
});

await check('ground drag changes actual glide speed and travelled distance', () => {
  const low = simulate({ speed: 12, tuning: { dragScale: 0.25 } }, { duration: 2 });
  const high = simulate({ speed: 12, tuning: { dragScale: 3 } }, { duration: 2 });
  assert.ok(high.speed < low.speed - 1, 'Higher drag must reduce final speed');
  assert.ok(high.distance < low.distance - 1, 'Higher drag must reduce travelled distance');
  return { low, high };
});

await check('air drag affects airborne velocity rather than a HUD field', () => {
  const low = simulate({ airborne: true, speed: 20, tuning: { gravityScale: 0.25, dragScale: 0 } }, { duration: 0.5 });
  const high = simulate({ airborne: true, speed: 20, tuning: { gravityScale: 0.25, dragScale: 4 } }, { duration: 0.5 });
  assert.ok(high.speed < low.speed - 1);
  assert.ok(high.distance < low.distance);
  return { low, high };
});

await check('ground steering changes heading and lateral displacement', () => {
  const low = simulate({ speed: 10, tuning: { steeringScale: 0.5 } }, { duration: 1, input: { steer: 0.35 } });
  const high = simulate({ speed: 10, tuning: { steeringScale: 2 } }, { duration: 1, input: { steer: 0.35 } });
  assert.ok(Math.abs(high.yaw) > Math.abs(low.yaw) * 2);
  assert.ok(Math.abs(high.position[0]) > Math.abs(low.position[0]) * 1.5);
  return { low, high };
});

await check('steering also reaches the original airborne turn path', () => {
  const low = simulate({ airborne: true, speed: 10, tuning: { steeringScale: 0.5 } }, { duration: 0.5, input: { steer: 0.3 } });
  const high = simulate({ airborne: true, speed: 10, tuning: { steeringScale: 2 } }, { duration: 0.5, input: { steer: 0.3 } });
  assert.ok(Math.abs(high.yaw) > Math.abs(low.yaw) * 3.9);
  return { low, high };
});

await check('speed caps constrain velocity and movement before integration', () => {
  const low = simulate({ speed: 25, tuning: { maxSpeed: 5 } }, { duration: 0.5 });
  const high = simulate({ speed: 25, tuning: { maxSpeed: 15 } }, { duration: 0.5 });
  const original = simulate({ speed: 25, tuning: { maxSpeed: 0 } }, { duration: 0.5 });
  for (const [run, cap] of [[low, 5], [high, 15]]) {
    assert.ok(run.peakSpeed <= cap + 1e-9);
    assert.ok(run.peakMovementSpeed <= cap + 1e-9, 'Capping only after position integration is insufficient');
  }
  assert.ok(high.distance > low.distance * 2);
  assert.ok(original.peakSpeed > 20, 'maxSpeed=0 must preserve the original uncapped behavior');
  return { low, high, original };
});

await check('speed caps remain active during sustained downhill acceleration', () => {
  const capped = simulate({ slope: 0.55, tuning: { maxSpeed: 4 } }, { duration: 5 });
  const original = simulate({ slope: 0.55, tuning: { maxSpeed: 0 } }, { duration: 5 });
  assert.ok(capped.peakSpeed <= 4 + 1e-9);
  assert.ok(capped.peakMovementSpeed <= 4 + 1e-9);
  assert.ok(original.speed > capped.speed * 2);
  return { capped, original };
});

await check('default tuning preserves original skiing, airborne and walking trajectories', () => {
  const scenarios = [
    { name: 'ground carving', fixture: { slope: 0.25, speed: 12 }, run: { duration: 2, input: { steer: 0.3 } } },
    { name: 'airborne turn', fixture: { airborne: true, speed: 12 }, run: { duration: 0.5, input: { steer: 0.3 } } },
    { name: 'walking', fixture: {}, run: { duration: 2, walk: true, input: { walk: true, run: true, steer: 0.2 } } },
  ];
  return scenarios.map(({ name, fixture, run }) => {
    const original = simulate({ ...fixture, reference: true }, run);
    const recovered = simulate(fixture, run);
    for (const key of ['speed', 'yaw', 'distance']) assert.ok(Math.abs(original[key] - recovered[key]) < 1e-9, `${name}: ${key} changed at default tuning`);
    for (const key of ['position', 'velocity']) {
      original[key].forEach((value, index) => assert.ok(Math.abs(value - recovered[key][index]) < 1e-9, `${name}: ${key}[${index}] changed at default tuning`));
    }
    return { name, original, recovered };
  });
});

const failed = results.filter((entry) => entry.status === 'failed');
const evidence = {
  checkedAt: new Date().toISOString(),
  scope: 'Actual recovered SnowboardPhysics step/air integration with actual project Three Vector3 math, running at fixed 1/120s on an obstacle-free analytic plane. This is solver verification, not browser/rendering or full gameplay verification.',
  source: 'src/recovered/physics/skier.js',
  originalReference: 'tools/fixtures/original-skier-class.txt: unchanged public-build Wc class expression, used only as an independent solver baseline',
  defaultsRestored: { ...physicsTuning },
  exclusions: ['Vehicle, animal and boat solvers', 'Browser input and graphics', 'Collision-rich terrain and full gameplay coverage'],
  summary: { passed: results.length - failed.length, failed: failed.length },
  results,
};
const destination = new URL('../evidence/physics_tests.json', import.meta.url);
await mkdir(new URL('../evidence/', import.meta.url), { recursive: true });
await writeFile(destination, `${JSON.stringify(evidence, null, 2)}\n`);
console.log(`${evidence.summary.passed}/${results.length} actual solver checks passed. Evidence: ${fileURLToPath(destination)}`);
if (failed.length) process.exitCode = 1;
