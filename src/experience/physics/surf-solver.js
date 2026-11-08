import { OCEAN, OCEAN_ISLANDS } from './ocean-surface.js';

export const SURF_TUNING = Object.freeze({
  launchSpeed: 7.2,
  paddleAcceleration: 3.8,
  waveAcceleration: 1.22,
  waveCatch: 1.3,
  lateralGrip: 4.4,
  waterDrag: .035,
  quadraticDrag: .0035,
  brakeDrag: 2.6,
  turnRate: 1.35,
  buoyancy: 100,
  buoyancyDamping: 20,
  boardOffset: .08,
  safetySpeed: 23,
});

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
const damp = (a, b, speed, dt) => a + (b - a) * (1 - Math.exp(-speed * dt));

/**
 * An optional solver for the existing rider physics object. It uses the same
 * position, velocity, normal and animation fields as skiing, so input, gear,
 * pose and camera remain integrated with the game rather than a second avatar.
 */
export class SurfSolver {
  constructor(surface, tuning = {}) {
    this.surface = surface;
    this.tuning = { ...SURF_TUNING, ...tuning };
    this.water = {};
    this.normal = { set(x, y, z) { this.x = x; this.y = y; this.z = z; return this; } };
    this.riding = true;
    this.lastJump = false;
    this.boundaryWarning = false;
  }

  reset(p) {
    this.riding = true;
    this.lastJump = false;
    this.boundaryWarning = false;
    p.pos.y = this.surface.heightAt(p.pos.x, p.pos.z) + this.tuning.boardOffset;
    p.prev.copy(p.pos);
    const water = this.surface.sample(p.pos.x, p.pos.z, this.water);
    const vx = -Math.sin(p.yaw) * this.tuning.launchSpeed, vz = -Math.cos(p.yaw) * this.tuning.launchSpeed;
    p.vel.set(vx, water.dt + water.dx * vx + water.dz * vz, vz);
    this.surface.normalAt(p.pos.x, p.pos.z, p.normal);
    this.clearAnimation(p);
    if (p.surf) p.surf.landingImpact = 0;
    this.updateFeedback(p, {}, this.surface.sample(p.pos.x, p.pos.z, this.water));
  }

  clearAnimation(p) {
    p.grounded = true;
    p.crashed = p.shakeOff = p.powder = p.slip = p.jumpCharge = 0;
    p.flip = p.flipTarget = p.landingRecovery = p.airTime = 0;
    p.yawRate = 0;
    Object.assign(p.skate, { on: false, kick: -1, queued: false, held: false, rest: 0 });
    p.events.length = 0;
  }

  step(p, dt, input = {}) {
    if (!(dt > 0) || !Number.isFinite(dt)) return;
    // Keep spring stability even if this solver is used outside the game's
    // fixed 120 Hz loop, and prevent tab suspension from creating a teleport.
    const elapsed = Math.min(dt, .1);
    const count = Math.ceil(elapsed / (1 / 120));
    const step = elapsed / count;
    p.prev.copy(p.pos);
    for (let i = 0; i < count; i++) this.integrate(p, step, input);
    if (![p.pos.x, p.pos.y, p.pos.z, p.vel.x, p.vel.y, p.vel.z, p.yaw].every(Number.isFinite)) {
      p.pos.set(OCEAN.spawn.x, 0, OCEAN.spawn.z); p.yaw = 0;
      this.reset(p);
    }
  }

  integrate(p, dt, input) {
    const t = this.tuning, tuning = p.tuning;
    this.surface.advance(dt);
    const s = this.surface.sample(p.pos.x, p.pos.z, this.water);
    const planarSpeed = Math.hypot(p.vel.x, p.vel.z);
    const steer = clamp(Number(input.steer) || 0, -1, 1);
    const turning = t.turnRate * clamp(1.18 - planarSpeed / 32, .46, 1.18) * tuning.steeringScale;
    p.yawRate = damp(p.yawRate, steer * turning, this.riding ? 7.5 : 3.2, dt);
    p.yaw += p.yawRate * dt;
    const fx = -Math.sin(p.yaw), fz = -Math.cos(p.yaw);
    const sx = -fz, sz = fx;
    const forward = p.vel.x * fx + p.vel.z * fz;
    const lateral = (p.vel.x - s.flowX * .28) * sx + (p.vel.z - s.flowZ * .28) * sz;
    p.slip = Math.abs(lateral);
    p.powder = 0;
    p.landingRecovery = Math.max(0, p.landingRecovery - dt);
    if (this.riding) {
      // Gravity projected down the moving wave face gives real swell drive.
      const downhill = 9.81 * tuning.gravityScale * t.waveAcceleration / (1 + s.dx * s.dx + s.dz * s.dz);
      p.vel.x -= s.dx * downhill * dt;
      p.vel.z -= s.dz * downhill * dt;
      // Entering the front face transfers energy from a moving swell. This
      // attracts a slower, aligned board toward wave speed without overriding
      // velocity or locking the rider to an artificial path.
      const alignment = clamp(fx * s.directionX + fz * s.directionZ, 0, 1);
      const alongWave = p.vel.x * s.directionX + p.vel.z * s.directionZ;
      const catchAcceleration = Math.max(0, s.waveSpeed - alongWave) * s.energy * alignment * t.waveCatch;
      p.vel.x += s.directionX * catchAcceleration * dt;
      p.vel.z += s.directionZ * catchAcceleration * dt;
      const paddle = input.tuck || input.walk || input.run;
      const thrust = paddle && !input.brake ? t.paddleAcceleration * (1 - clamp(Math.abs(forward) / 17, 0, .9)) : 0;
      p.vel.x += fx * thrust * dt;
      p.vel.z += fz * thrust * dt;
      const grip = (1 - Math.exp(-t.lateralGrip * dt)) * (input.brake ? .32 : 1);
      p.vel.x -= sx * lateral * grip;
      p.vel.z -= sz * lateral * grip;
      const drag = (t.waterDrag + t.quadraticDrag * planarSpeed + (input.brake ? t.brakeDrag : 0)) * tuning.dragScale;
      const slowdown = Math.exp(-drag * dt);
      p.vel.x *= slowdown; p.vel.z *= slowdown;
      const waterVelocity = s.dt + s.dx * p.vel.x + s.dz * p.vel.z;
      const pressure = input.tuck ? 1.2 : 1;
      const spring = t.buoyancy * pressure * (s.height + t.boardOffset - p.pos.y) - t.buoyancyDamping * Math.sqrt(pressure) * (p.vel.y - waterVelocity);
      p.vel.y += spring * dt;
      p.grounded = true;
      p.airTime = 0;
      if (input.jump) p.jumpCharge = Math.min(1, p.jumpCharge + dt * 2);
      else if (this.lastJump && p.jumpCharge > 0) {
        p.vel.y = clamp(waterVelocity, 0, 1.8) + 3.2 + p.jumpCharge * 2.6;
        p.jumpCharge = 0;
        p.takeoffYaw = p.yaw;
        p.grounded = this.riding = false;
      }
    } else {
      p.grounded = false;
      p.airTime += dt;
      p.vel.y -= 9.81 * tuning.gravityScale * dt;
      p.vel.x *= Math.exp(-.02 * dt); p.vel.z *= Math.exp(-.02 * dt);
    }
    this.lastJump = !!input.jump;
    const cap = tuning.maxSpeed > 0 ? Math.min(t.safetySpeed, tuning.maxSpeed) : t.safetySpeed;
    const horizontal = Math.hypot(p.vel.x, p.vel.z);
    if (horizontal > cap) { p.vel.x *= cap / horizontal; p.vel.z *= cap / horizontal; }
    // The workbench's configured cap is a true velocity cap, as in skiing.
    // The separate safety cap above only limits horizontal ocean travel.
    if (tuning.maxSpeed > 0) p.limitConfiguredSpeed();
    p.pos.addScaledVector(p.vel, dt);
    const contact = this.surface.sample(p.pos.x, p.pos.z, this.water);
    const surfaceY = contact.height + t.boardOffset;
    const contactVelocity = contact.dt + contact.dx * p.vel.x + contact.dz * p.vel.z;
    if (!this.riding && p.pos.y <= surfaceY && p.vel.y < contactVelocity) {
      const impact = Math.max(0, contactVelocity - p.vel.y);
      const airTime = p.airTime;
      p.pos.y = surfaceY;
      p.vel.y = contactVelocity;
      p.landingRecovery = clamp(impact / 22, .12, .6);
      this.riding = p.grounded = true;
      if (p.surf) p.surf.landingImpact = impact;
      p.events.push({ type: 'land', impact });
      if (airTime > .6) p.events.push({ type: 'air', frontRolls: 0, spin: Math.round(Math.abs(p.yaw - p.takeoffYaw) / Math.PI) * 180, time: airTime });
      p.airTime = 0;
    }
    // Numerical floor prevents a fast descending crest from swallowing the
    // board; the spring still controls the normal bobbing above the surface.
    if (this.riding && p.pos.y < surfaceY - .12) {
      p.pos.y = surfaceY - .12;
      p.vel.y = Math.max(p.vel.y, contactVelocity);
    }
    const normal = this.surface.normalAt(p.pos.x, p.pos.z, this.normal);
    p.normal.x = damp(p.normal.x, normal.x, 9, dt);
    p.normal.y = damp(p.normal.y, normal.y, 9, dt);
    p.normal.z = damp(p.normal.z, normal.z, 9, dt);
    p.normal.normalize();
    this.keepOffShore(p, dt);
    this.keepInBay(p, dt);
    if (tuning.maxSpeed > 0) p.limitConfiguredSpeed();
    this.updateFeedback(p, input, contact);
  }

  updateFeedback(p, input, sample) {
    const info = p.surf || (p.surf = {});
    const speed = Math.hypot(p.vel.x, p.vel.z);
    Object.assign(info, { crest: sample.crest, foam: sample.foam,
      steepness: sample.steepness, energy: sample.energy, waveSpeed: sample.waveSpeed,
      rising: sample.rising, face: sample.face, height: sample.height, verticalSpeed: sample.dt,
      flowX: sample.flowX, flowZ: sample.flowZ, contact: this.riding,
      paddle: !!(input.tuck || input.walk || input.run), brake: !!input.brake });
    info.spray = this.riding ? clamp((speed - 3) / 11, 0, 1) * clamp(Math.abs(p.yawRate) * .9 + (input.brake ? .85 : 0) + sample.foam * .5, 0, 1) : 0;
  }

  keepOffShore(p, dt) {
    for (const island of OCEAN_ISLANDS) {
      const dx = p.pos.x - OCEAN.center.x - island.x;
      const dz = p.pos.z - OCEAN.center.z - island.z;
      const rx = island.rx + 8, rz = island.rz + 8;
      const q = Math.hypot(dx / rx, dz / rz);
      if (q > 1.12) continue;
      let nx = dx / (rx * rx), nz = dz / (rz * rz);
      const length = Math.hypot(nx, nz);
      if (length < 1e-9) { nx = 1; nz = 0; }
      else { nx /= length; nz /= length; }
      if (q < 1) {
        const scale = 1 / Math.max(q, 1e-9);
        p.pos.x = OCEAN.center.x + island.x + (q < 1e-9 ? rx : dx * scale);
        p.pos.z = OCEAN.center.z + island.z + (q < 1e-9 ? 0 : dz * scale);
        const inward = Math.min(0, p.vel.x * nx + p.vel.z * nz);
        p.vel.x -= nx * inward; p.vel.z -= nz * inward;
        if (this.riding) p.pos.y = this.surface.heightAt(p.pos.x, p.pos.z) + this.tuning.boardOffset;
      }
      const push = clamp((1.12 - q) / .12, 0, 1) * 5 * dt;
      p.vel.x += nx * push; p.vel.z += nz * push;
    }
  }

  keepInBay(p, dt) {
    const dx = p.pos.x - OCEAN.center.x, dz = p.pos.z - OCEAN.center.z;
    const distance = Math.hypot(dx, dz);
    const softEdge = OCEAN.rideRadius - 160;
    if (distance > softEdge) {
      const force = clamp((distance - softEdge) / 160, 0, 1) * 9;
      p.vel.x -= dx / distance * force * dt;
      p.vel.z -= dz / distance * force * dt;
    }
    if (distance > OCEAN.rideRadius) {
      const nx = dx / distance, nz = dz / distance;
      p.pos.x = OCEAN.center.x + nx * OCEAN.rideRadius;
      p.pos.z = OCEAN.center.z + nz * OCEAN.rideRadius;
      const outward = Math.max(0, p.vel.x * nx + p.vel.z * nz);
      p.vel.x -= nx * outward; p.vel.z -= nz * outward;
      if (this.riding) p.pos.y = this.surface.heightAt(p.pos.x, p.pos.z) + this.tuning.boardOffset;
    }
  }
}
