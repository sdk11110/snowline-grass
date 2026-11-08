/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Sf. Live dependencies: MathUtils, camera. */
export function create_Sf(__recoveredScope) {
  return () => __recoveredScope.MathUtils.clamp((1 - __recoveredScope.camera.aspect) / .54, 0, 1);
}
/* Recovered binding computeFollowCameraTargets. Live dependencies: physics, Sf, Cf, MathUtils, wf, G, U, Of, Ef, vu, Yu, groundHeightfield. */
export function create_computeFollowCameraTargets(__recoveredScope) {
  return function computeFollowCameraTargets(e, t) {
    let n = __recoveredScope.physics.speed,
      r = __recoveredScope.Sf(),
      i = __recoveredScope.Cf,
      a = __recoveredScope.MathUtils.lerp(4.6 + r * 3.4 + Math.min(n, 30) * .07, __recoveredScope.wf.dist, i);
    e.copy(__recoveredScope.physics.pos).addScaledVector(__recoveredScope.G, -a);
    e.y += __recoveredScope.MathUtils.lerp(1.9 + r * 2.1 + Math.min(n, 30) * .025, __recoveredScope.wf.up + .9, i);
    t.copy(__recoveredScope.physics.pos).addScaledVector(__recoveredScope.G, __recoveredScope.MathUtils.lerp(3.5 + r * 6.5, __recoveredScope.wf.ahead, i));
    t.y += __recoveredScope.MathUtils.lerp(.7 - r * .3, __recoveredScope.wf.look + .7, i);
    // Ocean-only chase framing gives the wave face room without changing ski camera targets.
    if (__recoveredScope.physics.modeController?.surface && i < .5) {
      e.addScaledVector(__recoveredScope.G, -2.3); e.y += 1.15;
      t.addScaledVector(__recoveredScope.G, 3.5); t.y += .25;
    }
    (__recoveredScope.U.yaw || __recoveredScope.U.pitch) && (__recoveredScope.Of(__recoveredScope.Ef), __recoveredScope.vu(e, __recoveredScope.Ef, __recoveredScope.G, __recoveredScope.U.yaw, __recoveredScope.U.pitch), __recoveredScope.vu(t, __recoveredScope.Ef, __recoveredScope.G, __recoveredScope.U.yaw, __recoveredScope.U.pitch));
    let o = i > .5 ? __recoveredScope.Yu(__recoveredScope.physics.pos.x, __recoveredScope.physics.pos.z) : null;
    o && o.keepIn(e, .6);
    e.y = Math.max(e.y, (__recoveredScope.physics.hf || __recoveredScope.groundHeightfield).heightAt(e.x, e.z) + __recoveredScope.MathUtils.lerp(1.5, .9, i));
  };
}
/* Recovered binding Of. Live dependencies: physics. */
export function create_Of(__recoveredScope) {
  return e => e.copy(__recoveredScope.physics.pos).setY(__recoveredScope.physics.pos.y + 1.1);
}
/* Recovered binding kf. Live dependencies: U, Df, J, camera, vu. */
export function create_kf(__recoveredScope) {
  return function kf(e) {
    let t = __recoveredScope.U.take();
    (t.yaw || t.pitch) && (__recoveredScope.Df.subVectors(__recoveredScope.J, __recoveredScope.camera.position).setY(0).normalize(), __recoveredScope.vu(__recoveredScope.camera.position, e, __recoveredScope.Df, t.yaw, t.pitch), __recoveredScope.vu(__recoveredScope.J, e, __recoveredScope.Df, t.yaw, t.pitch));
  };
}
/* Recovered binding resetFollowCamera. Live dependencies: computeFollowCameraTargets, camera, J. */
export function create_resetFollowCamera(__recoveredScope) {
  return function resetFollowCamera() {
    __recoveredScope.computeFollowCameraTargets(__recoveredScope.camera.position, __recoveredScope.J);
    __recoveredScope.camera.lookAt(__recoveredScope.J);
  };
}
/* Recovered binding Mf. Live dependencies: rider, physics, groundHeightfield. */
export function create_Mf(__recoveredScope) {
  return function Mf(e, t, n) {
    let r = Math.sin(e * .25) * .6;
    t.set(Math.cos(r) * 5.5, 1.6, Math.sin(r) * 5.5 - 1.5).applyQuaternion(__recoveredScope.rider.root.quaternion).add(__recoveredScope.physics.pos);
    t.y = Math.max(t.y, (__recoveredScope.physics.hf || __recoveredScope.groundHeightfield).heightAt(t.x, t.z) + 1);
    n.copy(__recoveredScope.physics.pos);
    n.y -= .6;
  };
}
/* Recovered binding Nf. Live dependencies: Mf, jf, camera, q, Pf, Sf. Writes: jf. */
export function create_Nf(__recoveredScope) {
  return function Nf(e) {
    __recoveredScope.jf += e;
    __recoveredScope.Mf(__recoveredScope.jf, __recoveredScope.camera.position, __recoveredScope.q);
    __recoveredScope.camera.lookAt(__recoveredScope.q);
    __recoveredScope.Pf(50 + __recoveredScope.Sf() * 10, 6);
  };
}
/* Recovered binding Pf. Live dependencies: camera, MathUtils, postProcessor. */
export function create_Pf(__recoveredScope) {
  return function Pf(e, t) {
    __recoveredScope.camera.fov = e;
    __recoveredScope.camera.near = __recoveredScope.MathUtils.clamp(t / 400, .3, 50);
    __recoveredScope.camera.updateProjectionMatrix();
    __recoveredScope.postProcessor.material.uniforms.uDepthScale.value = __recoveredScope.MathUtils.clamp(150 / t, .005, 1);
  };
}
/* Recovered binding Wf. Live dependencies: MathUtils, Ff, camera, Lf. */
export function create_Wf(__recoveredScope) {
  return function Wf() {
    let e = __recoveredScope.MathUtils.degToRad(__recoveredScope.Ff) / 2,
      t = Math.atan(Math.tan(e) * __recoveredScope.camera.aspect);
    return __recoveredScope.Lf.userData.radius / Math.sin(Math.min(e, t)) * (__recoveredScope.camera.aspect < 1 ? 1 : .9);
  };
}
/* Recovered binding Gf. Live dependencies: Wf, Lf, Uf, If. */
export function create_Gf(__recoveredScope) {
  return function Gf(e, t) {
    let n = __recoveredScope.Wf(),
      r = __recoveredScope.Lf.userData.center;
    return e.set(Math.sin(__recoveredScope.Uf) * Math.cos(__recoveredScope.If), Math.sin(__recoveredScope.If), Math.cos(__recoveredScope.Uf) * Math.cos(__recoveredScope.If)).multiplyScalar(n).add(r), t.copy(r), n;
  };
}
/* Recovered binding Kf. Live dependencies: Lf, Uu, Xu, weather. */
export function create_Kf(__recoveredScope) {
  return function Kf(e) {
    __recoveredScope.Lf.visible = e;
    __recoveredScope.Uu.visible = !e;
    __recoveredScope.Xu.material.uniforms.uFloat.value = +!!e;
    __recoveredScope.weather.title = e;
  };
}
/* Recovered binding Jf. Live dependencies: Gf, camera, J, Pf, Ff, qf. Writes: Uf, qf. */
export function create_Jf(__recoveredScope) {
  return function Jf(e) {
    __recoveredScope.Uf += e * .035;
    __recoveredScope.qf = __recoveredScope.Gf(__recoveredScope.camera.position, __recoveredScope.J);
    __recoveredScope.camera.lookAt(__recoveredScope.J);
    __recoveredScope.Pf(__recoveredScope.Ff, __recoveredScope.qf);
  };
}
/* Recovered binding Xf. Live dependencies: W, L, Vf, Rf, Vector3, Mf, Je, camera, MathUtils, J. Writes: W, Yf. */
export function create_Xf(__recoveredScope) {
  return function Xf() {
    if (__recoveredScope.W !== `title`) return;
    __recoveredScope.W = `swoop`;
    __recoveredScope.L.start();
    __recoveredScope.Vf.classList.add(`gone`);
    __recoveredScope.Rf.leave();
    let e = new __recoveredScope.Vector3(),
      t = new __recoveredScope.Vector3();
    __recoveredScope.Mf(0, e, t);
    let n = new __recoveredScope.Je().setFromVector3(__recoveredScope.camera.position.clone().sub(t)),
      r = new __recoveredScope.Je().setFromVector3(e.clone().sub(t));
    r.theta = n.theta + __recoveredScope.MathUtils.euclideanModulo(r.theta - n.theta + Math.PI, Math.PI * 2) - Math.PI;
    let i = n.radius,
      a = r.radius;
    __recoveredScope.Yf = {
      t: 0,
      dur: 6.5,
      anchor: t,
      l0: i,
      l1: a,
      from: n,
      to: r,
      lookOff: __recoveredScope.J.clone().sub(t),
      clearAt: Math.log(i / 4500) / Math.log(i / a),
      cleared: false
    };
  };
}
/* Recovered binding Qf. Live dependencies: Yf, MathUtils, Zf, camera, groundHeightfield, J, Pf, Ff, Bf, zf, Kf, Rf, Vf, bf. Writes: Yf, W, jf. */
export function create_Qf(__recoveredScope) {
  return function Qf(e) {
    let t = __recoveredScope.Yf;
    t.t = Math.min(1, t.t + e / t.dur);
    let n = t.t * t.t * t.t * (t.t * (t.t * 6 - 15) + 10),
      r = __recoveredScope.MathUtils.smoothstep(t.t, 0, .85);
    __recoveredScope.Zf.set(t.l0 * (t.l1 / t.l0) ** +n, __recoveredScope.MathUtils.lerp(t.from.phi, t.to.phi, r) - Math.sin(Math.PI * r) * .45, __recoveredScope.MathUtils.lerp(t.from.theta, t.to.theta, r));
    let i = __recoveredScope.Zf.radius;
    __recoveredScope.camera.position.setFromSpherical(__recoveredScope.Zf).add(t.anchor);
    __recoveredScope.groundHeightfield.inside(__recoveredScope.camera.position.x, __recoveredScope.camera.position.z) && (__recoveredScope.camera.position.y = Math.max(__recoveredScope.camera.position.y, (__recoveredScope.physics.hf || __recoveredScope.groundHeightfield).heightAt(__recoveredScope.camera.position.x, __recoveredScope.camera.position.z) + 2));
    __recoveredScope.J.copy(t.anchor).addScaledVector(t.lookOff, i / t.l0 * (1 - n));
    __recoveredScope.camera.lookAt(__recoveredScope.J);
    __recoveredScope.Pf(__recoveredScope.MathUtils.lerp(__recoveredScope.Ff, 50, n), i);
    __recoveredScope.Bf(__recoveredScope.MathUtils.clamp((.1 - Math.abs(n - t.clearAt)) / .07, 0, 1));
    __recoveredScope.zf.opacity = 1 - __recoveredScope.MathUtils.smoothstep(t.t, .05, .3);
    !t.cleared && n >= t.clearAt && (t.cleared = true, __recoveredScope.Kf(false));
    t.t >= 1 && (__recoveredScope.Bf(0), __recoveredScope.Rf.group.visible = false, __recoveredScope.Vf.classList.add(`hidden`), __recoveredScope.Yf = null, __recoveredScope.W = `intro`, __recoveredScope.jf = 0, __recoveredScope.bf());
  };
}
/* Recovered binding updateFollowCamera. Live dependencies: physics, xf, rider, G, Ju, Cf, ep, mp, rp, dp, Cp, camera, Sf, kf, Of, Ef, computeFollowCameraTargets, K, q, Yu, groundHeightfield, J, MathUtils. Writes: Cf. */
export function create_updateFollowCamera(__recoveredScope) {
  return function updateFollowCamera(e) {
    let t = __recoveredScope.physics.speed;
    if (__recoveredScope.xf.copy(__recoveredScope.physics.vel).setY(0), __recoveredScope.rider.locomotion === `walk` ? (__recoveredScope.physics.forward(__recoveredScope.xf), __recoveredScope.G.lerp(__recoveredScope.xf, 1 - Math.exp(-e * 2.2)).normalize()) : t > 2 && __recoveredScope.physics.crashed <= 0 && (__recoveredScope.xf.normalize(), __recoveredScope.G.lerp(__recoveredScope.xf, 1 - Math.exp(-e * 2.2)).normalize()), __recoveredScope.Cf += (__recoveredScope.Ju(__recoveredScope.physics.pos.x, __recoveredScope.physics.pos.z) - __recoveredScope.Cf) * (1 - Math.exp(-e * 2.5)), __recoveredScope.ep && __recoveredScope.mp()) {
      let n = Math.hypot(__recoveredScope.physics.vel.x, __recoveredScope.physics.vel.z),
        r = __recoveredScope.rider.locomotion !== `walk` && t > 2 && __recoveredScope.physics.grounded && __recoveredScope.physics.crashed <= 0 ? Math.atan2(__recoveredScope.physics.vel.y, n) : 0;
      __recoveredScope.rp.slope += (r - __recoveredScope.rp.slope) * (1 - Math.exp(-e * 3));
      __recoveredScope.dp.copy(__recoveredScope.G).setY(0).normalize();
      __recoveredScope.dp.y = Math.tan(__recoveredScope.rp.slope - .12);
      __recoveredScope.Cp(e, __recoveredScope.dp.normalize());
      __recoveredScope.camera.fov = 72 + __recoveredScope.Sf() * 10 + Math.min(t, 30) * .4;
      __recoveredScope.camera.updateProjectionMatrix();
      return;
    }
    __recoveredScope.kf(__recoveredScope.Of(__recoveredScope.Ef));
    __recoveredScope.computeFollowCameraTargets(__recoveredScope.K, __recoveredScope.q);
    __recoveredScope.camera.position.lerp(__recoveredScope.K, 1 - Math.exp(-e * (6 + __recoveredScope.Cf * 3)));
    let n = __recoveredScope.Cf > .5 ? __recoveredScope.Yu(__recoveredScope.physics.pos.x, __recoveredScope.physics.pos.z) : null;
    n && n.keepIn(__recoveredScope.camera.position, .5);
    __recoveredScope.camera.position.y = Math.max(__recoveredScope.camera.position.y, (__recoveredScope.physics.hf || __recoveredScope.groundHeightfield).heightAt(__recoveredScope.camera.position.x, __recoveredScope.camera.position.z) + 1.2 - __recoveredScope.Cf * .4);
    __recoveredScope.J.lerp(__recoveredScope.q, 1 - Math.exp(-e * (10 + __recoveredScope.Cf * 4)));
    __recoveredScope.camera.lookAt(__recoveredScope.J);
    __recoveredScope.camera.fov = 60 + __recoveredScope.Sf() * 15 + Math.min(t, 30) * .45 + __recoveredScope.Cf * 14;
    __recoveredScope.camera.near = __recoveredScope.MathUtils.lerp(.3, .08, __recoveredScope.Cf);
    __recoveredScope.camera.updateProjectionMatrix();
  };
}
