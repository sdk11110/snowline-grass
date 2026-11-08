/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding bd. Live dependencies: physics, W, X. */
export function create_bd(__recoveredScope) {
  return () => ({
    x: __recoveredScope.physics.pos.x,
    z: __recoveredScope.physics.pos.z,
    y: __recoveredScope.physics.pos.y,
    lift: __recoveredScope.W === `lift` ? __recoveredScope.X.ride.id : null
  });
}
