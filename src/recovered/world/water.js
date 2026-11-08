/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding ds. Live dependencies: ls. */
export function create_ds(__recoveredScope) {
  return function ds(e, t, n) {
    let r = 0;
    for (let i of __recoveredScope.ls) r += i.a * Math.sin(i.kx * e + i.kz * t - i.w * n + i.p);
    return r;
  };
}
/* Recovered binding ps. Live dependencies: . */
export function create_ps(__recoveredScope) {
  return (e, t, n) => {
    let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
    return r * r * (3 - 2 * r);
  };
}
/* Recovered binding ms. Live dependencies: . */
export function create_ms(__recoveredScope) {
  return function ms(e, t) {
    let n = e;
    for (let e = 0; e < t; e++) n = n.flatMap(([e, t], r) => {
      let [i, a] = n[(r + 1) % n.length];
      return [[.75 * e + .25 * i, .75 * t + .25 * a], [.25 * e + .75 * i, .25 * t + .75 * a]];
    });
    return n;
  };
}
/* Recovered binding hs. Live dependencies: . */
export function create_hs(__recoveredScope) {
  return function hs(e, t, n) {
    let r = false;
    for (let i = 0, a = e.length - 1; i < e.length; a = i++) {
      let [o, s] = e[i],
        [c, l] = e[a];
      s > n != l > n && t < (c - o) * (n - s) / (l - s) + o && (r = !r);
    }
    return r;
  };
}
/* Recovered binding gs. Live dependencies: hs. */
export function create_gs(__recoveredScope) {
  return function gs(e, t, n, r) {
    let i = 1 / 0,
      a = 0,
      o = 0,
      s = 1,
      c = 0;
    for (let r = 0; r < e.length; r++) {
      let [l, u] = e[r],
        [d, f] = e[(r + 1) % e.length],
        p = d - l,
        m = f - u,
        h = Math.max(0, Math.min(1, ((t - l) * p + (n - u) * m) / (p * p + m * m || 1))),
        g = l + p * h,
        _ = u + m * h,
        v = Math.hypot(g - t, _ - n);
      v < i && (i = v, a = g, o = _, s = p, c = m);
    }
    let l = __recoveredScope.hs(e, t, n),
      u = t - a,
      d = n - o,
      f = Math.hypot(u, d);
    if (f > 1e-6) {
      u /= f * (l ? -1 : 1);
      d /= f * (l ? -1 : 1);
    } else {
      let r = Math.hypot(s, c) || 1;
      u = c / r;
      d = -s / r;
      __recoveredScope.hs(e, t + u * .1, n + d * .1) && (u = -u, d = -d);
    }
    return r.d = l ? -i : i, r.nx = u, r.nz = d, r;
  };
}
/* Recovered binding _s. Live dependencies: os, ps, ms, gs. */
export function create__s(__recoveredScope) {
  return function _s(e, t = []) {
    let n = Math.max(2 * e.step, __recoveredScope.os.straight),
      r = n + __recoveredScope.os.shore,
      i = {
        d: 0,
        nx: 0,
        nz: 0
      },
      a = (e, t) => {
        if (t < 0) {
          let n = -t;
          return e - Math.min(n, __recoveredScope.os.straight) * __recoveredScope.os.slope - (__recoveredScope.os.depth - __recoveredScope.os.straight * __recoveredScope.os.slope) * __recoveredScope.ps(__recoveredScope.os.straight, __recoveredScope.os.straight * 3.5, n);
        }
        return e + Math.min(t, __recoveredScope.os.straight) * __recoveredScope.os.slope + Math.max(0, t - __recoveredScope.os.straight) * __recoveredScope.os.bank;
      };
    return t.map(t => {
      let o = __recoveredScope.ms(t.points, __recoveredScope.os.smooth),
        s = [];
      o.forEach(([t, n], r) => {
        let [i, a] = o[(r + 1) % o.length],
          c = Math.max(1, Math.round(Math.hypot(i - t, a - n) / 2));
        for (let r = 0; r < c; r++) s.push(e.heightAt(t + (i - t) * r / c, n + (a - n) * r / c));
      });
      s.sort((e, t) => e - t);
      let c = s[s.length >> 1],
        l = o.map(e => e[0]),
        u = o.map(e => e[1]),
        d = [Math.min(...l), Math.min(...u), Math.max(...l), Math.max(...u)],
        f = e.verts,
        p = e.step,
        m = Math.max(0, Math.floor((d[0] - r - e.x0) / p)),
        h = Math.min(e.cells, Math.ceil((d[2] + r - e.x0) / p)),
        g = Math.max(0, Math.floor((d[1] - r - e.z0) / p)),
        _ = Math.min(e.cells, Math.ceil((d[3] + r - e.z0) / p));
      for (let t = g; t <= _; t++) for (let s = m; s <= h; s++) {
        let {
            d: l
          } = __recoveredScope.gs(o, e.x0 + s * p, e.z0 + t * p, i),
          u = t * f + s;
        if (l >= r) continue;
        let d = a(c, l);
        e.h[u] = d + (e.h[u] - d) * __recoveredScope.ps(n, r, l);
      }
      return {
        id: t.id,
        name: t.name,
        outline: o,
        level: c,
        box: d
      };
    });
  };
}
/* Recovered binding lakeContainingPoint. Live dependencies: hs. */
export function create_lakeContainingPoint(__recoveredScope) {
  return function lakeContainingPoint(e, t, n) {
    for (let r of e) if (t > r.box[0] && t < r.box[2] && n > r.box[1] && n < r.box[3] && __recoveredScope.hs(r.outline, t, n)) return r;
    return null;
  };
}
/* Recovered binding ys. Live dependencies: lakeContainingPoint. */
export function create_ys(__recoveredScope) {
  return function ys(e, t) {
    return Object.create(e, {
      heightAt: {
        value: (n, r) => {
          let i = e.heightAt(n, r),
            a = __recoveredScope.lakeContainingPoint(t, n, r);
          return a ? Math.max(i, a.level) : i;
        }
      }
    });
  };
}
/* Recovered binding nearestLakeShore. Live dependencies: gs, bs. */
export function create_nearestLakeShore(__recoveredScope) {
  return function nearestLakeShore(e, t, n, r = 20) {
    for (let i of e) {
      let e = i.box;
      if (!(t < e[0] - r || t > e[2] + r || n < e[1] - r || n > e[3] + r) && (__recoveredScope.gs(i.outline, t, n, __recoveredScope.bs), __recoveredScope.bs.d < r)) return __recoveredScope.bs.lake = i, __recoveredScope.bs;
    }
    return null;
  };
}
/* Recovered binding Ss. Live dependencies: MathUtils, nearestLakeShore. */
export function create_Ss(__recoveredScope) {
  return function Ss(e, t) {
    let n = ([e, n]) => Math.min(...t.map(({
        points: t
      }) => Math.min(...t.slice(1).map((r, i) => {
        let a = t[i],
          o = r[0] - a[0],
          s = r[1] - a[1],
          c = __recoveredScope.MathUtils.clamp(((e - a[0]) * o + (n - a[1]) * s) / (o * o + s * s || 1), 0, 1);
        return Math.hypot(a[0] + o * c - e, a[1] + s * c - n);
      })))),
      r = e.outline[0],
      i = 1 / 0;
    for (let t of e.outline) {
      let e = n(t);
      e < i && (i = e, r = t);
    }
    let a = (e.box[0] + e.box[2]) / 2,
      o = (e.box[1] + e.box[3]) / 2,
      s = Math.hypot(a - r[0], o - r[1]),
      {
        nx: c,
        nz: l
      } = __recoveredScope.nearestLakeShore([e], r[0] + (a - r[0]) / s, r[1] + (o - r[1]) / s, 5),
      u = 1.8;
    return {
      x: r[0] - c * u,
      z: r[1] - l * u,
      dx: -c,
      dz: -l
    };
  };
}
/* Recovered binding ws. Live dependencies: g, Ds, os, L, Ts, Cs, Es, ks, c. */
export function create_ws(__recoveredScope) {
  return function ws(e) {
    let t = new __recoveredScope.g();
    t.name = `Lakes`;
    let n = [];
    for (let r of e) {
      let e = __recoveredScope.Ds(r.outline, __recoveredScope.os.pad).map(([e, t]) => new __recoveredScope.L(e, t)),
        i = __recoveredScope.Ts(e.length + __recoveredScope.Cs);
      __recoveredScope.Es(i, e, [], r.level);
      i.computeBoundingSphere();
      let a = __recoveredScope.ks(r.outline),
        o = new __recoveredScope.c(i, a);
      o.name = `lake:${r.id}`;
      o.receiveShadow = true;
      t.add(o);
      let s = r.box,
        l = __recoveredScope.os.pad;
      n.push({
        lake: r,
        geo: i,
        outline: e,
        mat: a,
        on: e => e[0].x > s[0] - l && e[0].x < s[2] + l && e[0].y > s[1] - l && e[0].y < s[3] + l,
        cut: false
      });
    }
    return {
      group: t,
      update(e, t = []) {
        for (let r of n) {
          r.mat.userData.uniforms.uTime.value = e;
          let n = __recoveredScope.Cs,
            i = t.filter(e => e.length > 2 && e.length <= n && r.on(e) && (n -= e.length) >= 0);
          (i.length || r.cut) && (__recoveredScope.Es(r.geo, r.outline, i, r.lake.level), r.cut = i.length > 0);
        }
      },
      setSky(e) {
        for (let t of n) t.mat.userData.uniforms.uSky.value.copy(e);
      }
    };
  };
}
/* Recovered binding Ts. Live dependencies: z, et, ie. */
export function create_Ts(__recoveredScope) {
  return function Ts(e) {
    let t = new __recoveredScope.z();
    t.setAttribute(`position`, new __recoveredScope.et(new Float32Array(e * 3), 3).setUsage(__recoveredScope.ie));
    let n = new Float32Array(e * 3);
    for (let t = 0; t < e; t++) n[t * 3 + 1] = 1;
    return t.setAttribute(`normal`, new __recoveredScope.et(n, 3)), t.setIndex(new __recoveredScope.et(new Uint16Array(e * 3 + 12), 1).setUsage(__recoveredScope.ie)), t;
  };
}
/* Recovered binding Es. Live dependencies: _e. */
export function create_Es(__recoveredScope) {
  return function Es(e, t, n, r) {
    let i = __recoveredScope._e.triangulateShape(t, n),
      a = t.concat(...n),
      o = e.attributes.position,
      s = e.index,
      c = s.array;
    a.forEach((e, t) => o.setXYZ(t, e.x, r, e.y));
    i.forEach(([e, t, n], r) => {
      let i = (a[t].y - a[e].y) * (a[n].x - a[e].x) - (a[t].x - a[e].x) * (a[n].y - a[e].y) > 0;
      c[r * 3] = e;
      c[r * 3 + 1] = i ? t : n;
      c[r * 3 + 2] = i ? n : t;
    });
    e.setDrawRange(0, i.length * 3);
    o.needsUpdate = true;
    s.needsUpdate = true;
  };
}
/* Recovered binding Ds. Live dependencies: hs. */
export function create_Ds(__recoveredScope) {
  return function Ds(e, t) {
    let n = e.length;
    return e.map(([r, i], a) => {
      let [o, s] = e[(a + n - 1) % n],
        [c, l] = e[(a + 1) % n],
        u = l - s,
        d = -(c - o),
        f = Math.hypot(u, d) || 1;
      return u /= f, d /= f, __recoveredScope.hs(e, r + u * .5, i + d * .5) && (u = -u, d = -d), [r + u * t, i + d * t];
    });
  };
}
/* Recovered binding ks. Live dependencies: createToonMaterial, L, K, fs, Os, us. */
export function create_ks(__recoveredScope) {
  return function ks(e) {
    let t = __recoveredScope.createToonMaterial({
        color: `#ffffff`
      }, {
        hatch: 0
      }),
      n = t.onBeforeCompile,
      r = [...e, e[0]].map(([e, t]) => new __recoveredScope.L(e, t)),
      i = {
        uTime: {
          value: 0
        },
        uOutline: {
          value: r
        },
        uShallow: {
          value: new __recoveredScope.K(__recoveredScope.fs.shallow)
        },
        uDeep: {
          value: new __recoveredScope.K(__recoveredScope.fs.deep)
        },
        uSky: {
          value: new __recoveredScope.K(__recoveredScope.fs.sky)
        },
        uRipple: {
          value: new __recoveredScope.K(__recoveredScope.fs.ripple)
        },
        uFoam: {
          value: new __recoveredScope.K(__recoveredScope.fs.foam)
        },
        uInk: {
          value: new __recoveredScope.K(__recoveredScope.fs.ink)
        }
      };
    return t.userData.uniforms = i, t.onBeforeCompile = (e, t) => {
      n(e, t);
      Object.assign(e.uniforms, i);
      e.fragmentShader = e.fragmentShader.replace(`#include <common>`, `#include <common>
        #define LAKE_N ${r.length}
        uniform vec2 uOutline[LAKE_N];
        uniform float uTime;
        uniform vec3 uShallow, uDeep, uSky, uRipple, uFoam, uInk;
        ${__recoveredScope.Os}
        float shoreDist(vec2 p) {
          float d = 1e9;
          for (int i = 0; i < LAKE_N - 1; i++) {
            vec2 a = uOutline[i], ba = uOutline[i + 1] - a, pa = p - a;
            d = min(d, length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0)));
          }
          return d;
        }`).replace(`#include <color_fragment>`, `#include <color_fragment>
        {
          vec2 p = vTWorld.xz;
          float d = shoreDist(p), t = uTime;
          float far = smoothstep(120.0, 600.0, length(vViewPosition));
          // Deeper toward the middle, mottled by slow drifting noise.
          float m = wNoise(p * 0.035 + t * 0.01) * 0.6 + wNoise(p * 0.12 - t * 0.02) * 0.4;
          vec3 col = mix(uShallow, uDeep, clamp(smoothstep(2.0, 32.0, d) * 0.85 + (m - 0.5) * 0.35, 0.0, 1.0));
          // The sky in it, toward the far shore: two flat steps, as the toon tones are.
          vec3 V = normalize(cameraPosition - vTWorld);
          float graze = 1.0 - clamp(V.y, 0.0, 1.0);
          float gw = max(fwidth(graze), 1e-4);
          col = mix(col, uSky, (smoothstep(0.82 - gw, 0.82 + gw, graze) * 0.35 + smoothstep(0.93 - gw, 0.93 + gw, graze) * 0.3));
          // The crests, where the waves the boat rocks on rise highest, broken up.
          float w = waves(p, t) * ${(1 / __recoveredScope.us).toFixed(4)} + (wNoise(p * 0.22 + vec2(t * 0.12, -t * 0.05)) - 0.5) * 0.9;
          float ww = max(fwidth(w), 1e-4);
          float crest = 1.0 - smoothstep(ww * 0.6, ww * 1.8, abs(w - 0.62));
          crest *= smoothstep(0.35, 0.6, wNoise(p * 0.6 + t * 0.07));
          col = mix(col, uRipple, crest * 0.8 * (1.0 - far));
          // Glints of sun among them, small, and more toward the far shore.
          float g = wNoise(p * 5.0 + vec2(t * 1.1, t * 0.5)) * wNoise(p * 1.3 - vec2(t * 0.4, -t * 0.3));
          float gl = max(fwidth(g), 1e-4);
          col = mix(col, vec3(1.0), smoothstep(0.7 - gl, 0.7 + gl, g) * smoothstep(0.45, 0.85, graze) * (1.0 - far));
          // Lapping at the shore: foam that breathes in and out, an ink line at
          // its edge, and a fainter line following it in.
          float wob = wNoise(p * 0.3) * 6.0;
          float lap = 0.9 + 0.5 * sin(t * 1.1 + wob), lap2 = 2.6 + 0.9 * sin(t * 1.1 - 1.3 + wob);
          float fw = max(fwidth(d), 1e-3);
          float foam = 1.0 - smoothstep(lap - fw, lap + fw, d);
          float line2 = (1.0 - smoothstep(fw * 0.5, fw * 1.6, abs(d - lap2))) * (0.45 + 0.35 * sin(t * 1.1 - 1.3 + wob));
          col = mix(col, uFoam, max(foam, line2) * (1.0 - far * 0.5));
          float ink = 1.0 - smoothstep(fw * 0.5, fw * 1.8, abs(d - lap));
          col = mix(col, uInk, ink * 0.5 * (1.0 - far * 0.7));
          diffuseColor.rgb = col;
        }`);
    }, t.customProgramCacheKey = () => `lake-water-${r.length}`, t;
  };
}
/* Recovered binding WaterRipples. Live dependencies: g, ut, Cs, L, c, ot, fs. */
export function create_WaterRipples(__recoveredScope) {
  return class {
    constructor(e = 40) {
      this.group = new __recoveredScope.g();
      this.group.name = `Ripples`;
      let t = new __recoveredScope.ut(.9, 1, 40).rotateX(-Math.PI / 2);
      this.hole = {
        uHole: {
          value: Array.from({
            length: __recoveredScope.Cs
          }, () => new __recoveredScope.L())
        },
        uHoleN: {
          value: 0
        }
      };
      this.rings = Array.from({
        length: e
      }, () => {
        let e = new __recoveredScope.c(t, this.#e());
        return e.visible = false, e.renderOrder = 1, this.group.add(e), {
          mesh: e,
          t: 0,
          life: 1,
          r0: 0,
          r1: 0,
          alpha: 0
        };
      });
      this.next = 0;
    }
    emit(e, t, n, r = .15, i = 1.6, a = 1.8, o = .7) {
      let s = this.rings[this.next];
      this.next = (this.next + 1) % this.rings.length;
      Object.assign(s, {
        t: 0,
        life: a,
        r0: r,
        r1: i,
        alpha: o
      });
      s.mesh.position.set(e, t + .02, n);
      s.mesh.visible = true;
    }
    #e() {
      let e = new __recoveredScope.ot({
        color: __recoveredScope.fs.ripple,
        transparent: true,
        depthWrite: false
      });
      return e.onBeforeCompile = e => {
        Object.assign(e.uniforms, this.hole);
        e.vertexShader = e.vertexShader.replace(`#include <common>`, `#include <common>
varying vec2 vRipple;`).replace(`#include <project_vertex>`, `#include <project_vertex>
vRipple = (modelMatrix * vec4(transformed, 1.0)).xz;`);
        e.fragmentShader = e.fragmentShader.replace(`#include <common>`, `#include <common>
        varying vec2 vRipple;
        uniform vec2 uHole[${__recoveredScope.Cs}];
        uniform int uHoleN;`).replace(`#include <clipping_planes_fragment>`, `#include <clipping_planes_fragment>
        {
          bool inHole = false;
          for (int i = 0, j = uHoleN - 1; i < ${__recoveredScope.Cs}; j = i++) {
            if (i >= uHoleN) break;
            vec2 a = uHole[i], b = uHole[j];
            if ((a.y > vRipple.y) != (b.y > vRipple.y) && vRipple.x < (b.x - a.x) * (vRipple.y - a.y) / (b.y - a.y) + a.x) inHole = !inHole;
          }
          if (inHole) discard;
        }`);
      }, e.customProgramCacheKey = () => `ripple-holed`, e;
    }
    update(e, t = []) {
      let n = t.find(e => e.length > 2 && e.length <= __recoveredScope.Cs) ?? [];
      n.forEach((e, t) => this.hole.uHole.value[t].copy(e));
      this.hole.uHoleN.value = n.length;
      for (let t of this.rings) {
        if (!t.mesh.visible) continue;
        t.t += e;
        let n = t.t / t.life;
        if (n >= 1) {
          t.mesh.visible = false;
          continue;
        }
        let r = t.r0 + (t.r1 - t.r0) * (1 - (1 - n) ** 2);
        t.mesh.scale.set(r, 1, r);
        t.mesh.material.opacity = t.alpha * (1 - n) ** 1.5;
      }
    }
  };
}
