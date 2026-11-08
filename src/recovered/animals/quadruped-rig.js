/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding vn. Live dependencies: . */
export function create_vn(__recoveredScope) {
  return [{
    id: `LF`,
    chain: [`upperArm_L`, `forearm_L`, `pastern_L`, `paw_L`],
    front: true,
    side: 1
  }, {
    id: `RF`,
    chain: [`upperArm_R`, `forearm_R`, `pastern_R`, `paw_R`],
    front: true,
    side: -1
  }, {
    id: `LH`,
    chain: [`thigh_L`, `shin_L`, `hock_L`, `hindPaw_L`],
    front: false,
    side: 1
  }, {
    id: `RH`,
    chain: [`thigh_R`, `shin_R`, `hock_R`, `hindPaw_R`],
    front: false,
    side: -1
  }];
}
/* Recovered binding Pn. Live dependencies: T, Vector3, Tn, wn, Sn. */
export function create_Pn(__recoveredScope) {
  return function Pn(e) {
    let t = e.ref;
    return {
      hips: {
        pos: t.hips.clone(),
        quat: new __recoveredScope.T()
      },
      bend: new __recoveredScope.Vector3(),
      look: __recoveredScope.Tn.clone(),
      up: __recoveredScope.wn.clone(),
      jaw: 0,
      tongue: 0,
      tail: {
        lift: 0,
        wag: [0, 0, 0, 0],
        curl: 0
      },
      ears: e.bones.ear_L ? __recoveredScope.Sn.map(() => ({
        back: 0,
        swivel: 0,
        flat: 0
      })) : null,
      legs: t.legs.map(e => ({
        paw: e.paw.clone(),
        pastern: e.pastern.clone(),
        toe: e.toe.clone()
      }))
    };
  };
}
/* Recovered binding Fn. Live dependencies: cloneSkinnedModel, createToonMaterial, T, Vector3, In, ze, An, wn, vn, En, kn, yn, bn, Dn, jn, Mn, Nn, Sn, Cn, Tn, On, xn, MathUtils. */
export function create_Fn(__recoveredScope) {
  return class {
    constructor(e) {
      this.scene = __recoveredScope.cloneSkinnedModel(e.scene);
      this.scene.traverse(e => {
        e.isMesh && (e.material = __recoveredScope.createToonMaterial({
          map: e.material.map,
          side: e.material.side
        }, {
          rim: 1,
          hatch: 0
        }), e.castShadow = true, e.frustumCulled = false);
      });
      this.bones = {};
      this.list = [];
      this.scene.traverse(e => {
        e.isBone && (this.bones[e.name] = e, this.list.push(e));
      });
      this.list.forEach((e, t) => {
        e.userData.i = t;
        e.userData.mq = new __recoveredScope.T();
        e.userData.mp = new __recoveredScope.Vector3();
      });
      this.list.forEach((e, t) => {
        let n = t + 1;
        for (; n < this.list.length && __recoveredScope.In(this.list[n], e);) n++;
        e.userData.end = n;
      });
      this.scene.updateMatrixWorld(true);
      let t = this.bones.root.parent,
        n = new __recoveredScope.ze().copy(this.scene.matrixWorld).invert().multiply(t.matrixWorld);
      this.base = {
        mq: new __recoveredScope.T(),
        mp: new __recoveredScope.Vector3()
      };
      n.decompose(this.base.mp, this.base.mq, __recoveredScope.An);
      this.#s(0, this.list.length);
      for (let e of this.list) e.userData.rest = {
        p: e.position.clone(),
        q: e.quaternion.clone(),
        s: e.scale.clone(),
        mq: e.userData.mq.clone(),
        mp: e.userData.mp.clone()
      };
      let r = this.bones,
        i = e => r[e].userData.rest.mp.clone(),
        a = e => __recoveredScope.wn.clone().applyQuaternion(r[e].userData.rest.mq);
      this.legs = __recoveredScope.vn.map(e => {
        let [t, n, a, o] = e.chain.map(e => r[e]),
          s = i(t.name),
          c = i(n.name),
          l = i(a.name),
          u = __recoveredScope.An.subVectors(l, s).normalize(),
          d = c.clone().sub(s);
        return d.addScaledVector(u, -d.dot(u)).normalize(), {
          ...e,
          bones: [t, n, a, o],
          len: [n.position.length(), a.position.length(), o.position.length()],
          hint: d
        };
      });
      this.ref = {
        hips: i(`hips`),
        head: i(`head`),
        jaw: r.jaw ? i(`jaw`) : null,
        chest: i(`chest`),
        legs: this.legs.map(({
          bones: [e,, t, n],
          side: r,
          front: o
        }) => ({
          side: r,
          front: o,
          socket: i(e.name),
          paw: i(n.name),
          pastern: a(t.name),
          toe: a(n.name),
          sole: i(n.name).y
        }))
      };
    }
    pose(e) {
      for (let e of this.list) {
        let t = e.userData.rest;
        e.position.copy(t.p);
        e.quaternion.copy(t.q);
        e.scale.copy(t.s);
      }
      let t = this.bones;
      this.#r(t.hips, e.hips.pos, __recoveredScope.En.copy(e.hips.quat).multiply(t.hips.userData.rest.mq));
      __recoveredScope.En.setFromEuler(__recoveredScope.kn.set(e.bend.x / __recoveredScope.yn.length, e.bend.y / __recoveredScope.yn.length, e.bend.z / __recoveredScope.yn.length));
      for (let e of __recoveredScope.yn) this.#i(t[e], __recoveredScope.En);
      this.#s(0, this.list.length);
      for (let [n, r] of __recoveredScope.bn) {
        let i = this.#t(__recoveredScope.An);
        __recoveredScope.En.setFromUnitVectors(i, e.look);
        this.#a(t[n], __recoveredScope.Dn.identity().slerp(__recoveredScope.En, r));
      }
      let n = this.#t(__recoveredScope.An),
        r = __recoveredScope.jn.copy(__recoveredScope.wn).applyQuaternion(this.#n(t.head, __recoveredScope.En));
      r.addScaledVector(n, -r.dot(n)).normalize();
      let i = __recoveredScope.Mn.copy(e.up).addScaledVector(n, -__recoveredScope.Mn.dot(n));
      if (i.lengthSq() > 1e-6) {
        i.normalize();
        let e = Math.atan2(__recoveredScope.Nn.crossVectors(r, i).dot(n), r.dot(i));
        this.#a(t.head, __recoveredScope.En.setFromAxisAngle(n, e));
      }
      if (e.ears && __recoveredScope.Sn.forEach(([n, r], i) => {
        let a = e.ears[i],
          o = t[n],
          s = __recoveredScope.An.copy(__recoveredScope.wn).applyQuaternion(o.userData.rest.mq);
        __recoveredScope.En.setFromAxisAngle(__recoveredScope.Cn, -a.back).multiply(__recoveredScope.Dn.setFromAxisAngle(__recoveredScope.Tn, -a.flat * r)).multiply(__recoveredScope.On.setFromAxisAngle(s, a.swivel * r));
        this.#i(o, __recoveredScope.En);
        this.#s(o.userData.i, o.userData.end);
      }), t.jaw && this.#i(t.jaw, __recoveredScope.En.setFromAxisAngle(__recoveredScope.Cn, e.jaw)), e.tongue > 0 && t.tongue) {
        let n = e.tongue;
        t.tongue.position.y += .03 * n;
        t.tongue.position.z -= .006 * n;
        this.#i(t.tongue, __recoveredScope.En.setFromAxisAngle(__recoveredScope.Cn, .25 * n));
        this.#i(t.tongue1, __recoveredScope.En.setFromAxisAngle(__recoveredScope.Cn, .5 * n));
        this.#i(t.tongue2, __recoveredScope.En.setFromAxisAngle(__recoveredScope.Cn, .6 * n));
      }
      t.jaw && this.#s(t.jaw.userData.i, t.jaw.userData.end);
      let {
        tail: a
      } = e;
      __recoveredScope.xn.forEach((e, n) => this.#i(t[e], __recoveredScope.En.setFromAxisAngle(__recoveredScope.Cn, a.lift * [.6, .25, .1, .05][n] + a.curl * n * .25)));
      this.#s(t.tail.userData.i, t.tail.userData.end);
      let o = __recoveredScope.Mn.copy(__recoveredScope.Cn).applyQuaternion(this.#n(t.hips, __recoveredScope.En));
      __recoveredScope.xn.forEach((e, n) => {
        if (!a.wag[n]) return;
        let r = __recoveredScope.An.copy(__recoveredScope.wn).applyQuaternion(t[e].userData.mq),
          i = __recoveredScope.jn.crossVectors(o, r);
        i.lengthSq() < 1e-6 || this.#a(t[e], __recoveredScope.En.setFromAxisAngle(i.normalize(), a.wag[n]));
      });
      this.legs.forEach((t, n) => this.#e(t, e.legs[n]));
    }
    #e(e, {
      paw: t,
      pastern: n,
      toe: r
    }) {
      let [i, a, o, s] = e.bones,
        [c, l, u] = e.len,
        d = i.userData.mp,
        f = __recoveredScope.An.copy(t).addScaledVector(n, -u),
        p = __recoveredScope.jn.subVectors(f, d),
        m = __recoveredScope.MathUtils.clamp(p.length(), Math.abs(c - l) + 1e-4, c + l - 1e-4);
      p.normalize();
      let h = __recoveredScope.Mn.copy(e.hint).applyQuaternion(this.#n(i.parent, __recoveredScope.En));
      h.addScaledVector(p, -h.dot(p));
      h.lengthSq() < 1e-8 && h.set(0, 0, e.front ? -1 : 1);
      h.normalize();
      let g = (c * c - l * l + m * m) / (2 * m),
        _ = Math.sqrt(Math.max(0, c * c - g * g)),
        v = __recoveredScope.Nn.copy(d).addScaledVector(p, g).addScaledVector(h, _),
        y = p.multiplyScalar(m).add(d);
      this.#o(i, v.clone().sub(d));
      this.#o(a, y.sub(a.userData.mp));
      this.#o(o, n);
      this.#o(s, r);
    }
    #t(e) {
      return e.copy(__recoveredScope.Tn).applyQuaternion(this.#n(this.bones.head, __recoveredScope.Dn));
    }
    #n(e, t) {
      return t.copy(e.userData.mq).multiply(__recoveredScope.On.copy(e.userData.rest.mq).invert());
    }
    #r(e, t, n) {
      let r = e.parent.isBone ? e.parent.userData : this.base,
        i = __recoveredScope.Dn.copy(r.mq).invert();
      e.quaternion.copy(i).multiply(n);
      e.position.copy(t).sub(r.mp).applyQuaternion(i);
      this.#s(e.userData.i, e.userData.end);
    }
    #i(e, t) {
      let n = e.parent.isBone ? e.parent.userData.rest.mq : this.base.mq;
      e.quaternion.copy(n).invert().multiply(t).multiply(n).multiply(e.userData.rest.q);
    }
    #a(e, t) {
      let n = e.parent.isBone ? e.parent.userData.mq : this.base.mq;
      e.quaternion.copy(n).invert().multiply(t).multiply(e.userData.mq);
      this.#s(e.userData.i, e.userData.end);
    }
    #o(e, t) {
      __recoveredScope.An.copy(__recoveredScope.wn).applyQuaternion(e.userData.mq);
      this.#a(e, __recoveredScope.En.setFromUnitVectors(__recoveredScope.An, t.normalize()));
    }
    #s(e, t) {
      for (let n = e; n < t; n++) {
        let e = this.list[n],
          t = e.userData,
          r = e.parent.isBone ? e.parent.userData : this.base;
        t.mq.copy(r.mq).multiply(e.quaternion);
        t.mp.copy(e.position).applyQuaternion(r.mq).add(r.mp);
      }
    }
    at(e, t = new __recoveredScope.Vector3()) {
      return t.copy(this.bones[e].userData.mp);
    }
  };
}
/* Recovered binding In. Live dependencies: . */
export function create_In(__recoveredScope) {
  return function In(e, t) {
    for (let n = e.parent; n; n = n.parent) if (n === t) return true;
    return false;
  };
}
/* Recovered binding Wn. Live dependencies: . */
export function create_Wn(__recoveredScope) {
  return {
    walk: {
      phase: [.25, .75, 0, .5],
      duty: .68,
      lift: .045,
      bob: .006
    },
    trot: {
      phase: [0, .5, .5, 0],
      duty: .46,
      lift: .06,
      bob: .01
    },
    gallop: {
      phase: [.62, .5, 0, .12],
      duty: .34,
      lift: .075,
      bob: .03
    }
  };
}
/* Recovered binding Qn. Live dependencies: Vector3. */
export function create_Qn(__recoveredScope) {
  return function Qn() {
    return {
      hp: new __recoveredScope.Vector3(),
      pitch: 0,
      yaw: 0,
      roll: 0,
      bend: new __recoveredScope.Vector3(),
      nod: 0,
      turn: 0,
      tilt: 0,
      level: 1,
      rest: 0,
      gaze: new __recoveredScope.Vector3(0, 0, 1),
      jaw: 0,
      tongue: 0,
      lift: 0,
      curl: 0,
      legs: [0, 1, 2, 3].map(() => ({
        p: new __recoveredScope.Vector3(),
        u: new __recoveredScope.Vector3(),
        t: new __recoveredScope.Vector3(),
        plant: 1
      }))
    };
  };
}
/* Recovered binding $n. Live dependencies: Pn, Hn, Qn, qn, Un, zn, Ln, Bn, Wn, Rn, Jn, Gn, Vn, Xn, Yn, Kn, Zn. */
export function create_Dollarn(__recoveredScope) {
  return class {
    constructor(e) {
      this.rig = e;
      this.ref = e.ref;
      this.P = __recoveredScope.Pn(e);
      this.frames = Object.fromEntries(__recoveredScope.Hn.map(e => [e, __recoveredScope.Qn()]));
      this.mix = __recoveredScope.Qn();
      this.w = Object.fromEntries(__recoveredScope.Hn.map(e => [e, +(e === `stand`)]));
      this.posture = `stand`;
      this.t = 0;
      this.speed = 0;
      this.side = 0;
      this.turnRate = 0;
      this.phase = 0;
      this.stance = [true, true, true, true];
      this.gait = 0;
      this.stride = 0;
      this.cadence = 1;
      this.look = __recoveredScope.qn.clone();
      this.lookAt = __recoveredScope.qn.clone();
      this.lookRate = 6;
      this.tilt = 0;
      this.wag = .2;
      this.tailUp = 0;
      this.pant = 0;
      this.sniff = 0;
      this.dig = 0;
      this.lean = 0;
      this.wiggle = 0;
      this.tired = 0;
      this.acts = [];
      this.jumpY = 0;
      this.wagPhase = 0;
      this.breath = 0;
      this.eased = {
        pant: 0,
        sniff: 0,
        dig: 0,
        lean: 0,
        wiggle: 0,
        tilt: 0,
        tailUp: 0,
        wag: .2,
        tired: 0
      };
    }
    play(e, t = {}) {
      let n = t.dur ?? {
        bark: .32,
        yawn: 2.2,
        shake: 1.5,
        sneeze: .5,
        leap: .7
      }[e];
      this.acts = this.acts.filter(t => t.kind !== e);
      this.acts.push({
        kind: e,
        t: 0,
        dur: n,
        ...t
      });
    }
    playing(e) {
      return this.acts.some(t => t.kind === e);
    }
    update(e, t) {
      this.t += e;
      let n = t => 1 - Math.exp(-e / t);
      for (let e of __recoveredScope.Hn) this.w[e] += (+(e === this.posture) - this.w[e]) * n(__recoveredScope.Un[this.posture]);
      for (let e of Object.keys(this.eased)) this.eased[e] += (this[e] - this.eased[e]) * n(e === `wag` ? .3 : .25);
      this.look.lerp(this.lookAt, n(1 / this.lookRate)).normalize();
      for (let t of this.acts) t.t += e;
      this.acts = this.acts.filter(e => e.t < e.dur);
      this.#e(e);
      this.#n(this.frames.stand);
      this.#r(this.frames.sit);
      this.#i(this.frames.lie);
      this.#a(this.frames.sleep);
      this.#o(this.frames.side);
      this.#s(this.frames.belly);
      this.#c(this.frames.bow);
      this.#l(this.frames.rear);
      let r = this.#d();
      this.#f(r, e);
      this.adjust(r, e);
      this.#p(r, t);
      this.rig.pose(this.P);
    }
    footfalls(e, t, n) {
      let r = this.w.stand > .5,
        i = this.frames.stand.legs,
        a = this.scale ?? 1.3,
        o = Math.cos(n),
        s = Math.sin(n);
      for (let c = 0; c < 4; c++) {
        if (!e.landed(c, this.stance[c] && r)) continue;
        let l = i[c].p;
        e.stamp(c, t.x + (l.x * o + l.z * s) * a, t.z + (-l.x * s + l.z * o) * a, n);
      }
    }
    adjust(e, t) {}
    #e(e) {
      let t = this.scale ?? 1.3,
        n = (Math.hypot(this.speed, this.side) + Math.abs(this.turnRate) * .3) * t,
        r = __recoveredScope.zn(n, 1.2, 1.7) + __recoveredScope.zn(n, 4, 5);
      this.gait += (r - this.gait) * (1 - Math.exp(-e * 4));
      this.stride += (+(n > .08) - this.stride) * (1 - Math.exp(-e * (n > .08 ? 10 : 6)));
      this.hz = __recoveredScope.Ln(1.45 + n * .5, 1.45, 3.3) * this.cadence;
      this.phase = this.stride > .01 ? __recoveredScope.Bn(this.phase + this.hz * e, 1) : 0;
    }
    #t() {
      let e = this.gait,
        t = e < 1 ? __recoveredScope.Wn.walk : __recoveredScope.Wn.trot,
        n = e < 1 ? __recoveredScope.Wn.trot : __recoveredScope.Wn.gallop,
        r = e < 1 ? e : e - 1;
      return {
        phase: t.phase.map((e, t) => e + (__recoveredScope.Bn(n.phase[t] - e + .5, 1) - .5) * r),
        duty: __recoveredScope.Rn(t.duty, n.duty, r),
        lift: __recoveredScope.Rn(t.lift, n.lift, r),
        bob: __recoveredScope.Rn(t.bob, n.bob, r)
      };
    }
    #n(e) {
      let t = this.ref,
        n = this.#t(),
        r = this.stride;
      e.hp.copy(t.hips);
      e.pitch = e.yaw = e.roll = 0;
      e.bend.set(0, 0, 0);
      e.nod = e.turn = e.tilt = 0;
      e.level = 1;
      e.rest = e.jaw = e.tongue = e.lift = e.curl = 0;
      let i = n.duty / this.hz;
      t.legs.forEach((t, a) => {
        let o = e.legs[a];
        if (o.p.copy(t.paw), o.u.copy(t.pastern), o.t.copy(t.toe), o.plant = 1, this.stance[a] = true, r < .001) return;
        let s = -(this.side + this.turnRate * t.paw.z),
          c = -(this.speed - this.turnRate * t.paw.x),
          l = __recoveredScope.Bn(this.phase + n.phase[a], 1);
        this.stance[a] = l < n.duty;
        let u,
          d = 0,
          f = 0;
        if (l < n.duty) u = l / n.duty - .5;else {
          let e = (l - n.duty) / (1 - n.duty);
          u = .5 - __recoveredScope.zn(e, 0, 1);
          d = Math.sin(Math.PI * e) ** .8;
          f = Math.sin(Math.PI * Math.min(1, e * 1.25));
        }
        o.p.x += s * i * u * r;
        o.p.z += c * i * u * r;
        o.p.y += d * n.lift * r * (a < 2 ? 1 : .85);
        let p = f * r * (a < 2 ? 1.25 : .6);
        __recoveredScope.Jn.setFromAxisAngle(__recoveredScope.Gn, p);
        o.u.applyQuaternion(__recoveredScope.Jn);
        o.t.applyQuaternion(__recoveredScope.Jn.setFromAxisAngle(__recoveredScope.Gn, p * 1.3));
      });
      let a = this.phase * __recoveredScope.Vn,
        o = Math.max(0, this.gait - 1);
      e.hp.y -= n.bob * r * (.5 - .5 * Math.cos(2 * a)) * (1 - o) + .03 * o * r * (.5 + .5 * Math.sin(a));
      e.hp.y -= .012 * o * r;
      e.pitch = .09 * o * r * Math.sin(a + .6);
      e.bend.x = .22 * o * r * Math.sin(a - .4);
      e.roll = .035 * r * (1 - this.gait * .5) * Math.sin(a) * (this.gait < 1.5);
      e.bend.y = -.25 * this.turnRate / Math.max(1, Math.abs(this.speed) * 3);
      e.nod = -.08 * r - .05 * o * r + .04 * r * Math.sin(2 * a);
      e.lift = .3 * r + .5 * o * r;
    }
    #r(e) {
      let t = this.ref;
      e.hp.set(t.hips.x, t.hips.y - .235, t.hips.z + .06);
      e.pitch = .62;
      e.yaw = e.roll = 0;
      e.bend.set(-.12, 0, 0);
      e.nod = .1;
      e.turn = e.tilt = 0;
      e.level = 1;
      e.rest = e.jaw = e.tongue = e.curl = 0;
      e.lift = .85;
      let n = this.#u(e, __recoveredScope.Jn);
      t.legs.forEach((r, i) => {
        let a = e.legs[i];
        a.plant = 1;
        i < 2 ? (__recoveredScope.Xn.copy(r.socket).sub(t.hips).applyQuaternion(n).add(e.hp), a.p.set(r.paw.x * .95, r.sole, __recoveredScope.Xn.z + .02), a.u.copy(r.pastern), a.t.copy(r.toe)) : (a.p.set(r.paw.x * 1.15, r.sole * .9, t.hips.z + .17), a.u.set(0, -.12, 1).normalize(), a.t.set(0, -.35, 1).normalize());
      });
    }
    #i(e) {
      let t = this.ref;
      e.hp.set(t.hips.x, t.hips.y - .25, t.hips.z + .02);
      e.pitch = .04;
      e.yaw = e.roll = 0;
      e.bend.set(.05, 0, 0);
      e.nod = -.05;
      e.turn = e.tilt = 0;
      e.level = 1;
      e.rest = 0;
      e.jaw = e.tongue = e.curl = 0;
      e.lift = .6;
      t.legs.forEach((t, n) => {
        let r = e.legs[n];
        r.plant = 1;
        n < 2 ? (r.p.set(t.paw.x * 1.05, t.sole * .8, t.paw.z + .24), r.u.set(0, -.1, 1).normalize(), r.t.set(0, -.25, 1).normalize()) : (r.p.set(t.paw.x * 1.6, t.sole * .8, t.paw.z + .12), r.u.set(t.paw.x * .6, -.15, 1).normalize(), r.t.set(t.paw.x * .6, -.3, 1).normalize());
      });
    }
    #a(e) {
      let t = this.ref;
      e.hp.set(t.hips.x - .02, t.hips.y - .27, t.hips.z + .04);
      e.pitch = .02;
      e.yaw = -.55;
      e.roll = .3;
      e.bend.set(.08, 1.15, .1);
      e.nod = e.turn = e.tilt = 0;
      e.level = .4;
      e.rest = 1;
      e.gaze.set(.95, -.42, -.25).normalize();
      e.jaw = e.tongue = 0;
      e.lift = .5;
      e.curl = .5;
      t.legs.forEach((t, n) => {
        let r = e.legs[n];
        r.plant = 1;
        n < 2 ? (r.p.set(t.paw.x + .1, t.sole * .8, t.paw.z + .12 - (t.side === 1 ? 0 : .06)), r.u.set(.4, -.1, 1).normalize(), r.t.set(.4, -.3, 1).normalize()) : (r.p.set(t.paw.x * 1.5 + .08, t.sole * .8, t.paw.z + .2), r.u.set(.5, -.12, 1).normalize(), r.t.set(.5, -.3, 1).normalize());
      });
    }
    #o(e) {
      let t = this.ref;
      e.pitch = 0;
      e.yaw = 0;
      e.roll = 1.42;
      e.hp.set(t.hips.x + .1, .175, t.hips.z);
      e.bend.set(-.1, .1, 0);
      e.nod = e.turn = e.tilt = 0;
      e.level = 0;
      e.rest = 1;
      e.jaw = e.tongue = 0;
      e.lift = .9;
      e.curl = .2;
      let n = this.#u(e, __recoveredScope.Jn);
      e.gaze.set(0, -.12, 1).applyQuaternion(n).normalize();
      t.legs.forEach((r, i) => {
        let a = e.legs[i];
        __recoveredScope.Xn.copy(r.paw).lerp(r.socket, .3);
        __recoveredScope.Xn.z += i < 2 ? .12 : -.06;
        a.p.copy(__recoveredScope.Xn).sub(t.hips).applyQuaternion(n).add(e.hp);
        a.p.y = r.sole + (r.side === 1 ? .075 : 0);
        a.u.set(0, -1, .5).normalize().applyQuaternion(n);
        a.t.set(0, -.5, 1).normalize().applyQuaternion(n);
        a.plant = 0;
      });
    }
    #s(e) {
      let t = this.ref;
      e.pitch = .05;
      e.yaw = 0;
      e.roll = 2.55;
      e.hp.set(t.hips.x + .08, .2, t.hips.z);
      e.bend.set(-.1, 0, 0);
      e.nod = .2;
      e.turn = e.tilt = 0;
      e.level = .35;
      e.rest = 0;
      e.jaw = .18;
      e.tongue = .6;
      e.lift = .5;
      e.curl = 0;
      let n = this.#u(e, __recoveredScope.Jn);
      t.legs.forEach((r, i) => {
        let a = e.legs[i];
        __recoveredScope.Xn.copy(r.paw).lerp(r.socket, i < 2 ? .55 : .4);
        __recoveredScope.Xn.z += i < 2 ? -.02 : .06;
        __recoveredScope.Xn.x += r.side * .05;
        a.p.copy(__recoveredScope.Xn).sub(t.hips).applyQuaternion(n).add(e.hp);
        a.u.set(0, -.4, -1).normalize().applyQuaternion(n);
        i >= 2 && a.u.set(0, -1, .5).normalize().applyQuaternion(n);
        a.t.set(0, -1, -.3).normalize().applyQuaternion(n);
        a.plant = 0;
      });
    }
    #c(e) {
      let t = this.ref;
      e.hp.set(t.hips.x, t.hips.y + .02, t.hips.z - .03);
      e.pitch = -.5;
      e.yaw = e.roll = 0;
      e.bend.set(.1, 0, 0);
      e.nod = .55;
      e.turn = e.tilt = 0;
      e.level = 1;
      e.rest = 0;
      e.jaw = .12;
      e.tongue = .4;
      e.lift = 1.4;
      e.curl = .3;
      t.legs.forEach((t, n) => {
        let r = e.legs[n];
        r.plant = 1;
        n < 2 ? (r.p.set(t.paw.x * 1.1, t.sole * .8, t.paw.z + .23), r.u.set(0, -.08, 1).normalize(), r.t.set(0, -.2, 1).normalize()) : (r.p.copy(t.paw), r.p.z -= .03, r.u.copy(t.pastern), r.t.copy(t.toe));
      });
    }
    #l(e) {
      let t = this.ref;
      e.pitch = .95;
      e.yaw = e.roll = 0;
      e.hp.set(t.hips.x, t.hips.y - .08, t.hips.z + .1);
      e.bend.set(-.15, 0, 0);
      e.nod = -.1;
      e.turn = e.tilt = 0;
      e.level = 1;
      e.rest = 0;
      e.jaw = .15;
      e.tongue = .5;
      e.lift = 1.1;
      e.curl = 0;
      let n = this.#u(e, __recoveredScope.Jn);
      t.legs.forEach((r, i) => {
        let a = e.legs[i];
        i < 2 ? (__recoveredScope.Xn.copy(r.paw).lerp(r.socket, .45), __recoveredScope.Xn.z += .1, a.p.copy(__recoveredScope.Xn).sub(t.hips).applyQuaternion(n).add(e.hp), a.u.set(0, -.6, -1).normalize().applyQuaternion(n), a.t.set(0, -1, -.2).normalize().applyQuaternion(n), a.plant = 0) : (a.p.copy(r.paw), a.p.z += .06, a.u.set(0, -1, .5).normalize(), a.t.copy(r.toe), a.plant = 1);
      });
    }
    #u(e, t) {
      return t.setFromEuler(__recoveredScope.Yn.set(-e.pitch, e.yaw, e.roll, `YXZ`));
    }
    #d() {
      let e = this.mix,
        t = 0;
      for (let e of __recoveredScope.Hn) t += this.w[e];
      let n = __recoveredScope.Hn.find(e => this.w[e] > 0),
        r = [`pitch`, `yaw`, `roll`, `nod`, `turn`, `tilt`, `level`, `rest`, `jaw`, `tongue`, `lift`, `curl`];
      for (let t of r) e[t] = 0;
      e.gaze.set(0, 0, 0);
      e.hp.set(0, 0, 0);
      e.bend.set(0, 0, 0);
      for (let t of e.legs) {
        t.p.set(0, 0, 0);
        t.u.set(0, 0, 0);
        t.t.set(0, 0, 0);
        t.plant = 0;
      }
      for (let i of __recoveredScope.Hn) {
        let a = this.w[i] / t;
        if (a < 1e-4 && i !== n) continue;
        let o = this.frames[i];
        for (let t of r) e[t] += o[t] * a;
        e.gaze.addScaledVector(o.gaze, o.rest * a);
        e.hp.addScaledVector(o.hp, a);
        e.bend.addScaledVector(o.bend, a);
        o.legs.forEach((t, n) => {
          let r = e.legs[n];
          r.p.addScaledVector(t.p, a);
          r.u.addScaledVector(t.u, a);
          r.t.addScaledVector(t.t, a);
          r.plant += t.plant * a;
        });
      }
      for (let t of e.legs) {
        t.u.normalize();
        t.t.normalize();
      }
      return e;
    }
    #f(e, t) {
      let n = this.eased,
        r = this.t,
        i = 1 - this.w.sleep - this.w.belly,
        a = this.w.stand,
        o = __recoveredScope.Rn(__recoveredScope.Rn(.32, .22, n.tired), 2.8, n.pant);
      this.breath = __recoveredScope.Bn(this.breath + o * t, 1);
      let s = Math.sin(this.breath * __recoveredScope.Vn);
      e.bend.x += s * __recoveredScope.Rn(.012, .02, e.rest) + s * n.pant * .01;
      e.hp.y += s * .003;
      e.jaw = Math.max(e.jaw, n.pant * (.2 + .05 * s));
      e.tongue = Math.max(e.tongue, n.pant);
      e.nod -= n.sniff * 1 * i;
      e.bend.x += n.sniff * .12 * a;
      e.turn += n.sniff * .25 * Math.sin(r * 1.7) * i;
      e.nod -= n.tired * .15 * (1 - e.rest);
      e.nod += n.lean * .35;
      e.tilt += n.lean * .3 * Math.sin(r * 1.6);
      e.tilt += n.tilt;
      e.roll += n.wiggle * .15 * Math.sin(r * 7);
      e.bend.y += n.wiggle * .2 * Math.sin(r * 7 + 1);
      for (let t of e.legs) t.plant < .5 && (t.p.y += n.wiggle * .02 * Math.sin(r * 9 + t.p.x * 40));
      if (n.dig > .01) {
        e.pitch -= .18 * n.dig;
        e.nod -= .5 * n.dig;
        e.hp.y += .02 * n.dig;
        for (let t = 0; t < 2; t++) {
          let i = __recoveredScope.Bn(r * 3.2 + t * .5, 1),
            a = e.legs[t],
            o = i < .45 ? __recoveredScope.Rn(-.08, .14, __recoveredScope.zn(i, 0, .45)) : __recoveredScope.Rn(.14, -.08, (i - .45) / .55),
            s = i < .45 ? Math.sin(i / .45 * Math.PI) * .09 : 0;
          a.p.z += o * n.dig;
          a.p.y += s * n.dig;
          a.u.applyQuaternion(__recoveredScope.Jn.setFromAxisAngle(__recoveredScope.Gn, (i < .45 ? .9 : .2) * n.dig));
          a.plant = __recoveredScope.Rn(a.plant, 0, n.dig);
        }
      }
      e.lift += n.tailUp * .7 * (1 - e.rest);
      let c = __recoveredScope.Rn(1.2, 4.2, __recoveredScope.Ln(n.wag, 0, 1));
      this.wagPhase += c * t;
      let l = __recoveredScope.Ln(n.wag, 0, 1.5) * .42 * (this.w.sit * .6 + i * .4 + this.w.belly * .5);
      this.wagAmp = l;
      e.yaw += Math.max(0, n.wag - 1) * .12 * Math.sin(this.wagPhase * __recoveredScope.Vn) * a;
      for (let t of this.acts) {
        let n = t.t / t.dur;
        if (t.kind === `bark`) {
          let t = Math.sin(Math.PI * __recoveredScope.Ln(n * 1.3, 0, 1));
          e.jaw = Math.max(e.jaw, t * .42);
          e.nod += t * .18;
          e.hp.y += t * .008;
        } else if (t.kind === `yawn`) {
          let t = __recoveredScope.zn(n, 0, .35) * (1 - __recoveredScope.zn(n, .7, 1));
          e.jaw = Math.max(e.jaw, t * .6);
          e.tongue = Math.max(e.tongue, t * .4);
          e.nod += t * .35;
        } else if (t.kind === `sneeze`) {
          let t = Math.sin(Math.PI * n);
          e.nod -= t * .5;
          e.jaw = Math.max(e.jaw, t * .15);
        } else if (t.kind === `shake`) {
          let t = __recoveredScope.zn(n, 0, .12) * (1 - __recoveredScope.zn(n, .8, 1)),
            a = r * 4.6 * __recoveredScope.Vn;
          e.roll += Math.sin(a - .6) * .28 * t * i;
          e.bend.z += Math.sin(a - .3) * .5 * t * i;
          e.tilt += Math.sin(a) * .6 * t * i;
          e.turn += Math.sin(a + .4) * .15 * t;
          e.yaw += Math.sin(a - .9) * .05 * t;
          e.lift += .3 * t;
        } else if (t.kind === `leap`) {
          let r = t.height ?? .25;
          this.jumpY = 4 * r * n * (1 - n);
          e.pitch += (.35 - n * .7) * Math.sin(Math.PI * n) * (t.tilt ?? 1);
          for (let t = 0; t < 4; t++) {
            let r = e.legs[t],
              i = Math.sin(Math.PI * n);
            r.plant = __recoveredScope.Rn(r.plant, 0, i);
            r.p.y += i * (t < 2 ? .08 : .04);
            r.p.z += (t < 2 ? .1 : -.06) * i;
            r.u.applyQuaternion(__recoveredScope.Jn.setFromAxisAngle(__recoveredScope.Gn, i * (t < 2 ? .9 : .4)));
          }
        }
      }
      this.playing(`leap`) || (this.jumpY = 0);
    }
    #p(e, t) {
      let n = this.P,
        r = this.ref,
        i = (r.legs[0].paw.z + r.legs[1].paw.z) / 2,
        a = (r.legs[2].paw.z + r.legs[3].paw.z) / 2,
        o = t(0, i),
        s = t(0, a),
        c = Math.atan2(o - s, i - a) * .8,
        l = (o + s) / 2 - Math.sin(c) * (i - a) / 2 + this.jumpY;
      __recoveredScope.Yn.set(-(e.pitch + c), e.yaw, e.roll, `YXZ`);
      n.hips.quat.setFromEuler(__recoveredScope.Yn);
      n.hips.pos.copy(e.hp);
      n.hips.pos.y += l;
      n.bend.copy(e.bend);
      __recoveredScope.Xn.copy(this.look);
      __recoveredScope.Jn.setFromAxisAngle(__recoveredScope.Kn, e.turn);
      __recoveredScope.Xn.applyQuaternion(__recoveredScope.Jn);
      let u = Math.hypot(__recoveredScope.Xn.x, __recoveredScope.Xn.z) || 1e-6,
        d = Math.atan2(__recoveredScope.Xn.y, u) + e.nod;
      d = __recoveredScope.Ln(d, -1.25, 1.1);
      let f = Math.atan2(__recoveredScope.Xn.x, __recoveredScope.Xn.z);
      n.look.set(Math.sin(f) * Math.cos(d), Math.sin(d), Math.cos(f) * Math.cos(d));
      e.rest > 0 && n.look.lerp(__recoveredScope.Zn.copy(e.gaze).normalize(), e.rest).normalize();
      __recoveredScope.Zn.copy(__recoveredScope.Kn).applyQuaternion(n.hips.quat);
      n.up.copy(__recoveredScope.Kn).lerp(__recoveredScope.Zn, 1 - e.level).normalize();
      n.up.applyQuaternion(__recoveredScope.Jn.setFromAxisAngle(n.look, -e.tilt));
      n.jaw = e.jaw;
      n.tongue = __recoveredScope.Ln(e.tongue, 0, 1);
      n.tail.lift = e.lift;
      n.tail.curl = e.curl;
      let p = this.wagPhase * __recoveredScope.Vn,
        m = this.wagAmp ?? 0;
      for (let e = 0; e < 4; e++) n.tail.wag[e] = m * Math.sin(p - e * .55) * [.6, .45, .4, .35][e];
      e.legs.forEach((e, r) => {
        let i = n.legs[r];
        i.paw.copy(e.p);
        i.paw.y += t(e.p.x, e.p.z) * e.plant + (1 - e.plant) * l;
        i.pastern.copy(e.u);
        i.toe.copy(e.t);
      });
    }
  };
}
