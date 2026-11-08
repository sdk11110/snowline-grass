import { OceanSurface, OCEAN } from './ocean-surface.js';
import { SurfSolver } from './surf-solver.js';

const DEFAULTS = Object.freeze({ gravityScale: 1, dragScale: 1, steeringScale: 1, maxSpeed: 0 });
const EMPTY_FOREST = Object.freeze({ hit: () => null });
const OCEAN_PISTE = Object.freeze({ distAt: () => 0 });

/**
 * Explicit, reversible mode boundary. This owns physics only; world visibility,
 * player gear, starting the run and the camera are the experience's concern.
 * Call setBiome(), then game.beginExperience(returnedSpawn) / startRun(spawn).
 * The original skier algorithm is untouched when modeController is null.
 */
export function createBiomePhysics(game) {
  if (!game?.phys) throw new TypeError('createBiomePhysics requires the ready game physics.');
  const p = game.phys;
  const original = Object.fromEntries(['hf', 'piste', 'forest', 'obstacles', 'lakes', 'tuning', 'modeController'].map(key => [key, p[key]]));
  const snowSpawn = { ...game.spawn };
  const surface = new OceanSurface();
  const solver = new SurfSolver(surface);
  const modes = {
    snow: original.tuning,
    meadow: { ...DEFAULTS, ...original.tuning, dragScale: original.tuning.dragScale * 1.22, steeringScale: original.tuning.steeringScale * 1.06 },
    ocean: { ...DEFAULTS, ...original.tuning },
  };
  let mode = 'snow';
  const controller = {
    surface,
    solver,
    get mode() { return mode; },
    get tuning() { return modes[mode]; },
    setBiome(id, { spawn } = {}) {
      if (!(id in modes)) throw new RangeError(`Unknown biome physics: ${id}`);
      for (const key of ['hf', 'piste', 'forest', 'obstacles', 'lakes']) p[key] = original[key];
      p.modeController = null;
      p.tuning = modes[id];
      mode = id;
      if (id === 'ocean') {
        p.hf = surface;
        p.piste = OCEAN_PISTE;
        p.forest = EMPTY_FOREST;
        p.obstacles = [];
        p.lakes = [];
        p.modeController = solver;
      }
      // Clear old events before switching; a pending ski crash must not cause
      // the original recovery system to relocate a newly spawned surfer.
      p.events.length = 0;
      if (id !== 'ocean') delete p.surf;
      return { ...(id === 'ocean' ? surface.rideSpawn() : snowSpawn),
        ...(id === 'meadow' ? { toast: '青岚草场 · 顺着山势自由滑行' } : {}), ...spawn };
    },
    update() { /* The fixed-step physics owns ocean time; the renderer reads it. */ },
    destroy() {
      Object.assign(p, original);
      delete p.surf;
      if (game.biomePhysics === controller) delete game.biomePhysics;
      mode = 'snow';
    },
  };
  game.biomePhysics = controller;
  return controller;
}
