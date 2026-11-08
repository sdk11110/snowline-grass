/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Hc. Live dependencies: d, pc, g, createToonMaterial, ce, ge. */
export function create_Hc(__recoveredScope) {
  return function Hc(e, t) {
    let n = new __recoveredScope.d(.05, .05, 1.8, 5).translate(0, .9, 0),
      r = new __recoveredScope.d(.07, .07, .45, 5).translate(0, 1.6, 0),
      i = new Map();
    for (let n of t) {
      let t = n.points,
        r = 0;
      for (let a = 0; a < t.length - 1; a++) {
        let o = t[a][0],
          s = t[a][1],
          c = t[a + 1][0],
          l = t[a + 1][1],
          u = Math.hypot(c - o, l - s),
          d = -(l - s) / u,
          f = (c - o) / u;
        for (let t = r; t < u; t += 35) {
          let a = t / u,
            p = o + (c - o) * a,
            m = s + (l - s) * a;
          for (let t of [-1, 1]) {
            let r = p + d * t * 18,
              a = m + f * t * 18,
              o = __recoveredScope.pc[n.difficulty] || __recoveredScope.pc.intermediate;
            i.has(o) || i.set(o, []);
            i.get(o).push([r, e.heightAt(r, a), a]);
          }
          r = t + 35 - u;
        }
        r < 0 && (r = 0);
      }
    }
    let a = new __recoveredScope.g(),
      o = __recoveredScope.createToonMaterial({
        color: `#e9a23b`
      }),
      s = new __recoveredScope.ce();
    for (let [e, t] of i) {
      let i = __recoveredScope.createToonMaterial({
          color: e
        }),
        c = new __recoveredScope.ge(n, o, t.length),
        l = new __recoveredScope.ge(r, i, t.length);
      t.forEach(([e, t, n], r) => {
        s.makeTranslation(e, t - .1, n);
        c.setMatrixAt(r, s);
        l.setMatrixAt(r, s);
      });
      c.computeBoundingSphere();
      l.computeBoundingSphere();
      a.add(c, l);
    }
    return a;
  };
}
