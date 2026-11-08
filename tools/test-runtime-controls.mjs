import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createRuntimeControls, DEFAULT_SETTINGS, CONTROL_SCHEMA } from '../src/customize/runtime-controls.js';

const results = [];
async function check(name, test) {
  try {
    await test();
    results.push({ name, status: 'passed' });
    console.log(`PASS ${name}`);
  } catch (error) {
    results.push({ name, status: 'failed', error: error.message, stack: error.stack });
    console.error(`FAIL ${name}: ${error.message}`);
  }
}

function makeGame() {
  let cameraMode = 'thirdPerson';
  const calls = { rider: 0, activeRiderLoads: 0, peakRiderLoads: 0, weather: 0, gear: 0 };
  const game = {
    weather: {
      hour: 10.5, running: true, kind: 'clear', aurora: false,
      set(value) { calls.weather++; this.kind = value; },
      settle() {},
    },
    phys: { gear: 'board', realistic: false, tuning: { gravityScale: 1, dragScale: 1, steeringScale: 1, maxSpeed: 0 } },
    rider: { modelId: 'male', gear: 'board' },
    graphics: { mode: 'auto', setMode(value) { this.mode = value; } },
    sound: {
      musicOn: true, sfxOn: true,
      setMusic(value) { this.musicOn = value; }, setSfx(value) { this.sfxOn = value; },
    },
    mouseLook: { on: false, set(value) { this.on = value; } },
    getCameraMode() { return cameraMode; },
    setCameraMode(value) {
      if (value === 'firstPerson' && this.rider.modelId === 'classic') return false;
      cameraMode = value;
      return true;
    },
    async setRider(value) {
      calls.rider++;
      calls.activeRiderLoads++;
      calls.peakRiderLoads = Math.max(calls.peakRiderLoads, calls.activeRiderLoads);
      await new Promise((resolve) => setTimeout(resolve, 3));
      this.rider.modelId = value;
      calls.activeRiderLoads--;
      return true;
    },
    setGear(value) { calls.gear++; this.rider.gear = this.phys.gear = value; },
  };
  return { game, calls };
}

await check('not-ready and unknown controls report unsupported without mutation', async () => {
  const controls = createRuntimeControls(() => undefined);
  const report = await controls.apply({ gravityScale: 2, inventedSetting: true });
  assert.equal(report.applied.length, 0);
  assert.deepEqual(report.unsupported.map((entry) => entry.key), ['gravityScale', 'inventedSetting']);
  const snapshot = controls.snapshot();
  assert.equal(snapshot.ready, false);
  assert.deepEqual(snapshot.settings, {});
  assert.equal(Object.values(snapshot.capabilities).some(Boolean), false);
});

await check('construction is side-effect free and explicit initialization uses the supplied profile', async () => {
  const { game } = makeGame();
  const controls = createRuntimeControls(() => game, { timeOfDay: 17, weather: 'snow' });
  assert.equal(game.weather.hour, 10.5);
  const report = await controls.apply();
  assert.equal(report.applied.length, CONTROL_SCHEMA.length);
  assert.equal(report.errors.length + report.unsupported.length, 0);
  assert.equal(game.weather.hour, 17);
  assert.equal(game.weather.kind, 'snow');
  assert.equal(controls.snapshot().pending, 0);
});

await check('partial patches leave unrelated runtime settings intact', async () => {
  const { game } = makeGame();
  const controls = createRuntimeControls(() => game);
  game.weather.hour = 21.25;
  const report = await controls.apply({ music: false, maxSpeed: 35 });
  assert.equal(report.applied.length, 2);
  assert.equal(game.sound.musicOn, false);
  assert.equal(game.phys.tuning.maxSpeed, 35);
  assert.equal(game.weather.hour, 21.25);
  assert.equal(game.weather.running, true);
});

await check('rider loads finish before first-person and gear application', async () => {
  const { game, calls } = makeGame();
  game.rider.modelId = 'classic';
  const controls = createRuntimeControls(() => game);
  const report = await controls.apply({ cameraMode: 'firstPerson', gear: 'ski', rider: 'female' });
  assert.equal(report.errors.length + report.unsupported.length, 0);
  assert.deepEqual(report.applied.map((entry) => entry.key), ['rider', 'gear', 'cameraMode']);
  assert.equal(game.rider.modelId, 'female');
  assert.equal(game.getCameraMode(), 'firstPerson');
  assert.equal(game.rider.gear, 'ski');
  assert.equal(game.phys.gear, 'ski');
  assert.equal(calls.rider, 1);
});

await check('invalid numbers, choices and booleans are rejected without false success', async () => {
  const { game } = makeGame();
  const controls = createRuntimeControls(() => game);
  const report = await controls.apply({ gravityScale: -1, weather: 'rain', dayCycle: 'false', maxSpeed: Infinity });
  assert.equal(report.errors.length, 4);
  assert.equal(report.applied.length, 0);
  assert.equal(game.phys.tuning.gravityScale, 1);
  assert.equal(game.weather.kind, 'clear');
  assert.equal(game.weather.running, true);
  assert.equal(game.phys.tuning.maxSpeed, 0);
});

await check('engine rejection and missing hooks are visible', async () => {
  const { game } = makeGame();
  game.rider.modelId = 'classic';
  delete game.phys.tuning;
  const controls = createRuntimeControls(() => game);
  const report = await controls.apply({ cameraMode: 'firstPerson', dragScale: 2 });
  assert.equal(report.errors[0].key, 'cameraMode');
  assert.equal(report.unsupported[0].key, 'dragScale');
  assert.equal(report.applied.length, 0);
  assert.equal(game.getCameraMode(), 'thirdPerson');
  assert.equal(controls.snapshot().capabilities.dragScale, false);
  assert.equal('tuning' in game.phys, false);
});

await check('readback catches silent failures and rider/physics gear disagreement', async () => {
  const { game } = makeGame();
  game.graphics.setMode = () => {};
  game.setGear = (value) => { game.rider.gear = value; };
  const controls = createRuntimeControls(() => game);
  const report = await controls.apply({ graphics: 'low', gear: 'ski' });
  assert.equal(report.errors.length, 2);
  assert.equal(report.applied.length, 0);
  assert.match(report.errors.find((entry) => entry.key === 'gear').message, /do not match/);
  assert.equal(game.graphics.mode, 'auto');
});

await check('snapshots read current engine state rather than a requested profile', async () => {
  const { game } = makeGame();
  const controls = createRuntimeControls(() => game, { maxSpeed: 20 });
  await controls.apply({ maxSpeed: 20 });
  game.phys.tuning.maxSpeed = 77;
  game.weather.kind = 'blizzard';
  const snapshot = controls.snapshot();
  assert.equal(snapshot.settings.maxSpeed, 77);
  assert.equal(snapshot.settings.weather, 'blizzard');
});

await check('queued rider changes are serialized and no-op profiles do not reload models', async () => {
  const { game, calls } = makeGame();
  const controls = createRuntimeControls(() => game);
  const first = controls.apply({ rider: 'female' });
  const second = controls.apply({ rider: 'male' });
  assert.equal(controls.snapshot().pending, 2);
  await Promise.all([first, second]);
  assert.equal(calls.peakRiderLoads, 1);
  assert.equal(game.rider.modelId, 'male');
  assert.equal(controls.snapshot().pending, 0);
  await controls.apply(DEFAULT_SETTINGS);
  assert.equal(calls.rider, 2);
  assert.equal(calls.weather, 0);
});

await check('one failed change does not discard independent controls or later requests', async () => {
  const { game } = makeGame();
  game.setRider = async () => { throw new Error('Model unavailable'); };
  const controls = createRuntimeControls(() => game);
  const first = await controls.apply({ rider: 'female', weather: 'cloudy' });
  assert.equal(first.errors[0].key, 'rider');
  assert.equal(first.applied[0].key, 'weather');
  const second = await controls.apply({ timeOfDay: 24 });
  assert.equal(second.applied[0].actual, 0);
  assert.equal(game.weather.hour, 0);
});

await check('reset restores engine defaults rather than the saved initialization profile', async () => {
  const { game } = makeGame();
  const controls = createRuntimeControls(() => game, { timeOfDay: 22, dragScale: 2 });
  await controls.apply();
  const report = await controls.reset();
  assert.equal(report.errors.length + report.unsupported.length, 0);
  assert.deepEqual(controls.snapshot().settings, DEFAULT_SETTINGS);
});

const failed = results.filter((entry) => entry.status === 'failed');
const evidence = {
  checkedAt: new Date().toISOString(),
  scope: 'Behavior tests of the customization adapter with a faithful interface mock; this is not a GPU, gameplay or physics-solver verification.',
  controls: CONTROL_SCHEMA.map(({ key }) => key),
  summary: { passed: results.length - failed.length, failed: failed.length },
  results,
};
const destination = new URL('../evidence/control_tests.json', import.meta.url);
await mkdir(new URL('../evidence/', import.meta.url), { recursive: true });
await writeFile(destination, `${JSON.stringify(evidence, null, 2)}\n`);
console.log(`${evidence.summary.passed}/${results.length} adapter behavior checks passed. Evidence: ${fileURLToPath(destination)}`);
if (failed.length) process.exitCode = 1;
