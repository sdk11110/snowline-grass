/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding At. Live dependencies: kt, We, et, Vector3, Ot, at, Ze, Be, MathUtils. */
export function create_At(__recoveredScope) {
  return class {
    constructor() {
      let e = new Float32Array(__recoveredScope.kt * 4),
        t = 7,
        n = () => (t = t * 16807 % 2147483647) / 2147483647;
      for (let t = 0; t < __recoveredScope.kt * 4; t++) e[t] = n();
      let r = new __recoveredScope.We();
      r.setAttribute(`position`, new __recoveredScope.et(new Float32Array(__recoveredScope.kt * 3), 3));
      r.setAttribute(`aSeed`, new __recoveredScope.et(e, 4));
      this.uniforms = {
        uCam: {
          value: new __recoveredScope.Vector3()
        },
        uBox: {
          value: __recoveredScope.Ot
        },
        uTime: {
          value: 0
        },
        uFall: {
          value: 0
        },
        uDrift: {
          value: new __recoveredScope.Vector3()
        },
        uDensity: {
          value: 0
        },
        uPx: {
          value: 800
        },
        uColor: {
          value: new __recoveredScope.at(`#ffffff`)
        }
      };
      this.material = new __recoveredScope.Ze({
        uniforms: this.uniforms,
        transparent: true,
        depthWrite: false,
        vertexShader: `
        attribute vec4 aSeed;
        uniform vec3 uCam, uBox, uDrift;
        uniform float uTime, uFall, uDensity, uPx;
        varying float vAlpha, vRim;
        void main() {
          if (aSeed.w > uDensity) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; vAlpha = vRim = 0.0; return; }
          float r = fract(aSeed.w * 97.13 + aSeed.x * 13.7);
          vec3 p = aSeed.xyz * uBox;
          p.y -= uFall * (0.7 + 0.6 * r);
          p += uDrift * (0.8 + 0.4 * r);
          p.x += sin(uTime * (0.9 + r) + r * 40.0) * 0.5;
          p.z += cos(uTime * (0.7 + r) + r * 31.0) * 0.5;
          vec3 o = uCam - uBox * 0.5;
          p = o + mod(p - o, uBox);
          vec4 mv = viewMatrix * vec4(p, 1.0);
          float dist = max(-mv.z, 0.01);
          // Faded out toward the box's walls, so nothing pops as it wraps, and
          // right in front of the lens.
          vec3 rel = abs(p - uCam) / (uBox * 0.5);
          float edge = max(rel.x, max(rel.y, rel.z));
          vAlpha = (1.0 - smoothstep(0.7, 1.0, edge)) * smoothstep(0.4, 1.5, dist);
          float size = mix(0.06, 0.15, fract(r * 13.1)) * uPx / dist;
          vRim = smoothstep(4.0, 9.0, size);
          // Too small to draw whole: drawn at a pixel and a half, fainter.
          vAlpha *= clamp(size / 1.5, 0.0, 1.0);
          gl_PointSize = clamp(size, 1.5, 16.0);
          gl_Position = projectionMatrix * mv;
        }`,
        fragmentShader: `
        uniform vec3 uColor;
        varying float vAlpha, vRim;
        void main() {
          float r = length(gl_PointCoord - 0.5);
          float a = 1.0 - smoothstep(0.4, 0.5, r);
          if (a * vAlpha <= 0.01) discard;
          // The nearer flakes get a grey edge, to read against a white sky.
          float rim = smoothstep(0.25, 0.37, r) * vRim;
          gl_FragColor = vec4(uColor * (1.0 - rim * 0.2), a * vAlpha);
          #include <colorspace_fragment>
        }`
      });
      this.points = new __recoveredScope.Be(r, this.material);
      this.points.frustumCulled = false;
      this.points.renderOrder = 2;
      this.points.visible = false;
    }
    set density(e) {
      this.uniforms.uDensity.value = e;
      this.points.visible = e > .002;
    }
    update(e, t, n, r, {
      wind: i,
      fall: a
    }) {
      let o = this.uniforms;
      o.uCam.value.copy(n.position);
      o.uTime.value = t;
      o.uFall.value = (o.uFall.value + a * e) % (__recoveredScope.Ot.y * 1e3);
      o.uDrift.value.x = (o.uDrift.value.x + i.x * e) % (__recoveredScope.Ot.x * 1e3);
      o.uDrift.value.z = (o.uDrift.value.z + i.y * e) % (__recoveredScope.Ot.z * 1e3);
      o.uPx.value = r / (2 * Math.tan(__recoveredScope.MathUtils.degToRad(n.fov) / 2));
    }
  };
}
/* Recovered binding Ft. Live dependencies: Vector3, Nt, Mt. */
export function create_Ft(__recoveredScope) {
  return function Ft(e, t = new __recoveredScope.Vector3(), n = __recoveredScope.Nt) {
    let r = (e - 12) / 24 * Math.PI * 2,
      i = -Math.cos(n) * Math.sin(r),
      a = Math.cos(__recoveredScope.Mt) * Math.sin(n) - Math.sin(__recoveredScope.Mt) * Math.cos(n) * Math.cos(r),
      o = Math.sin(__recoveredScope.Mt) * Math.sin(n) + Math.cos(__recoveredScope.Mt) * Math.cos(n) * Math.cos(r);
    return t.set(i, o, -a);
  };
}
/* Recovered binding weatherPresets. Live dependencies: . */
export function create_weatherPresets(__recoveredScope) {
  return {
    clear: {
      label: `Clear`,
      cover: 0,
      overcast: 0,
      snow: 0,
      wind: .5,
      fog: [900, 17e3]
    },
    cloudy: {
      label: `Cloudy`,
      cover: .7,
      overcast: .45,
      snow: 0,
      wind: 2,
      fog: [700, 9e3]
    },
    snow: {
      label: `Snowing`,
      cover: .95,
      overcast: .8,
      snow: .3,
      wind: 1.5,
      fog: [160, 2400]
    },
    blizzard: {
      label: `Blizzard`,
      cover: 1,
      overcast: 1,
      snow: 1,
      wind: 9,
      fog: [25, 420]
    }
  };
}
/* Recovered binding Vt. Live dependencies: . */
export function create_Vt(__recoveredScope) {
  return {
    clear: [`clear`, `cloudy`],
    cloudy: [`clear`, `snow`, `cloudy`],
    snow: [`cloudy`, `blizzard`, `snow`],
    blizzard: [`snow`]
  };
}
/* Recovered binding Wt. Live dependencies: . */
export function create_Wt(__recoveredScope) {
  return function Wt(e) {
    return e < -9 ? 6 : e > -6 && e < 8 ? .5 : 1;
  };
}
/* Recovered binding Jt. Live dependencies: . */
export function create_Jt(__recoveredScope) {
  return e => e.r * .299 + e.g * .587 + e.b * .114;
}
/* Recovered binding WeatherController. Live dependencies: Vector3, At, weatherPresets, zt, at, Ft, jt, Wt, Nt, Vt, Rt, MathUtils, Jt, Kt, Ut, Gt, qt, Ht. */
export function create_WeatherController(__recoveredScope) {
  return class {
    constructor({
      scene: scene,
      sky: sky,
      sun: sun,
      post: postProcessor,
      toon: toonUniforms,
      water: water
    }) {
      Object.assign(this, {
        scene: scene,
        sky: sky,
        sun: sun,
        post: postProcessor,
        toon: toonUniforms,
        water: water
      });
      this.hour = 10.5;
      this.running = true;
      this.kind = `clear`;
      this.title = false;
      this.aurora = false;
      this.auroraNow = 0;
      this.sunDir = new __recoveredScope.Vector3();
      this.moonDir = new __recoveredScope.Vector3();
      this.lightDir = new __recoveredScope.Vector3();
      this.altitude = 0;
      this.snowfall = new __recoveredScope.At();
      scene.add(this.snowfall.points);
      this.now = {
        ...__recoveredScope.weatherPresets.clear,
        fog: [...__recoveredScope.weatherPresets.clear.fog]
      };
      this.current = `clear`;
      this.changeIn = 0;
      this.c = Object.fromEntries(__recoveredScope.zt.map(e => [e, new __recoveredScope.at()]));
      this.haze = new __recoveredScope.at();
      this.update(0);
      this.settle();
    }
    set(weatherKind) {
      this.kind = weatherKind;
      weatherKind === `changeable` ? this.changeIn = 0 : this.current = weatherKind;
    }
    settle() {
      let e = __recoveredScope.weatherPresets[this.current];
      Object.assign(this.now, e, {
        fog: [...e.fog]
      });
      this.auroraNow = +!!this.aurora;
    }
    get phase() {
      let e = this.altitude,
        t = this.hour < 12;
      return e < -12 ? `Night` : e < -.83 ? t ? `Dawn` : `Dusk` : e < 6 ? t ? `Sunrise` : `Sunset` : this.hour < 11 ? `Morning` : this.hour < 13.5 ? `Midday` : `Afternoon`;
    }
    /* 真实天气更新：时间、太阳/月亮、云雪、雾和水面颜色共用同一状态；由UI通过原Weather实例修改。 */
    update(deltaTime, {
      time: elapsedTime = 0,
      camera: camera,
      viewHeight: viewHeight,
      focus: focus
    } = {}) {
      __recoveredScope.Ft(this.hour, this.sunDir);
      this.altitude = Math.asin(this.sunDir.y) / __recoveredScope.jt;
      this.running && (this.hour = (this.hour + deltaTime * __recoveredScope.Wt(this.altitude) / 60) % 24);
      __recoveredScope.Ft(this.hour + 12, this.moonDir, -__recoveredScope.Nt);
      let a = this.altitude;
      if (this.kind === `changeable` && (this.changeIn -= deltaTime) <= 0) {
        let e = __recoveredScope.Vt[this.current];
        this.current = e[Math.floor(Math.random() * e.length)];
        this.changeIn = 120 + Math.random() * 120;
      }
      let o = __recoveredScope.weatherPresets[this.current],
        s = this.now,
        c = 1 - Math.exp(-deltaTime / 5);
      for (let e of [`cover`, `overcast`, `snow`, `wind`]) s[e] += (o[e] - s[e]) * c;
      for (let e = 0; e < 2; e++) s.fog[e] = Math.exp(Math.log(s.fog[e]) + (Math.log(o.fog[e]) - Math.log(s.fog[e])) * c);
      this.auroraNow += (+!!this.aurora - this.auroraNow) * c;
      let l = 0;
      for (; l < __recoveredScope.Rt.length - 2 && a > __recoveredScope.Rt[l + 1].alt;) l++;
      let u = __recoveredScope.Rt[l],
        d = __recoveredScope.Rt[l + 1],
        f = __recoveredScope.MathUtils.smoothstep(a, u.alt, d.alt),
        p = this.c;
      for (let e of __recoveredScope.zt) p[e].lerpColors(u[e], d[e], f);
      let m = __recoveredScope.MathUtils.lerp(u.glowAmount, d.glowAmount, f),
        h = __recoveredScope.MathUtils.lerp(u.night, d.night, f),
        g = s.overcast * .75;
      for (let e of [`zenith`, `horizon`, `cloudLight`, `cloudDark`, `lit`, `shadow`, `fogInk`]) {
        let t = __recoveredScope.Jt(p[e]);
        p[e].lerp(__recoveredScope.Kt.setRGB(t * .97, t, t * 1.04), g);
      }
      let _ = this.auroraNow * __recoveredScope.MathUtils.smoothstep(h, .4, 1) * (1 - s.cover);
      for (let e of [`lit`, `shadow`, `horizon`]) p[e].lerp(__recoveredScope.Ut, _ * (e === `horizon` ? .08 : .14));
      this.haze.copy(p.horizon).lerp(__recoveredScope.Gt.setRGB(1, 1, 1), .15 + s.snow * .25);
      s.snow > 0 && p.zenith.lerp(this.haze, s.snow * .5);
      let v = a > -4;
      this.lightDir.copy(v ? this.sunDir : this.moonDir);
      this.lightDir.y = Math.max(this.lightDir.y, .06);
      this.lightDir.normalize();
      let y = (v ? __recoveredScope.MathUtils.smoothstep(a, -4, 0) : __recoveredScope.MathUtils.smoothstep(-a, 4, 9) * .7) * (1 - s.overcast * .85);
      this.toon.uShadowTint.value.copy(p.shadow);
      this.toon.uLitTint.value.copy(p.shadow).lerp(p.lit, y);
      let b = this.sky.material.uniforms;
      b.uZenith.value.copy(p.zenith);
      b.uHorizon.value.copy(p.horizon);
      b.uCloudLight.value.copy(p.cloudLight);
      b.uCloudDark.value.copy(p.cloudDark);
      b.uGlow.value.copy(p.glow);
      b.uGlowAmount.value = m * (1 - s.overcast * .8);
      b.uSunColor.value.copy(p.sun);
      b.uSunDir.value.copy(this.sunDir);
      b.uSun.value = __recoveredScope.MathUtils.smoothstep(this.sunDir.y, -.04, 0) * (1 - s.cover);
      b.uMoonDir.value.copy(this.moonDir);
      b.uNight.value = h * (1 - s.cover);
      b.uAurora.value = _;
      b.uCover.value = s.cover;
      let x = this.scene.fog;
      x.color.copy(this.haze);
      x.near = this.title ? 1e7 : s.fog[0];
      x.far = this.title ? 2e7 : s.fog[1];
      this.scene.background?.isColor && this.scene.background.copy(p.horizon);
      let S = this.post.material.uniforms;
      S.uFogInk.value.copy(p.fogInk).lerp(this.haze, s.overcast * .6);
      S.uFogRange.value.set(x.near * .9, x.far * .82);
      this.water?.setSky(__recoveredScope.Gt.copy(p.horizon).lerp(p.zenith, .3));
      focus && (this.sun.target.position.copy(focus), this.sun.position.copy(focus).addScaledVector(this.lightDir, 250));
      let C = this.snowfall;
      C.density = this.title ? 0 : s.snow;
      camera && (C.uniforms.uColor.value.copy(this.toon.uLitTint.value).lerp(__recoveredScope.Gt.setRGB(1, 1, 1), .65), __recoveredScope.qt.copy(__recoveredScope.Ht).multiplyScalar(s.wind), C.update(deltaTime, elapsedTime, camera, viewHeight, {
        wind: __recoveredScope.qt,
        fall: 1.1 + s.wind * .08
      }));
    }
  };
}
