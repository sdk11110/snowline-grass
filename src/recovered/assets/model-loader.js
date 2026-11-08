/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/model-loader-DSq0b4m1.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
import { $ as e, $n as t, At as n, Cr as Vector3, Ct as i, Ft as a, G as o, Gt as s, Ht as c, It as l, J as u, Kt as d, Ln as f, Lt as p, Mt as m, N as h, Nt as g, Pt as ee, Q as _, Qn as te, Sr as ne, St as v, Tr as re, Ut as ie, Wn as y, Wt as ae, X as oe, Y as b, _ as se, at as ce, b as x, bt as MathUtils, c as ue, cr as de, ct as fe, d as pe, dt as me, er as he, et as ge, ft as S, ht as C, jt as _e, kt as w, lt as ve, mt as ye, n as be, nt as T, o as xe, ot as Se, qt as E, rr as Ce, sr as we, st as Te, tt as Ee, u as D, ut as De, wt as O, y as k, yt as A, z as j, zt as Oe } from "../../vendor/three/core.js";
import { r as M } from "../../vendor/three/buffer-geometry-utils.js";
import { cloneSkinnedModel, P, GLTFLoader, Ae, F, I, je, Me, Ne, Pe, Fe, Ie, Le, Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, L, R, Xe, Ze, Qe, $e, z, et, tt, B, V, H, U, W, G, K, nt, q, rt, J, Y, it, at, ot, X, Z, st, ct, lt, ut, dt } from "../../vendor/three/gltf-loader.js";
var mobileModelVariants = {
  "coffee-cabin/coffee-cabin.glb": {
    file: `mobile-v01/coffee-cabin/coffee-cabin-mobile-v01.glb`,
    sourceSha256: `3ad5c7c7d2f4fbf50442967743ec6e789b3a13d9bed6c614a17f2fdadda0c180`,
    sha256: `c92e2ab449da33edccae6678a66e20a76ca6b5f46193cb05a72447a03eca521e`,
    sourceBytes: 3812828,
    bytes: 3683260,
    images: [{
      view: 4,
      before: [2048, 2048],
      after: [1024, 1024]
    }]
  },
  "dog/old-english-sheepdog.glb": {
    file: `mobile-v01/dog/old-english-sheepdog-mobile-v01.glb`,
    sourceSha256: `0302ed363a1da63cdef23a3257ee167ae441b3d413d431642d7866ec4469030f`,
    sha256: `516d9f290fd03dcb06c2b91e44988e72369bc93b067042cefb45bc58766bb18f`,
    sourceBytes: 1686652,
    bytes: 1574444,
    images: [{
      view: 6,
      before: [2048, 2048],
      after: [1024, 1024]
    }]
  },
  "female-rider/female-rider-mitten-walk-run-tex2k-v04.glb": {
    file: `mobile-v01/female-rider/female-rider-mitten-walk-run-tex1k-v04-mobile-v01.glb`,
    sourceSha256: `7a253d214e3cf7f86a4418dd2effe24ce04729b71143bc812eb83c0488731658`,
    sha256: `4144b5a3d6e36ef3ae3826f6073470bae12d80efd23426513f3955f7ca43c0dd`,
    sourceBytes: 2386092,
    bytes: 1697408,
    images: [{
      view: 6,
      before: [2048, 2048],
      after: [1024, 1024]
    }]
  },
  "female-rider/female-rider-swim-v01.glb": {
    file: `mobile-v01/female-rider/female-rider-swim-v01-mobile-v01.glb`,
    sourceSha256: `0ebb2f4420fb2d00d9cbeed490a61cb20d189b2798b3a03e0aff42d758e340c9`,
    sha256: `29abf02ef631837b5cb5a4a294b61369da6ed1b3b2e8919fe27fc4f83f598fef`,
    sourceBytes: 2293160,
    bytes: 1730460,
    images: [{
      view: 6,
      before: [2048, 2048],
      after: [1024, 1024]
    }]
  },
  "horse/altai-horse.glb": {
    file: `mobile-v01/horse/altai-horse-mobile-v01.glb`,
    sourceSha256: `ee47a4aa73ea2b10d0f0de944067c2db27a523068fc6076b2b2ee16f0d072bd1`,
    sha256: `da287fbb027ad8926f505fc74febfb073a829f931f620cdfe0b978d3082f6c5c`,
    sourceBytes: 1702324,
    bytes: 1311560,
    images: [{
      view: 6,
      before: [2048, 2048],
      after: [1024, 1024]
    }]
  },
  "jetson/jetson-one.glb": {
    file: `mobile-v01/jetson/jetson-one-mobile-v01.glb`,
    sourceSha256: `9ee65b0ccd2bfdc82bd06fbebbc28943d907a688467259773fc263584110dbbb`,
    sha256: `c4356af6241adec76a92c2a89cf3436eac5ba49ff8d829ec5777b98959d10deb`,
    sourceBytes: 2203056,
    bytes: 1673248,
    images: [{
      view: 4,
      before: [2048, 2048],
      after: [1024, 1024]
    }]
  },
  "lifts/station.glb": {
    file: `mobile-v01/lifts/station-mobile-v01.glb`,
    sourceSha256: `c5fa5bd0d4f0c066b1c0b6a7e6b8160bfff77f83a76f43efa56ba3d0578bce42`,
    sha256: `df30e5c407d846bb998267b05e6e51aaef13dadaa922756e241c05248609ad48`,
    sourceBytes: 1033016,
    bytes: 648452,
    images: [{
      view: 0,
      before: [2048, 2048],
      after: [1024, 1024]
    }]
  },
  "onsen/cave-rock.glb": {
    file: `mobile-v01/onsen/cave-rock-mobile-v01.glb`,
    sourceSha256: `3fe3c4e48700e9cd8e5988c58d99eedb3083687d55b3c20bf0eea2522b3b7f55`,
    sha256: `cf320ddf2a99662e60d02eb963376f484f0d2c9e03989e1482ad8dcf6fdf1934`,
    sourceBytes: 979520,
    bytes: 450804,
    images: [{
      view: 0,
      before: [2048, 2048],
      after: [1024, 1024]
    }]
  },
  "onsen/stone-arena.glb": {
    file: `mobile-v01/onsen/stone-arena-mobile-v01.glb`,
    sourceSha256: `6ab2a530ca8f1115acd0c8d21602541af292d126cb72f9b1a4bb342f988c4d1b`,
    sha256: `b75949acac32be31830973565bb91506f9ad9e133a1e3087016354f27a2f95d0`,
    sourceBytes: 2151992,
    bytes: 1062588,
    images: [{
      view: 4,
      before: [2048, 2048],
      after: [1024, 1024]
    }]
  },
  "player-mitten-v02.glb": {
    file: `mobile-v01/player-mitten-v02-mobile-v01.glb`,
    sourceSha256: `54206f990b2b8c8d12aeb394916b2bf0d3fd9579c6fdd8068a6048b4c013c386`,
    sha256: `45cc3d6ac088d90002468fb3dc5e04a371a9ca745bd4bd33164d3812b801efac`,
    sourceBytes: 2549476,
    bytes: 1649732,
    images: [{
      view: 6,
      before: [2048, 2048],
      after: [1024, 1024]
    }]
  },
  "prayer-wheels/prayer-wheels.glb": {
    file: `mobile-v01/prayer-wheels/prayer-wheels-mobile-v01.glb`,
    sourceSha256: `cbd4f316b171eca1d899996250ff84b37f032321a67388e241540382e7c01b5f`,
    sha256: `404958ec5c445baf63e21e1bb3edc396cc7a852a87e58efa936c654f07e1c5b1`,
    sourceBytes: 1755128,
    bytes: 1134896,
    images: [{
      view: 4,
      before: [2048, 2048],
      after: [1024, 1024]
    }]
  },
  "saddle/kazakh-saddle.glb": {
    file: `mobile-v01/saddle/kazakh-saddle-mobile-v01.glb`,
    sourceSha256: `1e3192982d4bfb759fa7b73c833bf1d6eec11a711085c160b9a6bd48e569ec71`,
    sha256: `03224770ac69e13914724387bb8e0526fcdb0f266ea87caf4ed81f82c86a2968`,
    sourceBytes: 1257840,
    bytes: 881492,
    images: [{
      view: 6,
      before: [2048, 2048],
      after: [1024, 1024]
    }]
  },
  "snowmobile/snowmobile.glb": {
    file: `mobile-v01/snowmobile/snowmobile-mobile-v01.glb`,
    sourceSha256: `34ff826815f885d3c17b42aee14a7a1b902917b0d0a2bd2c2d11366ca6ada45c`,
    sha256: `c11c5ea331ce43d3cc19ee7ccce0c36c3431125f87d89535f13ea8d18baac74d`,
    sourceBytes: 1978420,
    bytes: 1453368,
    images: [{
      view: 0,
      before: [2048, 2048],
      after: [1024, 1024]
    }]
  },
  "truck/pickup.glb": {
    file: `mobile-v01/truck/pickup-mobile-v01.glb`,
    sourceSha256: `e79c6eb212f8b57d4124c527bfa3fe2b02d2c70d526dcc9daada6554c8857276`,
    sha256: `65cb7587a0396f7463c10543547da4c0029bd3ecea177074dfdf1ec875a568c9`,
    sourceBytes: 3624744,
    bytes: 2916976,
    images: [{
      view: 4,
      before: [2048, 2048],
      after: [1024, 1024]
    }]
  }
};
function detectMobileModelProfile({
  search: e = ``,
  userAgent: t = ``,
  coarse: n = false,
  touchPoints: r = 0,
  width: i = 1 / 0,
  height: a = 1 / 0
} = {}) {
  let o = new URLSearchParams(e).get(`quality`);
  return o === `mobile` || o === `desktop` ? o === `mobile` : /Android|iPhone|iPad|iPod|Mobile/i.test(t) || n && r > 0 && Math.min(i, a) <= 1024;
}
var isMobileModelProfile = typeof window < `u` && detectMobileModelProfile({
  search: window.location.search,
  userAgent: window.navigator.userAgent,
  coarse: window.matchMedia(`(pointer: coarse)`).matches,
  touchPoints: window.navigator.maxTouchPoints,
  width: window.screen.width,
  height: window.screen.height
});
function createTaskQueue(e) {
  let t = 0,
    n = [];
  function r() {
    for (; t < e && n.length;) {
      let {
        task: e,
        resolve: i,
        reject: a
      } = n.shift();
      t++;
      Promise.resolve().then(e).then(i, a).finally(() => {
        t--;
        r();
      });
    }
  }
  return e => new Promise((t, i) => {
    n.push({
      task: e,
      resolve: t,
      reject: i
    });
    r();
  });
}
function resolveModelVariant(e, t = isMobileModelProfile, n = `./`) {
  let r = n + `models/`;
  if (!t || !e.startsWith(r)) return e;
  let i = mobileModelVariants[e.slice(r.length)];
  return i ? r + i.file : e;
}
var modelTaskQueue = createTaskQueue(isMobileModelProfile ? 2 : 1 / 0);
var modelLoadStats = {
  active: 0,
  peak: 0,
  completed: 0,
  failed: 0
};
function loadGLTF(e) {
  return modelTaskQueue(async () => {
    modelLoadStats.active++;
    modelLoadStats.peak = Math.max(modelLoadStats.peak, modelLoadStats.active);
    try {
      let t = await new GLTFLoader().loadAsync(resolveModelVariant(e));
      return modelLoadStats.completed++, delete t.parser, t;
    } catch (e) {
      throw modelLoadStats.failed++, e;
    } finally {
      modelLoadStats.active--;
    }
  });
}
export { isMobileModelProfile as a, resolveModelVariant as i, createTaskQueue as n, cloneSkinnedModel as o, modelLoadStats as r, loadGLTF as t };
export { isMobileModelProfile, resolveModelVariant, createTaskQueue, cloneSkinnedModel, modelLoadStats, loadGLTF };
