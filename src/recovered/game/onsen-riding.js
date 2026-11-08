/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Cg. Live dependencies: Vector3. */
export function create_Cg(__recoveredScope) {
  return {
    hips: new __recoveredScope.Vector3(),
    feet: [new __recoveredScope.Vector3(.17, 0, .6), new __recoveredScope.Vector3(-.17, 0, .6)],
    grips: [new __recoveredScope.Vector3(), new __recoveredScope.Vector3()],
    kneeOut: .3
  };
}
/* Recovered binding Ag. Live dependencies: rider, Og, Bu, Y, c. Writes: Og, kg. */
export function create_Ag(__recoveredScope) {
  return function Ag(e) {
    let t = ++__recoveredScope.Og;
    __recoveredScope.kg = null;
    __recoveredScope.rider.loadOutfit(e).then(n => {
      n && t === __recoveredScope.Og && (__recoveredScope.Bu.puff(__recoveredScope.rider.root.position), __recoveredScope.kg = {
        outfit: e,
        at: __recoveredScope.Y + __recoveredScope.c
      });
    });
  };
}
/* Recovered binding jg. Live dependencies: rider, F, physics, ug, Dg, Bu, Fg, Rg, Cg, Ag, Qu, I, hotSpringLocation. Writes: wg, W, Tg. */
export function create_jg(__recoveredScope) {
  return function jg() {
    __recoveredScope.wg = __recoveredScope.rider.locomotion === `walk`;
    __recoveredScope.F.gap(__recoveredScope.physics.pos);
    __recoveredScope.W = `soak`;
    __recoveredScope.ug();
    let e = __recoveredScope.rider.outfitModel(__recoveredScope.Dg);
    __recoveredScope.Bu.way && e && __recoveredScope.Fg.every(t => e.clips[t]) ? __recoveredScope.Rg(e) : __recoveredScope.rider.setLocomotion(`sit`, __recoveredScope.Cg);
    __recoveredScope.Ag(__recoveredScope.Dg);
    let {
      seat: t
    } = __recoveredScope.Bu;
    __recoveredScope.physics.reset(t.x, t.z, __recoveredScope.Qu(t.dx, t.dz));
    __recoveredScope.Tg = .35;
    __recoveredScope.I.prompt(`<kbd>A</kbd><kbd>D</kbd> look around · <kbd>E</kbd> get out`, `The stick looks around`);
    __recoveredScope.I.toast(`${__recoveredScope.hotSpringLocation.zh} · ${__recoveredScope.hotSpringLocation.en}`, 2e3);
  };
}
/* Recovered binding Mg. Live dependencies: Bu, physics, Qu, ug, rider, wg, Ag, kp, G, I, F. Writes: W, Lg. */
export function create_Mg(__recoveredScope) {
  return function Mg() {
    let e = __recoveredScope.Bu.exit;
    __recoveredScope.W = `ride`;
    __recoveredScope.Lg = null;
    __recoveredScope.physics.reset(e.x, e.z, __recoveredScope.Qu(e.dx, e.dz));
    __recoveredScope.ug();
    __recoveredScope.rider.setLocomotion(__recoveredScope.wg ? `walk` : `ride`);
    __recoveredScope.Ag(null);
    __recoveredScope.kp(0, true);
    __recoveredScope.G.set(e.dx, 0, e.dz);
    __recoveredScope.I.prompt(``);
    __recoveredScope.F.gap(__recoveredScope.physics.pos);
  };
}
/* Recovered binding Ng. Live dependencies: rider, Bu. */
export function create_Ng(__recoveredScope) {
  return function Ng() {
    let e = __recoveredScope.rider.build;
    return __recoveredScope.Bu.waterY - (e.seat + e.pivot + e.shoulder[1]) + .04;
  };
}
/* Recovered binding Pg. Live dependencies: rider, Bu, Cg, Ng, fg, Qu, cg, dg, Y. */
export function create_Pg(__recoveredScope) {
  return function Pg(e) {
    let t = __recoveredScope.rider.build,
      {
        seat: n
      } = __recoveredScope.Bu,
      r = t.seat + t.pivot + t.shoulder[1];
    __recoveredScope.Cg.grips[0].set(t.shoulder[0] + .28, r - .1, .12);
    __recoveredScope.Cg.grips[1].set(-t.shoulder[0] - .28, r - .1, .12);
    __recoveredScope.rider.root.position.set(n.x, __recoveredScope.Ng(), n.z);
    __recoveredScope.rider.root.quaternion.setFromAxisAngle(__recoveredScope.fg, __recoveredScope.Qu(n.dx, n.dz));
    __recoveredScope.cg && __recoveredScope.dg(e);
    __recoveredScope.rider.update(e, {
      crouch: 0,
      air: false,
      speed: 0,
      lean: Math.sin(__recoveredScope.Y * .5) * .04,
      twist: Math.sin(__recoveredScope.Y * .23) * .6
    });
  };
}
/* Recovered binding Rg. Live dependencies: Bu, Ig, rider. Writes: Lg. */
export function create_Rg(__recoveredScope) {
  return function Rg(e) {
    let {
        ledge: t,
        wade: n,
        sitDown: r
      } = e.clips,
      {
        way: i,
        seat: a
      } = __recoveredScope.Bu,
      o = 0,
      s = 0;
    for (let n = 0; n <= t.duration; n += 1 / 30) {
      let r = e.rise(t, n);
      r > s && (s = r, o = n);
    }
    let c = e.rise(t, t.duration),
      l = __recoveredScope.Ig.change + t.duration;
    __recoveredScope.Lg = {
      suit: e,
      ledge: t,
      wade: n,
      sitDown: r,
      top: o,
      rTop: s,
      rEnd: c,
      sunk: __recoveredScope.Bu.waterY + .04 - e.heightIn(r, r.duration, `LeftArm`),
      t: 0,
      walked: 0,
      wadeAt: l,
      wadeEnd: l + Math.hypot(a.x - i.water.x, a.z - i.water.z) / __recoveredScope.Ig.wade,
      y: i.water.y - c,
      floor: i.water.y,
      dx: i.dx,
      dz: i.dz,
      wet: false
    };
    __recoveredScope.rider.play(t, 0);
  };
}
/* Recovered binding zg. Live dependencies: Lg, Bu, MathUtils, rider, Ig, Bg, fg, Qu, cg, dg. */
export function create_zg(__recoveredScope) {
  return function zg(e) {
    let t = __recoveredScope.Lg,
      {
        way: n,
        seat: r
      } = __recoveredScope.Bu,
      i = __recoveredScope.MathUtils;
    t.t += e;
    let a = __recoveredScope.rider.root.position,
      o = t.t - __recoveredScope.Ig.change;
    if (o < 0) {
      a.copy(n.shore);
      __recoveredScope.rider.play(t.ledge, 0);
    } else if (o < t.ledge.duration) {
      let e = t.suit.rise(t.ledge, o);
      if (o <= t.top) {
        let r = i.clamp(e / t.rTop, 0, 1);
        a.lerpVectors(n.shore, n.stone, r);
        a.y = n.shore.y + r * (n.stone.y - n.shore.y - t.rTop);
      } else {
        let r = i.clamp((t.rTop - e) / (t.rTop - t.rEnd), 0, 1);
        a.lerpVectors(n.stone, n.water, i.smoothstep(r, 0, .45));
        a.y = i.lerp(n.stone.y - t.rTop, n.water.y - t.rEnd, r);
        t.wet ||= r > .3;
      }
      __recoveredScope.rider.play(t.ledge, o);
    } else if (t.t < t.wadeEnd + __recoveredScope.Ig.turn) {
      let o = i.smootherstep(t.t, t.wadeAt, t.wadeEnd),
        s = i.lerp(n.water.x, r.x, o),
        c = i.lerp(n.water.z, r.z, o),
        l = Math.hypot(s - a.x, c - a.z),
        u = t.t > t.wadeEnd;
      t.walked += u ? e * .35 : l / __recoveredScope.Ig.stride;
      let d = __recoveredScope.Bu.floorAt(s, c);
      d !== null && d < __recoveredScope.Bu.waterY - .1 && (t.floor = d);
      t.y += (t.floor - t.y) * (1 - Math.exp(-e * 8));
      a.set(s, t.y, c);
      let f = Math.atan2(t.dx, t.dz),
        p = u ? Math.atan2(r.dx, r.dz) : Math.atan2(r.x - n.water.x, r.z - n.water.z),
        m = f + (i.euclideanModulo(p - f + Math.PI, Math.PI * 2) - Math.PI) * (1 - Math.exp(-e * (u ? 5 : 3)));
      t.dx = Math.sin(m);
      t.dz = Math.cos(m);
      __recoveredScope.rider.play(t.wade, t.walked % t.wade.duration);
    } else {
      if (o = t.t - t.wadeEnd - __recoveredScope.Ig.turn, t.dx = r.dx, t.dz = r.dz, a.set(r.x, i.lerp(t.y, t.sunk, i.smoothstep(o, ...__recoveredScope.Ig.sink)), r.z), o >= t.sitDown.duration) return __recoveredScope.Bg();
      __recoveredScope.rider.play(t.sitDown, o);
    }
    __recoveredScope.rider.root.quaternion.setFromAxisAngle(__recoveredScope.fg, __recoveredScope.Qu(t.dx, t.dz));
    __recoveredScope.cg && __recoveredScope.dg(e);
    __recoveredScope.rider.update(e, {
      crouch: 0,
      air: false,
      speed: 0,
      lean: 0,
      twist: 0
    });
  };
}
/* Recovered binding Bg. Live dependencies: ug, rider, Cg, Pg. Writes: Lg. */
export function create_Bg(__recoveredScope) {
  return function Bg() {
    __recoveredScope.Lg = null;
    __recoveredScope.ug();
    __recoveredScope.rider.setLocomotion(`sit`, __recoveredScope.Cg);
    __recoveredScope.Pg(0);
  };
}
/* Recovered binding Vg. Live dependencies: Bu, Sf, playerInput, U, Lg, rider, Eg, xf, fg, Tg, K, q, camera, J. Writes: Tg, Eg. */
export function create_Vg(__recoveredScope) {
  return function Vg(e) {
    let {
        seat: t
      } = __recoveredScope.Bu,
      n = __recoveredScope.Sf();
    __recoveredScope.Tg += __recoveredScope.playerInput.steer * e * 1.1 + __recoveredScope.U.take().yaw;
    let r = __recoveredScope.Lg,
      i = r ? __recoveredScope.rider.root.position : t,
      a = r ? r.dx : t.dx,
      o = r ? r.dz : t.dz,
      s = r ? Math.max(__recoveredScope.Bu.waterY, i.y + .4) : __recoveredScope.Bu.waterY;
    __recoveredScope.Eg += (+!!r - __recoveredScope.Eg) * (1 - Math.exp(-e * 1.5));
    __recoveredScope.xf.set(-a, 0, -o).applyAxisAngle(__recoveredScope.fg, __recoveredScope.Tg + __recoveredScope.Eg * 1.1);
    __recoveredScope.K.set(i.x, s + 1.9 + n, i.z).addScaledVector(__recoveredScope.xf, 2.3 + n * 1.5 + __recoveredScope.Eg * .7);
    __recoveredScope.q.set(i.x + a * 1.4, s + .45 + __recoveredScope.Eg * .25, i.z + o * 1.4);
    __recoveredScope.camera.position.lerp(__recoveredScope.K, 1 - Math.exp(-e * 3));
    __recoveredScope.J.lerp(__recoveredScope.q, 1 - Math.exp(-e * 4));
    __recoveredScope.camera.lookAt(__recoveredScope.J);
    __recoveredScope.camera.fov = 55 + n * 15;
    __recoveredScope.camera.updateProjectionMatrix();
  };
}
