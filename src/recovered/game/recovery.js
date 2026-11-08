/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Wp. Live dependencies: Id, Up, physics, forest, groundHeightfield, Hp, K, Qu, G, resetFollowCamera, F. */
export function create_Wp(__recoveredScope) {
  return function Wp() {
    __recoveredScope.Id();
    let e = __recoveredScope.Up.copy(__recoveredScope.physics.crashDir),
      t = __recoveredScope.physics.pos.x,
      n = __recoveredScope.physics.pos.z;
    for (let r = 0; r < 6; r++) {
      let r = __recoveredScope.forest.hit(t, n, 1.2);
      if (!r) break;
      let i = -e.z,
        a = e.x,
        o = Math.sign((t - r.x) * i + (n - r.z) * a) || 1;
      t = r.x + i * o * (r.r + 1.5);
      n = r.z + a * o * (r.r + 1.5);
    }
    __recoveredScope.groundHeightfield.normalAt(t, n, __recoveredScope.Hp);
    let r = __recoveredScope.K.set(__recoveredScope.Hp.x, 0, __recoveredScope.Hp.z);
    if (r.lengthSq() > 1e-4) {
      r.normalize();
      let t = e.dot(r);
      t < .1 && e.addScaledVector(r, .4 - t).normalize();
    }
    __recoveredScope.physics.reset(t, n, __recoveredScope.Qu(e.x, e.z));
    __recoveredScope.G.copy(e);
    __recoveredScope.resetFollowCamera();
    __recoveredScope.F.gap(__recoveredScope.physics.pos);
  };
}
