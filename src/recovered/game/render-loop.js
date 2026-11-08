/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding zp. Live dependencies: Np, R, W, rider, stopSpecialAction, readInputState, np, cableway, Ed, L, Pp, Fp, physics, playerInput, I, F, Wp, Rp, ad, K, mf, Vector3, $u, tm, Ep, Ip, jp, ud, Lp, id, kp, dd, Mp, updateFollowCamera, pf, B, Pd, yg, rg, og, xg, bg, hg, eg, rh, Q, vh, $, Lg, zg, Pg, Vg, Ph, Ah, Lh, X, im, Nf, Jf, Qf, Jg, od, tp, camera, ap, bp, xp, yd, bd, xd, Y, publishPlayerPosition, Zg, i_, o_, Vp, Rf, qf, Hf, zf, renderer, Lf, wd, Hu, Wu, kg, Bu, bm, Em, lh, eh, qh, Dh, Eh, sd, weather, MathUtils, gg, nearestLakeShore, lakes, forest, Iu, h_, Xu, af, Eu, postProcessor, scene, Dm, Z, Tm, Uu. Writes: Y, tp, np, Pp, hf, mf, pf, $h, ud, Xg, kg, gg. */
export function create_zp(__recoveredScope) {
  return function zp() {
    window.__SNOWFIELD_GAME__?.performanceProbe?.beginFrame(window.__SNOWFIELD_GAME__);
    let e = __recoveredScope.Np.getDelta(),
      t = Math.min(e, .05),
      n = Math.min(e, .25);
    if (__recoveredScope.Y += t, __recoveredScope.R && (__recoveredScope.W !== `ride` || __recoveredScope.rider.model !== __recoveredScope.R.model || __recoveredScope.rider.locomotion !== `act` ? __recoveredScope.stopSpecialAction() : (__recoveredScope.R.previous = __recoveredScope.R.time, __recoveredScope.R.time = (__recoveredScope.R.time + t) % __recoveredScope.R.clip.duration, __recoveredScope.rider.play(__recoveredScope.R.clip, __recoveredScope.R.time))), __recoveredScope.readInputState(), __recoveredScope.tp = __recoveredScope.np, __recoveredScope.np = false, __recoveredScope.cableway.update(t, n), __recoveredScope.Ed.isOpen && __recoveredScope.W !== `lift`) __recoveredScope.L.update(0, 0, false);else if (__recoveredScope.W === `ride`) {
      for (__recoveredScope.Pp += t; __recoveredScope.Pp >= __recoveredScope.Fp;) {
        __recoveredScope.rider.locomotion === `walk` || __recoveredScope.R ? __recoveredScope.physics.stepWalk(__recoveredScope.Fp, __recoveredScope.playerInput) : __recoveredScope.physics.step(__recoveredScope.Fp, __recoveredScope.playerInput);
        __recoveredScope.Pp -= __recoveredScope.Fp;
      }
      for (let e of __recoveredScope.physics.events.splice(0)) {
        if (e.type === `crash` && (__recoveredScope.hf++, __recoveredScope.I.toast(e.reason === `tree` ? `Tree!` : `Wipeout!`), __recoveredScope.F.gap(__recoveredScope.physics.pos)), e.type === `respawn` && __recoveredScope.Wp(), e.type === `recovered` && (__recoveredScope.F.gap(__recoveredScope.physics.pos), __recoveredScope.Rp.copy(__recoveredScope.physics.pos).y += 1.05, __recoveredScope.ad.emit(__recoveredScope.Rp, __recoveredScope.K.set(0, .4, 0), 12, .65)), e.type === `air`) {
          let t = [];
          e.frontRolls > 0 && t.push(`Front Roll ×${e.frontRolls} (${e.frontRolls * 360}°)`);
          e.spin >= 180 && t.push(`${e.spin}°`);
          __recoveredScope.I.toast(t.length ? `${t.join(` + `)}!` : `Air ${e.time.toFixed(1)}s`);
        }
        e.type === `land` && __recoveredScope.physics.powder > .3 && (__recoveredScope.Rp.copy(__recoveredScope.physics.vel).multiplyScalar(.15), __recoveredScope.ad.emit(__recoveredScope.physics.pos, __recoveredScope.Rp, Math.round(Math.min(40, 10 + e.impact * 4) * __recoveredScope.physics.powder), 3));
      }
      !__recoveredScope.mf && __recoveredScope.physics.pos.distanceTo(new __recoveredScope.Vector3(__recoveredScope.$u.x, __recoveredScope.physics.pos.y, __recoveredScope.$u.z)) > 3 && (__recoveredScope.mf = true);
      __recoveredScope.mf && (__recoveredScope.pf += t);
      __recoveredScope.tm();
      __recoveredScope.physics.forward(__recoveredScope.Ep);
      __recoveredScope.Ip.set(-__recoveredScope.Ep.z, 0, __recoveredScope.Ep.x);
      let e = __recoveredScope.rider.locomotion !== `walk` && !__recoveredScope.R && __recoveredScope.physics.grounded && __recoveredScope.physics.crashed <= 0;
      if (__recoveredScope.jp(t, e), e) {
        __recoveredScope.rider.gear === `ski` ? __recoveredScope.F.add(__recoveredScope.physics.pos, __recoveredScope.Ip, .09, __recoveredScope.physics.powder > .5 ? .42 + __recoveredScope.ud : 0, .25) : __recoveredScope.F.add(__recoveredScope.physics.pos, __recoveredScope.Ip, .28, __recoveredScope.physics.powder > .5 ? .36 + __recoveredScope.ud : 0);
        let e = __recoveredScope.physics.slip * .6 + (__recoveredScope.playerInput.brake ? 3 : 0) + Math.abs(__recoveredScope.physics.yawRate) * __recoveredScope.physics.speed * .08,
          n = Math.min(6, Math.floor(e * t * 22 + Math.random()));
        n > 0 && __recoveredScope.physics.speed > 2 && (__recoveredScope.Lp.copy(__recoveredScope.physics.pos).addScaledVector(__recoveredScope.Ep, -.5), __recoveredScope.Rp.copy(__recoveredScope.physics.vel).multiplyScalar(.35).addScaledVector(__recoveredScope.Ip, -Math.sign(__recoveredScope.physics.yawRate || 1) * 1.5), __recoveredScope.id.emit(__recoveredScope.Lp, __recoveredScope.Rp, n, 2.2));
        let r = __recoveredScope.physics.powder * (Math.max(0, __recoveredScope.physics.speed - 3) * .1 + e * .6),
          i = Math.min(5, Math.floor(r * t * 12 + Math.random() * .6));
        i > 0 && (__recoveredScope.Lp.copy(__recoveredScope.physics.pos).addScaledVector(__recoveredScope.Ep, -.4), __recoveredScope.Rp.copy(__recoveredScope.physics.vel).multiplyScalar(.25).addScaledVector(__recoveredScope.Ip, -Math.sign(__recoveredScope.physics.yawRate || 1) * 1.2), __recoveredScope.Rp.y -= .4, __recoveredScope.ad.emit(__recoveredScope.Lp, __recoveredScope.Rp, i, 1.4));
      } else __recoveredScope.physics.grounded || __recoveredScope.F.gap(__recoveredScope.physics.pos);
      __recoveredScope.kp(t);
      __recoveredScope.physics.forward(__recoveredScope.Ep);
      for (let e of __recoveredScope.dd.update(t, __recoveredScope.R, __recoveredScope.rider, __recoveredScope.Ep)) {
        e === `voice` && __recoveredScope.L.fireballShout();
        e === `release` && __recoveredScope.L.fireballLaunch();
      }
      __recoveredScope.Mp();
      __recoveredScope.updateFollowCamera(t);
      __recoveredScope.I.update(__recoveredScope.physics, __recoveredScope.pf);
      __recoveredScope.L.update(__recoveredScope.physics.speed, __recoveredScope.physics.slip + (__recoveredScope.playerInput.brake ? 4 : 0), __recoveredScope.physics.grounded && __recoveredScope.rider.locomotion !== `walk` && !__recoveredScope.R);
    } else if (__recoveredScope.W === `drive`) {
      let e = __recoveredScope.B.phys;
      for (__recoveredScope.Pp += t; __recoveredScope.Pp >= __recoveredScope.Fp;) {
        e.step(__recoveredScope.Fp, __recoveredScope.Pd);
        __recoveredScope.Pp -= __recoveredScope.Fp;
      }
      for (let t of e.events.splice(0)) {
        t.type === `crash` && __recoveredScope.I.toast(t.reason === `tree` ? `Tree!` : t.reason === `ground` ? `Bump!` : `Crunch!`);
        t.type === `landed` && __recoveredScope.I.toast(`Landed`, 1200);
        (t.type === `catch` || t.type === `release`) && __recoveredScope.yg(t);
      }
      __recoveredScope.B.model.update(t, e);
      __recoveredScope.rg();
      __recoveredScope.B.model.saddle && __recoveredScope.og(t);
      __recoveredScope.xg();
      __recoveredScope.B.floats && __recoveredScope.bg(t);
      __recoveredScope.mf && (__recoveredScope.pf += t);
      __recoveredScope.hg(t);
      __recoveredScope.I.update(__recoveredScope.physics, __recoveredScope.pf);
      __recoveredScope.$h += t;
      __recoveredScope.I.prompt(...__recoveredScope.eg(__recoveredScope.B));
      __recoveredScope.L.update(e.speed * __recoveredScope.B.wind + (__recoveredScope.B.flies ? e.spool * 12 : 0), 0, false, __recoveredScope.B.floats ? null : {
        kind: __recoveredScope.B.name,
        speed: Math.abs(e.vel.dot(e.forward(__recoveredScope.Ep))),
        spool: e.spool,
        load: e.load,
        throttle: __recoveredScope.Pd.throttle || __recoveredScope.Pd.reverse || __recoveredScope.B.flies && __recoveredScope.Pd.climb
      });
    } else if (__recoveredScope.W === `snowMonster`) {
      __recoveredScope.rh(t);
      __recoveredScope.mf && (__recoveredScope.pf += t);
      __recoveredScope.I.update(__recoveredScope.physics, __recoveredScope.pf);
      __recoveredScope.L.update(__recoveredScope.Q.speed * .5, 0, !1);
    } else if (__recoveredScope.W === `horse`) {
      __recoveredScope.vh(t);
      __recoveredScope.mf && (__recoveredScope.pf += t);
      __recoveredScope.I.update(__recoveredScope.physics, __recoveredScope.pf);
      __recoveredScope.L.update(__recoveredScope.$.speed * .6, 0, !1);
    } else if (__recoveredScope.W === `soak`) {
      __recoveredScope.Lg ? __recoveredScope.zg(t) : __recoveredScope.Pg(t);
      __recoveredScope.Vg(t);
      __recoveredScope.mf && (__recoveredScope.pf += t);
      __recoveredScope.I.update(__recoveredScope.physics, __recoveredScope.pf);
      __recoveredScope.L.update(0, 0, !1);
    } else if (__recoveredScope.W === `swing`) {
      __recoveredScope.Ph(t);
      __recoveredScope.Ah && __recoveredScope.Lh(t);
      __recoveredScope.mf && (__recoveredScope.pf += t);
      __recoveredScope.I.update(__recoveredScope.physics, __recoveredScope.pf);
      __recoveredScope.L.update(__recoveredScope.Ah ? Math.abs(__recoveredScope.Ah.seat.rate) * __recoveredScope.Ah.seat.length : 0, 0, !1);
    } else if (__recoveredScope.W === `lift`) {
      let e = `${__recoveredScope.X.ride.label} ↑`;
      __recoveredScope.im(__recoveredScope.X.system ? n : t);
      __recoveredScope.mf && (__recoveredScope.pf += t);
      __recoveredScope.I.update(__recoveredScope.physics, __recoveredScope.pf, __recoveredScope.W === `lift` ? e : null);
      __recoveredScope.L.update(0, 0, false);
    } else {
      __recoveredScope.kp(t);
      __recoveredScope.W === `intro` ? __recoveredScope.Nf(t) : __recoveredScope.W === `title` ? __recoveredScope.Jf(t) : __recoveredScope.W === `swoop` ? __recoveredScope.Qf(t) : __recoveredScope.W === `arrive` && __recoveredScope.Jg(t);
      __recoveredScope.L.update(0, 0, !1);
    }
    __recoveredScope.W !== `ride` && (__recoveredScope.ud = 0, __recoveredScope.od.set(0));
    __recoveredScope.tp && !__recoveredScope.np && __recoveredScope.W !== `ride` && (__recoveredScope.camera.near = __recoveredScope.ap, __recoveredScope.camera.updateProjectionMatrix());
    __recoveredScope.bp && !__recoveredScope.np && __recoveredScope.xp(true);
    let r = __recoveredScope.W === `ride` || __recoveredScope.W === `lift` || __recoveredScope.W === `drive` || __recoveredScope.W === `horse` || __recoveredScope.W === `snowMonster` || __recoveredScope.W === `soak` || __recoveredScope.W === `swing`;
    if (r && !__recoveredScope.Ed.isOpen) {
      let e = __recoveredScope.yd.update(t, __recoveredScope.bd());
      e?.type === `arrived` && __recoveredScope.I.toast(`Arrived · ${e.name}`, 2600);
    }
    __recoveredScope.xd.group.visible = r;
    r && __recoveredScope.xd.update(__recoveredScope.yd, __recoveredScope.Y, __recoveredScope.W === `lift`, __recoveredScope.physics.pos);
    r && (__recoveredScope.Xg -= t) <= 0 && (__recoveredScope.Xg = .25, __recoveredScope.publishPlayerPosition(__recoveredScope.Zg()));
    __recoveredScope.i_ && __recoveredScope.o_(t);
    __recoveredScope.Vp();
    __recoveredScope.Rf.update(t, __recoveredScope.Y, __recoveredScope.camera, __recoveredScope.qf * .45, __recoveredScope.Hf);
    __recoveredScope.zf.update(t, __recoveredScope.Y, __recoveredScope.camera, __recoveredScope.qf, __recoveredScope.renderer.getPixelRatio());
    __recoveredScope.Lf.visible && __recoveredScope.Lf.update(__recoveredScope.Y);
    for (let e of __recoveredScope.wd) e !== __recoveredScope.B && e.phys && (e.floats || e.phys.spool > 0) && (e.phys.coast(t), e.model.update(t, e.phys));
    let i = __recoveredScope.wd.filter(e => e.floats && e.phys).map(e => e.model.waterline(e.lake.level));
    __recoveredScope.Hu.update(__recoveredScope.Y, i);
    __recoveredScope.Wu.update(t, i);
    __recoveredScope.id.update(t);
    __recoveredScope.ad.update(t);
    __recoveredScope.kg && __recoveredScope.Y >= __recoveredScope.kg.at && (__recoveredScope.rider.wear(__recoveredScope.kg.outfit), __recoveredScope.kg = null);
    __recoveredScope.Bu.update(t, __recoveredScope.Y, __recoveredScope.W === `soak` && (!__recoveredScope.Lg || __recoveredScope.Lg.wet) ? __recoveredScope.rider.root.position : null);
    __recoveredScope.bm(t);
    __recoveredScope.Em(t);
    __recoveredScope.W !== `horse` && __recoveredScope.lh(t);
    __recoveredScope.W !== `snowMonster` && __recoveredScope.eh(t);
    __recoveredScope.qh(t);
    __recoveredScope.Dh && __recoveredScope.W !== `swing` && __recoveredScope.Dh.update(t);
    __recoveredScope.Eh(t);
    __recoveredScope.sd.update(t, __recoveredScope.camera, __recoveredScope.weather);
    let {
        fall: a
      } = __recoveredScope.Bu,
      o = a ? 1 - __recoveredScope.MathUtils.smoothstep(Math.hypot(__recoveredScope.physics.pos.x - a.x, __recoveredScope.physics.pos.z - a.z), 3, 30) : 0;
    __recoveredScope.gg = Math.max(0, __recoveredScope.gg - t * 1.5);
    let s = __recoveredScope.W === `ride` ? __recoveredScope.nearestLakeShore(__recoveredScope.lakes, __recoveredScope.physics.pos.x, __recoveredScope.physics.pos.z, 25) : null,
      c = __recoveredScope.B?.floats ? .3 + __recoveredScope.gg : s ? .3 * (1 - __recoveredScope.MathUtils.smoothstep(Math.abs(s.d), 2, 25)) : 0;
    __recoveredScope.L.setWater(Math.max(o, c));
    __recoveredScope.forest.update(__recoveredScope.camera.position);
    __recoveredScope.Iu.update(__recoveredScope.camera.position);
    __recoveredScope.h_.cam && __recoveredScope.h_.cam(__recoveredScope.camera, __recoveredScope.physics);
    __recoveredScope.Xu.position.copy(__recoveredScope.camera.position);
    __recoveredScope.Xu.material.uniforms.uTime.value = __recoveredScope.Y;
    __recoveredScope.weather.update(t, {
      time: __recoveredScope.Y,
      camera: __recoveredScope.camera,
      viewHeight: __recoveredScope.renderer.domElement.height,
      focus: __recoveredScope.physics.pos
    });
    __recoveredScope.af();
    __recoveredScope.camera.updateMatrixWorld();
    __recoveredScope.cableway.cull(__recoveredScope.camera, __recoveredScope.Eu.target.position, 270);
    window.__SNOWFIELD_GAME__?.experienceUpdate?.(t, __recoveredScope.Y);
    __recoveredScope.postProcessor.render(__recoveredScope.scene, __recoveredScope.camera, __recoveredScope.Y, [__recoveredScope.Xu, __recoveredScope.weather.snowfall.points, __recoveredScope.id.points, __recoveredScope.Dm.points, __recoveredScope.Z.spray.points, ...(__recoveredScope.Tm ? [__recoveredScope.Tm.spray.points] : []), ...(__recoveredScope.$ ? __recoveredScope.$.sprays : []), __recoveredScope.zf.points, __recoveredScope.Uu, __recoveredScope.Wu.group, ...__recoveredScope.forest.farMeshes, ...__recoveredScope.xd.hidden, ...(window.__SNOWFIELD_GAME__?.experienceOutlineExclusions || [])]);
    window.__SNOWFIELD_GAME__?.performanceProbe?.endFrame(window.__SNOWFIELD_GAME__);
  };
}
/* Recovered binding Bp. Live dependencies: graphicsController, zp. */
export function create_Bp(__recoveredScope) {
  return function Bp(e) {
    requestAnimationFrame(Bp);
    __recoveredScope.graphicsController.shouldRender(e) && __recoveredScope.zp();
  };
}
