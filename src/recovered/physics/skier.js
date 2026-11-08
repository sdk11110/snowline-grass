/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* 个性化入口：重力、阻力、转向倍率默认为1；maxSpeed单位米/秒，0保留原版无上限。全部作用于实际物理积分，非HUD数值。 */
export const physicsTuning = {
  gravityScale: 1,
  dragScale: 1,
  steeringScale: 1,
  maxSpeed: 0
};
/* Recovered binding SnowboardPhysics. Live dependencies: Vector3, MathUtils, crashDuration, selectCrashMotion, gravity, crashedSlideFriction, crashPoseKeyframes, shakeOffDuration, Uc, Bc, zc, Vc, Hc, edgePumpParameters, pushStartSpeedCutoff, kickTimingParameters, worldBoundaryMargin, nearestLakeShore. */
export function create_SnowboardPhysics(__recoveredScope) {
  return class {
    constructor({
      hf: heightfield,
      piste: pisteField,
      forest: forestIndex,
      obstacles = [],
      lakes = []
    }) {
      this.tuning = physicsTuning;
      // Snowline Roam: an explicit optional mode solver. Null retains skiing.
      this.modeController = null;
      this.hf = heightfield;
      this.piste = pisteField;
      this.forest = forestIndex;
      this.obstacles = obstacles;
      this.lakes = lakes;
      this.crashDir = new __recoveredScope.Vector3();
      this.pos = new __recoveredScope.Vector3();
      this.prev = new __recoveredScope.Vector3();
      this.vel = new __recoveredScope.Vector3();
      this.normal = new __recoveredScope.Vector3(0, 1, 0);
      this.yaw = 0;
      this.yawRate = 0;
      this.grounded = true;
      this.airTime = 0;
      this.crashed = 0;
      this.shakeOff = 0;
      this.crashMotion = {
        side: 0,
        forward: 1,
        speed: 0
      };
      this.slip = 0;
      this.powder = 0;
      this.jumpCharge = 0;
      this.flip = 0;
      this.flipTarget = 0;
      this.landingRecovery = 0;
      this.gear = `board`;
      this.realistic = false;
      this.edgeSide = 0;
      this.edgeHeld = 0;
      this.pumpT = 0;
      this.skate = {
        on: false,
        kick: -1,
        rest: 0,
        queued: false,
        held: false,
        style: `board`,
        side: -1,
        steps: 0
      };
      this.events = [];
    }
    kickLength(speed, style = this.skate.style) {
      return style === `stride` ? __recoveredScope.MathUtils.clamp(.9 - .06 * speed, .72, .9) : style === `pole` ? .9 : __recoveredScope.MathUtils.clamp(.85 - .06 * speed, .58, .85);
    }
    reset(x, z, yaw) {
      this.pos.set(x, this.hf.heightAt(x, z), z);
      this.vel.set(0, 0, 0);
      this.yaw = yaw;
      this.yawRate = 0;
      this.grounded = true;
      this.crashed = this.shakeOff = 0;
      this.airTime = 0;
      this.flip = this.landingRecovery = this.jumpCharge = 0;
      this.flipTarget = 0;
      this.edgeSide = this.edgeHeld = this.pumpT = 0;
      this.#resetKickCycle();
      this.hf.normalAt(x, z, this.normal);
      this.modeController?.reset?.(this);
    }
    get speed() {
      return this.vel.length();
    }
    forward(target = new __recoveredScope.Vector3()) {
      return target.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    }
    maxTurnRate(speed) {
      return Math.min(2.2, 14 / Math.max(speed, 1)) * (this.gear === `ski` ? 1.1 : 1) * this.tuning.steeringScale;
    }
    crash(reason, tree = null) {
      if (this.crashed > 0) return;
      this.#resetKickCycle();
      this.crashed = __recoveredScope.crashDuration;
      this.shakeOff = 0;
      let n = this.vel.x * Math.cos(this.yaw) - this.vel.z * Math.sin(this.yaw),
        i = -this.vel.x * Math.sin(this.yaw) - this.vel.z * Math.cos(this.yaw);
      this.crashMotion = {
        side: reason === `sideways landing` || Math.abs(n) > Math.abs(i) ? Math.sign(n) || 1 : 0,
        forward: Math.sign(i) || 1,
        speed: this.speed,
        reason: reason
      };
      this.crashMotion.kind = __recoveredScope.selectCrashMotion(this.crashMotion);
      this.vel.y = 0;
      this.vel.multiplyScalar(.7);
      this.flip = this.flipTarget = 0;
      this.crashDir.set(this.vel.x, 0, this.vel.z);
      this.crashDir.lengthSq() < 1 && this.forward(this.crashDir);
      this.crashDir.normalize();
      this.events.push({
        type: `crash`,
        reason: reason,
        tree: tree
      });
    }
    step(deltaTime, input) {
      if (this.modeController) return this.modeController.step(this, deltaTime, input);
      let n = this.hf;
      if (this.prev.copy(this.pos), this.shakeOff = input.steer || input.tuck || input.brake || input.jump ? 0 : Math.max(0, this.shakeOff - deltaTime), this.landingRecovery = Math.max(0, this.landingRecovery - deltaTime), this.crashed > 0) {
        this.crashed = Math.max(0, this.crashed - deltaTime);
        let t = __recoveredScope.crashDuration - this.crashed,
          a = n.normalAt(this.pos.x, this.pos.z, this.normal);
        if (t < 1.05) {
          this.vel.x += __recoveredScope.gravity * this.tuning.gravityScale * a.y * a.x * deltaTime;
          this.vel.z += __recoveredScope.gravity * this.tuning.gravityScale * a.y * a.z * deltaTime;
          let t = Math.hypot(this.vel.x, this.vel.z);
          t > 0 && this.vel.multiplyScalar(Math.max(0, t - (__recoveredScope.crashedSlideFriction * this.tuning.dragScale * (__recoveredScope.gravity * this.tuning.gravityScale) * a.y + .02 * t * t) * deltaTime) / t);
        } else this.vel.multiplyScalar(Math.exp(-deltaTime * 9));
        if (t >= 1.5 && this.vel.set(0, 0, 0), Math.hypot(a.x, a.z) > .09 && t > .3 && t < 1.5) {
          let t = __recoveredScope.crashPoseKeyframes[this.crashMotion.kind].rest === `chest` ? -1 : 1,
            n = Math.atan2(-a.z * t, a.x * t) - this.yaw;
          n = Math.atan2(Math.sin(n), Math.cos(n));
          this.yaw += n * (1 - Math.exp(-deltaTime * 3.5));
        }
        this.limitConfiguredSpeed();
        this.pos.addScaledVector(this.vel, deltaTime);
        this.grounded = true;
        this.vel.y = 0;
        this.#resolveBoundaryAndCollisions();
        this.pos.y = n.heightAt(this.pos.x, this.pos.z);
        n.normalAt(this.pos.x, this.pos.z, this.normal);
        this.crashed <= 0 && (this.shakeOff = __recoveredScope.shakeOffDuration, this.events.push({
          type: `recovered`
        }));
        return;
      }
      if (this.shakeOff > 0 && this.grounded) {
        this.vel.set(0, 0, 0);
        this.pos.y = n.heightAt(this.pos.x, this.pos.z);
        n.normalAt(this.pos.x, this.pos.z, this.normal);
        return;
      }
      let a = this.vel.length(),
        o = input.steer * this.maxTurnRate(a);
      this.grounded || (o = input.steer * (4.5 * this.tuning.steeringScale));
      this.yawRate += (o - this.yawRate) * (1 - Math.exp(-deltaTime * 7));
      this.yaw += this.yawRate * deltaTime;
      this.grounded ? this.#integrateGround(deltaTime, input, a) : this.#integrateAir(deltaTime, input);
      this.#resolveBoundaryAndCollisions();
      let s = this.forest.hit(this.pos.x, this.pos.z, .35);
      s && (this.vel.length() > 4.5 ? this.crash(`tree`, s) : (__recoveredScope.Uc.set(this.pos.x - s.x, 0, this.pos.z - s.z).normalize(), this.limitConfiguredSpeed(), this.pos.addScaledVector(__recoveredScope.Uc, .05), this.vel.multiplyScalar(.5)));
    }
    stepWalk(deltaTime, input) {
      if (this.modeController) return this.modeController.step(this, deltaTime, input);
      if (deltaTime <= 0) return;
      this.prev.copy(this.pos);
      this.grounded = true;
      this.airTime = this.jumpCharge = this.slip = 0;
      let n = input.steer * 2.6;
      this.yawRate += (n - this.yawRate) * (1 - Math.exp(-deltaTime * 10));
      this.yaw += this.yawRate * deltaTime;
      this.hf.normalAt(this.pos.x, this.pos.z, this.normal);
      this.forward(__recoveredScope.Bc).addScaledVector(this.normal, -__recoveredScope.Bc.dot(this.normal)).normalize();
      let r = input.walk && !input.brake ? input.run ? 4 : 1.4 : 0,
        i = 1 - Math.exp(-deltaTime * (r > 0 ? 8 : 14));
      this.vel.x += (__recoveredScope.Bc.x * r - this.vel.x) * i;
      this.vel.z += (__recoveredScope.Bc.z * r - this.vel.z) * i;
      this.limitConfiguredSpeed();
      this.pos.x += this.vel.x * deltaTime;
      this.limitConfiguredSpeed();
      this.pos.z += this.vel.z * deltaTime;
      this.#resolveBoundaryAndCollisions();
      let a = this.forest.hit(this.pos.x, this.pos.z, .35),
        o = a && Math.hypot(this.pos.x - a.x, this.pos.z - a.z) <= Math.hypot(this.prev.x - a.x, this.prev.z - a.z),
        s = this.hf.heightAt(this.pos.x, this.pos.z),
        c = Math.hypot(this.pos.x - this.prev.x, this.pos.z - this.prev.z),
        l = this.hf.normalAt(this.pos.x, this.pos.z, __recoveredScope.zc);
      o || l.y < Math.cos(Math.PI * 50 / 180) || Math.abs(s - this.prev.y) > c * 1.2 + .08 ? (this.pos.copy(this.prev), this.vel.set(0, 0, 0), this.hf.normalAt(this.pos.x, this.pos.z, this.normal)) : (this.pos.y = s, this.vel.y = (s - this.prev.y) / deltaTime, this.normal.copy(l));
    }
    #integrateGround(deltaTime, input, speed) {
      let r = this.hf.normalAt(this.pos.x, this.pos.z, __recoveredScope.zc);
      this.normal.copy(r);
      this.forward(__recoveredScope.Bc);
      __recoveredScope.Bc.addScaledVector(r, -__recoveredScope.Bc.dot(r)).normalize();
      __recoveredScope.Vc.crossVectors(r, __recoveredScope.Bc);
      __recoveredScope.Hc.set(0, -(9.81 * this.tuning.gravityScale), 0).addScaledVector(r, __recoveredScope.gravity * this.tuning.gravityScale * r.y);
      this.vel.addScaledVector(__recoveredScope.Hc, deltaTime);
      let i = 1 - __recoveredScope.MathUtils.smoothstep(this.piste.distAt(this.pos.x, this.pos.z), 16, 20);
      this.powder = (1 - i) * (1 - .7 * (1 - __recoveredScope.MathUtils.smoothstep(r.y, .77, .83)));
      let a = Math.abs(this.yawRate) > .35 * this.maxTurnRate(speed) ? Math.sign(this.yawRate) : 0;
      a && (a !== this.edgeSide && (this.edgeSide && this.edgeHeld > .3 && (this.pumpT = __recoveredScope.edgePumpParameters.pumpTime), this.edgeSide = a, this.edgeHeld = 0), this.edgeHeld += deltaTime);
      let o = this.vel.dot(__recoveredScope.Bc),
        s = this.vel.dot(__recoveredScope.Vc),
        c = (input.brake ? 2.2 : 7.5) * (1 - .15 * this.powder) * (this.gear === `ski` ? 1.05 : 1),
        l = s * Math.exp(-c * deltaTime),
        u = input.brake ? .1 : this.realistic ? __recoveredScope.edgePumpParameters.keep : .8;
      this.realistic ? o = Math.sign(o || 1) * Math.sqrt(o * o + u * (s * s - l * l)) : o += Math.sign(o || 1) * (Math.abs(s) - Math.abs(l)) * u;
      this.slip = Math.abs(s);
      this.vel.copy(__recoveredScope.Bc).multiplyScalar(o).addScaledVector(__recoveredScope.Vc, l);
      let d = .035 + .025 * this.powder;
      input.brake && (d += .5);
      let f = input.tuck ? .0022 : .0042,
        p = this.vel.length(),
        m = .06 * this.powder * p * (1 - .55 * __recoveredScope.MathUtils.smoothstep(p, 4, 14)),
        h = Math.hypot(r.x, r.z),
        g = Math.min(1, Math.abs(this.yawRate) / this.maxTurnRate(p)),
        _ = this.realistic ? g * (__recoveredScope.gravity * this.tuning.gravityScale) * h * __recoveredScope.edgePumpParameters.drag * __recoveredScope.MathUtils.smoothstep(p, __recoveredScope.edgePumpParameters.dragFrom, __recoveredScope.edgePumpParameters.dragTo) : 0,
        v = (d * (__recoveredScope.gravity * this.tuning.gravityScale) * r.y + f * p * p + m + _) * this.tuning.dragScale;
      if (p > 0 && this.vel.multiplyScalar(Math.max(0, p - v * deltaTime) / p), this.pumpT > 0 && (this.pumpT -= deltaTime, this.realistic && !input.brake)) {
        let t = 1 - __recoveredScope.MathUtils.smoothstep(p, __recoveredScope.edgePumpParameters.pumpFade[0], __recoveredScope.edgePumpParameters.pumpFade[1]);
        this.vel.addScaledVector(__recoveredScope.Bc, Math.sign(this.vel.dot(__recoveredScope.Bc) || 1) * __recoveredScope.edgePumpParameters.pump * t * deltaTime);
      }
      if (this.#updateKickCycle(deltaTime, input), input.jump) this.jumpCharge = Math.min(1, this.jumpCharge + deltaTime * 2.5);else if (this.jumpCharge > 0) {
        this.vel.addScaledVector(r, 2.6 + this.jumpCharge * 2.6);
        this.jumpCharge = 0;
        this.#beginAirborne();
        this.limitConfiguredSpeed();
        this.pos.addScaledVector(this.vel, deltaTime);
        return;
      }
      let y = this.pos.y;
      this.limitConfiguredSpeed();
      this.pos.x += this.vel.x * deltaTime;
      this.limitConfiguredSpeed();
      this.pos.z += this.vel.z * deltaTime;
      let b = this.hf.heightAt(this.pos.x, this.pos.z),
        x = y + this.vel.y * deltaTime - .5 * (__recoveredScope.gravity * this.tuning.gravityScale) * deltaTime * deltaTime;
      if (b < x - .04 && p > 7) {
        this.pos.y = x;
        this.#beginAirborne();
      } else {
        this.pos.y = b;
        let e = this.hf.normalAt(this.pos.x, this.pos.z, __recoveredScope.Uc),
          t = this.vel.length();
        this.vel.addScaledVector(e, -this.vel.dot(e));
        let n = this.vel.length();
        n > 1e-4 && this.vel.multiplyScalar(t * .999 / n);
      }
    }
    #updateKickCycle(deltaTime, input) {
      let n = this.skate,
        r = input.tuck && !n.held;
      n.held = !!input.tuck;
      let i = this.vel.length(),
        a = this.vel.dot(__recoveredScope.Bc),
        o = __recoveredScope.pushStartSpeedCutoff;
      if (!n.on) {
        if (!input.tuck || input.brake || i > o) return;
        Object.assign(n, {
          on: true,
          kick: -1,
          rest: 0,
          queued: true,
          steps: 0
        });
      }
      if (input.brake || i > 8.444444444444445) return this.#resetKickCycle();
      if (r && (n.queued = true), n.kick < 0 && (n.queued || input.tuck) && a < o && (this.#chooseKickStyle(i), n.kick = 0), n.kick < 0) {
        n.queued = !1;
        n.rest += deltaTime;
        n.rest > (this.gear === `ski` ? __recoveredScope.kickTimingParameters.rest : __recoveredScope.kickTimingParameters.strap) && this.#resetKickCycle();
      } else {
        if (n.kick += deltaTime / this.kickLength(i), n.kick > __recoveredScope.kickTimingParameters.plant && n.kick < __recoveredScope.kickTimingParameters.lift) {
          let t = Math.max(0, 1 - (a / 7.944444444444445) ** 4),
            r = n.style === `stride` ? __recoveredScope.kickTimingParameters.stride : n.style === `pole` ? __recoveredScope.kickTimingParameters.pole : __recoveredScope.kickTimingParameters.push;
          this.vel.addScaledVector(__recoveredScope.Bc, r * t * deltaTime);
        }
        if (n.kick >= 1) {
          let e = (n.queued || input.tuck) && a < o;
          e && this.#chooseKickStyle(i);
          n.kick = e ? n.kick - 1 : -1;
          n.rest = 0;
        }
      }
    }
    #chooseKickStyle(speed) {
      let t = this.skate;
      t.queued = false;
      this.gear === `ski` ? (t.style = speed < __recoveredScope.kickTimingParameters.glide || t.steps < __recoveredScope.kickTimingParameters.steps && speed < __recoveredScope.kickTimingParameters.glide * 2 ? `stride` : `pole`, t.style === `stride` && (t.side = -t.side, t.steps++)) : t.style = `board`;
    }
    #resetKickCycle() {
      Object.assign(this.skate, {
        on: false,
        kick: -1,
        rest: 0,
        queued: false
      });
    }
    #resolveBoundaryAndCollisions() {
      let {
          hf: e,
          pos: t,
          vel: n
        } = this,
        r = e.half - __recoveredScope.worldBoundaryMargin,
        i = false;
      e.holeAt(t.x, t.z) && (e.holeAt(t.x, this.prev.z) && (t.x = this.prev.x, n.x = 0), e.holeAt(t.x, t.z) && (t.z = this.prev.z, n.z = 0), i = true);
      for (let [a, o] of [[`x`, e.center[0]], [`z`, e.center[1]]]) {
        let e = t[a] - o;
        Math.abs(e) <= r || (t[a] = o + Math.sign(e) * r, n[a] * e > 0 && (n[a] = 0), i = true);
      }
      let a = .5;
      for (let e of this.obstacles) {
        let r = Math.cos(e.yaw),
          o = Math.sin(e.yaw),
          s = t.x - e.x,
          c = t.z - e.z,
          l = s * r - c * o,
          u = s * o + c * r,
          d = e.hw + a - Math.abs(l),
          f = e.hd + a - Math.abs(u);
        if (d <= 0 || f <= 0) continue;
        let [p, m, h] = d < f ? [r * Math.sign(l), -o * Math.sign(l), d] : [o * Math.sign(u), r * Math.sign(u), f];
        t.x += p * h;
        t.z += m * h;
        let g = n.x * p + n.z * m;
        g < 0 && (n.x -= p * g, n.z -= m * g);
        i = true;
      }
      let o = __recoveredScope.nearestLakeShore(this.lakes, t.x, t.z, 2);
      if (o && o.d < 0) {
        t.x -= o.nx * o.d;
        t.z -= o.nz * o.d;
        let e = n.x * o.nx + n.z * o.nz;
        e < 0 && (n.x -= o.nx * e, n.z -= o.nz * e);
        i = true;
      }
      i && this.grounded && (t.y = e.heightAt(t.x, t.z));
    }
    #beginAirborne() {
      this.#resetKickCycle();
      this.grounded = false;
      this.airTime = 0;
      this.slip = 0;
      this.takeoffYaw = this.yaw;
      this.flip = 0;
      this.flipTarget = 0;
    }
    #integrateAir(deltaTime, input) {
      this.airTime += deltaTime;
      let n = Math.PI * 2;
      input.tuck ? (this.flip += n / .9 * deltaTime, this.flipTarget = Math.ceil((this.flip - 1e-8) / n) * n) : this.flip < this.flipTarget && (this.flip = Math.min(this.flipTarget, this.flip + n / .9 * deltaTime));
      this.vel.y -= __recoveredScope.gravity * this.tuning.gravityScale * deltaTime;
      let r = this.vel.length();
      this.vel.multiplyScalar(1 - 0.0035 * this.tuning.dragScale * r * deltaTime);
      this.limitConfiguredSpeed();
      this.pos.addScaledVector(this.vel, deltaTime);
      let i = this.hf.heightAt(this.pos.x, this.pos.z);
      if (this.pos.y > i) return;
      this.pos.y = i;
      let a = this.hf.normalAt(this.pos.x, this.pos.z, __recoveredScope.zc),
        o = -this.vel.dot(a);
      this.vel.addScaledVector(a, o);
      this.grounded = true;
      let s = __recoveredScope.Uc.copy(this.vel).addScaledVector(a, -this.vel.dot(a)),
        c = this.forward(__recoveredScope.Bc);
      if ((s.lengthSq() > 1 ? Math.abs(s.normalize().dot(c)) : 1) < .45 && this.vel.length() > 7) return this.crash(`sideways landing`);
      let l = input.tuck ? 36 : 28;
      if (o > l) return this.crash(`hard landing`);
      this.normal.copy(a);
      let u = Math.floor((this.flip + 1e-8) / (Math.PI * 2));
      this.flip = this.flipTarget = 0;
      this.landingRecovery = __recoveredScope.MathUtils.clamp(o / 24, .15, .9);
      this.vel.multiplyScalar(__recoveredScope.MathUtils.lerp(.96, .72, __recoveredScope.MathUtils.smoothstep(o, 10, l)));
      this.airTime > .25 && this.events.push({
        type: `land`,
        impact: o
      });
      (this.airTime > .6 || u > 0) && this.events.push({
        type: `air`,
        frontRolls: u,
        time: this.airTime,
        spin: Math.round(Math.abs(this.yaw - this.takeoffYaw) / Math.PI) * 180
      });
    }
    limitConfiguredSpeed() {
      const cap = Number(this.tuning.maxSpeed);
      if (cap > 0 && this.vel.lengthSq() > cap * cap) this.vel.setLength(cap);
    }
  };
}
