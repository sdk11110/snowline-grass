/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding decodeHeightU16. Live dependencies: . */
export function create_decodeHeightU16(__recoveredScope) {
  return function decodeHeightU16(e, {
    min: t,
    max: n
  }) {
    let r = new Uint16Array(e),
      i = new Float32Array(r.length),
      a = (n - t) / 65535;
    for (let e = 0; e < r.length; e++) i[e] = t + r[e] * a;
    return i;
  };
}
/* Recovered binding loadOptionalWorldEdits. Live dependencies: . */
export function create_loadOptionalWorldEdits(__recoveredScope) {
  return async function loadOptionalWorldEdits(e) {
    try {
      let t = await fetch(e + `edits/edits.json`, {
        cache: `no-store`
      });
      return !t.ok || !t.headers.get(`content-type`)?.includes(`json`) ? null : await t.json();
    } catch {
      return null;
    }
  };
}
/* Recovered binding loadWorldData. Live dependencies: worldDataBase, loadOptionalWorldEdits, editsDataDirectory, Heightfield, decodeHeightU16, wa, va. */
export function create_loadWorldData(__recoveredScope) {
  return async function loadWorldData({
    edits: e = false
  } = {}) {
    let t = await (await fetch(__recoveredScope.worldDataBase + `world.json`)).json(),
      n = e ? await __recoveredScope.loadOptionalWorldEdits(__recoveredScope.worldDataBase) : null,
      r = n ? {
        ...t.detail,
        ...n.detail,
        file: __recoveredScope.editsDataDirectory + n.detail.file
      } : t.detail,
      [i, a] = await Promise.all([r, t.backdrop].map(e => e && fetch(__recoveredScope.worldDataBase + e.file, {
        cache: n ? `no-store` : `default`
      }).then(e => e.arrayBuffer()))),
      o = new __recoveredScope.Heightfield(r.size, r.cells, __recoveredScope.decodeHeightU16(i, r), r.center),
      s = {
        runs: t.runs,
        lifts: t.lifts
      };
    return n && (t.runs = n.runs, n.lifts && (t.lifts = n.lifts), o.setHoles(n.tileCells, n.holes), __recoveredScope.wa(n.places)), __recoveredScope.va(t.lifts), {
      meta: t,
      edits: n,
      baked: s,
      detail: o,
      backdrop: a && new __recoveredScope.Heightfield(t.backdrop.size, t.backdrop.cells, __recoveredScope.decodeHeightU16(a, t.backdrop))
    };
  };
}
