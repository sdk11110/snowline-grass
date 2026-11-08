/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Zg. Live dependencies: W, X, physics, Yg, MathUtils. */
export function create_Zg(__recoveredScope) {
  return function Zg() {
    let e = __recoveredScope.W === `lift` ? __recoveredScope.X.ride : null,
      t = e ? e.dir : __recoveredScope.physics.forward(__recoveredScope.Yg),
      n = __recoveredScope.MathUtils.euclideanModulo(__recoveredScope.MathUtils.radToDeg(Math.atan2(t.x, -t.z)), 360);
    return {
      x: __recoveredScope.physics.pos.x,
      z: __recoveredScope.physics.pos.z,
      bearing: n,
      lift: e?.id ?? null
    };
  };
}
/* Recovered binding $g. Live dependencies: Ed, i_, W, Zg, I, physics, Qg, publishPlayerPosition. */
export function create_Dollarg(__recoveredScope) {
  return function $g() {
    if (__recoveredScope.Ed.isOpen || __recoveredScope.i_ || __recoveredScope.W !== `ride` && __recoveredScope.W !== `lift` && __recoveredScope.W !== `drive` && __recoveredScope.W !== `horse` && __recoveredScope.W !== `soak` && __recoveredScope.W !== `swing`) return;
    let e = __recoveredScope.Zg();
    __recoveredScope.Ed.open(e, __recoveredScope.I.place, __recoveredScope.physics.pos.y);
    __recoveredScope.Qg.setAttribute(`aria-expanded`, `true`);
    __recoveredScope.publishPlayerPosition(e);
  };
}
/* Recovered binding e_. Live dependencies: Ed, Qg. */
export function create_e_(__recoveredScope) {
  return function e_() {
    __recoveredScope.Ed.close();
    __recoveredScope.Qg.setAttribute(`aria-expanded`, `false`);
  };
}
