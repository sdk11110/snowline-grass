/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding mg. Live dependencies: B, Sf, pg, G, fg, MathUtils, groundHeightfield, U, Ef, vu. */
export function create_mg(__recoveredScope) {
  return function mg(e, t) {
    let n = __recoveredScope.B.phys,
      {
        cam: r
      } = __recoveredScope.B,
      i = Math.min(n.speed, 30),
      a = __recoveredScope.Sf(),
      o = 1 + a * .5;
    __recoveredScope.pg.copy(__recoveredScope.G);
    r.side && __recoveredScope.pg.applyAxisAngle(__recoveredScope.fg, r.side * (1 - __recoveredScope.MathUtils.smoothstep(i, 4, 20)));
    e.copy(n.pos).addScaledVector(__recoveredScope.pg, -(r.back * o + i * .08));
    e.y += r.up * o + i * .02;
    e.y = Math.max(e.y, __recoveredScope.groundHeightfield.heightAt(e.x, e.z) + 1.5);
    t.copy(n.pos).addScaledVector(__recoveredScope.G, r.ahead * (1 + a * .6));
    t.y += r.look;
    (__recoveredScope.U.yaw || __recoveredScope.U.pitch) && (__recoveredScope.Ef.copy(n.pos).y += r.look, __recoveredScope.vu(e, __recoveredScope.Ef, __recoveredScope.G, __recoveredScope.U.yaw, __recoveredScope.U.pitch), __recoveredScope.vu(t, __recoveredScope.Ef, __recoveredScope.G, __recoveredScope.U.yaw, __recoveredScope.U.pitch), e.y = Math.max(e.y, __recoveredScope.groundHeightfield.heightAt(e.x, e.z) + 1.5));
  };
}
/* Recovered binding hg. Live dependencies: B, G, xf, Ef, kf, mg, K, q, camera, groundHeightfield, J, Sf. */
export function create_hg(__recoveredScope) {
  return function hg(e) {
    let t = __recoveredScope.B.phys;
    __recoveredScope.G.lerp(t.forward(__recoveredScope.xf), 1 - Math.exp(-e * 3)).normalize();
    __recoveredScope.Ef.copy(t.pos).y += __recoveredScope.B.cam.look;
    __recoveredScope.kf(__recoveredScope.Ef);
    __recoveredScope.mg(__recoveredScope.K, __recoveredScope.q);
    let n = __recoveredScope.B.cam.follow ?? 6;
    __recoveredScope.camera.position.lerp(__recoveredScope.K, 1 - Math.exp(-e * n));
    __recoveredScope.camera.position.y = Math.max(__recoveredScope.camera.position.y, __recoveredScope.groundHeightfield.heightAt(__recoveredScope.camera.position.x, __recoveredScope.camera.position.z) + 1.2);
    __recoveredScope.J.lerp(__recoveredScope.q, 1 - Math.exp(-e * Math.max(10, n)));
    __recoveredScope.camera.lookAt(__recoveredScope.J);
    __recoveredScope.camera.fov = 60 + __recoveredScope.Sf() * 15 + Math.min(t.speed, 30) * .35;
    __recoveredScope.camera.updateProjectionMatrix();
  };
}
