/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding tn. Live dependencies: Xt, MathUtils, Zt, Qt, $t, en, nn. */
export function create_tn(__recoveredScope) {
  return class {
    constructor(e) {
      this.racks = e.map(e => ({
        root: e,
        wheels: e.getObjectByName(`placeholder`).userData.wheels
      }));
      this.spin = new Map();
    }
    near(e, t) {
      let n = null;
      for (let r of this.racks) {
        let {
          wheels: i,
          root: a
        } = r;
        if (!i.length) continue;
        let o = Math.cos(a.rotation.y),
          s = Math.sin(a.rotation.y),
          c = e.x - a.position.x,
          l = e.z - a.position.z,
          u = c * o - l * s,
          d = c * s + l * o,
          f = i[0].r,
          p = Math.abs(d) - f;
        if (p > __recoveredScope.Xt || u < i[0].x - f || u > i.at(-1).x + f || n && p >= n.gap) continue;
        let m = i.reduce((e, t) => Math.abs(t.x - u) < Math.abs(e.x - u) ? t : e),
          h = Math.sign(d) || 1,
          g = -s * h,
          _ = -o * h;
        t.x * g + t.z * _ < -.3 || (n = {
          rack: r,
          wheel: m,
          side: h,
          left: t.z * g - t.x * _ > 0,
          gap: p,
          along: u
        });
      }
      return n;
    }
    handAt(e, t, n) {
      let {
          root: r,
          wheels: i
        } = e.rack,
        a = __recoveredScope.MathUtils.clamp(t, i[0].x, i.at(-1).x),
        o = e.side * (i[0].r + .03),
        s = Math.cos(r.rotation.y),
        c = Math.sin(r.rotation.y);
      return n.set(r.position.x + a * s + o * c, r.position.y + __recoveredScope.Zt, r.position.z - a * c + o * s);
    }
    wheelAt(e, t) {
      return e.rack.wheels.reduce((e, n) => Math.abs(n.x - t) < Math.abs(e.x - t) ? n : e);
    }
    push(e, {
      rate: t = 0,
      add: n = 0
    }) {
      let r = this.spin.get(e) ?? 0;
      this.spin.set(e, Math.min(__recoveredScope.Qt, Math.max(r + n, t)));
    }
    update(e, t) {
      let n = 0;
      for (let [r, i] of this.spin) {
        let a = Math.max(0, i - (i * __recoveredScope.$t + __recoveredScope.en) * e);
        r.mesh.rotation.y -= (i + a) / 2 * e;
        a > 0 ? this.spin.set(r, a) : this.spin.delete(r);
        r.mesh.getWorldPosition(__recoveredScope.nn);
        n += Math.min(1, a / 3) * (1 - __recoveredScope.MathUtils.smoothstep(Math.hypot(__recoveredScope.nn.x - t.x, __recoveredScope.nn.z - t.z), 4, 30));
      }
      return 1 - Math.exp(-1.2 * n);
    }
  };
}
/* Recovered binding Kh. Live dependencies: zh. Writes: Vh, Bh, Hh. */
export function create_Kh(__recoveredScope) {
  return function Kh(e) {
    __recoveredScope.Vh = e.wheel;
    __recoveredScope.Bh = __recoveredScope.zh;
    __recoveredScope.Hh = false;
  };
}
/* Recovered binding qh. Live dependencies: Bh, W, rider, physics, Rh, Wh, Y, Uh, I, Vh, zh, Gh, Hh, L. Writes: Bh, Uh, Hh. */
export function create_qh(__recoveredScope) {
  return function qh(e) {
    __recoveredScope.Bh = Math.max(0, __recoveredScope.Bh - e);
    let t = __recoveredScope.W === `ride` && __recoveredScope.rider.locomotion === `walk` && __recoveredScope.physics.grounded && __recoveredScope.physics.crashed <= 0 && __recoveredScope.rider.throwT === null && !__recoveredScope.rider.reach ? __recoveredScope.Rh.near(__recoveredScope.physics.pos, __recoveredScope.physics.forward(__recoveredScope.Wh)) : null;
    if (t && __recoveredScope.Y - __recoveredScope.Uh > 60 && __recoveredScope.I.toast(`转经轮 · Prayer wheels`, 2e3), t && (__recoveredScope.Uh = __recoveredScope.Y), (!t || t.wheel.mesh.parent !== __recoveredScope.Vh?.mesh.parent) && (__recoveredScope.Bh = 0), t) {
      let e = t.rack.root.rotation.y,
        n = __recoveredScope.physics.vel.x * Math.cos(e) - __recoveredScope.physics.vel.z * Math.sin(e),
        r = null,
        i = null;
      __recoveredScope.Bh > 0 ? (r = __recoveredScope.Vh.x - t.side * .15 * (1 - 2 * __recoveredScope.Bh / __recoveredScope.zh), i = __recoveredScope.Vh) : Math.abs(n) > .4 && (r = t.along + Math.sign(n) * .2, i = __recoveredScope.Rh.wheelAt(t, r));
      i && (__recoveredScope.rider.reach = __recoveredScope.Rh.handAt(t, r, __recoveredScope.Gh), __recoveredScope.rider.reachLeft = t.left, __recoveredScope.rider.reachW > .6 && __recoveredScope.Bh > 0 && !__recoveredScope.Hh ? (__recoveredScope.Rh.push(i, {
        add: 6
      }), __recoveredScope.Hh = true) : __recoveredScope.rider.reachW > .6 && __recoveredScope.Bh <= 0 && __recoveredScope.Rh.push(i, {
        rate: Math.abs(n) / i.r
      }));
    }
    __recoveredScope.L.setMantra(__recoveredScope.Rh.update(e, __recoveredScope.physics.pos));
  };
}
