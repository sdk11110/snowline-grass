/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Ji. Live dependencies: . */
export function create_Ji(__recoveredScope) {
  return {
    low: {
      fps: 30,
      scale: .75,
      msaa: 0,
      shadowSize: 512,
      shadows: true,
      outline: `low`
    },
    medium: {
      fps: 60,
      scale: 1,
      msaa: 2,
      shadowSize: 1024,
      shadows: true,
      outline: `medium`
    },
    high: {
      fps: 0,
      scale: 1.5,
      msaa: 4,
      shadowSize: 2048,
      shadows: true,
      outline: `high`
    }
  };
}
/* Recovered binding graphicsSettingOptions. Live dependencies: . */
export function create_graphicsSettingOptions(__recoveredScope) {
  return {
    fps: [30, 60, 120, 0],
    scale: [.75, 1, 1.25, 1.5],
    msaa: [0, 2, 4],
    shadowSize: [512, 1024, 2048],
    outline: [`low`, `medium`, `high`]
  };
}
/* Recovered binding Qi. Live dependencies: isMobileModelProfile, Ji, Yi. */
export function create_Qi(__recoveredScope) {
  return function Qi() {
    return __recoveredScope.isMobileModelProfile ? {
      ...(navigator.deviceMemory && navigator.deviceMemory <= 3 || navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4 ? __recoveredScope.Ji.low : __recoveredScope.Yi)
    } : {
      ...__recoveredScope.Ji.high
    };
  };
}
/* Recovered binding $i. Live dependencies: Ji, graphicsSettingOptions. */
export function create_Dollari(__recoveredScope) {
  return function $i(e = {}) {
    let t = {
      ...__recoveredScope.Ji.high
    };
    for (let [n, r] of Object.entries(__recoveredScope.graphicsSettingOptions)) r.includes(e[n]) && (t[n] = e[n]);
    return typeof e.shadows == `boolean` && (t.shadows = e.shadows), t;
  };
}
/* Recovered binding ea. Live dependencies: qi, graphicsModes, $i, Qi. */
export function create_ea(__recoveredScope) {
  return function ea() {
    let e = {};
    try {
      e = JSON.parse(localStorage.getItem(__recoveredScope.qi)) ?? {};
    } catch {}
    return {
      mode: __recoveredScope.graphicsModes.includes(e.mode) ? e.mode : `auto`,
      custom: __recoveredScope.$i(e.custom ?? __recoveredScope.Qi())
    };
  };
}
/* Recovered binding createGraphicsController. Live dependencies: ea, Qi, Ji, qi, graphicsModes, $i. */
export function create_createGraphicsController(__recoveredScope) {
  return function createGraphicsController({
    renderer: e,
    post: t,
    sun: n,
    resize: r,
    shadowScale: i = 1
  }) {
    let a = __recoveredScope.ea(),
      o = {
        maxSamples: e.capabilities.maxSamples ?? 4,
        maxTexture: e.capabilities.maxTextureSize ?? 4096
      },
      s = new Set(),
      c = null,
      l = 0,
      u = [],
      d = 0,
      f = -1 / 0,
      p = () => a.mode === `custom` ? a.custom : a.mode === `auto` ? __recoveredScope.Qi() : __recoveredScope.Ji[a.mode];
    function m() {
      let e = p(),
        a = c;
      c = {
        ...e,
        msaa: Math.min(e.msaa, o.maxSamples),
        shadowSize: Math.min(e.shadowSize * i, o.maxTexture)
      };
      t.setQuality({
        msaa: c.msaa,
        outline: c.outline
      });
      n.castShadow !== c.shadows && (n.castShadow = c.shadows);
      n.shadow.mapSize.x !== c.shadowSize && (n.shadow.mapSize.set(c.shadowSize, c.shadowSize), n.shadow.map?.dispose(), n.shadow.map = null);
      a && a.scale !== c.scale && r();
      for (let e of s) e(c);
    }
    function h() {
      try {
        localStorage.setItem(__recoveredScope.qi, JSON.stringify({
          mode: a.mode,
          custom: a.custom
        }));
      } catch {}
    }
    return window.addEventListener(`storage`, e => {
      e.key === __recoveredScope.qi && (Object.assign(a, __recoveredScope.ea()), m());
    }), m(), {
      get mode() {
        return a.mode;
      },
      get custom() {
        return {
          ...a.custom
        };
      },
      get current() {
        return {
          ...c
        };
      },
      get displayHz() {
        return l;
      },
      caps: o,
      setMode(e) {
        __recoveredScope.graphicsModes.includes(e) && (e === `custom` && a.mode !== `custom` && (a.custom = {
          ...p()
        }), a.mode = e, h(), m());
      },
      set(e, t) {
        a.custom = __recoveredScope.$i({
          ...a.custom,
          [e]: t
        });
        a.mode = `custom`;
        h();
        m();
      },
      pixelRatio: () => Math.min(window.devicePixelRatio || 1, c.scale),
      onChange(e) {
        return s.add(e), () => s.delete(e);
      },
      shouldRender(e) {
        if (d && u.length < 120 && (u.push(e - d), u.length === 120)) {
          let e = [...u].sort((e, t) => e - t)[12];
          l = [30, 48, 60, 75, 90, 100, 120, 144, 165, 240].reduce((t, n) => Math.abs(1e3 / n - e) < Math.abs(1e3 / t - e) ? n : t, 60);
          for (let e of s) e(c);
        }
        return d = e, e < f && (f = -1 / 0), c.fps && e - f < 1e3 / c.fps - 2 ? false : (f = e, true);
      },
      summary() {
        let t = e.domElement;
        return {
          mode: a.mode,
          ...c,
          render: `${t.width}×${t.height}`,
          displayHz: l
        };
      }
    };
  };
}
