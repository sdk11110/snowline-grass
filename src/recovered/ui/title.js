/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding gp. Live dependencies: . */
export function create_gp(__recoveredScope) {
  return {
    H: [[4.35, 0, 5.65, 3.9], [4.35, 6.1, 5.65, 10]],
    E: [[3.3, 2.55, 10, 3.85], [3.3, 6.15, 10, 7.45]],
    M: [[2.8, 3.3, 4.1, 10], [5.9, 3.3, 7.2, 10]],
    U: [[4.35, 0, 5.65, 6.9]],
    S: [[3, 2.55, 10, 3.85], [0, 6.15, 7, 7.45]],
    K: [[3, 0, 4.3, 3.9], [3, 6.1, 4.3, 10], [6.3, 4.35, 10, 5.65]],
    I: [[0, 2.6, 3.4, 7.4], [6.6, 2.6, 10, 7.4]]
  };
}
/* Recovered binding wp. Live dependencies: Cp, et. */
export function create_wp(__recoveredScope) {
  return function wp(e, t) {
    let n = e.attributes.normal,
      r = new Float32Array(n.count * 3);
    for (let e = 0; e < n.count; e++) {
      let i = n.getX(e),
        a = n.getY(e),
        o = n.getZ(e),
        s = o > .5 ? t ? __recoveredScope.Cp.slot : __recoveredScope.Cp.cream : o < -.5 ? __recoveredScope.Cp.back : a > .5 ? __recoveredScope.Cp.top : a < -.5 ? __recoveredScope.Cp.bottom : i < 0 ? __recoveredScope.Cp.left : __recoveredScope.Cp.right;
      r.set([s.r, s.g, s.b], e * 3);
    }
    return e.setAttribute(`color`, new __recoveredScope.et(r, 3)), e;
  };
}
/* Recovered binding Tp. Live dependencies: vp, wp, W, bp, yp, mt. */
export function create_Tp(__recoveredScope) {
  return function Tp(e) {
    let t = (t, n) => [...new Set([0, __recoveredScope.vp, ...e.flatMap(e => [e[t], e[n]])])].sort((e, t) => e - t),
      n = t(0, 2),
      r = t(1, 3),
      i = [__recoveredScope.wp(new __recoveredScope.W(__recoveredScope.vp, __recoveredScope.vp, __recoveredScope.bp).translate(0, 0, -7.5 / 2), true)];
    for (let t = 0; t < n.length - 1; t++) for (let a = 0; a < r.length - 1; a++) {
      let o = (n[t] + n[t + 1]) / 2,
        s = (r[a] + r[a + 1]) / 2;
      if (e.some(([e, t, n, r]) => o > e && o < n && s > t && s < r)) continue;
      let c = new __recoveredScope.W(n[t + 1] - n[t], r[a + 1] - r[a], __recoveredScope.yp);
      i.push(__recoveredScope.wp(c.translate(o - __recoveredScope.vp / 2, __recoveredScope.vp / 2 - s, __recoveredScope.yp / 2), false));
    }
    return __recoveredScope.mt(i);
  };
}
/* Recovered binding createTitleLogo. Live dependencies: g, ot, fp, _p, c, Tp, gp, m, Vector3, MathUtils, xp, Sp. */
export function create_createTitleLogo(__recoveredScope) {
  return function createTitleLogo() {
    let e = new __recoveredScope.g(),
      t = new __recoveredScope.g();
    e.add(t);
    let n = new __recoveredScope.ot({
        vertexColors: true,
        fog: false
      }),
      r = __recoveredScope.fp(3),
      i = [];
    __recoveredScope._p.forEach((e, a) => [...e].forEach((o, l) => {
      let u = new __recoveredScope.c(__recoveredScope.Tp(__recoveredScope.gp[o]), n);
      u.position.set((l - (e.length - 1) / 2) * 11.3, (.5 - a) * 11.3, 0);
      u.userData = {
        home: u.position.clone(),
        tilt: new __recoveredScope.m((r() - .5) * .1, (r() - .5) * .14, (r() - .5) * .08),
        phase: r() * Math.PI * 2,
        v: new __recoveredScope.Vector3(),
        w: new __recoveredScope.Vector3(),
        delay: 0
      };
      t.add(u);
      i.push(u);
    }));
    let a = -1;
    return {
      group: e,
      update(n, r, o, s, c) {
        if (!e.visible) return;
        let l = 1 - Math.exp(-n * 3);
        if (a < 0) {
          let n = 2 * s * Math.tan(__recoveredScope.MathUtils.degToRad(o.fov) / 2),
            a = Math.min(.56 * n * o.aspect / __recoveredScope.xp, .34 * n / __recoveredScope.Sp);
          e.position.set(0, n * .08, -s);
          e.scale.setScalar(a);
          t.rotation.x += (.22 - c.y * .14 - t.rotation.x) * l;
          t.rotation.y += (c.x * .28 - t.rotation.y) * l;
          for (let e of i) {
            let {
              home: t,
              tilt: n,
              phase: i
            } = e.userData;
            e.position.y = t.y + Math.sin(r * 1.1 + i) * .25;
            e.rotation.set(n.x + Math.sin(r * .7 + i) * .025, n.y, n.z);
          }
        } else {
          a += n;
          for (let e of i) {
            let t = e.userData;
            a < t.delay || (t.v.y -= 70 * n, e.position.addScaledVector(t.v, n), e.rotation.x += t.w.x * n, e.rotation.y += t.w.y * n, e.rotation.z += t.w.z * n);
          }
          a > 2.4 && (e.visible = false);
        }
      },
      leave() {
        a >= 0 || (a = 0, i.forEach((e, t) => {
          let n = e.userData;
          n.delay = t * .05 + r() * .05;
          n.v.set(n.home.x * 1.6 + (r() - .5) * 14, 22 + n.home.y * 1.5 + r() * 14, 4 + r() * 8);
          n.w.set((r() - .5) * 7, (r() - .5) * 7, (r() - .5) * 5);
        }));
      }
    };
  };
}
/* Recovered binding createTitleSnow. Live dependencies: fp, z, et, Ze, K, fe, MathUtils. */
export function create_createTitleSnow(__recoveredScope) {
  return function createTitleSnow(e = 150) {
    let t = __recoveredScope.fp(41),
      n = [],
      r = new Float32Array(e * 3),
      i = new Float32Array(e);
    for (let r = 0; r < e; r++) {
      n.push({
        u: t() * 2.3 - 1.15,
        v: t() * 2.3 - 1.15,
        z: .2 + t() * 1.1,
        fall: .025 + t() * .035,
        phase: t() * 6.3
      });
      i[r] = 2.5 + t() * t() * 7;
    }
    let a = new __recoveredScope.z();
    a.setAttribute(`position`, new __recoveredScope.et(r, 3));
    a.setAttribute(`aSize`, new __recoveredScope.et(i, 1));
    let o = new __recoveredScope.Ze({
        uniforms: {
          uScale: {
            value: 1
          },
          uOpacity: {
            value: 1
          },
          uColor: {
            value: new __recoveredScope.K(`#f2faf6`)
          }
        },
        vertexShader: `
      attribute float aSize;
      uniform float uScale;
      void main() {
        gl_PointSize = aSize * uScale;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
        fragmentShader: `
      uniform vec3 uColor;
      uniform float uOpacity;
      void main() {
        float a = 1.0 - smoothstep(0.3, 0.5, length(gl_PointCoord - 0.5));
        if (a <= 0.0) discard;
        gl_FragColor = vec4(uColor, a * uOpacity);
      }`,
        transparent: true,
        depthWrite: false
      }),
      s = new __recoveredScope.fe(a, o);
    return s.frustumCulled = false, {
      points: s,
      set opacity(e) {
        o.uniforms.uOpacity.value = e;
        s.visible = e > 0;
      },
      update(e, i, c, l, u) {
        if (!s.visible) return;
        let d = Math.tan(__recoveredScope.MathUtils.degToRad(c.fov) / 2),
          f = d * c.aspect;
        n.forEach((n, a) => {
          n.v -= n.fall * e;
          n.u += Math.sin(i * .5 + n.phase) * .012 * e;
          n.v < -1.15 && (n.v = 1.15, n.u = t() * 2.3 - 1.15);
          let o = n.z * l;
          r.set([n.u * f * o, n.v * d * o, -o], a * 3);
        });
        a.attributes.position.needsUpdate = true;
        o.uniforms.uScale.value = u;
      }
    };
  };
}
/* Recovered binding createTransitionWipe. Live dependencies: MathUtils. */
export function create_createTransitionWipe(__recoveredScope) {
  return function createTransitionWipe(e) {
    let t = window.matchMedia(`(prefers-reduced-motion: reduce)`),
      n = [];
    for (let t = 0; t < 9; t++) {
      let r = document.createElement(`i`);
      e.appendChild(r);
      n.push({
        el: r,
        a: t / 9 * Math.PI * 2 + Math.sin(t * 7.1) * .4,
        r: .55 + t * 37 % 10 / 30,
        s: .75 + t * 53 % 10 / 25
      });
    }
    return r => {
      if (e.style.visibility = r > 0 ? `visible` : `hidden`, r <= 0) return;
      if (t.matches) {
        for (let e of n) e.el.style.display = `none`;
        e.style.opacity = r;
        e.style.backgroundColor = `rgb(251, 250, 245)`;
        return;
      }
      let i = Math.max(window.innerWidth, window.innerHeight);
      for (let e of n) {
        e.el.style.display = ``;
        let t = (1 - r) * e.r * i;
        e.el.style.transform = `translate(${Math.cos(e.a) * t}px, ${Math.sin(e.a) * t}px) scale(${e.s * (.5 + r * 1.1)})`;
      }
      e.style.opacity = Math.min(1, r * 2.5);
      e.style.backgroundColor = `rgba(251, 250, 245, ${__recoveredScope.MathUtils.smoothstep(r, .7, 1)})`;
    };
  };
}
