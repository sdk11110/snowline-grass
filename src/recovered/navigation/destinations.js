/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Wg. Live dependencies: encodeDestination, findRunHighStart, groundHeightfield, worldMetadata, sampleRouteDistance, fm, Hg, Ug, serviceCentreLocations, pm, mm, G, ed, Gg, liftDisplayName, um. */
export function create_Wg(__recoveredScope) {
  return function Wg(e) {
    let t = __recoveredScope.encodeDestination(e);
    if (e.kind === `run`) {
      let n = __recoveredScope.findRunHighStart(__recoveredScope.groundHeightfield, __recoveredScope.worldMetadata.runs, e.id);
      if (!n) return null;
      let r = e => __recoveredScope.groundHeightfield.heightAt(e.x + e.dx * 15, e.z + e.dz * 15) > __recoveredScope.groundHeightfield.heightAt(e.x, e.z) - .3,
        i = 14,
        a = __recoveredScope.sampleRouteDistance(n.points, i);
      for (; i < 120 && (!__recoveredScope.fm(a.x, a.z) || r(a));) a = __recoveredScope.sampleRouteDistance(n.points, i += 6);
      return {
        key: t,
        x: a.x,
        z: a.z,
        dx: a.dx,
        dz: a.dz,
        toast: `Drop in!`,
        hint: `<b>${n.run.name || `Unnamed run`}</b> · ${__recoveredScope.Hg}`,
        touchHint: `<b>${n.run.name || `Unnamed run`}</b> · ${__recoveredScope.Ug}`
      };
    }
    if (e.kind === `lodge`) {
      let n = __recoveredScope.serviceCentreLocations.find(t => t.id === e.id);
      if (!n) return null;
      let r = n.faceTo[0] - n.x,
        i = n.faceTo[1] - n.z,
        a = Math.hypot(r, i),
        o = __recoveredScope.pm(n, [80, 95, 110, 130], (e, t, o, s) => ((e - n.x) * r + (t - n.z) * i) / (s * a) * 2 - (1 - o.y) * 8 - s * .01);
      return o ? __recoveredScope.mm({
        key: t,
        x: o.x,
        z: o.z,
        dx: n.faceTo[0] - o.x,
        dz: n.faceTo[1] - o.z,
        toast: n.zh,
        hint: __recoveredScope.Hg,
        touchHint: __recoveredScope.Ug
      }, __recoveredScope.G) : null;
    }
    let n = __recoveredScope.worldMetadata.lifts.find(t => String(t.id) === e.id);
    if (!n) return null;
    let r = __recoveredScope.ed.find(t => String(t.id) === e.id) ?? __recoveredScope.Gg(n),
      {
        zh: i
      } = __recoveredScope.liftDisplayName(n);
    if (e.end === `top`) return {
      key: t,
      ...__recoveredScope.um(r),
      toast: `${i} · ${Math.round(r.top.y).toLocaleString()} m`,
      hint: __recoveredScope.Hg,
      touchHint: __recoveredScope.Ug
    };
    let a = r.bottom,
      o = __recoveredScope.pm(a, [16, 18, 22, 30], (e, t, n, i) => -(((e - a.x) * r.dir.x + (t - a.z) * r.dir.z) / i) * .5 - (1 - n.y) * 6 - i * .01);
    return o ? __recoveredScope.mm({
      key: t,
      x: o.x,
      z: o.z,
      dx: a.x - o.x,
      dz: a.z - o.z,
      toast: `${i} · ${Math.round(a.y).toLocaleString()} m`,
      hint: __recoveredScope.Hg,
      touchHint: __recoveredScope.Ug,
      board: e.end === `ride` && r.cable ? r : null
    }, r.dir) : null;
  };
}
