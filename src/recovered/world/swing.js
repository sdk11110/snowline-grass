/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding mn. Live dependencies: sn, on, cn, rn, MathUtils, an, dn, fn, un, ln, pn. */
export function create_mn(__recoveredScope) {
  return class {
    constructor(e) {
      this.root = e;
      this.seats = e.getObjectByName(`placeholder`).userData.seats.map(e => ({
        ...e,
        angle: 0,
        rate: 0,
        taken: false
      }));
    }
    #e(e, t) {
      let n = Math.cos(this.root.rotation.y),
        r = Math.sin(this.root.rotation.y),
        i = e - this.root.position.x,
        a = t - this.root.position.z;
      return [i * n - a * r, i * r + a * n];
    }
    world(e, t, n = {
      x: 0,
      z: 0
    }) {
      let r = Math.cos(this.root.rotation.y),
        i = Math.sin(this.root.rotation.y);
      return n.x = this.root.position.x + e * r + t * i, n.z = this.root.position.z - e * i + t * r, n;
    }
    near(e) {
      let [t, n] = this.#e(e.x, e.z);
      if (Math.abs(n) > __recoveredScope.sn) return null;
      let r = null,
        i = __recoveredScope.on;
      for (let e of this.seats) {
        let n = Math.abs(t - e.x);
        e.taken || n >= i || Math.abs(e.angle) > __recoveredScope.cn || (i = n, r = e);
      }
      return r && {
        seat: r,
        side: Math.sign(n) || 1
      };
    }
    take(e, t) {
      e.taken = true;
      e.side = t;
      e.mount.rotation.y = t > 0 ? Math.PI : 0;
    }
    leave(e) {
      e.taken = false;
    }
    amplitude(e) {
      let t = __recoveredScope.rn / e.length,
        n = .5 * e.rate * e.rate + t * (1 - Math.cos(e.angle));
      return Math.acos(__recoveredScope.MathUtils.clamp(1 - n / t, -1, 1));
    }
    forward(e) {
      return -(e.side ?? 1) * e.rate;
    }
    update(e, t = null) {
      for (let n of this.seats) {
        let r = n.taken ? t : null;
        for (let t = 0; t < e - 1e-6; t += __recoveredScope.an) {
          let i = Math.min(__recoveredScope.an, e - t),
            a = -(__recoveredScope.rn / n.length) * Math.sin(n.angle),
            o = n.taken ? __recoveredScope.dn : __recoveredScope.fn;
          if (r?.pump && this.amplitude(n) < __recoveredScope.un) {
            let e = Math.abs(n.rate) > .05 ? Math.sign(n.rate) : -(n.side ?? 1);
            a += __recoveredScope.ln * e;
          }
          a -= o * n.rate;
          n.rate += a * i;
          n.angle += n.rate * i;
        }
        n.pivot.rotation.x = n.angle;
      }
    }
    mountPose(e, t, n) {
      e.mount.updateWorldMatrix(true, false);
      e.mount.matrixWorld.decompose(t, n, __recoveredScope.pn);
    }
    stepOff(e) {
      let t = e.length * Math.sin(Math.min(this.amplitude(e), Math.PI / 2)),
        n = this.world(e.x, (e.side ?? 1) * Math.max(.85, t + .9)),
        r = Math.cos(this.root.rotation.y),
        i = Math.sin(this.root.rotation.y),
        a = e.side ?? 1;
      return {
        ...n,
        dx: a * i,
        dz: a * r
      };
    }
  };
}
/* Recovered binding Oh. Live dependencies: Vector3. */
export function create_Oh(__recoveredScope) {
  return {
    hips: new __recoveredScope.Vector3(),
    feet: [new __recoveredScope.Vector3(.15, -.48, .3), new __recoveredScope.Vector3(-.15, -.48, .3)],
    grips: [new __recoveredScope.Vector3(.3, .4, .02), new __recoveredScope.Vector3(-.3, .4, .02)],
    kneeOut: .12,
    fold: .08
  };
}
/* Recovered binding kh. Live dependencies: Ah. */
export function create_kh(__recoveredScope) {
  return () => __recoveredScope.Ah.auto ? [`<kbd>S</kbd> stop swinging by itself · <kbd>V</kbd> view · <kbd>A</kbd><kbd>D</kbd> look around · <kbd>E</kbd> jump off`, `Swinging by itself · tap Manual to pump it yourself`] : [`<kbd>W</kbd> swing higher · <kbd>S</kbd> swing by itself · <kbd>V</kbd> view · <kbd>A</kbd><kbd>D</kbd> look around · <kbd>E</kbd> jump off`, `Stick up to swing higher · Auto to let it swing`];
}
/* Recovered binding jh. Live dependencies: stopSpecialAction, Dh, rider, F, physics, ug, Oh, U, I, kh. Writes: Ah, W. */
export function create_jh(__recoveredScope) {
  return function jh({
    seat: e,
    side: t
  }) {
    __recoveredScope.stopSpecialAction();
    __recoveredScope.Dh.take(e, t);
    __recoveredScope.Ah = {
      seat: e,
      walk: __recoveredScope.rider.locomotion === `walk`,
      auto: false,
      look: 0,
      kick: 0
    };
    __recoveredScope.F.gap(__recoveredScope.physics.pos);
    __recoveredScope.W = `swing`;
    __recoveredScope.physics.vel.set(0, 0, 0);
    __recoveredScope.ug();
    __recoveredScope.rider.setLocomotion(`sit`, __recoveredScope.Oh);
    __recoveredScope.U.reset();
    __recoveredScope.I.prompt(...__recoveredScope.kh());
    __recoveredScope.I.toast(`秋千 · Swing`, 1800);
  };
}
/* Recovered binding Mh. Live dependencies: Ah, I, kh. */
export function create_Mh(__recoveredScope) {
  return function Mh() {
    __recoveredScope.Ah.auto = !__recoveredScope.Ah.auto;
    __recoveredScope.I.prompt(...__recoveredScope.kh());
    __recoveredScope.I.toast(__recoveredScope.Ah.auto ? `Swinging by itself` : `Swinging yourself`, 1200);
  };
}
/* Recovered binding Nh. Live dependencies: Ah, Dh, physics, Qu, ug, rider, kp, G, I, F. Writes: Ah, W. */
export function create_Nh(__recoveredScope) {
  return function Nh() {
    if (!__recoveredScope.Ah) return;
    let {
        seat: e,
        walk: t
      } = __recoveredScope.Ah,
      n = __recoveredScope.Dh.stepOff(e);
    __recoveredScope.Dh.leave(e);
    __recoveredScope.Ah = null;
    __recoveredScope.W = `ride`;
    __recoveredScope.physics.reset(n.x, n.z, __recoveredScope.Qu(n.dx, n.dz));
    __recoveredScope.ug();
    __recoveredScope.rider.setLocomotion(t ? `walk` : `ride`);
    __recoveredScope.kp(0, true);
    __recoveredScope.G.set(n.dx, 0, n.dz);
    __recoveredScope.I.prompt(``);
    __recoveredScope.F.gap(__recoveredScope.physics.pos);
  };
}
/* Recovered binding Ph. Live dependencies: Ah, Dh, playerInput, MathUtils, Oh, rider, cg, dg, physics. */
export function create_Ph(__recoveredScope) {
  return function Ph(e) {
    let t = __recoveredScope.Ah,
      {
        seat: n
      } = t;
    __recoveredScope.Dh.update(e, {
      pump: __recoveredScope.playerInput.tuck || t.auto
    });
    let r = __recoveredScope.MathUtils.clamp(__recoveredScope.Dh.forward(n) / 1.4, -1, 1);
    t.kick += (r - t.kick) * (1 - Math.exp(-e * 6));
    let i = t.kick,
      a = Math.max(0, i),
      o = Math.max(0, -i);
    for (let [e, t] of [[0, .15], [1, -.15]]) __recoveredScope.Oh.feet[e].set(t, -.48 + a * .3 + o * .04, .3 + a * .28 - o * .24);
    __recoveredScope.Oh.fold = .08 - a * .2 + o * .12;
    __recoveredScope.Dh.mountPose(n, __recoveredScope.rider.root.position, __recoveredScope.rider.root.quaternion);
    __recoveredScope.cg && __recoveredScope.dg(e);
    __recoveredScope.rider.update(e, {
      crouch: 0,
      air: false,
      speed: 0,
      lean: 0,
      twist: 0
    });
    __recoveredScope.physics.pos.copy(__recoveredScope.rider.root.position);
  };
}
/* Recovered binding Lh. Live dependencies: Ah, Dh, Sf, ep, mp, playerInput, dp, rider, Cp, camera, ap, U, Ih, xf, Fh, q, fg, K, groundHeightfield, J. */
export function create_Lh(__recoveredScope) {
  return function Lh(e) {
    let {
        seat: t
      } = __recoveredScope.Ah,
      n = __recoveredScope.Dh.root,
      r = __recoveredScope.Sf();
    if (__recoveredScope.ep && __recoveredScope.mp()) {
      __recoveredScope.Ah.look += __recoveredScope.playerInput.steer * e * 1.1;
      __recoveredScope.dp.set(0, 0, -1).applyQuaternion(__recoveredScope.rider.root.quaternion).setY(0).normalize();
      __recoveredScope.dp.y = Math.tan(-t.side * t.angle * .4 - .15);
      __recoveredScope.Cp(e, __recoveredScope.dp.normalize(), __recoveredScope.Ah.look);
      __recoveredScope.camera.fov = 72 + r * 10;
      __recoveredScope.camera.updateProjectionMatrix();
      return;
    }
    __recoveredScope.camera.near = __recoveredScope.ap;
    __recoveredScope.Ah.look += __recoveredScope.playerInput.steer * e * 1.1 + __recoveredScope.U.take().yaw;
    __recoveredScope.Dh.world(t.x, 0, __recoveredScope.Ih);
    let i = n.position.y + .6 + t.mount.position.y + t.pivot.position.y;
    __recoveredScope.Dh.mountPose(t, __recoveredScope.xf, __recoveredScope.Fh);
    __recoveredScope.q.set(__recoveredScope.Ih.x, i, __recoveredScope.Ih.z).lerp(__recoveredScope.xf.setY(__recoveredScope.xf.y + .6), .35);
    let a = Math.cos(n.rotation.y),
      o = Math.sin(n.rotation.y),
      s = Math.sign(t.x) * .5,
      c = t.side;
    __recoveredScope.xf.set(s * a + c * o, 0, -s * o + c * a).normalize().applyAxisAngle(__recoveredScope.fg, __recoveredScope.Ah.look);
    __recoveredScope.K.copy(__recoveredScope.q).addScaledVector(__recoveredScope.xf, 5.2 + r * 2);
    __recoveredScope.K.y += .9 + r;
    __recoveredScope.K.y = Math.max(__recoveredScope.K.y, __recoveredScope.groundHeightfield.heightAt(__recoveredScope.K.x, __recoveredScope.K.z) + 1.2);
    __recoveredScope.camera.position.lerp(__recoveredScope.K, 1 - Math.exp(-e * 3));
    __recoveredScope.J.lerp(__recoveredScope.q, 1 - Math.exp(-e * 5));
    __recoveredScope.camera.lookAt(__recoveredScope.J);
    __recoveredScope.camera.fov = 55 + r * 15;
    __recoveredScope.camera.updateProjectionMatrix();
  };
}
