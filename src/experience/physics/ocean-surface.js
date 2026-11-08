/**
 * Snowline Roam's deterministic ocean. Rendering and board physics consume the
 * same instance/time, including the analytic normal and vertical water speed.
 * Units are metres and seconds. No rendering engine is required by this module.
 */
export const OCEAN = Object.freeze({
  center: Object.freeze({ x: 12000, z: -12000 }),
  half: 1600,
  base: 0,
  rideRadius: 1280,
  spawn: Object.freeze({ x: 12000, z: -11880, dx: -.099503719, dz: -.99503719, toast: '潮汐海湾 · 顺着浪墙压板，左右切入浪面' }),
});

/** Local island coordinates shared with the scenery and shoreline collisions. */
export const OCEAN_ISLANDS = Object.freeze([
  Object.freeze({ x: -330, z: -80, rx: 150, rz: 290, height: 42 }),
  Object.freeze({ x: 390, z: -500, rx: 170, rz: 140, height: 28 }),
  Object.freeze({ x: -650, z: -900, rx: 230, rz: 120, height: 56 }),
]);

const wave = (amplitude, wavelength, dx, dz, phase, sharpness) => {
  const length = Math.hypot(dx, dz);
  return Object.freeze({ amplitude, wavelength,
    direction: Object.freeze([dx / length, dz / length]),
    omega: Math.sqrt(9.81 * 2 * Math.PI / wavelength), phase, sharpness });
};

export const OCEAN_WAVES = Object.freeze([
  // About five metres from trough to crest. The aligned secondary swell keeps
  // a coherent rideable face; short waves provide texture instead of throwing
  // the board between two equally strong crossing swells.
  wave(2.35, 46, -.10, -1, 5.790563158, .21),
  wave(.68, 27, -.24, -1, 1.3, .13),
  wave(.20, 9, .7, -.7, -.8, .06),
  wave(.08, 4.5, .9, .3, 2.1, .025),
]);

export const OCEAN_FOAM = Object.freeze({
  crestStart: .36, crestEnd: .98, slopeStart: .10, slopeEnd: .45, base: .22,
});

const smooth = (a, b, value) => {
  const t = Math.max(0, Math.min(1, (value - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

/** Fill an existing object to avoid allocations in the fixed-step solver. */
export function sampleOcean(x, z, time, out = {}) {
  let height = OCEAN.base, dx = 0, dz = 0, dt = 0, flowX = 0, flowZ = 0;
  let mainUnit = 0, mainSlope = 0;
  const localX = x - OCEAN.center.x, localZ = z - OCEAN.center.z;
  for (let i = 0; i < OCEAN_WAVES.length; i++) {
    const w = OCEAN_WAVES[i];
    const k = 2 * Math.PI / w.wavelength;
    const p = k * (w.direction[0] * localX + w.direction[1] * localZ) - w.omega * time + w.phase;
    const derivative = w.amplitude * (Math.cos(p) + 2 * w.sharpness * Math.cos(2 * p));
    const unit = Math.sin(p) + w.sharpness * Math.sin(2 * p);
    height += w.amplitude * unit;
    dx += derivative * k * w.direction[0];
    dz += derivative * k * w.direction[1];
    dt -= derivative * w.omega;
    // Deep-water orbital current, used for the board's relative-water grip.
    const orbital = w.amplitude * w.omega * unit;
    flowX += orbital * w.direction[0]; flowZ += orbital * w.direction[1];
    if (i === 0) { mainUnit = unit; mainSlope = derivative * k; }
  }
  out.height = height;
  out.dx = dx;
  out.dz = dz;
  out.dt = dt;
  out.steepness = Math.hypot(dx, dz);
  out.crest = smooth(OCEAN_FOAM.crestStart, OCEAN_FOAM.crestEnd, mainUnit);
  out.foam = out.crest * (OCEAN_FOAM.base + (1 - OCEAN_FOAM.base) * smooth(OCEAN_FOAM.slopeStart, OCEAN_FOAM.slopeEnd, out.steepness));
  out.face = smooth(-.02, .36, -mainSlope);
  out.energy = out.crest * out.face;
  out.rising = smooth(.05, 1.5, dt);
  out.flowX = flowX; out.flowZ = flowZ;
  out.waveSpeed = OCEAN_WAVES[0].omega * OCEAN_WAVES[0].wavelength / (2 * Math.PI);
  out.directionX = OCEAN_WAVES[0].direction[0]; out.directionZ = OCEAN_WAVES[0].direction[1];
  return out;
}

export function sampleOceanHeight(x, z, time) {
  let height = OCEAN.base;
  for (const w of OCEAN_WAVES) {
    const p = 2 * Math.PI / w.wavelength * (w.direction[0] * (x - OCEAN.center.x) + w.direction[1] * (z - OCEAN.center.z)) - w.omega * time + w.phase;
    height += w.amplitude * (Math.sin(p) + w.sharpness * Math.sin(2 * p));
  }
  return height;
}

export function sampleOceanNormal(x, z, time, out = {}) {
  let dx = 0, dz = 0;
  for (const w of OCEAN_WAVES) {
    const k = 2 * Math.PI / w.wavelength;
    const p = k * (w.direction[0] * (x - OCEAN.center.x) + w.direction[1] * (z - OCEAN.center.z)) - w.omega * time + w.phase;
    const derivative = w.amplitude * (Math.cos(p) + 2 * w.sharpness * Math.cos(2 * p));
    dx += derivative * k * w.direction[0]; dz += derivative * k * w.direction[1];
  }
  const inv = 1 / Math.hypot(dx, 1, dz);
  if (typeof out.set === 'function') return out.set(-dx * inv, inv, -dz * inv);
  out.x = -dx * inv; out.y = inv; out.z = -dz * inv;
  return out;
}

export function sampleOceanVerticalVelocity(x, z, time) {
  return sampleOcean(x, z, time, {}).dt;
}

export class OceanSurface {
  constructor({ time = 0 } = {}) {
    this.center = [OCEAN.center.x, OCEAN.center.z];
    this.half = OCEAN.half;
    this.time = time;
  }
  advance(dt) { if (Number.isFinite(dt) && dt > 0) this.time += dt; }
  setTime(time) { if (Number.isFinite(time)) this.time = time; }
  heightAt(x, z) { return sampleOceanHeight(x, z, this.time); }
  normalAt(x, z, out) { return sampleOceanNormal(x, z, this.time, out); }
  verticalVelocityAt(x, z) { return sampleOceanVerticalVelocity(x, z, this.time); }
  sample(x, z, out) { return sampleOcean(x, z, this.time, out); }
  waveInfoAt(x, z, out) { return this.sample(x, z, out); }
  /** Place a fresh run on the nearest front face, within half a wavelength. */
  rideSpawn(reference = OCEAN.spawn) {
    const w = OCEAN_WAVES[0], k = 2 * Math.PI / w.wavelength;
    const p = k * (w.direction[0] * (reference.x - OCEAN.center.x) + w.direction[1] * (reference.z - OCEAN.center.z)) - w.omega * this.time + w.phase;
    const phaseDistance = Math.atan2(Math.sin(2.05 - p), Math.cos(2.05 - p)) / k;
    return { ...reference, x: reference.x + w.direction[0] * phaseDistance,
      z: reference.z + w.direction[1] * phaseDistance };
  }
  holeAt() { return false; }
  inside(x, z) { return Math.abs(x - this.center[0]) <= this.half && Math.abs(z - this.center[1]) <= this.half; }
}
