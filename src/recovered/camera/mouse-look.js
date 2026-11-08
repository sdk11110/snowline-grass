/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding MouseLookController. Live dependencies: mouseLookSensitivity, touchLookSensitivity, MathUtils, lookPitchLimits. */
export function create_MouseLookController(__recoveredScope) {
  return class {
    constructor(e) {
      this.canvas = e;
      this.on = false;
      this.force = false;
      this.yaw = 0;
      this.pitch = 0;
      this.dYaw = 0;
      this.dPitch = 0;
      this.wanted = () => true;
      e.addEventListener(`click`, () => {
        (this.on || this.force) && !this.locked && this.wanted() && e.requestPointerLock?.()?.catch?.(() => {});
      });
      let t = false;
      e.addEventListener(`pointerdown`, e => {
        t = (this.on || this.force) && e.pointerType === `mouse` && this.wanted();
      });
      window.addEventListener(`pointerup`, () => t = false);
      document.addEventListener(`mousemove`, e => {
        (this.locked || t && e.buttons) && this.turn(-e.movementX * __recoveredScope.mouseLookSensitivity, e.movementY * __recoveredScope.mouseLookSensitivity);
      });
      let n = null;
      e.addEventListener(`pointerdown`, e => {
        e.pointerType !== `mouse` && !n && this.force && this.wanted() && (n = {
          id: e.pointerId,
          x: e.clientX,
          y: e.clientY
        });
      });
      e.addEventListener(`pointermove`, e => {
        e.pointerId === n?.id && (this.turn(-(e.clientX - n.x) * __recoveredScope.touchLookSensitivity, (e.clientY - n.y) * __recoveredScope.touchLookSensitivity), n.x = e.clientX, n.y = e.clientY);
      });
      let r = e => {
        e.pointerId === n?.id && (n = null);
      };
      e.addEventListener(`pointerup`, r);
      e.addEventListener(`pointercancel`, r);
    }
    get locked() {
      return document.pointerLockElement === this.canvas;
    }
    set(e) {
      this.on = e;
      !e && (this.locked && document.exitPointerLock(), this.yaw = this.pitch = this.dYaw = this.dPitch = 0);
    }
    turn(e, t) {
      let n = __recoveredScope.MathUtils.clamp(this.pitch + t, __recoveredScope.lookPitchLimits.min, __recoveredScope.lookPitchLimits.max);
      this.dPitch += n - this.pitch;
      this.pitch = n;
      this.yaw += e;
      this.dYaw += e;
    }
    reset() {
      this.yaw = this.pitch = this.dYaw = this.dPitch = 0;
    }
    take() {
      let e = {
        yaw: this.dYaw,
        pitch: this.dPitch
      };
      return this.dYaw = this.dPitch = 0, e;
    }
  };
}
/* Recovered binding vu. Live dependencies: _u, gu. */
export function create_vu(__recoveredScope) {
  return function vu(e, t, n, r, i) {
    return e.sub(t), i && e.applyAxisAngle(__recoveredScope._u.set(n.z, 0, -n.x).normalize(), i), r && e.applyAxisAngle(__recoveredScope.gu, r), e.add(t);
  };
}
