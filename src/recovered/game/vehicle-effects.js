/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding yg. Live dependencies: B, vg, Wu. Writes: gg. */
export function create_yg(__recoveredScope) {
  return function yg(e) {
    let t = __recoveredScope.B.lake.level;
    e.oars.forEach((n, r) => {
      n && (__recoveredScope.B.model.bladeAt(r, __recoveredScope.vg), __recoveredScope.Wu.emit(__recoveredScope.vg.x, t, __recoveredScope.vg.z, .12, e.type === `catch` ? 1.3 : .9, 1.7, .75));
    });
    e.type === `catch` && (__recoveredScope.gg = .4);
  };
}
/* Recovered binding bg. Live dependencies: B, _g, Ep, Wu. Writes: _g. */
export function create_bg(__recoveredScope) {
  return function bg(e) {
    let t = __recoveredScope.B.phys,
      n = t.speed;
    if (__recoveredScope._g += n * e, __recoveredScope._g < .8 || n < .25) return;
    __recoveredScope._g = 0;
    let r = t.forward(__recoveredScope.Ep),
      i = __recoveredScope.B.model.dims.halfLength;
    __recoveredScope.Wu.emit(t.pos.x - r.x * i, __recoveredScope.B.lake.level, t.pos.z - r.z * i, .4, 1.4 + n * .8, 2.6, Math.min(.45, n * .25));
  };
}
/* Recovered binding xg. Live dependencies: B, Ep, Dp, Rp, groundHeightfield. */
export function create_xg(__recoveredScope) {
  return function xg() {
    let e = __recoveredScope.B.phys,
      t = e.forward(__recoveredScope.Ep),
      n = e.left(__recoveredScope.Dp);
    __recoveredScope.B.model.marks.forEach(({
      along: r,
      left: i,
      width: a
    }, o) => {
      __recoveredScope.Rp.set(e.pos.x + t.x * r + n.x * i, 0, e.pos.z + t.z * r + n.z * i);
      __recoveredScope.Rp.y = __recoveredScope.groundHeightfield.heightAt(__recoveredScope.Rp.x, __recoveredScope.Rp.z);
      __recoveredScope.B.tracks[o].add(__recoveredScope.Rp, n, a);
    });
  };
}
/* Recovered binding Sg. Live dependencies: . */
export function create_Sg(__recoveredScope) {
  return function Sg(e, t, n) {
    let r = Math.cos(e.yaw),
      i = Math.sin(e.yaw),
      a = t - e.x,
      o = n - e.z;
    return Math.hypot(Math.max(0, Math.abs(a * r - o * i) - e.hw), Math.max(0, Math.abs(a * i + o * r) - e.hd));
  };
}
