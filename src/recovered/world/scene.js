/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding prepareWorldAssets. Live dependencies: loadWorldData, loadTreeModelLibrary, PisteDistanceField, raisePisteBanks, Ha, Ja, _s, Po, liftEndpointPositions, Yo, Fo, Vector3, as. */
export function create_prepareWorldAssets(__recoveredScope) {
  return async function prepareWorldAssets({
    original: e = false,
    onProgress: t = () => {}
  } = {}) {
    let n = 0,
      r = e => {
        n += e;
        t(n);
      },
      [i, a] = await Promise.all([__recoveredScope.loadWorldData({
        edits: !e
      }).then(e => (r(2 / 3), e)), __recoveredScope.loadTreeModelLibrary().then(e => (r(1 / 6), e))]),
      {
        meta: o
      } = i,
      c = new __recoveredScope.PisteDistanceField(o.runs, i.detail.size, 4, 60, i.detail.center),
      l = __recoveredScope.raisePisteBanks(i.detail, o.runs, c, __recoveredScope.Ha(o.lifts)),
      u = __recoveredScope.Ja(l, o.lifts),
      d = __recoveredScope._s(l, o.lakes);
    __recoveredScope.Po(l, o.lifts);
    let f = __recoveredScope.liftEndpointPositions(o.lifts),
      p = __recoveredScope.Yo(c, 17),
      m = new Map();
    for (let [e, t] of o.lifts.entries()) {
      if (t.type !== `gondola` || !__recoveredScope.Fo.includes(t.name)) continue;
      let [n, r] = f[e].map(([e, t]) => new __recoveredScope.Vector3(e, l.heightAt(e, t), t));
      __recoveredScope.as(l, n, r, p, m);
    }
    return t(1), {
      ...i,
      piste: c,
      ground: l,
      lakes: d,
      summitFrame: u,
      treeModels: a,
      gondolaApproach: m
    };
  };
}
/* Recovered binding sampleRouteDistance. Live dependencies: . */
export function create_sampleRouteDistance(__recoveredScope) {
  return function sampleRouteDistance(e, t) {
    let n = t;
    for (let t = 0; t < e.length - 1; t++) {
      let r = e[t],
        i = e[t + 1],
        a = Math.hypot(i[0] - r[0], i[1] - r[1]);
      if (n <= a) {
        let e = n / a;
        return {
          x: r[0] + (i[0] - r[0]) * e,
          z: r[1] + (i[1] - r[1]) * e,
          dx: (i[0] - r[0]) / a,
          dz: (i[1] - r[1]) / a
        };
      }
      n -= a;
    }
    let r = e[e.length - 2],
      i = e[e.length - 1],
      a = Math.hypot(i[0] - r[0], i[1] - r[1]);
    return {
      x: i[0],
      z: i[1],
      dx: (i[0] - r[0]) / a,
      dz: (i[1] - r[1]) / a
    };
  };
}
/* Recovered binding rd. Live dependencies: . */
export function create_rd(__recoveredScope) {
  return function rd(e, t) {
    let n = (e, t, n) => {
      let r = Math.cos(e.yaw),
        i = Math.sin(e.yaw);
      return e.hw * Math.abs(r * t - i * n) + e.hd * Math.abs(i * t + r * n);
    };
    return [e.yaw, t.yaw].every(r => {
      let i = Math.cos(r),
        a = Math.sin(r);
      return [[i, -a], [a, i]].every(([r, i]) => Math.abs((t.x - e.x) * r + (t.z - e.z) * i) < n(e, r, i) + n(t, r, i));
    });
  };
}
/* Recovered binding createWorldScene. Live dependencies: g, createTerrainLod, treeLineElevation, serviceCentreLocations, Wc, createCableway, rd, rl, hotSpringLocation, No, sampleRouteDistance, defaultRunName, Gc, Vector3, placeForestTrees, createForestBatches, nc, ws, Hc, Ca, wl, Fl, jl, Il, Zl, tu, ku, Vu, Ss, gu, Zu, Wl, ys. */
export function create_createWorldScene(__recoveredScope) {
  return function createWorldScene(e, {
    terrain: t = {},
    forest: n = {},
    toy: r = null,
    labels: i = false
  } = {}) {
    let {
        ground: a,
        piste: o,
        meta: c,
        lakes: l,
        edits: u,
        treeModels: d,
        gondolaApproach: f
      } = e,
      p = new __recoveredScope.g(),
      m = __recoveredScope.createTerrainLod(a, o, __recoveredScope.treeLineElevation, t),
      h = __recoveredScope.serviceCentreLocations.map(e => __recoveredScope.Wc(a, e, {
        scale: r?.lodge
      })),
      _ = __recoveredScope.createCableway(a, c.lifts, {
        piste: o,
        approach: f,
        ...(r ? {
          scale: r.lift,
          stationScale: r.station,
          spacing: r.carSpacing,
          speed: r.liftSpeed
        } : {})
      }),
      v = [..._.footprints, ...h.map(e => e.userData.footprint)],
      y = e => !r || !e.some(e => v.some(t => __recoveredScope.rd(e, t))),
      b = __recoveredScope.rl(a, __recoveredScope.hotSpringLocation),
      x = y(b.footprints),
      S = __recoveredScope.No(a, {
        labels: i,
        keep: e => y([e])
      }),
      C = __recoveredScope.sampleRouteDistance(c.runs.find(e => e.name === __recoveredScope.defaultRunName).points, 26),
      w = __recoveredScope.Gc(a, new __recoveredScope.Vector3(C.x, 0, C.z), new __recoveredScope.Vector3(-C.dx, 0, -C.dz), [`云霄峰道 · START`, `Yunxiaofeng · Gondola No.6`], `#f0c24a`),
      T = [...(x ? b.footprints : []), ...S.footprints],
      E = __recoveredScope.placeForestTrees(a, o, c.lifts, u?.trees),
      D = __recoveredScope.createForestBatches(a, r ? __recoveredScope.nc(E, a, o, c.lifts, {
        scale: r.tree,
        cell: r.treeCell,
        per: r.treePer,
        keepOff: [...v, ...T]
      }) : E, {
        models: d,
        ...n
      }),
      O = __recoveredScope.ws(l),
      k = __recoveredScope.Hc(a, c.runs);
    p.add(m, ...h, D.group, _.group, S.group, O.group, k);
    x && p.add(b.group);
    y([w.userData.footprint]) && p.add(w);
    let ee = [...v.filter(e => !e.passable), ..._.collisionParts, ...T],
      A = e => {
        let {
          x: t,
          z: n,
          yaw: r
        } = __recoveredScope.Ca(`vehicle:${e}`);
        return {
          x: t,
          z: n,
          dx: Math.sin(r),
          dz: Math.cos(r)
        };
      },
      j = l.find(e => e.name === `云湖`) ?? l[0] ?? null;
    return {
      group: p,
      terrain: m,
      lodges: h,
      lifts: _,
      forest: D,
      onsen: b,
      summit: S,
      banner: w,
      water: O,
      markers: k,
      vehicles: [{
        name: `pickup`,
        Model: __recoveredScope.wl,
        handling: __recoveredScope.Fl,
        park: A(`pickup`)
      }, {
        name: `snowmobile`,
        Model: __recoveredScope.jl,
        handling: __recoveredScope.Il,
        park: A(`snowmobile`)
      }, {
        name: `jetson`,
        Model: __recoveredScope.Zl,
        handling: __recoveredScope.tu,
        flies: true,
        park: A(`jetson`)
      }, ...(j ? [{
        name: `rowboat`,
        Model: __recoveredScope.ku,
        handling: __recoveredScope.Vu,
        floats: true,
        lake: j,
        park: __recoveredScope.Ss(j, c.runs)
      }] : [])].filter(e => y([{
        x: e.park.x,
        z: e.park.z,
        yaw: 0,
        hw: 1,
        hd: 1
      }])).map(({
        Model: e,
        ...t
      }) => ({
        ...t,
        model: new e()
      })),
      obstacles: ee,
      parkVehicle: e => {
        let t = new (e.flies ? __recoveredScope.gu : e.floats ? __recoveredScope.Zu : __recoveredScope.Wl)({
          hf: e.flies ? __recoveredScope.ys(a, l) : a,
          piste: o,
          forest: D,
          lakes: l,
          lake: e.lake,
          dims: e.model.dims,
          handling: e.handling,
          obstacles: [...ee]
        });
        return t.reset(e.park.x, e.park.z, Math.atan2(-e.park.dx, -e.park.dz)), e.model.update(0, t), t;
      },
      fits: y
    };
  };
}
