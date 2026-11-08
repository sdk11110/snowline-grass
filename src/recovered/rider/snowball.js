/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Xh. Live dependencies: physics, Z, rider, U, camera, Jh, G, Yh. */
export function create_Xh(__recoveredScope) {
  return function Xh() {
    !__recoveredScope.physics.grounded || __recoveredScope.physics.crashed > 0 || __recoveredScope.Z.ball.busy || __recoveredScope.rider.throwT !== null || (__recoveredScope.U.on ? __recoveredScope.camera.getWorldDirection(__recoveredScope.Jh) : __recoveredScope.Jh.copy(__recoveredScope.G), __recoveredScope.Jh.setY(0).normalize(), __recoveredScope.rider.startThrow() && (__recoveredScope.Yh.copy(__recoveredScope.physics.pos).addScaledVector(__recoveredScope.Jh, .3).y += 1.5, __recoveredScope.Z.throwBall(__recoveredScope.Yh, __recoveredScope.Jh, __recoveredScope.rider.throwRelease)));
  };
}
