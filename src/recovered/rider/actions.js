/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding St. Live dependencies: . */
export function create_St(__recoveredScope) {
  return function St(e) {
    let t = Math.min(.35, Math.max(.12, e.duration * .2)),
      n = e.duration + t,
      r = e.tracks.map(t => {
        let r = t.getValueSize(),
          i = Array.from(t.times),
          a = Array.from(t.values);
        return i[i.length - 1] < e.duration - 1e-6 && (i.push(e.duration), a.push(...a.slice(-r))), i.push(n), a.push(...a.slice(0, r)), new t.constructor(t.name, i, a, t.getInterpolation());
      });
    return new e.constructor(e.name, n, r);
  };
}
/* Recovered binding playSpecialAction. Live dependencies: specialActionDefinitions, R, md, stopSpecialAction, W, rider, physics, gd, I, pd, loadGLTF, L, hd, St, mt, dd. Writes: hd, md, R. */
export function create_playSpecialAction(__recoveredScope) {
  return async function playSpecialAction(e) {
    let t = __recoveredScope.specialActionDefinitions.find(t => t.id === e);
    if (!t) return;
    if (__recoveredScope.R?.id === e || __recoveredScope.md === e) {
      __recoveredScope.stopSpecialAction();
      return;
    }
    if (__recoveredScope.W !== `ride` || __recoveredScope.rider.locomotion !== `walk` && !(__recoveredScope.R && __recoveredScope.rider.locomotion === `act`) || !__recoveredScope.rider.model || !__recoveredScope.physics.grounded || __recoveredScope.physics.crashed > 0 || __recoveredScope.rider.throwT !== null) {
      __recoveredScope.gd.textContent = `Switch to on foot and stop before playing an action.`;
      __recoveredScope.I.toast(`Actions are available on foot`);
      return;
    }
    let n = ++__recoveredScope.hd,
      r = __recoveredScope.rider.model;
    __recoveredScope.md = e;
    __recoveredScope.gd.textContent = `Loading ${t.label}…`;
    try {
      __recoveredScope.pd.has(e) || __recoveredScope.pd.set(e, __recoveredScope.loadGLTF(`./models/motions/special-actions-v01/${e}.glb`).catch(t => {
        throw __recoveredScope.pd.delete(e), t;
      }));
      let i = await __recoveredScope.pd.get(e);
      if (e === `fireball` && (__recoveredScope.L.start(), await __recoveredScope.L.prepareFireball()), n !== __recoveredScope.hd) return;
      if (__recoveredScope.md = null, __recoveredScope.W !== `ride` || __recoveredScope.rider.model !== r || !__recoveredScope.physics.grounded || __recoveredScope.physics.crashed > 0 || __recoveredScope.rider.throwT !== null || __recoveredScope.rider.locomotion !== `walk` && !(__recoveredScope.R && __recoveredScope.rider.locomotion === `act`)) {
        __recoveredScope.gd.textContent = __recoveredScope.R ? `Playing ${__recoveredScope.specialActionDefinitions.find(e => e.id === __recoveredScope.R.id).label}` : `Action stopped.`;
        return;
      }
      let a = __recoveredScope.St(__recoveredScope.mt(i.animations[0], i.scene, r.bindScene));
      if (!a.tracks.length || !a.duration) throw Error(`No usable animation tracks`);
      __recoveredScope.physics.vel.set(0, 0, 0);
      __recoveredScope.physics.yawRate = 0;
      __recoveredScope.dd.reset();
      __recoveredScope.L.stopFireballShout();
      __recoveredScope.R = {
        id: e,
        clip: a,
        time: 0,
        previous: 0,
        model: r
      };
      __recoveredScope.rider.play(a, 0);
      __recoveredScope.gd.textContent = `Playing ${t.label}`;
    } catch (r) {
      console.warn(`Action unavailable:`, e, r);
      n === __recoveredScope.hd && (__recoveredScope.md = null, __recoveredScope.gd.textContent = `${t.label} could not be loaded.`);
    }
  };
}
/* Recovered binding stopSpecialAction. Live dependencies: R, md, dd, L, gd, rider. Writes: hd, md, R. */
export function create_stopSpecialAction(__recoveredScope) {
  return function stopSpecialAction() {
    ++__recoveredScope.hd;
    (__recoveredScope.R || __recoveredScope.md) && (__recoveredScope.md = null, __recoveredScope.R = null, __recoveredScope.dd.reset(), __recoveredScope.L.stopFireballShout(), __recoveredScope.gd.textContent = `Action stopped.`, __recoveredScope.rider.locomotion === `act` && __recoveredScope.rider.setLocomotion(`walk`));
  };
}
