/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding OutlinePostProcessor. Live dependencies: C, u, ee, pe, re, Ze, tp, np, L, K, c, me, w, k, ep. */
export function create_OutlinePostProcessor(__recoveredScope) {
  return class {
    constructor(e, {
      depthScale: t = 1,
      lineWidth: n = 1,
      lineOpacity: r = .72
    } = {}) {
      this.renderer = e;
      let i = {
        type: __recoveredScope.C
      };
      this.colorRT = new __recoveredScope.u(1, 1, {
        ...i,
        samples: 4
      });
      this.colorRT.depthTexture = new __recoveredScope.ee(1, 1, __recoveredScope.pe);
      this.normalRT = new __recoveredScope.u(1, 1, {
        ...i,
        samples: 4
      });
      this.normalMat = new __recoveredScope.re({
        side: 2
      });
      this.material = new __recoveredScope.Ze({
        vertexShader: __recoveredScope.tp,
        fragmentShader: __recoveredScope.np,
        uniforms: {
          tColor: {
            value: this.colorRT.texture
          },
          tDepth: {
            value: this.colorRT.depthTexture
          },
          tNormal: {
            value: this.normalRT.texture
          },
          uRes: {
            value: new __recoveredScope.L(1, 1)
          },
          uNear: {
            value: .1
          },
          uFar: {
            value: 1e3
          },
          uPixelRatio: {
            value: 1
          },
          uDepthScale: {
            value: t
          },
          uLineWidth: {
            value: n
          },
          uLineOpacity: {
            value: r
          },
          uNormalStep: {
            value: 1
          },
          uInk: {
            value: new __recoveredScope.K(`#1f2a33`)
          },
          uFogInk: {
            value: new __recoveredScope.K(`#5d8f97`)
          },
          uFogRange: {
            value: new __recoveredScope.L(800, 14e3)
          }
        },
        depthTest: false,
        depthWrite: false
      });
      this.quad = new __recoveredScope.c(new __recoveredScope.me(2, 2), this.material);
      this.quad.frustumCulled = false;
      this.quadScene = new __recoveredScope.w();
      this.quadScene.add(this.quad);
      this.quadCam = new __recoveredScope.k(-1, 1, 1, -1, 0, 1);
      this.view = [1, 1, 1];
      this.quality = {
        msaa: 4,
        outline: `high`
      };
    }
    setSize(e, t, n) {
      this.view = [e, t, n];
      let r = Math.floor(e * n),
        i = Math.floor(t * n);
      this.colorRT.setSize(r, i);
      let a = this.quality.outline === `low` ? .5 : 1;
      this.normalRT.setSize(Math.max(1, Math.round(r * a)), Math.max(1, Math.round(i * a)));
      this.material.uniforms.uRes.value.set(r, i);
      this.material.uniforms.uPixelRatio.value = n;
      this.material.uniforms.uNormalStep.value = 1 / a;
    }
    setQuality({
      msaa: e = 4,
      outline: t = `high`
    } = {}) {
      this.quality = {
        msaa: e,
        outline: t
      };
      let n = t === `high` ? e : 0;
      for (let [t, r] of [[this.colorRT, e], [this.normalRT, n]]) t.samples !== r && (t.samples = r, t.dispose());
      this.setSize(...this.view);
    }
    render(e, t, n, r = []) {
      let i = this.renderer;
      i.setRenderTarget(this.colorRT);
      i.render(e, t);
      let a = e.background,
        o = e.fog;
      e.background = null;
      e.fog = null;
      e.overrideMaterial = this.normalMat;
      let s = new Map(r.map(e => [e, e.visible]));
      e.traverse(e => {
        (e.isSprite || e.isLine || e.isPoints || e.isMesh && !e.geometry.attributes.normal) && (s.has(e) || s.set(e, e.visible));
      });
      for (let e of s.keys()) e.visible = false;
      let c = i.getClearColor(new __recoveredScope.K()),
        l = i.getClearAlpha();
      i.setClearColor(0, 0);
      i.setRenderTarget(this.normalRT);
      i.clear();
      let u = i.shadowMap.autoUpdate;
      i.shadowMap.autoUpdate = false;
      let d = t.far,
        f = __recoveredScope.ep / this.material.uniforms.uDepthScale.value;
      this.quality.outline !== `high` && t.isPerspectiveCamera && f < d && (t.far = f, t.updateProjectionMatrix());
      i.render(e, t);
      t.far !== d && (t.far = d, t.updateProjectionMatrix());
      i.shadowMap.autoUpdate = u;
      for (let [e, t] of s) e.visible = t;
      i.setClearColor(c, l);
      e.overrideMaterial = null;
      e.background = a;
      e.fog = o;
      let p = this.material.uniforms;
      p.uNear.value = t.near;
      p.uFar.value = t.far;
      i.setRenderTarget(null);
      i.render(this.quadScene, this.quadCam);
    }
  };
}
