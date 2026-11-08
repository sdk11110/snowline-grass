/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Hd. Live dependencies: Bd. */
export function create_Hd(__recoveredScope) {
  return e => {
    for (let t of __recoveredScope.Bd) t.setAttribute(`aria-pressed`, String(t.dataset.rider === e));
  };
}
/* Recovered binding selectRider. Live dependencies: Id, Hd, zd, Vd, rider, Ud, z, W, Lg, Bg, Ag, Dg, Nd. Writes: Ud, Wd. */
export function create_selectRider(__recoveredScope) {
  return async function selectRider(e) {
    let t = ++__recoveredScope.Ud;
    __recoveredScope.Wd = e;
    __recoveredScope.Id();
    __recoveredScope.Hd(e);
    __recoveredScope.zd.setAttribute(`aria-busy`, `true`);
    __recoveredScope.Vd.textContent = `Loading rider…`;
    let n = false;
    try {
      n = await __recoveredScope.rider.selectModel(e);
    } catch (e) {
      console.warn(`Could not switch rider.`, e);
    }
    t === __recoveredScope.Ud && (__recoveredScope.Wd = __recoveredScope.rider.modelId, __recoveredScope.Hd(__recoveredScope.rider.modelId), __recoveredScope.zd.removeAttribute(`aria-busy`), n && __recoveredScope.z.prefs.rider !== __recoveredScope.rider.modelId && (__recoveredScope.z.prefs.rider = __recoveredScope.rider.modelId, __recoveredScope.z.save()), n && __recoveredScope.W === `soak` && (__recoveredScope.Lg && __recoveredScope.Bg(), __recoveredScope.Ag(__recoveredScope.Dg)), __recoveredScope.Vd.textContent = n ? __recoveredScope.rider.canWalk ? `Ready · ${__recoveredScope.Nd.on ? `On foot` : `F`} switches board / on foot` : `Ready · snowboarding` : `Could not load that rider. Previous rider kept; choose again to retry.`);
  };
}
