/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding dd. Live dependencies: . */
export function create_dd(__recoveredScope) {
  return (e, t, n) => {
    let r = Math.max(0, Math.min(1, (e - t) / (n - t)));
    return r * r * (3 - 2 * r);
  };
}
/* Recovered binding fd. Live dependencies: . */
export function create_fd(__recoveredScope) {
  return (e, t, n) => e + (t - e) * n;
}
/* Recovered binding pd. Live dependencies: . */
export function create_pd(__recoveredScope) {
  return {
    bank: 0,
    pitch: 0,
    spin: 0,
    hip: [.67, -.13, .02],
    pelvis: 0,
    tilt: .62,
    side: 0,
    turn: .3,
    chin: -.46,
    look: .35,
    armL: [-.5, 1.15, -.35],
    armR: [-.9, .75, -1],
    handL: [0, 0, 0],
    handR: [0, 0, 0]
  };
}
/* Recovered binding gd. Live dependencies: . */
export function create_gd(__recoveredScope) {
  return {
    bank: -1.4,
    pitch: 0,
    hip: [.42, .55, .02],
    pelvis: .7,
    tilt: 1.5,
    side: 0,
    turn: .05,
    chin: .6,
    look: .05,
    armL: [-.6, .25, -1.5],
    armR: [-.6, .25, -1.5],
    handL: [1, .3, .98],
    handR: [1, -.26, .98]
  };
}
/* Recovered binding _d. Live dependencies: . */
export function create__d(__recoveredScope) {
  return {
    bank: .95,
    pitch: 0,
    hip: [.13, -.62, .02],
    pelvis: -1.1,
    tilt: -1.45,
    side: 0,
    turn: .05,
    chin: -.55,
    look: .15,
    armL: [.1, 1.35, -.25],
    armR: [.1, 1.35, -.25],
    handL: [0, 0, 0],
    handR: [0, 0, 0]
  };
}
/* Recovered binding vd. Live dependencies: ud, gd, crashDuration, pd, _d. */
export function create_vd(__recoveredScope) {
  return {
    chest: [[__recoveredScope.ud, __recoveredScope.gd], [1.8, {
      tilt: 1.05,
      hip: [.5, .55, .02],
      pelvis: .45,
      chin: .2,
      handL: [.6, .3, .98],
      handR: [.6, -.26, .98]
    }], [2.1, {
      tilt: .3,
      hip: [.6, .52, .02],
      pelvis: .1,
      handL: [0, .3, .98],
      handR: [0, -.26, .98],
      chin: -.2,
      armL: [-.7, .6, -.8],
      armR: [-.7, .6, -.8]
    }], [2.6, {
      bank: -.55,
      tilt: .75,
      hip: [.55, .25, .02],
      pelvis: .2,
      chin: -.4,
      armL: [-.6, 1, -.5],
      armR: [-.8, .8, -.8]
    }], [__recoveredScope.crashDuration, {
      ...__recoveredScope.pd,
      bank: -.1,
      hip: [.67, -.08, .02]
    }]],
    back: [[__recoveredScope.ud, __recoveredScope._d], [1.85, {
      tilt: -1.05,
      pelvis: -.7,
      bank: .45,
      hip: [.15, -.52, .02],
      turn: .15,
      chin: -.5,
      armL: [.6, .4, -.2],
      armR: [-.9, .5, -.6],
      handL: [1, .3, -.92]
    }], [2.3, {
      tilt: .3,
      pelvis: -.2,
      bank: .25,
      hip: [.24, -.38, .02],
      turn: .3,
      chin: -.5,
      handL: [.4, .3, -.9],
      armR: [-1.2, .5, -.5]
    }], [2.75, {
      tilt: .85,
      pelvis: .05,
      bank: .1,
      hip: [.52, -.2, .02],
      handL: [0, .3, -.9],
      armL: [-.3, .9, -.4]
    }], [__recoveredScope.crashDuration, {
      ...__recoveredScope.pd,
      bank: .06
    }]]
  };
}
/* Recovered binding crashPoseKeyframes. Live dependencies: gd, hd, _d, md. */
export function create_crashPoseKeyframes(__recoveredScope) {
  return {
    toe: {
      label: `Toe edge: onto the knees and chest`,
      rest: `chest`,
      keys: [[.12, {
        bank: -.3,
        hip: [.6, .02, .02],
        tilt: .95,
        chin: -.2,
        armL: [-1.25, .45, -.4],
        armR: [-1.25, .45, -.4]
      }], [.32, {
        bank: -1.05,
        hip: [.45, .42, .02],
        pelvis: .4,
        tilt: .85,
        chin: .1,
        armL: [-1.5, .35, -.2],
        armR: [-1.5, .35, -.2]
      }], [.55, {
        ...__recoveredScope.gd,
        tilt: 1.58,
        chin: .45,
        hip: [.4, .58, .02]
      }], [.8, __recoveredScope.gd]]
    },
    heel: {
      label: `Heel edge: onto the seat and back`,
      rest: `back`,
      keys: [[.1, {
        bank: .25,
        hip: [.58, -.25, .02],
        tilt: .3,
        chin: -.2,
        armL: [-2, .6, -.4],
        armR: [-2, .6, -.4]
      }], [.3, {
        bank: .7,
        hip: [.18, -.45, .02],
        pelvis: -.6,
        tilt: -.35,
        chin: -.65,
        ...__recoveredScope.hd
      }], [.5, {
        ...__recoveredScope._d,
        chin: -.85
      }], [.7, {
        ...__recoveredScope._d,
        chin: -.4,
        tilt: -1.38
      }], [.9, __recoveredScope._d]]
    },
    nose: {
      label: `Nose catch: onto the front shoulder, then the back`,
      rest: `back`,
      keys: [[.12, {
        pitch: -.3,
        hip: [.55, -.05, .15],
        tilt: .8,
        side: .35,
        chin: -.3,
        ...__recoveredScope.md
      }], [.35, {
        pitch: -.4,
        hip: [.28, -.05, .45],
        pelvis: .2,
        tilt: .4,
        side: 1.35,
        chin: -.2,
        look: .6
      }], [.6, {
        pitch: -.15,
        bank: .6,
        hip: [.2, -.4, .25],
        pelvis: -.6,
        tilt: -.8,
        side: .6,
        chin: -.7
      }], [.9, {
        ...__recoveredScope._d,
        pitch: 0
      }]]
    },
    tail: {
      label: `Riding backward: onto the back shoulder, then the back`,
      rest: `back`,
      keys: [[.12, {
        pitch: .3,
        hip: [.55, -.15, -.15],
        tilt: .4,
        side: -.35,
        chin: -.5,
        ...__recoveredScope.hd
      }], [.35, {
        pitch: .4,
        hip: [.28, -.2, -.45],
        pelvis: -.2,
        tilt: 0,
        side: -1.35,
        chin: -.6,
        look: 0
      }], [.6, {
        pitch: .15,
        bank: .65,
        hip: [.2, -.45, -.25],
        pelvis: -.8,
        tilt: -1,
        side: -.6,
        chin: -.8
      }], [.9, __recoveredScope._d]]
    },
    roll: {
      label: `Fast: a tumble, landing on the back`,
      rest: `back`,
      keys: [[.12, {
        spin: -.35,
        hip: [.45, -.05, .02],
        pelvis: .5,
        tilt: 1.15,
        chin: -.6,
        ...__recoveredScope.md
      }], [.35, {
        spin: -1.7
      }], [.6, {
        spin: -3.7
      }], [.85, {
        spin: -5.6,
        pelvis: .2,
        tilt: .6
      }], [1, {
        spin: -Math.PI * 2,
        bank: .5,
        hip: [.25, -.4, .02],
        pelvis: -.6,
        tilt: -.8,
        chin: -.7,
        ...__recoveredScope.hd
      }], [1.25, __recoveredScope._d]]
    },
    slam: {
      label: `Hard landing: down on the seat`,
      rest: `back`,
      keys: [[.08, {
        hip: [.36, -.18, .02],
        tilt: 1,
        chin: -.6,
        bank: .08
      }], [.25, {
        hip: [.15, -.45, .02],
        pelvis: -.5,
        tilt: -.25,
        bank: .4,
        chin: -.5,
        ...__recoveredScope.hd
      }], [.5, {
        tilt: -1.15,
        bank: .7,
        chin: -.85,
        hip: [.13, -.55, .02],
        pelvis: -.9,
        armL: [.2, 1.2, -.25],
        armR: [.2, 1.2, -.25]
      }], [.8, __recoveredScope._d]]
    }
  };
}
/* Recovered binding selectCrashMotion. Live dependencies: . */
export function create_selectCrashMotion(__recoveredScope) {
  return function selectCrashMotion({
    side: e = 0,
    forward: t = 1,
    speed: n = 0,
    reason: r = ``
  } = {}) {
    return e > 0 ? `toe` : e < 0 ? `heel` : r === `hard landing` ? `slam` : t < 0 ? `tail` : n > 19 ? `roll` : `nose`;
  };
}
/* Recovered binding Sd. Live dependencies: fd. */
export function create_Sd(__recoveredScope) {
  return (e, t, n) => Array.isArray(e) ? e.map((e, r) => __recoveredScope.fd(e, t[r], n)) : __recoveredScope.fd(e, t, n);
}
/* Recovered binding Cd. Live dependencies: selectCrashMotion, xd, dd, Sd, crashPoseKeyframes. */
export function create_Cd(__recoveredScope) {
  return function Cd(e, t = {}) {
    let n = t.kind || __recoveredScope.selectCrashMotion(t),
      r = __recoveredScope.xd[n],
      i = 0;
    for (; i < r.length - 2 && e >= r[i + 1][0];) i++;
    let [a, o] = r[i],
      [s, c] = r[i + 1],
      l = __recoveredScope.dd(e, a, s),
      u = {};
    for (let e of Object.keys(o)) u[e] = __recoveredScope.Sd(o[e], c[e], l);
    return u.kind = n, u.rest = __recoveredScope.crashPoseKeyframes[n].rest, u.phase = e < .28 ? `impact` : e < 1.05 ? `slide` : e < 1.5 ? `settle` : `get-up`, u.hands = [u.handL, u.handR], u.plant = Math.max(u.handL[0], u.handR[0]), u;
  };
}
/* Recovered binding Id. Live dependencies: Ad, jd, wd, Td, Nd. */
export function create_Id(__recoveredScope) {
  return function Id(e, t, n) {
    return t.setFromEuler(__recoveredScope.Ad.set(e.pitch, 0, e.bank)), __recoveredScope.jd.set(-Math.sign(e.bank) * __recoveredScope.wd * Math.min(1, Math.abs(e.bank) / .25), 0, Math.sign(e.pitch) * __recoveredScope.Td * Math.min(1, Math.abs(e.pitch) / .25)), n.copy(__recoveredScope.jd).sub(__recoveredScope.Nd.copy(__recoveredScope.jd).applyQuaternion(t));
  };
}
/* Recovered binding Ld. Live dependencies: Id, Dd, Md, Od, Fd, jd, Ed. */
export function create_Ld(__recoveredScope) {
  return function Ld(e, t) {
    __recoveredScope.Id(t, __recoveredScope.Dd, __recoveredScope.Md);
    __recoveredScope.Od.setFromAxisAngle(__recoveredScope.Fd, t.spin);
    e.quaternion.copy(__recoveredScope.Od).multiply(__recoveredScope.Dd);
    __recoveredScope.jd.set(0, __recoveredScope.Ed, 0);
    e.position.copy(__recoveredScope.Md).sub(__recoveredScope.jd).applyQuaternion(__recoveredScope.Od).add(__recoveredScope.jd);
  };
}
/* Recovered binding Rd. Live dependencies: Id, Dd, Md, Pd, kd, Nd, T, Ad. */
export function create_Rd(__recoveredScope) {
  return function Rd(e, t) {
    __recoveredScope.Id(t, __recoveredScope.Dd, __recoveredScope.Md);
    let n = __recoveredScope.Pd.copy(__recoveredScope.kd).invert().multiply(__recoveredScope.Dd.clone().invert()),
      r = __recoveredScope.Nd.set(t.hip[2], t.hip[0], t.hip[1]).applyQuaternion(__recoveredScope.kd).sub(__recoveredScope.Md).applyQuaternion(n);
    e.hips.position.copy(r);
    let i = new __recoveredScope.T().setFromEuler(__recoveredScope.Ad.set(t.pelvis, t.turn, -t.side * .6));
    e.hips.quaternion.copy(n).multiply(__recoveredScope.kd).multiply(i);
    let a = new __recoveredScope.T().setFromEuler(__recoveredScope.Ad.set(t.tilt, t.turn * 1.5, -t.side));
    e.torso.quaternion.copy(i).invert().multiply(a);
    e.head.rotation.set(t.chin, t.look, t.side * .3);
    for (let [n, [r, i, a], o] of [[e.armL, t.armL, 1], [e.armR, t.armR, -1]]) {
      n.sh.rotation.set(r, 0, o * i);
      n.el.rotation.set(a, 0, o * .1);
    }
  };
}
/* Recovered binding zd. Live dependencies: Vector3. */
export function create_zd(__recoveredScope) {
  return function zd(e, t, n, r = new __recoveredScope.Vector3()) {
    return e.localToWorld(r.set(t[2], 0, -t[1])), r.y = n.heightAt(r.x, r.z) + .06, r;
  };
}
/* Recovered binding Bd. Live dependencies: dd, shakeOffDuration. */
export function create_Bd(__recoveredScope) {
  return function Bd(e) {
    let t = Math.max(0, e),
      n = __recoveredScope.dd(t, 0, .12) * (1 - __recoveredScope.dd(t, .7, 1)),
      r = __recoveredScope.dd(t, .75, .9) * (1 - __recoveredScope.dd(t, 1.35, 1.5)),
      i = __recoveredScope.dd(t, 1.4, 1.55) * (1 - __recoveredScope.dd(t, 2.15, __recoveredScope.shakeOffDuration));
    return {
      head: Math.sin(t * Math.PI * 2 * 3.2) * .55 * n,
      nod: Math.sin(t * Math.PI * 2 * 6.4) * .08 * n,
      shoulder: Math.sin(t * 23) * .09 * n,
      sleeve: r,
      sleeveStroke: Math.sin((t - .75) * Math.PI * 2 * 2.6),
      thighs: i,
      thighStroke: Math.sin((t - 1.4) * Math.PI * 2 * 2.4)
    };
  };
}
/* Recovered binding Vd. Live dependencies: Bd, fd. */
export function create_Vd(__recoveredScope) {
  return function Vd(e, t) {
    let n = __recoveredScope.Bd(t);
    e.head.rotation.y += n.head;
    e.head.rotation.x += n.nod;
    e.head.rotation.z += n.shoulder * .5;
    e.torso.rotation.z += n.shoulder;
    let r = (e, t, n, r) => {
      e.sh.rotation.set(__recoveredScope.fd(e.sh.rotation.x, t[0], r), __recoveredScope.fd(e.sh.rotation.y, t[1], r), __recoveredScope.fd(e.sh.rotation.z, t[2], r));
      e.el.rotation.set(__recoveredScope.fd(e.el.rotation.x, n[0], r), __recoveredScope.fd(e.el.rotation.y, n[1], r), __recoveredScope.fd(e.el.rotation.z, n[2], r));
    };
    if (n.sleeve > 0) {
      let t = n.sleeveStroke;
      r(e.armR, [-.85 + t * .35, 0, .55 + t * .15], [-1.55 - t * .25, 0, 0], n.sleeve);
      r(e.armL, [-.35, 0, .55], [-.3, 0, .1], n.sleeve);
      e.head.rotation.x += -.25 * n.sleeve;
      e.head.rotation.y += -.3 * n.sleeve;
    }
    if (n.thighs > 0) {
      let t = n.thighStroke;
      e.torso.rotation.x += .35 * n.thighs;
      e.head.rotation.x += -.2 * n.thighs;
      r(e.armL, [-.45 + t * .3, 0, .12], [-.35 - t * .2, 0, 0], n.thighs);
      r(e.armR, [-.45 - t * .3, 0, -.12], [-.35 + t * .2, 0, 0], n.thighs);
    }
  };
}
/* Recovered binding Wd. Live dependencies: Ud. */
export function create_Wd(__recoveredScope) {
  return function Wd(e, t, n) {
    e.rotation.x = t;
    Math.abs(t % (Math.PI * 2)) < 1e-6 ? e.position.set(0, 0, 0) : (__recoveredScope.Ud.set(0, n, 0).applyQuaternion(e.quaternion), e.position.set(-__recoveredScope.Ud.x, n - __recoveredScope.Ud.y, -__recoveredScope.Ud.z));
  };
}
/* Recovered binding Gd. Live dependencies: Hd. */
export function create_Gd(__recoveredScope) {
  return function Gd(e, t, n = false) {
    e.updateMatrixWorld(true);
    e.traverseVisible(e => {
      e.isSkinnedMesh && e.skeleton.update();
    });
    let r = -1 / 0;
    return e.traverseVisible(e => {
      if (e.isMesh && e.geometry.attributes.position) for (let n = 0; n < e.geometry.attributes.position.count; n++) {
        e.getVertexPosition(n, __recoveredScope.Hd).applyMatrix4(e.matrixWorld);
        r = Math.max(r, t.heightAt(__recoveredScope.Hd.x, __recoveredScope.Hd.z) + .025 - __recoveredScope.Hd.y);
      }
    }), r = Number.isFinite(r) ? n ? r : Math.max(0, r) : 0, e.position.y += r, e.updateMatrixWorld(true), r;
  };
}
/* Recovered binding Kd. Live dependencies: . */
export function create_Kd(__recoveredScope) {
  return class {
    constructor(e, t) {
      this.names = Object.keys(e);
      this.spring = Object.fromEntries(this.names.map(n => [n, t[e[n]]]));
      this.stiffest = Math.max(...Object.values(t).map(([e]) => e));
      this.x = {};
      this.v = {};
      this.tgt = {};
      for (let e of this.names) this.x[e] = this.v[e] = this.tgt[e] = 0;
      this.snap = true;
    }
    settle(e) {
      let {
        x: t,
        v: n,
        tgt: r
      } = this;
      if (this.snap) {
        for (let e of this.names) {
          t[e] = r[e];
          n[e] = 0;
        }
        return this.snap = false, t;
      }
      let i = Math.max(1, Math.ceil(e * this.stiffest / .25)),
        a = e / i;
      for (let e of this.names) {
        let [o, s] = this.spring[e],
          c = t[e],
          l = n[e];
        for (let t = 0; t < i; t++) {
          l += (o * o * (r[e] - c) - 2 * s * o * l) * a;
          c += l * a;
        }
        t[e] = c;
        n[e] = l;
      }
      return t;
    }
  };
}
/* Recovered binding Zd. Live dependencies: c. */
export function create_Zd(__recoveredScope) {
  return function Zd(e, t, n, r = 0, i = 0, a = 0) {
    let o = new __recoveredScope.c(e, t);
    return o.position.set(r, i, a), o.castShadow = true, n.add(o), o;
  };
}
/* Recovered binding Qd. Live dependencies: qd, W. */
export function create_Qd(__recoveredScope) {
  return function Qd(e = 1, t = __recoveredScope.qd.thick) {
    let n = __recoveredScope.qd.length,
      r = n / 2,
      i = .1,
      a = new __recoveredScope.W(1, t, n, 4, 1, 56).translate(0, t / 2, 0),
      o = a.attributes.position;
    for (let t = 0; t < o.count; t++) {
      let n = o.getZ(t),
        a = Math.abs(n) / r,
        s = Math.max(0, Math.abs(n) - (r - i)) / i,
        c = (__recoveredScope.qd.waist + (__recoveredScope.qd.tip - __recoveredScope.qd.waist) * a * a) * Math.sqrt(Math.max(.05, 1 - s ** 4)) * e;
      o.setX(t, o.getX(t) * c);
      let l = Math.max(0, Math.abs(n) - (r - .2));
      o.setY(t, o.getY(t) + l * l * (n > 0 ? 1.9 : 1.6));
    }
    return a.computeVertexNormals(), a;
  };
}
/* Recovered binding $d. Live dependencies: g, qd, Zd, Qd, Xd, W. */
export function create_Dollard(__recoveredScope) {
  return function $d() {
    let e = new __recoveredScope.g();
    e.name = `Ski`;
    let t = new __recoveredScope.g();
    t.position.y = -__recoveredScope.qd.sole;
    e.add(t);
    __recoveredScope.Zd(__recoveredScope.Qd(), __recoveredScope.Xd.top, t).receiveShadow = true;
    __recoveredScope.Zd(__recoveredScope.Qd(1.04, .007), __recoveredScope.Xd.navy, t, 0, -.002, 0).castShadow = false;
    let n = __recoveredScope.qd.length - .42;
    __recoveredScope.Zd(new __recoveredScope.W(.026, .003, n), __recoveredScope.Xd.stripe, t, 0, __recoveredScope.qd.thick + .001, 0);
    for (let e of [-1, 1]) __recoveredScope.Zd(new __recoveredScope.W(.06, .003, .05), __recoveredScope.Xd.accent, t, 0, __recoveredScope.qd.thick + .002, e * (n / 2 - .08));
    let r = new __recoveredScope.g();
    r.position.y = __recoveredScope.qd.thick;
    t.add(r);
    __recoveredScope.Zd(new __recoveredScope.W(.075, .015, .44), __recoveredScope.Xd.binding, r, 0, .0075, 0);
    __recoveredScope.Zd(new __recoveredScope.W(.09, .045, .07), __recoveredScope.Xd.binding, r, 0, .036, .205);
    __recoveredScope.Zd(new __recoveredScope.W(.06, .012, .05), __recoveredScope.Xd.navy, r, 0, .064, .21);
    __recoveredScope.Zd(new __recoveredScope.W(.095, .06, .085), __recoveredScope.Xd.binding, r, 0, .044, -.2);
    __recoveredScope.Zd(new __recoveredScope.W(.05, .016, .085), __recoveredScope.Xd.navy, r, 0, .08, -.215).rotation.x = -.25;
    for (let e of [-1, 1]) __recoveredScope.Zd(new __recoveredScope.W(.012, .03, .07), __recoveredScope.Xd.navy, r, e * .052, .03, -.15);
    return e;
  };
}
/* Recovered binding ef. Live dependencies: g, Jd, Zd, d, Xd, $e, He, st. */
export function create_ef(__recoveredScope) {
  return function ef() {
    let e = new __recoveredScope.g();
    e.name = `Pole`;
    let t = __recoveredScope.Jd.length;
    return __recoveredScope.Zd(new __recoveredScope.d(.011, .009, t - .06, 7).translate(0, -(t + .06) / 2, 0), __recoveredScope.Xd.steel, e), __recoveredScope.Zd(new __recoveredScope.d(.024, .02, .15, 9), __recoveredScope.Xd.navy, e, 0, 0, 0), __recoveredScope.Zd(new __recoveredScope.$e(.026, 9, 6), __recoveredScope.Xd.navy, e, 0, .075, 0), __recoveredScope.Zd(new __recoveredScope.d(.017, .017, .015, 9), __recoveredScope.Xd.accent, e, 0, -.082, 0), __recoveredScope.Zd(new __recoveredScope.He(.035, .007, 5, 12), __recoveredScope.Xd.binding, e, 0, .06, .028).rotation.x = 1.2, __recoveredScope.Zd(new __recoveredScope.d(.055, .055, .012, 14), __recoveredScope.Xd.navy, e, 0, -t + .09, 0), __recoveredScope.Zd(new __recoveredScope.He(.055, .006, 5, 16), __recoveredScope.Xd.binding, e, 0, -t + .09, 0).rotation.x = Math.PI / 2, __recoveredScope.Zd(new __recoveredScope.st(.009, .05, 6).rotateX(Math.PI), __recoveredScope.Xd.steel, e, 0, -t + .025, 0), e;
  };
}
/* Recovered binding tf. Live dependencies: . */
export function create_tf(__recoveredScope) {
  return {
    p: [21, .88],
    t: [17, .78],
    h: [15, .7],
    hand: [24, .62],
    pole: [38, .9],
    foot: [23, 1],
    knee: [23, 1],
    roll: [12, 1]
  };
}
/* Recovered binding nf. Live dependencies: . */
export function create_nf(__recoveredScope) {
  return {
    px: `p`,
    py: `p`,
    pz: `p`,
    pPitch: `p`,
    pYaw: `p`,
    pRoll: `p`,
    tPitch: `t`,
    tYaw: `t`,
    tRoll: `t`,
    hPitch: `h`,
    hYaw: `h`,
    hRoll: `h`,
    hlx: `hand`,
    hly: `hand`,
    hlz: `hand`,
    hrx: `hand`,
    hry: `hand`,
    hrz: `hand`,
    kneeOut: `knee`,
    kneeShift: `knee`,
    lx: `foot`,
    ly: `foot`,
    lz: `foot`,
    lYaw: `foot`,
    lPitch: `foot`,
    lRoll: `foot`,
    rx: `foot`,
    ry: `foot`,
    rz: `foot`,
    rYaw: `foot`,
    rPitch: `foot`,
    rRoll: `foot`,
    plx: `pole`,
    ply: `pole`,
    plz: `pole`,
    prx: `pole`,
    pry: `pole`,
    prz: `pole`,
    roll: `roll`
  };
}
/* Recovered binding lf. Live dependencies: . */
export function create_lf(__recoveredScope) {
  return {
    front: {
      hand: [.28, .18, .5],
      tip: [.36, 0, .22]
    },
    back: {
      hand: [.3, -.02, -.08],
      tip: [.4, 0, -.5]
    }
  };
}
/* Recovered binding uf. Live dependencies: Kd, nf, tf, lf, af, of, rf, sf, cf, Yd. */
export function create_uf(__recoveredScope) {
  return class extends __recoveredScope.Kd {
    constructor() {
      super(__recoveredScope.nf, __recoveredScope.tf);
      this.ground = 1;
      this.plantT = 9;
      this.plantSide = 1;
      this.turnSide = 0;
      this.skateW = 0;
      this.poleW = 0;
      this.kick = 0;
      this.kickSide = 1;
    }
    update(e, t, n) {
      this.ground += (+!t.air - this.ground) * (1 - Math.exp(-e * 10));
      let r = t.skate?.on && !t.air && t.skate.style !== `board` ? t.skate : null;
      r && r.kick >= 0 ? (this.kick = r.kick, this.kickSide = r.side) : r && (this.kick = 1);
      let i = 1 - Math.exp(-e * 8);
      return this.snap && (this.skateW = +!!r), this.skateW += (+!!r - this.skateW) * i, r && (this.poleW += (+(r.style === `pole`) - this.poleW) * i), this.#i(e, t, n), this.#t(this.skateW), this.settle(e);
    }
    #e(e, t, n, r) {
      let {
          front: i,
          back: a
        } = __recoveredScope.lf,
        o,
        s,
        c,
        l = 0;
      n ? e < __recoveredScope.af ? (o = i, s = i, c = 0) : e < __recoveredScope.of ? (o = i, s = a, c = __recoveredScope.rf.smootherstep(e, __recoveredScope.af, __recoveredScope.of)) : (o = a, s = a, c = 0, l = .1 * __recoveredScope.rf.smoothstep(e, __recoveredScope.of, 1)) : (o = a, s = i, c = __recoveredScope.rf.smootherstep(e, 0, 1), l = .1 + .08 * Math.sin(Math.PI * e) - .1 * __recoveredScope.rf.smoothstep(e, .75, 1));
      for (let e = 0; e < 3; e++) {
        r.hand[e] = o.hand[e] + (s.hand[e] - o.hand[e]) * c;
        r.tip[e] = o.tip[e] + (s.tip[e] - o.tip[e]) * c;
      }
      return r.hand[0] *= t, r.tip[0] *= t, r.tip[1] += l, r;
    }
    #t(e) {
      if (e < .001) return;
      let t = this.tgt,
        n = this.kick,
        r = this.poleW,
        i = 1 - r,
        a = this.kickSide,
        o = (n, r) => {
          t[n] += (r - t[n]) * e;
        },
        s = __recoveredScope.rf.smoothstep(n, __recoveredScope.af, __recoveredScope.of) * (1 - __recoveredScope.rf.smoothstep(n, __recoveredScope.of, .95)),
        c = Math.sin(Math.PI * __recoveredScope.rf.clamp((n - .05) / .75, 0, 1)),
        l = __recoveredScope.rf.smootherstep(n, .05, .75),
        u = __recoveredScope.sf * (2 * l - 1) * i,
        d = __recoveredScope.cf.lift * Math.sin(Math.PI * l) * i,
        f = .125 + (__recoveredScope.cf.out - .125) * i;
      o(`lz`, a > 0 ? u : -u);
      o(`rz`, a > 0 ? -u : u);
      o(`ly`, a > 0 ? d : 0);
      o(`ry`, a > 0 ? 0 : d);
      o(`lx`, f);
      o(`rx`, -f);
      o(`lYaw`, __recoveredScope.cf.yaw * i);
      o(`rYaw`, -__recoveredScope.cf.yaw * i);
      o(`lRoll`, __recoveredScope.cf.edge * i);
      o(`rRoll`, -__recoveredScope.cf.edge * i);
      o(`lPitch`, 0);
      o(`rPitch`, 0);
      o(`kneeOut`, .06 - .25 * i);
      o(`kneeShift`, 0);
      o(`roll`, t.roll * .3);
      o(`px`, .02 * a * i);
      o(`py`, .66 - .03 * s * i - .1 * c * r);
      o(`pz`, -.02);
      o(`pPitch`, .16 + .3 * c * r);
      o(`pYaw`, -.14 * a * (2 * l - 1) * i);
      o(`pRoll`, 0);
      o(`tPitch`, .24 + .4 * c * r);
      o(`tYaw`, .2 * a * (2 * l - 1) * i);
      o(`tRoll`, 0);
      o(`hPitch`, -.3 - .35 * c * r);
      o(`hYaw`, 0);
      o(`hRoll`, 0);
      let p = this.#e(n, 1, r > .5 || a < 0, this._l ??= {
          hand: [0, 0, 0],
          tip: [0, 0, 0]
        }),
        m = this.#e(n, -1, r > .5 || a > 0, this._r ??= {
          hand: [0, 0, 0],
          tip: [0, 0, 0]
        }),
        h = .1 * c * r;
      o(`hlx`, p.hand[0]);
      o(`hly`, p.hand[1] - h);
      o(`hlz`, p.hand[2] + h);
      o(`hrx`, m.hand[0]);
      o(`hry`, m.hand[1] - h);
      o(`hrz`, m.hand[2] + h);
      o(`plx`, p.tip[0]);
      o(`ply`, p.tip[1]);
      o(`plz`, p.tip[2]);
      o(`prx`, m.tip[0]);
      o(`pry`, m.tip[1]);
      o(`prz`, m.tip[2]);
    }
    #n(e, t, n, r, i, a, o) {
      if (o <= 0) return;
      let s = this.tgt;
      s.hlx += (e - s.hlx) * o;
      s.hly += (t - s.hly) * o;
      s.hlz += (n - s.hlz) * o;
      s.hrx += (r - s.hrx) * o;
      s.hry += (i - s.hry) * o;
      s.hrz += (a - s.hrz) * o;
    }
    #r(e, t, n, r, i, a, o) {
      if (o <= 0) return;
      let s = this.tgt;
      s.plx += (e - s.plx) * o;
      s.ply += (t - s.ply) * o;
      s.plz += (n - s.plz) * o;
      s.prx += (r - s.prx) * o;
      s.pry += (i - s.pry) * o;
      s.prz += (a - s.prz) * o;
    }
    #i(e, t, n) {
      let r = this.tgt,
        i = this.ground,
        a = 1 - i,
        o = __recoveredScope.rf.clamp(t.lean / .7, -1, 1) * i,
        s = +!!t.brake * i,
        c = Math.max(+!!t.tuck, .5 * __recoveredScope.rf.smoothstep(t.speed, 16, 28)) * i * (1 - s),
        l = (t.charge || 0) * i,
        u = i * (1 - __recoveredScope.rf.smoothstep(t.speed, .3, 1.2)) * (1 - s),
        d = .75 * t.lean * i;
      r.roll = d;
      r.px = .06 * o;
      r.py = .69 - .07 * Math.abs(o);
      r.pz = -.04;
      r.pPitch = .12;
      r.pYaw = -.15 * o;
      r.pRoll = .15 * d;
      r.tPitch = .18;
      r.tYaw = -.05 * o;
      r.tRoll = .35 * d;
      r.hPitch = -.28;
      r.hYaw = .35 * o;
      r.hRoll = .3 * d;
      r.hlx = .3;
      r.hly = .1;
      r.hlz = .3 + .06 * o;
      r.hrx = -.3;
      r.hry = .1;
      r.hrz = .3 - .06 * o;
      r.plx = .45;
      r.ply = .05;
      r.plz = -.55;
      r.prx = -.45;
      r.pry = .05;
      r.prz = -.55;
      r.kneeOut = .06;
      r.kneeShift = .5 * o;
      r.lx = __recoveredScope.Yd;
      r.ly = 0;
      r.lz = .06 * Math.max(0, o);
      r.rx = -.125;
      r.ry = 0;
      r.rz = .06 * Math.max(0, -o);
      r.lYaw = r.rYaw = r.lPitch = r.rPitch = 0;
      r.lRoll = r.rRoll = -.15 * o;
      let f = Math.abs(o) > .18 ? Math.sign(o) : 0;
      if (f && f !== this.turnSide && i > .9 && !s && t.speed > 2.5 && this.plantT > .55 && (this.plantT = 0, this.plantSide = f), f && (this.turnSide = f), this.plantT = Math.min(this.plantT + e, 9), this.plantT < .5) {
        let e = Math.sin(Math.PI * this.plantT / .5) * i;
        this.plantSide > 0 ? (r.hlx += (.3 - r.hlx) * e, r.hly += (-.02 - r.hly) * e, r.hlz += (.44 - r.hlz) * e, r.plx += (.34 - r.plx) * e, r.ply += (0 - r.ply) * e, r.plz += (.62 - r.plz) * e) : (r.hrx += (-.3 - r.hrx) * e, r.hry += (-.02 - r.hry) * e, r.hrz += (.44 - r.hrz) * e, r.prx += (-.34 - r.prx) * e, r.pry += (0 - r.pry) * e, r.prz += (.62 - r.prz) * e);
      }
      if (c > 0 && (r.py -= .2 * c, r.pz -= .07 * c, r.pPitch += .45 * c, r.tPitch += .55 * c, r.hPitch -= .75 * c, this.#n(.08, .11, .7, -.08, .11, .7, c), this.#r(.42, .85, -.9, -.42, .85, -.9, c)), l > .001 && (r.py -= .06 * l, r.tPitch += .08 * l, this.#n(.24, .02, .38, -.24, .02, .38, .6 * l), this.#r(.4, .25, -.9, -.4, .25, -.9, .6 * l)), s > 0 && (r.lYaw -= .22 * s, r.rYaw += .22 * s, r.lx += .11 * s, r.rx -= .11 * s, r.lRoll += .15 * s, r.rRoll -= .15 * s, r.kneeOut -= .45 * s, r.py -= .05 * s, r.pz -= .03 * s, this.#n(.34, .08, .2, -.34, .08, .2, s), this.#r(.64, .02, -.1, -.64, .02, -.1, s)), a > .001) {
        let e = .07 * Math.sin(5.2 * n);
        r.ly += .08 * a;
        r.ry += .08 * a;
        r.lPitch -= (.1 + e) * a;
        r.rPitch -= (.1 - e) * a;
        r.py -= .04 * a;
        r.tPitch += .1 * a;
        let t = n * 6.5,
          i = .08;
        this.#n(.42 + Math.sin(t) * i, .26 + Math.cos(t) * i, .12, -.42 - Math.sin(t + 2.1) * i, .26 + Math.cos(t + 2.1) * i, .1, .55 * a);
        this.#r(.46, .1, -.75, -.46, .1, -.75, a);
      }
      t.landing > 0 && (r.py -= .12 * Math.min(1, t.landing * 2) * i, r.tPitch += .1 * i);
      let p = __recoveredScope.rf.smoothstep(t.slip || 0, 1.5, 5) * i;
      p > .001 && (r.py -= .03 * p - (.6 * Math.sin(21 * n) + .4 * Math.sin(33 * n + 2)) * .012 * p, r.hlx += .08 * p, r.hrx -= .08 * p, r.hly += .1 * p, r.hry += .1 * p);
      u > .001 && (r.py += .02 * u, r.tPitch -= .08 * u, r.hYaw += (.5 * Math.sin(.55 * n) + .14 * Math.sin(1.31 * n)) * u, r.px += .02 * Math.sin(.37 * n) * u, this.#n(.26, .02, .2, -.26, .02, .2, .7 * u), this.#r(.42, 0, .12, -.42, 0, .12, u));
    }
  };
}
/* Recovered binding df. Live dependencies: . */
export function create_df(__recoveredScope) {
  return {
    edge: [13, 1],
    lift: [17, .55],
    p: [19, .72],
    t: [15, .68],
    gaze: [11, .85],
    hand: [20, .55],
    knee: [23, 1]
  };
}
/* Recovered binding ff. Live dependencies: . */
export function create_ff(__recoveredScope) {
  return {
    edge: `edge`,
    py: `lift`,
    px: `p`,
    pz: `p`,
    pPitch: `p`,
    pYaw: `p`,
    pRoll: `p`,
    tPitch: `t`,
    tYaw: `t`,
    tRoll: `t`,
    gYaw: `gaze`,
    gPitch: `gaze`,
    gTilt: `gaze`,
    hlx: `hand`,
    hly: `hand`,
    hlz: `hand`,
    hrx: `hand`,
    hry: `hand`,
    hrz: `hand`,
    kneeOut: `knee`,
    kneeShift: `knee`
  };
}
/* Recovered binding wf. Live dependencies: . */
export function create_wf(__recoveredScope) {
  return (e, t, n, r) => {
    for (let i = 0; i < 3; i++) r[i] = e[i] + (t[i] - e[i]) * n;
    return r;
  };
}
/* Recovered binding Tf. Live dependencies: Kd, ff, df, Sf, wf, xf, pf, Cf, hf, mf, gf, _f, vf, yf. */
export function create_Tf(__recoveredScope) {
  return class extends __recoveredScope.Kd {
    constructor() {
      super(__recoveredScope.ff, __recoveredScope.df);
      this.ground = 1;
      this.lean = 0;
      this.leanRate = 0;
      this.skateW = 0;
      this.kickW = 0;
      this.kick = 0;
      this.back = {
        x: 0,
        y: 0,
        z: 0,
        yaw: 0,
        pitch: 0,
        w: 0
      };
      this._b = [0, 0, 0];
    }
    update(e, t, n) {
      if (e > 0) {
        this.ground += (+!t.air - this.ground) * (1 - Math.exp(-e * 10));
        let n = ((t.lean || 0) - this.lean) / e;
        this.leanRate += (n - this.leanRate) * (1 - Math.exp(-e * 12));
      }
      this.lean = t.lean || 0;
      let r = t.skate?.on && !t.air ? t.skate : null,
        i = r && r.kick >= 0;
      return i && (this.kick = r.kick), this.snap && (this.skateW = +!!r, this.kickW = +!!i), this.skateW += (+!!r - this.skateW) * (1 - Math.exp(-e * (r ? 9 : 6))), this.kickW += (+!!i - this.kickW) * (1 - Math.exp(-e * 10)), this.#i(t, n), this.#n(this.skateW), this.#t(), this.settle(e);
    }
    #e(e, t) {
      if (e < __recoveredScope.Sf) return __recoveredScope.wf(__recoveredScope.xf.ready, __recoveredScope.xf.plant, __recoveredScope.pf.smoothstep(e, 0, __recoveredScope.Sf), t);
      if (e < __recoveredScope.Cf) return __recoveredScope.wf(__recoveredScope.xf.plant, __recoveredScope.xf.end, __recoveredScope.pf.smootherstep(e, __recoveredScope.Sf, __recoveredScope.Cf), t);
      let n = (e - __recoveredScope.Cf) / .4;
      return __recoveredScope.wf(__recoveredScope.xf.end, __recoveredScope.xf.ready, __recoveredScope.pf.smootherstep(n, 0, 1), t), t[1] += __recoveredScope.xf.swing * Math.sin(Math.PI * Math.min(1, n * 1.3)), t;
    }
    #t() {
      let e = this.back,
        t = this.skateW,
        n = this.kickW,
        r = this.kick,
        i = __recoveredScope.wf(__recoveredScope.xf.rest, this.#e(r, this._b), n, this._b);
      e.w = t;
      e.x = i[0];
      e.y = i[1];
      e.z = i[2];
      let a = __recoveredScope.pf.smoothstep(r, .4, __recoveredScope.Cf) * (1 - __recoveredScope.pf.smoothstep(r, .7, .9));
      e.yaw = 1.1 + .45 * n;
      e.pitch = .45 * a * n;
    }
    #n(e) {
      if (e < .001) return;
      let t = this.tgt,
        n = this.kick,
        r = this.kickW,
        i = r * __recoveredScope.pf.smoothstep(n, __recoveredScope.Sf, __recoveredScope.Cf) * (1 - __recoveredScope.pf.smoothstep(n, __recoveredScope.Cf, .85)),
        a = r * Math.sin(2 * Math.PI * n),
        o = (n, r) => {
          t[n] += (r - t[n]) * e;
        };
      o(`px`, .1 + .03 * i);
      o(`py`, .67 - .05 * i);
      o(`pz`, -.06);
      o(`pPitch`, .12);
      o(`pYaw`, .45 + (t.pYaw - .28) - .06 * a);
      o(`pRoll`, .04 * i);
      o(`tPitch`, .3 + .08 * i);
      o(`tYaw`, .45 + .06 * a);
      o(`tRoll`, 0);
      o(`gYaw`, t.gYaw * .5);
      o(`gPitch`, .16);
      o(`kneeOut`, .1);
      o(`kneeShift`, .3);
      let s = t.pYaw + t.tYaw,
        c = Math.sin(s),
        l = Math.cos(s),
        u = .32,
        d = .18,
        f = -.3,
        p = .02 + .04 * Math.abs(a),
        m = .1 + .16 * a;
      o(`hlx`, u * l + d * c);
      o(`hly`, .08);
      o(`hlz`, d * l - u * c);
      o(`hrx`, f * l + m * c);
      o(`hry`, p);
      o(`hrz`, m * l - f * c);
    }
    #r(e, t, n, r, i, a, o) {
      if (o <= 0) return;
      let s = this.tgt;
      s.hlx += (e - s.hlx) * o;
      s.hly += (t - s.hly) * o;
      s.hlz += (n - s.hlz) * o;
      s.hrx += (r - s.hrx) * o;
      s.hry += (i - s.hry) * o;
      s.hrz += (a - s.hrz) * o;
    }
    #i(e, t) {
      let n = this.tgt,
        r = this.ground,
        i = 1 - r,
        a = this.lean,
        o = e.leanAim ?? a,
        s = __recoveredScope.pf.clamp((e.twist || 0) * 2, -1, 1),
        c = +!!e.brake * r,
        l = +!!e.tuck * r * (1 - c),
        u = (e.charge || 0) * r,
        d = Math.min(1, (e.landing || 0) * 2) * r,
        f = e.speed == null ? 0 : r * (1 - __recoveredScope.pf.smoothstep(e.speed, .3, 1.2)) * (1 - c) * (1 - u),
        p = Math.min(1, (e.crouch ?? .35) + i * .35),
        m = __recoveredScope.hf * __recoveredScope.pf.clamp(a + __recoveredScope.mf * (o - a), -1, 1) * r,
        h = __recoveredScope.gf * a,
        g = __recoveredScope.pf.smoothstep(a + __recoveredScope.mf * (o - a), 0, .7) * r,
        _ = __recoveredScope.pf.smoothstep(-(a + __recoveredScope.mf * (o - a)), 0, .7) * r,
        v = -.135 * __recoveredScope.pf.clamp(a, -1, 1) * r + Math.tan(h * r - m) * __recoveredScope._f,
        y = __recoveredScope.pf.clamp(this.leanRate * Math.sign(a) / 1.5, -1, 1) * Math.min(1, Math.abs(a) / .2),
        b = Math.exp(-((a / .3) ** 2)) * Math.min(1, Math.abs(this.leanRate) / 1.5) * r,
        x = 1 / Math.cos(Math.min(Math.abs(a), 1)) - 1;
      n.edge = h;
      n.px = .02 + .05 * y * r;
      n.py = .77 - p * .24 + .06 * b - .05 * x * r - .01 * g + .004 * Math.sin(2.1 * t);
      n.pz = -.03 - p * .08 - .05 * g + .14 * _ - .04 * c;
      n.pPitch = .1 * g - .12 * _;
      n.pYaw = .28 + .16 * s;
      n.pRoll = -.05 * y * r;
      let S = __recoveredScope.pf.clamp((v - n.pz) / __recoveredScope.vf, -1, .8),
        C = .4 * __recoveredScope.pf.smoothstep(p, .4, 1) + .5 * l;
      n.tPitch = __recoveredScope.pf.clamp(Math.asin(S) + C, __recoveredScope.yf[0], __recoveredScope.yf[1]);
      n.tYaw = .22 + .24 * s;
      n.tRoll = -.06 * y * r;
      n.gYaw = .5 * s + (.5 * Math.sin(.55 * t) + .14 * Math.sin(1.31 * t)) * f;
      n.gPitch = .12 + .12 * p;
      n.gTilt = .55 * m;
      n.kneeOut = .12 + .1 * _;
      n.kneeShift = .08 * y * r;
      let w = Math.sin(n.tPitch) * .3,
        T = -(1 - Math.cos(n.tPitch)) * .3,
        E = .02 * Math.sin(2.1 * t),
        D = .36 + .04 * _,
        O = .14 + T - .08 * _ + E,
        k = .2 + w + .1 * g,
        ee = -.36,
        A = .1 + T + .08 * g + .12 * _ - E,
        j = .2 + w + .04 * g - .1 * _,
        M = n.pYaw + n.tYaw,
        N = Math.sin(M),
        te = Math.cos(M);
      if (n.hlx = D * te + k * N, n.hly = O, n.hlz = k * te - D * N, n.hrx = ee * te + j * N, n.hry = A, n.hrz = j * te - ee * N, f > .001 && (n.py += .03 * f, n.tPitch -= .1 * f, this.#r(.27, .08, .05, -.27, .08, .05, .8 * f)), l > 0 && this.#r(.34, .1, .4, .02, .08, .36, l), u > .001 && this.#r(.3, .06, .3, -.22, .06, .3, .7 * u), c > 0 && this.#r(.38, .22, .24, -.36, .24, .2, c), i > .001) {
        let e = t * 5,
          n = .05;
        this.#r(.5 + Math.sin(e) * n, .38 + Math.cos(e) * n, .04, -.46 - Math.sin(e + 2.1) * n, .32 + Math.cos(e + 2.1) * n, 0, .7 * i);
      }
      d > 0 && this.#r(.46, .2, .2, -.42, .22, .16, d);
    }
  };
}
/* Recovered binding Df. Live dependencies: . */
export function create_Df(__recoveredScope) {
  return function (e, t) {
    return new URL(e, t).href;
  };
}
/* Recovered binding kf. Live dependencies: . */
export function create_kf(__recoveredScope) {
  return function (e) {
    return e.pathname.endsWith(`.css`);
  };
}
/* Recovered binding Af. Live dependencies: . */
export function create_Af(__recoveredScope) {
  return function (e, t, n) {
    if (t in e) return e[t];
    let r = n();
    if (!r) {
      e[t] = void 0;
      return;
    }
    let i = r.then(() => {
      e[t] = void 0;
    }, n => {
      throw e[t] = void 0, n;
    });
    return e[t] = i, i;
  };
}
/* Recovered binding vitePreload. Live dependencies: Df, kf, Af, Of, Ef. */
export function create_vitePreload(__recoveredScope) {
  return function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e,
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(e.map(e => Promise.resolve(e).then(e => ({
          status: `fulfilled`,
          value: e
        }), e => ({
          status: `rejected`,
          reason: e
        }))));
      }
      function s(e) {
        return import.meta.resolve ? new URL(import.meta.resolve(e)) : new URL(e, import.meta.url);
      }
      r = o(t.map(t => {
        t = __recoveredScope.Df(t, n);
        let r = s(t),
          i = __recoveredScope.kf(r);
        return __recoveredScope.Af(__recoveredScope.Of, r.href, () => {
          if (e === void 0) {
            e = {
              all: new Set(),
              styles: new Set()
            };
            let t = document.getElementsByTagName(`link`);
            for (let n = t.length - 1; n >= 0; n--) {
              let r = t[n];
              e.all.add(r.href);
              r.rel === `stylesheet` && e.styles.add(r.href);
            }
          }
          if ((i ? e.styles : e.all).has(r.href)) return;
          let t = document.createElement(`link`);
          if (t.rel = i ? `stylesheet` : __recoveredScope.Ef, i || (t.as = `script`), t.crossOrigin = ``, t.href = r.href, a && t.setAttribute(`nonce`, a), document.head.appendChild(t), i) return new Promise((e, n) => {
            t.addEventListener(`load`, e);
            t.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${r}`)));
          });
        });
      }).filter(e => e !== void 0));
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, {
        cancelable: true
      });
      if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e;
    }
    return r.then(t => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  };
}
/* Recovered binding Mf. Live dependencies: . */
export function create_Mf(__recoveredScope) {
  return {
    cream: `#efe9dc`,
    navy: `#1e2536`,
    black: `#1c1d21`,
    skin: `#f6dcc6`,
    hair: `#5b3b28`,
    hairDark: `#452d1f`,
    lens: `#3d4a5c`,
    lensGlint: `#d9553a`,
    yellow: `#f2c83a`,
    orange: `#ff5a1f`,
    board: `#ee4f2c`,
    boardBase: `#c63b22`,
    piping: `#f7f5ee`,
    patch: `#b9b4aa`
  };
}
/* Recovered binding Nf. Live dependencies: Mf, qe, he. */
export function create_Nf(__recoveredScope) {
  return function Nf() {
    let e = document.createElement(`canvas`);
    e.width = 512;
    e.height = 256;
    let t = e.getContext(`2d`);
    t.fillStyle = __recoveredScope.Mf.skin;
    t.fillRect(0, 0, 512, 256);
    t.fillStyle = `rgba(240,150,140,0.55)`;
    for (let e of [-40, 40]) {
      t.beginPath();
      t.ellipse(128 + e, 150, 13, 7, 0, 0, Math.PI * 2);
      t.fill();
    }
    t.fillStyle = `#16171a`;
    for (let e of [-25, 25]) {
      t.beginPath();
      t.ellipse(128 + e, 132, 6.5, 10, 0, 0, Math.PI * 2);
      t.fill();
    }
    t.strokeStyle = `#5a3a2a`;
    t.lineWidth = 3;
    t.lineCap = `round`;
    for (let e of [-25, 25]) {
      t.beginPath();
      t.moveTo(128 + e - 8, 112);
      t.lineTo(128 + e + 8, 110);
      t.stroke();
    }
    t.strokeStyle = `#7a3e34`;
    t.lineWidth = 2.5;
    t.beginPath();
    t.arc(128, 152, 7, .25 * Math.PI, .75 * Math.PI);
    t.stroke();
    let n = new __recoveredScope.qe(e);
    return n.colorSpace = __recoveredScope.he, n.anisotropy = 4, n;
  };
}
/* Recovered binding Pf. Live dependencies: Mf, qe, he. */
export function create_Pf(__recoveredScope) {
  return function Pf() {
    let e = document.createElement(`canvas`);
    e.width = 128;
    e.height = 256;
    let t = e.getContext(`2d`);
    t.fillStyle = __recoveredScope.Mf.black;
    t.fillRect(0, 0, 128, 256);
    t.save();
    t.translate(78, 128);
    t.rotate(-Math.PI / 2);
    t.fillStyle = `#e9e6de`;
    t.font = `600 30px "Patrick Hand SC", sans-serif`;
    t.textAlign = `center`;
    t.textBaseline = `middle`;
    t.fillText(`SALONION`, 0, 0);
    t.restore();
    let n = new __recoveredScope.qe(e);
    return n.colorSpace = __recoveredScope.he, n;
  };
}
/* Recovered binding solveArmReachAngle. Live dependencies: . */
export function create_solveArmReachAngle(__recoveredScope) {
  return function solveArmReachAngle(e, t, n) {
    let [r, i] = e.shoulder,
      a = t.y + e.pivot;
    for (let o = .15; o < 1.2; o += .02) if (Math.hypot(Math.abs(n.x) - r, n.y - (a + i * Math.cos(o)), n.z - (t.z + i * Math.sin(o))) < e.reach * .95) return o;
    return 1.2;
  };
}
/* Recovered binding $. Live dependencies: c. */
export function create_Dollar(__recoveredScope) {
  return function $(e, t, n, r = 0, i = 0, a = 0) {
    let o = new __recoveredScope.c(e, t);
    return o.position.set(r, i, a), o.castShadow = true, n.add(o), o;
  };
}
/* Recovered binding Zf. Live dependencies: $, d, W, Vector3, Ff. */
export function create_Zf(__recoveredScope) {
  return class {
    constructor(e, t, n, r, {
      top: i,
      pipe: a
    } = {}) {
      this.mesh = __recoveredScope.$(new __recoveredScope.d(n, t, 1, 8).translate(0, .5, 0), r, e);
      i && __recoveredScope.$(new __recoveredScope.d(n * 1.07, n * 1.04, i.len, 10, 1, false, -1.9, 3.8).translate(0, 1 - i.len / 2, 0), i.mat, this.mesh);
      a && __recoveredScope.$(new __recoveredScope.W(.018, .9, .02).translate(0, .5, 0), a.mat, this.mesh, a.side * n * 1.02, 0, 0);
    }
    set(e, t) {
      let n = new __recoveredScope.Vector3().subVectors(t, e),
        r = n.length();
      this.mesh.position.copy(e);
      this.mesh.quaternion.setFromUnitVectors(__recoveredScope.Ff, n.divideScalar(r || 1));
      this.mesh.scale.set(1, r, 1);
    }
  };
}
/* Recovered binding Qf. Live dependencies: W. */
export function create_Qf(__recoveredScope) {
  return function Qf() {
    let e = 1.56,
      t = .52,
      n = new __recoveredScope.W(.27, .025, e, 6, 1, 40),
      r = n.attributes.position;
    for (let n = 0; n < r.count; n++) {
      let i = r.getZ(n),
        a = Math.max(0, Math.abs(i) - t),
        o = a / (e / 2 - t),
        s = (1 - .06 * Math.cos(i / e * Math.PI) ** 2) * Math.sqrt(Math.max(.05, 1 - o ** 4));
      r.setX(n, r.getX(n) * s);
      r.setY(n, r.getY(n) + a * a * 1.1);
    }
    return n.computeVertexNormals(), n;
  };
}
