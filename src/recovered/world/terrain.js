/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Ta. Live dependencies: createToonMaterial, K, J. */
export function create_Ta(__recoveredScope) {
  return function Ta() {
    let e = __recoveredScope.createToonMaterial({}, {
        hatch: 0
      }),
      t = e.onBeforeCompile,
      n = new __recoveredScope.K(`#fbfaf4`),
      r = new __recoveredScope.K(`#4f5358`);
    return e.onBeforeCompile = e => {
      t(e);
      Object.assign(e.uniforms, {
        uMountainSnow: {
          value: n
        },
        uMountainRock: {
          value: r
        }
      });
      e.vertexShader = e.vertexShader.replace(`#include <common>`, `#include <common>
      attribute vec4 aRelief;
      attribute float aFlow;
      varying vec4 vRelief;
      varying float vFlow;`).replace(`#include <begin_vertex>`, `#include <begin_vertex>
        vRelief = aRelief;
        vFlow = aFlow;`);
      e.fragmentShader = e.fragmentShader.replace(`#include <common>`, `#include <common>
      uniform vec3 uMountainSnow, uMountainRock;
      varying vec4 vRelief;
      varying float vFlow;
      // 0 to 1 across e ± w, and never sharper than a pixel.
      float mStep(float e, float w, float x) {
        float f = fwidth(x);
        return smoothstep(e - w - f, e + w + f, x);
      }`).replace(`vec3 base = diffuseColor.rgb;`, `
        // Wobble, 125 m and 30 m across, rounds off the edges between DEM
        // posts. Each fades out before it gets finer than a few pixels.
        vec2 wp = vTWorld.xz * 0.008, wq = vTWorld.xz * 0.033 + 3.1;
        float wobble = (tNoise(wp) - 0.5) * 0.5 * (1.0 - smoothstep(0.15, 0.35, length(fwidth(wp))))
          + (tNoise(wq) - 0.5) * 0.35 * (1.0 - smoothstep(0.15, 0.35, length(fwidth(wq))));
        // Rock shows only in the lower part of each mountain: below the
        // ground about 1.5 km round (vRelief.z, ±300 m or so) and 500 m round
        // (vRelief.w), so every top and crest, the lesser ones too, is all
        // snow, with a ragged edge.
        float low = (1.0 - smoothstep(-100.0, 0.0, vRelief.z + wobble * 80.0))
          * (1.0 - smoothstep(-30.0, 20.0, vRelief.w + wobble * 40.0));
        // There it runs in streaks down the gullies the ground drains
        // through (vFlow: log2 of the 40 m posts upstream): the middling
        // ones, which branch and break off at every length. The big
        // channels on the valley floors stay white, and so does gentle
        // ground.
        float gully = smoothstep(4.3, 4.9, vFlow + wobble * 0.5) * (1.0 - smoothstep(5.8, 6.4, vFlow));
        float steep = smoothstep(14.0, 22.0, vRelief.y);
        // Not every gully: some stretches of mountain have none, chosen by
        // domain-warped noise 800 m or so across.
        vec2 q = vTWorld.xz * 0.0012;
        q += vec2(tNoise(q * 1.7 + 3.1), tNoise(q * 1.7 + 8.4)) * 1.6 - 0.8;
        float clusters = smoothstep(0.26, 0.42, tNoise(q) * 0.65 + tNoise(q * 2.3 + 1.3) * 0.35);
        // And a gap here and there along a streak, 170 m or so, fading out
        // before the gaps get finer than a few pixels.
        vec2 b = vTWorld.xz * 0.006 + q * 3.0;
        float fb = 1.0 - smoothstep(0.3, 0.6, length(fwidth(vTWorld.xz)) * 0.006);
        float broken = smoothstep(0.26, 0.36, 0.5 + (tNoise(b) - 0.5) * fb);
        // Together they give how strongly rock shows; past halfway it does, with
        // a crisp edge.
        float rock = mStep(0.5, 0.03, gully * steep * low * clusters * broken);
        vec3 base = mix(uMountainSnow, uMountainRock, rock);
      `).replace(`float wob = (tNoise(vTWorld.xz * 0.35 + vTWorld.y * 0.2) - 0.5) * 0.08;`, `
        float wob = wobble * 0.1, dw = fwidth(direct);`).replace(`float lit = smoothstep(0.24 + wob, 0.30 + wob, direct);`, `float lit = smoothstep(0.24 + wob - dw, 0.30 + wob + dw, direct);`).replace(`float full = smoothstep(0.55 + wob, 0.6 + wob, direct);`, `float full = smoothstep(0.55 + wob - dw, 0.6 + wob + dw, direct);`).replace(`#include <fog_fragment>`, __recoveredScope.J.fog_fragment.replace(`fogFar, vFogDepth`, `fogFar * (1.0 + 0.8 * smoothstep(9000.0, 17000.0, fogFar)), vFogDepth`).replace(`fogColor, fogFactor`, `mix(fogColor,
        vec3(dot(fogColor, vec3(0.299, 0.587, 0.114))) * vec3(0.91, 0.97, 1.04), 0.5), fogFactor`));
    }, e.customProgramCacheKey = () => `dem-rock-v7`, e;
  };
}
/* Recovered binding Ea. Live dependencies: K. */
export function create_Ea(__recoveredScope) {
  return {
    snow: new __recoveredScope.K(`#fbfaf4`),
    snowShade: new __recoveredScope.K(`#eef1ec`),
    groomed: new __recoveredScope.K(`#e6eef0`),
    hollow: new __recoveredScope.K(`#cbdce2`),
    crest: new __recoveredScope.K(`#ffffff`),
    rock: new __recoveredScope.K(`#5f6265`),
    rockDark: new __recoveredScope.K(`#4f5357`),
    forest: new __recoveredScope.K(`#4f6f5e`),
    forestDark: new __recoveredScope.K(`#3e5a4f`)
  };
}
/* Recovered binding Da. Live dependencies: . */
export function create_Da(__recoveredScope) {
  return function Da(e, t) {
    let n = Math.sin(e * 127.1 + t * 311.7) * 43758.5453;
    return n - Math.floor(n);
  };
}
/* Recovered binding Oa. Live dependencies: Da. */
export function create_Oa(__recoveredScope) {
  return function Oa(e, t) {
    let n = Math.floor(e),
      r = Math.floor(t),
      i = e - n,
      a = t - r,
      o = i * i * (3 - 2 * i),
      s = a * a * (3 - 2 * a),
      c = __recoveredScope.Da(n, r),
      l = __recoveredScope.Da(n + 1, r),
      u = __recoveredScope.Da(n, r + 1),
      d = __recoveredScope.Da(n + 1, r + 1);
    return (c * (1 - o) + l * o) * (1 - s) + (u * (1 - o) + d * o) * s;
  };
}
/* Recovered binding ka. Live dependencies: z, et. */
export function create_ka(__recoveredScope) {
  return function ka(e, t) {
    let {
        verts: n,
        size: r
      } = e,
      i = new Float32Array(n * n * 3);
    for (let a = 0; a < n; a++) for (let o = 0; o < n; o++) {
      let s = a * n + o,
        c = e.x0 + o / e.cells * r,
        l = e.z0 + a / e.cells * r;
      i[s * 3] = c;
      i[s * 3 + 1] = e.h[s] + (t ? t(c, l) : 0);
      i[s * 3 + 2] = l;
    }
    let a = new Uint32Array(e.cells * e.cells * 6),
      o = 0;
    for (let t = 0; t < e.cells; t++) for (let r = 0; r < e.cells; r++) {
      if (e.cellIsHole(r, t)) continue;
      let i = t * n + r,
        s = i + 1,
        c = i + n,
        l = c + 1;
      a[o++] = i;
      a[o++] = c;
      a[o++] = s;
      a[o++] = s;
      a[o++] = c;
      a[o++] = l;
    }
    let s = new Float32Array(n * n * 3),
      c = r / e.cells;
    for (let t = 0; t < n; t++) for (let r = 0; r < n; r++) {
      let a = t * n + r,
        o = r ? a - 1 : a,
        l = r < e.cells ? a + 1 : a,
        u = t ? a - n : a,
        d = t < e.cells ? a + n : a,
        f = (i[l * 3 + 1] - i[o * 3 + 1]) / ((l - o) * c),
        p = (i[d * 3 + 1] - i[u * 3 + 1]) / ((d - u) / n * c),
        m = Math.hypot(f, 1, p);
      s[a * 3] = -f / m;
      s[a * 3 + 1] = 1 / m;
      s[a * 3 + 2] = -p / m;
    }
    let l = new __recoveredScope.z();
    return l.setAttribute(`position`, new __recoveredScope.et(i, 3)), l.setAttribute(`normal`, new __recoveredScope.et(s, 3)), l.setIndex(new __recoveredScope.et(a.subarray(0, o), 1)), l;
  };
}
/* Recovered binding createTerrainLod. Live dependencies: ja, createToonMaterial, g, c, Pa, Fa, Vector3. */
export function create_createTerrainLod(__recoveredScope) {
  return function createTerrainLod(e, t, n, {
    skirt: r = true,
    tiles: i = 1,
    lodDistance: a = 0,
    nearDistance: o = 0,
    corduroy: l = false,
    castShadow: u = false
  } = {}) {
    let d = o ? [1, 2, 4] : a ? [1, 2] : [1],
      f = __recoveredScope.ja(e, t, n, l),
      p = __recoveredScope.createToonMaterial({
        vertexColors: true
      }, {
        hatch: 1,
        snow: 1,
        piste: +!!l
      }),
      m = new __recoveredScope.g(),
      h = e => {
        let t = new __recoveredScope.c(e, p);
        return t.receiveShadow = true, t.castShadow = u, m.add(t), t;
      },
      _ = (t, n) => h(__recoveredScope.Pa(e, f, t.range, d[n], n > 0)),
      v = Math.ceil(e.cells / i),
      y = [];
    for (let t = 0; t < i; t++) for (let n = 0; n < i; n++) {
      let r = n * v,
        i = Math.min(e.cells, r + v),
        a = t * v,
        s = Math.min(e.cells, a + v);
      if (r >= i || a >= s) continue;
      let c = {
        range: [r, a, i, s],
        meshes: []
      };
      d.forEach((e, t) => {
        t === 0 && o || (c.meshes[t] = _(c, t));
      });
      let l = c.meshes.find(Boolean).geometry;
      l.computeBoundingBox();
      c.box = l.boundingBox;
      y.push(c);
    }
    r && m.add(new __recoveredScope.c(__recoveredScope.Fa(e, f), p));
    let b = e => d.length === 1 ? 0 : e > a ? d.length - 1 : o && e > o ? 1 : 0;
    return m.update = e => {
      let t = null,
        n = 1 / 0;
      for (let r of y) {
        let i = r.box.distanceToPoint(e),
          a = b(i);
        r.meshes[a] || (i < n && (t = r, n = i), a = 1);
        r.meshes.forEach((e, t) => e && (e.visible = t === a));
        o && r.meshes[0] && i > o * 1.5 && (m.remove(r.meshes[0]), r.meshes[0].geometry.dispose(), r.meshes[0] = void 0);
      }
      t && (t.meshes[0] = _(t, 0), t.meshes[1].visible = false);
    }, a && m.update(new __recoveredScope.Vector3(1 / 0, 0, 0)), m;
  };
}
/* Recovered binding ja. Live dependencies: K, Ma, Ea, MathUtils. */
export function create_ja(__recoveredScope) {
  return function ja(e, t, n, r) {
    let {
        h: i,
        verts: a,
        cells: o,
        step: s
      } = e,
      c = new __recoveredScope.K(),
      l = {},
      u = (r, u, d, f, p, m, h, g) => {
        let _ = e.x0 + r * s,
          v = i[u * a + r],
          y = e.z0 + u * s;
        p[f * 3] = _;
        p[f * 3 + 1] = v;
        p[f * 3 + 2] = y;
        let b = Math.max(0, r - d),
          x = Math.min(o, r + d),
          S = Math.max(0, u - d),
          C = Math.min(o, u + d),
          w = (i[u * a + b] - i[u * a + x]) / ((x - b) * s),
          T = (i[S * a + r] - i[C * a + r]) / ((C - S) * s),
          E = 1 / Math.hypot(w, 1, T);
        m[f * 3] = w * E;
        m[f * 3 + 1] = E;
        m[f * 3 + 2] = T * E;
        let D = __recoveredScope.Ma(_, v, y, E, t.distAt(_, y), n, c),
          O = Math.max(1, Math.round(8 / s)),
          k = (i[u * a + Math.max(0, r - O)] + i[u * a + Math.min(o, r + O)] + i[Math.max(0, u - O) * a + r] + i[Math.min(o, u + O) * a + r] - 4 * v) / (O * s) ** 2;
        if (k > 0 ? c.lerp(__recoveredScope.Ea.hollow, __recoveredScope.MathUtils.smoothstep(k, .005, .03) * .8) : c.lerp(__recoveredScope.Ea.crest, __recoveredScope.MathUtils.smoothstep(-k, .005, .03) * .9), h[f * 3] = c.r, h[f * 3 + 1] = c.g, h[f * 3 + 2] = c.b, g) {
          t.coordsAt(_, y, l);
          let e = d * s,
            n = l.run,
            r = n >= 0 && t.runAt(_ - e, y) === n && t.runAt(_ + e, y) === n && t.runAt(_, y - e) === n && t.runAt(_, y + e) === n;
          g[f * 3] = r ? l.off : 0;
          g[f * 3 + 1] = r ? l.along : 0;
          g[f * 3 + 2] = r ? D : 0;
        }
      };
    return u.corduroy = r, u;
  };
}
/* Recovered binding Ma. Live dependencies: Oa, Ea, MathUtils. */
export function create_Ma(__recoveredScope) {
  return function Ma(e, t, n, r, i, a, o) {
    let s = Math.acos(Math.min(1, r)) * 180 / Math.PI,
      c = __recoveredScope.Oa(e * .02, n * .02);
    o.copy(__recoveredScope.Ea.snow).lerp(__recoveredScope.Ea.snowShade, c * .6);
    let l = 1 - __recoveredScope.MathUtils.smoothstep(i, 14, 18);
    o.lerp(__recoveredScope.Ea.groomed, l * .9);
    let u = __recoveredScope.MathUtils.smoothstep(s + (c - .5) * 22, 44, 62) * (1 - l);
    return u > 0 && o.lerp(__recoveredScope.Oa(e * .08, n * .08) > .5 ? __recoveredScope.Ea.rock : __recoveredScope.Ea.rockDark, u), t < a && i > 21 && o.lerp(__recoveredScope.Ea.snowShade, .5), l;
  };
}
/* Recovered binding Na. Live dependencies: . */
export function create_Na(__recoveredScope) {
  return function Na(e, t, n) {
    let r = [];
    for (let i = e; i < t; i += n) r.push(i);
    return r.push(t), r;
  };
}
/* Recovered binding Pa. Live dependencies: Na, z, et, Me, Oe. */
export function create_Pa(__recoveredScope) {
  return function Pa(e, t, [n, r, i, a], o, s) {
    let c = __recoveredScope.Na(n, i, o),
      l = __recoveredScope.Na(r, a, o),
      u = c.length,
      d = l.length,
      f = [];
    if (s) {
      for (let e = 0; e < u - 1; e++) f.push(e);
      for (let e = 0; e < d - 1; e++) f.push(e * u + u - 1);
      for (let e = u - 1; e > 0; e--) f.push((d - 1) * u + e);
      for (let e = d - 1; e > 0; e--) f.push(e * u);
    }
    let p = u * d + f.length,
      m = {
        position: new Float32Array(p * 3),
        normal: new Float32Array(p * 3),
        color: new Float32Array(p * 3)
      };
    t.corduroy && (m.aPiste = new Float32Array(p * 3));
    let {
      position: h,
      normal: g,
      color: _,
      aPiste: v
    } = m;
    for (let e = 0; e < d; e++) for (let n = 0; n < u; n++) t(c[n], l[e], o, e * u + n, h, g, _, v);
    for (let e of Object.values(m)) f.forEach((t, n) => e.set(e.subarray(t * 3, t * 3 + 3), (u * d + n) * 3));
    f.forEach((e, t) => h[(u * d + t) * 3 + 1] -= 6);
    let y = new __recoveredScope.z();
    for (let [e, t] of Object.entries(m)) y.setAttribute(e, new __recoveredScope.et(t, 3));
    let b = [];
    for (let t = 0; t < d - 1; t++) for (let n = 0; n < u - 1; n++) {
      if (e.cellIsHole(c[n], l[t])) continue;
      let r = t * u + n,
        i = r + 1,
        a = r + u,
        o = a + 1;
      b.push(r, a, i, i, a, o);
    }
    return f.forEach((e, t) => {
      let n = (t + 1) % f.length;
      b.push(e, f[n], u * d + t, f[n], u * d + n, u * d + t);
    }), y.setIndex(p > 65535 ? new __recoveredScope.Me(b, 1) : new __recoveredScope.Oe(b, 1)), y;
  };
}
/* Recovered binding Fa. Live dependencies: z, et. */
export function create_Fa(__recoveredScope) {
  return function Fa(e, t) {
    let n = e.cells,
      r = [];
    for (let e = 0; e <= n; e++) r.push([e, 0]);
    for (let e = 1; e <= n; e++) r.push([n, e]);
    for (let e = n - 1; e >= 0; e--) r.push([e, n]);
    for (let e = n - 1; e >= 0; e--) r.push([0, e]);
    let i = r.length * 2,
      a = new Float32Array(i * 3),
      o = new Float32Array(i * 3),
      s = new Float32Array(i * 3),
      c = [];
    r.forEach(([e, n], r) => {
      t(e, n, 1, 2 * r, a, o, s, null);
      for (let e = 0; e < 3; e++) {
        a[(2 * r + 1) * 3 + e] = a[2 * r * 3 + e] - (e === 1 ? 120 : 0);
        o[(2 * r + 1) * 3 + e] = o[2 * r * 3 + e];
        s[(2 * r + 1) * 3 + e] = s[2 * r * 3 + e] * .9;
      }
      r && c.push(2 * r - 2, 2 * r, 2 * r - 1, 2 * r, 2 * r + 1, 2 * r - 1);
    });
    let l = new __recoveredScope.z();
    return l.setAttribute(`position`, new __recoveredScope.et(a, 3)), l.setAttribute(`color`, new __recoveredScope.et(s, 3)), l.setAttribute(`normal`, new __recoveredScope.et(o, 3)), l.setIndex(c), l;
  };
}
/* Recovered binding Ia. Live dependencies: . */
export function create_Ia(__recoveredScope) {
  return function Ia(e, t, n) {
    let r = Math.max(1, Math.round(Math.sqrt(n * n * 4 + 1) / 2 - .5)),
      i = 2 * r + 1,
      a = Float32Array.from(e),
      o = new Float32Array(t * t),
      s = new Float32Array(t + i),
      c = (e, n, a, o) => {
        for (let c = 0; c < t; c++) {
          let l = c * o;
          for (let n = 0; n < t + i; n++) s[n] = e[l + Math.max(0, Math.min(t - 1, n - r)) * a];
          let u = 0;
          for (let e = 0; e < i; e++) u += s[e];
          for (let e = 0; e < t; e++) {
            n[l + e * a] = u / i;
            u += s[e + i] - s[e];
          }
        }
      };
    for (let e = 0; e < 3; e++) {
      c(a, o, 1, t);
      c(o, a, t, 1);
    }
    return a;
  };
}
/* Recovered binding La. Live dependencies: Ia. */
export function create_La(__recoveredScope) {
  return function La(e, t) {
    let n = t * t,
      r = new Float64Array(n);
    for (let t = 0; t < n; t++) r[t] = Math.round(e[t] * 100) * 1048576 + t;
    r.sort();
    let i = new Float32Array(n).fill(1);
    for (let a = n - 1; a >= 0; a--) {
      let n = r[a] % 1048576,
        o = n % t,
        s = (n - o) / t,
        c = -1,
        l = 0;
      for (let r = -1; r <= 1; r++) for (let i = -1; i <= 1; i++) {
        let a = o + i,
          u = s + r;
        if (!i && !r || a < 0 || u < 0 || a >= t || u >= t) continue;
        let d = u * t + a,
          f = (e[n] - e[d]) / (i && r ? 1.414 : 1);
        f > l && (l = f, c = d);
      }
      c >= 0 && (i[c] += i[n]);
    }
    for (let e = 0; e < n; e++) i[e] = Math.log2(i[e]);
    return __recoveredScope.Ia(i, t, 1);
  };
}
/* Recovered binding createBackdropTerrain. Live dependencies: Heightfield, ka, Ia, et, La, c, Ta. */
export function create_createBackdropTerrain(__recoveredScope) {
  return function createBackdropTerrain(e, t, {
    stride: n = 1
  } = {}) {
    if (!Number.isInteger(n) || n < 1 || e.cells % n !== 0) throw Error(`Backdrop stride must divide its cell count`);
    if (n > 1) {
      let t = e.cells / n,
        r = t + 1,
        i = new Float32Array(r * r);
      for (let t = 0; t < r; t++) for (let a = 0; a < r; a++) i[t * r + a] = e.h[t * n * e.verts + a * n];
      e = new __recoveredScope.Heightfield(e.size, t, i, e.center);
    }
    let r = __recoveredScope.ka(e, (e, n) => t.inside(e, n, 20) ? -80 : 0),
      i = e.verts,
      a = t => Math.max(1, t / e.step),
      o = __recoveredScope.Ia(e.h, i, a(40)),
      s = __recoveredScope.Ia(e.h, i, a(120)),
      l = __recoveredScope.Ia(e.h, i, a(1500)),
      u = __recoveredScope.Ia(e.h, i, a(500)),
      d = new Float32Array(i * i * 4);
    for (let t = 0; t < i; t++) for (let n = 0; n < i; n++) {
      let r = t * i + n,
        a = n ? r - 1 : r,
        c = n < i - 1 ? r + 1 : r,
        f = t ? r - i : r,
        p = t < i - 1 ? r + i : r,
        m = (o[c] - o[a]) / ((c - a) * e.step),
        h = (o[p] - o[f]) / ((p - f) / i * e.step);
      d[r * 4] = o[r] - s[r];
      d[r * 4 + 1] = Math.atan(Math.hypot(m, h)) * 180 / Math.PI;
      d[r * 4 + 2] = o[r] - l[r];
      d[r * 4 + 3] = o[r] - u[r];
    }
    r.setAttribute(`aRelief`, new __recoveredScope.et(d, 4));
    r.setAttribute(`aFlow`, new __recoveredScope.et(__recoveredScope.La(o, i), 1));
    let f = new __recoveredScope.c(r, __recoveredScope.Ta());
    return f.name = `dem-backdrop`, f;
  };
}
/* Recovered binding Ba. Live dependencies: . */
export function create_Ba(__recoveredScope) {
  return (e, t, n) => {
    let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
    return r * r * (3 - 2 * r);
  };
}
/* Recovered binding raisePisteBanks. Live dependencies: za, Ua, Ba, Oa, Heightfield. */
export function create_raisePisteBanks(__recoveredScope) {
  return function raisePisteBanks(e, t, n, r = []) {
    let i = e.cells * 2,
      a = i + 1,
      o = e.step / 2;
    if (n.cell !== o || n.n !== a || n.x0 !== e.x0 || n.z0 !== e.z0) throw Error(`raiseBanks: the piste field must be on the 4 m grid`);
    let s = new Float32Array(a * a);
    for (let t = 0; t < a; t++) for (let n = 0; n < a; n++) s[t * a + n] = e.heightAt(e.x0 + n * o, e.z0 + t * o);
    let c = 17 + __recoveredScope.za.width[1],
      [l, u] = [c + __recoveredScope.za.fade[0], c + __recoveredScope.za.fade[1]],
      d = new Float32Array(a * a);
    t.forEach((r, s) => {
      let {
          p: c,
          cum: f
        } = n.lines[s],
        p = f[f.length - 1],
        [m, h] = [c[0], c[c.length - 1]].map(e => __recoveredScope.Ua(e, t, s));
      for (let t = 0; t < c.length - 1; t++) {
        let n = c[t],
          r = c[t + 1],
          s = r[0] - n[0],
          g = r[1] - n[1],
          _ = Math.hypot(s, g) || 1,
          v = Math.max(0, Math.floor((Math.min(n[0], r[0]) - u - e.x0) / o)),
          y = Math.min(i, Math.ceil((Math.max(n[0], r[0]) + u - e.x0) / o)),
          b = Math.max(0, Math.floor((Math.min(n[1], r[1]) - u - e.z0) / o)),
          x = Math.min(i, Math.ceil((Math.max(n[1], r[1]) + u - e.z0) / o));
        for (let r = b; r <= x; r++) {
          let i = e.z0 + r * o;
          for (let c = v; c <= y; c++) {
            let v = e.x0 + c * o,
              y = Math.max(0, Math.min(1, ((v - n[0]) * s + (i - n[1]) * g) / (_ * _))),
              b = Math.hypot(n[0] + s * y - v, n[1] + g * y - i);
            if (b >= u) continue;
            let x = f[t] + y * _,
              S = 1 - __recoveredScope.Ba(l, u, b);
            m && (S *= __recoveredScope.Ba(0, __recoveredScope.za.ends, x));
            h && (S *= __recoveredScope.Ba(0, __recoveredScope.za.ends, p - x));
            let C = r * a + c;
            S > d[C] && (d[C] = S);
          }
        }
      }
    });
    for (let t of r) {
      let n = Math.max(0, Math.floor((t.x - t.r1 - e.x0) / o)),
        r = Math.min(i, Math.ceil((t.x + t.r1 - e.x0) / o)),
        s = Math.max(0, Math.floor((t.z - t.r1 - e.z0) / o)),
        c = Math.min(i, Math.ceil((t.z + t.r1 - e.z0) / o));
      for (let i = s; i <= c; i++) for (let s = n; s <= r; s++) d[i * a + s] *= __recoveredScope.Ba(t.r0, t.r1, Math.hypot(e.x0 + s * o - t.x, e.z0 + i * o - t.z));
    }
    let [f, p] = __recoveredScope.za.height,
      [m, h] = __recoveredScope.za.width;
    for (let t = 0; t < a; t++) for (let r = 0; r < a; r++) {
      let i = t * a + r;
      if (!d[i]) continue;
      let c = e.x0 + r * o,
        l = e.z0 + t * o,
        u = f + (p - f) * __recoveredScope.Oa(c * .011 + 3.7, l * .011),
        g = m + (h - m) * __recoveredScope.Oa(c * .013, l * .013 + 9.1);
      s[i] += u * d[i] * __recoveredScope.Ba(17, 17 + g, n.dist[i]);
    }
    let g = new __recoveredScope.Heightfield(e.size, i, s, e.center),
      _ = [];
    return e.holes.forEach((e, t) => e && _.push(t)), g.setHoles(e.tileCells * 2, _), g;
  };
}
/* Recovered binding Ha. Live dependencies: serviceCentreLocations, hotSpringLocation. */
export function create_Ha(__recoveredScope) {
  return e => [...e.flatMap(e => [e.points[0], e.points[e.points.length - 1]].map(([e, t]) => ({
    x: e,
    z: t,
    r0: 20,
    r1: 50
  }))), ...__recoveredScope.serviceCentreLocations.map(({
    x: e,
    z: t
  }) => ({
    x: e,
    z: t,
    r0: 70,
    r1: 120
  })), {
    x: __recoveredScope.hotSpringLocation.x,
    z: __recoveredScope.hotSpringLocation.z,
    r0: 15,
    r1: 35
  }];
}
