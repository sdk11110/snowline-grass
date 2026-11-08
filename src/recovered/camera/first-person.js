/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding mp. Live dependencies: rider. */
export function create_mp(__recoveredScope) {
  return () => !!__recoveredScope.rider.model?.bones?.Head && (__recoveredScope.rider.modelId === `male` || __recoveredScope.rider.modelId === `female`);
}
/* Recovered binding hp. Live dependencies: ep, mp, I, rp, U. Writes: ep. */
export function create_hp(__recoveredScope) {
  return function hp() {
    !__recoveredScope.ep && !__recoveredScope.mp() ? __recoveredScope.I.toast(`First person is for the male and female riders`, 1800) : (__recoveredScope.ep = !__recoveredScope.ep, __recoveredScope.rp.yaw = __recoveredScope.rp.pitch = 0, __recoveredScope.U.reset(), __recoveredScope.I.toast(__recoveredScope.ep ? `First person · V to go back` : `Third person`, 1400));
  };
}
/* Recovered binding yp. Live dependencies: vp, We. */
export function create_yp(__recoveredScope) {
  return function yp(e) {
    let t = e.geometry;
    if (__recoveredScope.vp.has(t)) return __recoveredScope.vp.get(t);
    let n = e.skeleton.bones.findIndex(e => /Head$/.test(e.name)),
      r = t.attributes.position,
      i = t.attributes.skinIndex,
      a = t.attributes.skinWeight,
      o = r.count,
      s = new Uint8Array(o);
    for (let e = 0; e < o; e++) for (let t = 0; t < 4; t++) i.getComponent(e, t) === n && a.getComponent(e, t) > .001 && (s[e] = 1);
    let c = t.index ? t.index.array : Array.from({
        length: o
      }, (e, t) => t),
      l = Int32Array.from({
        length: o
      }, (e, t) => t),
      u = e => {
        for (; l[e] !== e;) e = l[e] = l[l[e]];
        return e;
      },
      d = (e, t) => {
        e = u(e);
        t = u(t);
        e !== t && (l[e] = t);
      },
      f = new Map();
    for (let e = 0; e < o; e++) {
      let t = `${Math.round(r.getX(e) * 1e4)},${Math.round(r.getY(e) * 1e4)},${Math.round(r.getZ(e) * 1e4)}`;
      f.has(t) ? d(e, f.get(t)) : f.set(t, e);
    }
    for (let e = 0; e < c.length; e += 3) {
      d(c[e], c[e + 1]);
      d(c[e], c[e + 2]);
    }
    let p = new Set(),
      m = new Map();
    for (let e = 0; e < o; e++) {
      let t = u(e);
      s[e] ? p.add(t) : m.set(t, (m.get(t) ?? 0) + 1);
    }
    let h = -1,
      g = 0;
    for (let [e, t] of m) p.has(e) && t > g && (g = t, h = e);
    for (let e = 0; e < o; e++) {
      let t = u(e);
      t !== h && p.has(t) && (s[e] = 1);
    }
    let _ = [];
    for (let e = 0; e < c.length; e += 3) !s[c[e]] && !s[c[e + 1]] && !s[c[e + 2]] && _.push(c[e], c[e + 1], c[e + 2]);
    let v = new __recoveredScope.We();
    for (let [e, n] of Object.entries(t.attributes)) v.setAttribute(e, n);
    return v.setIndex(_), v.boundingBox = t.boundingBox, v.boundingSphere = t.boundingSphere, v.userData.full = t, __recoveredScope.vp.set(t, v), v;
  };
}
/* Recovered binding xp. Live dependencies: rider, yp, _p. Writes: bp. */
export function create_xp(__recoveredScope) {
  return function xp(e) {
    __recoveredScope.rider.root.traverse(t => {
      if (!t.isSkinnedMesh) return;
      let n = t.geometry.userData.full;
      e && n ? t.geometry = n : !e && !n && (t.geometry = __recoveredScope.yp(t));
    });
    __recoveredScope.bp = !e;
    __recoveredScope._p.visible = !e;
  };
}
/* Recovered binding Sp. Live dependencies: rider, fp, _p, pp, op, sp. */
export function create_Sp(__recoveredScope) {
  return function Sp(e, t) {
    let n = __recoveredScope.rider.model.bones.Head.bone;
    n.updateWorldMatrix(true, true);
    n.getWorldPosition(e);
    let r = n.children[0];
    return r ? __recoveredScope.fp.setFromMatrixPosition(r.matrixWorld).sub(e).normalize() : __recoveredScope.fp.set(0, 1, 0).applyQuaternion(__recoveredScope.rider.root.quaternion), __recoveredScope._p.position.copy(e).addScaledVector(__recoveredScope.fp, .17), __recoveredScope.pp.copy(t).projectOnPlane(__recoveredScope.fp).normalize(), e.addScaledVector(__recoveredScope.fp, __recoveredScope.op).addScaledVector(__recoveredScope.pp, __recoveredScope.sp);
  };
}
/* Recovered binding Cp. Live dependencies: U, rp, MathUtils, up, vu, Df, tp, lp, Sp, cp, xp, camera, J, ip. Writes: np. */
export function create_Cp(__recoveredScope) {
  return function Cp(e, t, n = 0) {
    let r = __recoveredScope.U.take();
    __recoveredScope.U.pitch = 0;
    __recoveredScope.rp.yaw += r.yaw;
    __recoveredScope.rp.pitch = __recoveredScope.MathUtils.clamp(__recoveredScope.rp.pitch + r.pitch, -1.3, 1.45);
    __recoveredScope.up.copy(t);
    __recoveredScope.vu(__recoveredScope.up, __recoveredScope.Df.set(0, 0, 0), t, __recoveredScope.rp.yaw + n, __recoveredScope.rp.pitch);
    __recoveredScope.tp ? __recoveredScope.lp.lerp(__recoveredScope.up, 1 - Math.exp(-e * 14)).normalize() : __recoveredScope.lp.copy(__recoveredScope.up);
    __recoveredScope.Sp(__recoveredScope.cp, __recoveredScope.lp);
    __recoveredScope.xp(false);
    __recoveredScope.camera.position.copy(__recoveredScope.cp);
    __recoveredScope.J.copy(__recoveredScope.cp).add(__recoveredScope.lp);
    __recoveredScope.camera.lookAt(__recoveredScope.J);
    __recoveredScope.camera.near = __recoveredScope.ip;
    __recoveredScope.np = true;
  };
}
/* Recovered binding kp. Live dependencies: rider, R, physics, Op, Ep, Dp, Tp, K, wp, cg, ud, W, dg, Su, playerInput, MathUtils, crashDuration, vm, shakeOffDuration, cd, ld. */
export function create_kp(__recoveredScope) {
  return function kp(e, t = false) {
    let n = __recoveredScope.rider.locomotion === `walk` || !!__recoveredScope.R;
    n || !__recoveredScope.physics.grounded ? __recoveredScope.Op.set(0, 1, 0) : __recoveredScope.Op.copy(__recoveredScope.physics.normal);
    __recoveredScope.physics.forward(__recoveredScope.Ep);
    __recoveredScope.Ep.addScaledVector(__recoveredScope.Op, -__recoveredScope.Ep.dot(__recoveredScope.Op)).normalize();
    __recoveredScope.Dp.crossVectors(__recoveredScope.Ep, __recoveredScope.Op);
    __recoveredScope.Tp.makeBasis(__recoveredScope.Dp, __recoveredScope.Op, __recoveredScope.K.copy(__recoveredScope.Ep).negate());
    __recoveredScope.wp.setFromRotationMatrix(__recoveredScope.Tp);
    n || t || __recoveredScope.cg ? __recoveredScope.rider.root.quaternion.copy(__recoveredScope.wp) : __recoveredScope.rider.root.quaternion.slerp(__recoveredScope.wp, 1 - Math.exp(-e * 14));
    __recoveredScope.rider.root.position.copy(__recoveredScope.physics.pos);
    __recoveredScope.rider.root.position.y -= __recoveredScope.ud;
    __recoveredScope.W === `intro` && (__recoveredScope.rider.root.position.y += .035);
    __recoveredScope.cg && __recoveredScope.dg(e);
    let a = __recoveredScope.physics.speed,
      o = Math.atan2(a * __recoveredScope.physics.yawRate, __recoveredScope.Su);
    __recoveredScope.playerInput.brake && __recoveredScope.physics.grounded && __recoveredScope.rider.gear !== `ski` && (o -= .35);
    o = __recoveredScope.MathUtils.clamp(o, -1, 1);
    __recoveredScope.physics.grounded || (o *= .3);
    let s = o;
    __recoveredScope.physics.grounded && (s = Math.atan2(a * __recoveredScope.playerInput.steer * __recoveredScope.physics.maxTurnRate(a), __recoveredScope.Su), __recoveredScope.playerInput.brake && __recoveredScope.rider.gear !== `ski` && (s -= .35), s = __recoveredScope.MathUtils.clamp(s, -1, 1));
    let c = __recoveredScope.physics.crashed > 0,
      l = c ? __recoveredScope.crashDuration - __recoveredScope.physics.crashed : 0;
    __recoveredScope.rider.pose.tumble = 0;
    let u = !n && !c && __recoveredScope.physics.skate.on,
      d = __recoveredScope.playerInput.tuck && !u;
    if (__recoveredScope.rider.update(e, {
      crouch: c || __recoveredScope.physics.landingRecovery > 0 ? 1 : n ? 0 : __recoveredScope.vm > 0 ? 1 : d ? .9 : __recoveredScope.playerInput.brake ? .6 : .35 + __recoveredScope.physics.jumpCharge * .5,
      lean: n || c ? 0 : o,
      leanAim: n || c ? 0 : s,
      twist: n || c ? 0 : __recoveredScope.playerInput.steer * .5,
      roll: -__recoveredScope.physics.flip,
      fall: c ? {
        time: l,
        motion: __recoveredScope.physics.crashMotion
      } : null,
      shakeTime: __recoveredScope.physics.shakeOff > 0 ? __recoveredScope.shakeOffDuration - __recoveredScope.physics.shakeOff : null,
      protective: c ? 0 : __recoveredScope.physics.flip > 0 && (__recoveredScope.playerInput.tuck || __recoveredScope.physics.flip < __recoveredScope.physics.flipTarget) ? 1 : 0,
      air: !n && !__recoveredScope.physics.grounded,
      locomotion: __recoveredScope.rider.locomotion,
      speed: a,
      brake: __recoveredScope.W === `ride` && __recoveredScope.playerInput.brake && __recoveredScope.physics.grounded,
      tuck: __recoveredScope.W === `ride` && d,
      skate: u ? __recoveredScope.physics.skate : null,
      charge: __recoveredScope.physics.jumpCharge,
      slip: __recoveredScope.physics.slip,
      landing: __recoveredScope.physics.landingRecovery
    }), (c || __recoveredScope.physics.flip > 0 || __recoveredScope.physics.landingRecovery > 0) && __recoveredScope.rider.clearGround(__recoveredScope.physics.hf, c), __recoveredScope.rider.locomotion === `walk` && __recoveredScope.rider.model) {
      let e = __recoveredScope.MathUtils.smoothstep(a, 1.6, 3.6);
      __recoveredScope.cd.level = __recoveredScope.MathUtils.lerp(.75, 1.15, e);
      __recoveredScope.cd.rate = __recoveredScope.MathUtils.lerp(1, 1.12, e);
      __recoveredScope.ld.update(__recoveredScope.rider.model.bones.LeftFoot.bone, __recoveredScope.rider.model.bones.RightFoot.bone, __recoveredScope.Ep.x, __recoveredScope.Ep.z, a > .3);
    }
  };
}
