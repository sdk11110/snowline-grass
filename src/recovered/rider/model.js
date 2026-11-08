/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/rider-model-BIDVHzGE.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
import { Cr as Vector3, F as t, G as n, Gt as r, Kt as i, St as a, _t as o, bt as MathUtils, c, gt as l, n as u, r as d } from "../../vendor/three/core.js";
import { cloneSkinnedModel, loadGLTF } from "../assets/model-loader.js";
import { createToonMaterial } from "../render/toon-materials.js";
import { a as h, i as g, n as _, r as v } from "./throw.js";
var y = {
  male: {
    file: `player-mitten-v02.glb`,
    trunk: .591,
    seat: .18,
    walkFrom: `female`,
    bootBack: .07
  },
  female: {
    file: `female-rider/female-rider-mitten-walk-run-tex2k-v04.glb`,
    height: 1.8,
    seat: .15,
    outfits: {
      swim: {
        file: `female-rider/female-rider-swim-v01.glb`,
        clips: {
          ledge: `Go upstairs, then go downstairs`,
          wade: `walk`,
          sitDown: `Like stepping down a few steps`
        }
      }
    }
  }
};
function b(e, t, n) {
  return e.trunk ? e.trunk / t : e.height / (n.max.y - n.min.y);
}
var x = .025;
var S = .7;
var C = .25;
var w = new i();
var T = new Map();
var E = new Map();
function D(e) {
  if (e !== `female`) throw Error(`No separate locomotion asset for ${e}`);
  return E.has(e) || E.set(e, loadGLTF(`./models/motions/rider-locomotion-v02/female-locomotion-v02.glb`).catch(t => {
    throw E.delete(e), t;
  })), E.get(e);
}
var O;
var k;
var A;
function j() {
  return A ||= loadGLTF(`./models/motions/chairlift-sitting-v01/chairlift-sitting-v01.glb`).catch(e => {
    throw A = null, e;
  }), A;
}
function M() {
  return k ||= loadGLTF(`./models/motions/weight-shift-idle-v01/weight-shift-idle-v01.glb`).catch(e => {
    throw k = null, e;
  }), k;
}
function N() {
  return O ||= loadGLTF(`./models/motions/baseball-pitching-v01/baseball-pitching-v01.glb`).catch(e => {
    throw O = null, e;
  }), O;
}
function P(e = `male`, t = null) {
  let n = y[e],
    r = t ? n?.outfits?.[t]?.file : n?.file;
  if (!r) throw Error(`Unknown rider: ${e}${t ? ` in ${t}` : ``}`);
  let i = t ? `${e}:${t}` : e;
  return T.has(i) || T.set(i, loadGLTF(`./models/` + r).catch(e => {
    throw T.delete(i), e;
  })), T.get(i);
}
var F = [`Hips`, `Spine`, `Spine1`, `Head`, `LeftArm`, `LeftForeArm`, `RightArm`, `RightForeArm`, `LeftHand`, `RightHand`, `LeftUpLeg`, `LeftLeg`, `LeftFoot`, `RightUpLeg`, `RightLeg`, `RightFoot`];
var I = [`Thumb`, `Index`, `Middle`, `Ring`, `Pinky`];
var L = new Vector3(0, -1, 0);
var R = new Vector3(0, 0, 1);
var z = new Vector3();
var B = new Vector3();
var V = new Vector3();
var H = new Vector3();
var U = new i();
var W = new i();
var G = new t();
var K = .3;
var q = .6;
var J = new i();
var ee = new Vector3();
var te = new Vector3();
var Y = new Vector3();
var X = new i();
var ne = class {
  constructor(t, r = `male`, {
    outfit: a = null,
    fit: s = null,
    borrow: u = null,
    pitching: p = null,
    idle: h = null,
    chair: g = null
  } = {}) {
    this.bootBack = y[r].bootBack ?? 0;
    let _ = y[r],
      v = a ? _.outfits[a] : _,
      S = cloneSkinnedModel(t.scene);
    S.traverse(e => {
      if (!e.isMesh) return;
      let t = e.material;
      e.material = createToonMaterial({
        map: t.map,
        color: t.color,
        side: t.side
      }, {
        rim: 1,
        hatch: 0
      });
      e.castShadow = true;
      e.frustumCulled = false;
    });
    this.root = new n();
    this.root.name = `RiderModel`;
    this.root.add(S);
    let w = {};
    S.traverse(e => {
      e.isBone && (w[e.name.replace(/^mixamorig:?/, ``)] = e);
    });
    let T = F.filter(e => !w[e]);
    if (T.length) throw Error(`${v.file} is missing Mixamo bones: ${T.join(`, `)}`);
    this.root.updateMatrixWorld(true);
    this.trunk = w.Head.getWorldPosition(z).y - w.Hips.getWorldPosition(B).y;
    let E = new c().setFromObject(S);
    this.scale = s ? s.scale * s.trunk / this.trunk : b(_, this.trunk, E);
    this.root.scale.setScalar(this.scale);
    this.root.position.y = x - E.min.y * this.scale;
    this.root.updateMatrixWorld(true);
    this.bones = {};
    this.rest = [];
    S.traverse(e => {
      e.isBone && this.rest.push({
        bone: e,
        p: e.position.clone(),
        q: e.quaternion.clone(),
        s: e.scale.clone()
      });
    });
    this.bindScene = cloneSkinnedModel(t.scene);
    this.animationScene = cloneSkinnedModel(t.scene);
    for (let e of this.rest) e.animated = this.animationScene.getObjectByName(e.bone.name);
    if (this.mixer = new d(this.animationScene), this.chair = null, g?.animations?.[0]) {
      let e = cloneSkinnedModel(t.scene),
        n = new d(e),
        r = $(g.animations[0], g.scene, this.bindScene),
        i = n.clipAction(r).setLoop(o, 1 / 0).play(),
        a = this.rest.map(({
          bone: t
        }) => e.getObjectByName(t.name));
      this.chair = {
        scene: e,
        mixer: n,
        action: i,
        targets: a
      };
    }
    if (this.pitching = null, p?.animations?.[0]) {
      let e = cloneSkinnedModel(t.scene),
        n = $(p.animations[0], p.scene, t.scene),
        r = new d(e),
        i = r.clipAction(n).setLoop(l, 1).play();
      i.paused = true;
      r.update(0);
      this.pitching = {
        scene: e,
        mixer: r,
        action: i,
        clip: n
      };
    }
    let D = e => t.animations.find(t => t.name === e),
      O = e => {
        let n = u?.animations?.find(t => t.name === e);
        return n && $(n, u.scene, t.scene);
      };
    this.walk = D(`walk.001`) ?? O(`walk.001`);
    this.run = D(`run.001`) ?? O(`run.001`);
    this.idle = h?.animations?.[0] ? this.mixer.clipAction($(h.animations[0], h.scene, t.scene)).play() : null;
    this.idleWeight = +!!this.idle;
    this.canWalk = !!(this.walk && this.run);
    this.canWalk && (this.walk = this.mixer.clipAction(this.walk).play(), this.run = this.mixer.clipAction(this.run).play());
    this.clips = {};
    for (let [e, n] of Object.entries(v.clips ?? {})) {
      let r = t.animations.find(e => e.name.startsWith(n));
      r ? this.clips[e] = r : console.warn(`${v.file} has no clip named "${n}…" (for ${e}).`);
    }
    this.acts = new Map();
    this.mode = `ride`;
    this.clip = null;
    this.fade = C;
    this.transition = null;
    let k = this.root.getWorldQuaternion(new i()).invert();
    S.traverse(e => {
      if (!e.isBone) return;
      let t = e.name.replace(/^mixamorig:?/, ``);
      if (!F.includes(t)) return;
      let n = k.clone().multiply(e.parent.getWorldQuaternion(new i()));
      this.bones[t] = {
        bone: e,
        q: e.quaternion.clone(),
        p: e.position.clone(),
        parentQ: n,
        parentQinv: n.clone().invert(),
        modelQ: k.clone().multiply(e.getWorldQuaternion(new i()))
      };
    });
    let A = t => this.root.worldToLocal(this.bones[t].bone.getWorldPosition(new Vector3()));
    this.thigh = A(`LeftLeg`).distanceTo(A(`LeftUpLeg`));
    this.shin = A(`LeftFoot`).distanceTo(A(`LeftLeg`));
    this.ankle = A(`LeftFoot`);
    this.hipsBind = A(`Hips`);
    this.armDir = {
      Left: [A(`LeftForeArm`).sub(A(`LeftArm`)).normalize(), Q(this.bones.LeftForeArm.bone, this.root)],
      Right: [A(`RightForeArm`).sub(A(`RightArm`)).normalize(), Q(this.bones.RightForeArm.bone, this.root)]
    };
    this.armHinge = {};
    for (let t of [`Left`, `Right`]) {
      let [n, r] = this.armDir[t],
        a = new Vector3().crossVectors(n, R).normalize();
      this.armHinge[t] = {
        axis: a,
        upper: Z(n, a, new i()).invert(),
        fore: Z(r, a, new i()).invert()
      };
    }
    let j = t => this.root.worldToLocal(t.getWorldPosition(new Vector3()));
    this.upperArm = A(`LeftArm`).distanceTo(A(`LeftForeArm`));
    this.foreArm = A(`LeftForeArm`).distanceTo(A(`LeftHand`));
    this.palm = w.LeftHandMiddle1 ? A(`LeftHand`).distanceTo(j(w.LeftHandMiddle1)) * .6 : 0;
    this.palmBone = w.RightHandMiddle1 ?? null;
    this.palmBones = {
      Left: w.LeftHandMiddle1 ?? null,
      Right: this.palmBone
    };
    let M = this.scale;
    this.build = {
      seat: v.seat ?? _.seat,
      pivot: (A(`Spine`).y - A(`Hips`).y) * M,
      shoulder: [Math.abs(A(`LeftArm`).x - A(`Hips`).x) * M, (A(`LeftArm`).y - A(`Spine`).y) * M],
      reach: (this.upperArm + this.foreArm + this.palm) * M,
      leg: (this.thigh + this.shin) * M,
      ankle: this.ankle.y * M,
      hip: [Math.abs(A(`LeftUpLeg`).x - A(`Hips`).x) * M, (A(`Hips`).y - A(`LeftUpLeg`).y) * M]
    };
    this.fingers = [];
    this.thumbs = {};
    for (let e of [`Left`, `Right`]) {
      for (let t of I.slice(1)) for (let n = 1; n <= 3; n++) {
        let r = w[`${e}Hand${t}${n}`],
          a = w[`${e}Hand${t}${n + 1}`];
        if (!r || !a) continue;
        let o = j(a).sub(j(r)).normalize().cross(L).normalize(),
          s = k.clone().multiply(r.getWorldQuaternion(new i()));
        this.fingers.push({
          bone: r,
          side: e,
          axis: o.applyQuaternion(s.invert()),
          angle: q
        });
      }
      let t = [1, 2, 3, 4].map(t => w[`${e}HandThumb${t}`]),
        n = [2, 3].map(t => w[`${e}HandIndex${t}`]);
      t.every(Boolean) && n.every(Boolean) && w[`${e}HandMiddle2`] && (this.thumbs[e] = {
        thumb: t,
        knuckles: n,
        middle: w[`${e}HandMiddle2`],
        length: j(t[0]).distanceTo(j(t[3]))
      });
    }
  }
  snapTo(e, t = null) {
    this.mode = e;
    this.clip = t;
    this.transition = null;
    this.fade = C;
  }
  fadeFromPose() {
    this.transition = this.rest.map(({
      bone: e
    }) => ({
      p: e.position.clone(),
      q: e.quaternion.clone(),
      s: e.scale.clone()
    }));
    this.fade = 0;
  }
  update(t, n, r, a) {
    let o = r === `act` ? n.act.clip : null,
      c = !!(r === `sit` && n.seat?.chairAnimation && n.modelId === `female` && n.gear === `ski` && this.chair);
    if ((r !== this.mode || o !== this.clip || c !== !!this.chairActive) && (this.transition = this.rest.map(({
      bone: e
    }) => ({
      p: e.position.clone(),
      q: e.quaternion.clone(),
      s: e.scale.clone()
    })), this.fade = 0, this.mode = r, this.clip = o, this.chairActive = c, c && this.chair.action.reset().play()), c) {
      this.apply(n, r);
      let a = this.bones.Hips.bone;
      this.#o(n.hips.position, z);
      let o = a.parent.worldToLocal(this.root.localToWorld(z)).clone();
      this.chair.mixer.update(t);
      for (let [e, {
        bone: t
      }] of this.rest.entries()) {
        let n = this.chair.targets[e];
        n && (t.position.copy(n.position), t.quaternion.copy(n.quaternion), t.scale.copy(n.scale));
      }
      this.bones.Hips.bone.position.copy(o);
      this.root.updateWorldMatrix(true, true);
      let s = new Vector3(0, 0, 1).applyQuaternion(this.root.getWorldQuaternion(new i()));
      for (let [t, n] of [[`Left`, 1], [`Right`, -1]]) {
        let r = this.bones[t + `UpLeg`].bone,
          a = r.parent.getWorldQuaternion(new i()),
          o = new i().setFromAxisAngle(s, -n * .16);
        r.quaternion.premultiply(a.clone().invert().multiply(o).multiply(a));
        r.updateWorldMatrix(false, true);
        let c = this.#a(t + `UpLeg`, new Vector3()),
          l = this.#a(t + `Leg`, new Vector3()),
          u = this.#a(t + `Foot`, new Vector3()).add(new Vector3(0, -.17 / this.scale, -.08 / this.scale)).clone().sub(c),
          d = Math.min(u.length(), this.thigh + this.shin - 1e-4);
        u.normalize();
        let f = (this.thigh ** 2 - this.shin ** 2 + d ** 2) / (2 * d),
          p = l.clone().sub(c).addScaledVector(u, -l.clone().sub(c).dot(u)).normalize(),
          m = c.clone().addScaledVector(u, f).addScaledVector(p, Math.sqrt(Math.max(0, this.thigh ** 2 - f ** 2)));
        this.#i(t + `UpLeg`, c, l, m.sub(c).normalize());
        let h = this.#a(t + `Leg`, new Vector3());
        this.#i(t + `Leg`, h, this.#a(t + `Foot`, new Vector3()), u.multiplyScalar(d).add(c).sub(h).normalize());
      }
    } else if (r === `act`) {
      let e = this.#n(this.mixer, o, this.acts);
      for (let t of this.acts.values()) t !== e && t.stop();
      this.walk?.setEffectiveWeight?.(0);
      this.run?.setEffectiveWeight?.(0);
      this.idle?.setEffectiveWeight(0);
      e.play();
      e.time = MathUtils.clamp(n.act.time, 0, o.duration);
      this.mixer.update(0);
      this.#t();
    } else if (r === `walk` && this.canWalk) {
      for (let e of this.acts.values()) e.stop();
      let e = MathUtils.smoothstep(a, 1.5, 4),
        r = this.idle ? 1 - MathUtils.smoothstep(a, .05, .35) : 0;
      this.idleWeight = MathUtils.damp(this.idleWeight, r, 10, t);
      this.idle?.setEffectiveWeight(this.idleWeight);
      this.walk.setEffectiveWeight((1 - this.idleWeight) * (1 - e));
      this.run.setEffectiveWeight((1 - this.idleWeight) * e);
      this.walk.setEffectiveTimeScale(a < .05 ? 0 : MathUtils.clamp(a / 1.4, .25, 1.5));
      this.run.setEffectiveTimeScale(a < .05 ? 0 : MathUtils.clamp(a / 4, .25, 1.5));
      this.mixer.update(t);
      this.#t();
      n.throwT == null ? n.reachW > 0 && this.#u(n.reachAt, n.reachW, n.reachLeft ? `Left` : `Right`) : this.pitching && n.throwUsesPitch ? this.#s(n.throwT) : this.#c(n.throwT);
    } else {
      for (let {
        bone: e,
        p: t,
        q: n,
        s: r
      } of this.rest) {
        e.position.copy(t);
        e.quaternion.copy(n);
        e.scale.copy(r);
      }
      this.apply(n, r);
    }
    if (this.fade = Math.min(C, this.fade + t), this.transition) {
      let e = MathUtils.smoothstep(this.fade, 0, C);
      this.rest.forEach(({
        bone: t
      }, n) => {
        let r = this.transition[n];
        t.position.lerpVectors(r.p, t.position, e);
        t.quaternion.slerpQuaternions(r.q, w.copy(t.quaternion), e);
        t.scale.lerpVectors(r.s, t.scale, e);
      });
      this.fade === C && (this.transition = null);
    }
    c && this.#e(n);
  }
  #e(n) {
    this.root.updateWorldMatrix(true, true);
    for (let [r, a] of [`Left`, `Right`].entries()) {
      let o = this.bones[a + `Foot`],
        c = this.root.getWorldQuaternion(new i()),
        l = c.clone().invert().multiply(o.bone.getWorldQuaternion(new i())).multiply(o.modelQ.clone().invert()),
        u = new t().setFromQuaternion(l, `YXZ`).x,
        d = MathUtils.clamp(u * .35 - .25, -.55, -.15),
        f = o.bone.parent.getWorldQuaternion(new i());
      o.bone.quaternion.copy(f.invert().multiply(c).multiply(new i().setFromEuler(new t(d, 0, 0))).multiply(o.modelQ));
      o.bone.updateWorldMatrix(false, true);
      let p = new Vector3(0, -this.ankle.y, -this.ankle.z).applyQuaternion(o.modelQ.clone().invert()),
        m = o.bone.localToWorld(p);
      n.feet[r].position.copy(n.body.worldToLocal(m));
      let h = n.body.getWorldQuaternion(new i()).invert();
      n.feet[r].quaternion.copy(h.multiply(o.bone.getWorldQuaternion(new i())).multiply(o.modelQ.clone().invert()));
    }
  }
  #t() {
    for (let {
      bone: e,
      animated: t
    } of this.rest) {
      e.position.copy(t.position);
      e.quaternion.copy(t.quaternion);
      e.scale.copy(t.scale);
    }
  }
  #n(e, t, n) {
    let r = n.get(t);
    return r || (r = e.clipAction(t).setLoop(l, 1), r.clampWhenFinished = true, n.set(t, r)), r;
  }
  heightIn(e, t, n) {
    if (!this.probe) {
      let e = cloneSkinnedModel(this.animationScene),
        t = {};
      e.traverse(e => {
        e.isBone && (t[e.name.replace(/^mixamorig:?/, ``)] = e);
      });
      this.probe = {
        scene: e,
        bones: t,
        mixer: new d(e),
        actions: new Map()
      };
    }
    let {
      scene: r,
      bones: i,
      mixer: a,
      actions: o
    } = this.probe;
    a.stopAllAction();
    let s = this.#n(a, e, o).play();
    return s.time = t, a.update(0), r.updateMatrixWorld(true), this.root.position.y + i[n].getWorldPosition(z).y * this.scale;
  }
  rise(e, t) {
    this.hipsAt ||= new Map();
    let n = this.hipsAt.get(e);
    if (!n) {
      let t = `${this.bones.Hips.bone.name}.position`;
      n = e.tracks.find(e => e.name === t).createInterpolant();
      this.hipsAt.set(e, n);
    }
    return (n.evaluate(t)[1] - n.evaluate(0)[1]) * this.scale;
  }
  #r(e, t) {
    let n = this.bones[e];
    n.bone.quaternion.copy(n.parentQinv).multiply(t).multiply(n.parentQ).multiply(n.q);
  }
  #i(e, t, n, r) {
    let a = this.bones[e];
    V.subVectors(n, t).normalize();
    U.setFromUnitVectors(V, r);
    let o = this.root.getWorldQuaternion(W),
      s = o.clone().multiply(U).multiply(o.clone().invert()),
      c = a.bone.parent.getWorldQuaternion(new i()),
      l = a.bone.getWorldQuaternion(new i());
    a.bone.quaternion.copy(c.invert().multiply(s).multiply(l));
    a.bone.updateMatrixWorld(true);
  }
  #a(e, t) {
    return this.root.worldToLocal(this.bones[e].bone.getWorldPosition(t));
  }
  #o(e, t) {
    return t.copy(e).sub(this.root.position).divideScalar(this.scale);
  }
  apply(t, n = `ride`) {
    let r = n === `sit`;
    for (let e of Object.values(this.bones)) {
      e.bone.quaternion.copy(e.q);
      e.bone.position.copy(e.p);
    }
    let a = this.bones.Hips.bone;
    this.root.updateMatrixWorld(true);
    this.#o(t.hips.position, z);
    a.position.copy(a.parent.worldToLocal(this.root.localToWorld(z)));
    this.#r(`Hips`, U.setFromEuler(t.hips.rotation));
    let o = t.torso.rotation;
    if (this.#r(`Spine`, U.setFromEuler(G.set(o.x * .5, o.y, o.z * .5))), this.#r(`Spine1`, U.setFromEuler(G.set(o.x * .5, 0, o.z * .5))), this.#r(`Head`, U.setFromEuler(t.head.rotation)), r) this.#d(t.seat.grips);else for (let [e, n] of [[`Left`, t.armL], [`Right`, t.armR]]) {
      let [t, r] = this.armDir[e],
        a = V.copy(L).applyEuler(n.sh.rotation),
        o = new i().setFromUnitVectors(t, a);
      this.#r(e + `Arm`, o);
      let s = H.copy(L).applyEuler(n.el.rotation).applyEuler(n.sh.rotation).applyQuaternion(o.clone().invert());
      this.#r(e + `ForeArm`, U.setFromUnitVectors(r, s.normalize()));
    }
    if (t.handSpots) {
      this.root.updateMatrixWorld(true);
      for (let [n, r, i] of [[0, `Left`, 1], [1, `Right`, -1]]) this.#h(r, i, this.#o(t.handSpots[n], new Vector3()), t.skiing ? 0 : S);
    }
    this.root.updateMatrixWorld(true);
    for (let [a, o, s] of [[0, `Left`, 1], [1, `Right`, -1]]) {
      let c = t.feet[a].position,
        l = this.#o(B.copy(c), new Vector3());
      l.y = this.ankle.y + (c.y - x) / this.scale;
      l.z += this.ankle.z;
      n === `ride` && !t.skiing && (l.z -= this.bootBack / this.scale);
      let u = this.#a(o + `UpLeg`, new Vector3()),
        d = l.clone().sub(u),
        f = Math.min(d.length(), this.thigh + this.shin - 1e-4);
      d.normalize();
      let p = (this.thigh ** 2 - this.shin ** 2 + f ** 2) / (2 * f),
        m = Math.sqrt(Math.max(0, this.thigh ** 2 - p ** 2)),
        h = R.clone().addScaledVector(d, -R.dot(d));
      h.x += s * (t.kneeOut ?? .12) + (t.kneeShift ?? 0);
      r && h.addScaledVector(d, -h.dot(d));
      h.normalize();
      let g = u.clone().addScaledVector(d, p).addScaledVector(h, m);
      this.#i(o + `UpLeg`, u, this.#a(o + `Leg`, new Vector3()), g.clone().sub(u).normalize());
      let _ = this.#a(o + `Leg`, new Vector3());
      this.#i(o + `Leg`, _, this.#a(o + `Foot`, new Vector3()), l.clone().sub(_).normalize());
      let v = this.bones[o + `Foot`],
        y = this.root.getWorldQuaternion(new i()),
        b = v.bone.parent.getWorldQuaternion(new i());
      v.bone.quaternion.copy(b.invert().multiply(y).multiply(t.feet[a].quaternion).multiply(v.modelQ));
      v.bone.updateMatrixWorld(true);
    }
    t.skiing && this.#f(.9);
  }
  palmAt(e, t) {
    this.bones[e + `Hand`].bone.getWorldPosition(t);
    let n = this.palmBones[e];
    return n ? t.lerp(n.getWorldPosition(V), .6) : t;
  }
  handAt(e) {
    return this.bones.RightHand.bone.getWorldPosition(e), this.palmBone ? e.lerp(this.palmBone.getWorldPosition(V), .6) : e;
  }
  #s(e) {
    let {
      scene: t,
      mixer: n,
      action: r,
      clip: i
    } = this.pitching;
    r.time = MathUtils.clamp(e, 0, i.duration);
    n.update(0);
    let a = MathUtils.smoothstep(e, 0, .2) * (1 - MathUtils.smoothstep(e, i.duration - .3, i.duration));
    for (let {
      bone: e
    } of this.rest) {
      let n = t.getObjectByName(e.name);
      n && (e.position.lerp(n.position, a), e.quaternion.slerp(n.quaternion, a));
    }
    e < 1.6 && this.#f(.9 * a, [`Right`]);
  }
  #c(t) {
    let n = g(_, t),
      r = h(t),
      i = this.scale,
      a = [`Hips`, `Spine`, `Spine1`, `Head`, `LeftUpLeg`, `LeftLeg`, `LeftFoot`, `RightUpLeg`, `RightLeg`, `RightFoot`, `LeftArm`, `LeftForeArm`, `RightArm`, `RightForeArm`],
      o = a.map(e => this.bones[e].bone.quaternion.clone()),
      c = this.bones.Hips.bone,
      l = c.position.clone();
    this.root.updateMatrixWorld(true);
    z.copy(this.hipsBind).add(B.set(0, -n.drop, n.shift).divideScalar(i));
    c.position.copy(c.parent.worldToLocal(this.root.localToWorld(z)));
    this.#r(`Hips`, U.setFromEuler(G.set(0, n.turn * .4, 0)));
    this.#r(`Spine`, U.setFromEuler(G.set(n.lean * .5, n.turn * .3, 0)));
    this.#r(`Spine1`, U.setFromEuler(G.set(n.lean * .5, n.turn * .3, 0)));
    this.#r(`Head`, U.setFromEuler(G.set(-n.lean * .7, -n.turn * .9, 0)));
    this.root.updateMatrixWorld(true);
    this.#l(`Left`, 1, n.lf, 0, 0);
    this.#l(`Right`, -1, n.rf, n.rfLift, n.rfYaw);
    for (let [t, r, a, o] of [[`Right`, -1, n.rh, n.rb], [`Left`, 1, n.lh, n.lb]]) {
      let n = this.#a(t + `Arm`, new Vector3()).add(B.fromArray(a).divideScalar(i));
      this.#_(t, r, n, H.fromArray(o).normalize());
    }
    a.forEach((e, t) => this.bones[e].bone.quaternion.slerpQuaternions(o[t], this.bones[e].bone.quaternion.clone(), r));
    c.position.lerpVectors(l, c.position.clone(), r);
    let u = n.grip * r * (t < v.release ? 1 : 1 - MathUtils.smoothstep(t, v.release, v.release + .08));
    u > 0 && this.#f(.9 * u, [`Right`]);
  }
  #l(t, n, [r, a], o, s) {
    let c = this.#o(z.set(r, 0, a), new Vector3());
    c.y = this.ankle.y + o / this.scale;
    c.z += this.ankle.z;
    let l = this.#a(t + `UpLeg`, new Vector3()),
      u = c.clone().sub(l),
      d = Math.min(u.length(), this.thigh + this.shin - 1e-4);
    u.normalize();
    let f = (this.thigh ** 2 - this.shin ** 2 + d ** 2) / (2 * d),
      p = Math.sqrt(Math.max(0, this.thigh ** 2 - f ** 2)),
      m = R.clone().applyAxisAngle(H.set(0, 1, 0), s * .5).addScaledVector(u, -R.dot(u));
    m.x += n * .12;
    m.normalize();
    let h = l.clone().addScaledVector(u, f).addScaledVector(m, p);
    this.#i(t + `UpLeg`, l, this.#a(t + `Leg`, new Vector3()), h.clone().sub(l).normalize());
    let g = this.#a(t + `Leg`, new Vector3());
    this.#i(t + `Leg`, g, this.#a(t + `Foot`, new Vector3()), c.clone().sub(g).normalize());
    let _ = this.bones[t + `Foot`],
      v = this.root.getWorldQuaternion(new i()),
      y = _.bone.parent.getWorldQuaternion(new i());
    _.bone.quaternion.copy(y.invert().multiply(v).multiply(U.setFromAxisAngle(H.set(0, 1, 0), s)).multiply(_.modelQ));
    _.bone.updateMatrixWorld(true);
  }
  #u(t, n, r) {
    let a = [`Spine`, `Spine1`, `${r}Arm`, `${r}ForeArm`],
      o = a.map(e => this.bones[e].bone.quaternion.clone());
    this.root.updateMatrixWorld(true);
    let c = this.root.worldToLocal(B.copy(t)),
      l = this.#a(`${r}Arm`, new Vector3()),
      u = MathUtils.clamp((l.y - c.y) / (this.upperArm + this.foreArm) * .55, 0, .75),
      d = this.root.getWorldQuaternion(new i()),
      f = new Vector3(1, 0, 0).applyQuaternion(d);
    for (let e of [`Spine`, `Spine1`]) {
      let t = this.bones[e].bone,
        n = U.setFromAxisAngle(f, u / 2),
        r = t.parent.getWorldQuaternion(new i());
      t.quaternion.copy(r.invert().multiply(n).multiply(t.getWorldQuaternion(W)));
      t.updateMatrixWorld(true);
    }
    this.#_(r, r === `Left` ? 1 : -1, c);
    a.forEach((e, t) => this.bones[e].bone.quaternion.slerpQuaternions(o[t], this.bones[e].bone.quaternion.clone(), n));
  }
  #d(t) {
    this.root.updateMatrixWorld(true);
    for (let [n, r, i] of [[0, `Left`, 1], [1, `Right`, -1]]) this.#_(r, i, this.#o(t[n], new Vector3()));
    this.#f(1);
  }
  #f(e, t = [`Left`, `Right`]) {
    for (let {
      bone: n,
      side: r,
      axis: i,
      angle: a
    } of this.fingers) t.includes(r) && n.quaternion.multiply(U.setFromAxisAngle(i, a * e));
    for (let n of t) this.#p(n, Math.min(1, e / .9));
  }
  #p(t, n) {
    let r = this.thumbs[t];
    if (!r || n <= 0) return;
    let [i, a, o, s] = r.thumb;
    this.bones[t + `Hand`].bone.updateMatrixWorld(true);
    let c = [i, a, o].map(e => e.quaternion.clone()),
      l = this.palmAt(t, ee).lerp(r.middle.getWorldPosition(V), .5),
      u = r.knuckles[0].getWorldPosition(te).lerp(r.knuckles[1].getWorldPosition(V), .5);
    u.addScaledVector(V.subVectors(u, l).normalize(), r.length * this.scale * K);
    let d = i.getWorldPosition(new Vector3()),
      f = u.distanceTo(d),
      p = new Vector3().subVectors(u, d).cross(H.subVectors(l, d)).normalize(),
      m = e => {
        a.quaternion.copy(c[1]);
        o.quaternion.copy(c[2]);
        for (let t of [a, o]) this.#m(t, U.setFromAxisAngle(p, e));
        return s.getWorldPosition(Y).distanceTo(d);
      },
      h = 0,
      g = 1.1;
    if (m(0) > f) for (let e = 0; e < 12; e++) {
      let e = (h + g) / 2;
      m(e) > f ? h = e : g = e;
    }
    m(h);
    this.#m(i, U.setFromUnitVectors(s.getWorldPosition(Y).sub(d).normalize(), H.subVectors(u, d).normalize()).slerp(J, .5));
    let _ = a.getWorldPosition(new Vector3());
    this.#m(a, U.setFromUnitVectors(s.getWorldPosition(Y).sub(_).normalize(), H.subVectors(u, _).normalize()));
    [i, a, o].forEach((e, t) => e.quaternion.slerpQuaternions(c[t], e.quaternion.clone(), n));
    i.updateMatrixWorld(true);
  }
  #m(e, t) {
    e.parent.getWorldQuaternion(X).invert().multiply(t).multiply(e.getWorldQuaternion(W));
    e.quaternion.copy(X);
    e.updateMatrixWorld(true);
  }
  plantHand(e, t, n = `Left`) {
    this.root.updateMatrixWorld(true);
    let r = [n + `Arm`, n + `ForeArm`, n + `Hand`],
      a = r.map(e => this.bones[e].bone.quaternion.clone());
    this.#_(n, n === `Left` ? 1 : -1, this.root.worldToLocal(e.clone()), null, true);
    let o = this.bones[n + `Hand`],
      s = o.bone.parent.getWorldQuaternion(new i());
    o.bone.quaternion.copy(s.invert().multiply(this.root.getWorldQuaternion(new i())).multiply(o.modelQ));
    r.forEach((e, n) => {
      let r = this.bones[e].bone;
      r.quaternion.slerpQuaternions(a[n], r.quaternion.clone(), t);
    });
    this.root.updateMatrixWorld(true);
  }
  #h(t, n, r, i = 0) {
    let a = this.armHinge[t],
      o = this.#a(t + `Arm`, new Vector3()),
      c = r.clone().addScaledVector(z.subVectors(o, r).normalize(), this.palm);
    c.y += this.palm * .5;
    let l = c.clone().sub(o),
      u = Math.sqrt(this.upperArm ** 2 + this.foreArm ** 2 - 2 * this.upperArm * this.foreArm * Math.cos(.6)),
      d = MathUtils.clamp(l.length(), u, this.upperArm + this.foreArm - 1e-4);
    l.normalize();
    let f = (this.upperArm ** 2 - this.foreArm ** 2 + d ** 2) / (2 * d),
      p = Math.sqrt(Math.max(0, this.upperArm ** 2 - f ** 2)),
      m = this.bones.Spine1,
      h = this.root.getWorldQuaternion(X).invert().multiply(m.bone.getWorldQuaternion(W)).multiply(U.copy(m.modelQ).invert()),
      g = V.set(n * .5, -.45, -.75).applyQuaternion(h);
    g.addScaledVector(l, -g.dot(l));
    let _ = .4 - g.length();
    _ > 0 && (g.addScaledVector(H.set(n, 0, 0).applyQuaternion(h), _ * 2), g.addScaledVector(l, -g.dot(l)));
    g.normalize();
    let v = o.clone().addScaledVector(l, f).addScaledVector(g, p),
      y = v.clone().sub(o).normalize(),
      b = o.clone().addScaledVector(l, d).sub(v).normalize(),
      x = new Vector3().crossVectors(g, l).normalize();
    this.#g(t + `Arm`, Z(y, x, U).multiply(a.upper));
    Z(b, x, U).multiply(a.fore);
    W.setFromAxisAngle(b, n * i * .5);
    this.#g(t + `ForeArm`, U.premultiply(W));
    i && this.#m(this.bones[t + `Hand`].bone, U.copy(this.root.getWorldQuaternion(W)).multiply(X.setFromAxisAngle(b, n * i * .5)).multiply(W.clone().invert()));
    this.bones[t + `Hand`].bone.updateMatrixWorld(true);
  }
  #g(e, t) {
    let n = this.bones[e],
      r = n.bone.parent.getWorldQuaternion(new i()).invert();
    n.bone.quaternion.copy(r).multiply(this.root.getWorldQuaternion(new i())).multiply(t).multiply(n.modelQ);
    n.bone.updateMatrixWorld(true);
  }
  elbowFlex(t) {
    let n = this.root.getWorldQuaternion(new i()).invert(),
      r = this.bones[t + `Arm`],
      a = n.multiply(r.bone.getWorldQuaternion(new i())).multiply(r.modelQ.clone().invert()),
      o = this.armHinge[t].axis.clone().applyQuaternion(a),
      s = this.#a(t + `Arm`, new Vector3()),
      c = this.#a(t + `ForeArm`, new Vector3()),
      l = this.#a(t + `Hand`, new Vector3()),
      u = c.clone().sub(s).normalize(),
      d = l.sub(c).normalize();
    return Math.atan2(z.crossVectors(u, d).dot(o), u.dot(d));
  }
  #_(t, n, r, i = null, a = false) {
    let o = this.#a(t + `Arm`, new Vector3()),
      s = r.clone();
    a || (s.addScaledVector(o.clone().sub(r).normalize(), this.palm), s.y += this.palm * .5);
    let c = s.clone().sub(o),
      l = Math.min(c.length(), this.upperArm + this.foreArm - 1e-4);
    c.normalize();
    let u = (this.upperArm ** 2 - this.foreArm ** 2 + l ** 2) / (2 * l),
      d = Math.sqrt(Math.max(0, this.upperArm ** 2 - u ** 2)),
      f = i ? i.clone() : new Vector3(n * .8, -1, -.4);
    f.addScaledVector(c, -f.dot(c)).normalize();
    let p = o.clone().addScaledVector(c, u).addScaledVector(f, d);
    this.#i(t + `Arm`, o, this.#a(t + `ForeArm`, new Vector3()), p.clone().sub(o).normalize());
    let m = this.#a(t + `ForeArm`, new Vector3());
    this.#i(t + `ForeArm`, m, this.#a(t + `Hand`, new Vector3()), s.clone().sub(m).normalize());
  }
};
function Z(t, n, r) {
  let i = n.clone().addScaledVector(t, -n.dot(t)).normalize();
  return r.setFromRotationMatrix(new a().makeBasis(t, i, new Vector3().crossVectors(t, i)));
}
function Q(t, n) {
  let r = t.children.find(e => e.isBone),
    i = n.worldToLocal(t.getWorldPosition(new Vector3()));
  return n.worldToLocal(r.getWorldPosition(new Vector3())).sub(i).normalize();
}
function $(t, n, a) {
  n.updateMatrixWorld(true);
  a.updateMatrixWorld(true);
  let o = e => e.getWorldQuaternion(new i()),
    s = e => e.getObjectByProperty(`isBone`, true),
    c = s(a).getWorldPosition(new Vector3()).y / s(n).getWorldPosition(new Vector3()).y,
    l = [];
  for (let i of t.tracks) {
    let {
        nodeName: t,
        propertyName: u
      } = r.parseTrackName(i.name),
      d = n.getObjectByName(t),
      f = a.getObjectByName(t);
    if (!d?.isBone || !f?.isBone) continue;
    let p = i.values.slice();
    if (u === `quaternion`) {
      let e = o(f.parent).invert().multiply(o(d.parent)),
        t = o(d).invert().multiply(o(f));
      for (let n = 0; n < p.length; n += 4) U.fromArray(p, n).premultiply(e).multiply(t).toArray(p, n);
    } else if (u === `position` && d === s(n)) {
      let t = d.getWorldPosition(new Vector3()),
        n = f.getWorldPosition(new Vector3()),
        r = f.parent.matrixWorld.clone().invert();
      for (let e = 0; e < p.length; e += 3) {
        z.fromArray(p, e).applyMatrix4(d.parent.matrixWorld).sub(t).multiplyScalar(c).add(n);
        z.applyMatrix4(r).toArray(p, e);
      }
    } else continue;
    l.push(new i.constructor(i.name, i.times.slice(), p, i.getInterpolation()));
  }
  return new u(t.name, t.duration, l);
}
export { N as a, $ as c, M as i, b as l, ne as n, D as o, j as r, P as s, y as t };
export { N, $, M, b, ne, D, j, P, y };
