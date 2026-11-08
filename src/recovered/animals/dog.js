/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding _n. Live dependencies: loadGLTF, hn, gn. Writes: gn. */
export function create__n(__recoveredScope) {
  return function _n() {
    return __recoveredScope.gn ||= __recoveredScope.loadGLTF(__recoveredScope.hn).catch(e => {
      throw __recoveredScope.gn = null, e;
    }), __recoveredScope.gn;
  };
}
/* Recovered binding Pr. Live dependencies: Nr. */
export function create_Pr(__recoveredScope) {
  return (e, t) => __recoveredScope.Nr(t - e + Math.PI, Math.PI * 2) - Math.PI;
}
/* Recovered binding Fr. Live dependencies: . */
export function create_Fr(__recoveredScope) {
  return e => e[Math.floor(Math.random() * e.length)];
}
/* Recovered binding Ir. Live dependencies: Oe, Vector3, ar, Lr, _r, fr, _n, Fn, $n, Sr, jr, Er, Tr, Mr, Cr, wr, Fr, Pr, Or, D, Dr, kr, Rr, Ar. */
export function create_Ir(__recoveredScope) {
  return class {
    constructor({
      hf: e,
      forest: t,
      obstacles: n = [],
      home: r,
      prints: i = null
    }) {
      this.hf = e;
      this.forest = t;
      this.obstacles = n;
      this.home = r;
      this.root = new __recoveredScope.Oe();
      this.root.name = `Dog`;
      this.pos = new __recoveredScope.Vector3(r.x, this.hf.heightAt(r.x, r.z), r.z);
      this.yaw = r.yaw;
      this.speed = 0;
      this.turnRate = 0;
      this.goal = null;
      this.state = `home`;
      this.t = 0;
      this.next = 2;
      this.lookAt = null;
      this.glance = 0;
      this.puff = 0;
      this.pets = 0;
      this.lastPet = -1e9;
      this.events = [];
      this.spray = new __recoveredScope.ar(160);
      this.spray.points.material.size = .18;
      this.ball = new __recoveredScope.Lr(e);
      this.tracks = new __recoveredScope._r(i, __recoveredScope.fr.paw, 4, {
        length: .17,
        press: .85
      });
      this.ready = __recoveredScope._n().then(e => (this.rig = new __recoveredScope.Fn(e), this.body = new __recoveredScope.$n(this.rig), this.body.scale = __recoveredScope.Sr, this.rig.scene.scale.setScalar(__recoveredScope.Sr), this.root.add(this.rig.scene), this.#f(), this));
    }
    update(e, t, n, r) {
      if (this.time = t, this.ball.update(e, this.spray, this.events), !this.body) return;
      this.#t(e, n);
      this.#l(e);
      this.#f();
      let i = r && r.position.distanceTo(this.pos) > 350;
      if (this.root.visible = !i, !i) {
        this.#p(n);
        this.body.speed = this.speed / __recoveredScope.Sr;
        this.body.turnRate = this.turnRate;
        let t = Math.cos(this.yaw),
          r = Math.sin(this.yaw),
          i = this.pos.y;
        this.body.update(e, (e, n) => (this.hf.heightAt(this.pos.x + (e * t + n * r) * __recoveredScope.Sr, this.pos.z + (-e * r + n * t) * __recoveredScope.Sr) - i) / __recoveredScope.Sr);
        this.#m(e);
        this.body.footfalls(this.tracks, this.pos, this.yaw);
      }
      this.spray.update(e);
    }
    #e(e) {
      this.state !== e && (this.state = e, this.t = 0, this.sub = 0, this.next = 0);
    }
    #t(e, t) {
      let n = this.body;
      this.t += e;
      this.next -= e;
      let r = t ? Math.hypot(t.pos.x - this.pos.x, t.pos.z - this.pos.z) : 1 / 0,
        i = Math.hypot(this.pos.x - this.home.x, this.pos.z - this.home.z),
        a = t ? Math.hypot(t.vel.x, t.vel.z) : 0;
      switch (this.puff = __recoveredScope.jr(this.puff + (this.speed > 4 ? e * .12 : -e * .05), 0, 1), n.pant = __recoveredScope.jr(this.puff * 1.6, 0, 1), t?.crashed && r < 30 && !this.ball.flying && ![`check`, `petted`, `belly`].includes(this.state) && (this.state !== `rest` || r < __recoveredScope.Er * 1.5) && this.#e(`check`), !t && [`watch`, `greet`, `hello`, `attend`, `follow`, `chase`, `check`, `petted`, `belly`].includes(this.state) && this.#e(`return`), this.state) {
        case `home`:
          this.goal = this.wander ?? null;
          this.wander && this.#s(this.wander, .5) && (this.wander = null);
          n.posture = this.idleSit ? `sit` : `stand`;
          n.wag = .25;
          n.tailUp = 0;
          n.sniff = this.wander ? .8 : 0;
          n.tilt = 0;
          n.lean = 0;
          n.dig = 0;
          this.lookAt = null;
          this.next <= 0 && this.#n();
          t && r < __recoveredScope.Tr ? this.#e(r < 18 && a < 5 ? `greet` : `watch`) : this.t > __recoveredScope.Mr(14, 20) && !this.wander && this.#e(`rest`);
          i > 8 && !this.wander && this.#e(`return`);
          break;
        case `rest`:
          {
            this.goal = null;
            n.sniff = n.dig = n.lean = 0;
            n.tilt = 0;
            let i = this.t < 7 ? `sit` : this.t < 20 ? `lie` : `sleep`;
            n.posture !== i && (n.posture = i, i !== `sit` && n.play(`yawn`));
            n.tired = n.posture === `sleep` ? 1 : this.t / 25;
            n.wag = n.posture === `sleep` ? 0 : .1;
            n.tailUp = -.1;
            this.lookAt = null;
            n.posture === `lie` && this.next <= 0 && (this.glance = __recoveredScope.Mr(-1, 1), this.next = __recoveredScope.Mr(3, 7));
            t && (r < (n.posture === `sleep` ? __recoveredScope.Er : __recoveredScope.Tr * .6) ? (n.posture === `sleep` && (n.posture = `lie`, this.t = 8), this.lookAt = t.head, n.tired = 0, this.wakeT = (this.wakeT ?? 0) + e, this.wakeT > 1.2 && (n.play(`shake`), this.#e(a < 5 ? `greet` : `watch`))) : this.wakeT = 0);
            this.state !== `rest` && (n.tired = 0, this.wakeT = 0);
            break;
          }
        case `watch`:
          this.goal = null;
          n.posture = `stand`;
          n.wag = .6;
          n.tailUp = .4;
          n.sniff = 0;
          this.lookAt = t.head;
          this.#c(t.pos);
          r < 18 && a < 5 ? this.#e(`greet`) : r > __recoveredScope.Tr * 1.3 ? this.#e(`return`) : a > 5 && r < 25 && this.#e(`chase`);
          break;
        case `greet`:
          n.posture = `stand`;
          n.wag = 1.1;
          n.tailUp = .6;
          n.sniff = 0;
          this.lookAt = t.head;
          this.goal = this.#i(t, 1.5, r > 10 ? __recoveredScope.Cr.run : __recoveredScope.Cr.trot);
          (this.#s(this.goal, .6) || r < 1.9) && this.#e(`hello`);
          a > 6 && this.#e(`chase`);
          (r > __recoveredScope.Tr * 1.4 || i > __recoveredScope.wr) && this.#e(`return`);
          break;
        case `hello`:
          this.goal = null;
          this.#c(t.pos);
          this.lookAt = t.head;
          n.wag = 1.4;
          n.tailUp = .8;
          this.sub === 0 && (this.events.push({
            type: `hello`,
            at: this.pos.clone()
          }), this.sub = __recoveredScope.Fr([`bow`, `bounce`, `bark`, `sniff`]), this.sub === `bow` && (n.posture = `bow`, this.#r()), this.sub === `bounce` && (n.posture = `rear`, this.#r()), this.sub === `bark` && (this.#r(), this.barkAgain = .45), this.sub === `sniff` && (n.sniff = .6));
          this.barkAgain !== void 0 && (this.barkAgain -= e) <= 0 && (this.#r(), this.barkAgain = void 0);
          this.sub === `bounce` && this.t > .7 && (n.posture = `stand`);
          this.sub === `bounce` && this.t > 1 && this.t < 1.1 && (n.posture = `rear`);
          this.sub === `bounce` && this.t > 1.6 && (n.posture = `stand`);
          this.sub === `bow` && this.t > 1.6 && (n.posture = `stand`);
          this.t > 1.2 && (n.sniff = 0);
          this.t > 2.6 && this.#e(`attend`);
          break;
        case `attend`:
          if (this.lookAt = t.head, n.wag = .7, n.tailUp = .3, n.sniff = 0, n.lean = 0, r > 3.6 || a > 1.5) {
            this.#e(a > 6 ? `chase` : `follow`);
            break;
          }
          if (r < 1 ? this.goal = this.#o(t, 1.3) : (this.goal = null, this.#c(t.pos)), n.posture = this.t > 2.5 && this.speed < .3 ? `sit` : `stand`, this.next <= 0) {
            this.next = __recoveredScope.Mr(3, 7);
            let e = Math.random();
            e < .35 ? (n.tilt = __recoveredScope.Fr([-.35, .35]), this.untilt = 1.2) : e < .5 && this.t > 8 ? this.#r() : e < .6 && n.play(`yawn`);
          }
          this.untilt !== void 0 && (this.untilt -= e) <= 0 && (n.tilt = 0, this.untilt = void 0);
          this.t > 40 && this.#e(`rest`);
          break;
        case `follow`:
          {
            n.posture = `stand`;
            n.wag = .8;
            n.tailUp = .5;
            n.tilt = 0;
            this.lookAt = r < 6 && this.speed < 3 ? t.head : null;
            let e = __recoveredScope.jr(a + Math.max(0, r - 2.5) * 1.2, 0, __recoveredScope.Cr.sprint);
            this.goal = this.#i(t, 1.8, e);
            a > 6.5 && r > 4 ? this.#e(`chase`) : a < .6 && r < 3 && this.#e(`attend`);
            i > __recoveredScope.wr && this.#e(`giveup`);
            break;
          }
        case `chase`:
          n.posture = `stand`;
          n.wag = .9;
          n.tailUp = .6;
          n.tilt = 0;
          this.lookAt = null;
          this.goal = this.#i(t, 2.2, __recoveredScope.Cr.sprint);
          this.next <= 0 && (this.#r(), this.next = __recoveredScope.Mr(1.2, 2.8));
          a < 4 && r < 8 && this.#e(`follow`);
          (i > __recoveredScope.wr || r > 45 && a > __recoveredScope.Cr.sprint || r > 90) && this.#e(`giveup`);
          break;
        case `giveup`:
          this.goal = null;
          n.wag = .4;
          n.tailUp = .1;
          t && (this.lookAt = t.head, this.#c(t.pos));
          this.sub === 0 && (this.sub = 1, this.#r(), this.barkAgain = .5);
          this.barkAgain !== void 0 && (this.barkAgain -= e) <= 0 && (this.#r(), this.barkAgain = void 0);
          this.t > 2.2 && this.#e(`return`);
          break;
        case `return`:
          n.posture = `stand`;
          n.wag = .3;
          n.tailUp = 0;
          n.sniff = n.lean = n.dig = 0;
          n.tilt = 0;
          this.lookAt = null;
          this.goal = {
            x: this.home.x,
            z: this.home.z,
            speed: i > 12 ? __recoveredScope.Cr.trot : __recoveredScope.Cr.walk,
            stop: .4,
            face: this.home.yaw
          };
          i < .8 && Math.abs(__recoveredScope.Pr(this.yaw, this.home.yaw)) < .3 && (this.#e(`home`), this.next = 2);
          t && r < 12 && a < 3 && this.t > 3 && this.#e(`greet`);
          break;
        case `petted`:
          this.goal = this.#a(t, .8, __recoveredScope.Cr.trot);
          this.#s(this.goal, .2) && (this.goal = null, this.#c(t.pos));
          n.posture = this.goal ? `stand` : `sit`;
          n.wag = 1;
          n.tailUp = .2;
          n.lean = +!this.goal;
          n.tilt = 0;
          n.sniff = 0;
          this.lookAt = t.head;
          n.pant = Math.max(n.pant, .7);
          this.time - this.lastPet > 3.5 && (this.pets = 0, this.#e(`attend`));
          break;
        case `belly`:
          this.goal = null;
          n.posture = `belly`;
          n.wiggle = 1;
          n.wag = 1.2;
          n.lean = 0;
          n.pant = 1;
          this.lookAt = t.head;
          (this.t > 4.5 || this.time - this.lastPet > 3) && (n.wiggle = 0, n.posture = `stand`, n.play(`shake`), this.pets = 0, this.#e(`attend`));
          break;
        case `fetch`:
          {
            let e = this.ball,
              t = e.flying || e.waiting > 0;
            n.posture = `stand`;
            n.wag = 1.1;
            n.tailUp = .8;
            n.sniff = n.lean = 0;
            n.tilt = 0;
            this.lookAt = e.flying ? e.pos : null;
            let r = t ? e.landing : e.pos;
            if (this.goal = {
              x: r.x,
              z: r.z,
              speed: this.slow ? __recoveredScope.Cr.run : __recoveredScope.Cr.sprint,
              stop: t ? .2 : .45
            }, e.flying && !this.slow) {
              let t = .95,
                r = Math.sin(this.yaw),
                i = Math.cos(this.yaw),
                a = e.pos.y - this.pos.y - t,
                o = e.vel.y,
                s = o * o + 2 * __recoveredScope.Or * a;
              if (s > 0 && !this.catchAt) {
                let t = (o + Math.sqrt(s)) / __recoveredScope.Or,
                  a = e.pos.x + e.vel.x * t - (this.pos.x + r * .5 + r * this.speed * t),
                  c = e.pos.z + e.vel.z * t - (this.pos.z + i * .5 + i * this.speed * t);
                t < .38 && Math.hypot(a, c) < 1.1 && (n.play(`leap`, {
                  height: .42,
                  dur: .75
                }), this.catchAt = this.time + t);
              }
              this.catchAt && this.time >= this.catchAt && (this.catchAt = 0, __recoveredScope.D.set(this.pos.x + r * .5, this.pos.y + t, this.pos.z + i * .5), e.pos.distanceTo(__recoveredScope.D) < 1.4 && (e.pop(this.spray, this.events), n.play(`bark`, {
                dur: .25
              }), this.#e(`proud`)));
            } else e.down && this.#s(e.pos, .75) ? (n.play(`leap`, {
              height: .18,
              dur: .5
            }), this.digAt = e.pos.clone(), this.breakAt = this.time + .35, this.#e(`dig`)) : !t && !e.down && this.#e(`puzzled`);
            break;
          }
        case `dig`:
          this.goal = null;
          this.#c(this.digAt);
          this.breakAt && this.time >= this.breakAt && (this.breakAt = 0, this.ball.pop(this.spray, this.events));
          n.dig = +(this.t > .5);
          n.sniff = .4;
          n.wag = .9;
          n.tailUp = .9;
          this.lookAt = null;
          this.t > 2.6 && (n.dig = 0, n.play(`sneeze`), this.#e(`puzzled`));
          break;
        case `puzzled`:
          this.goal = null;
          n.dig = n.sniff = 0;
          n.wag = .3;
          n.tailUp = .2;
          n.tilt = this.t < .9 ? .4 : this.t < 1.8 ? -.4 : 0;
          this.lookAt = this.t < 1.8 ? this.digAt ?? this.ball.last : t?.head ?? null;
          this.t > 2.4 && (n.tilt = 0, this.#e(t ? `proud` : `return`));
          break;
        case `proud`:
          if (n.posture = `stand`, n.wag = 1.2, n.tailUp = .7, n.tilt = 0, this.lookAt = t?.head ?? null, !t) {
            this.#e(`return`);
            break;
          }
          this.goal = this.#i(t, 1.4, r > 8 ? __recoveredScope.Cr.run : __recoveredScope.Cr.trot);
          (this.#s(this.goal, .6) || r < 1.8) && (this.#r(), this.#e(`attend`));
          break;
        case `check`:
          n.posture = `stand`;
          n.wag = .45;
          n.tailUp = -.1;
          n.tilt = 0;
          this.lookAt = t.head;
          this.goal = this.#i(t, 1, r > 6 ? __recoveredScope.Cr.run : __recoveredScope.Cr.trot);
          (this.#s(this.goal, .5) || r < 1.3) && (this.goal = null, this.#c(t.pos), n.sniff = .3, n.pant = 1, this.whined || (this.whined = true, this.events.push({
            type: `whine`,
            at: this.pos.clone()
          })), this.checked = (this.checked ?? 0) + e, this.checked > 2.2 && !t.crashed && (this.checked = 0, this.whined = false, n.sniff = 0, this.#e(`attend`)));
      }
    }
    #n() {
      let e = this.body;
      this.next = __recoveredScope.Mr(3, 7);
      let t = Math.random();
      if (this.idleSit = false, t < .3) this.glance = __recoveredScope.Mr(-1.2, 1.2);else if (t < .55) {
        let e = this.home.roam ?? 5,
          t = Math.random() * Math.PI * 2,
          n = __recoveredScope.Mr(Math.min(1.5, e * .5), e),
          r = this.home.x + Math.cos(t) * n,
          i = this.home.z + Math.sin(t) * n;
        this.#d(r, i, .5) && (this.wander = {
          x: r,
          z: i,
          speed: __recoveredScope.Cr.walk,
          stop: .3
        });
      } else t < .68 ? e.play(`shake`) : t < .85 ? (this.idleSit = true, this.next = __recoveredScope.Mr(5, 9)) : (this.glance = 0, e.play(`yawn`));
    }
    #r() {
      this.body.play(`bark`);
      this.events.push({
        type: `bark`,
        at: this.pos.clone()
      });
    }
    canPet(e) {
      return !!this.body && Math.hypot(e.x - this.pos.x, e.z - this.pos.z) < __recoveredScope.Dr && ![`fetch`, `dig`, `chase`, `check`].includes(this.state);
    }
    pet(e) {
      this.body && (this.lastPet = this.time, this.pets++, this.body.wiggle = 0, this.state === `rest` && this.body.play(`shake`), this.pets >= 3 && this.state !== `belly` ? this.#e(`belly`) : this.state !== `belly` && this.#e(`petted`));
    }
    canFetch(e) {
      return !!this.body && !this.ball.busy && Math.hypot(e.x - this.pos.x, e.z - this.pos.z) < 40 && (this.state !== `rest` || this.body.posture !== `sleep`) && this.state !== `belly`;
    }
    throwBall(e, t, n = 0) {
      let r = this.canFetch(e);
      this.ball.aim(e, t, n);
      this.slow = Math.random() < .35;
      r && (this.body.posture = `stand`, this.body.wiggle = 0, this.#e(`fetch`));
    }
    #i(e, t, n) {
      __recoveredScope.D.set(this.pos.x - e.pos.x, 0, this.pos.z - e.pos.z);
      __recoveredScope.D.lengthSq() < 1e-4 && __recoveredScope.D.set(1, 0, 0);
      __recoveredScope.D.normalize();
      let r = Math.hypot(e.vel.x, e.vel.z);
      if (r > .5) {
        __recoveredScope.kr.set(e.vel.x, 0, e.vel.z).normalize();
        let t = Math.sign(__recoveredScope.D.x * __recoveredScope.kr.z - __recoveredScope.D.z * __recoveredScope.kr.x) || 1;
        __recoveredScope.D.set(__recoveredScope.kr.z * t, 0, -__recoveredScope.kr.x * t).addScaledVector(__recoveredScope.kr, -.35).normalize();
      }
      return {
        x: e.pos.x + __recoveredScope.D.x * t,
        z: e.pos.z + __recoveredScope.D.z * t,
        speed: n,
        stop: .3,
        lead: r > .5 ? e.vel : null
      };
    }
    #a(e, t, n) {
      return {
        x: e.pos.x + e.facing.x * t,
        z: e.pos.z + e.facing.z * t,
        speed: n,
        stop: .15,
        face: Math.atan2(-e.facing.x, -e.facing.z)
      };
    }
    #o(e, t) {
      return __recoveredScope.D.set(this.pos.x - e.pos.x, 0, this.pos.z - e.pos.z).normalize(), {
        x: e.pos.x + __recoveredScope.D.x * t,
        z: e.pos.z + __recoveredScope.D.z * t,
        speed: __recoveredScope.Cr.walk,
        stop: .1
      };
    }
    #s(e, t) {
      return Math.hypot(e.x - this.pos.x, e.z - this.pos.z) < t;
    }
    #c(e) {
      this.faceYaw = Math.atan2(e.x - this.pos.x, e.z - this.pos.z);
    }
    #l(e) {
      let t = this.goal,
        {
          inside: n,
          door: r,
          via: i
        } = this.home;
      if (n && r && i && t) {
        let e = n(t.x, t.z);
        for (this.doorway && this.doorway.at(-1) === r !== e && (this.doorway = null), !this.doorway && n(this.pos.x, this.pos.z) !== e && (this.doorway = e ? [i, r] : [r, i]); this.doorway?.length && this.#s(this.doorway[0], .5);) this.doorway.shift();
        this.doorway?.length ? t = {
          ...t,
          x: this.doorway[0].x,
          z: this.doorway[0].z,
          stop: .3,
          lead: null,
          speed: Math.min(t.speed, __recoveredScope.Cr.walk)
        } : this.doorway = null;
      }
      let a = 0,
        o = this.yaw;
      if (t) {
        let e = t.x,
          n = t.z;
        t.lead && (e += t.lead.x * .4, n += t.lead.z * .4);
        let r = e - this.pos.x,
          i = n - this.pos.z,
          s = Math.hypot(r, i);
        s > t.stop ? (o = Math.atan2(r, i), a = Math.min(t.speed, Math.sqrt(10 * Math.max(0, s - t.stop)) + (t.lead ? Math.hypot(t.lead.x, t.lead.z) : 0)), o = this.#u(o, Math.max(1.2, this.speed * .6))) : t.face === void 0 ? this.faceYaw !== void 0 && (o = this.faceYaw) : o = t.face;
      } else this.faceYaw !== void 0 && (o = this.faceYaw);
      this.faceYaw = void 0;
      let s = __recoveredScope.Pr(this.yaw, o),
        c = this.speed < 1 ? 3.2 : __recoveredScope.jr(9 / Math.max(1, this.speed), 1.4, 3.2),
        l = __recoveredScope.jr(s * 5, -c, c) * e;
      this.yaw += l;
      this.turnRate += (l / Math.max(e, 1e-4) - this.turnRate) * (1 - Math.exp(-e * 10));
      Math.abs(s) > 1.4 && (a = Math.min(a, .6));
      let u = a > this.speed ? a > __recoveredScope.Cr.run ? 8 : 5.5 : 9;
      if (this.speed += __recoveredScope.jr(a - this.speed, -u * e, u * e), this.speed > .01) {
        let t = this.pos.x + Math.sin(this.yaw) * this.speed * e,
          n = this.pos.z + Math.cos(this.yaw) * this.speed * e;
        this.#d(t, n, .35) ? (this.pos.x = t, this.pos.z = n) : this.speed *= .5;
      }
      this.pos.y = this.hf.heightAt(this.pos.x, this.pos.z);
    }
    #u(e, t) {
      for (let n of [0, .35, -.35, .7, -.7, 1.1, -1.1, 1.6, -1.6]) {
        let r = e + n;
        if (this.#d(this.pos.x + Math.sin(r) * t, this.pos.z + Math.cos(r) * t, .5)) return r;
      }
      return e;
    }
    #d(e, t, n) {
      let r = this.hf;
      return !r.inside(e, t, 40) || r.holeAt(e, t) || this.forest.hit(e, t, n) ? false : this.obstacles.every(r => __recoveredScope.Rr(r, e, t) > n);
    }
    #f() {
      this.root.position.copy(this.pos);
      this.root.rotation.set(0, this.yaw, 0);
    }
    #p(e) {
      let t = this.body,
        n = this.lookAt;
      if (n) {
        this.root.updateMatrixWorld(true);
        let e = this.rig.scene.localToWorld(this.rig.at(`head`, __recoveredScope.kr));
        __recoveredScope.D.subVectors(n, e);
        __recoveredScope.D.applyAxisAngle(__recoveredScope.Ar.set(0, 1, 0), -this.yaw);
        let r = __recoveredScope.jr(Math.atan2(__recoveredScope.D.x, __recoveredScope.D.z), -1.4, 1.4),
          i = __recoveredScope.jr(Math.atan2(__recoveredScope.D.y, Math.hypot(__recoveredScope.D.x, __recoveredScope.D.z)), -.9, .9);
        t.lookAt.set(Math.sin(r) * Math.cos(i), Math.sin(i), Math.cos(r) * Math.cos(i));
        t.lookRate = 7;
      } else {
        let e = __recoveredScope.jr(this.turnRate * .25, -.6, .6) + (this.speed < .3 ? this.glance : 0);
        t.lookAt.set(Math.sin(e), -.12, Math.cos(e)).normalize();
        t.lookRate = 3;
        this.speed > .3 && (this.glance *= .95);
      }
    }
    #m(e) {
      let t = this.body;
      if (t.playing(`shake`)) {
        let t = Math.floor(e * 70 + Math.random());
        __recoveredScope.D.set(this.pos.x, this.pos.y + .5, this.pos.z);
        __recoveredScope.kr.set(0, .6, 0);
        t > 0 && this.spray.emit(__recoveredScope.D, __recoveredScope.kr, t, 2.6);
      }
      if (t.eased.dig > .5) {
        let t = Math.floor(e * 45 + Math.random());
        __recoveredScope.D.set(this.pos.x + Math.sin(this.yaw) * .4, this.pos.y, this.pos.z + Math.cos(this.yaw) * .4);
        __recoveredScope.kr.set(-Math.sin(this.yaw) * 3, 1.6, -Math.cos(this.yaw) * 3);
        t > 0 && this.spray.emit(__recoveredScope.D, __recoveredScope.kr, t, 1.2);
      }
      if (this.speed > 5) {
        let t = Math.floor(e * this.speed * 1.5 + Math.random() * .6);
        __recoveredScope.D.set(this.pos.x - Math.sin(this.yaw) * .5, this.pos.y, this.pos.z - Math.cos(this.yaw) * .5);
        __recoveredScope.kr.set(-Math.sin(this.yaw) * 1.5, .5, -Math.cos(this.yaw) * 1.5);
        t > 0 && this.spray.emit(__recoveredScope.D, __recoveredScope.kr, t, .8);
      }
    }
    headTop(e = new __recoveredScope.Vector3()) {
      return this.rig ? (this.root.updateMatrixWorld(true), this.rig.scene.localToWorld(this.rig.at(`head`, e)).add(__recoveredScope.D.set(0, .12, 0))) : e.copy(this.pos).setY(this.pos.y + .7);
    }
    get footprint() {
      return {
        x: this.pos.x,
        z: this.pos.z,
        yaw: this.yaw,
        hw: .25,
        hd: .6
      };
    }
  };
}
/* Recovered binding Lr. Live dependencies: Te, Xe, createToonMaterial, Vector3, kr, Ar, Or, D. */
export function create_Lr(__recoveredScope) {
  return class {
    constructor(e) {
      this.hf = e;
      this.mesh = new __recoveredScope.Te(new __recoveredScope.Xe(.07, 1), __recoveredScope.createToonMaterial({
        color: `#ffffff`
      }, {
        rim: 1,
        hatch: 0
      }));
      this.mesh.castShadow = true;
      this.mesh.visible = false;
      this.pos = new __recoveredScope.Vector3();
      this.vel = new __recoveredScope.Vector3();
      this.landing = new __recoveredScope.Vector3();
      this.last = new __recoveredScope.Vector3();
      this.flying = false;
      this.down = false;
      this.waiting = 0;
      this.left = 0;
      this.from = new __recoveredScope.Vector3();
      this.toss = new __recoveredScope.Vector3();
    }
    get busy() {
      return this.flying || this.waiting > 0;
    }
    aim(e, t, n) {
      this.from.copy(e);
      this.toss.set(t.x, 0, t.z).normalize().multiplyScalar(6.5).setY(8.5);
      this.waiting = Math.max(n, .001);
      this.down = false;
      this.mesh.visible = false;
      this.#e();
    }
    hold(e) {
      this.waiting > 0 && (this.from.copy(e), this.mesh.visible = true);
    }
    #e() {
      let e = __recoveredScope.kr.copy(this.from),
        t = __recoveredScope.Ar.copy(this.toss);
      for (let n = 0; n < 400 && (t.y -= __recoveredScope.Or / 60, e.addScaledVector(t, 1 / 60), !(e.y <= this.hf.heightAt(e.x, e.z))); n++);
      this.landing.copy(e);
    }
    update(e, t, n) {
      if (this.waiting > 0 && (this.waiting -= e) <= 0 && (this.pos.copy(this.from), this.vel.copy(this.toss), this.flying = true, this.mesh.visible = true, this.#e(), n.push({
        type: `swish`,
        at: this.pos.clone()
      })), this.flying) {
        this.vel.y -= __recoveredScope.Or * e;
        this.pos.addScaledVector(this.vel, e);
        let r = this.hf.heightAt(this.pos.x, this.pos.z);
        this.pos.y <= r + .04 && (this.pos.y = r + .04, this.flying = false, this.down = true, this.left = 6, t.emit(this.pos, __recoveredScope.D.set(this.vel.x * .1, .5, this.vel.z * .1), 10, 1.4), n.push({
          type: `thud`,
          at: this.pos.clone()
        }));
        this.last.copy(this.pos);
      } else this.down && (this.left -= e) <= 0 && this.melt();
      this.mesh.position.copy(this.waiting > 0 ? this.from : this.pos);
      this.flying && (this.mesh.rotation.x += e * 6);
    }
    pop(e, t) {
      e.emit(this.pos, __recoveredScope.D.set(0, .5, 0), 22, 2.2);
      t.push({
        type: `pop`,
        at: this.pos.clone()
      });
      this.last.copy(this.pos);
      this.flying = this.down = false;
      this.mesh.visible = false;
    }
    melt() {
      this.down = false;
      this.mesh.visible = false;
    }
  };
}
/* Recovered binding Rr. Live dependencies: . */
export function create_Rr(__recoveredScope) {
  return function Rr(e, t, n) {
    let r = Math.cos(e.yaw),
      i = Math.sin(e.yaw),
      a = t - e.x,
      o = n - e.z;
    return Math.hypot(Math.max(0, Math.abs(a * r - o * i) - e.hw), Math.max(0, Math.abs(a * i + o * r) - e.hd));
  };
}
/* Recovered binding _m. Live dependencies: W, gm, physics, rider. */
export function create__m(__recoveredScope) {
  return function _m() {
    return __recoveredScope.W !== `ride` && __recoveredScope.W !== `intro` ? null : (__recoveredScope.gm.head.copy(__recoveredScope.physics.pos).y += __recoveredScope.physics.crashed > 0 ? .4 : 1.45, __recoveredScope.rider.locomotion === `walk` ? __recoveredScope.physics.forward(__recoveredScope.gm.facing) : __recoveredScope.gm.facing.set(1, 0, 0).applyQuaternion(__recoveredScope.rider.root.quaternion), __recoveredScope.gm.facing.setY(0).normalize(), __recoveredScope.gm.crashed = __recoveredScope.physics.crashed > 0, __recoveredScope.gm);
  };
}
/* Recovered binding bm. Live dependencies: rider, Z, Sm, MathUtils, Qu, Jh, physics, Y, _m, camera, ym, I, xr, L, vm, W, xm. Writes: ym, vm. */
export function create_bm(__recoveredScope) {
  return function bm(e) {
    if (__recoveredScope.rider.throwT !== null && (__recoveredScope.Z.ball.hold(__recoveredScope.rider.hand(__recoveredScope.Sm)), __recoveredScope.rider.locomotion === `walk`)) {
      let t = __recoveredScope.MathUtils.euclideanModulo(__recoveredScope.Qu(__recoveredScope.Jh.x, __recoveredScope.Jh.z) - __recoveredScope.physics.yaw + Math.PI, Math.PI * 2) - Math.PI;
      __recoveredScope.physics.yaw += t * (1 - Math.exp(-e * 12));
    }
    __recoveredScope.Z.update(e, __recoveredScope.Y, __recoveredScope._m(), __recoveredScope.camera);
    let t = e => 1 - __recoveredScope.MathUtils.smoothstep(__recoveredScope.camera.position.distanceTo(e), 4, 60);
    for (let e of __recoveredScope.Z.events.splice(0)) e.type === `hello` ? (__recoveredScope.Y - __recoveredScope.ym > 60 && __recoveredScope.I.toast(`${__recoveredScope.xr.zh} · ${__recoveredScope.xr.en}`, 2e3), __recoveredScope.ym = __recoveredScope.Y) : __recoveredScope.L[e.type]?.(t(e.at));
    __recoveredScope.L.setPant(__recoveredScope.Z.body ? __recoveredScope.Z.body.eased.pant * (1 - __recoveredScope.MathUtils.smoothstep(__recoveredScope.camera.position.distanceTo(__recoveredScope.Z.pos), 2, 14)) : 0);
    let n = __recoveredScope.Z.state === `petted` || __recoveredScope.Z.state === `belly`,
      r = n && __recoveredScope.Z.speed < .3 && __recoveredScope.physics.pos.distanceTo(__recoveredScope.Z.pos) < 1.4;
    n ? r && (__recoveredScope.vm = Math.max(0, __recoveredScope.vm - e)) : __recoveredScope.vm = 0;
    __recoveredScope.rider.reach = __recoveredScope.vm > 0 && r && __recoveredScope.W === `ride` ? __recoveredScope.Z.headTop(__recoveredScope.xm) : null;
    __recoveredScope.rider.reach && (__recoveredScope.rider.reachLeft = false);
  };
}
/* Recovered binding Cm. Live dependencies: Z, _m. Writes: vm. */
export function create_Cm(__recoveredScope) {
  return function Cm() {
    __recoveredScope.Z.pet(__recoveredScope._m());
    __recoveredScope.vm = 2.2;
  };
}
