/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Ls. Live dependencies: K. */
export function create_Ls(__recoveredScope) {
  return {
    spruce: {
      far: new __recoveredScope.K(`#46705f`),
      snow: 1,
      fill: .75,
      trunk: .45
    },
    larch: {
      far: new __recoveredScope.K(`#76665d`),
      snow: .3,
      fill: .7,
      trunk: .45
    },
    pine: {
      far: new __recoveredScope.K(`#3f6650`),
      snow: 1,
      fill: .8,
      trunk: .5
    },
    birch: {
      far: new __recoveredScope.K(`#7b675b`),
      snow: .25,
      fill: .6,
      trunk: .3
    }
  };
}
/* Recovered binding Rs. Live dependencies: K, et. */
export function create_Rs(__recoveredScope) {
  return function Rs(e, t) {
    let n = e.index ? e.toNonIndexed() : e,
      r = n.attributes.position,
      i = new Float32Array(r.count * 3),
      a = new __recoveredScope.K();
    for (let e = 0; e < r.count / 3; e++) {
      t(a, (r.getY(e * 3) + r.getY(e * 3 + 1) + r.getY(e * 3 + 2)) / 3, e);
      for (let t = 0; t < 3; t++) a.toArray(i, (e * 3 + t) * 3);
    }
    return n.setAttribute(`color`, new __recoveredScope.et(i, 3)), n.computeVertexNormals(), n;
  };
}
/* Recovered binding zs. Live dependencies: st, Rs. */
export function create_zs(__recoveredScope) {
  return function zs(e, t, n, r, i, a, o) {
    let s = new __recoveredScope.st(e, t, r, a, true),
      c = s.attributes.position;
    for (let e = 0; e < c.count; e++) if (c.getY(e) < -t / 2 + .01) {
      let t = Math.atan2(c.getZ(e), c.getX(e)),
        n = 1 + .12 * Math.sin(t * 5 + i * 3);
      c.setX(e, c.getX(e) * n);
      c.setZ(e, c.getZ(e) * n);
      c.setY(e, c.getY(e) - .25 * Math.abs(Math.sin(t * 2.5 + i)));
    }
    return s.rotateY(i), s.translate(0, n, 0), __recoveredScope.Rs(s, (e, r, i) => {
      let a = (r - (n - t / 2)) / t;
      o(e, a > .6 || a > .3 && i % 3 == 0, i);
    });
  };
}
/* Recovered binding Bs. Live dependencies: d, Rs, Ps, Ns, js, Ms, zs, mt, Fs. */
export function create_Bs(__recoveredScope) {
  return function Bs(e) {
    let t = [];
    if (!e) {
      let e = new __recoveredScope.d(.22, .32, 3, 5, 1, true).translate(0, 1.5, 0);
      t.push(__recoveredScope.Rs(e, e => e.copy(__recoveredScope.Ps)));
    }
    let n = e ? (e, t, n) => e.setRGB(+!!t, n % 2, 0) : (e, t, n) => e.copy(t ? __recoveredScope.Ns : n % 2 ? __recoveredScope.js : __recoveredScope.Ms);
    (e ? [[2.7, 7, 4.6], [1.7, 5.8, 8.8]] : [[2.8, 4.6, 3.8], [2.1, 4.4, 7], [1.3, 3.8, 9.9]]).forEach(([r, i, a], o) => t.push(__recoveredScope.zs(r, i, a, e ? 6 : 7, o * 1.3, e ? 1 : 2, n)));
    let r = __recoveredScope.mt(t.map(e => (e.deleteAttribute(`uv`), e)));
    return e && r.scale(1 / 2.7, 1 / __recoveredScope.Fs, 1 / 2.7), r.computeBoundingSphere(), r;
  };
}
/* Recovered binding Vs. Live dependencies: createToonMaterial, Ns. */
export function create_Vs(__recoveredScope) {
  return function Vs() {
    let e = __recoveredScope.createToonMaterial({
        vertexColors: true
      }, {
        hatch: 1
      }),
      t = e.onBeforeCompile,
      n = __recoveredScope.Ns.clone();
    return e.onBeforeCompile = (e, r) => {
      t(e, r);
      e.vertexShader = e.vertexShader.replace(`#include <common>`, `#include <common>
attribute float aSnow;`).replace(`#include <color_vertex>`, `vColor = vec4(mix(instanceColor.rgb * (1.0 - 0.18 * color.g), vec3(${n.r}, ${n.g}, ${n.b}), color.r * aSnow), 1.0);`);
    }, e.customProgramCacheKey = () => `tree-far`, e;
  };
}
/* Recovered binding loadTreeModelLibrary. Live dependencies: loadGLTF, Is, z, et. */
export function create_loadTreeModelLibrary(__recoveredScope) {
  return async function loadTreeModelLibrary() {
    let e = await __recoveredScope.loadGLTF(`./models/trees/trees.glb`),
      t = Object.fromEntries(__recoveredScope.Is.map(e => [e, []])),
      n = new Map();
    e.scene.traverse(e => {
      let r = e.isMesh && e.name.match(/^(\w+)-(\w+)_lod(\d)$/);
      if (!r || !t[r[1]]) return;
      let i = `${r[1]}-${r[2]}`;
      if (!n.has(i)) {
        let e = {};
        n.set(i, e);
        t[r[1]].push(e);
      }
      let a = e.geometry.index ? e.geometry.toNonIndexed() : e.geometry,
        o = a.attributes.color,
        s = new Float32Array(o.count * 3);
      for (let e = 0; e < o.count; e++) s.set([o.getX(e), o.getY(e), o.getZ(e)], e * 3);
      let c = new __recoveredScope.z();
      c.setAttribute(`position`, a.attributes.position);
      c.setAttribute(`color`, new __recoveredScope.et(s, 3));
      c.computeVertexNormals();
      c.computeBoundingBox();
      n.get(i)[`lod${r[3]}`] = c;
    });
    for (let e of Object.values(t)) for (let t of e) {
      let e = t.lod0.boundingBox;
      t.height = e.max.y;
      t.radius = Math.max(-e.min.x, e.max.x, -e.min.z, e.max.z);
    }
    return t;
  };
}
/* Recovered binding Us. Live dependencies: Bs, Is, Fs. */
export function create_Us(__recoveredScope) {
  return function Us() {
    let e = __recoveredScope.Bs(0);
    return Object.fromEntries(__recoveredScope.Is.map(t => [t, [{
      lod0: e,
      lod1: e,
      height: __recoveredScope.Fs,
      radius: 2.8
    }]]));
  };
}
/* Recovered binding forestPlacementDefaults. Live dependencies: serviceCentreLocations, hotSpringLocation. */
export function create_forestPlacementDefaults(__recoveredScope) {
  return {
    treeline: 2350,
    spacing: 10,
    density: .25,
    get clearings() {
      return [...__recoveredScope.serviceCentreLocations.map(e => ({
        x: e.x,
        z: e.z,
        r: 110
      })), {
        x: __recoveredScope.hotSpringLocation.x,
        z: __recoveredScope.hotSpringLocation.z,
        r: __recoveredScope.hotSpringLocation.clearing
      }];
    }
  };
}
/* Recovered binding Gs. Live dependencies: . */
export function create_Gs(__recoveredScope) {
  return function Gs(e) {
    let t = e.map(e => [e.points[0], e.points[e.points.length - 1]]);
    return (e, n) => {
      let r = 1 / 0;
      for (let [i, a] of t) {
        let t = a[0] - i[0],
          o = a[1] - i[1],
          s = ((e - i[0]) * t + (n - i[1]) * o) / (t * t + o * o);
        s = Math.max(0, Math.min(1, s));
        r = Math.min(r, Math.hypot(i[0] + t * s - e, i[1] + o * s - n));
      }
      return r;
    };
  };
}
/* Recovered binding Ys. Live dependencies: Js. */
export function create_Ys(__recoveredScope) {
  return function Ys(e) {
    let t = Math.hypot(e.x, e.z);
    return {
      north: t > 1e-4 ? -e.z / t : 0,
      steep: __recoveredScope.Js(t, .04, .2)
    };
  };
}
/* Recovered binding Xs. Live dependencies: MathUtils, Js, Oa. */
export function create_Xs(__recoveredScope) {
  return function Xs(e, t, {
    north: n,
    steep: r
  }) {
    return __recoveredScope.MathUtils.lerp(.6, __recoveredScope.MathUtils.lerp(.2, 1.5, __recoveredScope.Js(n, -.7, .5)), r) * (.35 + .65 * __recoveredScope.Js(__recoveredScope.Oa(e * .004 + 7, t * .004 - 3), .3, .7));
  };
}
/* Recovered binding Zs. Live dependencies: Js, Oa, ic. */
export function create_Zs(__recoveredScope) {
  return function Zs(e, t, n, {
    north: r,
    steep: i
  }, a) {
    let o = 1 - __recoveredScope.Js(n, 1380, 1520),
      s = __recoveredScope.Js(n, 1950, 2250),
      c = Math.max(0, r) * i,
      l = [(.25 + 1.1 * c + .5 * o) * (1 - .8 * s), 1, .05 + 1.3 * s + a, .02 + 1.2 * o * (1 - c)].map((n, r) => n * (.3 + 1.4 * __recoveredScope.Oa(e * .005 + r * 31, t * .005 - r * 17))),
      u = __recoveredScope.ic(e * .37 + 1.9, t * 1.1) * l.reduce((e, t) => e + t);
    for (let e = 0; e < l.length; e++) if ((u -= l[e]) < 0) return e;
    return 1;
  };
}
/* Recovered binding Qs. Live dependencies: Gs, Vector3, ic, Oa, Js, Ks, qs, Ys, Xs, Zs, ec. */
export function create_Qs(__recoveredScope) {
  return function Qs(e, t, n, {
    treeline: r,
    spacing: i = 10,
    density: a = .5,
    clearings: o = [],
    area: c = null
  }) {
    let l = __recoveredScope.Gs(n),
      u = new __recoveredScope.Vector3(),
      d = Math.ceil(e.size / i),
      f = (e, t) => Math.max(0, Math.ceil((e - t) / i)),
      p = (e, t) => Math.min(d - 1, Math.floor((e - t) / i)),
      [m, h, g, _] = c ? [f(c[0], e.x0), f(c[1], e.z0), p(c[2], e.x0), p(c[3], e.z0)] : [0, 0, d - 1, d - 1],
      v = [];
    for (let n = h; n <= _; n++) {
      let s = e.z0 + n * i;
      for (let c = m; c <= g; c++) {
        let f = e.x0 + c * i,
          p = f + (__recoveredScope.ic(f, s) - .5) * i * .9,
          m = s + (__recoveredScope.ic(s + 3.3, f) - .5) * i * .9;
        if (!e.inside(p, m, 30) || e.holeAt(p, m)) continue;
        let h = e.heightAt(p, m),
          g = r + (__recoveredScope.Oa(p * .006, m * .006) - .5) * 160;
        if (h > g) continue;
        let _ = __recoveredScope.Js(h, g - 120, g);
        if (__recoveredScope.ic(p * 1.7, m) < _ * .85 || t.distAt(p, m) < __recoveredScope.Ks + __recoveredScope.ic(p, m * 1.3) * 6 || l(p, m) < __recoveredScope.qs || (e.normalAt(p, m, u), u.y < .78) || __recoveredScope.Oa(p * .012 + 40, m * .012) < .42) continue;
        let y = __recoveredScope.Ys(u);
        if (__recoveredScope.ic(p + 5.1, m * .7) > a * __recoveredScope.Xs(p, m, y) || o.some(e => Math.hypot(p - e.x, m - e.z) < e.r)) continue;
        let b = __recoveredScope.Zs(p, m, h, y, _);
        v.push(__recoveredScope.ec(n * d + c, p, m, (.75 + __recoveredScope.ic(m, p * 2.1) * .55) * (1 - _ * .4), b));
      }
    }
    return v;
  };
}
/* Recovered binding $s. Live dependencies: Vector3, Zs, Ys, ec. */
export function create_Dollars(__recoveredScope) {
  return function $s(e, t, n) {
    if (!n) return {
      trees: e,
      removed: []
    };
    let r = n.removed instanceof Set ? n.removed : new Set(n.removed || []),
      i = [],
      a = [];
    for (let t of e) (r.has(t.id) ? a : i).push(t);
    let o = new __recoveredScope.Vector3();
    return (n.added || []).forEach(([e, n, r], a) => {
      if (!t.inside(e, n) || t.holeAt(e, n)) return;
      let s = __recoveredScope.Zs(e, n, t.heightAt(e, n), __recoveredScope.Ys(t.normalAt(e, n, o)), 0);
      i.push(__recoveredScope.ec(-1 - a, e, n, r, s));
    }), {
      trees: i,
      removed: a
    };
  };
}
/* Recovered binding ec. Live dependencies: ic. */
export function create_ec(__recoveredScope) {
  return function ec(e, t, n, r, i) {
    return {
      id: e,
      x: t,
      z: n,
      s: r,
      sp: i,
      v: __recoveredScope.ic(t * 2.3, n + 5.7),
      sy: r * (.9 + __recoveredScope.ic(t + 2, n) * .3),
      rot: __recoveredScope.ic(t, n + 9) * Math.PI * 2
    };
  };
}
/* Recovered binding placeForestTrees. Live dependencies: $s, Qs, forestPlacementDefaults. */
export function create_placeForestTrees(__recoveredScope) {
  return function placeForestTrees(e, t, n, r = null) {
    return __recoveredScope.$s(__recoveredScope.Qs(e, t, n, {
      ...__recoveredScope.forestPlacementDefaults,
      density: r?.density ?? __recoveredScope.forestPlacementDefaults.density
    }), e, r).trees;
  };
}
/* Recovered binding nc. Live dependencies: Gs, ic, Ks, qs, ec. */
export function create_nc(__recoveredScope) {
  return function nc(e, t, n, r, {
    scale: i,
    cell: a,
    per: o = i * i,
    keepOff: s = [],
    room: c = 12
  }) {
    let l = 2.8 * (i - 1),
      u = __recoveredScope.Gs(r),
      d = Math.ceil(t.size / a),
      f = new Map();
    for (let n of e) {
      let e = Math.floor((n.z - t.z0) / a) * d + Math.floor((n.x - t.x0) / a);
      f.has(e) || f.set(e, []);
      f.get(e).push(n);
    }
    let p = (e, t, n, r) => {
        let i = Math.cos(e.yaw),
          a = Math.sin(e.yaw),
          o = t - e.x,
          s = n - e.z;
        return Math.abs(o * i - s * a) < e.hw + r && Math.abs(o * a + s * i) < e.hd + r;
      },
      m = [];
    for (let [e, r] of f) {
      let f = t.x0 + e % d * a,
        h = t.z0 + Math.floor(e / d) * a;
      if (__recoveredScope.ic(f + 1.7, h + 4.1) * o >= r.length) continue;
      let g = f + __recoveredScope.ic(f, h) * a,
        _ = h + __recoveredScope.ic(h + 3.3, f) * a,
        v = null,
        y = 1 / 0;
      for (let e of r) {
        let t = Math.hypot(e.x - g, e.z - _);
        if (t >= y || n.distAt(e.x, e.z) < __recoveredScope.Ks + l || u(e.x, e.z) < __recoveredScope.qs + l) continue;
        let r = 2.8 * e.s * i + c;
        s.some(t => p(t, e.x, e.z, r)) || (v = e, y = t);
      }
      v && m.push(__recoveredScope.ec(v.id, v.x, v.z, v.s * i, v.sp));
    }
    return m;
  };
}
/* Recovered binding createForestBatches. Live dependencies: Us, Bs, createToonMaterial, Vs, Is, xe, Vector3, T, Ls, ce, g, K, z, ve, ge, ic. */
export function create_createForestBatches(__recoveredScope) {
  return function createForestBatches(e, t, {
    models: n = null,
    chunk: r = 250,
    lodDistance: i = 450,
    hiDistance: a = 160,
    maxNearInstances: o = 1 / 0
  } = {}) {
    if (o !== 1 / 0 && (!Number.isInteger(o) || o < 1)) throw Error(`Invalid near-tree budget`);
    n ??= __recoveredScope.Us();
    let c = __recoveredScope.Bs(1),
      l = __recoveredScope.createToonMaterial({
        vertexColors: true
      }, {
        hatch: 1
      }),
      u = __recoveredScope.Vs(),
      d = __recoveredScope.Is.map(e => n[e]),
      f = 0;
    for (let e of d) for (let t of e) f += t.lod0.attributes.position.count + t.lod1.attributes.position.count;
    let p = new __recoveredScope.xe(Number.isFinite(o) ? o : 2048, f, 0, l),
      m = d.map(e => e.map(e => [p.addGeometry(e.lod0), p.addGeometry(e.lod1)]));
    p.castShadow = true;
    p.receiveShadow = false;
    p.frustumCulled = false;
    let h = r,
      _ = new Map(),
      v = new Map(),
      y = 0,
      b = new __recoveredScope.Vector3(0, 1, 0),
      x = new __recoveredScope.T(),
      S = new __recoveredScope.Vector3(),
      C = new __recoveredScope.Vector3();
    for (let n of t) {
      let t = d[n.sp],
        r = Math.floor(n.v * t.length) % t.length,
        i = t[r],
        a = __recoveredScope.Ls[__recoveredScope.Is[n.sp]];
      x.setFromAxisAngle(b, n.rot);
      C.set(n.x, e.heightAt(n.x, n.z) - .3, n.z);
      let o = new __recoveredScope.ce().compose(C, x, S.set(n.s, n.sy, n.s)),
        s = i.radius * a.fill * n.s,
        c = new __recoveredScope.ce().compose(C, x, S.set(s, i.height * n.sy, s)),
        l = `${Math.floor(n.x / h)},${Math.floor(n.z / h)}`,
        u = _.get(l);
      u || _.set(l, u = []);
      u.push({
        m: o,
        fm: c,
        pos: C.clone(),
        geo: m[n.sp][r],
        kind: a
      });
      let f = `${Math.floor(n.x / 10)},${Math.floor(n.z / 10)}`,
        p = v.get(f);
      p || v.set(f, p = []);
      let g = i.radius * n.s;
      y = Math.max(y, g);
      p.push({
        x: n.x,
        z: n.z,
        r: a.trunk * n.s + .15,
        crown: g,
        top: C.y + i.height * n.sy
      });
    }
    let w = t.length,
      E = new __recoveredScope.g();
    E.add(p);
    let D = new __recoveredScope.K(),
      O = e => {
        let t = new __recoveredScope.z();
        for (let [e, n] of Object.entries(c.attributes)) t.setAttribute(e, n);
        t.setAttribute(`aSnow`, new __recoveredScope.ve(Float32Array.from(e, e => e.kind.snow), 1));
        t.boundingSphere = c.boundingSphere;
        let n = new __recoveredScope.ge(t, u, e.length);
        return e.forEach((e, t) => {
          n.setMatrixAt(t, e.fm);
          n.setColorAt(t, D.copy(e.kind.far).multiplyScalar(.92 + .16 * __recoveredScope.ic(e.pos.x, e.pos.z * 1.3)));
        }), n.castShadow = false, n.receiveShadow = false, n.computeBoundingSphere(), E.add(n), n;
      },
      k = new Map();
    for (let [t, n] of _) {
      let [r, i] = t.split(`,`).map(Number),
        a = new __recoveredScope.Vector3((r + .5) * h, 0, (i + .5) * h);
      a.y = e.heightAt(a.x, a.z);
      let o = `${Math.floor(r / 4)},${Math.floor(i / 4)}`,
        c = k.get(o);
      c || k.set(o, c = {
        chunks: [],
        trees: []
      });
      c.chunks.push({
        center: a,
        trees: n,
        lo: O(n),
        ids: null,
        lods: null
      });
      c.trees.push(...n);
    }
    for (let [t, n] of k) {
      let [r, i] = t.split(`,`).map(Number);
      n.center = new __recoveredScope.Vector3((r + .5) * h * 4, 0, (i + .5) * h * 4);
      n.center.y = e.heightAt(n.center.x, n.center.z);
      n.lo = O(n.trees);
    }
    let ee = i + h * 4 * .75;
    console.log(`forest: ${w} trees in ${_.size} chunks, ${k.size} far batches`);
    let A = (e, t) => e < a ? 0 : e > a + 20 ? 1 : t,
      j = new Set();
    function M(e, t) {
      let n = p.instanceCount + e.trees.length;
      n > p.maxInstanceCount && p.setInstanceCount(Math.max(n, Math.ceil(p.maxInstanceCount * 1.5)));
      e.ids = new Int32Array(e.trees.length);
      e.lods = new Uint8Array(e.trees.length);
      e.trees.forEach((n, r) => {
        let i = A(n.pos.distanceTo(t), 1);
        e.ids[r] = p.addInstance(n.geo[i]);
        e.lods[r] = i;
        p.setMatrixAt(e.ids[r], n.m);
      });
      j.add(e);
    }
    function N(e) {
      for (let t of e.ids) p.deleteInstance(t);
      e.ids = e.lods = null;
      j.delete(e);
    }
    let te = new __recoveredScope.Vector3(1 / 0, 0, 0);
    return {
      group: E,
      count: w,
      farMeshes: [...k.values()].flatMap(e => [e.lo, ...e.chunks.map(e => e.lo)]),
      update(e) {
        let t = false,
          n = [];
        for (let t of k.values()) {
          let r = t.center.distanceTo(e) > ee;
          t.lo.visible = r;
          for (let a of t.chunks) {
            let t = a.center.distanceTo(e);
            a.lo.visible = !r;
            !r && t < i && n.push({
              c: a,
              distance: t
            });
          }
        }
        Number.isFinite(o) && n.sort((e, t) => e.distance - t.distance);
        let r = new Set(),
          a = o;
        for (let {
          c: e
        } of n) e.trees.length > a || (r.add(e), a -= e.trees.length, e.lo.visible = false);
        for (let e of j) r.has(e) || (N(e), t = true);
        for (let n of r) n.ids || (M(n, e), t = true);
        if (!(!t && te.distanceToSquared(e) < 16)) {
          te.copy(e);
          for (let t of j) t.trees.forEach((n, r) => {
            let i = A(n.pos.distanceTo(e), t.lods[r]);
            i !== t.lods[r] && (t.lods[r] = i, p.setGeometryIdAt(t.ids[r], n.geo[i]));
          });
        }
      },
      hit(e, t, n) {
        let r = Math.floor(e / 10),
          i = Math.floor(t / 10);
        for (let a = i - 1; a <= i + 1; a++) for (let i = r - 1; i <= r + 1; i++) {
          let r = v.get(`${i},${a}`);
          if (r) for (let i of r) {
            let r = e - i.x,
              a = t - i.z,
              o = n + i.r;
            if (r * r + a * a < o * o) return i;
          }
        }
        return null;
      },
      hitCanopy(e, t, n) {
        let r = Math.floor(e / 10),
          i = Math.floor(t / 10),
          a = Math.ceil((y + n) / 10);
        for (let o = i - a; o <= i + a; o++) for (let i = r - a; i <= r + a; i++) {
          let r = v.get(`${i},${o}`);
          if (r) for (let i of r) {
            let r = e - i.x,
              a = t - i.z,
              o = n + i.crown;
            if (r * r + a * a < o * o) return i;
          }
        }
        return null;
      }
    };
  };
}
/* Recovered binding ic. Live dependencies: . */
export function create_ic(__recoveredScope) {
  return function ic(e, t) {
    let n = Math.sin(e * 12.9898 + t * 78.233) * 43758.5453;
    return n - Math.floor(n);
  };
}
