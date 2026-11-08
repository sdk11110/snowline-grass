/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding cf. Live dependencies: rider, physics, F, sf, z. */
export function create_cf(__recoveredScope) {
  return function cf(e) {
    __recoveredScope.rider.setGear(e);
    __recoveredScope.physics.gear = __recoveredScope.rider.gear;
    __recoveredScope.F.gap(__recoveredScope.physics.pos);
    for (let e of __recoveredScope.sf) e.setAttribute(`aria-pressed`, String(e.dataset.gear === __recoveredScope.rider.gear));
    __recoveredScope.z.prefs.gear !== __recoveredScope.rider.gear && (__recoveredScope.z.prefs.gear = __recoveredScope.rider.gear, __recoveredScope.z.save());
  };
}
