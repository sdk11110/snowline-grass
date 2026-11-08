/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Zi. Live dependencies: loadGLTF, Yi, Xi. Writes: Xi. */
export function create_Zi(__recoveredScope) {
  return function Zi() {
    return __recoveredScope.Xi ||= __recoveredScope.loadGLTF(__recoveredScope.Yi).catch(e => {
      throw __recoveredScope.Xi = null, e;
    }), __recoveredScope.Xi;
  };
}
/* Recovered binding Qi. Live dependencies: . */
export function create_Qi(__recoveredScope) {
  return [{
    id: `LF`,
    chain: [`upperArm_L`, `forearm_L`, `cannon_L`, `pastern_L`, `hoof_L`],
    blade: `shoulder_L`,
    front: true,
    side: 1
  }, {
    id: `RF`,
    chain: [`upperArm_R`, `forearm_R`, `cannon_R`, `pastern_R`, `hoof_R`],
    blade: `shoulder_R`,
    front: true,
    side: -1
  }, {
    id: `LH`,
    chain: [`thigh_L`, `shin_L`, `hindCannon_L`, `hindPastern_L`, `hindHoof_L`],
    blade: null,
    front: false,
    side: 1
  }, {
    id: `RH`,
    chain: [`thigh_R`, `shin_R`, `hindCannon_R`, `hindPastern_R`, `hindHoof_R`],
    blade: null,
    front: false,
    side: -1
  }];
}
/* Recovered binding Sa. Live dependencies: T, Vector3. */
export function create_Sa(__recoveredScope) {
  return function Sa(e) {
    let t = e.ref;
    return {
      hips: {
        pos: t.hips.clone(),
        quat: new __recoveredScope.T()
      },
      bend: new __recoveredScope.Vector3(),
      neck: {
        pitch: 0,
        turn: 0
      },
      head: 0,
      ears: [0, 0],
      tail: {
        lift: 0,
        swing: 0,
        push: new __recoveredScope.Vector3(),
        spin: 0,
        flutter: 0
      },
      legs: t.legs.map(e => ({
        hoof: e.hoof.clone(),
        cannon: e.cannon.clone(),
        pastern: e.pastern.clone(),
        toe: e.toe.clone(),
        blade: 0
      }))
    };
  };
}
/* Recovered binding Ca. Live dependencies: cloneSkinnedModel, wa, createToonMaterial, T, Vector3, Ta, ze, ha, la, Qi, qi, na, aa, da, ma, $i, ea, ca, ta, ra, ia, oa, ba, xa, ga, _a, va, ya, MathUtils, fa, ua, pa. */
export function create_Ca(__recoveredScope) {
  return class {
    constructor(e) {
      this.scene = __recoveredScope.cloneSkinnedModel(e.scene);
      this.scene.traverse(e => {
        e.isMesh && (e.isSkinnedMesh && __recoveredScope.wa(e), e.material = __recoveredScope.createToonMaterial({
          map: e.material.map,
          side: e.material.side
        }, {
          rim: 1,
          hatch: 0,
          strands: +!!e.isSkinnedMesh
        }), e.castShadow = true, e.frustumCulled = false, this.mesh = e);
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
        for (; n < this.list.length && __recoveredScope.Ta(this.list[n], e);) n++;
        e.userData.end = n;
      });
      this.scene.updateMatrixWorld(true);
      let t = this.bones.root.parent,
        n = new __recoveredScope.ze().copy(this.scene.matrixWorld).invert().multiply(t.matrixWorld);
      this.base = {
        mq: new __recoveredScope.T(),
        mp: new __recoveredScope.Vector3()
      };
      n.decompose(this.base.mp, this.base.mq, __recoveredScope.ha);
      this.#l(0, this.list.length);
      for (let e of this.list) e.userData.rest = {
        p: e.position.clone(),
        q: e.quaternion.clone(),
        s: e.scale.clone(),
        mq: e.userData.mq.clone(),
        mp: e.userData.mp.clone()
      };
      let r = this.bones,
        i = e => r[e].userData.rest.mp.clone(),
        a = e => __recoveredScope.la.clone().applyQuaternion(r[e].userData.rest.mq);
      this.legs = __recoveredScope.Qi.map(e => {
        let t = e.chain.map(e => r[e]),
          [n, a, o, s, c] = t,
          l = i(n.name),
          u = i(a.name),
          d = i(o.name),
          f = __recoveredScope.ha.subVectors(d, l).normalize(),
          p = u.clone().sub(l);
        return p.addScaledVector(f, -p.dot(f)).normalize(), {
          ...e,
          bones: t,
          blade: e.blade ? r[e.blade] : null,
          len: [a.position.length(), o.position.length(), s.position.length(), c.position.length()],
          hint: p
        };
      });
      this.ref = {
        hips: i(`hips`),
        withers: i(`chest1`),
        head: i(`head`),
        legs: this.legs.map(({
          bones: [e,, t, n, r],
          blade: o,
          side: s,
          front: c,
          len: l
        }) => ({
          side: s,
          front: c,
          socket: i(e.name),
          top: i(o ? o.name : e.name),
          hoof: i(r.name),
          cannon: a(t.name),
          pastern: a(n.name),
          toe: a(r.name),
          reach: l[0] + l[1]
        }))
      };
      this.short = [0, 0, 0, 0];
      this.tail = new __recoveredScope.qi(__recoveredScope.na.map((e, t) => t < __recoveredScope.na.length - 1 ? r[__recoveredScope.na[t + 1]].position.length() : __recoveredScope.aa));
      this.held = Array.from({
        length: __recoveredScope.na.length + 1
      }, () => new __recoveredScope.Vector3());
      this.hind = this.legs.filter(e => !e.front).map(() => [0, 1, 2, 3].map(() => new __recoveredScope.Vector3()));
    }
    pose(e, t = 0) {
      for (let e of this.list) {
        let t = e.userData.rest;
        e.position.copy(t.p);
        e.quaternion.copy(t.q);
        e.scale.copy(t.s);
      }
      let n = this.bones;
      this.#a(n.hips, e.hips.pos, __recoveredScope.da.copy(e.hips.quat).multiply(n.hips.userData.rest.mq));
      __recoveredScope.da.setFromEuler(__recoveredScope.ma.set(e.bend.x / __recoveredScope.$i.length, e.bend.y / __recoveredScope.$i.length, e.bend.z / __recoveredScope.$i.length));
      for (let e of __recoveredScope.$i) this.#o(n[e], __recoveredScope.da);
      for (let [t, r] of __recoveredScope.ea) this.#o(n[t], __recoveredScope.da.setFromAxisAngle(__recoveredScope.ca, e.neck.pitch * r));
      this.#o(n.head, __recoveredScope.da.setFromAxisAngle(__recoveredScope.ca, e.head));
      this.#l(0, this.list.length);
      for (let [t, r] of __recoveredScope.ta) this.#s(n[t], __recoveredScope.da.setFromAxisAngle(this.#r(n[t], __recoveredScope.ha), e.neck.turn * r));
      [`ear_L`, `ear_R`].forEach((t, r) => {
        e.ears[r] && (this.#o(n[t], __recoveredScope.da.setFromAxisAngle(__recoveredScope.ca, -e.ears[r])), this.#l(n[t].userData.i, n[t].userData.end));
      });
      let {
        tail: r
      } = e;
      __recoveredScope.na.forEach((e, t) => this.#o(n[e], __recoveredScope.da.setFromAxisAngle(__recoveredScope.ca, r.lift * __recoveredScope.ra[t])));
      this.#l(n.tail.userData.i, n.tail.userData.end);
      r.swing && __recoveredScope.na.forEach((e, t) => this.#s(n[e], __recoveredScope.da.setFromAxisAngle(this.#n(n.hips, __recoveredScope.ha), r.swing * __recoveredScope.ia[t])));
      __recoveredScope.na.forEach((e, t) => this.held[t].copy(n[e].userData.mp));
      this.held[__recoveredScope.na.length].copy(__recoveredScope.la).applyQuaternion(n.tail4.userData.mq).multiplyScalar(__recoveredScope.aa).add(this.held[__recoveredScope.na.length - 1]);
      this.legs.forEach((t, n) => {
        this.short[n] = this.#e(t, e.legs[n]);
      });
      this.legs.filter(e => !e.front).forEach((e, t) => e.bones.slice(1).forEach((e, n) => this.hind[t][n].copy(e.userData.mp)));
      let i = this.tail.follow(this.held, this.hind, r, t);
      __recoveredScope.na.forEach((e, t) => this.#c(n[e], __recoveredScope.ha.subVectors(i[t + 1], n[e].userData.mp)));
      let a = this.mesh.material.userData.strands;
      a && (a.amount.value = r.flutter * __recoveredScope.oa, a.time.value += t);
    }
    #e(e, {
      hoof: t,
      cannon: n,
      pastern: r,
      toe: i,
      blade: a
    }) {
      let [o, s, c, l, u] = e.bones,
        [d, f, p, m] = e.len;
      e.blade && a && this.#s(e.blade, __recoveredScope.da.setFromAxisAngle(this.#t(e.blade.parent, __recoveredScope.ha), a));
      let h = o.userData.mp,
        g = __recoveredScope.ba.copy(n),
        _ = __recoveredScope.xa.copy(r),
        v = __recoveredScope.ha.copy(t).addScaledVector(_, -m).addScaledVector(g, -p),
        y = d + f - .001;
      if (v.distanceTo(h) > y) {
        let e = __recoveredScope.ga.subVectors(v, t),
          n = __recoveredScope._a.subVectors(h, t),
          r = __recoveredScope.va.crossVectors(e, n);
        if (r.lengthSq() > 1e-12 && n.length() < y + e.length()) {
          r.normalize();
          let i = 0,
            a = e.angleTo(n);
          for (let n = 0; n < 14; n++) {
            let n = (i + a) / 2;
            __recoveredScope.ya.copy(e).applyAxisAngle(r, n).add(t);
            __recoveredScope.ya.distanceTo(h) > y ? i = n : a = n;
          }
          __recoveredScope.da.setFromAxisAngle(r, a);
          g.applyQuaternion(__recoveredScope.da);
          _.applyQuaternion(__recoveredScope.da);
          v.copy(t).addScaledVector(_, -m).addScaledVector(g, -p);
        }
      }
      let b = __recoveredScope.ga.subVectors(v, h),
        x = b.length(),
        S = __recoveredScope.MathUtils.clamp(x, Math.abs(d - f) + 1e-4, d + f - 1e-4);
      b.normalize();
      let C = __recoveredScope._a.copy(e.hint).applyQuaternion(this.#i(o.parent, __recoveredScope.da));
      C.addScaledVector(b, -C.dot(b));
      C.lengthSq() < 1e-8 && C.set(0, 0, e.front ? -1 : 1);
      C.normalize();
      let ee = (d * d - f * f + S * S) / (2 * S),
        te = Math.sqrt(Math.max(0, d * d - ee * ee)),
        ne = __recoveredScope.va.copy(h).addScaledVector(b, ee).addScaledVector(C, te),
        re = b.multiplyScalar(S).add(h);
      return this.#c(o, ne.clone().sub(h)), this.#c(s, re.sub(s.userData.mp)), this.#c(c, g.clone()), this.#c(l, _.clone()), this.#c(u, i.clone()), Math.max(0, x - S);
    }
    #t(e, t) {
      return t.copy(__recoveredScope.ca).applyQuaternion(this.#i(e, __recoveredScope.fa));
    }
    #n(e, t) {
      return t.copy(__recoveredScope.ua).applyQuaternion(this.#i(e, __recoveredScope.fa));
    }
    #r(e, t) {
      return t.copy(__recoveredScope.la).applyQuaternion(this.#i(e.parent, __recoveredScope.fa));
    }
    #i(e, t) {
      return e.isBone ? t.copy(e.userData.mq).multiply(__recoveredScope.pa.copy(e.userData.rest.mq).invert()) : t.identity();
    }
    #a(e, t, n) {
      let r = e.parent.isBone ? e.parent.userData : this.base,
        i = __recoveredScope.fa.copy(r.mq).invert();
      e.quaternion.copy(i).multiply(n);
      e.position.copy(t).sub(r.mp).applyQuaternion(i);
      this.#l(e.userData.i, e.userData.end);
    }
    #o(e, t) {
      let n = e.parent.isBone ? e.parent.userData.rest.mq : this.base.mq;
      e.quaternion.copy(n).invert().multiply(t).multiply(n).multiply(e.userData.rest.q);
    }
    #s(e, t) {
      let n = e.parent.isBone ? e.parent.userData.mq : this.base.mq;
      e.quaternion.copy(n).invert().multiply(t).multiply(e.userData.mq);
      this.#l(e.userData.i, e.userData.end);
    }
    #c(e, t) {
      __recoveredScope._a.copy(__recoveredScope.la).applyQuaternion(e.userData.mq);
      this.#s(e, __recoveredScope.da.setFromUnitVectors(__recoveredScope._a, t.normalize()));
    }
    #l(e, t) {
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
/* Recovered binding wa. Live dependencies: na, MathUtils, sa, et. */
export function create_wa(__recoveredScope) {
  return function wa(e) {
    let t = e.geometry;
    if (t.attributes.aStrand) return;
    let n = t.attributes.position,
      r = t.attributes.skinIndex,
      i = t.attributes.skinWeight,
      a = new Set(e.skeleton.bones.flatMap((e, t) => __recoveredScope.na.includes(e.name) ? [t] : [])),
      o = new Float32Array(n.count * 2);
    for (let e = 0; e < n.count; e++) {
      let t = 0;
      for (let n = 0; n < 4; n++) a.has(r.getComponent(e, n)) && (t += i.getComponent(e, n));
      let s = __recoveredScope.MathUtils.clamp((__recoveredScope.sa - n.getY(e)) / .43000000000000005, 0, 1);
      o[e * 2] = s * __recoveredScope.MathUtils.smoothstep(t, .5, .9);
      o[e * 2 + 1] = n.getX(e) * 60 + n.getZ(e) * 35;
    }
    t.setAttribute(`aStrand`, new __recoveredScope.et(o, 2));
  };
}
/* Recovered binding Ta. Live dependencies: . */
export function create_Ta(__recoveredScope) {
  return function Ta(e, t) {
    for (let n = e.parent; n; n = n.parent) if (n === t) return true;
    return false;
  };
}
/* Recovered binding Aa. Live dependencies: . */
export function create_Aa(__recoveredScope) {
  return function Aa(e) {
    let t = e >>> 0;
    return () => {
      t = t + 1831565813 >>> 0;
      let e = t;
      return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
    };
  };
}
/* Recovered binding ja. Live dependencies: Da. */
export function create_ja(__recoveredScope) {
  return class {
    constructor(e, t, n, r, i) {
      Object.assign(this, {
        rand: e,
        lo: t,
        hi: n,
        every: r,
        ease: i
      });
      this.value = this.target = __recoveredScope.Da(t, n, .5);
      this.wait = 0;
    }
    update(e, t = () => __recoveredScope.Da(this.lo, this.hi, this.rand())) {
      return this.wait -= e, this.wait <= 0 && (this.target = t(), this.wait = __recoveredScope.Da(this.every[0], this.every[1], this.rand())), this.value += (this.target - this.value) * (1 - Math.exp(-e / this.ease)), this.value;
    }
  };
}
/* Recovered binding Ma. Live dependencies: Da. */
export function create_Ma(__recoveredScope) {
  return class {
    constructor(e, t, n) {
      Object.assign(this, {
        rand: e,
        every: t,
        length: n
      });
      this.wait = __recoveredScope.Da(t[0], t[1], e());
      this.t = null;
      this.which = 0;
    }
    update(e) {
      return this.t === null ? (this.wait -= e) <= 0 && (this.t = 0, this.which = this.rand(), this.wait = __recoveredScope.Da(this.every[0], this.every[1], this.rand())) : (this.t += e, this.t >= this.length && (this.t = null)), this.t;
    }
  };
}
/* Recovered binding Na. Live dependencies: Aa, ja, Ma, ka, Da, Oa, Ea. */
export function create_Na(__recoveredScope) {
  return class {
    constructor(e = 7) {
      let t = this.rand = __recoveredScope.Aa(e);
      this.t = 0;
      this.sway = new __recoveredScope.ja(t, -1, 1, [3, 7], 1.2);
      this.neck = new __recoveredScope.ja(t, -.15, .3, [2.5, 7], 1);
      this.turn = new __recoveredScope.ja(t, -.45, .45, [2, 6], .9);
      this.ears = [new __recoveredScope.ja(t, -.15, .45, [1.5, 5], .25), new __recoveredScope.ja(t, -.15, .45, [1.5, 5], .25)];
      this.flicks = [new __recoveredScope.Ma(t, [2, 9], .35), new __recoveredScope.Ma(t, [2, 9], .35)];
      this.swish = new __recoveredScope.Ma(t, [4, 12], 1.4);
      this.rest = {
        leg: 0,
        wait: 3,
        amount: [0, 0]
      };
      this.stamp = new __recoveredScope.Ma(t, [14, 35], .6);
      this.shake = new __recoveredScope.Ma(t, [18, 45], .9);
      this.sniff = new __recoveredScope.Ma(t, [20, 50], 4.5);
      this.out = {
        sway: 0,
        roll: 0,
        drop: 0,
        breath: 0,
        neck: 0,
        turn: 0,
        head: 0,
        ears: [0, 0],
        tailLift: 0,
        tailSwing: 0,
        rest: [0, 0, 0, 0],
        lift: [0, 0, 0, 0]
      };
    }
    update(e) {
      let t = this.rand,
        n = this.out;
      this.t += e;
      let r = this.t;
      n.breath = Math.sin(__recoveredScope.ka * r / 5);
      let i = this.rest;
      (i.wait -= e) <= 0 && (i.leg = i.leg ? t() < .3 ? 0 : 3 - i.leg : 1 + Math.floor(t() * 2), i.wait = __recoveredScope.Da(15, 40, t()));
      for (let t = 0; t < 2; t++) {
        let n = +(i.leg === t + 1);
        i.amount[t] += (n - i.amount[t]) * (1 - Math.exp(-e / .6));
      }
      n.rest[2] = i.amount[0];
      n.rest[3] = i.amount[1];
      let a = i.amount[0] - i.amount[1];
      n.sway = this.sway.update(e) * .006 - a * .01;
      n.roll = -a * .035 - n.sway * 1.5;
      n.drop = (i.amount[0] + i.amount[1]) * .006;
      let o = this.sniff.update(e),
        s = o === null ? 0 : __recoveredScope.Oa(o, 0, .8) * (1 - __recoveredScope.Oa(o, 3.6, 4.5));
      n.neck = this.neck.update(e) + .12 * (i.amount[0] + i.amount[1]) + .04 * Math.sin(__recoveredScope.ka * r / 3.1) + .02 * Math.sin(__recoveredScope.ka * r / 1.7);
      n.neck = __recoveredScope.Da(n.neck, .8, s);
      n.turn = this.turn.update(e) * (1 - s * .7);
      n.head = .03 * Math.sin(__recoveredScope.ka * r / 2.3 + 1) + s * .25;
      let c = this.shake.update(e);
      if (c !== null) {
        let e = Math.sin(Math.PI * (c / this.shake.length));
        n.turn += .35 * e * Math.sin(__recoveredScope.ka * 4.5 * c);
        n.head -= .15 * e;
      }
      for (let t = 0; t < 2; t++) {
        let r = this.ears[t].update(e),
          i = this.flicks[t].update(e);
        i !== null && (r += .7 * Math.sin(Math.PI * (i / this.flicks[t].length)));
        c !== null && (r += .4);
        n.ears[t] = r;
      }
      let l = this.swish.update(e);
      if (n.tailSwing = .03 * Math.sin(__recoveredScope.ka * r / 4.3), n.tailLift = 0, l !== null) {
        let e = Math.sin(Math.PI * (l / this.swish.length)),
          t = this.swish.which < .5 ? 1 : -1,
          r = this.swish.which % .5 < .25 ? 1 : 1.5;
        n.tailSwing += t * .55 * e * Math.sin(__recoveredScope.ka * r * l / this.swish.length);
        n.tailLift = .12 * e;
      }
      n.lift.fill(0);
      let u = this.stamp.update(e);
      if (u !== null) {
        let e = this.stamp.which < .35 ? 0 : this.stamp.which < .7 ? 1 : this.stamp.which < .85 ? 2 : 3;
        n.rest[e] < .1 && (n.lift[e] = Math.sin(Math.PI * __recoveredScope.Ea(u / this.stamp.length, 0, 1)) ** 1.5);
      }
      return n;
    }
  };
}
/* Recovered binding Wa. Live dependencies: Vector3. */
export function create_Wa(__recoveredScope) {
  return () => ({
    hoof: new __recoveredScope.Vector3(),
    knee: new __recoveredScope.Vector3(),
    cannon: 0,
    pastern: 0,
    toe: 0,
    blade: 0
  });
}
/* Recovered binding Qa. Live dependencies: Ra. */
export function create_Qa(__recoveredScope) {
  return function Qa(e, t) {
    return {
      x: 0,
      v: 0,
      hz: e,
      damp: t,
      step(e, t, n = 0) {
        let r = __recoveredScope.Ra * this.hz;
        return this.v += (r * r * (e - this.x) - 2 * this.damp * r * this.v + n) * t, this.x += this.v * t, this.x;
      }
    };
  };
}
/* Recovered binding $a. Live dependencies: . */
export function create_Dollara(__recoveredScope) {
  return function $a(e, t, n, r, i) {
    let a = i * i,
      o = a * i;
    return .5 * (2 * t + (n - e) * i + (2 * e - 5 * t + 4 * n - r) * a + (3 * t - e - 3 * n + r) * o);
  };
}
/* Recovered binding eo. Live dependencies: . */
export function create_eo(__recoveredScope) {
  return {
    walk: {
      phase: [.25, .75, 0, .5],
      duty: .62,
      speed: 1.7,
      hz: 1,
      lift: [.07, .05],
      fold: [1, .55],
      reach: [.02, .01],
      bob2: .006,
      bob1: 0,
      low: 0,
      pitch: 0,
      flex: 0,
      roll: .02,
      neck: .06,
      nod2: .05,
      nod1: 0,
      rock: .25,
      tail: .1,
      ears: 0
    },
    trot: {
      phase: [0, .5, .5, 0],
      duty: .38,
      speed: 3.8,
      hz: 1.45,
      lift: [.1, .075],
      fold: [1.6, .85],
      reach: [.04, .02],
      bob2: .012,
      bob1: 0,
      low: .004,
      pitch: .008,
      flex: 0,
      roll: 0,
      neck: .15,
      nod2: .015,
      nod1: 0,
      rock: .25,
      tail: .45,
      ears: 0
    },
    canter: {
      phase: [.6, .33, .33, 0],
      duty: .33,
      speed: 6.5,
      hz: 1.7,
      lift: [.11, .08],
      fold: [1.6, .95],
      reach: [.06, .03],
      bob2: .004,
      bob1: .012,
      low: .014,
      pitch: .02,
      flex: .01,
      roll: 0,
      neck: .1,
      nod2: 0,
      nod1: .08,
      rock: .32,
      tail: .5,
      ears: .1
    },
    gallop: {
      phase: [.5, .38, .12, 0],
      duty: .25,
      speed: 11,
      hz: 2,
      lift: [.1, .08],
      fold: [1.7, 1],
      reach: [.08, .04],
      bob2: .004,
      bob1: .012,
      low: .022,
      pitch: .02,
      flex: .015,
      roll: 0,
      neck: .4,
      nod2: 0,
      nod1: .08,
      rock: .2,
      tail: 1.35,
      ears: .15
    }
  };
}
/* Recovered binding io. Live dependencies: Sa, Qa, Na, to, Ia, Pa, La, eo, no, Fa, Ha, Ua, Ba, za, Ga, Ka, Ja, Ya, Xa, Za, $a, qa, Ra, Va, ro. */
export function create_io(__recoveredScope) {
  return class {
    constructor(e) {
      this.rig = e;
      this.ref = e.ref;
      this.P = __recoveredScope.Sa(e);
      this.scale = 2.6;
      this.speed = 0;
      this.turnRate = 0;
      this.phase = 0;
      this.gait = 0;
      this.stride = 0;
      this.hz = 0;
      this.t = 0;
      this.legs = this.ref.legs.map(() => ({
        plant: 1,
        at: 0
      }));
      this.hoofLen = this.ref.legs.map(e => e.hoof.y / Math.max(.1, -e.toe.y));
      this.springs = {
        neck: __recoveredScope.Qa(3, .55),
        head: __recoveredScope.Qa(3.5, .5),
        tail: __recoveredScope.Qa(2.2, .35),
        swing: __recoveredScope.Qa(1.8, .3)
      };
      this.going = {
        speed: 0,
        turn: 0
      };
      this.idle = new __recoveredScope.Na();
      this.idling = true;
      this.I = this.idle.out;
      this.still = 1;
      this.attention = {
        graze: 0,
        alert: 0,
        look: 0
      };
    }
    get gaitName() {
      return __recoveredScope.to[Math.round(this.gait)];
    }
    update(e) {
      this.t += e;
      this.#e(e);
      this.I = this.idle.update(e);
      this.still = this.idling ? 1 - this.stride : 0;
      this.#a(this.#t(), e);
      this.rig.pose(this.P, e);
    }
    #e(e) {
      let t = Math.abs(this.speed) * this.scale,
        n = __recoveredScope.Ia(t, 2.2, 2.8) + __recoveredScope.Ia(t, 4.8, 5.6) + __recoveredScope.Ia(t, 8, 9.5);
      this.gait += (n - this.gait) * (1 - Math.exp(-e * 3));
      let r = t > .1;
      this.stride += (+!!r - this.stride) * (1 - Math.exp(-e * (r ? 6 : 4)));
      let i = this.#t();
      this.hz = i.hz * __recoveredScope.Pa((Math.max(t, .3) / i.speed) ** .3, .7, 1.25);
      this.phase = this.stride > .01 ? __recoveredScope.La(this.phase + this.hz * e, 1) : 0;
    }
    #t() {
      let e = __recoveredScope.Pa(this.gait, 0, 3),
        t = Math.min(2, Math.floor(e)),
        n = e - t,
        r = __recoveredScope.eo[__recoveredScope.to[t]],
        i = __recoveredScope.eo[__recoveredScope.to[t + 1]],
        a = {
          phase: r.phase.map((e, t) => e + (__recoveredScope.La(i.phase[t] - e + .5, 1) - .5) * n)
        };
      for (let e of __recoveredScope.no) a[e] = __recoveredScope.Fa(r[e], i[e], n);
      return a.lift = [0, 1].map(e => __recoveredScope.Fa(r.lift[e], i.lift[e], n)), a.fold = [0, 1].map(e => __recoveredScope.Fa(r.fold[e], i.fold[e], n)), a.reach = [0, 1].map(e => __recoveredScope.Fa(r.reach[e], i.reach[e], n)), a;
    }
    #n(e, t, n, r, i) {
      let a = this.ref.legs[e],
        o = this.stride,
        [,, s, c] = this.rig.legs[e].len,
        l = Math.abs(this.speed) * r.duty / Math.max(this.hz, .1),
        u = (a.front ? .015 : -.01) * Math.min(1, l * 4),
        d = (t * l * (Math.sign(this.speed) || 1) + u) * o,
        f = Math.atan2(d, a.top.y - a.hoof.y),
        p = __recoveredScope.Ia(n, .6, 1) * (a.front ? .9 : .7) * o,
        m = (.2 + .12 * this.gait) * Math.sin(Math.PI * n) * o;
      i.cannon = -f * .9;
      i.pastern = -f * .6 - m + p * .6;
      i.toe = p;
      i.blade = a.front ? -f * (f < 0 ? .9 : .25) : 0;
      let h = __recoveredScope.Ha.copy(a.hoof).addScaledVector(a.toe, this.hoofLen[e]);
      return h.z += d, h.x -= this.turnRate * a.hoof.z * t * (r.duty / Math.max(this.hz, .1)) * o, h.y = 0, i.hoof.copy(h).addScaledVector(__recoveredScope.Ua.copy(a.toe).applyQuaternion(__recoveredScope.Ba.setFromAxisAngle(__recoveredScope.za, i.toe)), -this.hoofLen[e]), i.knee.copy(i.hoof).addScaledVector(__recoveredScope.Ua.copy(a.pastern).applyQuaternion(__recoveredScope.Ba.setFromAxisAngle(__recoveredScope.za, i.pastern)), -c).addScaledVector(__recoveredScope.Ua.copy(a.cannon).applyQuaternion(__recoveredScope.Ba.setFromAxisAngle(__recoveredScope.za, i.cannon)), -s), i;
    }
    #r(e, t, n, r) {
      let i = this.ref.legs[e],
        a = +!i.front,
        o = this.stride,
        s = this.#n(e, -.5, 1, n, __recoveredScope.Ga),
        c = this.#n(e, .5, 0, n, __recoveredScope.Ka),
        l = this.#n(e, -.3, .8, n, __recoveredScope.Ja),
        u = this.#n(e, .3, .2, n, __recoveredScope.Ya),
        d = n.lift[a] * o,
        f = n.reach[a] * o,
        p = n.fold[a] * o,
        m = (e, t, n, r, i, a) => {
          let o = __recoveredScope.Xa[e];
          o.knee.lerpVectors(s.knee, c.knee, n);
          o.knee.y += r;
          o.knee.z += i;
          for (let e of __recoveredScope.Za) o[e] = __recoveredScope.Fa(s[e], c[e], n) + (a[e] ?? 0);
          return o;
        },
        h = (e, t) => {
          let n = __recoveredScope.Xa[e];
          n.knee.copy(t.knee);
          for (let e of __recoveredScope.Za) n[e] = t[e];
          return n;
        },
        g;
      h(0, l);
      h(1, s);
      i.front ? (g = [0, .4, .78, 1], m(2, s, .45, d, 0, {
        cannon: p,
        pastern: 1.5 * p,
        toe: 1.7 * p
      }), m(3, c, 1, d * .3, f, {
        cannon: -3 * f,
        pastern: -4 * f,
        toe: -3 * f
      }), h(4, c), h(5, u)) : (g = [0, .18, .55, .82, 1], m(2, s, 0, d * .25, -f * .6, {
        cannon: 2 * f,
        pastern: 6 * f,
        toe: 9 * f
      }), m(3, s, .6, d, 0, {
        cannon: -.45 * p,
        pastern: 1.2 * p,
        toe: 1.4 * p
      }), m(4, c, 1, d * .25, f, {
        cannon: -3 * f,
        pastern: -4 * f,
        toe: -3 * f
      }), h(5, c), h(6, u));
      let _ = 0;
      for (; _ < g.length - 2 && t > g[_ + 1];) _++;
      let v = __recoveredScope.Pa((t - g[_]) / (g[_ + 1] - g[_]), 0, 1),
        [y, b, x, S] = [__recoveredScope.Xa[_], __recoveredScope.Xa[_ + 1], __recoveredScope.Xa[_ + 2], __recoveredScope.Xa[_ + 3]];
      r.knee.set(__recoveredScope.$a(y.knee.x, b.knee.x, x.knee.x, S.knee.x, v), __recoveredScope.$a(y.knee.y, b.knee.y, x.knee.y, S.knee.y, v), __recoveredScope.$a(y.knee.z, b.knee.z, x.knee.z, S.knee.z, v));
      for (let e of __recoveredScope.Za) r[e] = __recoveredScope.$a(y[e], b[e], x[e], S[e], v);
      return r;
    }
    #i(e, t, n) {
      let r = this.ref.legs[e],
        i = this.still,
        [,, a, o] = this.rig.legs[e].len,
        s = this.hoofLen[e],
        c = this.I.rest[e] * i,
        l = this.I.lift[e] * i;
      if (c < .001 && l < .001) return t;
      let u = __recoveredScope.Ha.copy(t.hoof).addScaledVector(__recoveredScope.Ua.copy(r.toe).applyQuaternion(__recoveredScope.Ba.setFromAxisAngle(__recoveredScope.za, t.toe)), s);
      return u.z += .03 * c, t.toe += 1.1 * c + .9 * l, t.pastern += .75 * c + .8 * l, t.cannon += -.15 * c + (r.front ? .9 : -.3) * l, u.y += .07 * l, t.hoof.copy(u).addScaledVector(__recoveredScope.Ua.copy(r.toe).applyQuaternion(__recoveredScope.Ba.setFromAxisAngle(__recoveredScope.za, t.toe)), -s), t.knee.copy(t.hoof).addScaledVector(__recoveredScope.Ua.copy(r.pastern).applyQuaternion(__recoveredScope.Ba.setFromAxisAngle(__recoveredScope.za, t.pastern)), -o).addScaledVector(__recoveredScope.Ua.copy(r.cannon).applyQuaternion(__recoveredScope.Ba.setFromAxisAngle(__recoveredScope.za, t.cannon)), -a), l > .05 && (n.plant = 0), t;
    }
    #a(e, t) {
      let n = this.ref,
        r = this.P,
        i = this.stride;
      n.legs.forEach((t, n) => {
        let a = r.legs[n];
        t.front;
        let o = this.legs[n],
          [,, s, c] = this.rig.legs[n].len,
          l = __recoveredScope.La(this.phase - e.phase[n], 1),
          u;
        l < e.duty || i < .001 ? (o.plant = 1, o.at = i < .001 ? 0 : l / e.duty, u = this.#n(n, .5 - o.at, o.at, e, __recoveredScope.Ga)) : (o.plant = 0, o.at = (l - e.duty) / (1 - e.duty), u = this.#r(n, o.at, e, __recoveredScope.qa));
        o.plant && this.still > .001 && (u = this.#i(n, u, o));
        a.cannon.copy(t.cannon).applyQuaternion(__recoveredScope.Ba.setFromAxisAngle(__recoveredScope.za, u.cannon));
        a.pastern.copy(t.pastern).applyQuaternion(__recoveredScope.Ba.setFromAxisAngle(__recoveredScope.za, u.pastern));
        a.toe.copy(t.toe).applyQuaternion(__recoveredScope.Ba.setFromAxisAngle(__recoveredScope.za, u.toe));
        o.plant ? a.hoof.copy(u.hoof) : (a.hoof.copy(u.knee).addScaledVector(a.cannon, s).addScaledVector(a.pastern, c), a.hoof.y = Math.max(a.hoof.y, -a.toe.y * this.hoofLen[n]));
        a.blade = u.blade;
      });
      let a = this.phase,
        o = e.phase.indexOf(Math.min(...e.phase)),
        s = a - (e.phase[o] + e.duty / 2);
      r.hips.pos.copy(n.hips);
      r.hips.pos.y -= i * (e.low + e.bob2 * (.5 + .5 * Math.cos(2 * __recoveredScope.Ra * s)) + e.bob1 * (.5 + .5 * Math.cos(__recoveredScope.Ra * (a - .5))));
      let c = e.pitch * i * Math.sin(__recoveredScope.Ra * (a - e.rock)),
        l = e.roll * i * Math.sin(__recoveredScope.Ra * a),
        u = this.I,
        d = this.still;
      r.hips.pos.x += u.sway * d;
      r.hips.pos.y += (.0015 * u.breath - u.drop) * d;
      r.hips.quat.setFromEuler(__recoveredScope.Va.set(c, -this.turnRate * .05, l + u.roll * d));
      r.bend.set(e.flex * i * Math.cos(__recoveredScope.Ra * (a - e.rock - .33)) + .006 * u.breath * d, .15 * this.turnRate, 0);
      let f = Math.min(e.phase[0], e.phase[1]),
        p = __recoveredScope.Pa(this.gait - 2, 0, 1),
        m = this.springs,
        h = Math.min(t, 1 / 30),
        g = i * (e.neck + e.nod2 * Math.cos(2 * __recoveredScope.Ra * (a - f - e.duty * .3)) + e.nod1 * Math.sin(__recoveredScope.Ra * (a - e.rock))) - c * .6,
        {
          graze: _,
          alert: v,
          look: y
        } = this.attention,
        b = .04 * Math.max(0, Math.sin(__recoveredScope.Ra * 1.3 * this.t)) ** 2,
        x = __recoveredScope.Fa(__recoveredScope.Fa(g + u.neck * d, .84 + b, _), -.2 + .4 * i * e.neck, v);
      r.neck.pitch = m.neck.step(x, h);
      r.neck.turn = __recoveredScope.Fa(__recoveredScope.Pa(.4 * this.turnRate, -.5, .5) + u.turn * d * (1 - _ * .6), __recoveredScope.Pa(y, -.9, .9), v);
      let S = __recoveredScope.Fa(__recoveredScope.Fa(-.7 * i * e.neck - .15 * p * i + u.head * d, .3 + b * 2, _), -.12, v),
        C = __recoveredScope.Fa(__recoveredScope.Fa(i * e.neck + u.neck * d, .84, _), -.2 + .4 * i * e.neck, v);
      r.head = m.head.step(S, h) - .2 * (r.neck.pitch - C);
      r.ears[0] = __recoveredScope.Fa(e.ears * i + u.ears[0] * d, -.15, v);
      r.ears[1] = __recoveredScope.Fa(e.ears * i + u.ears[1] * d, -.15, v);
      let ee = Math.min(e.phase[2], e.phase[3]),
        te = __recoveredScope.Pa(this.gait, 0, 3),
        ne = Math.min(2, Math.floor(te)),
        re = i * __recoveredScope.Fa(__recoveredScope.ro[ne], __recoveredScope.ro[ne + 1], te - ne) * Math.cos(__recoveredScope.Ra * (a - ee - e.duty / 2));
      r.tail.lift = m.tail.step(i * e.tail + re + u.tailLift * d, h);
      r.tail.swing = m.swing.step(i * .05 * Math.sin(__recoveredScope.Ra * a) - .3 * this.turnRate + u.tailSwing * d, h);
      let ie = this.going,
        ae = t > 0 ? __recoveredScope.Pa((this.speed - ie.speed) / t, -4, 4) : 0;
      r.tail.spin = t > 0 ? __recoveredScope.Pa((this.turnRate - ie.turn) / t, -6, 6) : 0;
      ie.speed = this.speed;
      ie.turn = this.turnRate;
      let oe = 9.8 / this.scale,
        se = 2 * oe * (this.speed * this.scale / 11) ** 2 * Math.sign(this.speed);
      r.tail.push.set(-this.speed * this.turnRate, -oe, -ae - se);
      r.tail.flutter = i * __recoveredScope.Ia(this.gait, 1.6, 3) * __recoveredScope.Pa(Math.abs(this.speed) * this.scale / 11, 0, 1.2);
    }
  };
}
/* Recovered binding oo. Live dependencies: ao. */
export function create_oo(__recoveredScope) {
  return function oo(e, t, n, r, i, a) {
    let o = 2 * Math.PI * i / 4,
      s = Math.max(a - 2 * i, 0),
      c = Math.PI / 4;
    __recoveredScope.ao.copy(t);
    __recoveredScope.ao[r] = 0;
    __recoveredScope.ao.normalize();
    let l = .5 * o / (o + s),
      u = 1 - __recoveredScope.ao.angleTo(e) / c;
    return Math.sign(__recoveredScope.ao[n]) === 1 ? u * l : s / (o + s) + l + l * (1 - u);
  };
}
/* Recovered binding so. Live dependencies: Ke, Vector3, oo. */
export function create_so(__recoveredScope) {
  return class e extends __recoveredScope.Ke {
    constructor(e = 1, t = 1, n = 1, r = 2, i = .1) {
      let a = r * 2 + 1;
      if (i = Math.min(e / 2, t / 2, n / 2, i), super(1, 1, 1, a, a, a), this.type = `RoundedBoxGeometry`, this.parameters = {
        width: e,
        height: t,
        depth: n,
        segments: r,
        radius: i
      }, a === 1) return;
      let o = this.toNonIndexed();
      this.index = null;
      this.attributes.position = o.attributes.position;
      this.attributes.normal = o.attributes.normal;
      this.attributes.uv = o.attributes.uv;
      let s = new __recoveredScope.Vector3(),
        c = new __recoveredScope.Vector3(),
        l = new __recoveredScope.Vector3(e, t, n).divideScalar(2).subScalar(i),
        u = this.attributes.position.array,
        d = this.attributes.normal.array,
        f = this.attributes.uv.array,
        p = u.length / 6,
        m = new __recoveredScope.Vector3(),
        h = .5 / a;
      for (let r = 0, a = 0; r < u.length; r += 3, a += 2) switch (s.fromArray(u, r), c.copy(s), c.x -= Math.sign(c.x) * h, c.y -= Math.sign(c.y) * h, c.z -= Math.sign(c.z) * h, c.normalize(), u[r + 0] = l.x * Math.sign(s.x) + c.x * i, u[r + 1] = l.y * Math.sign(s.y) + c.y * i, u[r + 2] = l.z * Math.sign(s.z) + c.z * i, d[r + 0] = c.x, d[r + 1] = c.y, d[r + 2] = c.z, Math.floor(r / p)) {
        case 0:
          m.set(1, 0, 0);
          f[a + 0] = __recoveredScope.oo(m, c, `z`, `y`, i, n);
          f[a + 1] = 1 - __recoveredScope.oo(m, c, `y`, `z`, i, t);
          break;
        case 1:
          m.set(-1, 0, 0);
          f[a + 0] = 1 - __recoveredScope.oo(m, c, `z`, `y`, i, n);
          f[a + 1] = 1 - __recoveredScope.oo(m, c, `y`, `z`, i, t);
          break;
        case 2:
          m.set(0, 1, 0);
          f[a + 0] = 1 - __recoveredScope.oo(m, c, `x`, `z`, i, e);
          f[a + 1] = __recoveredScope.oo(m, c, `z`, `x`, i, n);
          break;
        case 3:
          m.set(0, -1, 0);
          f[a + 0] = 1 - __recoveredScope.oo(m, c, `x`, `z`, i, e);
          f[a + 1] = 1 - __recoveredScope.oo(m, c, `z`, `x`, i, n);
          break;
        case 4:
          m.set(0, 0, 1);
          f[a + 0] = 1 - __recoveredScope.oo(m, c, `x`, `y`, i, e);
          f[a + 1] = 1 - __recoveredScope.oo(m, c, `y`, `x`, i, t);
          break;
        case 5:
          m.set(0, 0, -1);
          f[a + 0] = __recoveredScope.oo(m, c, `x`, `y`, i, e);
          f[a + 1] = 1 - __recoveredScope.oo(m, c, `y`, `x`, i, t);
      }
    }
    static fromJSON(t) {
      return new e(t.width, t.height, t.depth, t.segments, t.radius);
    }
  };
}
/* Recovered binding bo. Live dependencies: Vector3, MathUtils, uo, fo. */
export function create_bo(__recoveredScope) {
  return (e, t = new __recoveredScope.Vector3()) => {
    let n = __recoveredScope.MathUtils.degToRad(e);
    return t.copy(__recoveredScope.uo).multiplyScalar(Math.cos(n)).addScaledVector(__recoveredScope.fo, Math.sin(n));
  };
}
/* Recovered binding xo. Live dependencies: So, Fe, Oe, ho, _o, co, lo, po, bo, Vector3, vo, go, yo, MathUtils, mo, Te, qe, Ee, Ge, We, we. */
export function create_xo(__recoveredScope) {
  return class {
    constructor(e, t, n, r, i) {
      this.scale = t;
      this.probe = __recoveredScope.So(e);
      this.ray = new __recoveredScope.Fe();
      this.group = new __recoveredScope.Oe();
      this.group.name = `Bridle`;
      let a = 1 / t,
        o = __recoveredScope.ho.strap * a,
        s = e => this.#e(__recoveredScope._o.copy(__recoveredScope.co).addScaledVector(__recoveredScope.lo, __recoveredScope.po.crown), __recoveredScope.bo(e)),
        c = e => ({
          p: new __recoveredScope.Vector3().copy(n[e > 0 ? 0 : 1]).add(__recoveredScope.vo.set(e * .004, __recoveredScope.go.radius * a * .9, 0)),
          n: new __recoveredScope.Vector3(e, 0, 0)
        }),
        l = e => {
          let t = c(e).p,
            n = s(e * 88).p;
          return [.12, .25, .38, .5, .62, .75, .88].map(r => this.#e(__recoveredScope._o.lerpVectors(t, n, r), __recoveredScope.yo.set(e, 0, 0)));
        },
        u = [88, 60, 30, 0, -30, -60, -88].map(s);
      this.#t([c(1), ...l(1), ...u, ...l(-1).reverse(), c(-1)], o, r);
      let d = [-80, -55, -25, 0, 25, 55, 80].map(e => {
        let t = __recoveredScope.MathUtils.lerp(__recoveredScope.po.crown, __recoveredScope.po.brow, Math.cos(__recoveredScope.MathUtils.degToRad(e)) ** 2);
        return this.#e(__recoveredScope._o.copy(__recoveredScope.co).addScaledVector(__recoveredScope.lo, t), __recoveredScope.bo(e));
      });
      this.#t(d, o * .85, r);
      let f = Array.from({
        length: 16
      }, (e, t) => this.#e(__recoveredScope._o.copy(__recoveredScope.co).addScaledVector(__recoveredScope.lo, __recoveredScope.po.nose), __recoveredScope.bo(t * 22.5)));
      this.#t(f, __recoveredScope.ho.nose * a, r, true);
      let p = e => __recoveredScope.mo.map(([t, n, r]) => this.#e(__recoveredScope._o.set(t * e, n, r), __recoveredScope.yo.set(e, -.4, 0))),
        m = this.#e(__recoveredScope._o.set(0, .56, .33), __recoveredScope.yo.set(0, -1, 0)),
        h = [s(100), ...p(1), m, ...p(-1).reverse(), s(-100)];
      this.#t(h, o * .8, r);
      for (let e of n) {
        let t = new __recoveredScope.Te(new __recoveredScope.qe(__recoveredScope.go.radius * a, __recoveredScope.go.wire * a, 8, 24), i);
        t.position.copy(e).add(__recoveredScope.vo.set(Math.sign(e.x) * .004, 0, 0));
        t.rotation.y = Math.PI / 2;
        t.castShadow = true;
        this.group.add(t);
      }
      let g = new __recoveredScope.Te(new __recoveredScope.Ee(__recoveredScope.go.wire * a, __recoveredScope.go.wire * a, Math.abs(n[0].x - n[1].x), 8), i);
      g.position.lerpVectors(n[0], n[1], .5);
      g.rotation.z = Math.PI / 2;
      this.group.add(g);
      this.probe.geometry.dispose();
      this.probe = null;
    }
    #e(e, t, n = .25) {
      let r = t.clone().normalize(),
        i = __recoveredScope.vo.copy(e).addScaledVector(r, n || .2);
      this.ray.set(i, r.clone().negate());
      let a = this.ray.intersectObject(this.probe, false)[0],
        o = (__recoveredScope.ho.gap + __recoveredScope.ho.thick / 2) / this.scale;
      return {
        p: a ? a.point.clone().addScaledVector(r, o) : e.clone(),
        n: r
      };
    }
    #t(e, t, n, r = false) {
      let i = new __recoveredScope.Ge(e.map(e => e.p), r, `centripetal`),
        a = new __recoveredScope.Ge(e.map(e => e.n), r),
        o = e.length * 6,
        s = __recoveredScope.ho.thick / this.scale,
        c = [],
        l = [],
        u = new __recoveredScope.Vector3(),
        d = new __recoveredScope.Vector3(),
        f = new __recoveredScope.Vector3(),
        p = new __recoveredScope.Vector3(),
        m = r ? o : o + 1;
      for (let e = 0; e < m; e++) {
        let n = e / o;
        i.getPointAt(n, p);
        i.getTangentAt(n, u);
        a.getPoint(i.getUtoTmapping(n), d);
        f.crossVectors(u, d).normalize();
        d.crossVectors(f, u).normalize();
        for (let [e, n] of [[1, 1], [-1, 1], [-1, -1], [1, -1]]) c.push(p.x + f.x * e * t / 2 + d.x * n * s / 2, p.y + f.y * e * t / 2 + d.y * n * s / 2, p.z + f.z * e * t / 2 + d.z * n * s / 2);
      }
      for (let e = 0; e < o; e++) {
        let t = r ? (e + 1) % m : e + 1;
        for (let n = 0; n < 4; n++) {
          let r = e * 4 + n,
            i = e * 4 + (n + 1) % 4,
            a = t * 4 + (n + 1) % 4,
            o = t * 4 + n;
          l.push(r, o, i, i, o, a);
        }
      }
      if (!r) for (let [e, t] of [[0, false], [o * 4, true]]) l.push(...(t ? [e, e + 1, e + 2, e, e + 2, e + 3] : [e, e + 2, e + 1, e, e + 3, e + 2]));
      let h = new __recoveredScope.We();
      h.setAttribute(`position`, new __recoveredScope.we(c, 3));
      h.setIndex(l);
      h.computeVertexNormals();
      let g = new __recoveredScope.Te(h, n);
      return g.castShadow = true, this.group.add(g), g;
    }
  };
}
/* Recovered binding So. Live dependencies: We, Te, it. */
export function create_So(__recoveredScope) {
  return function So(e) {
    let t = e.attributes.position,
      n = e.index,
      r = [],
      i = n ? n.count : t.count;
    for (let e = 0; e < i; e += 3) {
      let i = [0, 1, 2].map(t => n ? n.getX(e + t) : e + t);
      i.every(e => t.getZ(e) > .2 && t.getY(e) > .42) && r.push(...i);
    }
    let a = new __recoveredScope.We();
    return a.setAttribute(`position`, t), a.setIndex(r), new __recoveredScope.Te(a, new __recoveredScope.it({
      side: 2
    }));
  };
}
/* Recovered binding To. Live dependencies: loadGLTF, Co, wo. Writes: wo. */
export function create_To(__recoveredScope) {
  return function To() {
    return __recoveredScope.wo ||= __recoveredScope.loadGLTF(__recoveredScope.Co).catch(e => {
      throw __recoveredScope.wo = null, e;
    }), __recoveredScope.wo;
  };
}
/* Recovered binding Oo. Live dependencies: Eo, Do. */
export function create_Oo(__recoveredScope) {
  return e => ({
    ...__recoveredScope.Eo,
    drop: __recoveredScope.Do[e] ?? __recoveredScope.Eo.drop
  });
}
/* Recovered binding Ao. Live dependencies: . */
export function create_Ao(__recoveredScope) {
  return function Ao(e, t, n) {
    let r = t.length,
      i = (e, t, n) => {
        let r = Math.hypot(t[0] - e[0], t[1] - e[1]);
        return [e[0] + (t[0] - e[0]) * n / r, e[1] + (t[1] - e[1]) * n / r];
      },
      a = (e, t) => Math.hypot(t[0] - e[0], t[1] - e[1]);
    return t.forEach((o, s) => {
      let c = t[(s + r - 1) % r],
        l = t[(s + 1) % r],
        u = Math.min(n[s], .48 * a(o, c), .48 * a(o, l)),
        d = i(o, c, u),
        f = i(o, l, u);
      s === 0 ? e.moveTo(...d) : e.lineTo(...d);
      e.quadraticCurveTo(o[0], o[1], ...f);
    }), e.closePath(), e;
  };
}
/* Recovered binding jo. Live dependencies: . */
export function create_jo(__recoveredScope) {
  return function jo(e, t) {
    let n = e.length,
      r = e.map((r, i) => {
        let a = e[(i + 1) % n],
          o = a[0] - r[0],
          s = a[1] - r[1],
          c = Math.hypot(o, s),
          l = -s / c,
          u = o / c;
        return [r[0] + l * t[i], r[1] + u * t[i], o, s];
      });
    return r.map((e, t) => {
      let [i, a, o, s] = r[(t + n - 1) % n],
        [c, l, u, d] = e,
        f = ((c - i) * d - (l - a) * u) / (o * d - s * u);
      return [i + o * f, a + s * f];
    });
  };
}
/* Recovered binding Mo. Live dependencies: ko, jo, Ao, je, Le, Ie, MathUtils, Oe, Te, so. */
export function create_Mo(__recoveredScope) {
  return function Mo(e, t) {
    let {
        width: n,
        height: r,
        top: i,
        bar: a,
        tread: o,
        depth: s,
        taper: c,
        pad: l
      } = __recoveredScope.ko,
      u = [[-n / 2, 0], [n / 2, 0], [n / 2 - .012, r * .6], [i / 2, r], [-i / 2, r], [-n / 2 + .012, r * .6]],
      d = __recoveredScope.jo(u, [o, a, a, a, a, a]),
      f = __recoveredScope.Ao(new __recoveredScope.je(), u, [.02, .02, .12, .06, .06, .12]);
    f.holes.push(__recoveredScope.Ao(new __recoveredScope.Le(), d, [.01, .01, .11, .045, .045, .11]));
    let p = new __recoveredScope.Ie(f, {
      depth: s,
      bevelEnabled: true,
      bevelSize: .004,
      bevelThickness: .004,
      bevelSegments: 2,
      curveSegments: 10
    });
    p.translate(0, 0, -s / 2);
    let m = p.attributes.position;
    for (let e = 0; e < m.count; e++) {
      let t = __recoveredScope.MathUtils.smoothstep(m.getY(e), o, r * .85);
      m.setZ(e, m.getZ(e) * (1 - (1 - c) * t));
    }
    p.computeVertexNormals();
    let h = new __recoveredScope.Oe(),
      g = new __recoveredScope.Te(p, e),
      _ = new __recoveredScope.Te(new __recoveredScope.so(d[1][0] - d[0][0] - .01, l * 2, s - .012, 2, l * .9), t);
    _.position.y = o;
    for (let e of [g, _]) {
      e.castShadow = !0;
      h.add(e);
    }
    return h;
  };
}
/* Recovered binding Po. Live dependencies: Te, Ke, Io, Fo. */
export function create_Po(__recoveredScope) {
  return class {
    constructor(e, t, n, r) {
      this.mesh = new __recoveredScope.Te(new __recoveredScope.Ke(t, 1, n).translate(0, .5, 0), r);
      this.mesh.castShadow = true;
      e.add(this.mesh);
    }
    set(e, t) {
      let n = __recoveredScope.Io.subVectors(t, e),
        r = n.length();
      this.mesh.position.copy(e);
      this.mesh.quaternion.setFromUnitVectors(__recoveredScope.Fo, n.divideScalar(r || 1));
      this.mesh.scale.set(1, r, 1);
    }
  };
}
/* Recovered binding Wo. Live dependencies: ze, createToonMaterial, Ce, Te, it, Fe, Vector3, Lo, Ro, Ae, Oe, Po, Mo, so, ko, xo, Ho, Bo, Uo, We, zo, No, MathUtils, Io, Ge, tt, Vo. */
export function create_Wo(__recoveredScope) {
  return class {
    constructor(e, t, n, r) {
      let i = t.spine1,
        a = t.head;
      e.updateMatrixWorld(true);
      let o = new __recoveredScope.ze().copy(e.matrixWorld).invert().multiply(i.matrixWorld);
      this.toModel = o.clone().invert();
      let s = e => (e.matrixAutoUpdate = false, e.matrix.copy(this.toModel), i.add(e), e),
        c = __recoveredScope.createToonMaterial({
          color: `#7a4a2a`,
          side: 2
        }, {
          rim: .8,
          hatch: 0
        }),
        l = __recoveredScope.createToonMaterial({
          color: `#c9a24e`
        }, {
          rim: 1,
          hatch: 0
        }),
        u = __recoveredScope.createToonMaterial({
          color: `#4a3326`
        }, {
          rim: .4,
          hatch: 0
        }),
        d = __recoveredScope.createToonMaterial({
          color: `#1c1c1c`
        }, {
          rim: .7,
          hatch: 0
        }),
        f = null;
      r.scene.traverse(e => {
        e.isSkinnedMesh && (f = e);
      });
      let p = f.geometry.clone(),
        m = f.skeleton.bones.map(e => n.skeleton.bones.findIndex(t => t.name === e.name)),
        h = p.attributes.skinIndex;
      for (let e = 0; e < h.array.length; e++) h.array[e] = m[h.array[e]];
      this.saddleMesh = new __recoveredScope.Ce(p, __recoveredScope.createToonMaterial({
        map: f.material.map,
        side: 2
      }, {
        rim: .8,
        hatch: 0
      }));
      this.saddleMesh.castShadow = this.saddleMesh.receiveShadow = true;
      this.saddleMesh.material.shadowSide = 1;
      this.saddleMesh.frustumCulled = false;
      this.saddleMesh.matrix.copy(n.matrix);
      this.saddleMesh.matrix.decompose(this.saddleMesh.position, this.saddleMesh.quaternion, this.saddleMesh.scale);
      n.parent.add(this.saddleMesh);
      this.saddleMesh.bind(n.skeleton, n.bindMatrix);
      this.probe = new __recoveredScope.Te(p, new __recoveredScope.it({
        side: 2
      }));
      this.ray = new __recoveredScope.Fe();
      this.low = new __recoveredScope.Vector3(0, 1 / 0, 0);
      for (let e = -.16; e <= -.04; e += .002) {
        let t = this.cast(__recoveredScope.Lo.set(0, 1, e), __recoveredScope.Ro.set(0, -1, 0));
        t && t.y < this.low.y && this.low.set(0, t.y, e);
      }
      this.strapTops = new Map();
      this.saddle = s(new __recoveredScope.Ae());
      this.turned = new __recoveredScope.Ae();
      this.turned.rotation.y = Math.PI;
      this.saddle.add(this.turned);
      this.metres = s(new __recoveredScope.Oe());
      this.straps = [0, 1].map(() => new __recoveredScope.Po(this.metres, .045, .012, c));
      this.toeOut = 15;
      this.irons = [0, 1].map(() => {
        let e = __recoveredScope.Mo(l, u),
          t = new __recoveredScope.Te(new __recoveredScope.so(.052, .07, .036, 2, .014), c);
        return t.position.y = __recoveredScope.ko.height - __recoveredScope.ko.bar / 2 + .012, t.castShadow = true, e.add(t), this.metres.add(e), e;
      });
      e.updateMatrixWorld(true);
      this.bridle = new __recoveredScope.xo(n.geometry, __recoveredScope.Ho, __recoveredScope.Bo, d, l);
      let g = new __recoveredScope.ze().copy(e.matrixWorld).invert().multiply(a.matrixWorld).invert();
      this.bridle.group.matrixAutoUpdate = false;
      this.bridle.group.matrix.copy(g);
      a.add(this.bridle.group);
      this.bit = __recoveredScope.Bo.map(t => a.worldToLocal(e.localToWorld(t.clone())));
      this.head = a;
      this.neck = t.neck1;
      this.guide = __recoveredScope.Uo.map(t => this.neck.worldToLocal(e.localToWorld(t.clone())));
      this.reins = [0, 1].map(() => {
        let e = new __recoveredScope.Te(new __recoveredScope.We(), d);
        return e.castShadow = true, e.frustumCulled = false, e;
      });
      this.model = e;
      this.seat = {
        hips: new __recoveredScope.Vector3(),
        feet: [new __recoveredScope.Vector3(), new __recoveredScope.Vector3()],
        grips: [new __recoveredScope.Vector3(), new __recoveredScope.Vector3()],
        kneeOut: .45
      };
    }
    fit(e, t) {
      let n = this.seat;
      return n.hips.set(0, this.low.y * e, this.low.z * e), n.kneeOut = t.kneeOut, n.feet.forEach((e, r) => e.set((r ? -1 : 1) * t.out, n.hips.y - t.drop, n.hips.z + t.ahead)), n.grips.forEach((e, r) => e.set((r ? -1 : 1) * t.apart / 2, n.hips.y + t.up, n.hips.z + t.reach)), this.metres.matrix.copy(this.toModel).multiply(__recoveredScope.zo.makeScale(1 / e, 1 / e, 1 / e)), this.scale = e, n.feet.forEach((e, t) => this.hang(t, e, 0)), n;
    }
    hang(e, t, n) {
      let r = __recoveredScope.Ro.copy(this.strapTop(this.seat.feet[e].z / this.scale, e ? -1 : 1)).multiplyScalar(this.scale);
      this.irons[e].position.copy(t).y -= .025 + __recoveredScope.No;
      this.irons[e].rotation.y = n + __recoveredScope.MathUtils.degToRad(e ? -this.toeOut : this.toeOut);
      this.straps[e].set(r, __recoveredScope.Lo.copy(this.irons[e].position).add(__recoveredScope.Io.set(0, __recoveredScope.ko.height + .02, 0)));
    }
    cast(e, t) {
      this.ray.set(e, t);
      let n = this.ray.intersectObject(this.probe, false)[0];
      return n ? n.point : null;
    }
    strapTop(e, t) {
      let n = Math.round(e * 500) * t;
      if (!this.strapTops.has(n)) {
        let r = this.cast(__recoveredScope.Lo.set(t * .5, this.low.y - .03, e), __recoveredScope.Ro.set(-t, 0, 0));
        this.strapTops.set(n, r ? r.clone() : new __recoveredScope.Vector3(t * .15, this.low.y - .03, e));
      }
      return this.strapTops.get(n);
    }
    updateReins(e) {
      this.head.updateWorldMatrix(true, false);
      this.neck.updateWorldMatrix(true, false);
      this.reins.forEach((t, n) => {
        let r = this.head.localToWorld(this.bit[n].clone()),
          i = this.neck.localToWorld(this.guide[n].clone()),
          a = e[n],
          o = i.clone().lerp(a, .5);
        o.y -= .03;
        let s = new __recoveredScope.Ge([r, i, o, a.clone()]);
        t.geometry.dispose();
        t.geometry = new __recoveredScope.tt(s, 20, __recoveredScope.Vo, 6, false);
      });
    }
  };
}
/* Recovered binding Qo. Live dependencies: . */
export function create_Qo(__recoveredScope) {
  return {
    pommelSide: [.215, 1.47, -.05],
    cantleSide: [.25, 1.52, -.55],
    pommel: [.035, 1.675, -.05],
    cantle: [.04, 1.75, -.585],
    pommelBack: [-.045, 1.665, -.1]
  };
}
/* Recovered binding $o. Live dependencies: . */
export function create_Dollaro(__recoveredScope) {
  return function $o(e) {
    let t = e.length,
      n = e.map(e => e[0]),
      r = [1, 2, 3].map(r => {
        let i = [];
        for (let a = 0; a < t - 1; a++) i.push((e[a + 1][r] - e[a][r]) / (n[a + 1] - n[a]));
        let a = [0];
        for (let e = 1; e < t - 1; e++) a.push(i[e - 1] * i[e] <= 0 ? 0 : (i[e - 1] + i[e]) / 2);
        a.push(0);
        for (let e = 0; e < t - 1; e++) {
          if (i[e] === 0) {
            a[e] = a[e + 1] = 0;
            continue;
          }
          let t = a[e] / i[e],
            n = a[e + 1] / i[e],
            r = Math.hypot(t, n);
          r > 3 && (a[e] = 3 * t * i[e] / r, a[e + 1] = 3 * n * i[e] / r);
        }
        return a;
      });
    return (i, a) => {
      if (i <= n[0]) return a.set(e[0][1], e[0][2], e[0][3]);
      if (i >= n[t - 1]) return a.set(e[t - 1][1], e[t - 1][2], e[t - 1][3]);
      let o = 0;
      for (; i > n[o + 1];) o++;
      let s = n[o + 1] - n[o],
        c = (i - n[o]) / s,
        l = c * c,
        u = l * c,
        d = [1, 2, 3].map((t, n) => (2 * u - 3 * l + 1) * e[o][t] + (u - 2 * l + c) * s * r[n][o] + (-2 * u + 3 * l) * e[o + 1][t] + (u - l) * s * r[n][o + 1]);
      return a.set(d[0], d[1], d[2]);
    };
  };
}
/* Recovered binding es. Live dependencies: Zo, Xo, $o, Yo, Qo. */
export function create_es(__recoveredScope) {
  return function es(e, t, n) {
    let r = e => [e.x, e.y, e.z],
      {
        x: i,
        z: a
      } = __recoveredScope.Zo,
      o = t,
      s = r(e.feet[0]),
      c = r(e.feet[1]),
      l = (e, t) => [s[0] - e * Math.sin(__recoveredScope.Xo) - .03 * Math.min(1, e / .1), s[1] + t, s[2] - e * Math.cos(__recoveredScope.Xo)];
    return {
      hips: __recoveredScope.$o([[0, i, o, a], [.18, i, o, a], [.25, i + .06, o - .01, a], [.34, i - .02, o + .02, a], [.47, i - .07, 1.06, a], [.53, .52, 1.45, a - .01], [.6, .42, 1.66, a - .01], [.67, .24, 1.66, a - .02], [.78, .12, 1.68, a - .03], [.94, e.hips.x, e.hips.y - .03, e.hips.z], [1, ...r(e.hips)]]),
      feet: [__recoveredScope.$o([[0, i + .06, .03, a + .13], [.13, i + .06, .03, a + .13], [.22, i - .06, .74, l(.26, 0)[2]], [.28, ...l(.24, .07)], [.32, ...l(.01, .045)], [.34, ...s], [1, ...s]]), __recoveredScope.$o([[0, i - .05, .03, a - .13], [.4, i - .05, .03, a - .13], [.55, i - .08, .55, a - .26], [.66, .36, 1.45, -.8], [.76, .05, 1.74, -.86], [.85, -.28, 1.58, -.66], [.93, c[0] - .01, c[1] + .05, c[2] - .13], [1, ...c]])],
      headings: [__recoveredScope.$o([[0, -Math.PI / 2, 0, 0], [.14, -Math.PI / 2, 0, 0], [.27, __recoveredScope.Xo - __recoveredScope.Yo, 0, 0], [.34, __recoveredScope.Xo - __recoveredScope.Yo, 0, 0], [.6, -.1, 0, 0], [.92, 0, 0, 0]]), null],
      grips: [__recoveredScope.$o([[0, i - .1, .95, a + .2], [.1, i - .12, 1.28, a + .22], [.2, ...__recoveredScope.Qo.pommelSide], [.4, ...__recoveredScope.Qo.pommelSide], [.55, ...__recoveredScope.Qo.pommel], [.76, ...__recoveredScope.Qo.pommel], [1, ...r(e.grips[0])]]), __recoveredScope.$o([[0, i - .1, .95, a - .2], [.1, i - .12, 1.28, a - .18], [.2, ...__recoveredScope.Qo.cantleSide], [.4, ...__recoveredScope.Qo.cantleSide], [.55, ...__recoveredScope.Qo.cantle], [.62, ...__recoveredScope.Qo.cantle], [.7, ...__recoveredScope.Qo.pommelBack], [.84, ...__recoveredScope.Qo.pommelBack], [1, ...r(e.grips[1])]])],
      fold: __recoveredScope.$o([[0, .12, 0, 0], [.18, .25, 0, 0], [.24, .4, 0, 0], [.3, .4, 0, 0], [.38, .28, 0, 0], [.46, .4, 0, 0], [.54, .85, 0, 0], [.6, 1.1, 0, 0], [.8, 1.1, 0, 0], [.87, .75, 0, 0], [.94, n, 0, 0]]),
      kneeOut: __recoveredScope.$o([[0, .15, 0, 0], [.2, 1.4, 0, 0], [.4, 1.2, 0, 0], [.62, .8, 0, 0], [.8, .55, 0, 0], [1, e.kneeOut, 0, 0]])
    };
  };
}
/* Recovered binding ts. Live dependencies: Vector3, De, T, es, solveArmReachAngle, MathUtils, Ko, qo, Zo, Jo, Go. */
export function create_ts(__recoveredScope) {
  return class {
    constructor(e, t, n) {
      this.rider = e;
      this.tack = t;
      this.seated = n;
      this.seat = {
        hips: new __recoveredScope.Vector3(),
        feet: [new __recoveredScope.Vector3(), new __recoveredScope.Vector3()],
        grips: [new __recoveredScope.Vector3(), new __recoveredScope.Vector3()],
        kneeOut: .15,
        toes: [0, 0],
        tilt: new __recoveredScope.De(),
        look: new __recoveredScope.De()
      };
      this.from = null;
      this.leftIron = new __recoveredScope.Vector3();
      this.leftHeading = 0;
      this.u = 0;
      this.dir = 0;
      this.yaw = 0;
      this._k = new __recoveredScope.Vector3();
      this._q = new __recoveredScope.T();
    }
    get active() {
      return this.dir !== 0;
    }
    begin(e) {
      if (this.active) {
        this.dir = e;
        return;
      }
      this.u = e > 0 ? 0 : 1;
      this.dir = e;
      let t = this.end = this.seated(),
        {
          build: n,
          model: r
        } = this.rider,
        i = r.hipsBind.y * r.scale - n.seat - .01;
      this.tracks = __recoveredScope.es(t, i, t.fold ?? __recoveredScope.solveArmReachAngle(n, this._k.copy(t.hips).setY(t.hips.y + n.seat), t.grips[0]));
      let a = this.rider.seat;
      this.from = e < 0 && a ? {
        hips: a.hips.clone(),
        grips: a.grips.map(e => e.clone()),
        fold: a.fold ?? t.fold,
        tilt: a.tilt?.clone(),
        look: a.look?.clone()
      } : null;
      this.rider.setLocomotion(`sit`, this.seat);
      this.#t();
    }
    stand() {
      this.dir = 0;
      this.yaw = -Math.PI / 2;
      this.rider.setLocomotion(`walk`);
      this.#e(this.rider.root);
    }
    update(e) {
      this.active && (this.u += this.dir * e / 3, this.dir > 0 && this.u >= 1 ? (this.dir = 0, this.u = 1, this.rider.setLocomotion(`sit`, this.end)) : this.dir < 0 && this.u <= 0 ? (this.u = 0, this.stand()) : this.#t(), this.active && this.tack.hang(0, this.leftIron, this.leftHeading * __recoveredScope.MathUtils.smoothstep(this.u, .2, .27)));
    }
    placeRoot(e) {
      this.active && this.#e(e);
    }
    #e(e) {
      this.tack.metres.updateWorldMatrix(true, false);
      __recoveredScope.Ko.copy(this.tack.metres.matrixWorld).multiply(__recoveredScope.qo.makeTranslation(__recoveredScope.Zo)).multiply(__recoveredScope.qo.makeRotationY(this.yaw + Math.PI));
      __recoveredScope.Ko.decompose(e.position, e.quaternion, __recoveredScope.Jo);
    }
    #t() {
      let {
        u: e,
        tracks: t,
        seat: n
      } = this;
      t.hips(e, n.hips);
      t.feet[0](e, n.feet[0]);
      t.feet[1](e, n.feet[1]);
      t.grips[0](e, n.grips[0]);
      t.grips[1](e, n.grips[1]);
      n.kneeOut = t.kneeOut(e, this._k).x;
      n.fold = t.fold(e, this._k).x;
      n.tilt.set(0, 0, 0);
      n.look.set(0, 0, 0);
      let r = this.from,
        i = r ? 1 - __recoveredScope.MathUtils.smoothstep(e, .88, 1) : 1;
      i < 1 && (n.hips.lerp(r.hips, 1 - i), n.grips.forEach((e, t) => e.lerp(r.grips[t], 1 - i)), n.fold += (r.fold - n.fold) * (1 - i), r.tilt && n.tilt.set(r.tilt.x * (1 - i), r.tilt.y * (1 - i), r.tilt.z * (1 - i)), r.look && n.look.set(r.look.x * (1 - i), r.look.y * (1 - i), r.look.z * (1 - i)));
      this.leftIron.copy(this.tack.seat.feet[0]);
      this.leftHeading = t.headings[0](e, this._k).x;
      this.yaw = -Math.PI / 2 * (1 - __recoveredScope.MathUtils.smoothstep(e, .55, .85));
      let a = this._q.setFromAxisAngle(__recoveredScope.Go, -this.yaw);
      for (let e of [n.hips, ...n.feet, ...n.grips]) e.sub(__recoveredScope.Zo).applyQuaternion(a);
      n.toes[0] = this.leftHeading - this.yaw;
    }
  };
}
/* Recovered binding as. Live dependencies: Jo, rs, is, ns, MathUtils. */
export function create_as(__recoveredScope) {
  return function as(e, t, {
    body: n,
    tack: r,
    mount: i,
    riding: a
  }) {
    r.turned.updateWorldMatrix(true, false);
    r.turned.matrixWorld.decompose(t.root.position, t.root.quaternion, __recoveredScope.Jo);
    i.placeRoot(t.root);
    i.active ? a.reset() : (r.head.updateWorldMatrix(true, false), __recoveredScope.rs.copy(r.bit[0]).add(r.bit[1]).multiplyScalar(.5).applyMatrix4(r.head.matrixWorld).applyMatrix4(__recoveredScope.is.copy(r.metres.matrixWorld).invert()), a.update(e, n, r.seat, r.metres.matrixWorld, __recoveredScope.rs, t.build), t.seat !== a.seat && t.setLocomotion(`sit`, a.seat));
    t.update(e, {
      crouch: 0,
      lean: i.active ? 0 : a.lean,
      twist: i.active ? 0 : a.twist,
      air: false,
      speed: 0
    });
    t.model ? (t.model.palmAt(`Left`, __recoveredScope.ns[0]), t.model.palmAt(`Right`, __recoveredScope.ns[1])) : t.seat.grips.forEach((e, t) => r.metres.localToWorld(__recoveredScope.ns[t].copy(e)));
    i.active && __recoveredScope.ns[1].lerp(__recoveredScope.ns[0], 1 - __recoveredScope.MathUtils.smoothstep(i.u, .84, 1));
    r.updateReins(__recoveredScope.ns);
  };
}
/* Recovered binding _s. Live dependencies: . */
export function create__s(__recoveredScope) {
  return {
    walk: {
      pitch: 1,
      roll: 1.4,
      swing: .06,
      slide: 0,
      nod: .12,
      upright: .6,
      fold: .02,
      least: 0,
      lift: 0,
      back: 0,
      absorb: 0,
      hands: .7,
      reach: 0,
      drop: 0
    },
    trot: {
      pitch: 2,
      roll: 1,
      swing: 0,
      slide: 0,
      nod: .09,
      upright: .7,
      fold: .06,
      least: 0,
      lift: 0,
      back: 0,
      absorb: 0,
      hands: .3,
      reach: 0,
      drop: 0
    },
    canter: {
      pitch: 3.5,
      roll: 1,
      swing: 0,
      slide: .5,
      nod: .05,
      upright: .85,
      fold: .04,
      least: 0,
      lift: 0,
      back: 0,
      absorb: 0,
      hands: .7,
      reach: .01,
      drop: 0
    },
    gallop: {
      pitch: .6,
      roll: .5,
      swing: 0,
      slide: 0,
      nod: .03,
      upright: .5,
      fold: 0,
      least: .8,
      lift: .1,
      back: .03,
      absorb: .75,
      hands: .3,
      reach: .1,
      drop: .03
    }
  };
}
/* Recovered binding Ss. Live dependencies: . */
export function create_Ss(__recoveredScope) {
  return (e, t, n, r) => e + (t - e) * (1 - Math.exp(-n / r));
}
/* Recovered binding Cs. Live dependencies: Vector3, De, _s, Qa, Aa, ja, Ma, gs, ys, solveArmReachAngle, ms, cs, os, to, vs, ss, ps, ds, fs, Ss, us, hs, ls, bs, xs. */
export function create_Cs(__recoveredScope) {
  return class {
    constructor(e = 11) {
      this.seat = {
        hips: new __recoveredScope.Vector3(),
        feet: [new __recoveredScope.Vector3(), new __recoveredScope.Vector3()],
        grips: [new __recoveredScope.Vector3(), new __recoveredScope.Vector3()],
        kneeOut: .45,
        fold: 0,
        tilt: new __recoveredScope.De(),
        look: new __recoveredScope.De()
      };
      this.lean = 0;
      this.twist = 0;
      this.style = {
        ...__recoveredScope._s.walk
      };
      this.styles = structuredClone(__recoveredScope._s);
      this.avg = null;
      this.was = {
        y: 0,
        v: 0
      };
      this.heave = 0;
      this.bitAvg = new __recoveredScope.Vector3();
      this.springs = {
        shoulders: __recoveredScope.Qa(2.6, .45),
        speed: __recoveredScope.Qa(.7, .9),
        bank: __recoveredScope.Qa(1.2, .8)
      };
      this.speedWas = null;
      let t = this.rand = __recoveredScope.Aa(e);
      this.idle = {
        lookTurn: new __recoveredScope.ja(t, -.55, .55, [2, 6], .45),
        lookUp: new __recoveredScope.ja(t, -.12, .12, [3, 7], .6),
        shift: new __recoveredScope.ja(t, -1, 1, [3, 9], .9),
        pat: new __recoveredScope.Ma(t, [10, 28], 3.2),
        stretch: new __recoveredScope.Ma(t, [18, 40], 2.6),
        glance: new __recoveredScope.Ma(t, [12, 30], 2.4),
        settle: new __recoveredScope.Ma(t, [20, 50], 1.3),
        gather: new __recoveredScope.Ma(t, [7, 18], 1)
      };
      this.t = 0;
      this.weight = 0;
    }
    reset() {
      this.avg = null;
      this.speedWas = null;
    }
    rest(e, t) {
      let n = {
        hips: e.hips.clone(),
        feet: e.feet.map(e => e.clone()),
        grips: e.grips.map(e => e.clone().add(__recoveredScope.gs.set(0, __recoveredScope.ys[1], __recoveredScope.ys[0]))),
        kneeOut: e.kneeOut
      };
      return n.fold = __recoveredScope.solveArmReachAngle(t, __recoveredScope.ms.copy(n.hips).setY(n.hips.y + t.seat), n.grips[0]), n;
    }
    update(e, t, n, r, i, a) {
      this.t += e;
      this.weight = Math.min(1, this.weight + e / .6);
      let o = __recoveredScope.cs(this.weight, 0, 1),
        s = this.style,
        c = t.stride,
        l = 1 - c,
        u = __recoveredScope.os(t.gait, 0, 3),
        d = Math.min(2, Math.floor(u)),
        f = u - d,
        p = this.styles[__recoveredScope.to[d]],
        m = this.styles[__recoveredScope.to[d + 1]];
      for (let e of __recoveredScope.vs) s[e] = __recoveredScope.ss(p[e], m[e], f) * c;
      __recoveredScope.ps.copy(n.hips).applyMatrix4(r);
      __recoveredScope.ds.setFromRotationMatrix(__recoveredScope.fs.extractRotation(r));
      let h = {
        y: __recoveredScope.ps.y,
        pitch: __recoveredScope.ds.x,
        roll: __recoveredScope.ds.z
      };
      this.avg || (this.avg = {
        ...h
      }, this.was = {
        y: h.y,
        v: 0
      }, this.bitAvg.copy(i));
      let g = .6;
      for (let t of [`y`, `pitch`, `roll`]) this.avg[t] = __recoveredScope.Ss(this.avg[t], h[t], e, g);
      this.bitAvg.set(__recoveredScope.Ss(this.bitAvg.x, i.x, e, g), __recoveredScope.Ss(this.bitAvg.y, i.y, e, g), __recoveredScope.Ss(this.bitAvg.z, i.z, e, g));
      let _ = h.y - this.avg.y,
        v = h.pitch - this.avg.pitch,
        y = h.roll - this.avg.roll;
      if (e > 0) {
        let t = (h.y - this.was.y) / e;
        this.heave = __recoveredScope.Ss(this.heave, (t - this.was.v) / e / __recoveredScope.us, e, .04);
        this.was = {
          y: h.y,
          v: t
        };
      }
      let b = __recoveredScope.hs.subVectors(i, this.bitAvg),
        x = this.seat.tilt;
      x.x = s.pitch * v;
      x.z = s.roll * y;
      x.y = s.swing * Math.sin(__recoveredScope.ls * (t.phase + .25));
      let S = this.springs.shoulders.step(-s.upright * (x.x + v) + s.nod * this.heave, e),
        C = Math.abs(t.speed) * t.scale,
        ee = this.springs.speed.step(C, e),
        te = e > 0 && this.speedWas !== null ? (ee - this.speedWas) / e : 0;
      this.speedWas = ee;
      let ne = __recoveredScope.os(te * .05, -.22, .18),
        re = __recoveredScope.os(-te * .012, 0, .06),
        ie = this.springs.bank.step(__recoveredScope.os(t.turnRate * C * .06, -.3, .3), e),
        ae = this.#t(e, l),
        oe = this.seat;
      oe.kneeOut = n.kneeOut;
      oe.feet.forEach((e, t) => e.copy(n.feet[t]));
      oe.hips.copy(n.hips);
      oe.hips.z += (-s.back + s.slide * v) * o;
      let se = this.#e(oe.hips, n, a);
      oe.hips.y += (__recoveredScope.os(Math.min(s.lift, se) - s.absorb * _, 0, se) + ae.settle) * o;
      oe.hips.x += ae.shift * .015 * l * o;
      oe.grips.forEach((e, t) => {
        e.copy(n.grips[t]);
        e.y += (__recoveredScope.ys[1] + s.hands * .5 * b.y - s.drop) * o;
        e.z += (__recoveredScope.ys[0] - s.hands * .6 * b.y + s.reach - re + ae.gather) * o;
        e.y += ae.gather * .5 * o;
      });
      ae.pat > 0 && oe.grips[1].lerp(__recoveredScope.gs.copy(__recoveredScope.bs).setY(__recoveredScope.bs.y + .03 * Math.abs(Math.sin(__recoveredScope.ls * 1.6 * ae.patT))), ae.pat * o);
      let ce = __recoveredScope.ms.copy(oe.hips).setY(oe.hips.y + a.seat),
        le = __recoveredScope.solveArmReachAngle(a, ce, oe.grips[0]),
        ue = (S + ne) * o,
        de = __recoveredScope.solveArmReachAngle(a, __recoveredScope.ps.copy(n.hips).setY(n.hips.y + a.seat), n.grips[0]);
      oe.fold = Math.max(__recoveredScope.ss(de, le, o) + (s.fold + ae.fold) * o + ue, __recoveredScope.ss(de, s.least, o) + ue);
      ae.pat > 0 && (oe.fold = Math.max(oe.fold, __recoveredScope.solveArmReachAngle(a, ce, oe.grips[1])));
      this.lean = ((y + x.z) * s.upright * .8 + ie + ae.lean) * o;
      this.twist = (-x.y * 4 + ae.twist) * o;
      x.x *= o;
      x.y *= o;
      x.z *= o;
      let fe = oe.look;
      return fe.x = (-.85 * (v + x.x) + ae.lookUp) * o, fe.y = (ae.lookTurn + t.turnRate * .25) * o, fe.z = 0, oe;
    }
    #e(e, t, n) {
      if (!n.leg || !n.hip) return 0;
      let r = .3;
      for (let [i, a] of [[0, 1], [1, -1]]) {
        let o = t.feet[i],
          [s, c] = n.hip,
          l = e.x + a * s - o.x,
          u = e.z - o.z,
          d = e.y + n.seat - c - (o.y + n.ankle),
          f = (__recoveredScope.xs * n.leg) ** 2 - l * l - u * u;
        r = Math.min(r, f > 0 ? Math.sqrt(f) - d : 0);
      }
      return Math.max(0, r);
    }
    #t(e, t) {
      let n = this.idle,
        r = {
          lookTurn: 0,
          lookUp: 0,
          shift: 0,
          fold: 0,
          lean: 0,
          twist: 0,
          settle: 0,
          gather: 0,
          pat: 0,
          patT: 0
        };
      r.lookTurn = n.lookTurn.update(e);
      r.lookUp = n.lookUp.update(e);
      r.shift = n.shift.update(e);
      r.lean = -r.shift * .04;
      r.fold = .012 * Math.sin(__recoveredScope.ls * this.t / 4.5);
      let i = [`pat`, `stretch`, `glance`, `settle`, `gather`].find(e => n[e].t !== null);
      for (let a of [`pat`, `stretch`, `glance`, `settle`, `gather`]) {
        if (i && i !== a || t < .9 && n[a].t === null) {
          n[a].wait = Math.max(n[a].wait, 1);
          continue;
        }
        let o = n[a].update(e);
        if (o === null) continue;
        let s = n[a].length,
          c = Math.sin(Math.PI * __recoveredScope.os(o / s, 0, 1)),
          l = __recoveredScope.cs(o, 0, .5) * (1 - __recoveredScope.cs(o, s - .5, s));
        if (a === `pat` && (r.pat = l, r.patT = o, r.lookTurn = __recoveredScope.ss(r.lookTurn, -.35, l), r.lookUp += .25 * l), a === `stretch` && (r.fold -= .16 * c, r.lookUp -= .2 * c, r.twist += .4 * Math.sin(__recoveredScope.ls * o / s) * c), a === `glance`) {
          let e = n.glance.which < .5 ? 1 : -1;
          r.twist += e * 1.6 * c;
          r.lookTurn = __recoveredScope.ss(r.lookTurn, e * 1.1, c);
        }
        a === `settle` && (r.settle = .03 * Math.sin(Math.PI * __recoveredScope.os(o / s, 0, 1)));
        a === `gather` && (r.gather = -.04 * c);
      }
      for (let e of Object.keys(r)) e !== `patT` && (r[e] *= t);
      return r;
    }
  };
}
/* Recovered binding Es. Live dependencies: . */
export function create_Es(__recoveredScope) {
  return [{
    name: `stand`,
    speed: 0
  }, {
    name: `walk`,
    speed: 1.7
  }, {
    name: `trot`,
    speed: 3.8
  }, {
    name: `canter`,
    speed: 6.5
  }, {
    name: `gallop`,
    speed: 11
  }];
}
/* Recovered binding qs. Live dependencies: Ws. */
export function create_qs(__recoveredScope) {
  return (e, t) => __recoveredScope.Ws(t - e + Math.PI, Math.PI * 2) - Math.PI;
}
/* Recovered binding Js. Live dependencies: . */
export function create_Js(__recoveredScope) {
  return e => {
    let t = Math.random() * e.reduce((e, [, t]) => e + t, 0);
    for (let [n, r] of e) if ((t -= r) <= 0) return n;
    return e[0][0];
  };
}
/* Recovered binding Ys. Live dependencies: Ds. */
export function create_Ys(__recoveredScope) {
  return function Ys(e) {
    if (!e) return null;
    let [t, n] = e.origin;
    return {
      x: t + __recoveredScope.Ds.at[0],
      z: n + __recoveredScope.Ds.at[1],
      r: __recoveredScope.Ds.r
    };
  };
}
/* Recovered binding Xs. Live dependencies: Ns, Ps, Hs. */
export function create_Xs(__recoveredScope) {
  return function Xs(e) {
    let t = e >= 0 ? __recoveredScope.Ns : __recoveredScope.Ps,
      n = Math.abs(e);
    if (n <= t[0][0]) return t[0][1];
    for (let e = 1; e < t.length; e++) {
      let [r, i] = t[e - 1],
        [a, o] = t[e];
      if (n <= a) return __recoveredScope.Hs(i, o, (n - r) / (a - r));
    }
    return 0;
  };
}
/* Recovered binding Zs. Live dependencies: Oe, Vector3, Us, ar, _r, fr, Ms, Zi, To, Ca, io, Ts, Wo, Cs, ts, Qs, As, Zo, Vs, Es, Oo, Ls, as, Qi, Rs, zs, Hs, Os, ks, qs, Js, js, Gs, Ks, Fs, Xs, Ws, Bs, nearestLakeShore, Is. */
export function create_Zs(__recoveredScope) {
  return class {
    constructor({
      hf: e,
      piste: t,
      forest: n,
      obstacles: r = [],
      lakes: i = [],
      home: a,
      rider: o,
      prints: s = null
    }) {
      Object.assign(this, {
        hf: e,
        piste: t,
        forest: n,
        obstacles: r,
        lakes: i,
        home: a,
        rider: o
      });
      this.root = new __recoveredScope.Oe();
      this.root.name = `Horse`;
      this.pos = new __recoveredScope.Vector3(a.x, e.heightAt(a.x, a.z), a.z);
      this.yaw = __recoveredScope.Us(-Math.PI, Math.PI);
      this.speed = 0;
      this.turnRate = 0;
      this.vel = new __recoveredScope.Vector3();
      this.tilt = {
        pitch: 0,
        roll: 0
      };
      this.centre = {
        x: a.x,
        z: a.z
      };
      this.goal = null;
      this.state = `roam`;
      this.doing = `graze`;
      this.t = 0;
      this.next = __recoveredScope.Us(8, 20);
      this.calm = 0;
      this.attention = {
        graze: 1,
        alert: 0,
        look: 0
      };
      this.gear = 0;
      this.reins = {
        steer: 0,
        brake: false
      };
      this.blocked = false;
      this.events = [];
      this.chips = new __recoveredScope.ar(240, {
        size: .055,
        gravity: 9,
        life: .4,
        scatter: .12,
        lift: .8,
        settle: true,
        color: `#b9cad8`
      });
      this.puffs = new __recoveredScope.ar(480, {
        size: .09,
        gravity: 4,
        life: .7,
        scatter: .2,
        lift: .9,
        settle: true,
        color: `#cddbe6`
      });
      this.sprays = [this.chips.points, this.puffs.points];
      this.loose = new __recoveredScope.Oe();
      this.loose.name = `Horse, loose`;
      this.loose.add(...this.sprays);
      this.powder = 0;
      this.sink = 0;
      this.planted = [1, 1, 1, 1];
      this.tracks = new __recoveredScope._r(s, __recoveredScope.fr.hoof, 4, {
        length: .24
      });
      this.blow = 0;
      this.breathT = 0;
      this.footprint = {
        x: this.pos.x,
        z: this.pos.z,
        yaw: this.yaw,
        hw: __recoveredScope.Ms.hw,
        hd: __recoveredScope.Ms.hd
      };
      r.push(this.footprint);
      this.spots = this.#m();
      this.ready = Promise.all([__recoveredScope.Zi(), __recoveredScope.To()]).then(([e, t]) => (this.rig = new __recoveredScope.Ca(e), this.body = new __recoveredScope.io(this.rig), this.body.scale = __recoveredScope.Ts, this.rig.scene.scale.setScalar(__recoveredScope.Ts), this.root.add(this.rig.scene), this.tack = new __recoveredScope.Wo(this.rig.scene, this.rig.bones, this.rig.mesh, t), this.loose.add(...this.tack.reins), this.riding = new __recoveredScope.Cs(), this.mount = new __recoveredScope.ts(o, this.tack, () => this.riding.rest(this.tack.seat, o.build)), this.#y(), this));
    }
    canMount(e) {
      return !this.body || ![`roam`, `notice`, `come`, `wait`].includes(this.state) || this.speed > 1.2 ? false : __recoveredScope.Qs(this.footprint, e.x, e.z) < __recoveredScope.As;
    }
    beginMount(e) {
      this.#r(`present`);
      this.who = {
        pos: e
      };
    }
    wayRound(e, t) {
      let n = Math.cos(this.yaw),
        r = Math.sin(this.yaw),
        i = e.x - this.pos.x,
        a = e.z - this.pos.z,
        o = i * n - a * r,
        s = i * r + a * n;
      if (Math.hypot(o - __recoveredScope.Zo.x, s - __recoveredScope.Zo.z) < .15) return null;
      let c = __recoveredScope.Zo.x,
        l = __recoveredScope.Zo.z,
        u = s > -.8;
      return o < .6 && ((u ? s > 1.8 : s < -2.2) ? (c = .8, l = u ? 1.95 : -2.35) : (c = Math.min(o, -.8), l = u ? 2 : -2.4)), t.set(this.pos.x + c * n + l * r, 0, this.pos.z - c * r + l * n);
    }
    mountNow() {
      this.state === `present` && (this.#r(`mount`), this.speed = this.turnRate = 0, this.attention.alert = 0, this.events.push({
        type: `mounting`
      }), this.rider.model ? this.mount.begin(1) : this.rider.setLocomotion(`sit`, this.riding.rest(this.tack.seat, this.rider.build)));
    }
    dismount() {
      this.state === `ridden` && this.#r(`pullup`);
    }
    shift(e) {
      this.gear = __recoveredScope.Vs(this.gear + e, 0, __recoveredScope.Es.length - 1);
    }
    get carrying() {
      return [`mount`, `ridden`, `pullup`, `dismount`].includes(this.state);
    }
    update(e, t, n, r) {
      if (this.chips.update(e), this.puffs.update(e), !this.body) return;
      this.#i(e, n, r);
      this.#g(e);
      this.#y();
      let i = r && r.position.distanceTo(this.pos) > 400 && !this.carrying;
      this.root.visible = !i;
      for (let e of this.tack.reins) e.visible = !i;
      if (i) return;
      let a = this.body;
      a.speed = Math.max(this.speed, Math.abs(this.turnRate) * .7) / __recoveredScope.Ts;
      a.turnRate = this.turnRate;
      a.idling = ![`present`, `mount`, `dismount`].includes(this.state);
      let o = this.attention,
        s = a.attention,
        c = 1 - Math.exp(-e * 2.5);
      if (s.graze += (o.graze - s.graze) * c, s.alert += (o.alert - s.alert) * c, s.look += (o.look - s.look) * (1 - Math.exp(-e * 4)), a.update(e), this.root.updateMatrixWorld(true), this.#e(), this.#t(e), this.tack.fit(__recoveredScope.Ts, __recoveredScope.Oo(this.rider.modelId)), this.mount.active && this.mount.update(e), this.#o(), !this.carrying && r && r.position.distanceTo(this.pos) < 80) {
        let e = this.tack.seat;
        [1, -1].forEach((t, n) => this.tack.metres.localToWorld(__recoveredScope.Ls[n].set(t * .06, e.hips.y + .1, e.hips.z + .3)));
        this.tack.updateReins(__recoveredScope.Ls);
      }
      for (let e of this.tack.reins) e.visible = this.carrying || r && r.position.distanceTo(this.pos) < 80;
    }
    seat(e, t) {
      __recoveredScope.as(e, t, this);
    }
    #e() {
      let e = this.body,
        t = __recoveredScope.Vs(this.speed / 11, 0, 1),
        n = this.powder,
        r = Math.sin(this.yaw),
        i = Math.cos(this.yaw);
      __recoveredScope.Qi.forEach((a, o) => {
        let s = e.legs[o].plant,
          c = this.planted[o];
        if (this.planted[o] = s, s === c) return;
        let l = this.rig.bones[a.chain[4]].getWorldPosition(__recoveredScope.Rs);
        if (l.y = this.hf.heightAt(l.x, l.z), s) {
          this.tracks.stamp(o, l.x, l.z, this.yaw);
          this.events.push({
            type: `hoof`,
            at: l.clone(),
            level: .35 + .65 * t,
            powder: n
          });
          let a = Math.round((3 + 8 * t) * (1 - n)),
            s = Math.round((6 + 16 * t) * n);
          a && this.chips.emit(l, __recoveredScope.zs.set(r * this.speed * .08, .1 + .4 * t, i * this.speed * .08), a, .5 + .8 * t);
          s && this.puffs.emit(l, __recoveredScope.zs.set(r * this.speed * .05, .2 + .5 * t, i * this.speed * .05), s, .5 + .9 * t);
          o === 0 && e.gait > 1.5 && this.#n(true, t);
        } else {
          if (t > .3) {
            let e = Math.round(5 * t * (1 - n)),
              a = Math.round(10 * t * n);
            e && this.chips.emit(l, __recoveredScope.zs.set(-r * (1 + 2 * t), .3, -i * (1 + 2 * t)), e, .6);
            a && this.puffs.emit(l, __recoveredScope.zs.set(-r * (1.2 + 2.5 * t), .5, -i * (1.2 + 2.5 * t)), a, .8);
          }
          o === 0 && e.gait > 1.5 && this.#n(false, t);
        }
      });
    }
    #t(e) {
      let t = this.body.gait > 1.5 && this.speed > 4;
      if (this.blow = __recoveredScope.Vs(this.blow + e * (t ? .05 * (this.body.gait - 1) : -.03), 0, 1), t || this.blow < .12) {
        this.breathT = .5;
        return;
      }
      if ((this.breathT -= e) > 0) return;
      this.exhale = !this.exhale;
      this.#n(this.exhale, 0);
      let n = __recoveredScope.Hs(3, 1.3, this.blow);
      this.breathT = n * (this.exhale ? .4 : .6);
    }
    #n(e, t) {
      let n = this.rig.bones.head.getWorldPosition(__recoveredScope.Rs).clone();
      this.events.push({
        type: `breath`,
        at: n,
        out: e,
        level: __recoveredScope.Vs(.3 + .4 * t + .5 * this.blow, 0, 1)
      });
    }
    #r(e) {
      this.state = e;
      this.t = 0;
      this.goal = null;
      this.comeYaw = void 0;
    }
    #i(e, t, n) {
      this.t += e;
      this.calm -= e;
      let r = this.attention,
        i = t ? Math.hypot(t.pos.x - this.pos.x, t.pos.z - this.pos.z) : 1 / 0,
        a = t ? Math.hypot(t.vel.x, t.vel.z) : 0;
      switch (!t && [`notice`, `come`, `wait`].includes(this.state) && (this.#s(), this.calm = 5), this.state) {
        case `roam`:
          this.#a(e);
          r.alert = 0;
          Math.hypot(this.pos.x - this.home.x, this.pos.z - this.home.z) > this.home.r * 1.5 && (!n || n.position.distanceTo(this.pos) > 300) && this.#c();
          t && i < __recoveredScope.Os && this.calm <= 0 && (this.#r(`notice`), this.events.push({
            type: `hello`,
            at: this.pos.clone()
          }));
          break;
        case `notice`:
          r.graze = 0;
          r.alert = 1;
          this.#d(t.pos);
          this.goal = Math.abs(this.#u(t.pos)) > 1.3 ? {
            x: this.pos.x,
            z: this.pos.z,
            speed: 0,
            stop: 1,
            face: Math.atan2(t.pos.x - this.pos.x, t.pos.z - this.pos.z)
          } : null;
          i > __recoveredScope.Os * 1.5 ? (this.#s(), this.calm = 8) : this.t > 1.6 && a < __recoveredScope.ks && this.#r(`come`);
          break;
        case `come`:
          {
            r.graze = 0;
            let e = Math.hypot(t.pos.x - this.pos.x, t.pos.z - this.pos.z) > 6;
            (e || this.comeYaw === void 0) && (this.comeYaw = e ? Math.atan2(t.pos.x - this.pos.x, t.pos.z - this.pos.z) : this.yaw);
            let n = this.#l(t.pos, this.comeYaw),
              o = Math.hypot(n.x - this.pos.x, n.z - this.pos.z);
            r.alert = i < 7 ? .8 : .35;
            this.#d(t.pos);
            this.goal = {
              x: n.x,
              z: n.z,
              speed: o > 12 ? 3.2 : 1.5,
              stop: .25,
              face: n.yaw
            };
            o < .4 && this.speed < .3 && Math.abs(__recoveredScope.qs(this.yaw, n.yaw)) < .35 ? this.#r(`wait`) : (i > __recoveredScope.Os * 1.6 || a > 7 || this.t > 30 && i > 6) && (this.#s(), this.calm = 15);
            break;
          }
        case `wait`:
          {
            r.graze = 0;
            r.alert = i < 8 ? .6 : .3;
            this.#d(t.pos);
            let e = this.#l(t.pos, this.yaw);
            Math.hypot(e.x - this.pos.x, e.z - this.pos.z) > 3 && a < 1 && this.#r(`come`);
            i > __recoveredScope.Os * 1.2 ? (this.t > 6 || i > 50) && (this.#s(), this.calm = 20) : this.t = Math.min(this.t, 1);
            break;
          }
        case `present`:
          r.graze = 0;
          r.alert = .4;
          this.#d(this.who.pos);
          this.t > 8 && this.mountNow();
          break;
        case `mount`:
        case `dismount`:
          r.graze = r.alert = 0;
          break;
        case `ridden`:
          r.graze = r.alert = 0;
          break;
        case `pullup`:
          r.graze = r.alert = 0;
          this.gear = 0;
          this.speed < .15 && Math.abs(this.turnRate) < .15 && (this.#r(`dismount`), this.speed = this.turnRate = 0, this.rider.model && this.mount.begin(-1));
      }
    }
    #a(e) {
      let t = this.attention;
      if (this.next -= e, this.doing === `graze` ? (t.graze = 1, !this.goal && Math.random() < e / 6 && (this.goal = this.#f(__recoveredScope.Us(.8, 2), .5)), this.goal && this.#p(this.goal, .3) && (this.goal = null)) : this.doing === `walk` ? (t.graze = .15, (!this.goal || this.#p(this.goal, .6)) && (this.next = 0)) : t.graze = 0, !(this.next > 0)) {
        if (this.doing = __recoveredScope.Js(this.doing === `graze` ? [[`walk`, 6], [`stand`, 4]] : this.doing === `walk` ? [[`graze`, 7], [`stand`, 3]] : [[`graze`, 6], [`walk`, 4]]), this.goal = null, this.doing === `graze`) this.next = __recoveredScope.Us(15, 40);else if (this.doing === `stand`) this.next = __recoveredScope.Us(6, 16);else {
          let e = this.#h();
          this.goal = {
            x: e.x,
            z: e.z,
            speed: __recoveredScope.Us(1.2, 1.7),
            stop: .4
          };
          this.next = 40;
        }
      }
    }
    #o() {
      this.mount.active || (this.state === `mount` && this.rider.locomotion === `sit` ? (this.#r(`ridden`), this.gear = 0, this.riding.reset(), this.events.push({
        type: `seated`
      })) : this.state === `dismount` && (this.#r(`wait`), this.centre = {
        x: this.pos.x,
        z: this.pos.z
      }, this.calm = 10, this.events.push({
        type: `dismounted`
      })));
    }
    standSpot(e = new __recoveredScope.Vector3()) {
      return this.tack.metres.updateWorldMatrix(true, false), e.copy(__recoveredScope.Zo).applyMatrix4(this.tack.metres.matrixWorld), e.y = this.hf.heightAt(e.x, e.z), e;
    }
    #s() {
      this.#r(`roam`);
      this.doing = `stand`;
      this.next = __recoveredScope.Us(3, 8);
    }
    #c() {
      let e = this.#h(this.home);
      this.pos.set(e.x, this.hf.heightAt(e.x, e.z), e.z);
      this.centre = {
        x: this.home.x,
        z: this.home.z
      };
      this.speed = this.turnRate = 0;
      this.goal = null;
      this.#s();
    }
    #l(e, t) {
      let n = Math.sin(t),
        r = Math.cos(t),
        i = Math.cos(t),
        a = -Math.sin(t);
      return {
        x: e.x - i * __recoveredScope.js[0] - n * __recoveredScope.js[1],
        z: e.z - a * __recoveredScope.js[0] - r * __recoveredScope.js[1],
        yaw: t
      };
    }
    #u(e) {
      return __recoveredScope.qs(this.yaw, Math.atan2(e.x - this.pos.x, e.z - this.pos.z));
    }
    #d(e) {
      let t = e.x - this.pos.x,
        n = e.z - this.pos.z,
        r = Math.cos(this.yaw),
        i = Math.sin(this.yaw),
        a = t * r - n * i,
        o = t * i + n * r,
        s = Math.atan2(a, o - .5);
      this.attention.look = __recoveredScope.Vs(s, -1.2, 1.2) * (1 - __recoveredScope.Gs(Math.abs(s), 1.8, 2.6));
    }
    #f(e, t) {
      return {
        x: this.pos.x + Math.sin(this.yaw) * e,
        z: this.pos.z + Math.cos(this.yaw) * e,
        speed: t,
        stop: .1
      };
    }
    #p(e, t) {
      return Math.hypot(e.x - this.pos.x, e.z - this.pos.z) < t;
    }
    #m() {
      let {
          x: e,
          z: t,
          r: n
        } = this.home,
        r = [];
      for (let i = 0; i < 400 && r.length < 40; i++) {
        let i = __recoveredScope.Us(0, Math.PI * 2),
          a = n * Math.sqrt(Math.random()),
          o = e + Math.cos(i) * a,
          s = t + Math.sin(i) * a;
        __recoveredScope.Ks(Math.acos(this.hf.normalAt(o, s, __recoveredScope.Fs).y)) < 12 && this.#v(o, s, 1.5) && r.push({
          x: o,
          z: s
        });
      }
      return r.length ? r : [{
        x: e,
        z: t
      }];
    }
    #h(e = this.centre) {
      let t = this.spots.filter(t => Math.hypot(t.x - e.x, t.z - e.z) < this.home.r);
      if (t.length && Math.hypot(e.x - this.home.x, e.z - this.home.z) < this.home.r) return t[Math.floor(Math.random() * t.length)];
      for (let t = 0; t < 12; t++) {
        let t = __recoveredScope.Us(0, Math.PI * 2),
          n = __recoveredScope.Us(4, 12),
          r = e.x + Math.cos(t) * n,
          i = e.z + Math.sin(t) * n;
        if (this.#v(r, i, 1) && __recoveredScope.Ks(Math.acos(this.hf.normalAt(r, i, __recoveredScope.Fs).y)) < 20) return {
          x: r,
          z: i
        };
      }
      return {
        x: e.x,
        z: e.z
      };
    }
    #g(e) {
      let t = 0,
        n = 0,
        r = Math.max(Math.abs(this.speed), .5),
        i = this.speed < .6 ? 1.3 : __recoveredScope.Vs(9 / r, .8, 1.5);
      if (this.state === `ridden` || this.state === `pullup`) {
        t = __recoveredScope.Es[this.gear].speed;
        n = this.state === `ridden` ? this.reins.steer * i : 0;
      } else if (this.goal) {
        let e = this.goal,
          r = e.x - this.pos.x,
          a = e.z - this.pos.z,
          o = Math.hypot(r, a),
          s;
        o > e.stop ? (s = Math.atan2(r, a), t = Math.min(e.speed, Math.sqrt(2.4 * Math.max(0, o - e.stop))), t > .3 && (s = this.#_(s, Math.max(2, this.speed * .8)))) : s = e.face ?? this.yaw;
        let c = __recoveredScope.qs(this.yaw, s);
        n = __recoveredScope.Vs(c * 2.5, -i, i);
        Math.abs(c) > 1 && (t = Math.min(t, .6));
      }
      let a = Math.sin(this.yaw),
        o = Math.cos(this.yaw),
        s = Math.sign(t || this.speed) || 1,
        c = this.hf.heightAt(this.pos.x + a * 1.5 * s, this.pos.z + o * 1.5 * s) - this.hf.heightAt(this.pos.x, this.pos.z);
      t = Math.min(t, __recoveredScope.Xs(__recoveredScope.Ks(Math.atan2(c, 1.5))));
      let l = 1.4 + this.speed ** 2 / 12;
      this.blocked = t > 0 && [.5, 1].some(e => !this.#v(this.pos.x + a * l * e, this.pos.z + o * l * e, .45));
      this.blocked && (t = 0);
      let u = this.blocked ? 6 : this.reins.brake && this.state === `ridden` ? 5.5 : 3;
      if (this.speed += __recoveredScope.Vs(t - this.speed, -u * e, 2.6 * e), this.turnRate += (n - this.turnRate) * (1 - Math.exp(-e * 6)), this.yaw = __recoveredScope.Ws(this.yaw + this.turnRate * e + Math.PI, Math.PI * 2) - Math.PI, this.speed > .001) {
        let t = this.pos.x + Math.sin(this.yaw) * this.speed * e,
          n = this.pos.z + Math.cos(this.yaw) * this.speed * e;
        this.#v(t, n, .4) ? (this.pos.x = t, this.pos.z = n) : this.speed = 0;
      }
      this.vel.set(Math.sin(this.yaw) * this.speed, 0, Math.cos(this.yaw) * this.speed);
      let d = Math.cos(this.yaw),
        f = Math.sin(this.yaw),
        p = (e, t) => this.hf.heightAt(this.pos.x + f * e + d * t, this.pos.z + d * e - f * t),
        m = p(.35, 0),
        h = p(-.87, 0),
        g = p(-.26, .5),
        _ = p(-.26, -.5),
        v = 1 - __recoveredScope.Gs(this.piste.distAt(this.pos.x, this.pos.z), 16, 20);
      this.powder = (1 - v) * (1 - .7 * (1 - __recoveredScope.Gs(this.hf.normalAt(this.pos.x, this.pos.z, __recoveredScope.Fs).y, .77, .83)));
      this.sink += (this.powder * __recoveredScope.Bs - this.sink) * (1 - Math.exp(-e * 4));
      this.pos.y = (m + h) / 2 - this.sink;
      this.tilt.pitch = Math.atan2(h - m, 1.22);
      this.tilt.roll = Math.atan2(g - _, 1) * .6;
    }
    #_(e, t) {
      for (let n of [0, .35, -.35, .7, -.7, 1.1, -1.1, 1.6, -1.6]) {
        let r = e + n;
        if (this.#v(this.pos.x + Math.sin(r) * t, this.pos.z + Math.cos(r) * t, .6)) return r;
      }
      return e;
    }
    #v(e, t, n) {
      let r = this.hf;
      return !r.inside(e, t, 40) || r.holeAt(e, t) || this.forest.hit(e, t, n) || (__recoveredScope.nearestLakeShore(this.lakes, e, t, 2)?.d ?? 1) < .5 ? false : this.obstacles.every(r => r === this.footprint || __recoveredScope.Qs(r, e, t) > n);
    }
    #y() {
      this.root.position.copy(this.pos);
      this.root.quaternion.setFromEuler(__recoveredScope.Is.set(this.tilt.pitch, this.yaw, this.tilt.roll));
      let e = this.footprint;
      e.x = this.pos.x - Math.sin(this.yaw) * __recoveredScope.Ms.back;
      e.z = this.pos.z - Math.cos(this.yaw) * __recoveredScope.Ms.back;
      e.yaw = this.yaw;
    }
  };
}
/* Recovered binding Qs. Live dependencies: . */
export function create_Qs(__recoveredScope) {
  return function Qs(e, t, n) {
    let r = Math.cos(e.yaw),
      i = Math.sin(e.yaw),
      a = t - e.x,
      o = n - e.z;
    return Math.hypot(Math.max(0, Math.abs(a * r - o * i) - e.hw), Math.max(0, Math.abs(a * i + o * r) - e.hd));
  };
}
/* Recovered binding $s. Live dependencies: . */
export function create_Dollars(__recoveredScope) {
  return function $s(e) {
    let t = (t, n) => e.filter(e => e.name === t).sort((e, t) => {
        let r = e => Math.hypot(e.points.at(-1)[0] - n[0], e.points.at(-1)[1] - n[1]);
        return r(e) - r(t);
      })[0],
      n = t(`青格里道`, [-1183, 4512]),
      r = t(`青格里道`, [-722, 2710]),
      i = t(`望泉道`, [-409, 347]),
      a = t(`云霄峰道`, [-307, 413]);
    return [n, r, i, a].every(e => e?.points?.length > 2) ? [n.points.at(-3), a.points[0]].map(([e, t]) => ({
      x: e,
      z: t
    })) : null;
  };
}
/* Recovered binding ec. Live dependencies: . */
export function create_ec(__recoveredScope) {
  return function* ec(e, t, n, {
    cell: r = 10,
    margin: i = 300,
    limit: a = 3e4,
    slice: o = 1 / 0
  } = {}) {
    let s = (e, t) => {
      let r = Math.hypot(t.x - e.x, t.z - e.z),
        i = Math.max(1, Math.ceil(r / 2));
      for (let r = 1; r <= i; r++) if (n(e.x + (t.x - e.x) * r / i, e.z + (t.z - e.z) * r / i)) return false;
      return true;
    };
    if (s(e, t)) return [{
      ...e
    }, {
      ...t
    }];
    let c = Math.min(e.x, t.x) - i,
      l = Math.max(e.x, t.x) + i,
      u = Math.min(e.z, t.z) - i,
      d = Math.max(e.z, t.z) + i,
      f = (e, t) => `${e},${t}`,
      p = (t, n) => ({
        x: e.x + t * r,
        z: e.z + n * r
      }),
      m = e => Math.hypot(t.x - e.x, t.z - e.z),
      h = [],
      g = new Map();
    function _(e) {
      let t = h.length;
      for (h.push(e); t;) {
        let n = t - 1 >> 1;
        if (h[n].f <= e.f) break;
        h[t] = h[n];
        t = n;
      }
      h[t] = e;
    }
    function v() {
      let e = h[0],
        t = h.pop();
      if (h.length) {
        let e = 0;
        for (;;) {
          let n = e * 2 + 1;
          if (n >= h.length || (n + 1 < h.length && h[n + 1].f < h[n].f && n++, h[n].f >= t.f)) break;
          h[e] = h[n];
          e = n;
        }
        h[e] = t;
      }
      return e;
    }
    let y = {
      i: 0,
      j: 0,
      p: {
        ...e
      },
      g: 0,
      f: m(e),
      parent: null
    };
    g.set(`0,0`, 0);
    _(y);
    let b = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]],
      x = null,
      S = 0;
    for (; h.length && S++ < a;) {
      S % o === 0 && (yield S);
      let e = v(),
        n = f(e.i, e.j);
      if (e.g === g.get(n)) {
        if (m(e.p) <= r * 1.5 && s(e.p, t)) {
          x = {
            p: {
              ...t
            },
            parent: e
          };
          break;
        }
        for (let [t, n] of b) {
          let i = e.i + t,
            a = e.j + n,
            o = p(i, a);
          if (o.x < c || o.x > l || o.z < u || o.z > d) continue;
          let h = f(i, a),
            v = e.g + r * Math.hypot(t, n);
          if (v >= (g.get(h) ?? 1 / 0) || !s(e.p, o)) continue;
          let y = {
            i,
            j: a,
            p: o,
            g: v,
            f: v + m(o) * 2,
            parent: e
          };
          g.set(h, v);
          _(y);
        }
      }
    }
    if (!x) return null;
    let C = [];
    for (let e = x; e; e = e.parent) C.push(e.p);
    C.reverse();
    let ee = [C[0]];
    for (let e = 0; e < C.length - 1;) {
      let t = C.length - 1;
      for (; t > e + 1 && !s(C[e], C[t]);) t--;
      ee.push(C[t]);
      e = t;
    }
    return ee;
  };
}
/* Recovered binding sh. Live dependencies: MathUtils, camera. */
export function create_sh(__recoveredScope) {
  return e => 1 - __recoveredScope.MathUtils.smoothstep(__recoveredScope.camera.position.distanceTo(e), 4, 50);
}
/* Recovered binding ch. Live dependencies: L, sh, Y, oh, I, ws, ug, Nd, mh. Writes: oh, _h. */
export function create_ch(__recoveredScope) {
  return function ch(e) {
    e.type === `hoof` && __recoveredScope.L.hoof(__recoveredScope.sh(e.at) * e.level, e.powder);
    e.type === `breath` && __recoveredScope.L.breath(__recoveredScope.sh(e.at) * e.level, e.out);
    e.type === `hello` && __recoveredScope.Y - __recoveredScope.oh > 60 && (__recoveredScope.I.toast(`${__recoveredScope.ws.zh} · ${__recoveredScope.ws.en}`, 2e3), __recoveredScope.oh = __recoveredScope.Y);
    e.type === `mounting` && __recoveredScope.ug();
    e.type === `seated` && (__recoveredScope._h = 0, __recoveredScope.I.toast(__recoveredScope.Nd.on ? `Stick up: faster · down: slower` : `W faster · S slower`, 2200));
    e.type === `dismounted` && __recoveredScope.mh();
  };
}
/* Recovered binding lh. Live dependencies: $, Y, _m, camera, ch. */
export function create_lh(__recoveredScope) {
  return function lh(e) {
    if (__recoveredScope.$) {
      __recoveredScope.$.update(e, __recoveredScope.Y, __recoveredScope._m(), __recoveredScope.camera);
      for (let e of __recoveredScope.$.events.splice(0)) __recoveredScope.ch(e);
    }
  };
}
/* Recovered binding uh. Live dependencies: rider, physics, F, hh, $, I. Writes: Zh, W. */
export function create_uh(__recoveredScope) {
  return function uh() {
    __recoveredScope.Zh = __recoveredScope.rider.locomotion === `walk`;
    __recoveredScope.W = `horse`;
    __recoveredScope.physics.vel.set(0, 0, 0);
    __recoveredScope.physics.yawRate = __recoveredScope.physics.jumpCharge = __recoveredScope.physics.slip = 0;
    __recoveredScope.F.gap(__recoveredScope.physics.pos);
    __recoveredScope.hh.up = __recoveredScope.hh.down = true;
    __recoveredScope.hh.held = 0;
    __recoveredScope.$.beginMount(__recoveredScope.physics.pos);
    __recoveredScope.I.prompt(``);
  };
}
/* Recovered binding dh. Live dependencies: $. */
export function create_dh(__recoveredScope) {
  return function dh() {
    __recoveredScope.$.state === `ridden` && __recoveredScope.$.dismount();
  };
}
/* Recovered binding ph. Live dependencies: rider, $, Pp, Fp, physics, fh, MathUtils, Qu. Writes: Pp. */
export function create_ph(__recoveredScope) {
  return function ph(e) {
    if (__recoveredScope.rider.locomotion !== `walk` && !__recoveredScope.rider.setLocomotion(`walk`)) __recoveredScope.$.mountNow();else for (__recoveredScope.Pp += e; __recoveredScope.Pp >= __recoveredScope.Fp; __recoveredScope.Pp -= __recoveredScope.Fp) {
      let e = __recoveredScope.$.wayRound(__recoveredScope.physics.pos, __recoveredScope.fh);
      if (!e) {
        __recoveredScope.$.mountNow();
        __recoveredScope.Pp = 0;
        return;
      }
      let t = __recoveredScope.MathUtils.euclideanModulo(__recoveredScope.Qu(e.x - __recoveredScope.physics.pos.x, e.z - __recoveredScope.physics.pos.z) - __recoveredScope.physics.yaw + Math.PI, Math.PI * 2) - Math.PI;
      __recoveredScope.physics.yaw += __recoveredScope.MathUtils.clamp(t, -6 * __recoveredScope.Fp, 6 * __recoveredScope.Fp);
      __recoveredScope.physics.stepWalk(__recoveredScope.Fp, {
        walk: Math.abs(t) < 1.2,
        run: false,
        steer: 0,
        brake: false
      });
    }
  };
}
/* Recovered binding mh. Live dependencies: rider, nm, $, physics, Qu, Zh, kp, I, F. Writes: W. */
export function create_mh(__recoveredScope) {
  return function mh() {
    let e = __recoveredScope.rider.locomotion === `walk` ? __recoveredScope.nm.copy(__recoveredScope.rider.root.position) : __recoveredScope.$.standSpot(__recoveredScope.nm);
    __recoveredScope.W = `ride`;
    __recoveredScope.physics.reset(e.x, e.z, __recoveredScope.Qu(__recoveredScope.$.pos.x - e.x, __recoveredScope.$.pos.z - e.z));
    __recoveredScope.rider.setLocomotion(__recoveredScope.Zh ? `walk` : `ride`);
    __recoveredScope.kp(0, true);
    __recoveredScope.I.prompt(``);
    __recoveredScope.F.gap(__recoveredScope.physics.pos);
  };
}
/* Recovered binding gh. Live dependencies: $, hh, playerInput, I, Es. */
export function create_gh(__recoveredScope) {
  return function gh(e) {
    if (__recoveredScope.$.state !== `ridden`) {
      __recoveredScope.hh.up = __recoveredScope.playerInput.tuck;
      __recoveredScope.hh.down = __recoveredScope.playerInput.brake;
      __recoveredScope.$.reins.steer = 0;
      __recoveredScope.$.reins.brake = false;
      return;
    }
    let t = __recoveredScope.$.gear;
    __recoveredScope.playerInput.tuck && !__recoveredScope.hh.up && __recoveredScope.$.shift(1);
    __recoveredScope.playerInput.brake && !__recoveredScope.hh.down && __recoveredScope.$.shift(-1);
    __recoveredScope.hh.up = __recoveredScope.playerInput.tuck;
    __recoveredScope.hh.down = __recoveredScope.playerInput.brake;
    __recoveredScope.hh.held = __recoveredScope.playerInput.brake ? __recoveredScope.hh.held + e : 0;
    __recoveredScope.hh.held > .35 && (__recoveredScope.$.gear = 0);
    __recoveredScope.$.reins.brake = __recoveredScope.hh.held > .35;
    __recoveredScope.$.reins.steer = __recoveredScope.playerInput.steer;
    __recoveredScope.$.gear !== t && __recoveredScope.I.toast(__recoveredScope.Es[__recoveredScope.$.gear].name.replace(/^./, e => e.toUpperCase()), 900);
  };
}
/* Recovered binding vh. Live dependencies: gh, $, Y, camera, ch, W, rider, cg, dg, ph, kp, physics, Qu, xh, I, _h. Writes: _h. */
export function create_vh(__recoveredScope) {
  return function vh(e) {
    __recoveredScope._h += e;
    __recoveredScope.gh(e);
    __recoveredScope.$.update(e, __recoveredScope.Y, null, __recoveredScope.camera);
    for (let e of __recoveredScope.$.events.splice(0)) __recoveredScope.ch(e);
    if (__recoveredScope.W !== `horse`) return;
    if (__recoveredScope.$.carrying && __recoveredScope.rider.locomotion === `sit`) {
      __recoveredScope.$.seat(e, __recoveredScope.rider);
      __recoveredScope.cg && __recoveredScope.dg(e);
    } else {
      __recoveredScope.$.state === `present` && __recoveredScope.ph(e);
      __recoveredScope.kp(e);
      for (let e of __recoveredScope.$.events.splice(0)) __recoveredScope.ch(e);
    }
    __recoveredScope.$.carrying && (__recoveredScope.physics.pos.copy(__recoveredScope.$.pos), __recoveredScope.physics.vel.copy(__recoveredScope.$.vel), __recoveredScope.physics.yaw = __recoveredScope.Qu(Math.sin(__recoveredScope.$.yaw), Math.cos(__recoveredScope.$.yaw)));
    __recoveredScope.xh(e);
    let t = __recoveredScope.$.state === `ridden`;
    __recoveredScope.I.prompt(t ? `<kbd>W</kbd> faster · <kbd>S</kbd> slower, hold to stop · <kbd>A</kbd><kbd>D</kbd> steer · <kbd>E</kbd> get off` : ``, t && __recoveredScope._h < 6 ? `Stick up: faster · down: slower, hold to stop` : ``);
  };
}
/* Recovered binding bh. Live dependencies: $, Sf, yh, pg, G, fg, MathUtils, U, Ef, vu, groundHeightfield. */
export function create_bh(__recoveredScope) {
  return function bh(e, t) {
    let n = Math.min(__recoveredScope.$.speed, 12),
      r = __recoveredScope.Sf(),
      i = 1 + r * .5,
      a = __recoveredScope.yh;
    __recoveredScope.pg.copy(__recoveredScope.G).applyAxisAngle(__recoveredScope.fg, a.side * (1 - __recoveredScope.MathUtils.smoothstep(n, 1, 5)));
    e.copy(__recoveredScope.$.pos).addScaledVector(__recoveredScope.pg, -(a.back * i + n * .18));
    e.y += a.up * i + n * .05;
    t.copy(__recoveredScope.$.pos).addScaledVector(__recoveredScope.G, a.ahead * (1 + r * .6));
    t.y += a.look;
    (__recoveredScope.U.yaw || __recoveredScope.U.pitch) && (__recoveredScope.Ef.copy(__recoveredScope.$.pos).y += a.look, __recoveredScope.vu(e, __recoveredScope.Ef, __recoveredScope.G, __recoveredScope.U.yaw, __recoveredScope.U.pitch), __recoveredScope.vu(t, __recoveredScope.Ef, __recoveredScope.G, __recoveredScope.U.yaw, __recoveredScope.U.pitch));
    e.y = Math.max(e.y, __recoveredScope.groundHeightfield.heightAt(e.x, e.z) + 1.5);
  };
}
/* Recovered binding xh. Live dependencies: G, xf, $, Ef, yh, kf, bh, K, q, camera, groundHeightfield, J, Sf. */
export function create_xh(__recoveredScope) {
  return function xh(e) {
    __recoveredScope.G.lerp(__recoveredScope.xf.set(Math.sin(__recoveredScope.$.yaw), 0, Math.cos(__recoveredScope.$.yaw)), 1 - Math.exp(-e * 2.5)).normalize();
    __recoveredScope.Ef.copy(__recoveredScope.$.pos).y += __recoveredScope.yh.look;
    __recoveredScope.kf(__recoveredScope.Ef);
    __recoveredScope.bh(__recoveredScope.K, __recoveredScope.q);
    __recoveredScope.camera.position.lerp(__recoveredScope.K, 1 - Math.exp(-e * 5));
    __recoveredScope.camera.position.y = Math.max(__recoveredScope.camera.position.y, __recoveredScope.groundHeightfield.heightAt(__recoveredScope.camera.position.x, __recoveredScope.camera.position.z) + 1.2);
    __recoveredScope.J.lerp(__recoveredScope.q, 1 - Math.exp(-e * 10));
    __recoveredScope.camera.lookAt(__recoveredScope.J);
    __recoveredScope.camera.fov = 60 + __recoveredScope.Sf() * 15 + Math.min(__recoveredScope.$.speed, 12) * .6;
    __recoveredScope.camera.updateProjectionMatrix();
  };
}
