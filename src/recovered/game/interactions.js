/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding tm. Live dependencies: physics, wd, Sg, qp, Q, Jp, $, Yp, Bu, Xp, rider, Dg, Dh, Zp, Z, Qp, Bh, Rh, Wh, td, nd, serviceCentreLocations, Kp, I, Sh, Ad, xr, em, Gp, mf, $u, $p, jd. Writes: Gp, qp, Yp, Jp, Xp, Zp, Qp, $p, em, Kp. */
export function create_tm(__recoveredScope) {
  return function tm() {
    if (__recoveredScope.Gp = null, __recoveredScope.qp = null, __recoveredScope.Yp = false, __recoveredScope.Jp = false, __recoveredScope.Xp = false, __recoveredScope.Zp = null, __recoveredScope.Qp = __recoveredScope.$p = false, __recoveredScope.em = null, __recoveredScope.physics.crashed <= 0 && __recoveredScope.physics.grounded) {
      let e = 2.5;
      for (let t of __recoveredScope.wd) {
        let n = t.phys ? __recoveredScope.Sg(t.model.footprint, __recoveredScope.physics.pos.x, __recoveredScope.physics.pos.z) : 1 / 0;
        n < e && (e = n, __recoveredScope.qp = t);
      }
      __recoveredScope.Jp = !__recoveredScope.qp && __recoveredScope.physics.speed < 8 && __recoveredScope.Q.canCatch(__recoveredScope.physics.pos);
      __recoveredScope.Yp = !__recoveredScope.qp && !__recoveredScope.Jp && !!__recoveredScope.$ && __recoveredScope.physics.speed < 3 && __recoveredScope.$.canMount(__recoveredScope.physics.pos);
      __recoveredScope.Xp = !__recoveredScope.qp && !__recoveredScope.Jp && !__recoveredScope.Yp && __recoveredScope.Bu.near(__recoveredScope.physics.pos.x, __recoveredScope.physics.pos.z);
      __recoveredScope.Xp && __recoveredScope.rider.preloadOutfit(__recoveredScope.Dg);
      !__recoveredScope.qp && !__recoveredScope.Jp && !__recoveredScope.Yp && !__recoveredScope.Xp && __recoveredScope.Dh && __recoveredScope.physics.speed < 2 && (__recoveredScope.Zp = __recoveredScope.Dh.near(__recoveredScope.physics.pos));
      __recoveredScope.Qp = !__recoveredScope.qp && !__recoveredScope.Jp && !__recoveredScope.Yp && !__recoveredScope.Xp && !__recoveredScope.Zp && __recoveredScope.physics.speed < 3 && __recoveredScope.Z.canPet(__recoveredScope.physics.pos);
      __recoveredScope.$p = __recoveredScope.physics.speed < 3 && __recoveredScope.Z.canFetch(__recoveredScope.physics.pos) && __recoveredScope.physics.pos.distanceTo(__recoveredScope.Z.pos) < 15;
      !__recoveredScope.qp && !__recoveredScope.Jp && !__recoveredScope.Yp && !__recoveredScope.Xp && !__recoveredScope.Zp && !__recoveredScope.Qp && __recoveredScope.rider.locomotion === `walk` && __recoveredScope.physics.speed < .5 && __recoveredScope.Bh <= 0 && (__recoveredScope.em = __recoveredScope.Rh.near(__recoveredScope.physics.pos, __recoveredScope.physics.forward(__recoveredScope.Wh)));
    }
    if (__recoveredScope.physics.crashed <= 0 && __recoveredScope.physics.grounded) {
      let e = __recoveredScope.td;
      for (let t of __recoveredScope.nd) {
        let n = __recoveredScope.Sg(t.station, __recoveredScope.physics.pos.x, __recoveredScope.physics.pos.z);
        n < e && (e = n, __recoveredScope.Gp = t);
      }
    }
    let e = __recoveredScope.serviceCentreLocations.find(e => Math.hypot(__recoveredScope.physics.pos.x - e.x, __recoveredScope.physics.pos.z - e.z) < 150) ?? null;
    if (e && e !== __recoveredScope.Kp && __recoveredScope.I.toast(e.zh, 2200), __recoveredScope.Kp = e, __recoveredScope.Sh.open) __recoveredScope.I.prompt(``);else if (__recoveredScope.qp) __recoveredScope.I.prompt(__recoveredScope.qp.prompt, __recoveredScope.qp.touch.prompt, __recoveredScope.Ad);else if (__recoveredScope.Jp) __recoveredScope.I.prompt(`<kbd>E</kbd> catch the <b>snow monster</b>`, `Catch the <b>snow monster</b> ▸`, __recoveredScope.Ad);else if (__recoveredScope.Yp) __recoveredScope.I.prompt(`<kbd>E</kbd> ride the <b>horse</b>`, `Ride the <b>horse</b> ▸`, __recoveredScope.Ad);else if (__recoveredScope.Xp) __recoveredScope.I.prompt(`<kbd>E</kbd> soak in the <b>hot spring</b>`, `Soak in the <b>hot spring</b> ▸`, __recoveredScope.Ad);else if (__recoveredScope.Zp) __recoveredScope.I.prompt(`<kbd>E</kbd> sit on the <b>swing</b>`, `Sit on the <b>swing</b> ▸`, __recoveredScope.Ad);else if (__recoveredScope.Qp) __recoveredScope.I.prompt(`<kbd>E</kbd> pet <b>${__recoveredScope.xr.en}</b> · <kbd>Q</kbd> throw a snowball`, `Pet <b>${__recoveredScope.xr.en}</b> ▸`, __recoveredScope.Ad);else if (__recoveredScope.em) __recoveredScope.I.prompt(`<kbd>E</kbd> turn the <b>prayer wheel</b>`, `Turn the <b>prayer wheel</b> ▸`, __recoveredScope.Ad);else if (__recoveredScope.Gp) {
      let e = `<b>${__recoveredScope.Gp.ride.label}</b> up to ${Math.round(__recoveredScope.Gp.ride.top.y).toLocaleString()} m`;
      __recoveredScope.I.prompt(`<kbd>E</kbd> ride ${e}`, `Ride ${e} ▸`, __recoveredScope.Ad);
    } else !__recoveredScope.mf && __recoveredScope.$u.hint ? __recoveredScope.I.prompt(__recoveredScope.$u.hint, __recoveredScope.$u.touchHint) : __recoveredScope.$p ? __recoveredScope.I.prompt(`<kbd>Q</kbd> throw a snowball for <b>${__recoveredScope.xr.en}</b>`, `Throw a snowball for <b>${__recoveredScope.xr.en}</b> ▸`, __recoveredScope.jd) : __recoveredScope.I.prompt(``);
  };
}
