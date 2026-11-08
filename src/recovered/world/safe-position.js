/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding dm. Live dependencies: physics. */
export function create_dm(__recoveredScope) {
  return (e, t) => __recoveredScope.physics.obstacles.some(n => Math.hypot(e - n.x, t - n.z) < Math.hypot(n.hw, n.hd) + 3);
}
/* Recovered binding fm. Live dependencies: groundHeightfield, dm, forest. */
export function create_fm(__recoveredScope) {
  return (e, t) => __recoveredScope.groundHeightfield.inside(e, t, 60) && !__recoveredScope.groundHeightfield.holeAt(e, t) && !__recoveredScope.dm(e, t) && !__recoveredScope.forest.hit(e, t, 3);
}
/* Recovered binding pm. Live dependencies: fm, groundHeightfield, Hp. */
export function create_pm(__recoveredScope) {
  return function pm(e, t, n) {
    let r = null;
    for (let i of t) for (let t = 0; t < 24; t++) {
      let a = t / 24 * Math.PI * 2,
        o = e.x + Math.cos(a) * i,
        s = e.z + Math.sin(a) * i;
      if (!__recoveredScope.fm(o, s)) continue;
      __recoveredScope.groundHeightfield.normalAt(o, s, __recoveredScope.Hp);
      let c = n(o, s, __recoveredScope.Hp, i);
      (!r || c > r.score) && (r = {
        x: o,
        z: s,
        score: c,
        nx: __recoveredScope.Hp.x,
        nz: __recoveredScope.Hp.z
      });
    }
    return r;
  };
}
/* Recovered binding mm. Live dependencies: . */
export function create_mm(__recoveredScope) {
  return function mm(e, t) {
    let n = Math.hypot(e.dx, e.dz);
    return n < 1e-4 ? (e.dx = t.x, e.dz = t.z) : (e.dx /= n, e.dz /= n), e;
  };
}
