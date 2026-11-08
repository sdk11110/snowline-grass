/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/gear-mount-CvxORJQd.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
import { At as e, B as t, Cr as Vector3, Ct as r, G as i, Jn as a, R as o, Rt as s, Sr as c, St as l, Vt as u, Xn as d, bt as MathUtils, d as p, g as m, h, l as g, rt as _, u as v, wt as y, y as b } from "../../vendor/three/core.js";
import { t as x } from "../../vendor/three/buffer-geometry-utils.js";
import { createToonMaterial } from "../render/toon-materials.js";
function C(e, t, n, r) {
  return i => {
    if (i < e || i > t) return null;
    let a = (i - e) / (t - e),
      o = n(a),
      s = r(a);
    return [o - s, o + s];
  };
}
function w(e, t, n, r) {
  return C(t - r, t + r, () => e, e => n * Math.sqrt(1 - (2 * e - 1) ** 2));
}
function T(e, t, n, r, i) {
  return C(e, t, e => n + (r - n) * e, e => i * (1 - e));
}
function E(e) {
  switch (e) {
    case `alpenglow`:
      return [{
        ink: 1,
        band: w(0, .23, .105, .062)
      }, {
        ink: 2,
        band: T(.31, .365, .015, -.02, .12)
      }, {
        ink: 2,
        band: T(.325, .39, .03, -.015, .08)
      }, {
        ink: 2,
        band: T(.35, .41, .05, .005, .042)
      }];
    case `contours`:
      return [1, .78, .56, .34].flatMap((e, t) => [-1, 1].map(n => ({
        ink: t % 2 == 0 ? 1 : 2,
        band: C(.49 - .32 * e, .49 + .32 * e, t => -.07 + .1 * Math.sin(Math.PI * t) + n * .13 * e * Math.sin(Math.PI * t), e => .006 * Math.sin(Math.PI * e))
      })));
    case `slalom`:
      return [{
        ink: 1,
        band: C(.1, .93, e => .115 * Math.sin(3.5 * Math.PI * e), e => .036 * Math.sin(Math.PI * e))
      }, {
        ink: 2,
        band: C(.13, .89, e => .11 * Math.sin(3.25 * Math.PI * e) - .057, e => .007 * Math.sin(Math.PI * e))
      }];
    case `ridgeline`:
      return [{
        ink: 1,
        band: T(.19, .57, -.145, .175, .038)
      }, {
        ink: 1,
        band: T(.31, .72, -.16, .155, .058)
      }, {
        ink: 2,
        band: T(.49, .78, -.15, .12, .037)
      }, {
        ink: 2,
        band: T(.62, .92, -.14, .1, .025)
      }];
    case `fault`:
      return [{
        ink: 1,
        band: C(.1, .92, e => e < .45 ? -.14 + .58 * e : .121 - .36 * (e - .45), e => .038 * Math.sin(Math.PI * e))
      }, {
        ink: 2,
        band: T(.44, .69, .108, .175, .012)
      }, {
        ink: 2,
        band: T(.34, .48, -.13, .06, .018)
      }, {
        ink: 2,
        band: T(.66, .86, .04, .15, .013)
      }];
    case `wind`:
      return Array.from({
        length: 6
      }, (e, t) => ({
        ink: t % 3 == 0 ? 2 : 1,
        band: C(.16 + t * .08, .48 + t * .08, e => -.15 + .3 * e, e => .017 * Math.sin(Math.PI * e) ** 2)
      }));
    case `tracks`:
      return Array.from({
        length: 5
      }, (e, t) => {
        let n = (t % 2 ? 1 : -1) * .062,
          r = .19 + t * .146;
        return [{
          ink: 1,
          band: w(n, r + .018, .037, .02)
        }, {
          ink: 2,
          band: w(n - .034, r - .011, .013, .011)
        }, {
          ink: 2,
          band: w(n, r - .019, .014, .011)
        }, {
          ink: 2,
          band: w(n + .034, r - .011, .013, .011)
        }];
      }).flat();
    case `crystal`:
      return [{
        ink: 1,
        band: C(.13, .43, () => 0, e => .105 * (1 - Math.abs(2 * e - 1)))
      }, {
        ink: 2,
        band: C(.18, .38, () => .008, e => .041 * (1 - Math.abs(2 * e - 1)))
      }, ...[.51, .62, .73].map((e, t) => ({
        ink: t === 1 ? 2 : 1,
        band: C(e - .03, e + .03, () => 0, e => .033 * (1 - Math.abs(2 * e - 1)))
      }))];
    case `comet`:
      return [{
        ink: 1,
        band: w(-.065, .22, .06, .042)
      }, {
        ink: 1,
        band: C(.23, .89, e => -.065 + .22 * Math.sin(e * 2.3), e => .05 * (1 - e) ** 2)
      }, {
        ink: 2,
        band: C(.32, .94, e => -.08 + .19 * Math.sin(e * 2.4), e => .013 * (1 - e))
      }];
    default:
      return [];
  }
}
function D(e) {
  switch (e) {
    case `mountain`:
      return [[[-1, .65], [-.33, -.48], [-.1, -.18], [.27, -.79], [1, .65], [-1, .65]], [[.04, -.41], [.2, -.25], [.31, -.42], [.48, -.38]]];
    case `fox`:
      return [[[0, .83], [-.86, .13], [-.93, -.82], [-.35, -.35], [.35, -.35], [.93, -.82], [.86, .13], [0, .83]], [[-.79, .12], [-.42, .11], [-.11, .53], [.11, .53], [.42, .11], [.79, .12]], [[-.48, -.04], [-.29, .02]], [[.29, .02], [.48, -.04]]];
    case `snowflake`:
      return Array.from({
        length: 6
      }, (e, t) => {
        let n = t * Math.PI / 3,
          r = (e, t) => [e * Math.cos(n) - t * Math.sin(n), e * Math.sin(n) + t * Math.cos(n)];
        return [[[0, 0], r(0, 1)], [r(-.25, .78), r(0, .51), r(.25, .78)]];
      }).flat();
  }
}
var O = 11;
function k(e) {
  return e.replace(/[^a-z]/gi, ``).slice(0, O);
}
var A = {
  A: `041034 0222`,
  B: `040020312202 0222332404`,
  C: `301000041434`,
  D: `04002031332404`,
  E: `30000434 0222`,
  F: `040030 0222`,
  G: `3010000414343222`,
  H: `0004 3034 0232`,
  I: `0030 2024 0434`,
  J: `3033140403`,
  K: `0004 300234`,
  L: `000434`,
  M: `0400123034`,
  N: `04003430`,
  O: `001030340400`,
  P: `040020312202`,
  Q: `0030340400 2234`,
  R: `040020312202 1234`,
  S: `300002323404`,
  T: `0030 2024`,
  U: `0004143430`,
  V: `001430`,
  W: `0004123430`,
  X: `0034 3004`,
  Y: `002230 2224`,
  Z: `00300434`
};
function j(e) {
  let t = k(e).toUpperCase();
  return [...t].flatMap((e, n) => A[e].trim().split(` `).map(e => {
    let r = [];
    for (let i = 0; i < e.length; i += 2) {
      let a = [n * 4.5 + Number(e[i]) - ((t.length - 1) * 4.5 + 3) / 2, Number(e[i + 1]) - 2],
        o = r[r.length - 1];
      (!o || a[0] !== o[0] || a[1] !== o[1]) && r.push(a);
    }
    return r;
  }));
}
function M(e) {
  let t = e.colors;
  return {
    topsheetColor: t.top,
    baseColor: t.base,
    topsheetTailColor: e.tailColors.top,
    baseTailColor: e.tailColors.base,
    noseSticker: e.noseSticker,
    noseStickerColor: e.noseStickerColor,
    noseName: e.noseName,
    pattern: e.pattern,
    patternColor: t.pat,
    patternColor2: t.pat2,
    basePattern: e.pattern === `none` ? `none` : `lengthStripes`,
    basePatternColor: t.top
  };
}
function N(e, t) {
  if (!t) return;
  let {
    geometry: n,
    material: r
  } = e;
  n.computeBoundingBox();
  let {
      min: i,
      max: a
    } = n.boundingBox,
    o = n.getAttribute(`position`),
    s = new Float32Array(o.count * 3),
    c = r.color.clone(),
    l = new b(t),
    u = new b();
  for (let e = 0; e < o.count; e++) {
    let t = (o.getZ(e) - i.z) / (a.z - i.z);
    u.copy(c).lerp(l, t).toArray(s, e * 3);
  }
  n.setAttribute(`color`, new v(s, 3));
  r.color.set(16777215);
  r.vertexColors = true;
}
var ee = {
  length: 1.7,
  noseWidth: .478,
  waistWidth: .398,
  tailWidth: .418,
  thickness: .009,
  notchDepth: .22,
  topsheetColor: `#f2f2f0`,
  pattern: `none`,
  noseSticker: `none`,
  noseStickerColor: `#17171a`,
  noseName: ``,
  patternColor: `#d82f2a`,
  patternColor2: `#17171a`,
  baseColor: `#d82f2a`,
  basePattern: `none`,
  basePatternColor: `#f2f2f0`,
  sidewallColor: `#232327`,
  inserts: true,
  segments: [144, 24],
  castShadow: true,
  receiveShadow: true
};
var te = [[0, .03], [.004, .173], [.007, .235], [.01, .28], [.014, .321], [.017, .358], [.021, .399], [.024, .432], [.028, .465], [.031, .498], [.035, .527], [.038, .56], [.042, .584], [.045, .605], [.049, .634], [.052, .65], [.06, .694], [.08, .793], [.1, .876], [.12, .934], [.14, .969], [.16, .99], [.18, 1], [.2, .993], [.22, .988], [.24, .983], [.26, .964], [.28, .956], [.3, .938], [.32, .93], [.34, .913], [.36, .903], [.38, .889], [.4, .88], [.42, .87], [.44, .864], [.46, .855], [.48, .849], [.5, .84], [.52, .841], [.54, .834], [.56, .83], [.58, .83], [.6, .828], [.62, .83], [.64, .83], [.66, .83], [.68, .83], [.7, .83], [.72, .834], [.74, .835], [.76, .846], [.78, .851], [.8, .851], [.82, .859], [.84, .87], [.86, .876], [.88, .881], [.9, .896], [.92, .902], [.94, .909], [.95, .909], [.957, .909], [.962, .91], [.967, .889], [.971, .844], [.976, .798], [.98, .749], [.985, .691], [.99, .63], [.994, .564], [1, .481]];
var ne = [[.86, 0], [.88, .072], [.9, .148], [.92, .216], [.93, .239], [.939, .267], [.948, .296], [.957, .321], [.967, .346], [.976, .37], [.985, .395], [.994, .412], [1, .44]];
function P(e, t) {
  if (t <= e[0][0]) return e[0][1];
  for (let n = 1; n < e.length; n++) if (t <= e[n][0]) {
    let [r, i] = e[n - 1],
      [a, o] = e[n];
    return i + (o - i) * ((t - r) / (a - r));
  }
  return e[e.length - 1][1];
}
var F = [[0, 0], [.14, .06], [.76, .88], [1, 1]];
function I(e) {
  return P(F, e);
}
function L(e, t) {
  return Math.max(.0015, P(te, e) * (t.noseWidth / 2));
}
function R(e) {
  let t = 0;
  if (e < .32) {
    let n = (.32 - e) / .32;
    t += .055 * n * n;
  }
  if (e > .3 && e < .88 && (t += .006 * Math.sin(Math.PI * (e - .3) / .58)), e > .9) {
    let n = (e - .9) / .1;
    t += .01 * n * n;
  }
  return t;
}
function z(e, t) {
  let n = .55 + .45 * MathUtils.smoothstep(e, 0, .09),
    r = 1 - .3 * MathUtils.smoothstep(e, .94, 1),
    i = 1 - .38 * MathUtils.smoothstep(t, .78, 1);
  return n * r * i;
}
function B(e, t) {
  return P(ne, e) * (t.noseWidth / 2);
}
function re(e) {
  return Math.sign(e) * (1 - (1 - Math.abs(e)) ** 1.55);
}
function V(e, t, n, r, i) {
  let a = (t, n) => {
      let i = Math.min(1, Math.max(0, t)),
        a = e.thickness / 2 * z(i, Math.abs(n));
      return [n * L(i, e), R(i) + r * (a + 4e-4), i * e.length - e.length / 2];
    },
    o = .0015,
    s = .01,
    [c, l, u] = a(t + o, n),
    [d, f, p] = a(t - o, n),
    [m, h, g] = a(t, n + s),
    [_, v, y] = a(t, n - s),
    b = [c - d, l - f, u - p],
    x = [m - _, h - v, g - y];
  i.set(x[1] * b[2] - x[2] * b[1], x[2] * b[0] - x[0] * b[2], x[0] * b[1] - x[1] * b[0]);
  i.y * r < 0 && i.negate();
  i.normalize();
}
function H(e, t, n) {
  let r = n ? t.basePatternColor : t.patternColor,
    i = t.patternColor2;
  switch (e) {
    case `lengthStripes`:
      return [{
        color: r,
        strip: [-.03, .03]
      }, {
        color: r,
        strip: [.047, .057]
      }, {
        color: r,
        strip: [-.057, -.047]
      }];
    case `diagonal`:
      return [{
        color: r,
        test: (e, t) => {
          let n = (t * 5 + e * 2.4) % 1;
          return (n < 0 ? n + 1 : n) < .38;
        }
      }];
    case `chevrons`:
      return [{
        color: r,
        test: (e, t) => {
          let n = (t * 6 - Math.abs(e) * 1.5) % 1;
          return (n < 0 ? n + 1 : n) < .3;
        }
      }];
    case `split`:
      return [{
        color: r,
        test: (e, t) => t < .26
      }, {
        color: i,
        test: (e, t) => t > .865
      }];
    case `blocks`:
      return [{
        color: r,
        test: (e, t) => t > .15 && t < .9 && (Math.floor(t * 9) + Math.floor((e + .17) / .085)) % 2 == 0
      }];
    default:
      return E(e).map(({
        ink: e,
        band: t
      }) => ({
        color: e === 1 ? r : i,
        band: t,
        offset: e === 1 ? 0 : 3e-4
      }));
  }
}
function ie(e) {
  let t = [],
    n = (t, n) => R(n) + e.thickness / 2 * z(n, Math.abs(t) / Math.max(L(n, e), 1e-4)) + .0012,
    r = (r, i, a) => {
      r.rotateX(-Math.PI / 2);
      r.translate(i, n(i, a), a * e.length - e.length / 2);
      t.push(r.toNonIndexed());
    };
  for (let t of [.42, .74]) for (let n of [-.032, .032]) for (let i = -2; i <= 2; i++) r(new m(.005, 14), n, t + i * .036 / e.length);
  for (let e of [.545, .565, .585]) r(new u(.034, .0075), -.1, e);
  let i = 0;
  for (let e of t) i += e.attributes.position.count;
  let a = new Float32Array(i * 3),
    o = 0;
  for (let e of t) {
    a.set(e.attributes.position.array, o * 3);
    o += e.attributes.position.count;
  }
  let s = new p();
  return s.setAttribute(`position`, new v(a, 3)), s.computeVertexNormals(), s;
}
function ae(e) {
  let [t, r] = e.segments,
    i = (t + 1) * (r + 1),
    a = new Float32Array(i * 3),
    o = new Float32Array(i * 3),
    s = new Float32Array(i * 3),
    c = new Float32Array(i * 3),
    l = new Float32Array(i),
    u = new Float32Array(i),
    d = new Float32Array(i),
    f = Array(i).fill(false),
    p = [];
  for (let e = 0; e <= r; e++) p.push(re(e / r * 2 - 1));
  for (let n = 0; n <= t; n++) {
    let i = I(n / t),
      s = L(i, e),
      c = B(i, e);
    for (let t = 0; t <= r; t++) {
      let m = n * (r + 1) + t,
        h = p[t],
        g = h * s,
        _ = Math.abs(g) >= c - 1e-9;
      if (_ && c > 0) {
        let e = (p[Math.min(r, t + 1)] - p[Math.max(0, t - 1)]) * s;
        Math.abs(g) - c < e && (g = Math.sign(g) * c);
      }
      let v = e.thickness / 2 * z(i, Math.abs(h)),
        y = R(i),
        b = i * e.length - e.length / 2;
      a.set([g, y + v + 4e-4, b], m * 3);
      o.set([g, y - v - 4e-4, b], m * 3);
      l[m] = g;
      u[m] = i;
      d[m] = h;
      f[m] = _;
    }
  }
  let m = new Vector3();
  for (let t = 0; t < i; t++) {
    V(e, u[t], d[t], 1, m);
    s.set([m.x, m.y, m.z], t * 3);
    V(e, u[t], d[t], -1, m);
    c.set([m.x, m.y, m.z], t * 3);
  }
  let h = [],
    g = r + 1;
  for (let e = 0; e < t; e++) for (let t = 0; t < r; t++) {
    let n = e * g + t,
      r = n + 1,
      i = n + g,
      a = i + 1,
      o = f[n],
      s = f[r],
      c = f[i],
      l = f[a];
    o && s && c && l ? h.push(n, i, r, r, i, a) : !o && s && c && l ? h.push(r, i, a) : o && !s && c && l ? h.push(n, i, a) : o && s && !c && l ? h.push(n, a, r) : o && s && c && !l && h.push(n, i, r);
  }
  return {
    topPos: a,
    botPos: o,
    topN: s,
    botN: c,
    xArr: l,
    tArr: u,
    topIdx: h,
    count: i
  };
}
function U(e, t) {
  let n = new p();
  if (n.setAttribute(`position`, new v(t > 0 ? e.topPos.slice() : e.botPos.slice(), 3)), n.setAttribute(`normal`, new v(t > 0 ? e.topN.slice() : e.botN.slice(), 3)), t > 0) n.setIndex(e.topIdx);else {
    let t = [];
    for (let n = 0; n < e.topIdx.length; n += 3) t.push(e.topIdx[n], e.topIdx[n + 2], e.topIdx[n + 1]);
    n.setIndex(t);
  }
  return n;
}
function oe(e, n, r) {
  let i = n > 0 ? e.topPos : e.botPos,
    a = n > 0 ? e.topN : e.botN,
    o = [],
    s = [],
    c = n * 7e-4;
  for (let t = 0; t < e.topIdx.length; t += 3) {
    let [l, u, d] = [e.topIdx[t], e.topIdx[t + 1], e.topIdx[t + 2]];
    if (!r((e.xArr[l] + e.xArr[u] + e.xArr[d]) / 3, (e.tArr[l] + e.tArr[u] + e.tArr[d]) / 3)) continue;
    let f = n > 0 ? [l, u, d] : [l, d, u];
    for (let e of f) {
      o.push(i[e * 3], i[e * 3 + 1] + c, i[e * 3 + 2]);
      s.push(a[e * 3], a[e * 3 + 1], a[e * 3 + 2]);
    }
  }
  if (o.length === 0) return null;
  let l = new p();
  return l.setAttribute(`position`, new t(o, 3)), l.setAttribute(`normal`, new t(s, 3)), l;
}
function W(e, r, i, a = 0, o = e.segments[0]) {
  let s = o,
    c = [],
    l = [],
    u = (t, n) => {
      let i = Math.max(L(n, e), 1e-4);
      return R(n) + r * (e.thickness / 2 * z(n, Math.abs(t) / i) + .0011 + a);
    },
    d = new Vector3(),
    f = (t, n) => (V(e, n, t / Math.max(L(n, e), 1e-4), r, d), [d.x, d.y, d.z]),
    m = new Map();
  for (let t = 0; t <= s; t++) {
    let n = I(t / s),
      a = L(n, e),
      o = B(n, e),
      d = i(n);
    if (!d) {
      m.clear();
      continue;
    }
    let [p, h] = d,
      g = Math.max(p, -a + .003),
      _ = Math.min(h, a - .003),
      v = new Map();
    _ - g >= .002 && (o <= 0 || _ <= -o || g >= o ? v.set(`full`, [g, _]) : (-o - g >= .002 && v.set(`left`, [g, -o]), _ - o >= .002 && v.set(`right`, [o, _])));
    let y = n * e.length - e.length / 2,
      b = new Map();
    for (let [e, [t, i]] of v) {
      let a = {
          p: [t, u(t, n), y],
          n: f(t, n)
        },
        o = {
          p: [i, u(i, n), y],
          n: f(i, n)
        },
        s = m.get(e);
      if (s) {
        let [e, t] = s,
          n = r > 0 ? [e, a, t, t, a, o] : [e, t, a, t, o, a];
        for (let e of n) {
          c.push(...e.p);
          l.push(...e.n);
        }
      }
      b.set(e, [a, o]);
    }
    m = b;
  }
  if (c.length === 0) return null;
  let h = new p();
  return h.setAttribute(`position`, new t(c, 3)), h.setAttribute(`normal`, new t(l, 3)), h;
}
function G(e, n, r, i, a) {
  let o = [],
    s = (t, n) => {
      let r = n / e.length + .5,
        i = Math.max(L(r, e), 1e-4);
      return [t, R(r) + e.thickness / 2 * z(r, Math.abs(t) / i) + .0022, n];
    };
  for (let t of n) for (let n = 1; n < t.length; n++) {
    let [c, l] = t[n - 1].map(e => e * i),
      [u, d] = t[n].map(e => e * i),
      f = u - c,
      p = d - l,
      m = Math.hypot(f, p),
      h = -p * a / m,
      g = f * a / m,
      _ = Math.ceil(m / .006),
      v = (r - .5) * e.length;
    for (let e = 0; e < _; e++) {
      let t = e / _,
        n = (e + 1) / _,
        r = s(c + f * t + h, v + l + p * t + g),
        i = s(c + f * n + h, v + l + p * n + g),
        a = s(c + f * t - h, v + l + p * t - g),
        u = s(c + f * n - h, v + l + p * n - g);
      o.push(...r, ...i, ...a, ...a, ...i, ...u);
    }
  }
  return new p().setAttribute(`position`, new t(o, 3));
}
function se(e) {
  let n = new Map(),
    r = (e, t) => {
      let r = e < t ? `${e}_${t}` : `${t}_${e}`,
        i = n.get(r);
      i ? i.n++ : n.set(r, {
        a: e,
        b: t,
        n: 1
      });
    };
  for (let t = 0; t < e.topIdx.length; t += 3) {
    r(e.topIdx[t], e.topIdx[t + 1]);
    r(e.topIdx[t + 1], e.topIdx[t + 2]);
    r(e.topIdx[t + 2], e.topIdx[t]);
  }
  let i = [],
    a = (e, t) => [e[t * 3], e[t * 3 + 1], e[t * 3 + 2]];
  for (let t of n.values()) {
    if (t.n !== 1) continue;
    let n = a(e.topPos, t.a),
      r = a(e.topPos, t.b),
      o = a(e.botPos, t.a),
      s = a(e.botPos, t.b);
    i.push(...n, ...o, ...s, ...n, ...s, ...r);
  }
  let o = new p();
  return o.setAttribute(`position`, new t(i, 3)), o.computeVertexNormals(), o;
}
function K(t = {}) {
  let n = {
      ...ee,
      ...t
    },
    a = new i();
  a.name = `SwallowtailBoard`;
  let o = ae(n),
    s = (t, n) => new e({
      color: t,
      roughness: n,
      metalness: 0
    }),
    c = new r(se(o), s(n.sidewallColor, .62));
  c.material.side = 2;
  c.name = `core-sidewall`;
  a.add(c);
  let l = new r(U(o, 1), s(n.topsheetColor, .5));
  N(l, t.topsheetTailColor);
  l.name = `topsheet`;
  a.add(l);
  let u = new r(U(o, -1), s(n.baseColor, .32));
  N(u, t.baseTailColor);
  u.name = `base`;
  a.add(u);
  let d = (e, t, i, c) => {
    for (let l of H(e, n, t)) {
      let e = l.band ? W(n, i, l.band, l.offset, Math.max(240, n.segments[0])) : l.strip ? W(n, i, () => l.strip) : oe(o, i, l.test);
      if (e) {
        let n = new r(e, s(l.color, c));
        n.name = t ? `pattern-base` : `pattern-top`;
        a.add(n);
      }
    }
  };
  if (d(n.pattern, false, 1, .5), d(n.basePattern, true, -1, .32), n.inserts) {
    let e = new r(ie(n), s(`#17171a`, .55));
    e.name = `detail-inserts`;
    a.add(e);
  }
  if (a.traverse(e => {
    e.isMesh && (e.castShadow = n.castShadow, e.receiveShadow = n.receiveShadow);
  }), n.noseSticker !== `none`) {
    let e = new y({
        color: n.noseStickerColor
      }),
      t = Math.min(.085, n.length * .05, L(.08, n) * .75),
      i = new r(G(n, D(n.noseSticker), .135, t, t * .031), e);
    if (n.noseName) {
      let t = Math.min(.0065, L(.21, n) / 30),
        i = new r(G(n, j(n.noseName), .215, t, t * .19), e);
      i.name = `nose-sticker-name`;
      a.add(i);
    }
    i.name = `nose-sticker`;
    a.add(i);
  }
  return a.userData.boardSpec = {
    length: n.length,
    noseWidth: n.noseWidth,
    waistWidth: n.waistWidth,
    tailWidth: n.tailWidth,
    notchDepth: n.notchDepth,
    thickness: n.thickness,
    pattern: n.pattern,
    textures: 0
  }, a;
}
var ce = {
  pivot: {
    x: .1165,
    y: .049,
    z: -.215,
    ringRadius: .0235,
    capRadius: .012
  },
  highback: {
    leanDeg: 8,
    heightAbovePivot: .26,
    maxHalfWidth: .102,
    waistHalfWidth: .0774,
    dishK: 2.3,
    dishCentreBehindPivot: .03,
    flareFromH: .16,
    flareK: 1.6,
    rimWidth: .012,
    wallThickness: .0075
  },
  cutout: {
    topH: .175,
    halfWidth: .0344,
    apexH: .101,
    padSideGrow: .0075
  },
  base: {
    length: .343,
    maxHalfWidth: .118,
    rimTop: .022,
    bedTop: .0175
  }
};
var q = {
  outline: 96,
  cutoutArc: 7,
  skinEdge: .03,
  panelEdge: .022,
  hoop: 170,
  wall: 66,
  wallEdge: .032,
  plan: 40,
  ring: 40,
  cap: 28
};
var le = {
  outline: 40,
  cutoutArc: 3,
  skinEdge: .07,
  panelEdge: .06,
  hoop: 72,
  wall: 30,
  wallEdge: .09,
  plan: 18,
  ring: 14,
  cap: 10
};
var J = q;
function ue(e, t, n) {
  let r = e => e.filter((t, n) => {
      let r = e[(n + e.length - 1) % e.length];
      return Math.hypot(t[0] - r[0], t[1] - r[1]) > 1e-7;
    }),
    i = r(e),
    a = t.map(r),
    o = [...i, ...a.flat()].map(e => [...e]),
    s = e => e.map(e => new c(e[0], e[1])),
    l = d.triangulateShape(s(i), a.map(s)).map(e => [...e]),
    u = (e, t) => Math.hypot(o[e][0] - o[t][0], o[e][1] - o[t][1]);
  for (let e = 0; e < 8; e++) {
    let e = new Map(),
      t = (t, r) => {
        if (u(t, r) <= n) return -1;
        let i = t < r ? `${t}_${r}` : `${r}_${t}`,
          a = e.get(i);
        return a === void 0 && (a = o.length, o.push([(o[t][0] + o[r][0]) / 2, (o[t][1] + o[r][1]) / 2, (o[t][2] + o[r][2]) / 2]), e.set(i, a)), a;
      },
      r = [];
    for (let [e, n, i] of l) {
      let a = t(e, n),
        o = t(n, i),
        s = t(i, e),
        c = +(a >= 0) + +(o >= 0) + +(s >= 0);
      c === 0 ? r.push([e, n, i]) : c === 3 ? r.push([e, a, s], [a, n, o], [s, o, i], [a, o, s]) : c === 1 ? a >= 0 ? r.push([e, a, i], [a, n, i]) : o >= 0 ? r.push([e, n, o], [e, o, i]) : r.push([e, n, s], [s, n, i]) : a < 0 ? r.push([e, n, o], [e, o, s], [s, o, i]) : o < 0 ? r.push([e, a, s], [a, n, i], [a, i, s]) : r.push([e, a, o], [e, o, i], [a, n, o]);
    }
    if (l = r, e.size === 0) break;
  }
  return {
    verts: o,
    tris: l
  };
}
var Y = class {
  pos = [];
  nor = [];
  idx = [];
  add(e, t, r, i) {
    let a = this.pos.length / 3,
      o = new Vector3(),
      s = new Vector3(),
      c = new Vector3(),
      l = new Vector3(),
      u = t => c.crossVectors(o.subVectors(e[t[1]], e[t[0]]), s.subVectors(e[t[2]], e[t[0]])),
      d = 0;
    for (let n of t) {
      l.copy(e[n[0]]).add(e[n[1]]).add(e[n[2]]).divideScalar(3);
      d += u(n).dot(r(l));
    }
    let f = d < 0,
      p = e.map(() => new Vector3());
    for (let e of t) {
      u(e);
      f && c.negate();
      p[e[0]].add(c);
      p[e[1]].add(c);
      p[e[2]].add(c);
      f ? this.idx.push(a + e[0], a + e[2], a + e[1]) : this.idx.push(a + e[0], a + e[1], a + e[2]);
    }
    e.forEach((e, t) => {
      let n = i ? i[t] : p[t].normalize();
      this.pos.push(e.x, e.y, e.z);
      this.nor.push(n.x, n.y, n.z);
    });
  }
  polygon(e, t, n, r, i, a) {
    let {
      verts: o,
      tris: s
    } = ue(e, t, n);
    this.add(o.map(r), s, i, a ? o.map(a) : void 0);
  }
  strip(e, t, n, r) {
    let i = e.length,
      a = [];
    for (let e = 0; e < (n ? i : i - 1); e++) {
      let t = (e + 1) % i;
      a.push([e, t, i + e], [t, i + t, i + e]);
    }
    this.add([...e, ...t], a, r);
  }
  build() {
    let e = new p();
    return e.setAttribute(`position`, new t(this.pos, 3)), e.setAttribute(`normal`, new t(this.nor, 3)), e.setIndex(this.idx), e;
  }
};
function de(e, t) {
  return new h(e.map(e => new Vector3(e[0], e[1], 0)), false, `centripetal`).getPoints(t).map(e => [e.x, e.y]);
}
function fe(e, t, n = () => 1) {
  return pe(e.map((r, i) => {
    let a = e[Math.max(0, i - 1)],
      o = e[Math.min(e.length - 1, i + 1)],
      s = o[0] - a[0],
      c = o[1] - a[1],
      l = Math.hypot(s, c) || 1,
      u = t * n(r),
      d = r[0] - c / l * u,
      f = r[1] + s / l * u;
    return [Math.max(0, d), f];
  }));
}
function pe(e) {
  let t = e.map(e => [...e]);
  for (let e = 0; e < t.length - 3; e++) for (let n = t.length - 2; n > e + 1; n--) {
    let [r, i] = t[e],
      [a, o] = t[e + 1],
      [s, c] = t[n],
      [l, u] = t[n + 1],
      d = (a - r) * (u - c) - (o - i) * (l - s);
    if (Math.abs(d) < 1e-14) continue;
    let f = ((s - r) * (u - c) - (c - i) * (l - s)) / d,
      p = ((s - r) * (o - i) - (c - i) * (a - r)) / d;
    if (f > 0 && f < 1 && p > 0 && p < 1) {
      let s = [r + (a - r) * f, i + (o - i) * f];
      for (let r = e + 1; r <= n; r++) t[r] = [...s];
      break;
    }
  }
  return t;
}
function me(e) {
  let t = e.slice(1, -1).reverse().map(e => [-e[0], e[1]]);
  return [...e, ...t];
}
var X = (e, t) => e.map(e => [e[0], e[1], t]);
function he(e, t, n) {
  let r = [];
  return e.forEach((i, a) => {
    let o = e[(a + e.length - 1) % e.length],
      s = e[(a + 1) % e.length],
      c = t[a],
      l = Math.hypot(o[0] - i[0], o[1] - i[1]),
      u = Math.hypot(s[0] - i[0], s[1] - i[1]),
      d = [i[0] + (o[0] - i[0]) * (c / l), i[1] + (o[1] - i[1]) * (c / l)],
      f = [i[0] + (s[0] - i[0]) * (c / u), i[1] + (s[1] - i[1]) * (c / u)];
    for (let e = 0; e <= n; e++) {
      let t = e / n,
        a = 1 - t;
      r.push([a * a * d[0] + 2 * a * t * i[0] + t * t * f[0], a * a * d[1] + 2 * a * t * i[1] + t * t * f[1]]);
    }
  }), r;
}
function ge(e, t, n) {
  let r = new _(e.map(e => new c(e[0], e[1])), t);
  return r.rotateZ(n > 0 ? -Math.PI / 2 : Math.PI / 2), r;
}
var Z = ce;
var Q = [[-.178, .09], [-.15, .108], [-.1, .116], [0, .118], [.08, .117], [.136, .113], [.165, .1]];
function _e(e) {
  let t = Q.length;
  if (e <= Q[0][0]) return Q[0][1];
  if (e >= Q[t - 1][0]) return Q[t - 1][1];
  let n = 1;
  for (; e > Q[n][0];) n++;
  let r = e => {
      let n = Q[Math.max(0, e - 1)],
        r = Q[Math.min(t - 1, e + 1)];
      return (r[1] - n[1]) / (r[0] - n[0]);
    },
    [i, a] = Q[n - 1],
    [o, s] = Q[n],
    c = o - i,
    l = (e - i) / c,
    u = l * l,
    d = u * l;
  return (2 * d - 3 * u + 1) * a + (d - 2 * u + l) * c * r(n - 1) + (-2 * d + 3 * u) * s + (d - u) * c * r(n);
}
var ve = e => {
  let t = Math.min(1, Math.max(0, (-.135 - e) / .04));
  return _e(Math.max(e, -.135)) + .012 * t * t * (3 - 2 * t);
};
var $ = (e, t) => ve(e) - .004 - .083 * Math.max(0, t - .02);
function ye(e, t, r) {
  let i = Z.highback,
    a = e => {
      let [t, r, a] = e,
        o = Math.max(0, r - i.flareFromH),
        s = i.dishK * t * t - i.dishCentreBehindPivot - i.flareK * o * o,
        c = new Vector3(-2 * i.dishK * t, 2 * i.flareK * o, 1).normalize();
      return new Vector3(t, r, s).addScaledVector(c, a);
    },
    o = () => new Vector3(0, 0, 1),
    s = () => new Vector3(0, 0, -1),
    c = (e, t) => new Vector3(-2 * i.dishK * e, 2 * i.flareK * Math.max(0, t - i.flareFromH), 1).normalize(),
    l = e => c(e[0], e[1]),
    u = e => c(e[0], e[1]).negate(),
    d = e => {
      let t = 0,
        r = 0,
        i = 0;
      for (let n of e) {
        t += n[0];
        r += n[1];
        i += n[2];
      }
      let a = e.length;
      t /= a;
      r /= a;
      i /= a;
      let o = 0,
        s = 0,
        l = 0,
        u = 0,
        d = 0;
      for (let n of e) {
        let e = n[0] - t,
          a = n[1] - r,
          c = n[2] - i;
        o += e * e;
        s += e * a;
        l += a * a;
        u += e * c;
        d += a * c;
      }
      let f = o * l - s * s || 1e-12,
        p = (u * l - d * s) / f,
        m = (d * o - u * s) / f;
      return e => {
        let t = c(e[0], e[1]);
        return new Vector3(t.x - p, t.y - m, t.z).normalize();
      };
    },
    f = e => new Vector3(e.x, e.y - .12, 0),
    p = e => new Vector3(-e.x, .12 - e.y, .4),
    m = de([[0, .019], [.035, .018], [.06, .011], [.072, -.008], [.085, -.019], [.098, -.018], [.108, -.006], [.107, .012], [.09, .032], [.08, .056], [.0782, .069], [.0774, .0816], [.0782, .0944], [.0795, .1071], [.0816, .1199], [.085, .1326], [.0884, .1454], [.0918, .1581], [.0952, .1709], [.0986, .1836], [.1012, .1964], [.1012, .2091], [.0978, .2219], [.0893, .2346], [.0748, .2474], [.055, .2545], [.03, .2585], [0, .26]], J.outline),
    h = e => {
      if (e[1] > .03) return 1;
      let t = Math.min(1, Math.max(0, (e[0] - .05) / .028));
      return .05 + .95 * t * t * (3 - 2 * t);
    },
    g = e => me(fe(m, e, h)),
    _ = g(0),
    v = g(.0018),
    y = g(.001),
    b = g(.012),
    x = g(i.rimWidth - .0015),
    S = g(i.rimWidth),
    C = e => he([[-Z.cutout.halfWidth - e * 1.25, Z.cutout.topH + e * .75], [Z.cutout.halfWidth + e * 1.25, Z.cutout.topH + e * .75], [0, Z.cutout.apexH - e * 1.5]], [.0085 + e * .4, .0085 + e * .4, .0055 + e * .4], J.cutoutArc),
    w = C(0),
    T = C(Z.cutout.padSideGrow),
    E = C(.0022),
    D = new Y(),
    O = -.0022,
    k = -.0065,
    A = -i.wallThickness;
  D.polygon(X(v, 0), [X(x, 0)], J.skinEdge, a, o, l);
  D.strip(X(v, 0).map(a), X(_, O).map(a), true, e => f(e).add(new Vector3(0, 0, .5)));
  D.strip(X(_, O).map(a), X(y, k).map(a), true, e => f(e).add(new Vector3(0, 0, -.5)));
  D.strip(X(x, 0).map(a), X(S, -.0048).map(a), true, p);
  t(`highback-rim`, D.build(), e.ivory, r);
  let j = new Y();
  j.polygon(X(y, k), [X(b, A)], J.skinEdge, a, s, e => {
    let t = u(e),
      r = Math.hypot(e[0], e[1] - .12) || 1,
      i = (k - A) / .011;
    return new Vector3(t.x + i * e[0] / r, t.y + i * (e[1] - .12) / r, t.z).normalize();
  });
  j.polygon(X(b, A), [X(E, A)], J.skinEdge, a, s, u);
  j.strip(X(E, A).map(a), X(w, -.0048).map(a), true, e => new Vector3(-e.x, .15 - e.y, -.4));
  t(`highback-back`, j.build(), e.ivory, r);
  let M = fe(m, i.rimWidth, h),
    N = fe(m, i.rimWidth + .009, h),
    ee = e => e.findIndex((e, t) => t > 8 && e[1] >= .1065),
    te = ee(M),
    ne = ee(N),
    P = [.0355, .063],
    F = M.slice(0, te).filter(e => e[0] <= .058),
    I = F[F.length - 1],
    L = -.0025,
    R = -.0048,
    z = -.0058,
    B = e => e.map(e => [-e[0], e[1], e[2]]),
    re = M.slice(te),
    V = N.slice(ne),
    H = new Y(),
    ie = [...X(re, R), ...B(X(re, R)).reverse().slice(1)],
    ae = [...X(V, L), ...B(X(V, L)).reverse().slice(1)],
    U = .0022999999999999995 / .009;
  H.polygon([...ie, ...[...ae].reverse()], [], J.skinEdge, a, o, e => {
    let t = c(e[0], e[1]),
      r = Math.hypot(e[0], e[1] - .12) || 1;
    return new Vector3(t.x + U * e[0] / r, t.y + U * (e[1] - .12) / r, t.z).normalize();
  });
  let oe = [[P[0], P[1], L], ...ae, [-P[0], P[1], L]];
  H.polygon(oe, [X(T, L)], J.panelEdge, a, o, l);
  H.strip(X(T, L).map(a), X(w, -.0048).map(a), true, e => new Vector3(-e.x, .15 - e.y, .6));
  t(`highback-pad`, H.build(), e.navy, r);
  let W = new Y(),
    G = X(F, z),
    se = [[-P[0], P[1], L], [P[0], P[1], L], ...[...G].reverse(), ...B(G).slice(1)];
  W.polygon(se, [], J.panelEdge, a, o, d(se));
  t(`highback-pad-lower`, W.build(), e.navyDark, r);
  let K = new Y(),
    ce = M.slice(0, te + 1).filter(e => e[0] > I[0]).map(e => [e[0], e[1], e[1] < .03 ? z : R]),
    q = [[I[0], I[1], z], ...ce, [N[ne][0], N[ne][1], L], [P[0], P[1], L]];
  K.polygon(q, [], J.panelEdge, a, o, d(q));
  K.polygon(B(q), [], J.panelEdge, a, o, d(B(q)));
  t(`highback-pad-flank`, K.build(), e.navy, r);
}
function be() {
  let e = Z.highback,
    t = Z.pivot.z,
    r = n => t + e.dishK * n * n - e.dishCentreBehindPivot + .013,
    i = .104,
    a = -.13,
    o = $(a, .052),
    s = a - r(o),
    c = e => Math.sign(e) * Math.abs(e) ** .75,
    l = [[.142, .0178], [.132, .0225], [.112, .027], [.08, .03], [.04, .033], [0, .037], [-.05, .043]],
    u = l.map(([e, t]) => new Vector3($(e, t), t, e));
  for (let e = 0; e <= 28; e++) {
    let t = Math.PI * e / 28,
      a = c(Math.sin(t)),
      l = 1 - a,
      d = (i + (o - i) * l * l) * c(Math.cos(t));
    u.push(new Vector3(d, .048 + .026 * a, r(d) + s * l ** 1.5));
  }
  l.slice().reverse().forEach(([e, t]) => u.push(new Vector3(-$(e, t), t, e)));
  let d = new h(u, false, `centripetal`),
    p = J.hoop,
    m = d.getPoints(p),
    g = (e, t, n) => {
      let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
      return r * r * (3 - 2 * r);
    },
    _ = [[], [], [], []];
  m.forEach((e, t) => {
    let r = d.getTangent(t / p),
      i = new Vector3(-e.x, .038 - e.y, 0).normalize().add(new Vector3(0, 0, .42)).normalize(),
      a = new Vector3(-Math.sign(e.x || 1), -.55, 0).normalize(),
      o = g(-.14, -.09, e.z),
      s = i.clone().lerp(a, o).normalize(),
      c = MathUtils.lerp(.0165, MathUtils.lerp(.024, .0035, g(-.05, .142, e.z)), o),
      l = MathUtils.lerp(.0048, .002, o),
      u = new Vector3().crossVectors(r, s).normalize().clone();
    u.dot(new Vector3(0, .75, .66)) > 0 && u.negate();
    let m = e.clone().addScaledVector(s, c);
    _[0].push(e.clone());
    _[1].push(m);
    _[2].push(m.clone().addScaledVector(u, l));
    _[3].push(e.clone().addScaledVector(u, l));
  });
  let v = new Y(),
    y = e => t => {
      let n = 0,
        r = 1 / 0;
      for (let e = 0; e <= p; e += 2) {
        let i = _[0][e].distanceToSquared(t);
        i < r && (r = i, n = e);
      }
      let i = _[0][n],
        a = _[1][n],
        o = _[3][n],
        s = a.clone().sub(i),
        c = o.clone().sub(i);
      return e === 0 ? c.negate() : e === 1 ? s : e === 2 ? c : s.negate();
    };
  return v.strip(_[0], _[1], false, y(0)), v.strip(_[1], _[2], false, y(1)), v.strip(_[2], _[3], false, y(2)), v.strip(_[3], _[0], false, y(3)), v.build();
}
function xe(e) {
  let t = [[.142, .012], ...de([[-.14, .012], [-.16, .024], [-.185, .032], [-.21, .034], [-.232, .046], [-.237, .062], [-.228, .076], [-.212, .08], [-.195, .078], [-.175, .072], [-.15, .06], [-.12, .052], [-.09, .048], [-.05, .043], [0, .037], [.04, .033], [.08, .03], [.112, .027], [.132, .0225], [.142, .0178]], J.wall)],
    r = t => r => new Vector3(e * ($(r[0], r[1]) + t), r[1], r[0]),
    i = t.map(e => [e[0], e[1], 0]),
    a = new Vector3(e, 0, 0),
    o = new Vector3(-e, 0, 0),
    s = new Y(),
    c = t => {
      let r = .002,
        i = (ve(t[0] + r) - ve(t[0] - r)) / (2 * r);
      return new Vector3(e, .083, -i).normalize();
    };
  return s.polygon(i, [], J.wallEdge, r(0), () => a, c), s.polygon(i, [], J.wallEdge, r(-.0042), () => o, e => c(e).negate()), s.strip(i.map(r(0)), i.map(r(-.0042)), true, e => new Vector3(0, e.y - .06, e.z + .03)), s.build();
}
function Se(e) {
  return me(fe(de([[0, -.178], [.05, -.178], [.078, -.173], [.098, -.158], [.108, -.145], [.116, -.1], [.118, 0], [.117, .08], [.113, .136], [.102, .156], [.08, .164], [.04, .165], [0, .165]], J.plan), e)).map(e => new c(e[0], e[1]));
}
function Ce(e, t, n) {
  let r = he([[-e / 2, -t / 2], [e / 2, -t / 2], [e / 2, t / 2], [-e / 2, t / 2]], [n, n, n, n], 4);
  return new a(r.map(e => new c(e[0], e[1])));
}
function we(e, t, n, r) {
  let i = new o(e, {
    depth: n - t - 2 * r,
    bevelEnabled: r > 0,
    bevelThickness: r,
    bevelSize: r,
    bevelOffset: -r,
    bevelSegments: 1,
    curveSegments: 4
  });
  i.rotateX(-Math.PI / 2);
  let a = i.attributes.position,
    s = i.attributes.normal;
  for (let e = 0; e < a.count; e++) {
    a.setZ(e, -a.getZ(e));
    a.setY(e, a.getY(e) + t + r);
    s.setZ(e, -s.getZ(e));
  }
  for (let e = 0; e < a.count; e += 3) {
    let t = a.getX(e + 1),
      n = a.getY(e + 1),
      r = a.getZ(e + 1),
      i = s.getX(e + 1),
      o = s.getY(e + 1),
      c = s.getZ(e + 1);
    a.setXYZ(e + 1, a.getX(e + 2), a.getY(e + 2), a.getZ(e + 2));
    s.setXYZ(e + 1, s.getX(e + 2), s.getY(e + 2), s.getZ(e + 2));
    a.setXYZ(e + 2, t, n, r);
    s.setXYZ(e + 2, i, o, c);
  }
  return i;
}
function Te(t = {}) {
  let n = t.detail === `game`;
  J = n ? le : q;
  let o = t.castShadow ?? true,
    l = t.receiveShadow ?? true,
    u = (t, n, r = 0, i = 0) => new e({
      color: t,
      roughness: n,
      metalness: r,
      side: i
    }),
    d = u(t.chassisColor ?? `#ece1cc`, .58),
    p = u(t.highbackColor ?? t.chassisColor ?? `#ece1cc`, .58, 0, 2),
    m = u(t.heelCupColor ?? t.chassisColor ?? `#ece1cc`, .58),
    h = u(t.padColor ?? `#586685`, .84, 0, 2),
    v = n ? h : u(`#` + h.color.clone().multiplyScalar(.96).getHexString(), .88, 0, 2),
    y = u(t.footbedColor ?? `#2d3a56`, .86),
    b = u(`#3a4866`, .84),
    x = u(`#2c3852`, .78),
    S = u(`#6c7386`, .5, .1),
    C = u(t.accentColor ?? `#b4b8bd`, .42, .55),
    w = u(`#2a2e36`, .7),
    T = new i();
  T.name = `SnowboardBinding`;
  let E = new i();
  E.name = `chassis`;
  T.add(E);
  let D = new i();
  D.name = `highback`;
  T.add(D);
  D.position.set(0, Z.pivot.y, Z.pivot.z);
  D.rotation.x = MathUtils.degToRad(t.highbackLeanDeg ?? Z.highback.leanDeg);
  let O = (e, t, n, i = E) => {
      let a = new r(t, n);
      return a.name = e, a.castShadow = o, a.receiveShadow = l, a.userData.part = e, i.add(a), a;
    },
    k = new a(Se(0));
  k.holes.push(new s(Se(.0105)));
  O(`base-rim`, we(k, 0, Z.base.rimTop, .0032), d);
  n || O(`base-plate`, we(new a(Se(.003)), 0, Z.base.bedTop - .002, 0), d);
  O(`footbed`, we(new a(Se(.0115)), Z.base.rimTop - .008, Z.base.bedTop, 6e-4), y);
  let A = .012,
    j = .0205;
  if (!n) {
    let e = new _([[.054, Z.base.bedTop - .001], [.053, .019200000000000002], [.0505, j], [0, j]].map(e => new c(e[0], e[1])), 56);
    O(`mount-disc`, e, x).position.z = A;
    let t = new _([[.0072, .020300000000000002], [.0068, .0213], [.0042, .0223], [0, .0223]].map(e => new c(e[0], e[1])), 20),
      n = new g(.0082, 5e-4, .0015),
      i = new g(.0015, 5e-4, .0082);
    [[1, -1, -1], [2, 1, -1], [3, -1, 1], [4, 1, 1]].forEach(([e, a, o]) => {
      let s = O(`disc-screw-${e}`, t, C);
      s.position.set(a * .0225, 0, A + o * .0225);
      for (let t of [n, i]) {
        let n = new r(t, w);
        n.name = `disc-screw-${e}-recess`;
        n.position.y = .0223;
        n.userData.explodeWithParent = true;
        s.add(n);
      }
    });
  }
  let M = n ? null : we(Ce(.056, .05, .007), Z.base.bedTop - .001, .0193, 7e-4);
  for (let [e, t] of [[`l`, 1], [`r`, -1]]) {
    M && O(`toe-pad-${e}`, M, b).position.set(t * .056, 0, .118);
    O(`wall-${e}`, xe(t), m);
    let {
        x: i,
        y: a,
        z: s,
        ringRadius: c,
        capRadius: l
      } = Z.pivot,
      u = ge([[0, -.0098], [c - .002, -.0098], [c, -.0078], [c, .0072], [c - .0022, .0098], [l + .0016, .0098], [l + 6e-4, .0062], [0, .0062]], J.ring, t),
      d = O(`pivot-${e}`, u, m);
    d.position.set(t * i, a, s);
    let f = ge([[l, .0058], [l, .0078], [l * .62, .0092], [0, .0094]], J.cap, t),
      p = new r(f, S);
    if (p.name = `pivot-${e}-cap`, p.userData.explodeWithParent = true, p.castShadow = o, d.add(p), n) continue;
    let h = ge([[0, -.0104], [l * .72, -.0104], [l * .72, -.0092]], 24, t),
      g = new r(h, S);
    g.name = `pivot-${e}-inner-cap`;
    g.userData.explodeWithParent = true;
    d.add(g);
    let _ = -.068,
      v = .032,
      y = ge([[.0074, 0], [.007, .0012], [.0048, .0022], [0, .0024]], 26, t),
      x = O(`wall-fastener-${e}`, y, S);
    x.position.set(t * $(_, v), v, _);
    x.rotation.z = -t * Math.atan(.083);
  }
  O(`hoop-rail`, be(), m);
  ye({
    ivory: p,
    navy: h,
    navyDark: v
  }, O, D);
  let N = [];
  return T.traverse(e => {
    e.isMesh && e.userData.part && N.push(e.name);
  }), T.userData.bindingSpec = {
    fitsBoot: {
      width: .17,
      length: .33
    },
    innerWidth: .19,
    footbedLength: .32,
    highbackHeightAbovePivot: Z.highback.heightAbovePivot,
    straps: `none`,
    style: `thin strapless, dished highback shell`
  }, T.userData.sculptRuntime = {
    parts: N,
    pivots: [{
      id: `highback-hinge`,
      node: `highback`,
      position: [0, Z.pivot.y, Z.pivot.z],
      axis: [1, 0, 0],
      restDeg: t.highbackLeanDeg ?? Z.highback.leanDeg,
      rangeDeg: [-5, 25]
    }],
    sockets: {
      bootSole: [0, .026, 0],
      boardMount: [0, 0, A]
    }
  }, T;
}
var Ee = e => ({
  chassisColor: e,
  highbackColor: e,
  heelCupColor: e
});
var De = (e, t, n = {}) => ({
  pattern: `none`,
  colors: {
    top: e,
    base: t,
    pat: t,
    pat2: t
  },
  tailColors: n,
  noseSticker: `none`,
  noseStickerColor: t,
  noseName: ``
});
var Oe = {
  male: {
    deck: De(`#f2f2f0`, `#d82f2a`),
    bindings: Ee(`#ff5a1f`)
  },
  female: {
    deck: De(`#cf5030`, `#d82f2a`, {
      top: `#1b66b1`,
      base: `#2580d9`
    }),
    bindings: Ee(`#f6f5f1`)
  }
};
var ke = .136;
var Ae = [72, 12];
var je = e => createToonMaterial({
  color: e.color,
  side: e.side,
  vertexColors: e.vertexColors
}, {
  rim: 1,
  hatch: 0
});
function Me(e) {
  return e.traverse(e => {
    e.isMesh && (e.material = je(e.material));
  }), e;
}
function Ne(e, t) {
  e.updateMatrixWorld(true);
  let n = new Map(),
    i = new l();
  return e.traverse(e => {
    if (!e.isMesh) return;
    let {
        color: r,
        side: a
      } = e.material,
      o = `${r.getHexString()}/${a}`;
    n.has(o) || n.set(o, {
      material: e.material,
      geometries: []
    });
    for (let r of t) {
      let t = e.geometry,
        a = t.attributes.position.count,
        s = new p();
      s.setAttribute(`position`, t.attributes.position.clone());
      s.setAttribute(`normal`, t.attributes.normal.clone());
      s.setIndex(t.index ? t.index.clone() : [...Array(a).keys()]);
      n.get(o).geometries.push(s.applyMatrix4(i.makeTranslation(r).multiply(e.matrixWorld)));
    }
  }), [...n.values()].map(({
    material: e,
    geometries: t
  }) => {
    let n = new r(x(t), je(e));
    return n.castShadow = n.receiveShadow = true, n;
  });
}
var Pe = class extends i {
  constructor(e) {
    super();
    this.name = `RiderBoard`;
    this.stance = e;
    this.boards = new Map();
  }
  #e(e) {
    let t = Oe[e],
      r = new i(),
      a = Me(K({
        ...M(t.deck),
        inserts: false,
        segments: Ae
      }));
    a.rotation.y = -Math.PI / 2;
    a.position.x = ke;
    r.add(a);
    let o = Te({
        ...t.bindings,
        detail: `game`
      }),
      s = this.stance.map(e => new Vector3(e.x, .0045, e.z + .02));
    return r.add(...Ne(o, s)), this.add(r), r;
  }
  wear(e) {
    this.boards.has(e) || this.boards.set(e, this.#e(e));
    for (let [t, n] of this.boards) n.visible = t === e;
  }
};
function Fe(e) {
  return new Pe(e);
}
export { Fe as makeStockBoard };
export { Fe };
