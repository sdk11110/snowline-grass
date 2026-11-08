/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding xu. Live dependencies: bu, yu. */
export function create_xu(__recoveredScope) {
  return class {
    code = null;
    last = 0;
    gap = 0;
    see(e, t) {
      e.type !== `keydown` || !e.repeat || e.metaKey ? this.code = null : (this.gap = e.code === this.code ? t - this.last : 0, this.code = e.code, this.last = t);
    }
    overdue(e) {
      if (!this.code || !this.gap || e - this.last < Math.max(__recoveredScope.bu, this.gap * __recoveredScope.yu)) return null;
      let t = this.code;
      return this.code = null, t;
    }
  };
}
/* Recovered binding Od. Live dependencies: . */
export function create_Od(__recoveredScope) {
  return e => e instanceof Element && !!e.closest(`input, select, textarea, button, a, [contenteditable="true"]`);
}
/* Recovered binding handleActionKey. Live dependencies: W, Xf, Yf, Kg, z, playSpecialAction, R, md, stopSpecialAction, toggleLocomotion, startRun, ig, Q, $m, nh, $g, Xh, Mh, hp, Sh, B, I, Nd, tg, Mg, Nh, dh, Qm, qp, Qh, Jp, Zm, Yp, uh, Xp, jg, Zp, jh, Qp, Cm, em, Kh, Gp, rm, X, lm, df. Writes: df. */
export function create_handleActionKey(__recoveredScope) {
  return function handleActionKey(e, t = false) {
    if ((e === `Enter` || e === `Space`) && __recoveredScope.W === `title`) __recoveredScope.Xf();else if ((e === `Enter` || e === `Space` || e === `Escape`) && __recoveredScope.W === `swoop`) __recoveredScope.Yf.t = 1;else if ((e === `Enter` || e === `Space` || e === `Escape`) && __recoveredScope.W === `arrive`) __recoveredScope.Kg.t = 1;else if (!t && /^Digit[123]$/.test(e)) {
      let t = __recoveredScope.z.actionForKey(Number(e.slice(-1)) - 1);
      t && __recoveredScope.playSpecialAction(t);
    } else if ((__recoveredScope.R || __recoveredScope.md) && e === `KeyX` && !t) __recoveredScope.stopSpecialAction();else if (__recoveredScope.R) e === `KeyF` && !t && (__recoveredScope.stopSpecialAction(), __recoveredScope.toggleLocomotion());else if (e === `KeyR` && !t && __recoveredScope.W === `ride` && __recoveredScope.startRun(), e === `KeyR` && !t && __recoveredScope.W === `drive` && __recoveredScope.ig(), e === `KeyF` && !t && __recoveredScope.W === `ride` && __recoveredScope.toggleLocomotion(), e === `KeyF` && !t && __recoveredScope.W === `snowMonster` && __recoveredScope.Q.state === `caught` && __recoveredScope.$m(), e === `KeyQ` && !t && __recoveredScope.W === `snowMonster` && __recoveredScope.Q.state === `caught` && __recoveredScope.nh(), e === `KeyM` && !t && __recoveredScope.$g(), e === `KeyQ` && !t && __recoveredScope.W === `ride` && __recoveredScope.Xh(), (e === `KeyS` || e === `KeyF`) && !t && __recoveredScope.W === `swing` && __recoveredScope.Mh(), e === `KeyV` && !t && (__recoveredScope.W === `ride` || __recoveredScope.W === `swing`) && __recoveredScope.hp(), e === `KeyE` && !t && __recoveredScope.Sh.open ? __recoveredScope.Sh.next() : e === `KeyE` && !t && __recoveredScope.W === `drive` ? __recoveredScope.B.phys.canExit === false ? __recoveredScope.I.toast(__recoveredScope.B.floats ? `Row to the shore to step out` : __recoveredScope.Nd.on ? `Land first · hold Down` : `Land first · hold Shift`, 1600) : __recoveredScope.tg() || __recoveredScope.I.toast(__recoveredScope.B.floats ? `Row to the shore to step out` : `Not over the water`, 1600) : e === `KeyE` && !t && __recoveredScope.W === `soak` ? __recoveredScope.Mg() : e === `KeyE` && !t && __recoveredScope.W === `swing` ? __recoveredScope.Nh() : e === `KeyE` && !t && __recoveredScope.W === `horse` ? __recoveredScope.dh() : e === `KeyE` && !t && __recoveredScope.W === `snowMonster` ? __recoveredScope.Q.state === `caught` ? __recoveredScope.Qm() : __recoveredScope.nh() : e === `KeyE` && !t && __recoveredScope.W === `ride` && __recoveredScope.qp ? __recoveredScope.Qh(__recoveredScope.qp) : e === `KeyE` && !t && __recoveredScope.W === `ride` && __recoveredScope.Jp ? __recoveredScope.Zm() : e === `KeyE` && !t && __recoveredScope.W === `ride` && __recoveredScope.Yp ? __recoveredScope.uh() : e === `KeyE` && !t && __recoveredScope.W === `ride` && __recoveredScope.Xp ? __recoveredScope.jg() : e === `KeyE` && !t && __recoveredScope.W === `ride` && __recoveredScope.Zp ? __recoveredScope.jh(__recoveredScope.Zp) : e === `KeyE` && !t && __recoveredScope.W === `ride` && __recoveredScope.Qp ? __recoveredScope.Cm() : e === `KeyE` && !t && __recoveredScope.W === `ride` && __recoveredScope.em ? __recoveredScope.Kh(__recoveredScope.em) : e === `KeyE` && __recoveredScope.W === `ride` && __recoveredScope.Gp ? __recoveredScope.rm(__recoveredScope.Gp.ride) : (e === `KeyE` || e === `Space`) && __recoveredScope.W === `lift` && __recoveredScope.X.t > .5 && (__recoveredScope.X.system ? __recoveredScope.X.waiting || (__recoveredScope.X.system.targetSpeed = 20) : __recoveredScope.X.gondolaSystem ? __recoveredScope.lm(__recoveredScope.X.ride) : __recoveredScope.X.t = __recoveredScope.X.dur), (e === `Enter` || e === `Space`) && __recoveredScope.df) {
      let e = __recoveredScope.df;
      __recoveredScope.df = null;
      e();
    }
  };
}
/* Recovered binding Ad. Live dependencies: L, handleActionKey. */
export function create_Ad(__recoveredScope) {
  return () => {
    __recoveredScope.L.start();
    __recoveredScope.handleActionKey(`KeyE`);
  };
}
/* Recovered binding jd. Live dependencies: L, handleActionKey. */
export function create_jd(__recoveredScope) {
  return () => {
    __recoveredScope.L.start();
    __recoveredScope.handleActionKey(`KeyQ`);
  };
}
/* Recovered binding readInputState. Live dependencies: Dd, V, Nd, playerInput, MathUtils, R, rider, Pd. */
export function create_readInputState(__recoveredScope) {
  return function readInputState() {
    let e = __recoveredScope.Dd.overdue(performance.now());
    e && __recoveredScope.V.delete(e);
    let t = __recoveredScope.V.has(`KeyA`) || __recoveredScope.V.has(`ArrowLeft`),
      n = __recoveredScope.V.has(`KeyD`) || __recoveredScope.V.has(`ArrowRight`),
      r = __recoveredScope.V.has(`ShiftLeft`) || __recoveredScope.V.has(`ShiftRight`),
      i = __recoveredScope.Nd.read();
    __recoveredScope.playerInput.steer = __recoveredScope.MathUtils.clamp(!!t - +!!n + i.steer, -1, 1);
    __recoveredScope.playerInput.tuck = __recoveredScope.V.has(`KeyW`) || __recoveredScope.V.has(`ArrowUp`) || i.up;
    __recoveredScope.playerInput.brake = __recoveredScope.V.has(`KeyS`) || __recoveredScope.V.has(`ArrowDown`) || i.down;
    __recoveredScope.playerInput.jump = __recoveredScope.V.has(`Space`) || i.big;
    __recoveredScope.playerInput.walk = __recoveredScope.playerInput.tuck;
    __recoveredScope.playerInput.run = r || i.full;
    (__recoveredScope.R || __recoveredScope.rider.throwT !== null && __recoveredScope.rider.locomotion === `walk`) && (__recoveredScope.playerInput.walk = __recoveredScope.playerInput.run = false, __recoveredScope.playerInput.steer = 0, __recoveredScope.playerInput.jump = false);
    __recoveredScope.Pd.throttle = __recoveredScope.playerInput.tuck;
    __recoveredScope.Pd.reverse = __recoveredScope.playerInput.brake;
    __recoveredScope.Pd.steer = __recoveredScope.playerInput.steer;
    __recoveredScope.Pd.handbrake = __recoveredScope.playerInput.jump;
    __recoveredScope.Pd.climb = __recoveredScope.playerInput.jump;
    __recoveredScope.Pd.sink = r || i.low;
  };
}
/* Recovered binding Id. Live dependencies: rider, physics, F. */
export function create_Id(__recoveredScope) {
  return function Id() {
    if (__recoveredScope.rider.locomotion === `sit`) return;
    let e = __recoveredScope.rider.locomotion === `walk`;
    __recoveredScope.rider.setLocomotion(`ride`);
    e && (__recoveredScope.physics.vel.set(0, 0, 0), __recoveredScope.physics.yawRate = 0, __recoveredScope.physics.jumpCharge = 0, __recoveredScope.F.gap(__recoveredScope.physics.pos));
  };
}
/* Recovered binding toggleLocomotion. Live dependencies: stopSpecialAction, physics, rider, Id, I, Nd, F. */
export function create_toggleLocomotion(__recoveredScope) {
  return function toggleLocomotion() {
    if (__recoveredScope.physics.modeController?.surface) { __recoveredScope.I.toast('海上保持冲浪姿态 · 返回陆地可步行', 1600); return; }
    __recoveredScope.stopSpecialAction();
    !(!__recoveredScope.physics.grounded || __recoveredScope.physics.crashed > 0 || __recoveredScope.rider.throwT !== null && __recoveredScope.rider.locomotion === `walk` && __recoveredScope.rider.throwUsesPitch) && (__recoveredScope.rider.locomotion === `walk` ? (__recoveredScope.Id(), __recoveredScope.I.toast(__recoveredScope.Nd.on ? `On board` : `On board · W push / tuck`)) : __recoveredScope.rider.setLocomotion(`walk`) ? (__recoveredScope.physics.vel.set(0, 0, 0), __recoveredScope.physics.yawRate = __recoveredScope.physics.jumpCharge = __recoveredScope.physics.slip = 0, __recoveredScope.F.gap(__recoveredScope.physics.pos), __recoveredScope.I.toast(__recoveredScope.Nd.on ? `On foot · push the stick out to run` : `On foot · W walk · Shift run · F board`)) : __recoveredScope.I.toast(`Choose a rider who can walk under Rider in the menu`));
  };
}
