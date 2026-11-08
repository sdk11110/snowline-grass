/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/throw-f7i-9-x5.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
import { bt as MathUtils } from "../../vendor/three/core.js";
var t = {
  release: .6,
  length: 1.4
};
function n(n) {
  let {
    smoothstep: r
  } = MathUtils;
  return r(n, 0, .14) * (1 - r(n, 1.05, t.length));
}
var r = a([{
  t: 0,
  turn: 0,
  lean: .04,
  drop: 0,
  shift: 0,
  lf: [.15, .06],
  rf: [-.15, -.02],
  rfLift: 0,
  rfYaw: 0,
  lh: [.03, -.32, .04],
  lb: [1, -1, -.3],
  rh: [-.03, -.32, .04],
  rb: [-1, -1, -.3],
  grip: 1
}, {
  t: .24,
  turn: -.5,
  lean: -.02,
  drop: .03,
  shift: -.03,
  rf: [-.19, -.2],
  rfLift: .07,
  rfYaw: -.5,
  lh: [0, -.08, .28],
  rh: [-.14, -.12, -.18],
  rb: [-1, -.7, -.4]
}, {
  t: .46,
  turn: -1,
  lean: -.12,
  drop: .08,
  shift: -.08,
  rf: [-.22, -.4],
  rfLift: 0,
  rfYaw: -1,
  lh: [-.03, .04, .32],
  lb: [1, -.6, -.2],
  rh: [-.1, .17, -.2],
  rb: [-1, -.15, -.35]
}, {
  t: .6,
  turn: .45,
  lean: .35,
  drop: .07,
  shift: .08,
  rfYaw: -.7,
  lh: [-.06, -.17, .17],
  lb: [1, -1, -.4],
  rh: [.03, .13, .31],
  rb: [-.7, -.5, 0]
}, {
  t: .86,
  turn: .75,
  lean: .75,
  drop: .1,
  shift: .12,
  rf: [-.13, .06],
  rfLift: .1,
  rfYaw: -.2,
  lh: [.04, -.25, -.04],
  rh: [.24, -.26, .14],
  rb: [-.4, -.4, .8],
  grip: 0
}, {
  t: 1.08,
  turn: .25,
  lean: .22,
  drop: .03,
  shift: .05,
  rf: [-.14, .1],
  rfLift: 0,
  rfYaw: 0,
  lh: [.03, -.32, .04],
  lb: [1, -1, -.3],
  rh: [-.02, -.3, .08],
  rb: [-1, -1, -.3]
}, {
  t: t.length,
  turn: 0,
  lean: .04,
  drop: 0,
  shift: 0,
  rh: [-.03, -.32, .04]
}]);
var i = a([{
  t: 0,
  turn: 0,
  rh: [0, -.4, .1]
}, {
  t: .46,
  turn: -.55,
  rh: [-.3, .25, -.1]
}, {
  t: .6,
  turn: .45,
  rh: [.4, .15, .15]
}, {
  t: .86,
  turn: .6,
  rh: [.3, -.3, .3]
}, {
  t: t.length,
  turn: 0,
  rh: [0, -.4, .1]
}]);
function a(e) {
  let t = {};
  return e.map(e => t = {
    ...t,
    ...e
  });
}
function o(t, n) {
  let r = 0;
  for (; r < t.length - 2 && t[r + 1].t <= n;) r++;
  let i = t[r],
    a = t[r + 1],
    o = MathUtils.smootherstep(n, i.t, a.t),
    s = {};
  for (let e of Object.keys(i)) {
    let t = i[e],
      n = a[e];
    s[e] = Array.isArray(t) ? t.map((e, t) => e + (n[t] - e) * o) : t + (n - t) * o;
  }
  return s;
}
export { n as a, o as i, r as n, t as r, i as t };
export { o };
