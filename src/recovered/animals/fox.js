/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Vr. Live dependencies: loadGLTF, zr, Br. Writes: Br. */
export function create_Vr(__recoveredScope) {
  return function Vr() {
    return __recoveredScope.Br ||= __recoveredScope.loadGLTF(__recoveredScope.zr).catch(e => {
      throw __recoveredScope.Br = null, e;
    }), __recoveredScope.Br;
  };
}
/* Recovered binding Gr. Live dependencies: Fn, Re, Hr, Ur, Wr. */
export function create_Gr(__recoveredScope) {
  return class extends __recoveredScope.Fn {
    constructor(e) {
      super(e);
      this.lids = {
        value: new __recoveredScope.Re()
      };
      this.scene.traverse(e => {
        if (!e.isMesh) return;
        let t = e.material,
          n = t.onBeforeCompile,
          r = t.customProgramCacheKey;
        t.onBeforeCompile = (e, t) => {
          n(e, t);
          e.uniforms.uLids = this.lids;
          e.uniforms.uEyeL = {
            value: __recoveredScope.Hr[0]
          };
          e.uniforms.uEyeR = {
            value: __recoveredScope.Hr[1]
          };
          e.uniforms.uEye = {
            value: __recoveredScope.Ur
          };
          e.uniforms.uLid = {
            value: __recoveredScope.Wr
          };
          e.vertexShader = e.vertexShader.replace(`#include <common>`, `#include <common>
varying vec3 vRest;`).replace(`#include <begin_vertex>`, `#include <begin_vertex>
vRest = position;`);
          e.fragmentShader = e.fragmentShader.replace(`#include <common>`, `#include <common>
            varying vec3 vRest;
            uniform vec2 uLids;
            uniform vec3 uEyeL, uEyeR, uEye, uLid;
            // The lid's edge comes down from above the eye to below it as it
            // shuts, curved (lowest in the middle); above the edge is lid,
            // along it a dark line. The lid fades into the fur at its rim.
            vec3 lid(vec3 color, vec3 centre, float shut) {
              vec3 e = (vRest - centre) / uEye;
              float r = dot(e, e);
              if (shut < 0.02 || r > 1.0) return color;
              float edge = mix(1.0, -0.8, shut) + 0.35 * e.x * e.x;
              vec3 lidColor = mix(uLid, color, smoothstep(0.75, 1.0, r));
              if (e.y > edge + 0.12) return lidColor;
              if (e.y > edge - 0.1) return mix(color, uLid * 0.15, smoothstep(1.0, 0.85, r));
              return color;
            }`).replace(`#include <map_fragment>`, `#include <map_fragment>
            diffuseColor.rgb = lid(diffuseColor.rgb, uEyeL, uLids.x);
            diffuseColor.rgb = lid(diffuseColor.rgb, uEyeR, uLids.y);`);
        };
        t.customProgramCacheKey = () => `${r.call(t)}-fox-lids`;
      });
    }
  };
}
/* Recovered binding Yr. Live dependencies: $n, Jr, Kr, qr. */
export function create_Yr(__recoveredScope) {
  return class extends __recoveredScope.$n {
    constructor(e) {
      super(e);
      this.cadence = 1.3;
      this.wag = .05;
      this.alert = 0;
      this.cower = 0;
      this.earsBack = 0;
      this.earTurn = 0;
      this.drowsy = 0;
      this.blinks = true;
      this.lids = [0, 0];
      this.nextBlink = 1.5;
      this.fox = {
        alert: 0,
        cower: 0,
        earsBack: 0,
        earTurn: 0,
        drowsy: 0
      };
    }
    play(e, t = {}) {
      super.play(e, {
        dur: __recoveredScope.Jr[e],
        ...t
      });
    }
    update(e, t) {
      super.update(e, t);
      this.rig.lids?.value.set(this.lids[0], this.lids[1]);
    }
    adjust(e, t) {
      let n = e => 1 - Math.exp(-t / e),
        r = this.fox;
      r.alert += (this.alert - r.alert) * n(.18);
      r.cower += (this.cower - r.cower) * n(.3);
      r.earsBack += (this.earsBack - r.earsBack) * n(.12);
      r.earTurn += (this.earTurn - r.earTurn) * n(.1);
      r.drowsy += (this.drowsy - r.drowsy) * n(.5);
      let i = this.t,
        a = 1 - this.w.sleep - this.w.side - this.w.belly;
      e.roll -= __recoveredScope.Kr(this.turnRate * this.speed * .022, -.35, .35) * this.stride * this.w.stand;
      e.hp.y += .012 * r.alert * this.w.stand;
      e.nod += .14 * r.alert * a;
      let o = r.cower * this.w.stand;
      e.hp.y -= .11 * o;
      e.pitch += .06 * o;
      e.bend.x += .08 * o;
      e.nod -= .45 * o;
      e.lift -= .8 * r.cower * a;
      let s = r.earsBack * .6 + r.cower * .35 - r.alert * .12 + .03 * Math.sin(i * .7),
        c = r.cower * .45 + r.earsBack * .12,
        l = .1 * (1 - r.alert),
        u = [0, 0],
        d = 0;
      for (let e of this.acts) {
        let t = e.t / e.dur;
        if (e.kind === `flickL` || e.kind === `flickR` || e.kind === `flick`) {
          let n = t < .3 ? Math.sin(t / .3 * Math.PI * .5) : Math.cos((t - .3) / .7 * Math.PI * 1.5) * (1 - t) * 1.4;
          e.kind !== `flickR` && (u[0] += n);
          e.kind !== `flickL` && (u[1] += n);
        } else e.kind === `startle` && (d = Math.sin(Math.PI * Math.min(1, t * 1.6)) * (1 - t * .5));
      }
      s += d * .5;
      e.nod += d * .25;
      e.hp.y -= d * .04 * this.w.stand;
      this.P.ears && this.P.ears.forEach((e, t) => {
        let n = t === 0 ? 1 : -1;
        e.back = __recoveredScope.Kr(s + u[t] * .55 + .03 * Math.sin(i * 1.3 + t * 2), -.3, .75);
        e.swivel = l + n * r.earTurn * .7 + u[t] * .35;
        e.flat = __recoveredScope.Kr(c, 0, .6);
      });
      this.blinks && a > .5 && (this.nextBlink -= t, this.nextBlink <= 0 && (this.play(`blink`), this.nextBlink = Math.random() < .18 ? .28 : 2 + Math.random() * 3.5));
      let f = Math.max(r.drowsy * .55, this.w.sleep),
        p = 0;
      for (let e of this.acts) {
        let t = e.t / e.dur,
          n = t < .4 ? __recoveredScope.qr(t, 0, .4) : 1 - __recoveredScope.qr(t, .4, 1);
        e.kind === `blink` ? f = Math.max(f, n) : e.kind === `wink` && (p = Math.max(p, n));
      }
      this.lids[0] = Math.max(f, p);
      this.lids[1] = f;
    }
  };
}
/* Recovered binding ni. Live dependencies: . */
export function create_ni(__recoveredScope) {
  return {
    top: 8.5,
    trot: 3,
    wary: 22,
    safe: 30,
    juke: 5,
    jukeTtc: 2.5,
    jukeFor: .5,
    jukeRest: .9,
    jukeLead: 0,
    jukeMiss: 3,
    waryLead: 0,
    miss: 1 / 0,
    offLine: .8,
    jukeRead: false
  };
}
/* Recovered binding ri. Live dependencies: Re. */
export function create_ri(__recoveredScope) {
  return function ri() {
    return {
      mode: `calm`,
      juke: 0,
      rest: 0,
      cut: new __recoveredScope.Re(),
      jukes: 0,
      side: 1
    };
  };
}
/* Recovered binding ii. Live dependencies: ni, Qr, ti, ei, Re, ai, $r, Xr, Zr. */
export function create_ii(__recoveredScope) {
  return function ii(e, t, n, r, i = null, a = 40, o = __recoveredScope.ni) {
    __recoveredScope.Qr.set(t.pos.x - n.pos.x, t.pos.z - n.pos.z);
    let s = Math.max(__recoveredScope.Qr.length(), .001);
    __recoveredScope.Qr.divideScalar(s);
    __recoveredScope.ti.set(n.vel.x - t.vel.x, n.vel.z - t.vel.z);
    let c = __recoveredScope.ti.dot(__recoveredScope.Qr),
      l = c > .1 ? s / c : 1 / 0,
      u = Math.hypot(n.vel.x, n.vel.z),
      d = __recoveredScope.ti.lengthSq(),
      f = d > 1e-4 ? c * s / d : 0,
      p = Math.hypot(__recoveredScope.Qr.x * s - __recoveredScope.ti.x * f, __recoveredScope.Qr.y * s - __recoveredScope.ti.y * f);
    r.rest = Math.max(0, r.rest - e);
    r.juke = Math.max(0, r.juke - e);
    let m = u > .5 ? __recoveredScope.ei.set(n.vel.x / u, n.vel.z / u) : __recoveredScope.ei.copy(__recoveredScope.Qr).negate(),
      h = new __recoveredScope.Re(m.y, -m.x),
      g = h.dot(__recoveredScope.Qr);
    Math.abs(g) > .35 && (r.side = Math.sign(g));
    let _ = r.side,
      v = s < o.juke && l < o.jukeTtc || l < o.jukeLead && p < o.jukeMiss;
    if (!r.juke && !r.rest && v) {
      let e = _;
      Math.abs(h.dot(__recoveredScope.Qr)) < .25 && n.turn && (e = -Math.sign(n.turn) || e);
      let i = t.vel.x * h.x + t.vel.z * h.y;
      if (o.jukeRead && Math.abs(i) > 1) {
        let t = -g * s / i;
        e = Math.sign(i) * (t > .1 && t < l + .5 ? -1 : 1);
      }
      r.cut.copy(h).multiplyScalar(e).addScaledVector(m, -.35).normalize();
      r.juke = o.jukeFor;
      r.rest = o.jukeFor + o.jukeRest;
      r.jukes++;
    }
    if (r.juke > 0) return r.mode = `juke`, __recoveredScope.ai(r.cut, o.top, r);
    let y = (c > 1.5 || u > 3 && s < o.wary * .6 || r.mode !== `wary` && r.mode !== `calm` && c > 0 && s < 14) && (p < o.miss || s < o.juke),
      b = Math.max(o.wary, c * o.waryLead);
    if (r.mode === `calm` && !(s < b && y)) return __recoveredScope.ai(null, 0, r);
    if (s > o.safe && !y) return r.mode = `calm`, __recoveredScope.ai(null, 0, r);
    if (r.mode = y ? `flee` : `wary`, __recoveredScope.$r.copy(__recoveredScope.Qr).addScaledVector(h, _ * __recoveredScope.Xr(u / 8, 0, 1) * o.offLine), i) {
      let e = i.x - t.pos.x,
        n = i.z - t.pos.z,
        r = Math.hypot(e, n),
        o = __recoveredScope.Zr(r, a * .6, a * 1.2) * 1.6;
      r > .001 && (__recoveredScope.$r.x += e / r * o, __recoveredScope.$r.y += n / r * o);
    }
    return __recoveredScope.$r.normalize(), __recoveredScope.ai(__recoveredScope.$r, y ? __recoveredScope.Xr(o.trot + (b - s) * .6 + c * .4, o.trot, o.top) : o.trot, r);
  };
}
/* Recovered binding ai. Live dependencies: . */
export function create_ai(__recoveredScope) {
  return function ai(e, t, n) {
    return {
      heading: e ? Math.atan2(e.x, e.y) : null,
      speed: t,
      mode: n.mode
    };
  };
}
/* Recovered binding hi. Live dependencies: mi. */
export function create_hi(__recoveredScope) {
  return e => __recoveredScope.mi(e + Math.PI, Math.PI * 2) - Math.PI;
}
/* Recovered binding gi. Live dependencies: . */
export function create_gi(__recoveredScope) {
  return (e, t) => Math.atan2(t.x - e.x, t.z - e.z);
}
/* Recovered binding _i. Live dependencies: . */
export function create__i(__recoveredScope) {
  return e => e[Math.floor(Math.random() * e.length)];
}
/* Recovered binding xi. Live dependencies: ci, liftEndpointPositions. */
export function create_xi(__recoveredScope) {
  return function xi(e) {
    let t = e.findIndex(e => e.name === __recoveredScope.ci.lift);
    if (t < 0) return null;
    let [n, r] = __recoveredScope.liftEndpointPositions(e)[t][0];
    return {
      x: n + __recoveredScope.ci.off[0],
      z: r + __recoveredScope.ci.off[1],
      yaw: Math.atan2(-__recoveredScope.ci.off[0], -__recoveredScope.ci.off[1])
    };
  };
}
/* Recovered binding Si. Live dependencies: Oe, ar, Ci, O. */
export function create_Si(__recoveredScope) {
  return class {
    constructor({
      hf: e,
      forest: t,
      obstacles: n = [],
      den: r,
      count: i = 3,
      prints: a = null
    }) {
      this.prints = a;
      this.root = new __recoveredScope.Oe();
      this.root.name = `Foxes`;
      this.events = [];
      this.spray = new __recoveredScope.ar(120);
      this.spray.points.material.size = .12;
      let o = [[0, 0], [2.6, -1.7], [-2.2, 2.4]],
        s = [.25, .55, .85].sort(() => Math.random() - .5),
        c = Math.cos(r.yaw),
        l = Math.sin(r.yaw);
      this.foxes = o.slice(0, i).map(([i, a], o) => new __recoveredScope.Ci({
        hf: e,
        forest: t,
        obstacles: n,
        pack: this,
        nerve: s[o],
        slot: [.5, -.5, -1][o],
        home: {
          x: r.x + i * c + a * l,
          z: r.z - i * l + a * c,
          yaw: r.yaw + __recoveredScope.O(-.5, .5)
        }
      }));
      for (let e of this.foxes) this.root.add(e.root);
      this.ready = Promise.all(this.foxes.map(e => e.ready)).then(() => this);
    }
    update(e, t, n, r) {
      for (let i of this.foxes) i.update(e, t, n, r);
      this.spray.update(e);
    }
    saw(e) {
      this.seen || (this.seen = true, this.events.push({
        type: `found`,
        at: e.pos.clone()
      }));
    }
  };
}
/* Recovered binding Ci. Live dependencies: _r, fr, O, Oe, Vector3, Vr, Gr, Yr, si, ri, ii, di, fi, li, ui, hi, gi, _i, wi, Ti, yi, vi, bi, pi. */
export function create_Ci(__recoveredScope) {
  return class {
    constructor({
      hf: e,
      forest: t,
      obstacles: n,
      home: r,
      nerve: i,
      pack: a,
      slot: o
    }) {
      this.hf = e;
      this.forest = t;
      this.obstacles = n;
      this.home = r;
      this.pack = a;
      this.tracks = new __recoveredScope._r(a.prints, __recoveredScope.fr.paw, 4, {
        length: .11,
        width: .82,
        press: .7,
        sound: {
          level: .16,
          rate: 1.95,
          range: 22
        }
      });
      this.nerve = i;
      this.ring = 8 - i * 3;
      this.tooNear = 4.5 - i * .9;
      this.close = 1.6 + i * .6;
      this.slot = o;
      this.still = 0;
      this.notice = __recoveredScope.O(22, 25);
      this.react = __recoveredScope.O(.1, .55) + (1 - i) * .2;
      this.pace = __recoveredScope.O(.92, 1.08);
      this.restAfter = __recoveredScope.O(25, 45);
      this.root = new __recoveredScope.Oe();
      this.root.name = `Fox`;
      this.pos = new __recoveredScope.Vector3(r.x, e.heightAt(r.x, r.z), r.z);
      this.yaw = r.yaw;
      this.motor = {
        target: null,
        speed: 0,
        heading: null,
        face: null,
        v: 0,
        yawRate: 0,
        turnMax: 5,
        accel: 6
      };
      this.vel = new __recoveredScope.Vector3();
      this.lookAt = null;
      this.mode = `home`;
      this.script = null;
      this.ready = __recoveredScope.Vr().then(e => (this.rig = new __recoveredScope.Gr(e), this.body = new __recoveredScope.Yr(this.rig), this.body.scale = __recoveredScope.si, this.rig.scene.scale.setScalar(__recoveredScope.si), this.root.add(this.rig.scene), this.#T(), this.#e(`home`, this.#n()), this));
    }
    update(e, t, n, r) {
      if (!this.body) return;
      this.time = t;
      this.#t(e, n);
      this.#S(e);
      this.#T();
      let i = r && r.position.distanceTo(this.pos) > 250;
      if (this.root.visible = !i, i) return;
      this.#E();
      this.body.speed = this.motor.v / __recoveredScope.si;
      this.body.turnRate = this.motor.yawRate;
      let a = Math.cos(this.yaw),
        o = Math.sin(this.yaw),
        s = this.pos.y;
      this.body.update(e, (e, t) => (this.hf.heightAt(this.pos.x + (e * a + t * o) * __recoveredScope.si, this.pos.z + (-e * o + t * a) * __recoveredScope.si) - s) / __recoveredScope.si);
      this.#D(e);
      this.body.footfalls(this.tracks, this.pos, this.yaw);
    }
    #e(e, t) {
      this.mode = e;
      this.script = t;
    }
    #t(e, t) {
      this.who = t;
      let n = t ? Math.hypot(t.pos.x - this.pos.x, t.pos.z - this.pos.z) : 1 / 0,
        r = t ? Math.hypot(t.vel.x, t.vel.z) : 0,
        i = this.body.posture === `sleep`;
      if (this.chase ??= __recoveredScope.ri(), t && r > 4 && this.mode !== `flee` && !(i && n > 14)) {
        let n = __recoveredScope.ii(e, this.#b(), this.#x(t), this.chase, this.home, 30, __recoveredScope.di);
        (n.mode === `flee` || n.mode === `juke`) && this.#e(`flee`, this.#c());
      } else this.mode !== `flee` && (this.chase = __recoveredScope.ri());
      if (this.still = r < .4 ? this.still + e : 0, this.mode !== `flee`) {
        let e = t ? ((this.pos.x - t.pos.x) * t.vel.x + (this.pos.z - t.pos.z) * t.vel.z) / Math.max(n, .1) : 0,
          r = this.tooNear + __recoveredScope.fi(e, 0, 3) * .8;
        t && e > .4 && n < r && (this.mode !== `shy` || this.settled) ? this.#e(`shy`, this.#s()) : (!t || n > __recoveredScope.li) && ![`home`, `rest`, `return`, `safe`].includes(this.mode) ? this.#e(`return`, this.#l()) : t && [`home`, `rest`, `return`].includes(this.mode) && n < (i ? 12 : this.notice) && this.#e(`spot`, this.#i(i));
      }
      t && n < __recoveredScope.ui && !i && this.mode !== `flee` && Math.abs(__recoveredScope.hi(__recoveredScope.gi(this.pos, t.pos) - this.yaw)) < .6 && this.pack.saw(this);
      (!t || n > 60) && (this.pack.seen = false);
      this.script?.next(e)?.done && this.#e(`home`, this.#n());
    }
    *#n() {
      let e = this.body;
      this.#u();
      this.lookAt = null;
      let t = 0;
      for (;;) {
        let n = this.time;
        yield* this.#d(__recoveredScope.O(1.5, 4) / this.pace);
        let r = Math.random();
        if (r < .3) {
          let t = Math.random() * Math.PI * 2,
            n = __recoveredScope.O(1, 4),
            r = {
              x: this.home.x + Math.sin(t) * n,
              z: this.home.z + Math.cos(t) * n
            };
          this.#w(r.x, r.z, .4) && (e.sniff = .8, yield* this.#f(r, .7 * this.pace, .3), yield* this.#d(__recoveredScope.O(.8, 2)), e.sniff = 0);
        } else if (r < .5) {
          let t = __recoveredScope._i([-1, 1]);
          e.earTurn = t;
          yield* this.#d(.5);
          this.lookAt = this.root.localToWorld(new __recoveredScope.Vector3(3 * t, .3, __recoveredScope.O(0, 2)));
          e.alert = .6;
          yield* this.#d(__recoveredScope.O(1.2, 2));
          e.earTurn = 0;
          e.alert = 0;
          this.lookAt = null;
        } else r < .62 ? e.play(__recoveredScope._i([`flickL`, `flickR`, `flick`])) : r < .72 ? e.play(`shake`) : r < .9 ? (e.posture = `sit`, yield* this.#d(__recoveredScope.O(2, 4)), e.play(__recoveredScope._i([`flickL`, `flickR`])), yield* this.#d(__recoveredScope.O(2, 4)), e.posture = `stand`) : (e.tilt = __recoveredScope._i([-.3, .3]), yield* this.#d(1.2), e.tilt = 0);
        t += this.time - n;
        Math.hypot(this.pos.x - this.home.x, this.pos.z - this.home.z) > 6 && (yield* this.#f(this.home, 1, .5));
        t > this.restAfter && (this.mode = `rest`, yield* this.#r(), this.mode = `home`, t = 0);
      }
    }
    *#r() {
      let e = this.body;
      e.posture = `sit`;
      yield* this.#d(__recoveredScope.O(4, 7));
      e.drowsy = 1;
      e.earsBack = .4;
      yield* this.#d(__recoveredScope.O(3, 5));
      e.posture = `sleep`;
      let t = __recoveredScope.O(40, 80);
      for (; t > 0;) {
        let n = __recoveredScope.O(4, 9);
        yield* this.#d(n);
        t -= n;
        e.play(__recoveredScope._i([`flickL`, `flickR`]));
      }
      e.drowsy = 0;
      e.earsBack = 0;
      e.posture = `stand`;
      yield* this.#d(.8);
      e.play(`shake`);
      yield* this.#d(1.6);
    }
    *#i(e) {
      let t = this.body,
        n = () => this.who;
      this.#u();
      e && (t.posture = `sit`, this.lookAt = n().head, yield* this.#d(1 + this.react), t.posture = `stand`, t.play(`shake`), yield* this.#d(1.2));
      this.#h();
      t.alert = 1;
      t.tailUp = 0;
      yield* this.#d(this.react);
      this.lookAt = n().head;
      yield* this.#p(() => n().pos);
      yield* this.#d(__recoveredScope.O(.8, 1.4));
      Math.random() < .6 && (t.tilt = __recoveredScope._i([-.3, .3]), yield* this.#d(.9), t.tilt = 0);
      yield* this.#a(this.ring, true);
    }
    *#a(e, t) {
      let n = this.body,
        r = () => this.who;
      this.mode = `watch`;
      this.settled = true;
      let i = __recoveredScope.O(4, 9);
      for (;;) {
        let a = this.#v();
        if (Math.hypot(r().vel.x, r().vel.z) > 2.5) {
          n.posture = `stand`;
          n.alert = .6;
          this.lookAt = r().head;
          Math.abs(__recoveredScope.hi(__recoveredScope.gi(this.pos, r().pos) - this.yaw)) > 1 && (yield* this.#p(() => r().pos));
          yield;
          continue;
        }
        let o = this.still > .8;
        if (o && this.#y(this.#g()) > .6) {
          n.posture = `stand`;
          n.alert = .8;
          this.lookAt = r().head;
          let e = () => this.still <= .8;
          if (a > 4 && (yield* this.#f(() => this.#g(), (a > 14 ? 3.4 : 2.4) * this.pace, 3.2, () => e() || this.#v() < 4)), n.cower = .25, e() || (yield* this.#f(() => this.#g(), .7 * this.pace, .35, e)), n.cower = 0, e()) continue;
          yield* this.#p(() => r().pos);
          n.alert = .5;
          n.posture = Math.random() < .6 ? `sit` : `stand`;
        } else !o && (a > e + 3 || a < e - 2) && (n.posture = `stand`, n.alert = .4, this.lookAt = a < 12 ? r().head : null, yield* this.#f(() => this.#_(e), (a > 14 ? 3.4 : a > e ? 2.4 : 1.2) * this.pace, .5, () => Math.abs(this.#v() - e) < .8 || this.still > .8), this.lookAt = r().head, yield* this.#p(() => r().pos), yield* this.#d(.3), t && Math.random() < .55 && (t = false, yield* this.#o()), n.alert = .2, n.posture = `sit`);
        if (this.lookAt = r().head, Math.abs(__recoveredScope.hi(__recoveredScope.gi(this.pos, r().pos) - this.yaw)) > .7 && (n.posture = `stand`, yield* this.#p(() => r().pos), n.posture = `sit`), i -= yield, i <= 0) {
          i = __recoveredScope.O(3, 8) / this.pace;
          let e = Math.random();
          e < .35 ? n.play(__recoveredScope._i([`flickL`, `flickR`, `flick`])) : e < .6 ? (n.tilt = __recoveredScope._i([-.25, .3]), yield* this.#d(1.3), n.tilt = 0) : e < .72 ? (n.posture = `stand`, yield* this.#o(), n.posture = `sit`) : e < .82 && n.play(`wink`);
        }
      }
    }
    *#o() {
      let e = this.body;
      e.posture = `bow`;
      e.wag = .35;
      e.earsBack = 0;
      e.alert = .6;
      yield* this.#d(2);
      e.posture = `stand`;
      e.wag = .05;
      yield* this.#d(.6);
      e.alert = 0;
      e.play(`shake`);
      yield* this.#d(1.8);
      e.play(`flick`);
    }
    *#s() {
      let e = this.body,
        t = () => this.who;
      if (this.settled = false, e.posture = `stand`, e.sniff = e.tilt = 0, e.play(`startle`), this.lookAt = t().head, e.earsBack = .5, e.alert = 0, yield* this.#d(.35), e.tailUp = -.3, this.lookAt = null, yield* this.#f(this.#_(9 + this.nerve * 2), 3.2 * this.pace, .4), this.settled = true, yield* this.#p(() => t().pos), this.lookAt = t().head, e.cower = .35, e.earsBack = .5, e.wag = .3, yield* this.#d(__recoveredScope.O(1, 1.8)), e.play(__recoveredScope._i([`flickL`, `flickR`])), yield* this.#d(.8), e.cower = .6, yield* this.#f(() => this.#_(7.2), .55, .15, () => this.#v() < 7.3), yield* this.#p(() => t().pos), e.cower = .4, e.earsBack = 0, e.alert = .5, yield* this.#d(1.5), e.play(`blink`), yield* this.#d(.6), Math.random() < .3 + this.nerve * .5) {
        e.play(`startle`);
        e.alert = 0;
        e.cower = .8;
        e.earsBack = .8;
        yield* this.#d(.25);
        yield* this.#m(1.1, .7);
        yield* this.#d(.8);
        e.cower = .45;
        e.earsBack = .4;
        let n = __recoveredScope.gi(t().pos, this.pos) + __recoveredScope._i([-.45, .45]);
        yield* this.#f({
          x: t().pos.x + Math.sin(n) * 7.5,
          z: t().pos.z + Math.cos(n) * 7.5
        }, .9, .2);
        yield* this.#p(() => t().pos);
      }
      yield* this.#f(() => this.#_(6), .5, .15, () => this.#v() < 6.1);
      yield* this.#p(() => t().pos);
      e.cower = 0;
      e.earsBack = .15;
      e.wag = .1;
      e.posture = `sit`;
      yield* this.#d(1.8);
      e.play(`flick`);
      yield* this.#a(Math.max(this.ring, 6), false);
    }
    *#c() {
      let e = this.body,
        t = this.motor;
      this.settled = false;
      this.#u();
      e.alert = 1;
      this.who && (this.lookAt = this.who.head);
      yield* this.#d(this.react * .25);
      t.turnMax = 8;
      t.accel = 11;
      let n = 0,
        r = 0;
      for (; n < .8 && r < 30;) {
        let i = yield;
        r += i;
        let a = this.who,
          o = a ? __recoveredScope.ii(i, this.#b(), this.#x(a), this.chase, this.home, 30, __recoveredScope.di) : {
            mode: `calm`,
            heading: null,
            speed: 0
          };
        n = o.mode === `calm` ? n + i : 0;
        this.lookAt = null;
        e.alert = 0;
        e.earsBack = o.mode === `wary` ? .5 : .9;
        e.tailUp = .2;
        t.target = t.face = null;
        t.heading = o.heading ?? this.yaw;
        t.speed = o.speed * (o.mode === `calm` ? 0 : this.pace);
      }
      t.turnMax = 5;
      t.accel = 6;
      this.chase = __recoveredScope.ri();
      this.mode = `safe`;
      this.#h();
      yield* this.#d(.8);
      this.who && (yield* this.#p(() => this.who.pos), this.lookAt = this.who.head);
      e.earsBack = .5;
      yield* this.#d(1.4);
      e.earsBack = .2;
      e.play(`shake`);
      yield* this.#d(1.8);
      e.posture = `sit`;
      yield* this.#d(__recoveredScope.O(1.5, 2.5));
      e.posture = `stand`;
      this.mode = `return`;
      yield* this.#l();
    }
    *#l() {
      this.#u();
      this.lookAt = null;
      let e = () => this.#y(this.home) < 6;
      e() || (yield* this.#f(this.home, 2.4 * this.pace, .5, e));
      yield* this.#f(this.home, 1 * this.pace, .5);
      yield* this.#p({
        x: this.home.x + Math.sin(this.home.yaw),
        z: this.home.z + Math.cos(this.home.yaw)
      });
    }
    #u() {
      Object.assign(this.body, {
        posture: `stand`,
        alert: 0,
        cower: 0,
        earsBack: 0,
        earTurn: 0,
        drowsy: 0,
        tilt: 0,
        wag: .05,
        tailUp: 0,
        sniff: 0
      });
    }
    *#d(e) {
      for (; e > 0;) e -= yield;
    }
    *#f(e, t, n = .15, r = () => false) {
      let i = this.motor;
      i.heading = i.face = null;
      i.target = e;
      i.speed = t;
      let a = 0;
      for (; !r() && this.#y(i.target) > n && a < 20;) a += yield;
      this.#h();
    }
    *#p(e) {
      let t = this.motor;
      t.target = t.heading = null;
      t.speed = 0;
      t.face = e;
      let n = 0;
      for (; Math.abs(__recoveredScope.hi(__recoveredScope.gi(this.pos, __recoveredScope.wi(e)) - this.yaw)) > .08 && n < 3;) n += yield;
      t.face = null;
    }
    *#m(e, t) {
      let n = this.motor,
        r = this.pos.clone();
      n.target = n.face = null;
      n.heading = this.yaw;
      n.speed = -t;
      let i = 0;
      for (; Math.hypot(this.pos.x - r.x, this.pos.z - r.z) < e && i < 4;) i += yield;
      n.speed = 0;
    }
    #h() {
      let e = this.motor;
      e.target = e.face = null;
      e.heading = this.yaw;
      e.speed = 0;
    }
    #g() {
      let e = this.who;
      if (!e) return this.home;
      let t = Math.atan2(e.facing.x, e.facing.z) + this.slot;
      return {
        x: e.pos.x + Math.sin(t) * this.close,
        z: e.pos.z + Math.cos(t) * this.close
      };
    }
    #_(e) {
      let t = this.who?.pos ?? this.home,
        n = __recoveredScope.gi(t, this.pos);
      return {
        x: t.x + Math.sin(n) * e,
        z: t.z + Math.cos(n) * e
      };
    }
    #v() {
      return this.who ? Math.hypot(this.who.pos.x - this.pos.x, this.who.pos.z - this.pos.z) : 1 / 0;
    }
    #y(e) {
      let t = __recoveredScope.wi(e);
      return Math.hypot(t.x - this.pos.x, t.z - this.pos.z);
    }
    #b() {
      return {
        pos: this.pos,
        vel: this.vel
      };
    }
    #x(e) {
      return {
        pos: e.pos,
        vel: e.vel,
        turn: e.turn ?? 0
      };
    }
    #S(e) {
      let t = this.motor,
        n = 0,
        r = this.yaw;
      if (t.target) {
        let e = __recoveredScope.wi(t.target),
          i = this.#y(e);
        r = __recoveredScope.gi(this.pos, e);
        let a = this.who;
        if (a) {
          let e = Math.hypot(a.pos.x - this.pos.x, a.pos.z - this.pos.z),
            t = __recoveredScope.gi(this.pos, a.pos),
            n = __recoveredScope.hi(r - t),
            o = e > 1.4 ? Math.asin(1.4 / e) : Math.PI / 2;
          e < i && Math.abs(n) < o && (r = t + (Math.sign(n) || 1) * o);
        }
        let o = Math.abs(__recoveredScope.hi(r - this.yaw));
        n = Math.min(t.speed * __recoveredScope.fi(1.4 - o, .15, 1), Math.sqrt(14 * Math.max(0, i - .05)));
      } else t.heading === null ? t.face && (r = __recoveredScope.gi(this.pos, __recoveredScope.wi(t.face))) : (r = t.heading, n = t.speed * __recoveredScope.fi(1.25 - Math.abs(__recoveredScope.hi(r - this.yaw)) * .6, .5, 1));
      Math.abs(n) > .05 && (r = this.#C(r, Math.max(1, Math.abs(t.v) * .5) * Math.sign(n)));
      let i = __recoveredScope.fi(__recoveredScope.hi(r - this.yaw) * 7, -t.turnMax, t.turnMax);
      t.yawRate += (i - t.yawRate) * (1 - Math.exp(-e * 14));
      this.yaw = __recoveredScope.hi(this.yaw + t.yawRate * e);
      t.v += __recoveredScope.fi(n - t.v, -9 * e, t.accel * e);
      let a = Math.sin(this.yaw),
        o = Math.cos(this.yaw),
        s = (this.hf.heightAt(this.pos.x + a, this.pos.z + o) - this.hf.heightAt(this.pos.x - a, this.pos.z - o)) / 2,
        c = t.v * __recoveredScope.fi(1 - s * Math.sign(t.v) * 1.2, .55, 1.15),
        l = this.pos.x + a * c * e,
        u = this.pos.z + o * c * e,
        d = (t, n) => {
          let r = l - t.x,
            i = u - t.z,
            a = Math.hypot(r, i);
          a < n && a > .001 && (l += r / a * (n - a) * Math.min(1, e * 6), u += i / a * (n - a) * Math.min(1, e * 6));
        };
      for (let e of this.pack.foxes) e !== this && d(e.pos, .9);
      this.who && d(this.who.pos, 1);
      this.#w(l, u, .3) ? (this.pos.x = l, this.pos.z = u) : t.v *= .5;
      this.pos.y = this.hf.heightAt(this.pos.x, this.pos.z);
      this.vel.set(a * c, 0, o * c);
    }
    #C(e, t) {
      for (let n of [0, .35, -.35, .7, -.7, 1.1, -1.1, 1.6, -1.6]) {
        let r = e + n;
        if (this.#w(this.pos.x + Math.sin(r) * t, this.pos.z + Math.cos(r) * t, .4)) return r;
      }
      return e;
    }
    #w(e, t, n) {
      let r = this.hf;
      return !r.inside(e, t, 40) || r.holeAt(e, t) || this.forest.hit(e, t, n) ? false : this.obstacles.every(r => __recoveredScope.Ti(r, e, t) > n);
    }
    #T() {
      this.root.position.copy(this.pos);
      this.root.rotation.set(0, this.yaw, 0);
    }
    #E() {
      let e = this.body;
      if (!this.lookAt) {
        let t = __recoveredScope.fi(this.motor.yawRate * .15, -.5, .5);
        e.lookAt.set(Math.sin(t), -.05, Math.cos(t)).normalize();
        return;
      }
      this.root.updateMatrixWorld(true);
      let t = this.root.localToWorld(__recoveredScope.yi.set(0, .55 * __recoveredScope.si, .4 * __recoveredScope.si)),
        n = __recoveredScope.vi.copy(this.lookAt).sub(t).applyAxisAngle(__recoveredScope.bi, -this.yaw).normalize(),
        r = Math.atan2(n.x, n.z),
        i = 1 - __recoveredScope.pi(Math.abs(r), 1.3, 2.1),
        a = __recoveredScope.fi(r, -1.3, 1.3) * i,
        o = Math.asin(__recoveredScope.fi(n.y, -1, 1)) * i;
      e.lookAt.set(Math.sin(a) * Math.cos(o), Math.sin(o), Math.cos(a) * Math.cos(o));
    }
    #D(e) {
      let t = this.pack.spray;
      if (this.body.playing(`shake`)) {
        let n = Math.floor(e * 40 + Math.random());
        __recoveredScope.vi.set(this.pos.x, this.pos.y + .32, this.pos.z);
        n > 0 && t.emit(__recoveredScope.vi, __recoveredScope.yi.set(0, .4, 0), n, 1.8);
      }
      if (this.motor.v > 5) {
        let n = Math.floor(e * this.motor.v * 1.2 + Math.random() * .5),
          r = Math.sin(this.yaw),
          i = Math.cos(this.yaw);
        __recoveredScope.vi.set(this.pos.x - r * .35, this.pos.y, this.pos.z - i * .35);
        n > 0 && t.emit(__recoveredScope.vi, __recoveredScope.yi.set(-r * 1.2, .4, -i * 1.2), n, .6);
      }
    }
  };
}
/* Recovered binding wi. Live dependencies: . */
export function create_wi(__recoveredScope) {
  return e => typeof e == `function` ? e() : e;
}
/* Recovered binding Ti. Live dependencies: . */
export function create_Ti(__recoveredScope) {
  return function Ti(e, t, n) {
    let r = Math.cos(e.yaw),
      i = Math.sin(e.yaw),
      a = t - e.x,
      o = n - e.z;
    return Math.hypot(Math.max(0, Math.abs(a * r - o * i) - e.hw), Math.max(0, Math.abs(a * i + o * r) - e.hd));
  };
}
/* Recovered binding qi. Live dependencies: Vector3, Di, Oi, Fi, zi, Ii, Li, Ri, ki, Pi, Bi, Ni, Ji, Vi, Hi, Mi, Ki, Ai, ji. */
export function create_qi(__recoveredScope) {
  return class {
    constructor(e) {
      this.len = e;
      let t = () => Array.from({
        length: e.length + 1
      }, () => new __recoveredScope.Vector3());
      this.at = t();
      this.v = t();
      this.was = new __recoveredScope.Vector3();
      this.t = 0;
      this.live = false;
    }
    follow(e, t, {
      push: n,
      spin: r,
      flutter: i
    }, a) {
      let {
          at: o,
          v: s,
          len: c
        } = this,
        l = c.length;
      if (this.live ||= (o.forEach((t, n) => t.copy(e[n])), s.forEach(e => e.set(0, 0, 0)), this.was.copy(e[0]), true), !(a > 0)) return o;
      let u = Math.ceil(a * 120),
        d = a / u;
      s[0].subVectors(e[0], this.was).divideScalar(a);
      for (let a = 1; a <= u; a++) {
        this.t += d;
        o[0].lerpVectors(this.was, e[0], a / u);
        for (let a = 1; a <= l; a++) {
          let u = a - 1,
            f = __recoveredScope.Di * __recoveredScope.Oi[u],
            p = __recoveredScope.Fi.subVectors(e[a], e[a - 1]).normalize();
          a > 1 && p.applyQuaternion(__recoveredScope.zi.setFromUnitVectors(__recoveredScope.Ii.subVectors(e[a - 1], e[a - 2]).normalize(), __recoveredScope.Li.subVectors(o[a - 1], o[a - 2]).normalize()));
          let m = __recoveredScope.Ri.copy(o[a - 1]).addScaledVector(p, c[u]).sub(o[a]).multiplyScalar(f * f).addScaledVector(__recoveredScope.Ii.subVectors(s[a], s[a - 1]), -2 * __recoveredScope.ki[u] * f).add(n);
          if (m.x -= r * o[a].z, m.z += r * o[a].x, i) {
            let e = i * __recoveredScope.Pi * (a / l) ** 2,
              t = this.t;
            m.x += e * (Math.sin(__recoveredScope.Di * 4.7 * t + a * 1.7) + .6 * Math.sin(__recoveredScope.Di * 7.9 * t + a * 2.9));
            m.y += e * (Math.sin(__recoveredScope.Di * 3.9 * t + a * 2.3) + .6 * Math.sin(__recoveredScope.Di * 6.8 * t + a * .7));
          }
          if (a > 1) for (let e of t) this.#t(a, e, m);
          let h = __recoveredScope.Li.copy(o[a]);
          s[a].addScaledVector(m, d);
          o[a].addScaledVector(s[a], d);
          this.#e(a);
          s[a].subVectors(o[a], h).divideScalar(d);
        }
      }
      return this.was.copy(e[0]), o;
    }
    #e(e) {
      let {
        at: t
      } = this;
      t[e].sub(t[e - 1]).setLength(this.len[e - 1]).add(t[e - 1]);
    }
    #t(e, t, n) {
      let {
          at: r,
          v: i
        } = this,
        [a, o, s, c] = __recoveredScope.Bi,
        l = __recoveredScope.Di * __recoveredScope.Ni;
      a.copy(r[e - 1]).setX(0);
      o.copy(r[e]).setX(0);
      for (let u = 0; u < 3; u++) {
        s.copy(t[u]).setX(0);
        c.copy(t[u + 1]).setX(0);
        let d = __recoveredScope.Ji(a, o, s, c, __recoveredScope.Vi, __recoveredScope.Hi);
        if (Math.abs(r[e - 1].x + (r[e].x - r[e - 1].x) * d - (t[u].x + t[u + 1].x) / 2) > __recoveredScope.Mi) continue;
        let f = __recoveredScope.Vi.sub(__recoveredScope.Hi),
          p = __recoveredScope.Ki.set(0, s.z - c.z, c.y - s.y).normalize();
        p.z > 0 && p.negate();
        let m = __recoveredScope.Ai + __recoveredScope.ji[u],
          h = f.length(),
          g = p.z < -.3 && f.dot(p) < 0;
        if (g ? h > 2 * m : h >= m) continue;
        let _ = Math.min(g ? m + h : m - h, .06);
        g || h < 1e-5 ? f.copy(p) : f.divideScalar(h);
        n.addScaledVector(f, d * (l * l * _ - 1.6 * l * Math.min(0, i[e].dot(f))));
      }
    }
  };
}
/* Recovered binding Ji. Live dependencies: Ui, Wi, Gi, Ei. */
export function create_Ji(__recoveredScope) {
  return function Ji(e, t, n, r, i, a) {
    let o = __recoveredScope.Ui.subVectors(t, e),
      s = __recoveredScope.Wi.subVectors(r, n),
      c = __recoveredScope.Gi.subVectors(e, n),
      l = o.dot(o),
      u = Math.max(s.dot(s), 1e-12),
      d = s.dot(c),
      f = o.dot(c),
      p = o.dot(s),
      m = l * u - p * p,
      h = m > 1e-12 ? __recoveredScope.Ei((p * d - f * u) / m, 0, 1) : 0,
      g = (p * h + d) / u;
    return g < 0 ? (g = 0, h = __recoveredScope.Ei(-f / l, 0, 1)) : g > 1 && (g = 1, h = __recoveredScope.Ei((p - f) / l, 0, 1)), i.copy(e).addScaledVector(o, h), a.copy(n).addScaledVector(s, g), h;
  };
}
/* Recovered binding Em. Live dependencies: Tm, _m, physics, Y, camera, mc, oi, I. */
export function create_Em(__recoveredScope) {
  return function Em(e) {
    if (!__recoveredScope.Tm) return;
    let t = __recoveredScope._m();
    t && (t.turn = __recoveredScope.physics.yawRate);
    __recoveredScope.Tm.update(e, __recoveredScope.Y, t, __recoveredScope.camera);
    for (let e of __recoveredScope.Tm.events.splice(0)) e.type === `found` && __recoveredScope.mc(__recoveredScope.oi.id) && __recoveredScope.I.toast(`Found: ${__recoveredScope.oi.zh} · ${__recoveredScope.oi.en}`, 3e3);
  };
}
