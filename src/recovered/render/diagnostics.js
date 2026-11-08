/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding xt. Live dependencies: . */
export function create_xt(__recoveredScope) {
  return function xt(e) {
    let t = new Set(),
      n = new Map(),
      r = new Set(),
      i = 0,
      a = 0,
      o = e => {
        let n = e?.isInterleavedBufferAttribute ? e.data.array : e?.array;
        n && !t.has(n.buffer) && (t.add(n.buffer), i += n.buffer.byteLength);
      };
    return e.traverse(e => {
      let t = e.geometry;
      if (t && !r.has(t)) {
        r.add(t);
        o(t.index);
        for (let e of Object.values(t.attributes)) o(e);
        for (let e of Object.values(t.morphAttributes)) for (let t of e) o(t);
        let e = t.attributes.position;
        if (e) for (let t = 0; t < e.count; t++) (!Number.isFinite(e.getX(t)) || !Number.isFinite(e.getY(t)) || !Number.isFinite(e.getZ(t))) && a++;
      }
      o(e.instanceMatrix);
      o(e.instanceColor);
      for (let t of Array.isArray(e.material) ? e.material : [e.material]) if (t) for (let e of Object.values(t)) {
        let t = e?.isTexture && e.image;
        t?.width && t?.height && !e.isRenderTargetTexture && !e.isDataTexture && n.set(t, {
          width: t.width,
          height: t.height
        });
      }
    }), {
      geometryArrayBytes: i,
      imageRGBABytesEstimate: [...n.values()].reduce((e, t) => e + t.width * t.height * 4, 0),
      imageCount: n.size,
      images: [...n.values()],
      nonFinitePositions: a
    };
  };
}
