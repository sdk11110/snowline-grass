/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Cd. Live dependencies: Sd. */
export function create_Cd(__recoveredScope) {
  return {
    pickup: {
      hall: __recoveredScope.Sd,
      cam: {
        back: 9,
        up: 3.4,
        ahead: 5,
        look: 1.4
      },
      wind: .5,
      title: `Pickup`,
      prompt: `<kbd>E</kbd> drive the <b>pickup</b>`,
      hint: `<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> drive · <kbd>Space</kbd> handbrake · <kbd>E</kbd> get out`,
      touch: {
        prompt: `Drive the <b>pickup</b> ▸`,
        enter: `Drive`,
        exit: `Get out`,
        hint: `Stick up to drive, down to brake · sideways to steer`
      }
    },
    snowmobile: {
      hall: __recoveredScope.Sd,
      cam: {
        back: 5.6,
        up: 2.4,
        ahead: 4,
        look: 1.1
      },
      wind: 1,
      title: `Snowmobile`,
      prompt: `<kbd>E</kbd> ride the <b>snowmobile</b>`,
      hint: `<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> ride · <kbd>Space</kbd> handbrake · <kbd>E</kbd> get off`,
      touch: {
        prompt: `Ride the <b>snowmobile</b> ▸`,
        enter: `Ride`,
        exit: `Get off`,
        hint: `Stick up to ride, down to brake · sideways to steer`
      }
    },
    jetson: {
      hall: __recoveredScope.Sd,
      cam: {
        back: 6.5,
        up: 3.4,
        ahead: 4,
        look: .9,
        side: -.5,
        follow: 12
      },
      wind: 1,
      lean: .012,
      title: `Jetson ONE`,
      prompt: `<kbd>E</kbd> fly the <b>Jetson ONE</b>`,
      hintLanded: `<kbd>Space</kbd> take off · <kbd>E</kbd> get out`,
      hint: `<kbd>W</kbd><kbd>S</kbd> fly · <kbd>A</kbd><kbd>D</kbd> turn · <kbd>Space</kbd> up · <kbd>Shift</kbd> down and land`,
      touch: {
        prompt: `Fly the <b>Jetson ONE</b> ▸`,
        enter: `Fly`,
        exit: `Get out`,
        hint: `The stick flies and turns · hold Up to climb, Down to land`,
        hintLanded: `Hold Up to take off`
      }
    },
    rowboat: {
      cam: {
        back: 6,
        up: 2.5,
        ahead: 2.5,
        look: .6,
        side: .5,
        follow: 3
      },
      wind: .6,
      lean: .01,
      title: `Rowing boat`,
      prompt: `<kbd>E</kbd> take the <b>rowing boat</b>`,
      hint: `<kbd>W</kbd> row · <kbd>S</kbd> back water · <kbd>A</kbd><kbd>D</kbd> turn · <kbd>Space</kbd> hold water · <kbd>E</kbd> step out at the shore`,
      touch: {
        prompt: `Take the <b>rowing boat</b> ▸`,
        enter: `Row`,
        exit: `Step out`,
        hint: `Stick up to row, down to back water · sideways to turn`
      }
    }
  };
}
/* Recovered binding Td. Live dependencies: wd, B. */
export function create_Td(__recoveredScope) {
  return () => __recoveredScope.wd.filter(e => e.phys && e !== __recoveredScope.B).map(e => e.model.footprint);
}
/* Recovered binding Qh. Live dependencies: rider, Id, ug, K, physics, Dp, I, Td, F, eg. Writes: Zh, B, W, Pp, $h. */
export function create_Qh(__recoveredScope) {
  return function Qh(e) {
    __recoveredScope.Zh = __recoveredScope.rider.locomotion === `walk`;
    __recoveredScope.Id();
    __recoveredScope.B = e;
    __recoveredScope.W = `drive`;
    e.model.saddle ? (__recoveredScope.ug(), __recoveredScope.rider.setLocomotion(`sit`, e.model.seat)) : __recoveredScope.rider.root.visible = false;
    e.phys.nudge?.(Math.sign(__recoveredScope.K.subVectors(__recoveredScope.physics.pos, e.phys.pos).dot(e.phys.left(__recoveredScope.Dp))) || 1);
    __recoveredScope.I.parked = __recoveredScope.Td();
    __recoveredScope.F.gap(__recoveredScope.physics.pos);
    for (let t of e.tracks) t.gap(e.phys.pos);
    __recoveredScope.Pp = 0;
    __recoveredScope.$h = 0;
    __recoveredScope.I.prompt(...__recoveredScope.eg(e));
    __recoveredScope.I.toast(e.title, 1600);
  };
}
/* Recovered binding eg. Live dependencies: $h. */
export function create_eg(__recoveredScope) {
  return function eg(e) {
    let [t, n] = e.flies && e.phys.landed ? [e.hintLanded, e.touch.hintLanded] : [e.hint, e.touch.hint];
    return [t, __recoveredScope.$h < 6 ? n : ``];
  };
}
/* Recovered binding tg. Live dependencies: ng, B, K, Dp, physics, ug, rider, Zh, kp, I, Td, F. Writes: W, B. */
export function create_tg(__recoveredScope) {
  return function tg() {
    let e = __recoveredScope.ng();
    if (!e) return false;
    __recoveredScope.B.phys.land?.();
    let t = __recoveredScope.B.phys;
    return t.nudge?.(Math.sign(__recoveredScope.K.set(e.x - t.pos.x, 0, e.z - t.pos.z).dot(t.left(__recoveredScope.Dp))) || 1), __recoveredScope.B.floats ? t.vel.multiplyScalar(.3) : t.vel.set(0, 0, 0), t.yawRate = t.accel = t.lateral = 0, __recoveredScope.W = `ride`, __recoveredScope.physics.reset(e.x, e.z, t.yaw), __recoveredScope.B.model.saddle && __recoveredScope.ug(), __recoveredScope.rider.setLocomotion(__recoveredScope.Zh ? `walk` : `ride`), __recoveredScope.rider.root.visible = true, __recoveredScope.kp(0, true), __recoveredScope.B = null, __recoveredScope.I.parked = __recoveredScope.Td(), __recoveredScope.I.prompt(``), __recoveredScope.F.gap(__recoveredScope.physics.pos), true;
  };
}
/* Recovered binding ng. Live dependencies: B, Ep, Dp, nearestLakeShore, lakes, groundHeightfield, forest, physics, Sg. */
export function create_ng(__recoveredScope) {
  return function ng() {
    let e = __recoveredScope.B.phys,
      t = e.forward(__recoveredScope.Ep),
      n = e.left(__recoveredScope.Dp),
      r = __recoveredScope.B.model.exits.map(({
        along: r,
        left: i
      }) => ({
        x: e.pos.x + t.x * r + n.x * i,
        z: e.pos.z + t.z * r + n.z * i
      })),
      i = ({
        x: e,
        z: t
      }) => !(__recoveredScope.nearestLakeShore(__recoveredScope.lakes, e, t, 1)?.d < .3);
    return r.find(e => i(e) && __recoveredScope.groundHeightfield.inside(e.x, e.z, 60) && !__recoveredScope.groundHeightfield.holeAt(e.x, e.z) && !__recoveredScope.forest.hit(e.x, e.z, .6) && __recoveredScope.physics.obstacles.every(t => __recoveredScope.Sg(t, e.x, e.z) > .6)) ?? r.find(i) ?? null;
  };
}
/* Recovered binding rg. Live dependencies: physics, B. */
export function create_rg(__recoveredScope) {
  return function rg() {
    __recoveredScope.physics.pos.copy(__recoveredScope.B.phys.pos);
    __recoveredScope.physics.vel.set(__recoveredScope.B.phys.vel.x, 0, __recoveredScope.B.phys.vel.z);
    __recoveredScope.physics.yaw = __recoveredScope.B.phys.yaw;
  };
}
/* Recovered binding ig. Live dependencies: B, Qu, rg, G, mg, camera, J, I. */
export function create_ig(__recoveredScope) {
  return function ig() {
    let {
      park: e
    } = __recoveredScope.B;
    __recoveredScope.B.phys.reset(e.x, e.z, __recoveredScope.Qu(e.dx, e.dz));
    __recoveredScope.B.model.update(0, __recoveredScope.B.phys);
    __recoveredScope.rg();
    for (let e of __recoveredScope.B.tracks) e.gap(__recoveredScope.B.phys.pos);
    __recoveredScope.G.set(e.dx, 0, e.dz);
    __recoveredScope.mg(__recoveredScope.camera.position, __recoveredScope.J);
    __recoveredScope.camera.lookAt(__recoveredScope.J);
    __recoveredScope.I.toast(__recoveredScope.B.hall?.zh ?? __recoveredScope.B.home, 2e3);
  };
}
/* Recovered binding og. Live dependencies: B, rider, ag, cg, dg, MathUtils. */
export function create_og(__recoveredScope) {
  return function og(e) {
    let {
      saddle: t
    } = __recoveredScope.B.model;
    t.updateWorldMatrix(true, false);
    t.matrixWorld.decompose(__recoveredScope.rider.root.position, __recoveredScope.rider.root.quaternion, __recoveredScope.ag);
    __recoveredScope.cg && __recoveredScope.dg(e);
    __recoveredScope.rider.update(e, {
      crouch: 0,
      air: false,
      speed: __recoveredScope.B.phys.speed,
      lean: __recoveredScope.MathUtils.clamp(__recoveredScope.B.phys.lateral * (__recoveredScope.B.lean ?? .04), -.45, .45),
      twist: __recoveredScope.B.phys.steer / (__recoveredScope.B.handling.steer ?? 1)
    });
  };
}
