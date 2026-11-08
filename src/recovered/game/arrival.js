/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Gg. Live dependencies: Vector3, groundHeightfield. */
export function create_Gg(__recoveredScope) {
  return function Gg(e) {
    let [t, n] = [e.points[0], e.points[e.points.length - 1]].map(([e, t]) => new __recoveredScope.Vector3(e, __recoveredScope.groundHeightfield.heightAt(e, t), t)),
      [r, i] = t.y <= n.y ? [t, n] : [n, t];
    return {
      bottom: r,
      top: i,
      dir: new __recoveredScope.Vector3(i.x - r.x, 0, i.z - r.z).normalize()
    };
  };
}
/* Recovered binding qg. Live dependencies: Id, r_, Kf, Rf, zf, Vf, lf, physics, Qu, G, Vector3, computeFollowCameraTargets, Bf, Jg. Writes: $u, W, df, Kg. */
export function create_qg(__recoveredScope) {
  return function qg(e, t = e) {
    __recoveredScope.Id();
    __recoveredScope.$u = e;
    __recoveredScope.r_();
    __recoveredScope.W = `arrive`;
    __recoveredScope.Kf(false);
    __recoveredScope.Rf.group.visible = false;
    __recoveredScope.zf.opacity = 0;
    __recoveredScope.Vf.classList.add(`hidden`);
    __recoveredScope.lf.classList.add(`hidden`);
    __recoveredScope.df = null;
    __recoveredScope.physics.reset(t.x, t.z, __recoveredScope.Qu(t.dx, t.dz));
    __recoveredScope.G.set(t.dx, 0, t.dz);
    let n = new __recoveredScope.Vector3(),
      r = new __recoveredScope.Vector3();
    __recoveredScope.computeFollowCameraTargets(n, r);
    let i = matchMedia(`(prefers-reduced-motion: reduce)`).matches,
      a = n.clone();
    i || (a.addScaledVector(__recoveredScope.G, -260), a.y += 380);
    __recoveredScope.Kg = {
      t: -.25,
      dur: i ? .65 : 2.8,
      end: n,
      look: r,
      from: a,
      at: t
    };
    __recoveredScope.Bf(1);
    __recoveredScope.Jg(0);
  };
}
/* Recovered binding Jg. Live dependencies: Kg, camera, groundHeightfield, J, Pf, Sf, Bf, MathUtils, startRun, $u, rm. Writes: Kg. */
export function create_Jg(__recoveredScope) {
  return function Jg(e) {
    let t = __recoveredScope.Kg;
    t.t = Math.min(1, t.t + e / t.dur);
    let n = Math.max(0, t.t),
      r = (.01 ** (n * n * n * (n * (n * 6 - 15) + 10)) - .01) / .99;
    __recoveredScope.camera.position.lerpVectors(t.end, t.from, r);
    __recoveredScope.camera.position.y = Math.max(__recoveredScope.camera.position.y, __recoveredScope.groundHeightfield.heightAt(__recoveredScope.camera.position.x, __recoveredScope.camera.position.z) + 2);
    __recoveredScope.J.copy(t.look);
    __recoveredScope.camera.lookAt(__recoveredScope.J);
    __recoveredScope.Pf(60 + __recoveredScope.Sf() * 15, Math.max(6, __recoveredScope.camera.position.distanceTo(t.look)));
    __recoveredScope.Bf(1 - __recoveredScope.MathUtils.smoothstep(n, 0, .4));
    !(t.t < 1) && (__recoveredScope.Bf(0), __recoveredScope.Pf(60 + __recoveredScope.Sf() * 15, 6), __recoveredScope.Kg = null, __recoveredScope.startRun(t.at), t.at === __recoveredScope.$u && __recoveredScope.$u.board && __recoveredScope.rm(__recoveredScope.$u.board));
  };
}
