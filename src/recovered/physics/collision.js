/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Et. Live dependencies: Dt. */
export function create_Et(__recoveredScope) {
  return function Et(e, t, n, r = .55) {
    let i = [{
      x: e.x,
      z: e.z
    }, {
      x: t.x,
      z: t.z
    }];
    for (let e of n) {
      let t = Math.cos(e.yaw),
        n = Math.sin(e.yaw);
      for (let a of [-1, 1]) for (let o of [-1, 1]) {
        let s = a * (e.hw + r + .1),
          c = o * (e.hd + r + .1);
        i.push({
          x: e.x + t * s + n * c,
          z: e.z - n * s + t * c
        });
      }
    }
    let a = (e, t) => n.every(n => !__recoveredScope.Dt(e, t, n, r)),
      o = i.map(() => 1 / 0),
      s = i.map(() => -1),
      c = i.map(() => false);
    o[0] = 0;
    for (let e = 0; e < i.length; e++) {
      let e = -1;
      for (let t = 0; t < i.length; t++) !c[t] && (e < 0 || o[t] < o[e]) && (e = t);
      if (e < 0 || !Number.isFinite(o[e]) || e === 1) break;
      c[e] = true;
      for (let t = 0; t < i.length; t++) {
        if (c[t] || t === e || !a(i[e], i[t])) continue;
        let n = o[e] + Math.hypot(i[t].x - i[e].x, i[t].z - i[e].z);
        n < o[t] && (o[t] = n, s[t] = e);
      }
    }
    if (!Number.isFinite(o[1])) return null;
    let l = [];
    for (let e = 1; e >= 0; e = s[e]) l.push(i[e]);
    return l.reverse();
  };
}
/* Recovered binding Dt. Live dependencies: . */
export function create_Dt(__recoveredScope) {
  return function Dt(e, t, n, r) {
    let i = Math.cos(n.yaw),
      a = Math.sin(n.yaw),
      o = e => ({
        x: (e.x - n.x) * i - (e.z - n.z) * a,
        z: (e.x - n.x) * a + (e.z - n.z) * i
      }),
      s = o(e),
      c = o(t),
      l = 0,
      u = 1;
    for (let [e, t, i] of [[s.x, c.x - s.x, n.hw + r], [s.z, c.z - s.z, n.hd + r]]) {
      if (Math.abs(t) < 1e-9) {
        if (Math.abs(e) > i) return false;
        continue;
      }
      let n = (-i - e) / t,
        r = (i - e) / t;
      if (n > r && ([n, r] = [r, n]), l = Math.max(l, n), u = Math.min(u, r), l > u) return false;
    }
    return true;
  };
}
