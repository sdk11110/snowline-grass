/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Qu. Live dependencies: . */
export function create_Qu(__recoveredScope) {
  return (e, t) => Math.atan2(-e, -t);
}
/* Recovered binding startRun. Live dependencies: $u, Id, physics, Qu, F, rider, G, U, resetFollowCamera, I, yd, bd. Writes: pf, mf, hf, W. */
export function create_startRun(__recoveredScope) {
  return function startRun(e = __recoveredScope.$u) {
    __recoveredScope.Id();
    __recoveredScope.physics.reset(e.x, e.z, __recoveredScope.Qu(e.dx, e.dz));
    __recoveredScope.F.clear();
    __recoveredScope.pf = 0;
    __recoveredScope.mf = false;
    __recoveredScope.hf = 0;
    __recoveredScope.rider.pose.tumble = 0;
    __recoveredScope.G.set(e.dx, 0, e.dz);
    __recoveredScope.U.reset();
    __recoveredScope.resetFollowCamera();
    __recoveredScope.W = `ride`;
    __recoveredScope.I.show(true);
    __recoveredScope.I.toast(e.toast, 2e3);
    __recoveredScope.yd.reroute(__recoveredScope.bd());
  };
}
