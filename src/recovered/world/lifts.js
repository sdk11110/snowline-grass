/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding liftEndpointPositions. Live dependencies: . */
export function create_liftEndpointPositions(__recoveredScope) {
  return function liftEndpointPositions(e, t = 1) {
    let n = e => `${e[0]},${e[1]}`,
      r = new Map();
    for (let t of e) if (t.type !== `magic_carpet`) for (let e of [t.points[0], t.points[t.points.length - 1]]) r.set(n(e), (r.get(n(e)) || 0) + 1);
    let i = (e, i) => {
      if (r.get(n(e)) < 2) return e;
      let a = i[0] - e[0],
        o = i[1] - e[1],
        s = Math.hypot(a, o),
        c = 20 * t;
      return [e[0] + a / s * c, e[1] + o / s * c];
    };
    return e.map(e => {
      if (e.type === `magic_carpet`) return null;
      let t = e.points,
        n = t.length - 1;
      return [i(t[0], t[1]), i(t[n], t[n - 1])];
    });
  };
}
/* Recovered binding Po. Live dependencies: . */
export function create_Po(__recoveredScope) {
  return function Po(e, t) {
    let n = t.find(e => e.name === `5号索道` && e.type === `chair_lift`);
    if (n) for (let [t, r] of [n.points[0], n.points.at(-1)]) {
      let n = e.heightAt(t, r),
        i = Math.max(0, Math.floor((t - 26 - e.x0) / e.step)),
        a = Math.min(e.cells, Math.ceil((t + 26 - e.x0) / e.step)),
        o = Math.max(0, Math.floor((r - 26 - e.z0) / e.step)),
        s = Math.min(e.cells, Math.ceil((r + 26 - e.z0) / e.step));
      for (let c = o; c <= s; c++) for (let o = i; o <= a; o++) {
        let i = Math.hypot(e.x0 + o * e.step - t, e.z0 + c * e.step - r),
          a = Math.max(0, Math.min(1, (i - 13) / 13)),
          s = 1 - a * a * (3 - 2 * a),
          l = c * e.verts + o;
        e.h[l] += (n - e.h[l]) * s;
      }
    }
  };
}
/* Recovered binding Yo. Live dependencies: . */
export function create_Yo(__recoveredScope) {
  return (e, t) => (n, r, i) => e.distAt(n, r) >= t + 5 && [-4, 4].every(a => e.distAt(n + i.x * a, r + i.z * a) >= t + 2);
}
/* Recovered binding Xo. Live dependencies: Vector3. */
export function create_Xo(__recoveredScope) {
  return function Xo(e, t, n, r, i = new __recoveredScope.Vector3()) {
    return i.set(e.P.x + e.out.x * t + e.lat.x * n, r, e.P.z + e.out.z * t + e.lat.z * n);
  };
}
/* Recovered binding Zo. Live dependencies: Vector3, Io, Ro, es, Ho, Uo, Bo, Wo, Vo, zo, $o, Qo, Ko, Lo. */
export function create_Zo(__recoveredScope) {
  return function Zo(e, t, n, {
    scale: r,
    stationScale: i,
    offPiste: a,
    approach: o
  }) {
    let c = new __recoveredScope.Vector3(n.x - t.x, 0, n.z - t.z).normalize(),
      l = new __recoveredScope.Vector3(-c.z, 0, c.x),
      u = Math.hypot(n.x - t.x, n.z - t.z),
      d = Math.abs(r - i) < 1e-9,
      f = __recoveredScope.Io.mouth * i,
      p = d ? {
        u: __recoveredScope.Io.wheel.u * r,
        x: __recoveredScope.Io.wheel.x * r,
        r: __recoveredScope.Io.wheel.r * r
      } : {
        u: f + 6 * r,
        x: 0,
        r: __recoveredScope.Ro * r
      },
      m = {
        P: t,
        out: c,
        lat: l,
        wheel: p,
        mouth: Math.max(f, p.u)
      },
      h = n => e.heightAt(t.x + c.x * n, t.z + c.z * n),
      g = o?.get(__recoveredScope.es(t));
    if (g) Object.assign(m, g);else {
      let e = ([e, n, r], i) => {
        for (let o = 0; o <= Math.max(e - n, r - e); o += 1) for (let s of [i + e + o, i + e - o]) if (!(s < i + n || s > i + r) && a(t.x + c.x * s, t.z + c.z * s, l)) return s;
        return i + e;
      };
      m.u1 = e(__recoveredScope.Ho, m.mouth);
      m.u2 = e(__recoveredScope.Uo, m.u1);
      m.a1 = Math.sign(h(m.u2 + 80) - t.y) * __recoveredScope.Bo;
      let n = 1 / 0;
      for (let e = 0; e <= (d ? __recoveredScope.Wo : 0); e += .5) {
        m.base = t.y + e;
        for (let t = m.a1 - 2 * __recoveredScope.Vo; t <= m.a1 + 2 * __recoveredScope.Vo + 1e-9; t += __recoveredScope.zo(.25)) {
          let a = __recoveredScope.$o(m, t, r, i),
            o = 10 * e * e;
          for (let e = m.mouth; e <= Math.min(m.u2 + __recoveredScope.Qo, u / 2); e += 5) {
            let t = h(e),
              n = a(e);
            o += Math.max(0, t - (n - __recoveredScope.Ko * r)) ** 2 + .2 * Math.max(0, n - t - 25 * r) ** 2;
          }
          o < n - 1e-9 && (n = o, m.a3 = t, m.fill = e);
        }
      }
      m.base = t.y + m.fill;
    }
    return m.rope = m.base + __recoveredScope.Io.floor * i + __recoveredScope.Lo * r, m.ropeAt = __recoveredScope.$o(m, m.a3, r, i), m.y1 = m.ropeAt(m.u1), m.y2 = m.ropeAt(m.u2), m;
  };
}
/* Recovered binding $o. Live dependencies: Io, Lo. */
export function create_Dollaro(__recoveredScope) {
  return function $o(e, t, n, r) {
    let i = e.base + __recoveredScope.Io.floor * r + __recoveredScope.Lo * n,
      a = Math.tan(e.a1),
      o = Math.tan((e.a1 + t) / 2),
      s = Math.tan(t),
      c = i + (e.u1 - e.mouth) * a,
      l = c + (e.u2 - e.u1) * o;
    return t => t <= e.mouth ? i : t <= e.u1 ? i + (t - e.mouth) * a : t <= e.u2 ? c + (t - e.u1) * o : l + (t - e.u2) * s;
  };
}
/* Recovered binding es. Live dependencies: . */
export function create_es(__recoveredScope) {
  return e => `${e.x.toFixed(1)},${e.z.toFixed(1)}`;
}
/* Recovered binding ts. Live dependencies: Zo, Vector3, Go, Qo, Ro, MathUtils, Ko, Vo, qo, rs, Jo. */
export function create_ts(__recoveredScope) {
  return function ts(e, t, n, {
    scale: r = 1,
    stationScale: i = r,
    offPiste: a = () => true,
    approach: o = null
  } = {}) {
    let c = {
        scale: r,
        stationScale: i,
        offPiste: a,
        approach: o
      },
      l = [__recoveredScope.Zo(e, t, n, c), __recoveredScope.Zo(e, n, t, c)],
      [u, d] = l,
      f = Math.hypot(n.x - t.x, n.z - t.z),
      p = u.out,
      m = u.lat,
      h = (e, n) => new __recoveredScope.Vector3(t.x + p.x * e, n, t.z + p.z * e),
      g = n => e.heightAt(t.x + p.x * n, t.z + p.z * n),
      _ = u.u2,
      v = f - d.u2,
      y = [_];
    for (let e = _ + __recoveredScope.Go[1]; e <= v - __recoveredScope.Go[1]; e += 2) a(t.x + p.x * e, t.z + p.z * e, m) && y.push(e);
    y.push(v);
    let b = e => (e / __recoveredScope.Go[0] - 1) ** 2 + .3 + (e > 250 ? ((e - 250) / 50) ** 2 : 0),
      x = y.map(() => 1 / 0),
      S = y.map(() => -1);
    x[0] = 0;
    for (let e = 1; e < y.length; e++) for (let t = e - 1; t >= 0; t--) {
      let n = y[e] - y[t];
      if (n > __recoveredScope.Go[2]) break;
      let r = x[t] + b(n);
      r < x[e] && (x[e] = r, S[e] = t);
    }
    let C = [];
    for (let e = y.length - 1; e >= 0 && (C.unshift(y[e]), e !== 0); e = S[e]);
    let w = t => {
        let n = [h(u.mouth, u.rope), h(u.u1, u.y1)];
        for (let e of t) {
          let t = f - e,
            i = e <= u.u2 + __recoveredScope.Qo && e <= t ? u.ropeAt(e) : t <= d.u2 + __recoveredScope.Qo ? d.ropeAt(t) : g(e) + 12 * r;
          n.push(h(e, i));
        }
        n.push(h(f - d.u1, d.y1), h(f - d.mouth, d.rope));
        let i = n.length,
          a = i - 4,
          o = (e, t) => Math.hypot(t.x - e.x, t.z - e.z),
          s = [-4.3, -3, -1.7, 1.7, __recoveredScope.Ro, 4.3].map(e => e * r),
          c = () => {
            for (let t = 2; t < i - 3; t++) {
              let a = n[t],
                c = n[t + 1],
                l = Math.ceil(o(a, c) / (2 * r));
              for (let n = 1; n < l; n++) {
                let o = n / l,
                  u = -1 / 0;
                for (let t of s) {
                  let n = __recoveredScope.MathUtils.lerp(a.x, c.x, o) + m.x * t,
                    i = __recoveredScope.MathUtils.lerp(a.z, c.z, o) + m.z * t;
                  u = Math.max(u, e.heightAt(n, i) + __recoveredScope.Ko * r - __recoveredScope.MathUtils.lerp(a.y, c.y, o));
                }
                u <= 0 || (t === 2 ? o > .1 && (c.y += u / o) : t + 1 === i - 3 ? o < .9 && (a.y += u / (1 - o)) : (a.y += u, c.y += u));
              }
            }
            for (let t = 3; t <= a; t++) {
              let i = n[t];
              i.y = Math.max(i.y, e.heightAt(i.x, i.z) + 6 * r);
            }
          },
          l = (e, t, r) => {
            let i = n[e],
              a = n[t],
              s = o(a, i),
              c = Math.atan2(a.y - n[r].y, o(n[r], a));
            i.y = __recoveredScope.MathUtils.clamp(i.y, a.y + s * Math.tan(c - __recoveredScope.Vo), a.y + s * Math.tan(c + __recoveredScope.Vo));
          };
        if (3 <= a) for (let t = 0; t < 120; t++) {
          for (let t = 3; t <= a; t++) {
            let i = n[t - 1],
              a = n[t],
              s = n[t + 1],
              c = o(i, a) / (o(i, a) + o(a, s));
            a.y = Math.min(i.y + (s.y - i.y) * c, e.heightAt(a.x, a.z) + __recoveredScope.qo * r);
          }
          c();
          l(3, 2, 1);
          l(a, i - 3, i - 2);
        }
        return c(), n;
      },
      T = w(C);
    for (let e = 0; e < 6; e++) {
      let e = false;
      for (let n = 3; n < T.length - 3 && !e; n++) {
        if (Math.abs(__recoveredScope.rs(T, n)) <= __recoveredScope.Jo) continue;
        let r = n - 2,
          [i, o] = C[r] - C[r - 1] >= C[r + 1] - C[r] ? [C[r - 1], C[r]] : [C[r], C[r + 1]];
        if (!(o - i >= 3 * __recoveredScope.Go[1])) continue;
        let s = (i + o) / 2;
        for (let n = 0; n <= (o - i) / 6 && !e; n += 2) for (let o of [s + n, s - n]) !e && a(t.x + p.x * o, t.z + p.z * o, m) && (C.splice(i === C[r] ? r + 1 : r, 0, o), e = true);
      }
      if (!e) break;
      T = w(C);
    }
    return {
      supports: T,
      ends: l,
      side: m,
      dir: p,
      length: f
    };
  };
}
/* Recovered binding ns. Live dependencies: . */
export function create_ns(__recoveredScope) {
  return function ns(e, t) {
    let n = e[t - 1],
      r = e[t],
      i = e[t + 1],
      a = (e, t) => Math.atan2(t.y - e.y, Math.hypot(t.x - e.x, t.z - e.z));
    return -(a(n, r) + a(r, i)) / 2;
  };
}
/* Recovered binding rs. Live dependencies: . */
export function create_rs(__recoveredScope) {
  return function rs(e, t) {
    let n = e[t - 1],
      r = e[t],
      i = e[t + 1],
      a = (e, t) => Math.atan2(t.y - e.y, Math.hypot(t.x - e.x, t.z - e.z));
    return a(r, i) - a(n, r);
  };
}
/* Recovered binding is. Live dependencies: Ro, Xo. */
export function create_is(__recoveredScope) {
  return function is(e, t = 1) {
    let {
        supports: n,
        side: r
      } = e,
      i = e.ends[0].P.y <= e.ends[1].P.y,
      [a, o] = i ? e.ends : [e.ends[1], e.ends[0]],
      s = i ? n.slice(1, -1) : n.slice(1, -1).reverse(),
      c = i ? r : r.clone().negate(),
      l = __recoveredScope.Ro * t,
      u = (e, t) => e.wheel.x + t * (e === a ? 1 : -1) * e.wheel.r,
      d = e => {
        let t = [],
          n = t => {
            let n = u(t, e);
            return [__recoveredScope.Xo(t, t.wheel.u, n, t.rope), __recoveredScope.Xo(t, t.mouth, n, t.rope)];
          },
          [r, i] = n(a),
          [d, f] = n(o);
        t.push(r);
        i.distanceTo(r) > 1e-6 && t.push(i);
        for (let n of s) t.push(n.clone().addScaledVector(c, e * l));
        return f.distanceTo(d) > 1e-6 && t.push(f), t.push(d), t;
      },
      f = (e, t) => {
        let n = [],
          {
            u: r,
            x: i,
            r: a
          } = e.wheel,
          o = Math.sign(t - i);
        for (let t = 1; t <= 24; t++) {
          let s = Math.PI * t / 24;
          n.push(__recoveredScope.Xo(e, r - a * Math.sin(s), i + o * a * Math.cos(s), e.rope));
        }
        return n;
      },
      p = d(-1),
      m = d(1).reverse(),
      h = [...p, ...f(o, u(o, -1)).slice(0, -1), ...m, ...f(a, u(a, 1))],
      g = [0];
    for (let e = 1; e < h.length; e++) g.push(g[e - 1] + h[e].distanceTo(h[e - 1]));
    let _ = p.reduce((e, t, n) => e + (n ? t.distanceTo(p[n - 1]) : 0), 0),
      v = (a.mouth - a.wheel.u) / 2;
    return {
      points: h,
      up: p,
      acc: g,
      total: g.at(-1),
      upLength: _,
      boarding: v,
      bottom: a,
      top: o
    };
  };
}
/* Recovered binding as. Live dependencies: ts, Qo, es, MathUtils, Lo, Io. */
export function create_as(__recoveredScope) {
  return function as(e, t, n, r, i) {
    for (let a of __recoveredScope.ts(e, t, n, {
      offPiste: r
    }).ends) {
      let {
          P: t,
          out: n,
          lat: r,
          base: o
        } = a,
        s = a.u2 + __recoveredScope.Qo + 30;
      i.set(__recoveredScope.es(t), {
        base: o,
        u1: a.u1,
        u2: a.u2,
        a1: a.a1,
        a3: a.a3
      });
      let c = e => (e = __recoveredScope.MathUtils.clamp(e, 0, 1), 1 - e * e * (3 - 2 * e)),
        l = Math.max(0, Math.floor((t.x - s - e.x0) / e.step)),
        u = Math.min(e.cells, Math.ceil((t.x + s - e.x0) / e.step)),
        d = Math.max(0, Math.floor((t.z - s - e.z0) / e.step)),
        f = Math.min(e.cells, Math.ceil((t.z + s - e.z0) / e.step));
      for (let i = d; i <= f; i++) for (let s = l; s <= u; s++) {
        let l = e.x0 + s * e.step - t.x,
          u = e.z0 + i * e.step - t.z,
          d = l * n.x + u * n.z,
          f = l * r.x + u * r.z,
          p = i * e.verts + s,
          m = Math.hypot(Math.max(0, Math.abs(d) - 11), Math.max(0, Math.abs(f) - 10));
        if (e.h[p] += (o - e.h[p]) * c(m / 12), d < a.mouth - 2) continue;
        let h = __recoveredScope.MathUtils.clamp((d - a.mouth) / (a.u1 - a.mouth), 0, 1),
          g = a.ropeAt(d) - __recoveredScope.MathUtils.lerp(__recoveredScope.Lo + __recoveredScope.Io.floor, 6.8, h),
          _ = c((Math.abs(f) - 9) / 12) * c((d - a.u2 - __recoveredScope.Qo) / 15);
        e.h[p] > g && (e.h[p] -= (e.h[p] - g) * _);
      }
    }
  };
}
/* Recovered binding ac. Live dependencies: Vector3, MathUtils. */
export function create_ac(__recoveredScope) {
  return function ac(e, t, n, r = 1) {
    let i = new __recoveredScope.Vector3(n.x - t.x, 0, n.z - t.z).normalize(),
      a = new __recoveredScope.Vector3(-i.z, 0, i.x),
      o = Math.hypot(n.x - t.x, n.z - t.z),
      c = Math.max(2, Math.ceil(o / 60)),
      l = 3 * r,
      u = Array.from({
        length: c + 1
      }, (i, a) => {
        let o = a / c,
          l = __recoveredScope.MathUtils.lerp(t.x, n.x, o),
          u = __recoveredScope.MathUtils.lerp(t.z, n.z, o),
          d = e.heightAt(l, u);
        return new __recoveredScope.Vector3(l, d + (a === 0 || a === c ? 3.7 : 9) * r, u);
      });
    for (let t = 0; t < 3; t++) for (let t = 0; t < c; t++) {
      let n = u[t],
        i = u[t + 1];
      for (let o = 1; o < 20; o++) {
        let s = o / 20;
        if (!(t === 0 && s < .08 || t === c - 1 && s > .92)) for (let o of [-1, 1]) {
          let u = __recoveredScope.MathUtils.lerp(n.x, i.x, s) + a.x * l * o,
            d = __recoveredScope.MathUtils.lerp(n.z, i.z, s) + a.z * l * o,
            f = __recoveredScope.MathUtils.lerp(n.y, i.y, s) - e.heightAt(u, d),
            p = 5 * r - f;
          p <= 0 || (t === 0 ? i.y += p / s : t === c - 1 ? n.y += p / (1 - s) : (n.y += p, i.y += p));
        }
      }
    }
    let d = e => u.map(t => t.clone().addScaledVector(a, e * l)),
      f = d(-1),
      p = d(1),
      m = [...f];
    for (let e = 1; e <= 12; e++) {
      let t = Math.PI * e / 12;
      m.push(n.clone().setY(u[c].y).addScaledVector(a, -l * Math.cos(t)).addScaledVector(i, l * Math.sin(t)));
    }
    m.push(...p.slice(0, -1).reverse());
    for (let e = 1; e <= 12; e++) {
      let n = Math.PI * e / 12;
      m.push(t.clone().setY(u[0].y).addScaledVector(a, l * Math.cos(n)).addScaledVector(i, -l * Math.sin(n)));
    }
    let h = [0];
    for (let e = 1; e < m.length; e++) h.push(h[e - 1] + m[e].distanceTo(m[e - 1]));
    return {
      points: m,
      acc: h,
      total: h.at(-1),
      upLength: f.reduce((e, t, n) => e + (n ? t.distanceTo(f[n - 1]) : 0), 0),
      supports: u,
      side: a,
      dir: i
    };
  };
}
/* Recovered binding oc. Live dependencies: . */
export function create_oc(__recoveredScope) {
  return function oc(e, t, n) {
    let r = (t % e.total + e.total) % e.total,
      i = 1;
    for (; i < e.acc.length - 1 && e.acc[i] < r;) i++;
    let a = e.points[i - 1],
      o = e.points[i];
    return n.lerpVectors(a, o, (r - e.acc[i - 1]) / (e.acc[i] - e.acc[i - 1])), r;
  };
}
/* Recovered binding lc. Live dependencies: oc, sc, cc. */
export function create_lc(__recoveredScope) {
  return function lc(e, t, n, r) {
    let i = __recoveredScope.oc(e, t, n);
    return __recoveredScope.oc(e, t - .5, __recoveredScope.sc), __recoveredScope.oc(e, t + .5, __recoveredScope.cc), r.subVectors(__recoveredScope.cc, __recoveredScope.sc).normalize(), i;
  };
}
/* Recovered binding crossedCircularDistance. Live dependencies: . */
export function create_crossedCircularDistance(__recoveredScope) {
  return function crossedCircularDistance(e, t, n, r) {
    let i = (t - e + r) % r,
      a = (n - e + r) % r;
    return i > 0 && a <= i;
  };
}
/* Recovered binding dc. Live dependencies: . */
export function create_dc(__recoveredScope) {
  return function dc(e, t) {
    let n = Math.max(0, e.targetSpeed),
      r = e.speed,
      i = Math.abs(n - r) / 3,
      a = Math.min(t, i),
      o = r + Math.sign(n - r) * 3 * a,
      s = (r + o) * .5 * a + n * (t - a);
    e.speed = o;
    e.phase = (e.phase + s) % e.path.total;
  };
}
/* Recovered binding fc. Live dependencies: createToonMaterial, Ke. */
export function create_fc(__recoveredScope) {
  return {
    steel: __recoveredScope.createToonMaterial({
      color: `#9aa3a6`
    }),
    dark: __recoveredScope.createToonMaterial({
      color: `#3a4249`
    }),
    cabin: __recoveredScope.createToonMaterial({
      color: `#f0c24a`
    }, {
      rim: 1
    }),
    cabinRed: __recoveredScope.createToonMaterial({
      color: `#d9604c`
    }, {
      rim: 1
    }),
    cabinGray: __recoveredScope.createToonMaterial({
      color: `#aeb5b8`
    }, {
      rim: 1
    }),
    glass: __recoveredScope.createToonMaterial({
      color: `#2f4752`
    }),
    wall: __recoveredScope.createToonMaterial({
      color: `#d8cfc0`
    }),
    roof: __recoveredScope.createToonMaterial({
      color: `#4f6f7a`
    }),
    wood: __recoveredScope.createToonMaterial({
      color: `#9b7458`
    }),
    cable: new __recoveredScope.Ke({
      color: `#2a3138`
    })
  };
}
/* Recovered binding pc. Live dependencies: . */
export function create_pc(__recoveredScope) {
  return {
    easy: `#4f8fd6`,
    novice: `#4f8fd6`,
    intermediate: `#d9534a`,
    advanced: `#23303a`,
    expert: `#23303a`,
    freeride: `#f08a24`
  };
}
/* Recovered binding mc. Live dependencies: g, c, W, fc, d. */
export function create_mc(__recoveredScope) {
  return function mc(e, t, n) {
    let r = new __recoveredScope.g(),
      i = new __recoveredScope.c(new __recoveredScope.W(e, n, t), __recoveredScope.fc.wall);
    i.position.y = n / 2;
    let a = new __recoveredScope.c(new __recoveredScope.d(.01, e * .75, 2.6, 4, 1), __recoveredScope.fc.roof);
    a.rotation.y = Math.PI / 4;
    a.scale.set(1, 1, t / e);
    a.position.y = n + 1.3;
    let o = new __recoveredScope.c(new __recoveredScope.W(e * .5, n * .55, .3), __recoveredScope.fc.glass);
    o.position.set(0, n * .28, t / 2);
    for (let e of [i, a, o]) {
      e.castShadow = !0;
      e.receiveShadow = !0;
      r.add(e);
    }
    return r;
  };
}
/* Recovered binding _c. Live dependencies: hc. */
export function create__c(__recoveredScope) {
  return e => __recoveredScope.hc[e] || `red`;
}
/* Recovered binding Cc. Live dependencies: loadGLTF, xc, wc, Tc, vc, bc, createToonMaterial, gc, Ec, yc. Writes: Sc. */
export function create_Cc(__recoveredScope) {
  return function Cc() {
    return __recoveredScope.Sc ||= (async () => {
      let [e, t, n] = await Promise.all([`cabin`, `chair`, `station`].map(e => __recoveredScope.loadGLTF(`${__recoveredScope.xc}${e}.glb`).then(__recoveredScope.wc))),
        r = __recoveredScope.Tc(e.geometry, __recoveredScope.vc),
        i = n.geometry;
      i.computeBoundingBox();
      let a = i.boundingBox,
        o = __recoveredScope.bc / (a.max.z - a.min.z);
      i.translate(-(a.min.x + a.max.x) / 2, -a.min.y, -(a.min.z + a.max.z) / 2).scale(o, o, o);
      i.computeBoundingBox();
      let s = (e, t) => __recoveredScope.createToonMaterial({
        map: t,
        side: e.side
      }, {
        rim: 1
      });
      return {
        cabin: r,
        cabinMats: Object.fromEntries(Object.entries(__recoveredScope.gc).map(([t, n]) => [t, s(e.material, n ? __recoveredScope.Ec(e.material.map, n) : e.material.map)])),
        chair: __recoveredScope.Tc(t.geometry, __recoveredScope.yc),
        chairMat: s(t.material, t.material.map),
        station: i,
        stationMat: __recoveredScope.createToonMaterial({
          map: n.material.map
        }),
        stationHalfWidth: i.boundingBox.max.x,
        stationHeight: i.boundingBox.max.y
      };
    })();
  };
}
/* Recovered binding wc. Live dependencies: . */
export function create_wc(__recoveredScope) {
  return function wc(e) {
    let t = null;
    return e.scene.updateMatrixWorld(true), e.scene.traverse(e => {
      e.isMesh && !t && (t = e);
    }), {
      geometry: t.geometry.clone().applyMatrix4(t.matrixWorld),
      material: t.material
    };
  };
}
/* Recovered binding Tc. Live dependencies: Vector3. */
export function create_Tc(__recoveredScope) {
  return function Tc(e, t) {
    e.computeBoundingBox();
    let {
        min: n,
        max: r
      } = e.boundingBox,
      i = t / (r.y - n.y),
      a = (r.y - (r.y - n.y) * .05) * i;
    e.scale(i, i, i);
    let o = new __recoveredScope.Vector3(1 / 0, 1 / 0, 1 / 0),
      c = o.clone().negate(),
      l = new __recoveredScope.Vector3(),
      u = e.attributes.position;
    for (let e = 0; e < u.count; e++) {
      l.fromBufferAttribute(u, e);
      !(l.y < a) && (o.min(l), c.max(l));
    }
    return e.translate(-(o.x + c.x) / 2, -(o.y + c.y) / 2, -(o.z + c.z) / 2);
  };
}
/* Recovered binding Ec. Live dependencies: K, he, MathUtils, qe. */
export function create_Ec(__recoveredScope) {
  return function Ec(e, t) {
    let n = e.image,
      r = document.createElement(`canvas`);
    r.width = n.width;
    r.height = n.height;
    let i = r.getContext(`2d`);
    i.drawImage(n, 0, 0);
    let a = i.getImageData(0, 0, r.width, r.height),
      o = a.data,
      s = {};
    new __recoveredScope.K(t).getRGB(s, __recoveredScope.he);
    for (let e = 0; e < o.length; e += 4) {
      let t = o[e],
        n = Math.max(o[e + 1], o[e + 2]),
        r = __recoveredScope.MathUtils.smoothstep(t ? (t - n) / t : 0, .3, .6);
      if (!r) continue;
      let i = Math.min(t / 225, 1.1);
      o[e] += (s.r * 255 * i - t) * r;
      o[e + 1] += (s.g * 255 * i - o[e + 1]) * r;
      o[e + 2] += (s.b * 255 * i - o[e + 2]) * r;
    }
    i.putImageData(a, 0, 0);
    let c = new __recoveredScope.qe(r);
    for (let t of [`flipY`, `colorSpace`, `wrapS`, `wrapT`, `magFilter`, `minFilter`, `anisotropy`]) c[t] = e[t];
    return c;
  };
}
/* Recovered binding Dc. Live dependencies: qe, he, Se. */
export function create_Dc(__recoveredScope) {
  return function Dc(e, t) {
    let n = e.match(/(\d+)号/)?.[1];
    if (!n) return null;
    let r = {
        red: `#d9604c`,
        yellow: `#f0c24a`,
        gray: `#aeb5b8`,
        chair: `#4f6f7a`
      }[t],
      i = t === `red` || t === `chair` ? `#fbfaf5` : `#23303a`,
      a = document.createElement(`canvas`);
    a.width = a.height = 256;
    let o = a.getContext(`2d`);
    o.beginPath();
    o.arc(128, 128, 116, 0, Math.PI * 2);
    o.fillStyle = r;
    o.fill();
    o.lineWidth = 14;
    o.strokeStyle = `#23303a`;
    o.stroke();
    o.fillStyle = i;
    o.textAlign = `center`;
    o.textBaseline = `middle`;
    o.font = `700 168px "Patrick Hand SC", sans-serif`;
    o.fillText(n, 128, 140);
    let s = new __recoveredScope.qe(a);
    return s.colorSpace = __recoveredScope.he, s.anisotropy = 4, new __recoveredScope.Se({
      map: s,
      alphaTest: .5
    });
  };
}
/* Recovered binding Pc. Live dependencies: loadGLTF, jc, Nc. Writes: Nc. */
export function create_Pc(__recoveredScope) {
  return function Pc() {
    return __recoveredScope.Nc ||= __recoveredScope.loadGLTF(__recoveredScope.jc).then(({
      scene: e
    }) => {
      let t = e.getObjectByName(`pylon`),
        n = [`train-l`, `train-r`].map(t => e.getObjectByName(t));
      if (!t?.geometry || n.some(e => !e)) throw Error(`Unexpected lift pylon structure`);
      t.geometry = t.geometry.clone();
      let r = t.geometry.getAttribute(`position`);
      for (let e = 0; e < r.count; e++) r.getY(e) >= 8.3 && r.setX(e, r.getX(e) * (6 / 3.6));
      r.needsUpdate = true;
      t.geometry.computeVertexNormals();
      t.geometry.computeBoundingSphere();
      for (let e of n) e.position.x *= 6 / 3.6;
      return e.traverse(e => {
        e.isMesh && (e.castShadow = true, e.receiveShadow = true);
      }), e;
    }).catch(e => {
      throw __recoveredScope.Nc = null, e;
    }), __recoveredScope.Nc;
  };
}
/* Recovered binding createCableway. Live dependencies: g, mt, d, W, x, liftEndpointPositions, Ic, Vector3, _c, Dc, ac, c, fc, He, Le, ns, Ce, z, Fo, ts, Yo, mc, Oc, kc, is, Ac, Pc, MathUtils, pt, Mc, ge, Bc, Lc, Cc, de, ce, je, dc, lc. */
export function create_createCableway(__recoveredScope) {
  return function createCableway(e, t, {
    scale: n = 1,
    stationScale: r = n,
    spacing: i = 1,
    speed: a = 5,
    piste: o = null,
    approach: l = null
  } = {}) {
    let u = new __recoveredScope.g(),
      f = [],
      p = [],
      m = [],
      h = [],
      _ = [],
      v = [],
      y = [],
      b = [],
      S = [],
      C = [],
      w = __recoveredScope.mt([new __recoveredScope.d(.35, .5, 1, 6).translate(0, .5, 0)]),
      T = new __recoveredScope.W(7.5, .4, .5),
      E = [],
      D = [],
      O = new __recoveredScope.x(),
      k = __recoveredScope.liftEndpointPositions(t, r),
      ee = (e, t, n, r, i, a, o = a) => {
        O.position.set(t, n, r);
        O.rotation.set(0, i, 0);
        O.scale.set(a, o, a);
        O.updateMatrix();
        e.push(O.matrix.clone());
      };
    for (let [d, x] of t.entries()) {
      if (x.type === `magic_carpet`) {
        let t = __recoveredScope.Ic(e, x, r);
        u.add(t.mesh);
        p.push(t);
        continue;
      }
      let [t, O] = k[d],
        A = new __recoveredScope.Vector3(t[0], e.heightAt(t[0], t[1]), t[1]),
        j = new __recoveredScope.Vector3(O[0], e.heightAt(O[0], O[1]), O[1]),
        M = new __recoveredScope.Vector3(j.x - A.x, 0, j.z - A.z),
        N = M.length();
      M.normalize();
      let te = new __recoveredScope.Vector3(-M.z, 0, M.x),
        P = Math.atan2(M.x, M.z),
        ne = x.type === `gondola`,
        re = (ne ? 13 : 9) * n,
        ie = ne ? __recoveredScope._c(x.name) : `chair`,
        ae = x.name && __recoveredScope.Dc(x.name, ie);
      if (x.name === `5号索道` && x.type === `chair_lift`) {
        let t = A.y <= j.y ? A : j,
          r = A.y <= j.y ? j : A,
          o = __recoveredScope.ac(e, t, r, n),
          l = Math.atan2(o.dir.x, o.dir.z);
        for (let e of [t, r]) {
          let t = new __recoveredScope.g(),
            r = new __recoveredScope.c(new __recoveredScope.W(11 * n, .35 * n, 10 * n), __recoveredScope.fc.roof);
          r.position.y = 5.1 * n;
          t.add(r);
          let i = new __recoveredScope.c(new __recoveredScope.He(3 * n, .12 * n, 8, 32), __recoveredScope.fc.dark);
          i.rotation.x = Math.PI / 2;
          i.position.y = 3.7 * n;
          t.add(i);
          for (let r of [-5, 5]) for (let i of [-4, 4]) {
            let a = new __recoveredScope.c(new __recoveredScope.W(.25 * n, 5 * n, .25 * n), __recoveredScope.fc.steel);
            a.position.set(r * n, 2.5 * n, i * n);
            t.add(a);
            y.push({
              x: e.x + (Math.cos(l) * r + Math.sin(l) * i) * n,
              z: e.z + (-Math.sin(l) * r + Math.cos(l) * i) * n,
              yaw: l,
              hw: .125 * n,
              hd: .125 * n,
              top: e.y + 5 * n
            });
          }
          if (t.position.copy(e), t.rotation.y = l, u.add(t), ae) {
            let e = new __recoveredScope.Le(ae);
            e.scale.setScalar(3 * n);
            e.position.set(0, 8 * n, 0);
            t.add(e);
          }
          v.push({
            x: e.x,
            z: e.z,
            yaw: l,
            hw: 5 * n,
            hd: 5 * n,
            top: e.y + 5.3 * n,
            passable: true
          });
        }
        for (let t = 1; t < o.supports.length - 1; t++) {
          let r = o.supports[t],
            i = e.heightAt(r.x, r.z),
            a = new __recoveredScope.g(),
            s = new __recoveredScope.c(w, __recoveredScope.fc.steel);
          s.position.y = -.5;
          s.scale.set(n, r.y - i + 1, n);
          let d = new __recoveredScope.c(T, __recoveredScope.fc.dark);
          d.position.y = r.y - i + .7 * n;
          d.rotation.y = l;
          d.scale.setScalar(n);
          a.add(s, d);
          a.position.set(r.x, i, r.z);
          u.add(a);
          C.push({
            fallback: a,
            x: r.x,
            z: r.z,
            ground: i,
            ropeHeight: r.y - i,
            yaw: l,
            pitch: __recoveredScope.ns(o.supports, t)
          });
          y.push({
            x: r.x,
            z: r.z,
            yaw: 0,
            hw: .5 * n,
            hd: .5 * n,
            top: r.y + .5 * n
          });
        }
        u.add(new __recoveredScope.Ce(new __recoveredScope.z().setFromPoints(o.points), __recoveredScope.fc.cable));
        let d = o.supports.map(e => e.clone().addScaledVector(o.side, -3 * n));
        _.push({
          id: x.id,
          name: x.name,
          type: x.type,
          a: t,
          b: r,
          cable: d
        });
        let p = {
            id: x.id,
            path: o,
            phase: 0,
            speed: a,
            targetSpeed: a,
            chairs: []
          },
          h = Math.max(2, Math.round(o.total / (25 * i)));
        for (let e = 0; e < h; e++) {
          let t = {
            kind: `chair`,
            system: p,
            offset: e * o.total / h,
            position: new __recoveredScope.Vector3(),
            tangent: new __recoveredScope.Vector3(),
            yaw: l
          };
          f.push(t);
          p.chairs.push(t);
        }
        m.push(p);
        continue;
      }
      if (ne && __recoveredScope.Fo.includes(x.name)) {
        let t = __recoveredScope.ts(e, A, j, {
          scale: n,
          stationScale: r,
          offPiste: o ? __recoveredScope.Yo(o, 17) : void 0,
          approach: l
        });
        for (let e of t.ends) {
          let t = new __recoveredScope.g();
          if (t.add(__recoveredScope.mc(14, 18, 7)), t.scale.setScalar(r), t.position.set(e.P.x, e.base, e.P.z), t.rotation.y = Math.atan2(e.out.x, e.out.z) + Math.PI, u.add(t), b.push(t), ae) {
            let e = new __recoveredScope.Le(ae);
            e.scale.setScalar(__recoveredScope.Oc);
            e.position.set(0, __recoveredScope.kc, -5);
            t.add(e);
            S.push(e);
          }
          v.push({
            x: e.P.x,
            z: e.P.z,
            yaw: P,
            hw: 7 * r,
            hd: 9 * r,
            top: e.base + 12 * r
          });
        }
        let d = t.supports;
        for (let t = 1; t < d.length - 1; t++) {
          let r = d[t],
            i = e.heightAt(r.x, r.z),
            a = new __recoveredScope.g(),
            o = new __recoveredScope.c(w, __recoveredScope.fc.steel);
          o.position.y = -.5;
          o.scale.set(n, r.y - i + 1, n);
          let s = new __recoveredScope.c(T, __recoveredScope.fc.dark);
          s.position.y = r.y - i + .3 * n;
          s.rotation.y = P;
          s.scale.setScalar(n);
          a.add(o, s);
          a.position.set(r.x, i, r.z);
          u.add(a);
          C.push({
            fallback: a,
            x: r.x,
            z: r.z,
            ground: i,
            ropeHeight: r.y - i,
            yaw: P,
            pitch: __recoveredScope.ns(d, t)
          });
          y.push({
            x: r.x,
            z: r.z,
            yaw: 0,
            hw: .5 * n,
            hd: .5 * n,
            top: r.y + .5 * n
          });
        }
        let p = __recoveredScope.is(t, n);
        u.add(new __recoveredScope.Ce(new __recoveredScope.z().setFromPoints(p.points), __recoveredScope.fc.cable));
        let m = {
            id: x.id,
            path: p,
            phase: 0,
            speed: a,
            targetSpeed: a,
            cars: [],
            passenger: null
          },
          E = Math.max(2, Math.round(p.total / (55 * i)));
        for (let e = 0; e < E; e++) {
          let t = {
            kind: ie,
            system: m,
            offset: e * p.total / E,
            position: new __recoveredScope.Vector3(),
            tangent: new __recoveredScope.Vector3(),
            yaw: P
          };
          f.push(t);
          m.cars.push(t);
        }
        h.push(m);
        _.push({
          id: x.id,
          name: x.name,
          type: x.type,
          a: p.bottom.P,
          b: p.top.P,
          cable: p.up
        });
        continue;
      }
      for (let [e, t] of [[A, 0], [j, Math.PI]]) {
        let n = new __recoveredScope.g();
        if (n.add(__recoveredScope.mc(14, 18, 7)), n.scale.setScalar(r), n.position.copy(e), n.rotation.y = P + t, u.add(n), b.push(n), ae) {
          let e = new __recoveredScope.Le(ae);
          e.scale.setScalar(__recoveredScope.Oc);
          e.position.set(0, __recoveredScope.kc, __recoveredScope.Ac);
          n.add(e);
          S.push(e);
        }
        v.push({
          x: e.x,
          z: e.z,
          yaw: P,
          hw: 7 * r,
          hd: 9 * r,
          top: e.y + 12 * r
        });
      }
      let oe = Math.max(2, Math.round(N / 140)),
        F = [];
      for (let t = 0; t <= oe; t++) {
        let r = t / oe,
          i = A.x + (j.x - A.x) * r,
          a = A.z + (j.z - A.z) * r,
          o = e.heightAt(i, a);
        F.push(new __recoveredScope.Vector3(i, o + re, a));
        t !== 0 && t !== oe && (ee(E, i, o - .5, a, 0, n, re + 1), ee(D, i, o + re + .3, a, P + Math.PI / 2, n));
      }
      F[0].y = A.y + 6 * n;
      F[oe].y = j.y + 6 * n;
      let se = [-3 * n, 3 * n].map(e => F.map(t => t.clone().addScaledVector(te, e)));
      for (let e of se) u.add(new __recoveredScope.Ce(new __recoveredScope.z().setFromPoints(e), __recoveredScope.fc.cable));
      let I = se.map(e => {
        let t = [0];
        for (let n = 1; n < e.length; n++) t.push(t[n - 1] + e[n].distanceTo(e[n - 1]));
        return t;
      });
      _.push({
        id: x.id,
        name: x.name,
        type: x.type,
        a: A,
        b: j,
        cable: se[0],
        acc: I[0]
      });
      let L = (ne ? 55 : 25) * i,
        ce = Math.floor(I[0][I[0].length - 1] / L);
      for (let e = 0; e < 2; e++) for (let t = 0; t < ce; t++) {
        let n = ie;
        f.push({
          kind: n,
          lane: se[e],
          acc: I[e],
          s: t * L,
          up: e === 0,
          yaw: P
        });
      }
    }
    C.length && __recoveredScope.Pc().then(e => {
      for (let t of C) {
        let r = e.clone();
        r.position.set(t.x, t.ground, t.z);
        r.rotation.y = t.yaw;
        let i = t.ropeHeight / n - 8,
          a = r.getObjectByName(`pylon`);
        a.geometry = a.geometry.clone();
        let o = a.geometry.getAttribute(`position`);
        for (let e = 0; e < o.count; e++) {
          let t = o.getY(e);
          o.setY(e, t + i * __recoveredScope.MathUtils.clamp((t - 1.1) / 3.9, 0, 1));
        }
        o.needsUpdate = true;
        a.geometry.deleteAttribute(`normal`);
        let s = __recoveredScope.pt(a.geometry, 1e-4);
        a.geometry.dispose();
        a.geometry = s;
        a.geometry.computeVertexNormals();
        a.geometry.computeBoundingSphere();
        a.material = __recoveredScope.Mc;
        for (let e of [`train-l`, `train-r`]) {
          let n = r.getObjectByName(e);
          n.position.y += i;
          let a = t.pitch || 0;
          n.rotation.x = a;
          n.position.y += .205 * (Math.cos(a) - 1);
          n.position.z += .205 * Math.sin(a);
        }
        let l = 6.1 + i,
          d = [];
        for (let e of [-.24, .24]) d.push(new __recoveredScope.W(.045, l - .8, .045).translate(e, (l + .8) / 2, .4));
        for (let e = 1; e < l; e += .32) d.push(new __recoveredScope.W(.48, .035, .035).translate(0, e, .42));
        let f = new __recoveredScope.c(__recoveredScope.mt(d), __recoveredScope.fc.steel);
        f.castShadow = true;
        r.add(f);
        r.scale.setScalar(n);
        u.add(r);
        u.remove(t.fallback);
      }
    }).catch(e => console.warn(`Chairlift pylon unavailable; using fallback`, e));
    let A = (e, t, n) => {
      let r = new __recoveredScope.ge(e, t, n);
      return r.castShadow = true, r.frustumCulled = false, u.add(r), r;
    };
    for (let [e, t, n] of [[w, __recoveredScope.fc.steel, E], [T, __recoveredScope.fc.dark, D]]) {
      if (!n.length) continue;
      let r = A(e, t, n.length);
      n.forEach((e, t) => r.setMatrixAt(t, e));
    }
    let j = {};
    for (let e of [`red`, `yellow`, `gray`, `chair`]) {
      let t = f.filter(t => t.kind === e);
      if (!t.length) continue;
      let n = A(__recoveredScope.Bc(e), __recoveredScope.Lc, t.length);
      t.forEach((e, t) => {
        e.mesh = n;
        e.index = t;
      });
      j[e] = n;
    }
    __recoveredScope.Cc().then(e => {
      for (let [t, n] of Object.entries(j)) {
        n.geometry = t === `chair` ? e.chair : e.cabin;
        n.material = t === `chair` ? e.chairMat : e.cabinMats[t];
      }
      for (let t of b) {
        let n = new __recoveredScope.c(e.station, e.stationMat);
        n.castShadow = n.receiveShadow = true;
        t.children[0].removeFromParent();
        t.add(n);
      }
      for (let t of S) t.position.y = e.stationHeight + __recoveredScope.Oc * .75;
      for (let t of v) t.passable || (t.hw = e.stationHalfWidth * r);
    }).catch(e => console.warn(`Lift models failed to load; keeping the box stand-ins.`, e));
    let M = new __recoveredScope.Vector3(),
      N = new __recoveredScope.de(),
      te = new __recoveredScope.ce(),
      P = new __recoveredScope.je();
    return {
      group: u,
      lines: _,
      footprints: v,
      collisionParts: y,
      chairSystems: m,
      gondolaSystems: h,
      update(e, t = e) {
        for (let t of p) t.tex.offset.y = (t.tex.offset.y - e * t.rate) % 1;
        for (let e of m) __recoveredScope.dc(e, t);
        for (let e of h) __recoveredScope.dc(e, t);
        for (let t of f) {
          if (t.system) {
            t.distance = __recoveredScope.lc(t.system.path, t.system.phase + t.offset, t.position, t.tangent);
            t.yaw = Math.atan2(t.tangent.x, t.tangent.z);
            O.position.copy(t.position);
            O.rotation.set(0, t.yaw, 0);
            O.scale.setScalar(t.system.passenger === t ? 0 : n);
            O.updateMatrix();
            t.mesh.setMatrixAt(t.index, O.matrix);
            continue;
          }
          let r = t.acc[t.acc.length - 1];
          t.s = (t.s + e * a) % r;
          let i = t.up ? t.s : r - t.s,
            o = 1;
          for (; o < t.acc.length - 1 && t.acc[o] < i;) o++;
          let s = (i - t.acc[o - 1]) / (t.acc[o] - t.acc[o - 1]);
          M.lerpVectors(t.lane[o - 1], t.lane[o], s);
          O.position.copy(M);
          O.rotation.set(0, t.yaw + (t.up ? 0 : Math.PI), Math.sin(t.s * .3) * .03);
          O.scale.setScalar(n);
          O.updateMatrix();
          t.mesh.setMatrixAt(t.index, O.matrix);
        }
        for (let e of Object.values(j)) {
          e.count = e.instanceMatrix.count;
          e.instanceMatrix.needsUpdate = !0;
        }
      },
      cull(e, t, r) {
        te.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse);
        N.setFromProjectionMatrix(te);
        for (let e of Object.values(j)) {
          let i = e.geometry;
          i.boundingSphere || i.computeBoundingSphere();
          let a = e.instanceMatrix.array,
            o = e.instanceMatrix.count,
            s = 0;
          for (let e = 0; e < o; e++) {
            let o = e * 16;
            P.center.copy(i.boundingSphere.center).applyMatrix4(O.matrix.fromArray(a, o));
            P.radius = i.boundingSphere.radius * n;
            !(P.center.distanceTo(t) > r + P.radius && !N.intersectsSphere(P)) && (s !== e && a.copyWithin(s * 16, o, o + 16), s++);
          }
          e.count = s;
        }
      }
    };
  };
}
/* Recovered binding Ic. Live dependencies: qe, D, he, z, i, c, createToonMaterial. */
export function create_Ic(__recoveredScope) {
  return function Ic(e, t, n) {
    let r = document.createElement(`canvas`);
    r.width = 16;
    r.height = 64;
    let a = r.getContext(`2d`);
    a.fillStyle = `#3a4249`;
    a.fillRect(0, 0, 16, 64);
    a.fillStyle = `#9aa3a6`;
    a.fillRect(0, 0, 16, 10);
    let o = new __recoveredScope.qe(r);
    o.wrapT = __recoveredScope.D;
    o.colorSpace = __recoveredScope.he;
    let s = .6 * n,
      l = .3 * n,
      u = [],
      d = t.points;
    for (let e = 0; e < d.length - 1; e++) {
      let t = Math.hypot(d[e + 1][0] - d[e][0], d[e + 1][1] - d[e][1]);
      for (let n = 0; n < t; n += 4) u.push([d[e][0] + (d[e + 1][0] - d[e][0]) * n / t, d[e][1] + (d[e + 1][1] - d[e][1]) * n / t]);
    }
    u.push(d[d.length - 1]);
    let f = [],
      p = [],
      m = [],
      h = 0;
    u.forEach(([t, n], r) => {
      let i = u[Math.max(0, r - 1)],
        a = u[Math.min(u.length - 1, r + 1)],
        o = Math.hypot(a[0] - i[0], a[1] - i[1]) || 1,
        c = -(a[1] - i[1]) / o,
        d = (a[0] - i[0]) / o;
      r && (h += Math.hypot(t - u[r - 1][0], n - u[r - 1][1]) / (s * 3));
      for (let r of [-1, 1]) {
        let i = t + c * s * r,
          a = n + d * s * r;
        f.push(i, e.heightAt(i, a) + l, a);
        p.push((r + 1) / 2, h);
      }
      if (r) {
        let e = r * 2;
        m.push(e - 2, e, e - 1, e - 1, e, e + 1);
      }
    });
    let g = new __recoveredScope.z();
    g.setAttribute(`position`, new __recoveredScope.i(f, 3));
    g.setAttribute(`uv`, new __recoveredScope.i(p, 2));
    g.setIndex(m);
    g.computeVertexNormals();
    let _ = new __recoveredScope.c(g, __recoveredScope.createToonMaterial({
      map: o,
      side: 2
    }, {
      hatch: 0
    }));
    return _.receiveShadow = true, {
      mesh: _,
      tex: o,
      rate: 1 / (s * 3)
    };
  };
}
/* Recovered binding zc. Live dependencies: K, i. */
export function create_zc(__recoveredScope) {
  return function zc(e, t, n, r, a) {
    e.translate(n, r, a);
    let o = new __recoveredScope.K(t),
      s = e.attributes.position.count;
    return e.setAttribute(`color`, new __recoveredScope.i(Array.from({
      length: s * 3
    }, (e, t) => o.toArray()[t % 3]), 3)), e;
  };
}
/* Recovered binding Bc. Live dependencies: Rc, zc, W, fc, mt. */
export function create_Bc(__recoveredScope) {
  return function Bc(e) {
    if (__recoveredScope.Rc.has(e)) return __recoveredScope.Rc.get(e);
    let t = e === `chair` ? [__recoveredScope.zc(new __recoveredScope.W(.1, 2, .1), __recoveredScope.fc.dark.color, 0, -1, 0), __recoveredScope.zc(new __recoveredScope.W(2.4, .15, .7), __recoveredScope.fc.steel.color, 0, -2, 0), __recoveredScope.zc(new __recoveredScope.W(2.4, .7, .1), __recoveredScope.fc.steel.color, 0, -1.65, -.35)] : [__recoveredScope.zc(new __recoveredScope.W(.12, 2.2, .12), __recoveredScope.fc.dark.color, 0, -1.1, 0), __recoveredScope.zc(new __recoveredScope.W(1.9, 2, 2.2), {
        red: __recoveredScope.fc.cabinRed,
        yellow: __recoveredScope.fc.cabin,
        gray: __recoveredScope.fc.cabinGray
      }[e].color, 0, -3.1, 0), __recoveredScope.zc(new __recoveredScope.W(1.95, .8, 1.7), __recoveredScope.fc.glass.color, 0, -2.7, 0), __recoveredScope.zc(new __recoveredScope.W(1.7, .25, 2), __recoveredScope.fc.dark.color, 0, -2, 0)],
      n = __recoveredScope.mt(t);
    return __recoveredScope.Rc.set(e, n), n;
  };
}
/* Recovered binding createRideGondola. Live dependencies: g, c, Bc, Lc, Cc, _c. */
export function create_createRideGondola(__recoveredScope) {
  return function createRideGondola() {
    let e = new __recoveredScope.g(),
      t = new __recoveredScope.c(__recoveredScope.Bc(`red`), __recoveredScope.Lc);
    t.castShadow = true;
    e.add(t);
    let n = `red`,
      r = null,
      i = () => {
        r ? (t.geometry = r.cabin, t.material = r.cabinMats[n]) : t.geometry = __recoveredScope.Bc(n);
      };
    return __recoveredScope.Cc().then(e => {
      r = e;
      i();
    }).catch(() => {}), e.setLine = e => {
      n = __recoveredScope._c(e);
      i();
    }, e;
  };
}
