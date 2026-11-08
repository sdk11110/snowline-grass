/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding nc. Live dependencies: . */
export function create_nc(__recoveredScope) {
  return {
    notice: 17,
    reach: 4.2,
    shy: 1.8,
    flee: 4,
    carry: 28,
    top: 22,
    accel: 9,
    coast: 5,
    brake: 18,
    turn: 1.5,
    depart: 7,
    escape: 8,
    escapeSpeed: 16,
    cooldown: 90,
    slice: 500,
    chest: .5,
    sink: .3,
    jumpUp: 15,
    gravity: 14,
    jumpBoost: 1.6,
    jumpCrouch: .16,
    blink: [2, 6]
  };
}
/* Recovered binding dc. Live dependencies: nc, br, _r, fr, Oe, Vector3, tc, T, Qe, rt, cc, sc, oc, et, Fe, uc, rc, ic, ec, ac, MathUtils, lc. */
export function create_dc(__recoveredScope) {
  return class {
    constructor({
      hf: e,
      route: t,
      forest: n,
      blocked: r = () => false,
      config: i = {},
      prints: a = null
    }) {
      this.cfg = {
        ...__recoveredScope.nc,
        ...i
      };
      this.prints = a;
      this.feet = new __recoveredScope.br(new __recoveredScope._r(a, __recoveredScope.fr.foot, 2, {
        length: 1.15,
        sound: {
          level: 1.25,
          rate: .5,
          range: 90
        }
      }), {
        reach: .5,
        heel: .3
      });
      this.fists = new __recoveredScope._r(a, __recoveredScope.fr.knuckles, 2, {
        length: .8,
        sound: {
          level: .6,
          rate: .62,
          range: 70
        }
      });
      this.hf = e;
      this.route = t;
      this.forest = n;
      this.blocked = r;
      this.root = new __recoveredScope.Oe();
      this.pos = new __recoveredScope.Vector3();
      this.state = t ? `loading` : `unavailable`;
      this.ready = t ? this.load() : Promise.resolve();
      this.index = 1;
      this.clock = 0;
      this.yaw = 0;
      this.speed = 0;
      this.drive = 0;
      this.clip = null;
      this.events = [];
      this.mode = null;
      this.reins = {
        throttle: 0,
        brake: false,
        steer: 0
      };
      this.air = 0;
      this.vy = 0;
      this.crouch = 0;
      this.squash = 0;
      this.landing = 0;
      this.blinkIn = 1;
      this.blinkT = -1;
      this.blinks = 0;
      this.root.rotation.order = `YXZ`;
      this.way = void 0;
      this.search = null;
      t && (this.place(t[0]), this.findWay());
    }
    place(e) {
      this.pos.set(e.x, this.hf.heightAt(e.x, e.z), e.z);
      this.root.position.copy(this.pos);
    }
    async load() {
      try {
        let [{
            loadModel: e
          }, {
            makeToon: t
          }] = await Promise.all([import(`../assets/model-loader-lazy.js`), import(`../render/toon-lazy.js`)]),
          n = await e(`./models/snow-monster-v04/snow-monster-rig-v04.glb`);
        this.model = n.scene;
        this.model.scale.setScalar(__recoveredScope.tc);
        this.root.add(this.model);
        this.model.traverse(e => {
          e.isMesh && this.eyelids(e.geometry);
        });
        this.model.traverse(e => {
          if (e.isMesh) {
            let n = e.material;
            e.material = this.contactShaded(t({
              map: n.map,
              color: n.color,
              side: n.side
            }, {
              rim: 1,
              hatch: 0
            }));
            e.frustumCulled = false;
            e.castShadow = e.receiveShadow = true;
          }
        });
        let r = e => this.model.getObjectByName(`mixamorig` + e) ?? this.model.getObjectByName(`mixamorig:` + e);
        this.head = r(`HeadTop_End`);
        this.gaitBones = Object.fromEntries([`Spine`, `Spine2`, `Neck`, `Head`, `LeftArm`, `RightArm`, `LeftForeArm`, `RightForeArm`, `LeftHand`, `RightHand`].map(e => [e, r(e)]));
        this.footBones = [r(`LeftFoot`), r(`RightFoot`)];
        this.gaitQ = new __recoveredScope.T();
        this.gaitParent = new __recoveredScope.T();
        this.gaitTurn = new __recoveredScope.T();
        this.gaitAxis = new __recoveredScope.Vector3();
        this.gaitDownAxis = new __recoveredScope.Vector3();
        this.clips = new Map(n.animations.map(e => [e.name, e]));
        this.mixer = new __recoveredScope.Qe(this.model);
        this.state = `waiting`;
        this.animate(`wait.001`);
      } catch (e) {
        throw this.state = `unavailable`, this.root.visible = false, e;
      }
    }
    contactShaded(e) {
      let t = this.contactUniforms ??= {
          uContact: {
            value: new __recoveredScope.rt(0, 0, 0, 0)
          },
          uContactDir: {
            value: new __recoveredScope.Vector3(0, 0, 1)
          },
          uContactSize: {
            value: new __recoveredScope.Vector3(.6, .7, .95)
          },
          uBlink: {
            value: 0
          }
        },
        n = e.onBeforeCompile,
        r = e.customProgramCacheKey;
      return e.onBeforeCompile = (e, r) => {
        n(e, r);
        Object.assign(e.uniforms, t);
        e.vertexShader = e.vertexShader.replace(`#include <common>`, `#include <common>
attribute float aEye;
uniform float uBlink;`).replace(`#include <begin_vertex>`, `#include <begin_vertex>
if (aEye != 0.0) transformed.y = mix(transformed.y, aEye, uBlink * 0.88);`);
        e.fragmentShader = e.fragmentShader.replace(`varying vec3 vTWorld;`, `varying vec3 vTWorld;
uniform vec4 uContact;
uniform vec3 uContactDir;
uniform vec3 uContactSize;`).replace(`#include <map_pars_fragment>`, `#include <map_pars_fragment>\n${__recoveredScope.cc}`).replace(`#include <map_fragment>`, `#include <map_fragment>
          #ifdef USE_MAP
            if (uBlink > 0.0) {
              ${__recoveredScope.sc.map(([e, t, n, r]) => `diffuseColor.rgb = unpaintEye(diffuseColor.rgb, vMapUv, vec2(${e}, ${t}), vec2(${n}, ${r}));`).join(`
`)}
            }
          #endif`).replace(`float dw = fwidth(direct);`, `if (uContact.w > 0.0) {
            vec3 d = vTWorld - uContact.xyz;
            vec3 side = normalize(cross(vec3(0.0, 1.0, 0.0), uContactDir));
            vec3 q = vec3(dot(d, side), d.y, dot(d, uContactDir)) / uContactSize;
            direct *= 1.0 - uContact.w * (1.0 - smoothstep(0.55, 1.0, length(q)));
          }
          float dw = fwidth(direct);`);
      }, e.customProgramCacheKey = () => r() + `-contact`, e;
    }
    eyelids(e) {
      let t = e.attributes.position,
        n = new Float32Array(t.count);
      for (let [e, r, i, a, o, s] of __recoveredScope.oc) {
        let c = [];
        for (let n = 0; n < t.count; n++) {
          let l = t.getX(n),
            u = t.getY(n),
            d = t.getZ(n);
          l > e && l < r && u > i && u < a && d > o && d < s && c.push(n);
        }
        let l = c.reduce((e, n) => e + t.getY(n), 0) / (c.length || 1);
        for (let e of c) n[e] = l;
      }
      e.setAttribute(`aEye`, new __recoveredScope.et(n, 1));
    }
    setContact(e, t, n) {
      this.contactUniforms && (this.contactUniforms.uContact.value.set(e.x, e.y, e.z, n), this.contactUniforms.uContactDir.value.copy(t).setY(0).normalize());
    }
    animate(e, t = 1, n = .25) {
      if (this.clip !== e && this.clips?.has(e)) {
        let t = this.mixer.clipAction(this.clips.get(e));
        t.reset().play();
        this.action && n ? this.action.crossFadeTo(t, n, false) : this.action?.stop();
        this.action = t;
        this.clip = e;
      }
      this.action && (this.action.timeScale = t);
    }
    anchor() {
      let e = this.model.getObjectByProperty(`isSkinnedMesh`, true),
        {
          Spine2: t,
          Neck: n,
          Head: r
        } = this.gaitBones;
      if (!e || !t || !n || !r) return;
      this.root.updateMatrixWorld(true);
      e.computeBoundingSphere();
      let i = new __recoveredScope.Fe(),
        a = (e, t, n) => this.root.localToWorld(new __recoveredScope.Vector3(e, t, n)),
        o = (t, n) => (i.set(t, n.transformDirection(this.root.matrixWorld)), i.intersectObject(e, false)[0]?.point ?? null),
        s = (e => this.root.worldToLocal(e.getWorldPosition(new __recoveredScope.Vector3())))(n),
        c = () => new __recoveredScope.Vector3(0, -1, 0),
        l = s.z - .2,
        u = o(a(s.x, 20, l), c()),
        d = [1, -1].map(e => {
          let t = o(a(s.x + e * .12, 20, l - .04), c());
          return t && t.add(__recoveredScope.uc.set(0, -.2, 0));
        }),
        f = l + .36,
        p = [1, -1].map(e => {
          let t = o(a(s.x + e * .2, 20, f), c());
          return t && t.add(__recoveredScope.uc.set(0, .12, 0));
        });
      if (e.boundingSphere = null, !u || !d.every(Boolean) || !p.every(Boolean)) return;
      let [m, h, g, _] = [[.25, 0], [-.25, 0], [0, -.25], [0, .25]].map(([e, t]) => o(a(s.x + e, 20, l + t), c()));
      if (!m || !h || !g || !_) return;
      let v = u.clone().add(new __recoveredScope.Vector3().crossVectors(_.sub(g), m.sub(h)).normalize());
      this.anchors = {
        up: n.worldToLocal(v),
        seat: n.worldToLocal(u),
        feet: d.map(e => t.worldToLocal(e)),
        grips: p.map(e => n.worldToLocal(e))
      };
    }
    riderFrame(e, t, n, r = null) {
      let i = this.anchors;
      if (!i) return false;
      let {
        Spine2: a,
        Neck: o
      } = this.gaitBones;
      return o.localToWorld(e.copy(i.seat)), r && o.localToWorld(r.copy(i.up)).sub(e).normalize(), t.forEach((e, t) => a.localToWorld(e.copy(i.feet[t]))), n.forEach((e, t) => o.localToWorld(e.copy(i.grips[t]))), true;
    }
    canCatch(e) {
      return __recoveredScope.rc.includes(this.state) && Math.hypot(e.x - this.pos.x, e.z - this.pos.z) < this.cfg.reach && Math.abs(e.y - this.pos.y) < 4;
    }
    catch() {
      return __recoveredScope.rc.includes(this.state) ? (this.state = `caught`, this.mode = null, this.clock = 0, this.drive = 0, this.animate(`run.001`, 0, 0), true) : false;
    }
    carry() {
      return this.state !== `caught` || this.way === null ? false : (this.mode = `carry`, true);
    }
    steer() {
      return this.state === `caught` && (this.state = this.mode = `ridden`, this.clock = 0, this.drive = 0, true);
    }
    release(e) {
      return __recoveredScope.ic.includes(this.state) ? (this.state = `escape`, this.mode = null, this.clock = 0, this.from = {
        x: e.x,
        z: e.z
      }, this.animate(`run.001`), true) : false;
    }
    findWay() {
      let e = this.route.at(-1);
      this.search = __recoveredScope.ec(this.route[0], e, (e, t) => !this.clearAt(e, t, 3.1), {
        slice: this.cfg.slice
      });
    }
    think() {
      if (!this.search) return;
      let {
        done: e,
        value: t
      } = this.search.next();
      e && (this.search = null, this.way = t);
    }
    clearAt(e, t, n) {
      return !(this.treeAt(e, t, n) || this.blocked?.(e, t) || this.hf.holeAt?.(e, t) || this.hf.inside && !this.hf.inside(e, t));
    }
    treeAt(e, t, n) {
      return !!(this.forest?.hitCanopy ? this.forest.hitCanopy(e, t, n) : this.forest?.hit(e, t, n + 2.2));
    }
    moveToward(e, t, n) {
      let r = e.x - this.pos.x,
        i = e.z - this.pos.z,
        a = Math.hypot(r, i);
      if (a < .001) return true;
      let o = Math.min(a, t * n);
      return r /= a, i /= a, this.yaw = Math.atan2(r, i), this.root.rotation.y = this.yaw, this.clearRun(r * o, i * o) ? (this.go(r * o, i * o), o >= a) : (this.speed = 0, false);
    }
    clearRun(e, t) {
      let n = Math.max(1, Math.ceil(Math.hypot(e, t) / 2));
      for (let r = 1; r <= n; r++) if (!this.clearAt(this.pos.x + e * r / n, this.pos.z + t * r / n, 2)) return false;
      return true;
    }
    go(e, t) {
      this.pos.x += e;
      this.pos.z += t;
      this.pos.y = this.hf.heightAt(this.pos.x, this.pos.z) + this.air;
      this.root.position.copy(this.pos);
    }
    stride(e, t, n) {
      for (let r of __recoveredScope.ac) {
        let i = e + r,
          a = Math.sin(i) * t,
          o = Math.cos(i) * t;
        if (this.clearRun(a, o)) return this.go(a, o), n && (this.yaw = i), true;
      }
      return false;
    }
    jump() {
      return ![`carry`, `ridden`].includes(this.state) || this.air > 0 || this.crouch > 0 ? false : (this.crouch = this.cfg.jumpCrouch, true);
    }
    get airborne() {
      return this.air > 0;
    }
    leap(e) {
      let t = this.cfg;
      this.crouch > 0 && (this.crouch -= e) <= 0 && (this.crouch = 0, this.vy = t.jumpUp, this.air = .001, this.events.push(`jump`));
      this.air > 0 && (this.vy -= t.gravity * e, this.air += this.vy * e, this.air <= 0 && (this.landing = -this.vy, this.air = this.vy = 0, this.squash = Math.min(.6, this.landing * .035), this.events.push(`land`)));
      this.squash *= Math.exp(-e * 7);
    }
    blink(e) {
      if (!this.contactUniforms) return;
      this.blinkT < 0 && (this.blinkIn -= e) <= 0 && (this.blinkT = 0, this.blinks = Math.random() < .2 ? 2 : 1);
      let t = 0;
      if (this.blinkT >= 0) {
        let n = this.blinkT += e;
        t = n < .07 ? n / .07 : n < .11 ? 1 : Math.max(0, 1 - (n - .11) / .11);
        n > .22 && (this.blinkT = --this.blinks > 0 ? 0 : -1, this.blinkT < 0 && (this.blinkIn = __recoveredScope.MathUtils.randFloat(...this.cfg.blink)));
      }
      this.contactUniforms.uBlink.value = t;
    }
    ride(e) {
      let t = this.cfg,
        n = this.reins,
        r = n.brake ? 0 : t.top * Math.max(0, n.throttle),
        i = n.brake ? t.brake : r > this.drive ? t.accel : t.coast,
        a = this.air > 0;
      a || (this.drive += __recoveredScope.MathUtils.clamp(r - this.drive, -i * e, i * e));
      this.yaw += n.steer * t.turn * e * (a ? .35 : 1);
      this.speed = this.drive * (a ? t.jumpBoost : 1);
      this.speed > .01 && !this.stride(this.yaw, this.speed * e, false) && (this.drive = this.speed = 0, this.events.push(`blocked`));
    }
    standSpot(e) {
      for (let t of [3.2, 4.5]) for (let n of [Math.PI / 2, -Math.PI / 2, Math.PI, 0]) {
        let r = this.yaw + n,
          i = this.pos.x + Math.sin(r) * t,
          a = this.pos.z + Math.cos(r) * t;
        if (!this.forest?.hit?.(i, a, 1) && !this.blocked?.(i, a) && !this.hf.holeAt?.(i, a) && (!this.hf.inside || this.hf.inside(i, a))) return e.set(i, this.hf.heightAt(i, a), a);
      }
      return null;
    }
    home() {
      this.place(this.route[0]);
      this.index = 1;
      this.root.visible = true;
      this.state = `waiting`;
      this.clock = 0;
      this.animate(`wait.001`);
    }
    update(e, t) {
      if (this.think(), !this.mixer) return;
      let n = this.cfg;
      if (this.clock += e, this.speed = 0, this.leap(e), this.blink(e), this.state === `waiting` && t && Math.hypot(t.x - this.pos.x, t.z - this.pos.z) < n.notice) {
        this.state = `shy`;
        this.clock = 0;
        this.animate(`afraid.001`);
        this.events.push(`shy`);
      } else if (this.state === `shy` && this.clock > n.shy && this.way) {
        this.state = `flee`;
        this.clock = 0;
        this.animate(`run.001`);
      } else if (this.state === `flee`) this.clock % 6 < 4 && this.index < this.way.length ? (this.speed = n.flee, this.animate(`run.001`), this.moveToward(this.way[this.index], this.speed, e) && (this.index = Math.min(this.index + 1, this.way.length - 1))) : this.animate(`afraid.001`);else if (this.state === `caught`) this.mode === `carry` && this.way && this.anchors ? (this.state = `carry`, this.clock = 0, this.animate(`run.001`)) : this.mode === `carry` && this.way === null && (this.mode = null, this.events.push(`noway`));else if (this.state === `carry`) {
        this.speed = n.carry * (this.air > 0 ? n.jumpBoost : 1);
        this.moveToward(this.way[this.index], this.speed, e) && (this.index++, this.index >= this.way.length && (this.state = `depart`, this.clock = 0, this.events.push(`arrive`)));
      } else if (this.state === `ridden`) {
        this.ride(e);
        this.animate(`run.001`, this.air > 0 ? .3 : this.speed > .3 ? __recoveredScope.MathUtils.clamp(this.speed / 14, .45, 1.2) : 0);
      } else if (this.state === `depart`) {
        let t = this.way.at(-1),
          r = this.way.at(-2),
          i = t.x - r.x,
          a = t.z - r.z,
          o = Math.hypot(i, a) || 1;
        this.speed = 8;
        this.moveToward({
          x: t.x + i / o * 70,
          z: t.z + a / o * 70
        }, this.speed, e);
        this.clock > n.depart && (this.state = `cooldown`, this.clock = 0, this.root.visible = false);
      } else if (this.state === `escape`) {
        let t = Math.atan2(this.pos.x - this.from.x, this.pos.z - this.from.z);
        this.stride(t, n.escapeSpeed * e, true) && (this.speed = n.escapeSpeed);
        this.clock > n.escape && (this.state = `cooldown`, this.clock = 0, this.root.visible = false);
      } else this.state === `cooldown` && this.clock > n.cooldown && this.home();
      this.carrying = __recoveredScope.ic.includes(this.state) ? 1 : Math.max(0, (this.carrying ?? 0) - e * 2);
      let r = this.crouch > 0 ? 1 - this.crouch / n.jumpCrouch : 0;
      if (this.model && (this.model.position.y = -n.sink * this.carrying - r * .4 - this.squash), this.pos.y = this.hf.heightAt(this.pos.x, this.pos.z) + this.air, this.root.position.copy(this.pos), this.root.rotation.x = this.air > 0 ? __recoveredScope.MathUtils.clamp(-this.vy * .02, -.3, .3) : 0, this.root.rotation.y = this.yaw, this.preGait) {
        for (let [e, t] of this.preGait) e.quaternion.copy(t);
        this.preGait = null;
      }
      this.mixer.update(e);
      this.clip === `run.001` && this.gaitBones && this.applyGait();
      this.root.updateMatrixWorld(true);
      this.footBones?.every(Boolean) && this.prints?.near(this.pos.x, this.pos.z) && this.feet.update(this.footBones[0], this.footBones[1], Math.sin(this.yaw), Math.cos(this.yaw), this.clip === `run.001` && this.speed > .5 && !this.air);
      __recoveredScope.ic.includes(this.state) && !this.anchors && this.anchor();
    }
    applyGait() {
      this.gaitAxis.set(1, 0, 0).applyQuaternion(this.root.quaternion);
      let e = (e, t, n = this.gaitAxis) => {
        let r = this.gaitBones[e];
        r?.parent && (r.parent.updateWorldMatrix(true, false), r.parent.getWorldQuaternion(this.gaitParent), this.gaitTurn.setFromAxisAngle(n, t), this.gaitQ.copy(this.gaitParent).invert().multiply(this.gaitTurn).multiply(this.gaitParent), r.quaternion.premultiply(this.gaitQ), r.updateWorldMatrix(false, true));
      };
      this.preGait = Object.values(this.gaitBones).filter(Boolean).map(e => [e, e.quaternion.clone()]);
      let t = this.action?.time ?? this.clock,
        n = this.cfg.chest * this.carrying;
      e(`Spine`, .58 - n);
      e(`Head`, -.38 + n * .5);
      let r = this.gaitDownAxis.set(1, 0, 0).applyQuaternion(this.root.quaternion).clone(),
        i = new __recoveredScope.Vector3(0, 0, 1).applyQuaternion(this.root.quaternion),
        a = (e, t, n) => {
          e.updateWorldMatrix(true, true);
          let r = e.getWorldPosition(new __recoveredScope.Vector3()),
            i = t.getWorldPosition(new __recoveredScope.Vector3()).sub(r).normalize(),
            a = n.sub(r).normalize();
          if (i.lengthSq() < .1 || a.lengthSq() < .1) return;
          let o = new __recoveredScope.T().setFromUnitVectors(i, a),
            s = e.parent.getWorldQuaternion(new __recoveredScope.T());
          e.quaternion.premultiply(s.clone().invert().multiply(o).multiply(s));
          e.updateWorldMatrix(false, true);
        };
      for (let [e, n] of [[`Left`, 1], [`Right`, -1]]) {
        let o = this.gaitBones[e + `Arm`],
          s = this.gaitBones[e + `ForeArm`],
          c = this.gaitBones[e + `Hand`];
        if (!o || !s || !c) continue;
        let l = o.getWorldPosition(new __recoveredScope.Vector3()),
          u = s.getWorldPosition(new __recoveredScope.Vector3()),
          d = c.getWorldPosition(new __recoveredScope.Vector3()),
          f = l.distanceTo(u),
          p = u.distanceTo(d),
          m = Math.sin(t * 8 + (n < 0 ? Math.PI : 0)),
          h = l.clone().addScaledVector(i, .2 + .42 * m).addScaledVector(r, n * .12);
        h.y = this.hf.heightAt(h.x, h.z) + .18 + Math.max(0, m) * .18;
        this.fists.landed(n > 0 ? 0 : 1, m < 0 && this.speed > .5 && !this.air) && this.fists.stamp(n > 0 ? 0 : 1, h.x, h.z, this.yaw, n > 0);
        let g = h.clone().sub(l),
          _ = Math.min(g.length(), f + p - .005);
        if (_ < .001) continue;
        let v = g.normalize(),
          y = (f * f - p * p + _ * _) / (2 * _),
          b = r.clone().multiplyScalar(n).addScaledVector(v, -r.clone().multiplyScalar(n).dot(v)).normalize(),
          x = l.clone().addScaledVector(v, y).addScaledVector(b, Math.sqrt(Math.max(0, f * f - y * y))),
          S = l.clone().addScaledVector(v, _);
        a(o, s, x);
        a(s, c, S);
      }
    }
    headPosition(e) {
      return this.head ? (this.head.getWorldPosition(e), e.y += .08, e) : e.copy(this.pos).add(__recoveredScope.lc.set(0, 4.5, 0));
    }
  };
}
/* Recovered binding pc. Live dependencies: fc. */
export function create_pc(__recoveredScope) {
  return function pc() {
    try {
      return JSON.parse(localStorage.getItem(__recoveredScope.fc)) ?? {};
    } catch {
      return {};
    }
  };
}
/* Recovered binding mc. Live dependencies: pc, fc. */
export function create_mc(__recoveredScope) {
  return function mc(e) {
    let t = __recoveredScope.pc();
    if (t[e]) return false;
    t[e] = new Date().toISOString();
    try {
      localStorage.setItem(__recoveredScope.fc, JSON.stringify(t));
    } catch {}
    return true;
  };
}
/* Recovered binding Mm. Live dependencies: Dm, Q, jm, Om, km, groundHeightfield, Am. Writes: jm. */
export function create_Mm(__recoveredScope) {
  return function Mm(e) {
    __recoveredScope.Dm.update(e);
    let t = __recoveredScope.Q,
      n = t.model;
    if (!n || !t.root.visible || t.air > 0 || t.speed < 1.5) return;
    __recoveredScope.jm += e * t.speed * 6;
    let r = Math.floor(__recoveredScope.jm);
    if (!r) return;
    __recoveredScope.jm -= r;
    let i = Math.sin(t.yaw),
      a = Math.cos(t.yaw);
    for (let e of __recoveredScope.Om) {
      let o = n.getObjectByName(`mixamorig` + e) ?? n.getObjectByName(`mixamorig:` + e);
      if (!o) continue;
      o.getWorldPosition(__recoveredScope.km);
      let s = __recoveredScope.groundHeightfield.heightAt(__recoveredScope.km.x, __recoveredScope.km.z);
      if (__recoveredScope.km.y - s > 1.2) continue;
      __recoveredScope.km.y = s;
      let c = e.startsWith(`Left`) ? 1 : -1,
        l = a * c,
        u = -i * c;
      __recoveredScope.Dm.emit(__recoveredScope.km, __recoveredScope.Am.set(i * t.speed * .65 + l * 2.5, 3.5 + t.speed * .12, a * t.speed * .65 + u * 2.5), r, 3 + t.speed * .08);
    }
  };
}
/* Recovered binding Nm. Live dependencies: Q, km, groundHeightfield, Dm, Am. */
export function create_Nm(__recoveredScope) {
  return function Nm(e, t, n) {
    let r = __recoveredScope.Q,
      i = Math.sin(r.yaw),
      a = Math.cos(r.yaw);
    for (let o = 0; o < e; o += 4) {
      let e = Math.random() * Math.PI * 2,
        o = Math.max(0, -(Math.sin(e) * i + Math.cos(e) * a)),
        s = t * (.5 + Math.random() * .7) * (1 - .75 * o);
      __recoveredScope.km.set(r.pos.x + Math.sin(e) * 1.5, __recoveredScope.groundHeightfield.heightAt(r.pos.x, r.pos.z), r.pos.z + Math.cos(e) * 1.5);
      __recoveredScope.Dm.emit(__recoveredScope.km, __recoveredScope.Am.set(Math.sin(e) * s + i * r.speed * .3, n * (.6 + Math.random() * .7), Math.cos(e) * s + a * r.speed * .3), 4, 3);
    }
  };
}
/* Recovered binding zm. Live dependencies: Vector3. */
export function create_zm(__recoveredScope) {
  return {
    hips: new __recoveredScope.Vector3(0, .04, 0),
    feet: [new __recoveredScope.Vector3(), new __recoveredScope.Vector3()],
    grips: [new __recoveredScope.Vector3(), new __recoveredScope.Vector3()],
    kneeOut: .1,
    fold: .5,
    look: {
      x: -.3,
      y: 0,
      z: 0
    }
  };
}
/* Recovered binding Bm. Live dependencies: . */
export function create_Bm(__recoveredScope) {
  return {
    k: 45,
    c: 6,
    heave: .012,
    nod: .016,
    surge: .02,
    sway: .025,
    headK: 25,
    headC: 5,
    head: .8,
    limit: 40
  };
}
/* Recovered binding Vm. Live dependencies: Vector3. */
export function create_Vm(__recoveredScope) {
  return {
    ready: false,
    prev: new __recoveredScope.Vector3(),
    vel: new __recoveredScope.Vector3(),
    acc: new __recoveredScope.Vector3(),
    bob: 0,
    bobV: 0,
    pitch: 0,
    pitchV: 0,
    roll: 0,
    rollV: 0,
    head: 0,
    headV: 0
  };
}
/* Recovered binding Hm. Live dependencies: Vm, Bm, zm, Gm, Um, Wm, fg, Q, MathUtils. */
export function create_Hm(__recoveredScope) {
  return function Hm(e) {
    let t = __recoveredScope.Vm,
      n = __recoveredScope.Bm,
      r = __recoveredScope.zm;
    if (!t.ready || e <= 0) {
      t.prev.copy(__recoveredScope.Gm);
      t.vel.set(0, 0, 0);
      t.ready = true;
      return;
    }
    let i = __recoveredScope.Um.subVectors(__recoveredScope.Gm, t.prev).divideScalar(e);
    t.prev.copy(__recoveredScope.Gm);
    __recoveredScope.Wm.subVectors(i, t.vel).divideScalar(e).applyAxisAngle(__recoveredScope.fg, -__recoveredScope.Q.yaw);
    t.vel.copy(i);
    __recoveredScope.Wm.clampScalar(-n.limit, n.limit);
    t.acc.lerp(__recoveredScope.Wm, 1 - Math.exp(-e * 25));
    let a = t.acc,
      o = (t, n, r, i, a) => (n += (-i * (t - r) - a * n) * e, [t + n * e, n]);
    [t.bob, t.bobV] = o(t.bob, t.bobV, __recoveredScope.MathUtils.clamp(-a.y * n.heave, -.06, .06), n.k, n.c);
    [t.pitch, t.pitchV] = o(t.pitch, t.pitchV, __recoveredScope.MathUtils.clamp(a.y * n.nod - a.z * n.surge, -.2, .2), n.k, n.c);
    [t.roll, t.rollV] = o(t.roll, t.rollV, __recoveredScope.MathUtils.clamp(a.x * n.sway, -.18, .18), n.k * .7, n.c);
    [t.head, t.headV] = o(t.head, t.headV, -t.pitch * n.head, n.headK, n.headC);
    r.hips.y = .04 + t.bob;
    r.hips.z = -t.pitch * .05;
    t.t = (t.t ?? 0) + e;
    let s = Math.sin(t.t * 1.7);
    r.fold = .5 + t.pitch + s * .02;
    r.look.x = -.3 + t.head - s * .015;
    r.look.y = Math.sin(t.t * .37) * Math.sin(t.t * .23) * .35;
    r.look.z = -t.roll * .5;
  };
}
/* Recovered binding Xm. Live dependencies: Ym, Eu, Jm, K, Gm, Q, xf. */
export function create_Xm(__recoveredScope) {
  return function Xm() {
    __recoveredScope.Ym.subVectors(__recoveredScope.Eu.target.position, __recoveredScope.Eu.position).normalize();
    __recoveredScope.Ym.addScaledVector(__recoveredScope.Jm, -__recoveredScope.Ym.dot(__recoveredScope.Jm)).normalize();
    __recoveredScope.K.copy(__recoveredScope.Gm).addScaledVector(__recoveredScope.Ym, .3);
    __recoveredScope.Q.setContact(__recoveredScope.K, __recoveredScope.xf.set(Math.sin(__recoveredScope.Q.yaw), 0, Math.cos(__recoveredScope.Q.yaw)), .9);
  };
}
/* Recovered binding Zm. Live dependencies: Q, physics, rider, Vm, U, ug, zm, F, I. Writes: Pm, Fm, Im, Lm, W. */
export function create_Zm(__recoveredScope) {
  return function Zm() {
    __recoveredScope.Q.canCatch(__recoveredScope.physics.pos) && __recoveredScope.Q.catch() && (__recoveredScope.Pm = __recoveredScope.rider.locomotion === `walk`, __recoveredScope.Fm = 6, __recoveredScope.Im = 0, __recoveredScope.Vm.ready = false, __recoveredScope.Lm = true, __recoveredScope.U.reset(), __recoveredScope.ug(), __recoveredScope.rider.setLocomotion(`sit`, __recoveredScope.zm), __recoveredScope.W = `snowMonster`, __recoveredScope.physics.vel.set(0, 0, 0), __recoveredScope.physics.yawRate = __recoveredScope.physics.jumpCharge = __recoveredScope.physics.slip = 0, __recoveredScope.F.gap(__recoveredScope.physics.pos), __recoveredScope.I.toast(`Caught it!`, 1600));
  };
}
/* Recovered binding Qm. Live dependencies: Q, I. Writes: Fm, Im. */
export function create_Qm(__recoveredScope) {
  return function Qm() {
    __recoveredScope.Q.carry() ? (__recoveredScope.Fm = __recoveredScope.Im = 0, __recoveredScope.I.toast(`Hold on! Up to the summit`, 2200)) : __recoveredScope.I.toast(`No way up from here · steer it yourself`, 2400);
  };
}
/* Recovered binding $m. Live dependencies: Q, I, Nd. Writes: Fm, Im. */
export function create_Dollarm(__recoveredScope) {
  return function $m() {
    __recoveredScope.Q.steer() && (__recoveredScope.Fm = 2.8, __recoveredScope.Im = 0, __recoveredScope.I.toast(__recoveredScope.Nd.on ? `Stick: run and turn` : `W run · S pull up · A/D turn`, 2200));
  };
}
/* Recovered binding eh. Live dependencies: Q, W, physics, Mm, I, th, L, Nm. Writes: Rm. */
export function create_eh(__recoveredScope) {
  return function eh(e) {
    __recoveredScope.Q.update(e, __recoveredScope.W === `ride` ? __recoveredScope.physics.pos : null);
    __recoveredScope.Mm(e);
    for (let e of __recoveredScope.Q.events.splice(0)) if (e === `shy` && __recoveredScope.I.toast(`A shy snow monster!`, 1800), e === `noway` && __recoveredScope.I.toast(`No way up from here · steer it yourself`, 2400), e === `arrive` && __recoveredScope.W === `snowMonster` && __recoveredScope.th(true), e === `jump` && (__recoveredScope.L.swish(1.5), __recoveredScope.Nm(350, 6, 6)), e === `land`) {
      let e = Math.min(1, __recoveredScope.Q.landing / 18);
      __recoveredScope.Nm(Math.round(500 + 600 * e), 7 + 9 * e, 6 + 8 * e);
      __recoveredScope.L.thud(1 + 2 * e);
      __recoveredScope.W === `snowMonster` && (__recoveredScope.Rm = .25 + .45 * e);
    }
  };
}
/* Recovered binding th. Live dependencies: Q, nm, K, xf, physics, Qu, rider, Pm, G, kp, F, I. Writes: W, cg. */
export function create_th(__recoveredScope) {
  return function th(e = false) {
    let t = __recoveredScope.Q.standSpot(__recoveredScope.nm) ?? __recoveredScope.nm.set(__recoveredScope.Q.pos.x + 3, 0, __recoveredScope.Q.pos.z);
    e || __recoveredScope.Q.release(t);
    __recoveredScope.Q.setContact(__recoveredScope.K, __recoveredScope.xf, 0);
    __recoveredScope.W = `ride`;
    __recoveredScope.physics.reset(t.x, t.z, __recoveredScope.Qu(__recoveredScope.Q.pos.x - t.x, __recoveredScope.Q.pos.z - t.z));
    __recoveredScope.rider.setLocomotion(__recoveredScope.Pm ? `walk` : `ride`);
    __recoveredScope.cg = null;
    __recoveredScope.G.set(__recoveredScope.Q.pos.x - t.x, 0, __recoveredScope.Q.pos.z - t.z).normalize();
    __recoveredScope.kp(0, true);
    __recoveredScope.F.gap(__recoveredScope.physics.pos);
    __recoveredScope.I.prompt(``);
    __recoveredScope.I.toast(e ? `Back at the summit!` : `Off it runs!`, 2200);
  };
}
/* Recovered binding nh. Live dependencies: Q, Im, th. */
export function create_nh(__recoveredScope) {
  return function nh() {
    (__recoveredScope.Q.state === `caught` || __recoveredScope.Im > .6) && __recoveredScope.th();
  };
}
/* Recovered binding rh. Live dependencies: Q, playerInput, Lm, eh, W, rider, fg, Gm, Km, qm, Jm, Xm, zm, Hm, Um, cg, dg, Vm, physics, Qu, ih, I. Writes: Im, Lm. */
export function create_rh(__recoveredScope) {
  return function rh(e) {
    if (__recoveredScope.Im += e, Object.assign(__recoveredScope.Q.reins, {
      throttle: +!!__recoveredScope.playerInput.tuck,
      brake: __recoveredScope.playerInput.brake,
      steer: __recoveredScope.playerInput.steer
    }), __recoveredScope.playerInput.jump && !__recoveredScope.Lm && __recoveredScope.Q.jump(), __recoveredScope.Lm = __recoveredScope.playerInput.jump, __recoveredScope.eh(e), __recoveredScope.W !== `snowMonster`) return;
    if (__recoveredScope.rider.root.quaternion.setFromAxisAngle(__recoveredScope.fg, __recoveredScope.Q.yaw + Math.PI), __recoveredScope.Q.riderFrame(__recoveredScope.Gm, __recoveredScope.Km, __recoveredScope.qm, __recoveredScope.Jm)) {
      __recoveredScope.Xm();
      __recoveredScope.rider.root.position.copy(__recoveredScope.Gm);
      __recoveredScope.rider.root.updateMatrixWorld(true);
      __recoveredScope.zm.feet.forEach((e, t) => __recoveredScope.rider.body.worldToLocal(e.copy(__recoveredScope.Km[t])));
      __recoveredScope.Hm(e);
      let t = __recoveredScope.rider.build,
        n = __recoveredScope.zm,
        r = n.hips.y + t.seat + t.pivot;
      __recoveredScope.zm.grips.forEach((e, i) => {
        __recoveredScope.rider.body.worldToLocal(e.copy(__recoveredScope.qm[i]));
        __recoveredScope.Um.set((i ? -1 : 1) * t.shoulder[0], r + t.shoulder[1] * Math.cos(n.fold), n.hips.z + t.shoulder[1] * Math.sin(n.fold));
        let a = e.distanceTo(__recoveredScope.Um),
          o = t.reach * .97;
        a > o && e.lerp(__recoveredScope.Um, 1 - o / a);
      });
    } else __recoveredScope.Q.headPosition(__recoveredScope.rider.root.position);
    __recoveredScope.cg && __recoveredScope.dg(e);
    __recoveredScope.rider.update(e, {
      crouch: 0,
      air: false,
      speed: __recoveredScope.Q.speed,
      lean: __recoveredScope.Vm.roll,
      twist: 0
    });
    __recoveredScope.physics.pos.copy(__recoveredScope.Q.pos);
    __recoveredScope.physics.vel.set(Math.sin(__recoveredScope.Q.yaw) * __recoveredScope.Q.speed, 0, Math.cos(__recoveredScope.Q.yaw) * __recoveredScope.Q.speed);
    __recoveredScope.physics.yaw = __recoveredScope.Qu(Math.sin(__recoveredScope.Q.yaw), Math.cos(__recoveredScope.Q.yaw));
    __recoveredScope.ih(e);
    let t = __recoveredScope.Q.state;
    __recoveredScope.I.prompt(t === `caught` ? `<kbd>E</kbd> carry me to the summit · <kbd>F</kbd> let me steer · <kbd>Q</kbd> get down` : t === `ridden` ? `<kbd>W</kbd> run · <kbd>S</kbd> pull up · <kbd>A</kbd><kbd>D</kbd> turn · <kbd>Space</kbd> jump · <kbd>E</kbd> get down` : `<kbd>Space</kbd> jump · <kbd>E</kbd> get down`, t === `caught` ? `Summit, or steer it yourself?` : t === `carry` ? `Riding up to the summit` : ``);
  };
}
/* Recovered binding ih. Live dependencies: xf, Q, G, Gm, MathUtils, Fm, U, K, q, Ef, vu, groundHeightfield, Rm, camera, J, Sf. Writes: Fm, Rm. */
export function create_ih(__recoveredScope) {
  return function ih(e) {
    let t = __recoveredScope.xf.set(Math.sin(__recoveredScope.Q.yaw), 0, Math.cos(__recoveredScope.Q.yaw));
    __recoveredScope.G.lerp(t, 1 - Math.exp(-e * 2.5)).normalize();
    let n = __recoveredScope.Gm;
    __recoveredScope.Fm += e;
    let r = __recoveredScope.MathUtils.smoothstep(__recoveredScope.Fm, .4, 1.6),
      i = __recoveredScope.MathUtils.smoothstep(__recoveredScope.Fm, 2.8, 5.2),
      a = __recoveredScope.Q.air,
      o = __recoveredScope.MathUtils.lerp(0, __recoveredScope.MathUtils.lerp(1.3, 5.2, i), r) + a * .6,
      s = r * i * .5;
    __recoveredScope.Q.speed > 3 && (__recoveredScope.U.yaw *= Math.exp(-e * 1.2), __recoveredScope.U.pitch *= Math.exp(-e * 1.2));
    __recoveredScope.K.copy(n).addScaledVector(__recoveredScope.G, -o);
    __recoveredScope.K.x += __recoveredScope.G.z * s;
    __recoveredScope.K.z -= __recoveredScope.G.x * s;
    __recoveredScope.K.y += __recoveredScope.MathUtils.lerp(10, __recoveredScope.MathUtils.lerp(1.3, 2.4, i), r);
    __recoveredScope.q.copy(n).addScaledVector(__recoveredScope.G, __recoveredScope.MathUtils.lerp(.5, __recoveredScope.MathUtils.lerp(9, 4, i), r));
    __recoveredScope.q.y += __recoveredScope.MathUtils.lerp(-1, __recoveredScope.MathUtils.lerp(.9, .3, i), r);
    (__recoveredScope.U.yaw || __recoveredScope.U.pitch) && (__recoveredScope.Ef.copy(n).y += .5, __recoveredScope.vu(__recoveredScope.K, __recoveredScope.Ef, __recoveredScope.G, __recoveredScope.U.yaw, __recoveredScope.U.pitch), __recoveredScope.vu(__recoveredScope.q, __recoveredScope.Ef, __recoveredScope.G, __recoveredScope.U.yaw, __recoveredScope.U.pitch));
    __recoveredScope.K.y -= a * .45;
    __recoveredScope.K.y = Math.max(__recoveredScope.K.y, __recoveredScope.groundHeightfield.heightAt(__recoveredScope.K.x, __recoveredScope.K.z) + 1.5);
    __recoveredScope.Rm > 0 && (__recoveredScope.K.y += (Math.random() - .5) * __recoveredScope.Rm, __recoveredScope.q.y += (Math.random() - .5) * __recoveredScope.Rm * .5, __recoveredScope.Rm = Math.max(0, __recoveredScope.Rm - e * 1.5));
    __recoveredScope.camera.position.lerp(__recoveredScope.K, 1 - Math.exp(-e * 20));
    __recoveredScope.J.lerp(__recoveredScope.q, 1 - Math.exp(-e * 20));
    __recoveredScope.camera.lookAt(__recoveredScope.J);
    __recoveredScope.camera.fov = 65 + __recoveredScope.Sf() * 12 + Math.min(__recoveredScope.Q.speed, 28) * .25;
    __recoveredScope.camera.updateProjectionMatrix();
  };
}
