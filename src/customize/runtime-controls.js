/**
 * The customization boundary for the recovered game.
 *
 * This module does not emulate keyboard input, patch the DOM, or attach unused
 * settings to game objects. Every supported control reaches an engine field or
 * an explicit engine method and is read back after application.
 */

export const DEFAULT_SETTINGS = Object.freeze({
  timeOfDay: 10.5,
  weather: 'clear',
  dayCycle: true,
  aurora: false,
  cameraMode: 'thirdPerson',
  mouseLook: false,
  rider: 'male',
  gear: 'board',
  realisticRiding: false,
  gravityScale: 1,
  dragScale: 1,
  steeringScale: 1,
  maxSpeed: 0,
  graphics: 'auto',
  music: true,
  sfx: true,
});

const choices = (entries) => entries.map(([value, label]) => Object.freeze({ value, label }));

export const CONTROL_SCHEMA = Object.freeze([
  { key: 'timeOfDay', label: '时间', group: 'environment', type: 'range', min: 0, max: 24, step: 0.1, unit: '时' },
  { key: 'weather', label: '天气', group: 'environment', type: 'select', options: choices([['clear', '晴天'], ['cloudy', '多云'], ['snow', '降雪'], ['blizzard', '暴风雪'], ['changeable', '自然变化']]) },
  { key: 'dayCycle', label: '昼夜流动', group: 'environment', type: 'boolean' },
  { key: 'aurora', label: '夜间极光', group: 'environment', type: 'boolean' },
  { key: 'cameraMode', label: '镜头', group: 'camera', type: 'select', options: choices([['thirdPerson', '第三人称'], ['firstPerson', '第一人称']]), note: '第一人称需要男或女人物模型。' },
  { key: 'mouseLook', label: '鼠标环视', group: 'camera', type: 'boolean' },
  { key: 'rider', label: '人物', group: 'rider', type: 'select', options: choices([['male', '男滑手'], ['female', '女滑手'], ['classic', '经典人物']]) },
  { key: 'gear', label: '雪具', group: 'rider', type: 'select', options: choices([['board', '单板'], ['ski', '双板']]) },
  { key: 'realisticRiding', label: '真实刻滑', group: 'physics', type: 'boolean' },
  { key: 'gravityScale', label: '重力倍率', group: 'physics', type: 'range', min: 0.25, max: 2.5, step: 0.05, unit: '×' },
  { key: 'dragScale', label: '阻力倍率', group: 'physics', type: 'range', min: 0, max: 4, step: 0.05, unit: '×' },
  { key: 'steeringScale', label: '转向倍率', group: 'physics', type: 'range', min: 0.25, max: 3, step: 0.05, unit: '×' },
  { key: 'maxSpeed', label: '滑行限速', group: 'physics', type: 'range', min: 0, max: 120, step: 1, unit: 'm/s', note: '0 保留原版无速度上限；只影响滑手，不改变车辆和动物。' },
  { key: 'graphics', label: '画质', group: 'graphics', type: 'select', options: choices([['auto', '自动'], ['low', '流畅'], ['medium', '均衡'], ['high', '精细'], ['custom', '原菜单自定义']]) },
  { key: 'music', label: '音乐', group: 'audio', type: 'boolean' },
  { key: 'sfx', label: '环境音效', group: 'audio', type: 'boolean' },
].map((entry) => Object.freeze(entry)));

const schema = new Map(CONTROL_SCHEMA.map((entry) => [entry.key, entry]));
const physicsKeys = ['gravityScale', 'dragScale', 'steeringScale', 'maxSpeed'];
const has = (object, key) => object != null && key in object;
const callable = (object, key) => typeof object?.[key] === 'function';
const copy = (value) => JSON.parse(JSON.stringify(value));
const emptyReport = () => ({ applied: [], unsupported: [], errors: [] });

function adapters(game) {
  const weather = game?.weather;
  const physics = game?.phys;
  const tuning = physics?.tuning;
  const methods = {
    timeOfDay: {
      supported: has(weather, 'hour'), read: () => weather.hour,
      write: (value) => { weather.hour = value; },
    },
    weather: {
      supported: callable(weather, 'set') && callable(weather, 'settle'),
      read: () => weather.kind,
      write: (value) => { weather.set(value); weather.settle(); },
    },
    dayCycle: {
      supported: has(weather, 'running'), read: () => weather.running,
      write: (value) => { weather.running = value; },
    },
    aurora: {
      supported: has(weather, 'aurora'), read: () => weather.aurora,
      write: (value) => { weather.aurora = value; },
    },
    cameraMode: {
      supported: callable(game, 'getCameraMode') && callable(game, 'setCameraMode'),
      read: () => game.getCameraMode(), write: (value) => game.setCameraMode(value),
      reason: 'The engine camera-mode methods are unavailable.',
    },
    mouseLook: {
      supported: callable(game?.mouseLook, 'set') && has(game?.mouseLook, 'on'),
      read: () => game.mouseLook.on, write: (value) => game.mouseLook.set(value),
    },
    rider: {
      supported: callable(game, 'setRider') && has(game?.rider, 'modelId'),
      read: () => game.rider.modelId, write: (value) => game.setRider(value),
      reason: 'The engine rider-selection entry point is unavailable.',
    },
    gear: {
      supported: callable(game, 'setGear') && has(game?.rider, 'gear') && has(physics, 'gear'),
      read: () => game.rider.gear, write: (value) => game.setGear(value),
      reason: 'The engine gear-selection entry point is unavailable.',
    },
    realisticRiding: {
      supported: has(physics, 'realistic'), read: () => physics.realistic,
      write: (value) => { physics.realistic = value; },
    },
    graphics: {
      supported: callable(game?.graphics, 'setMode') && has(game?.graphics, 'mode'),
      read: () => game.graphics.mode, write: (value) => game.graphics.setMode(value),
    },
    music: {
      supported: callable(game?.sound, 'setMusic') && has(game?.sound, 'musicOn'),
      read: () => game.sound.musicOn, write: (value) => game.sound.setMusic(value),
    },
    sfx: {
      supported: callable(game?.sound, 'setSfx') && has(game?.sound, 'sfxOn'),
      read: () => game.sound.sfxOn, write: (value) => game.sound.setSfx(value),
    },
  };
  for (const key of physicsKeys) {
    methods[key] = {
      supported: has(tuning, key) && typeof tuning[key] === 'number',
      read: () => tuning[key],
      write: (value) => { tuning[key] = value; },
      reason: `The skier physics engine has no active tuning.${key} hook.`,
    };
  }
  return methods;
}

function normalize(key, value) {
  const control = schema.get(key);
  if (control.type === 'boolean') {
    if (typeof value !== 'boolean') throw new TypeError('Expected a boolean.');
  } else if (control.type === 'range') {
    if (typeof value !== 'number' || !Number.isFinite(value)) throw new TypeError('Expected a finite number.');
    if (value < control.min || value > control.max) throw new RangeError(`Allowed range: ${control.min}–${control.max}.`);
    if (key === 'timeOfDay') return value % 24;
  } else if (!control.options.some((option) => option.value === value)) {
    throw new RangeError(`Unsupported value: ${String(value)}.`);
  }
  return value;
}

/**
 * Construction is side-effect free. Once the engine is ready, apply() with no
 * arguments applies DEFAULT_SETTINGS merged with initialSettings. apply(patch)
 * changes only the supplied fields. reset() restores DEFAULT_SETTINGS.
 *
 * apply/reset return a Promise of {applied, unsupported, errors}; each is an
 * array of keyed records. snapshot() returns actual engine values, never a
 * cached requested profile. Calls are serialized to prevent rider-load races.
 */
export function createRuntimeControls(getGame, initialSettings = {}) {
  if (typeof getGame !== 'function') throw new TypeError('getGame must be a function.');
  const initial = { ...DEFAULT_SETTINGS, ...initialSettings };
  let queue = Promise.resolve();
  let pending = 0;
  let lastReport = emptyReport();

  function snapshot() {
    let game;
    const readErrors = [];
    try { game = getGame(); } catch (error) { readErrors.push({ key: 'engine', message: error.message }); }
    const settings = {};
    const capabilities = {};
    const controls = adapters(game);
    for (const entry of CONTROL_SCHEMA) {
      const control = controls[entry.key];
      capabilities[entry.key] = Boolean(control?.supported);
      if (!control?.supported) continue;
      try { settings[entry.key] = control.read(); }
      catch (error) { capabilities[entry.key] = false; readErrors.push({ key: entry.key, message: error.message }); }
    }
    return {
      ready: Boolean(game?.phys && game?.weather && game?.rider && game?.graphics),
      settings,
      capabilities,
      pending,
      readErrors,
      lastReport: copy(lastReport),
    };
  }

  async function run(patch) {
    const report = emptyReport();
    if (!patch || typeof patch !== 'object' || Array.isArray(patch)) {
      report.errors.push({ key: 'patch', message: 'Settings must be a plain object.' });
      lastReport = report;
      return copy(report);
    }
    // Loading the chosen rider first makes a simultaneous first-person request
    // test the actual new rider's capabilities rather than the previous model.
    const priority = { rider: 0, gear: 1, cameraMode: 2 };
    const entries = Object.entries(patch).sort(([a], [b]) => (priority[a] ?? 3) - (priority[b] ?? 3));
    for (const [key, requested] of entries) {
      if (!schema.has(key)) {
        report.unsupported.push({ key, reason: 'No engine control is registered for this setting.' });
        continue;
      }
      try {
        const value = normalize(key, requested);
        const game = getGame();
        const control = adapters(game)[key];
        if (!control?.supported) {
          report.unsupported.push({ key, reason: game ? control?.reason ?? 'The engine does not expose this control.' : 'The game engine is not ready.' });
          continue;
        }
        // A no-op is still verified, but does not restart model loads or reset
        // weather transitions and framebuffers when applying a saved profile.
        let actual = control.read();
        if (!Object.is(actual, value)) {
          const result = await control.write(value);
          if (result === false) throw new Error('The game rejected this change in its current state.');
          if (getGame() !== game) throw new Error('The game instance changed while applying this setting.');
          actual = control.read();
        }
        if (!Object.is(actual, value)) throw new Error(`Requested ${String(value)}, but the runtime reports ${String(actual)}.`);
        if (key === 'gear' && game.phys.gear !== actual) throw new Error('Rider and skier physics gear do not match.');
        report.applied.push({ key, requested, actual });
      } catch (error) {
        report.errors.push({ key, message: error instanceof Error ? error.message : String(error) });
      }
    }
    lastReport = report;
    return copy(report);
  }

  function apply(patch = initial) {
    // Capture the patch now so later UI mutations cannot change a queued job.
    let captured;
    try { captured = copy(patch); }
    catch (error) { return Promise.resolve({ applied: [], unsupported: [], errors: [{ key: 'patch', message: error.message }] }); }
    pending++;
    const task = queue.then(() => run(captured)).finally(() => { pending--; });
    queue = task.catch(() => {});
    return task;
  }

  return Object.freeze({ apply, snapshot, reset: () => apply(DEFAULT_SETTINGS) });
}
