/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding rl. Live dependencies: g, qc, Vector3, Qc, Xc, L, K, tl, yl, gl, Yc, _l, vl, il, loadGLTF, Kc, al, Jc, ol, ce, T, sl, ll, el, c, ul, fl, Zc, tt, Fe, pl, ml. */
export function create_rl(__recoveredScope) {
  return function rl(e, {
    x: t,
    z: n,
    faceTo: r
  }) {
    let i = new __recoveredScope.g();
    i.name = `Onsen`;
    let a = Math.atan2(r[0] - t, r[1] - n);
    i.rotation.y = a;
    let o = (r, i, o) => {
        let s = 1 / 0,
          c = Math.cos(a),
          l = Math.sin(a);
        for (let a = -o; a <= o; a += o / 4) for (let u = -o; u <= o; u += o / 4) {
          if (a * a + u * u > o * o * 1.05) continue;
          let d = r + a,
            f = i + u;
          s = Math.min(s, e.heightAt(t + d * c + f * l, n - d * l + f * c));
        }
        return s;
      },
      l = o(0, 0, __recoveredScope.qc / 2) - .05;
    i.position.set(t, l, n);
    i.updateMatrixWorld(true);
    let u = (e, t) => new __recoveredScope.Vector3(e, 0, t).applyMatrix4(i.matrixWorld),
      d = (e, t) => new __recoveredScope.Vector3(e, 0, t).transformDirection(i.matrixWorld),
      f = (e, t, n, r, i) => {
        let o = u(e, t);
        return {
          kind: `onsen`,
          x: o.x,
          z: o.z,
          yaw: a,
          hw: n,
          hd: r,
          top: l + i
        };
      },
      p = [f(0, 0, __recoveredScope.qc * .48, __recoveredScope.qc * .48, 1.7), f(__recoveredScope.Qc.x + .6, __recoveredScope.Qc.z, .86, 1.16, __recoveredScope.Xc * .95)],
      m = {
        uTime: {
          value: 0
        },
        uFall: {
          value: new __recoveredScope.L()
        },
        uDrift: {
          value: new __recoveredScope.L()
        },
        uSoak: {
          value: new __recoveredScope.Vector3()
        },
        uDeep: {
          value: new __recoveredScope.K(__recoveredScope.tl.deep)
        },
        uPale: {
          value: new __recoveredScope.K(__recoveredScope.tl.pale)
        },
        uFoam: {
          value: new __recoveredScope.K(__recoveredScope.tl.foam)
        }
      },
      h = d(0, 1).multiplyScalar(.18);
    m.uDrift.value.set(h.x, h.z);
    let _ = __recoveredScope.yl(i);
    i.add(_);
    let v = null,
      y = __recoveredScope.gl,
      b = {
        group: i,
        footprints: p,
        waterY: l + __recoveredScope.Yc,
        seat: {
          x: 0,
          z: 0,
          dx: 1,
          dz: 0
        },
        exit: null,
        way: null,
        fall: null,
        floorAt: () => null,
        near(e, r) {
          return Math.hypot(e - t, r - n) < 5.4;
        },
        puff(e) {
          v = e;
          y = 0;
          _.visible = true;
        },
        update(e, t, n) {
          m.uTime.value = t;
          let r = 1 - Math.exp(-e * 2),
            a = m.uSoak.value;
          n ? a.set(n.x, n.z, a.z + (1 - a.z) * r) : a.z -= a.z * r;
          _.visible &&= (y < __recoveredScope._l && i.worldToLocal(_.material.uniforms.uOrigin.value.copy(v).add(__recoveredScope.vl)), y += e, _.material.uniforms.uAge.value = y, y < __recoveredScope.gl);
        },
        ready: null
      },
      x = u(0, 4.9),
      S = d(0, 1);
    return b.exit = {
      x: x.x,
      z: x.z,
      dx: S.x,
      dz: S.z
    }, __recoveredScope.il(b, u(-1.6, 0), d(1, 0)), b.ready = Promise.all([`stone-arena`, `cave-rock`].map(e => __recoveredScope.loadGLTF(`${__recoveredScope.Kc}${e}.glb`))).then(([t, n]) => {
      let r = __recoveredScope.al(t, [__recoveredScope.qc, __recoveredScope.Jc, __recoveredScope.qc]);
      i.add(__recoveredScope.ol(r));
      let a = o(__recoveredScope.Qc.x + .6, __recoveredScope.Qc.z, 1.2) - .08 - l,
        f = new __recoveredScope.ce().compose(new __recoveredScope.Vector3(__recoveredScope.Qc.x, a, __recoveredScope.Qc.z), new __recoveredScope.T().setFromAxisAngle(new __recoveredScope.Vector3(0, 1, 0), -Math.PI / 2), new __recoveredScope.Vector3(__recoveredScope.Xc, __recoveredScope.Xc, __recoveredScope.Xc));
      i.add(__recoveredScope.ol(__recoveredScope.al(n, [1, 1, 1]).applyMatrix4(f)));
      let p = __recoveredScope.sl(r, __recoveredScope.qc / 2, .05),
        h = __recoveredScope.ll(p),
        g = new __recoveredScope.Vector3();
      b.floorAt = (e, t) => {
        i.worldToLocal(g.set(e, 0, t));
        let n = p.at(g.x, g.z);
        return n < 0 ? null : l + n;
      };
      let _ = (e, t) => u(__recoveredScope.el.x, e).setY(t),
        v = u(__recoveredScope.el.x, __recoveredScope.el.shore),
        y = d(0, -1);
      b.way = {
        shore: v.setY(e.heightAt(v.x, v.z)),
        stone: _(__recoveredScope.el.stone, l + p.at(__recoveredScope.el.x, __recoveredScope.el.stone)),
        water: _(__recoveredScope.el.water, l + p.at(__recoveredScope.el.x, __recoveredScope.el.water)),
        dx: y.x,
        dz: y.z
      };
      let x = new __recoveredScope.c(__recoveredScope.ul(h), __recoveredScope.fl(m));
      x.position.y = __recoveredScope.Yc;
      x.receiveShadow = true;
      i.add(x);
      let S = h.radius(Math.PI);
      __recoveredScope.il(b, u(h.center.x - S + .55, h.center.y), d(1, 0));
      let C = e => new __recoveredScope.Vector3(__recoveredScope.Zc.x, __recoveredScope.Zc.y + .012, e).applyMatrix4(f),
        w = C(__recoveredScope.Zc.from),
        E = C(__recoveredScope.Zc.lip),
        D = E.clone().sub(w).setY(0).normalize(),
        O = [w, w.clone().lerp(E, .5), E],
        k = E.y - .51,
        ee = Math.sqrt(2 * k / 9.81);
      for (let e = 1; e <= 6; e++) {
        let t = e / 6 * ee;
        O.push(E.clone().addScaledVector(D, 1.1 * t).add(new __recoveredScope.Vector3(0, -4.905 * t * t, 0)));
      }
      let A = O[O.length - 1],
        j = A.clone().applyMatrix4(i.matrixWorld);
      m.uFall.value.set(j.x, j.z);
      b.fall = j;
      let M = new __recoveredScope.c(new __recoveredScope.tt(new __recoveredScope.Fe(O, false, `centripetal`), 48, .1, 8, false), __recoveredScope.pl(m));
      M.castShadow = true;
      i.add(M);
      let N = __recoveredScope.ml(h, new __recoveredScope.L(A.x, A.z), m, i);
      i.add(N);
    }), b;
  };
}
/* Recovered binding il. Live dependencies: . */
export function create_il(__recoveredScope) {
  return function il(e, t, n) {
    e.seat = {
      x: t.x,
      z: t.z,
      dx: n.x,
      dz: n.z
    };
  };
}
/* Recovered binding al. Live dependencies: . */
export function create_al(__recoveredScope) {
  return function al(e, t) {
    let n = null;
    e.scene.updateMatrixWorld(true);
    e.scene.traverse(e => {
      e.isMesh && !n && (n = e);
    });
    let r = n.geometry.clone().applyMatrix4(n.matrixWorld);
    r.computeBoundingBox();
    let i = r.boundingBox;
    return r.translate(-(i.min.x + i.max.x) / 2, -i.min.y, -(i.min.z + i.max.z) / 2).scale(...t), r.userData.map = n.material.map, r.userData.side = n.material.side, r;
  };
}
/* Recovered binding ol. Live dependencies: c, createToonMaterial. */
export function create_ol(__recoveredScope) {
  return function ol(e) {
    let t = new __recoveredScope.c(e, __recoveredScope.createToonMaterial({
      map: e.userData.map,
      side: e.userData.side
    }));
    return t.castShadow = true, t.receiveShadow = true, t;
  };
}
/* Recovered binding sl. Live dependencies: Vector3. */
export function create_sl(__recoveredScope) {
  return function sl(e, t, n) {
    let r = Math.ceil(2 * t / n),
      i = new Float32Array(r * r).fill(-1),
      a = e.attributes.position,
      o = e.index,
      c = o ? o.count : a.count,
      l = new __recoveredScope.Vector3(),
      u = new __recoveredScope.Vector3(),
      d = new __recoveredScope.Vector3(),
      f = e => Math.floor((e + t) / n),
      p = (e, t, n) => {
        if (e < 0 || t < 0 || e >= r || t >= r) return;
        let a = t * r + e;
        n > i[a] && (i[a] = n);
      };
    for (let e = 0; e < c; e += 3) {
      l.fromBufferAttribute(a, o ? o.getX(e) : e);
      u.fromBufferAttribute(a, o ? o.getX(e + 1) : e + 1);
      d.fromBufferAttribute(a, o ? o.getX(e + 2) : e + 2);
      for (let e of [l, u, d]) p(f(e.x), f(e.z), e.y);
      let i = (u.z - d.z) * (l.x - d.x) + (d.x - u.x) * (l.z - d.z);
      if (Math.abs(i) < 1e-9) continue;
      let s = Math.max(0, f(Math.min(l.x, u.x, d.x))),
        c = Math.min(r - 1, f(Math.max(l.x, u.x, d.x))),
        m = Math.max(0, f(Math.min(l.z, u.z, d.z))),
        h = Math.min(r - 1, f(Math.max(l.z, u.z, d.z)));
      for (let e = m; e <= h; e++) for (let r = s; r <= c; r++) {
        let a = (r + .5) * n - t,
          o = (e + .5) * n - t,
          s = ((u.z - d.z) * (a - d.x) + (d.x - u.x) * (o - d.z)) / i,
          c = ((d.z - l.z) * (a - d.x) + (l.x - d.x) * (o - d.z)) / i,
          f = 1 - s - c;
        s < -1e-4 || c < -1e-4 || f < -1e-4 || p(r, e, s * l.y + c * u.y + f * d.y);
      }
    }
    return {
      at(e, t) {
        let n = f(e),
          a = f(t);
        return n < 0 || a < 0 || n >= r || a >= r ? -1 : i[a * r + n];
      }
    };
  };
}
/* Recovered binding ll. Live dependencies: qc, L, cl, MathUtils. */
export function create_ll(__recoveredScope) {
  return function ll(e) {
    let t = (t, n) => e.at(t, n) > .67,
      n = 0,
      r = 0,
      i = 0;
    for (let e = -7.2 * .4; e <= __recoveredScope.qc * .4; e += .1) for (let a = -7.2 * .4; a <= __recoveredScope.qc * .4; a += .1) Math.hypot(e, a) < __recoveredScope.qc * .4 && !t(e, a) && (n += e, r += a, i++);
    let a = new __recoveredScope.L(n / i, r / i),
      o = __recoveredScope.qc * .38,
      s = [];
    for (let e = 0; e < __recoveredScope.cl; e++) {
      let n = e / __recoveredScope.cl * Math.PI * 2,
        r = Math.cos(n),
        i = Math.sin(n),
        c = .3;
      for (; c < o && !t(a.x + r * c, a.y + i * c);) c += .03;
      s.push(c);
    }
    let c = (e, t) => e[(t + __recoveredScope.cl) % __recoveredScope.cl],
      l = s.map((e, t) => [-2, -1, 0, 1, 2].map(e => c(s, t + e)).sort((e, t) => e - t)[2]),
      u = l.map((e, t) => (c(l, t - 1) + 2 * l[t] + c(l, t + 1)) / 4);
    return {
      center: a,
      r: u,
      radius(e) {
        let t = __recoveredScope.MathUtils.euclideanModulo(e, Math.PI * 2) / (Math.PI * 2) * __recoveredScope.cl,
          n = Math.floor(t);
        return __recoveredScope.MathUtils.lerp(c(u, n), c(u, n + 1), t - n);
      }
    };
  };
}
/* Recovered binding ul. Live dependencies: cl, $c, z, i. */
export function create_ul(__recoveredScope) {
  return function ul(e) {
    let t = [0, 0, 0],
      n = [e.r.reduce((e, t) => e + t, 0) / __recoveredScope.cl],
      r = [];
    t[0] = e.center.x;
    t[2] = e.center.y;
    for (let r = 1; r <= 14; r++) {
      let i = 1 - (1 - r / 14) ** 1.6;
      for (let r = 0; r < __recoveredScope.cl; r++) {
        let a = r / __recoveredScope.cl * Math.PI * 2,
          o = e.r[r] + __recoveredScope.$c;
        t.push(e.center.x + Math.cos(a) * o * i, 0, e.center.y + Math.sin(a) * o * i);
        n.push((1 - i) * o - __recoveredScope.$c);
      }
    }
    let a = (e, t) => e === 0 ? 0 : 1 + (e - 1) * __recoveredScope.cl + t % __recoveredScope.cl;
    for (let e = 0; e < __recoveredScope.cl; e++) r.push(0, a(1, e + 1), a(1, e));
    for (let e = 1; e < 14; e++) for (let t = 0; t < __recoveredScope.cl; t++) {
      let n = a(e, t),
        i = a(e, t + 1),
        o = a(e + 1, t),
        s = a(e + 1, t + 1);
      r.push(n, i, o, i, s, o);
    }
    let o = new __recoveredScope.z();
    return o.setAttribute(`position`, new __recoveredScope.i(t, 3)), o.setAttribute(`normal`, new __recoveredScope.i(t.map((e, t) => +(t % 3 == 1)), 3)), o.setAttribute(`shore`, new __recoveredScope.i(n, 1)), o.setIndex(r), o.computeBoundingSphere(), o;
  };
}
/* Recovered binding fl. Live dependencies: createToonMaterial, dl. */
export function create_fl(__recoveredScope) {
  return function fl(e) {
    let t = __recoveredScope.createToonMaterial({
        color: `#ffffff`
      }, {
        hatch: 0
      }),
      n = t.onBeforeCompile;
    return t.onBeforeCompile = (t, r) => {
      n(t, r);
      Object.assign(t.uniforms, e);
      t.vertexShader = t.vertexShader.replace(`#include <common>`, `#include <common>
attribute float shore;
varying float vShore;`).replace(`#include <begin_vertex>`, `#include <begin_vertex>
vShore = shore;`);
      t.fragmentShader = t.fragmentShader.replace(`#include <common>`, `#include <common>
        varying float vShore;
        uniform float uTime;
        uniform vec2 uFall, uDrift;
        uniform vec3 uSoak, uDeep, uPale, uFoam;
        ${__recoveredScope.dl}`).replace(`#include <color_fragment>`, `#include <color_fragment>
        {
          vec2 p = vTWorld.xz;
          vec2 d = p - uFall;
          float r = length(d);
          vec2 flow = d / max(r, 0.6) * 0.45 + uDrift;
          float ph = uTime * 0.16;
          float t0 = fract(ph), t1 = fract(ph + 0.5);
          vec2 q0 = (p - flow * t0 * 2.5) * 1.1, q1 = (p - flow * t1 * 2.5) * 1.1 + 17.3;
          float n0 = oNoise(q0 + oNoise(q0 * 0.5) * 1.6), n1 = oNoise(q1 + oNoise(q1 * 0.5) * 1.6);
          float n = mix(n0, n1, abs(1.0 - 2.0 * t0));
          vec3 col = mix(uDeep, uPale, smoothstep(0.6, 0.63, n));
          float foam = smoothstep(0.8, 0.83, n) * (1.0 - smoothstep(0.6, 2.4, r));
          // Rings from the landing, and round a soaking rider.
          float ring = smoothstep(0.82, 0.88, fract(r * 1.5 - uTime * 0.8)) * (1.0 - smoothstep(0.3, 2.0, r));
          float rs = length(p - uSoak.xy);
          float ring2 = smoothstep(0.84, 0.9, fract(rs * 2.2 - uTime * 0.45)) * (1.0 - smoothstep(0.25, 1.1, rs)) * step(0.32, rs) * uSoak.z;
          col = mix(col, uPale, max(ring, ring2));
          // White water where the stream lands, and foam along the shore.
          float wob = oNoise(p * 4.0 + uTime * 1.7) - 0.5;
          float splash = 1.0 - smoothstep(0.22, 0.3, r + wob * 0.18);
          float shoreF = 1.0 - smoothstep(0.05, 0.09, vShore + (oNoise(p * 2.6 + uTime * 0.25) - 0.5) * 0.12);
          col = mix(col, uFoam, max(max(foam, splash), shoreF));
          diffuseColor.rgb = col;
        }`);
    }, t.customProgramCacheKey = () => `onsen-water`, t;
  };
}
/* Recovered binding pl. Live dependencies: Ze, Je, Y, toonUniforms, dl. */
export function create_pl(__recoveredScope) {
  return function pl(e) {
    return new __recoveredScope.Ze({
      uniforms: {
        ...__recoveredScope.Je.clone(__recoveredScope.Y.fog),
        uTime: e.uTime,
        uPale: e.uPale,
        uFoam: e.uFoam,
        uLitTint: __recoveredScope.toonUniforms.uLitTint,
        uShadowTint: __recoveredScope.toonUniforms.uShadowTint
      },
      fog: true,
      vertexShader: `
      #include <fog_pars_vertex>
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
      fragmentShader: `
      #include <fog_pars_fragment>
      uniform float uTime;
      uniform vec3 uPale, uFoam, uLitTint, uShadowTint;
      varying vec2 vUv;
      ${__recoveredScope.dl}
      void main() {
        float n = oNoise(vec2(vUv.x * 14.0 - uTime * 5.0, vUv.y * 6.0));
        vec3 col = mix(uPale, uFoam, smoothstep(0.55, 0.6, n));
        // White where it pours off the lip and churns into the pool.
        col = mix(col, uFoam, smoothstep(0.85, 0.95, vUv.x));
        gl_FragColor = vec4(col * mix(uShadowTint, uLitTint, 0.8), 1.0);
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`
    });
  };
}
/* Recovered binding ml. Live dependencies: xl, Yc, z, i, je, Vector3, nl, Ze, Je, Y, toonUniforms, bl, c. */
export function create_ml(__recoveredScope) {
  return function ml(e, t, n, r) {
    let a = [],
      o = __recoveredScope.xl(20261020),
      l = t => {
        let n = o() * Math.PI * 2,
          r = Math.sqrt(o()) * e.radius(n) * t;
        return [e.center.x + Math.cos(n) * r, __recoveredScope.Yc, e.center.y + Math.sin(n) * r];
      };
    for (let e = 0; e < 28; e++) a.push([l(.85), 5 + o() * 3, 1.2 + o() * .8, 1 + o() * .8, .32]);
    for (let e = 0; e < 10; e++) a.push([[t.x + (o() - .5) * .5, __recoveredScope.Yc, t.y + (o() - .5) * .5], 3 + o() * 2, 1.6 + o(), .8 + o() * .6, .4]);
    for (let e = 0; e < 12; e++) {
      let e = l(.4);
      e[1] += 2.5 + o() * 2;
      a.push([e, 12 + o() * 6, 12 + o() * 4, 3 + o() * 2.5, .26]);
    }
    let u = [[-1, -1], [1, -1], [1, 1], [-1, 1]],
      d = [],
      f = [],
      p = [],
      m = [],
      h = [];
    a.forEach(([e, t, n, r, i], a) => {
      let s = o();
      for (let a of u) {
        d.push(...e);
        f.push(...a);
        p.push(s, t, n, r);
        m.push(i, o() * 10);
      }
      let c = a * 4;
      h.push(c, c + 1, c + 2, c, c + 2, c + 3);
    });
    let g = new __recoveredScope.z();
    g.setAttribute(`position`, new __recoveredScope.i(d, 3));
    g.setAttribute(`corner`, new __recoveredScope.i(f, 2));
    g.setAttribute(`seed`, new __recoveredScope.i(p, 4));
    g.setAttribute(`shape`, new __recoveredScope.i(m, 2));
    g.setIndex(h);
    g.boundingSphere = new __recoveredScope.je(new __recoveredScope.Vector3(0, 9, 0), 18);
    let _ = __recoveredScope.nl.clone().applyQuaternion(r.quaternion.clone().invert()),
      v = new __recoveredScope.Ze({
        uniforms: {
          ...__recoveredScope.Je.clone(__recoveredScope.Y.fog),
          uTime: n.uTime,
          uWind: {
            value: _
          },
          uShadowTint: __recoveredScope.toonUniforms.uShadowTint
        },
        fog: true,
        transparent: true,
        depthWrite: false,
        vertexShader: `
      #include <fog_pars_vertex>
      attribute vec2 corner;
      attribute vec4 seed; // phase, life (s), rise (m), size (m)
      attribute vec2 shape; // opacity, a random offset for the blob's outline
      uniform float uTime;
      uniform vec3 uWind;
      varying vec2 vCorner;
      varying float vAlpha, vKey, vLife;
      void main() {
        float life = fract(uTime / seed.y + seed.x);
        vec3 c = position;
        c.y += seed.z * (1.0 - (1.0 - life) * (1.0 - life)); // quick off the water, slowing as it goes
        c += uWind * life * seed.y;
        c.x += sin(uTime * 0.7 + shape.y) * 0.15 * life;
        float size = seed.w * (0.35 + 0.65 * sqrt(life));
        vec4 mvPosition = modelViewMatrix * vec4(c, 1.0);
        mvPosition.xy += corner * size * 0.5;
        gl_Position = projectionMatrix * mvPosition;
        vCorner = corner;
        // Puffs thin out close to the camera, so steam never whites out the view from the water.
        vAlpha = shape.x * smoothstep(0.0, 0.12, life) * (1.0 - smoothstep(0.45, 1.0, life)) * smoothstep(1.5, 5.0, -mvPosition.z);
        vKey = shape.y;
        vLife = life;
        #include <fog_vertex>
      }`,
        fragmentShader: __recoveredScope.bl
      }),
      y = new __recoveredScope.c(g, v);
    return y.name = `Steam`, y.renderOrder = 2, y;
  };
}
/* Recovered binding yl. Live dependencies: xl, z, i, nl, Ze, Je, Y, gl, Vector3, toonUniforms, bl, c. */
export function create_yl(__recoveredScope) {
  return function yl(e) {
    let t = __recoveredScope.xl(20261021),
      n = [[-1, -1], [1, -1], [1, 1], [-1, 1]],
      r = [],
      a = [],
      o = [],
      l = [],
      u = [];
    for (let e = 0; e < 26; e++) {
      let i = t() * Math.PI * 2,
        s = .2 + t() * .45,
        c = [Math.cos(i) * s, -.35 + t() * 1.4, Math.sin(i) * s],
        d = [e < 18 ? 0 : t() * .25, .8 + t() * .4, .4 + t() * .6, 1.3 + t() * .8],
        f = t() * 10;
      for (let e of n) {
        r.push(...c);
        a.push(...e);
        o.push(...d);
        l.push(f);
      }
      let p = e * 4;
      u.push(p, p + 1, p + 2, p, p + 2, p + 3);
    }
    let d = new __recoveredScope.z();
    d.setAttribute(`position`, new __recoveredScope.i(r, 3));
    d.setAttribute(`corner`, new __recoveredScope.i(a, 2));
    d.setAttribute(`seed`, new __recoveredScope.i(o, 4));
    d.setAttribute(`key`, new __recoveredScope.i(l, 1));
    d.setIndex(u);
    let f = __recoveredScope.nl.clone().applyQuaternion(e.quaternion.clone().invert()),
      p = new __recoveredScope.Ze({
        uniforms: {
          ...__recoveredScope.Je.clone(__recoveredScope.Y.fog),
          uAge: {
            value: __recoveredScope.gl
          },
          uOrigin: {
            value: new __recoveredScope.Vector3()
          },
          uWind: {
            value: f
          },
          uShadowTint: __recoveredScope.toonUniforms.uShadowTint
        },
        fog: true,
        transparent: true,
        depthWrite: false,
        vertexShader: `
      #include <fog_pars_vertex>
      attribute vec2 corner;
      attribute vec4 seed; // delay (s), life (s), rise (m), size (m)
      attribute float key; // a random offset for the blob's outline
      uniform float uAge;
      uniform vec3 uOrigin, uWind;
      varying vec2 vCorner;
      varying float vAlpha, vKey, vLife;
      void main() {
        float t = uAge - seed.x;
        float life = clamp(t / seed.y, 0.0, 1.0);
        vec3 c = uOrigin + position * (1.0 + 0.5 * life); // spreading as it goes
        c.y += seed.z * (1.0 - (1.0 - life) * (1.0 - life));
        c += uWind * max(t, 0.0);
        float size = seed.w * (0.6 + 0.4 * sqrt(life));
        vec4 mvPosition = modelViewMatrix * vec4(c, 1.0);
        mvPosition.xy += corner * size * 0.5;
        gl_Position = projectionMatrix * mvPosition;
        vCorner = corner;
        // Full almost at once, so it hides the change, and thinning soon after;
        // thinner still near the camera, so it doesn't white out the view from the water.
        vAlpha = step(0.0, t) * smoothstep(0.0, 0.06, life) * (1.0 - smoothstep(0.35, 1.0, life)) * smoothstep(1.0, 2.4, -mvPosition.z);
        vKey = key;
        vLife = life;
        #include <fog_vertex>
      }`,
        fragmentShader: __recoveredScope.bl
      }),
      m = new __recoveredScope.c(d, p);
    return m.name = `Puff`, m.renderOrder = 2, m.frustumCulled = false, m.visible = false, m;
  };
}
/* Recovered binding xl. Live dependencies: . */
export function create_xl(__recoveredScope) {
  return function xl(e) {
    return () => {
      e |= 0;
      e = e + 1831565813 | 0;
      let t = Math.imul(e ^ e >>> 15, 1 | e);
      return t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t, ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  };
}
