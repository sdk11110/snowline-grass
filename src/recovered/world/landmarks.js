/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Ua. Live dependencies: . */
export function create_Ua(__recoveredScope) {
  return function Ua([e, t], n, r) {
    return !n.some((n, i) => i !== r && n.points.some((n, r, i) => {
      let a = i[r + 1];
      if (!a) return Math.hypot(n[0] - e, n[1] - t) < 22;
      let o = a[0] - n[0],
        s = a[1] - n[1],
        c = Math.max(0, Math.min(1, ((e - n[0]) * o + (t - n[1]) * s) / (o * o + s * s || 1)));
      return Math.hypot(n[0] + o * c - e, n[1] + s * c - t) < 22;
    }));
  };
}
/* Recovered binding Wa. Live dependencies: . */
export function create_Wa(__recoveredScope) {
  return e => Math.min(1, Math.max(0, e));
}
/* Recovered binding Ga. Live dependencies: Wa. */
export function create_Ga(__recoveredScope) {
  return (e, t, n) => {
    let r = __recoveredScope.Wa((n - e) / (t - e));
    return r * r * (3 - 2 * r);
  };
}
/* Recovered binding Ka. Live dependencies: Wa. */
export function create_Ka(__recoveredScope) {
  return function Ka(e, t, n) {
    let r = 1 / 0,
      i = 0;
    for (let a = 0; a < e.length - 1; a++) {
      let o = e[a],
        s = e[a + 1],
        c = s[0] - o[0],
        l = s[1] - o[1],
        u = __recoveredScope.Wa(((t - o[0]) * c + (n - o[1]) * l) / (c * c + l * l || 1)),
        d = Math.hypot(o[0] + c * u - t, o[1] + l * u - n);
      d < r && (r = d, i = o[2] + (s[2] - o[2]) * u);
    }
    return {
      d: r,
      dy: i
    };
  };
}
/* Recovered binding qa. Live dependencies: . */
export function create_qa(__recoveredScope) {
  return function qa({
    at: e,
    axis: t,
    half: n,
    nw: r,
    se: i,
    height: a
  }, o, s) {
    let c = o - e[0],
      l = s - e[1],
      u = c * t[0] + l * t[1],
      d = c * t[1] - l * t[0],
      f = (u / n) ** 2 + (d / (d > 0 ? r : i)) ** 2;
    return f < 1 ? a * (1 - f) ** 2 : 0;
  };
}
/* Recovered binding Ja. Live dependencies: ga, summitObjectLayout, Ka, Ga, qa, Ca. */
export function create_Ja(__recoveredScope) {
  return function Ja(e, t) {
    let n = __recoveredScope.ga(t);
    if (!n) return null;
    let [r, i] = n.origin,
      a = (e.heightAt(...n.stations[0]) + e.heightAt(...n.stations[1])) / 2,
      o = __recoveredScope.summitObjectLayout.terrain,
      s = [...o.terrace.lines.map(e => [e, o.terrace]), [o.ridge.line, o.ridge], [o.shoulder.line, o.shoulder]],
      c = e.verts,
      l = e.step,
      u = (t, n) => [Math.max(0, Math.floor((t - 170 - n) / l)), Math.min(e.cells, Math.ceil((t + 170 - n) / l))],
      [d, f] = u(r, e.x0),
      [p, m] = u(i, e.z0);
    for (let t = p; t <= m; t++) for (let n = d; n <= f; n++) {
      let u = e.x0 + n * l - r,
        d = e.z0 + t * l - i,
        f = t * c + n,
        p = e.h[f];
      for (let [e, t] of s) {
        let {
          d: n,
          dy: r
        } = __recoveredScope.Ka(e, u, d);
        n < t.r1 && (p += (a + r - p) * (1 - __recoveredScope.Ga(t.r0, t.r1, n)));
      }
      e.h[f] = p + __recoveredScope.qa(o.knoll, u, d);
    }
    for (let t of __recoveredScope.summitObjectLayout.objects) {
      let {
          x: n,
          z: r
        } = __recoveredScope.Ca(t.id),
        i = (t.round ? t.size[0] : Math.hypot(...t.size)) + .6 * l,
        a = i + l,
        o = e.heightAt(n, r),
        s = 1;
      for (let t = 0; t < 8; t++) for (let a of [i * .5, i]) {
        o += e.heightAt(n + Math.cos(t * Math.PI / 4) * a, r + Math.sin(t * Math.PI / 4) * a);
        s++;
      }
      let u = o / s,
        [d, f] = [Math.max(0, Math.floor((n - a - e.x0) / l)), Math.min(e.cells, Math.ceil((n + a - e.x0) / l))],
        [p, m] = [Math.max(0, Math.floor((r - a - e.z0) / l)), Math.min(e.cells, Math.ceil((r + a - e.z0) / l))];
      for (let t = p; t <= m; t++) for (let o = d; o <= f; o++) {
        let s = Math.hypot(e.x0 + o * l - n, e.z0 + t * l - r),
          d = t * c + o;
        s < a && (e.h[d] += (u - e.h[d]) * (1 - __recoveredScope.Ga(i, a, s)));
      }
    }
    return {
      ...n,
      plaza: a
    };
  };
}
