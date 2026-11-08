/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding ug. Live dependencies: rider. Writes: cg. */
export function create_ug(__recoveredScope) {
  return function ug() {
    __recoveredScope.cg = {
      t: 0,
      pos: __recoveredScope.rider.root.position.clone(),
      quat: __recoveredScope.rider.root.quaternion.clone()
    };
  };
}
/* Recovered binding dg. Live dependencies: cg, MathUtils, sg, rider, lg. Writes: cg. */
export function create_dg(__recoveredScope) {
  return function dg(e) {
    __recoveredScope.cg.t += e;
    let t = __recoveredScope.MathUtils.smootherstep(__recoveredScope.cg.t, 0, __recoveredScope.sg);
    __recoveredScope.rider.root.position.lerpVectors(__recoveredScope.cg.pos, __recoveredScope.rider.root.position, t);
    __recoveredScope.rider.root.quaternion.slerpQuaternions(__recoveredScope.cg.quat, __recoveredScope.lg.copy(__recoveredScope.rider.root.quaternion), t);
    __recoveredScope.cg.t >= __recoveredScope.sg && (__recoveredScope.cg = null);
  };
}
