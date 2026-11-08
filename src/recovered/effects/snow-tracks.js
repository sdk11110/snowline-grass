/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding er. Live dependencies: We, et, Pe, Te, it. */
export function create_er(__recoveredScope) {
  return class {
    constructor(e = 900, t = `#d9e5e8`) {
      this.max = e;
      this.pts = [];
      this.geo = new __recoveredScope.We();
      this.pos = new Float32Array(e * 2 * 3);
      this.geo.setAttribute(`position`, new __recoveredScope.et(this.pos, 3).setUsage(__recoveredScope.Pe));
      let n = [];
      for (let t = 0; t < e - 1; t++) {
        let e = t * 2;
        n.push(e, e + 1, e + 2, e + 1, e + 3, e + 2);
      }
      this.geo.setIndex(n);
      this.mesh = new __recoveredScope.Te(this.geo, new __recoveredScope.it({
        color: t,
        polygonOffset: true,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2,
        side: 2
      }));
      this.mesh.frustumCulled = false;
      this.last = null;
    }
    clear() {
      this.pts.length = 0;
      this.last = null;
      this.#e();
    }
    add(e, t, n) {
      if (!(this.last && this.last.distanceToSquared(e) < .36)) {
        for (!this.last && this.pts.length && this.pts.push({
          x: e.x,
          y: e.y + .03,
          z: e.z,
          sx: t.x,
          sz: t.z,
          w: 0
        }), this.last = e.clone(), this.pts.push({
          x: e.x,
          y: e.y + .03,
          z: e.z,
          sx: t.x,
          sz: t.z,
          w: n
        }); this.pts.length > this.max;) this.pts.shift();
        this.#e();
      }
    }
    gap() {
      if (!this.last) return;
      let e = this.pts[this.pts.length - 1];
      this.pts.push({
        ...e,
        w: 0
      });
      this.pts.length > this.max && this.pts.shift();
      this.last = null;
      this.#e();
    }
    #e() {
      let e = this.pos;
      this.pts.forEach((t, n) => {
        let r = n * 6,
          i = t.w / 2;
        e[r] = t.x + t.sx * i;
        e[r + 1] = t.y;
        e[r + 2] = t.z + t.sz * i;
        e[r + 3] = t.x - t.sx * i;
        e[r + 4] = t.y;
        e[r + 5] = t.z - t.sz * i;
      });
      this.geo.attributes.position.needsUpdate = true;
      this.geo.setDrawRange(0, Math.max(0, this.pts.length - 1) * 6);
    }
  };
}
/* Recovered binding tr. Live dependencies: er, Oe, nr. */
export function create_tr(__recoveredScope) {
  return class {
    constructor() {
      this.line = new __recoveredScope.er();
      this.line2 = new __recoveredScope.er();
      this.furrow = new __recoveredScope.er(600, `#d5e2e7`);
      this.mesh = new __recoveredScope.Oe().add(this.line.mesh, this.line2.mesh, this.furrow.mesh);
    }
    add(e, t, n, r = 0, i = 0) {
      r > 0 ? (this.line.gap(e), this.line2.gap(e), this.furrow.add(e, t, r)) : i > 0 ? (this.furrow.gap(e), this.line.add(__recoveredScope.nr.copy(e).addScaledVector(t, i / 2), t, n), this.line2.add(__recoveredScope.nr.copy(e).addScaledVector(t, -i / 2), t, n)) : (this.furrow.gap(e), this.line2.gap(e), this.line.add(e, t, n));
    }
    gap(e) {
      this.line.gap(e);
      this.line2.gap(e);
      this.furrow.gap(e);
    }
    clear() {
      this.line.clear();
      this.line2.clear();
      this.furrow.clear();
    }
  };
}
/* Recovered binding rr. Live dependencies: Xe, Te, st, createToonMaterial. */
export function create_rr(__recoveredScope) {
  return class {
    constructor() {
      let e = [],
        t = e => {
          let t = Math.sin(e * 91.7) * 43758.5453;
          return t - Math.floor(t);
        };
      for (let n = 0; n < 16; n++) {
        let r = n / 16 * Math.PI * 2 + t(n) * .25,
          i = .1 + t(n + 7) * .07;
        e.push(new __recoveredScope.Xe(i, 1).scale(1.3, .8, 1.3).translate(Math.sin(r) * .36, 0, Math.cos(r) * .86));
      }
      this.mesh = new __recoveredScope.Te(__recoveredScope.st(e), __recoveredScope.createToonMaterial({
        color: `#fbfaf4`
      }, {
        hatch: 0
      }));
      this.mesh.receiveShadow = true;
      this.mesh.visible = false;
    }
    set(e) {
      this.mesh.visible = e > .05;
      this.mesh.scale.set(.8 + e * .2, e, .9 + e * .1);
    }
  };
}
/* Recovered binding ir. Live dependencies: Ye, Ve. */
export function create_ir(__recoveredScope) {
  return function ir() {
    let e = document.createElement(`canvas`);
    e.width = e.height = 64;
    let t = e.getContext(`2d`);
    t.fillStyle = `#fff`;
    t.beginPath();
    t.arc(32, 32, 26, 0, Math.PI * 2);
    t.fill();
    t.strokeStyle = `rgba(80,120,130,0.55)`;
    t.lineWidth = 5;
    t.stroke();
    let n = new __recoveredScope.Ye(e);
    return n.colorSpace = __recoveredScope.Ve, n;
  };
}
/* Recovered binding ar. Live dependencies: We, et, Pe, Be, He, ir. */
export function create_ar(__recoveredScope) {
  return class {
    constructor(e = 400, {
      size: t = .28,
      gravity: n = 6,
      life: r = .5,
      scatter: i = .4,
      lift: a = 1,
      settle: o = false,
      color: s = `#ffffff`
    } = {}) {
      this.n = e;
      this.gravity = n;
      this.lifespan = r;
      this.scatter = i;
      this.lift = a;
      this.floor = o ? new Float32Array(e) : null;
      this.p = new Float32Array(e * 3);
      this.v = new Float32Array(e * 3);
      this.life = new Float32Array(e);
      this.next = 0;
      this.geo = new __recoveredScope.We();
      this.geo.setAttribute(`position`, new __recoveredScope.et(this.p, 3).setUsage(__recoveredScope.Pe));
      this.points = new __recoveredScope.Be(this.geo, new __recoveredScope.He({
        size: t,
        map: __recoveredScope.ir(),
        transparent: true,
        alphaTest: .3,
        depthWrite: false,
        color: s
      }));
      this.points.frustumCulled = false;
      for (let t = 0; t < e; t++) this.p[t * 3 + 1] = -1e5;
    }
    emit(e, t, n, r) {
      for (let i = 0; i < n; i++) {
        let n = this.next;
        this.next = (this.next + 1) % this.n;
        this.p[n * 3] = e.x + (Math.random() - .5) * this.scatter;
        this.p[n * 3 + 1] = e.y + .05;
        this.p[n * 3 + 2] = e.z + (Math.random() - .5) * this.scatter;
        this.v[n * 3] = t.x + (Math.random() - .5) * r;
        this.v[n * 3 + 1] = t.y + Math.random() * r * .8 + this.lift;
        this.v[n * 3 + 2] = t.z + (Math.random() - .5) * r;
        this.life[n] = this.lifespan * (1 + Math.random());
        this.floor && (this.floor[n] = e.y);
      }
    }
    update(e) {
      for (let t = 0; t < this.n; t++) {
        if (this.life[t] <= 0) continue;
        if (this.life[t] -= e, this.life[t] <= 0) {
          this.p[t * 3 + 1] = -1e5;
          continue;
        }
        this.v[t * 3 + 1] -= this.gravity * e;
        let n = Math.exp(-e * 2.5);
        this.v[t * 3] *= n;
        this.v[t * 3 + 2] *= n;
        this.p[t * 3] += this.v[t * 3] * e;
        this.p[t * 3 + 1] += this.v[t * 3 + 1] * e;
        this.p[t * 3 + 2] += this.v[t * 3 + 2] * e;
        this.floor && this.v[t * 3 + 1] < 0 && this.p[t * 3 + 1] < this.floor[t] && (this.life[t] = 0, this.p[t * 3 + 1] = -1e5);
      }
      this.geo.attributes.position.needsUpdate = true;
    }
  };
}
/* Recovered binding ur. Live dependencies: . */
export function create_ur(__recoveredScope) {
  return {
    boot: {
      aspect: .52,
      sdf: `
    d = min(disc(p, vec2(.04, .5), .44), bar(p, vec2(-.01, -.62), vec2(.03, .4), .36));
    float t = abs(fract(p.y * 4.) - .5), tw = fwidth(p.y * 4.);
    tone = mix(mix(.6, 1., smoothstep(.17 - tw, .17 + tw, t)), .85, smoothstep(.25, .6, tw));
    tone *= mix(.45, 1., smoothstep(.09, .17, abs(p.y + .2)));`
    },
    paw: {
      aspect: .92,
      sdf: `
    vec2 q = vec2(abs(p.x), p.y);
    d = min(oval(p, vec2(0., -.42), vec2(.5, .46)), min(disc(q, vec2(.22, .42), .2), disc(q, vec2(.62, .06), .19)));
    d = min(d, min(disc(q, vec2(.26, .8), .07), disc(q, vec2(.74, .4), .07)));`
    },
    hoof: {
      aspect: .94,
      sdf: `
    float rim = oval(p, vec2(0., .03), vec2(.86, .92));
    d = max(rim, -(abs(p.x) - .313 * (.25 - p.y)) * .955);
    tone = mix(.62, 1., smoothstep(-.34, -.18, rim));`
    },
    foot: {
      aspect: .56,
      sdf: `
    d = min(bar(p, vec2(.02, -.58), vec2(.05, .28), .34), oval(p, vec2(.05, .3), vec2(.44, .3)));
    d = min(d, min(disc(p, vec2(.3, .76), .16), disc(p, vec2(.03, .8), .12)));
    d = min(d, min(disc(p, vec2(-.17, .74), .105), min(disc(p, vec2(-.33, .63), .095), disc(p, vec2(-.45, .49), .085))));`
    },
    knuckles: {
      aspect: .84,
      sdf: `
    vec2 q = vec2(abs(p.x), p.y);
    d = min(oval(q, vec2(.22, .2), vec2(.22, .44)), oval(q, vec2(.6, -.02), vec2(.2, .4)));`
    }
  };
}
/* Recovered binding gr. Live dependencies: sr, cr, Vector3, We, et, Pe, rt, Re, toonUniforms, Te, Ze, mr, hr, lr, pr, or. */
export function create_gr(__recoveredScope) {
  return class {
    constructor({
      hf: e,
      snowAt: t = () => 1,
      capacity: n = 1500,
      life: r = __recoveredScope.sr,
      reach: i = __recoveredScope.cr,
      onStep: a = null
    }) {
      Object.assign(this, {
        hf: e,
        snowAt: t,
        capacity: n,
        life: r,
        reach: i,
        onStep: a
      });
      this.made = 0;
      this.clock = 0;
      this.latest = -1 / 0;
      this.eye = new __recoveredScope.Vector3(0, 0, 0);
      this.lightX = 0;
      this.lightZ = 1;
      let o = new __recoveredScope.We();
      this.corners = new __recoveredScope.et(new Float32Array(n * 12), 3).setUsage(__recoveredScope.Pe);
      this.prints = new __recoveredScope.et(new Float32Array(n * 16), 4).setUsage(__recoveredScope.Pe);
      o.setAttribute(`position`, this.corners);
      o.setAttribute(`aPrint`, this.prints);
      let s = new Int8Array(n * 8),
        c = new Uint16Array(n * 6);
      for (let e = 0; e < n; e++) {
        s.set([-127, -127, 127, -127, -127, 127, 127, 127], e * 8);
        let t = e * 4;
        c.set([t, t + 1, t + 2, t + 2, t + 1, t + 3], e * 6);
      }
      o.setAttribute(`corner`, new __recoveredScope.et(s, 2, true));
      o.setIndex(new __recoveredScope.et(c, 1));
      o.setDrawRange(0, 0);
      this.uniforms = {
        uNow: {
          value: new __recoveredScope.rt(0, 0, r, n)
        },
        uFade: {
          value: new __recoveredScope.Re(i * .5, i * .95)
        },
        uShade: {
          value: 1
        },
        uLitTint: __recoveredScope.toonUniforms.uLitTint,
        uShadowTint: __recoveredScope.toonUniforms.uShadowTint
      };
      this.mesh = new __recoveredScope.Te(o, new __recoveredScope.Ze({
        vertexShader: __recoveredScope.mr,
        fragmentShader: __recoveredScope.hr,
        uniforms: this.uniforms,
        transparent: true,
        depthWrite: false,
        side: 2,
        polygonOffset: true,
        polygonOffsetFactor: -4,
        polygonOffsetUnits: -4,
        blending: 5,
        blendEquation: 100,
        blendSrc: 208,
        blendDst: 200,
        blendSrcAlpha: 200,
        blendDstAlpha: 201
      }));
      this.mesh.name = `Footprints`;
      this.mesh.frustumCulled = false;
      this.mesh.renderOrder = -1;
    }
    update(e, t, n) {
      let {
        lightDir: r,
        now: i,
        scene: a
      } = n;
      this.clock += e * (1 + i.snow * __recoveredScope.lr);
      this.eye.copy(t.position);
      let o = Math.hypot(r.x, r.z) || 1;
      this.lightX = r.x / o;
      this.lightZ = r.z / o;
      let s = this.uniforms;
      s.uNow.value.x = this.clock;
      s.uNow.value.y = this.made;
      s.uShade.value = 1 - i.overcast * .55;
      let c = Math.min(this.reach * .95, a.fog.far * .45);
      s.uFade.value.set(Math.min(c * .5, a.fog.near * 2), c);
      this.mesh.visible = this.made === 0 || this.clock - this.latest < this.life;
    }
    near(e, t) {
      return Math.hypot(e - this.eye.x, t - this.eye.z) < this.reach;
    }
    stamp(e, t, n, r, i, {
      width: a = 1,
      mirror: o = false,
      press: s = 1,
      sound: c = null
    } = {}) {
      if (!this.near(t, n)) return false;
      let l = this.snowAt(t, n);
      if (l <= 0) return false;
      let u = r + (Math.random() - .5) * .14,
        d = i / 2 * (.86 + .14 * l + Math.random() * .08),
        f = Math.cos(u),
        p = Math.sin(u),
        m = d * __recoveredScope.pr[e] * a * (o ? -1 : 1),
        h = this.made++,
        g = h % this.capacity,
        _ = this.corners.array,
        v = this.prints.array,
        y = Math.min(.99, l * s),
        b = this.lightX * f - this.lightZ * p,
        x = this.lightX * p + this.lightZ * f,
        S = Math.atan2(x, o ? -b : b),
        C = e + y;
      for (let e = 0; e < 4; e++) {
        let r = e & 1 ? m : -m,
          i = e & 2 ? d : -d,
          a = t + f * r + p * i,
          o = n - p * r + f * i,
          s = g * 12 + e * 3,
          c = g * 16 + e * 4;
        _[s] = a;
        _[s + 1] = this.hf.surfaceAt(a, o) + __recoveredScope.or;
        _[s + 2] = o;
        v[c] = this.clock;
        v[c + 1] = h;
        v[c + 2] = C;
        v[c + 3] = S;
      }
      return this.corners.addUpdateRange(g * 12, 12), this.corners.needsUpdate = true, this.prints.addUpdateRange(g * 16, 16), this.prints.needsUpdate = true, this.latest = this.clock, h < this.capacity && this.mesh.geometry.setDrawRange(0, (h + 1) * 6), c && this.onStep && this.onStep(t, n, l, c), true;
    }
  };
}
/* Recovered binding _r. Live dependencies: . */
export function create__r(__recoveredScope) {
  return class {
    constructor(e, t, n, {
      length: r,
      width: i = 1,
      press: a = 1,
      apart: o = r * .5,
      sound: s = null
    }) {
      Object.assign(this, {
        prints: e,
        kind: t,
        length: r,
        apart: o
      });
      this.opts = {
        width: i,
        mirror: false,
        press: a,
        sound: s
      };
      this.down = new Uint8Array(n).fill(1);
      this.last = new Float32Array(n * 2).fill(1 / 0);
    }
    landed(e, t) {
      let n = this.down[e];
      return this.down[e] = +!!t, !!this.prints && !!t && !n;
    }
    stamp(e, t, n, r, i = false) {
      return !this.prints || Math.hypot(t - this.last[e * 2], n - this.last[e * 2 + 1]) < this.apart || (this.opts.mirror = i, !this.prints.stamp(this.kind, t, n, r, this.length, this.opts)) ? false : (this.last[e * 2] = t, this.last[e * 2 + 1] = n, true);
    }
  };
}
/* Recovered binding br. Live dependencies: vr, yr. */
export function create_br(__recoveredScope) {
  return class {
    constructor(e, {
      reach: t,
      heel: n = 0
    }) {
      Object.assign(this, {
        tracks: e,
        reach: t,
        heel: n
      });
      this.lead = 1;
      this.peak = -1 / 0;
    }
    update(e, t, n, r, i) {
      if (!this.tracks.prints) return;
      e.getWorldPosition(__recoveredScope.vr);
      t.getWorldPosition(__recoveredScope.yr);
      let a = ((__recoveredScope.vr.x - __recoveredScope.yr.x) * n + (__recoveredScope.vr.z - __recoveredScope.yr.z) * r) * this.lead;
      if (!i || a > this.peak) {
        this.peak = a;
        return;
      }
      if (this.peak < this.reach || this.peak - a < this.reach * .12) return;
      let o = this.lead > 0,
        s = o ? __recoveredScope.vr : __recoveredScope.yr;
      this.tracks.stamp(+!o, s.x + n * this.heel, s.z + r * this.heel, Math.atan2(n, r), o);
      this.lead = -this.lead;
      this.peak = -a;
    }
  };
}
/* Recovered binding jp. Live dependencies: MathUtils, physics, Ap, playerInput, ud. Writes: ud. */
export function create_jp(__recoveredScope) {
  return function jp(e, t) {
    let n = __recoveredScope.MathUtils,
      r = t ? __recoveredScope.physics.powder * (n.lerp(__recoveredScope.Ap.slow, __recoveredScope.Ap.fast, n.smoothstep(__recoveredScope.physics.speed, 3, 14)) + (__recoveredScope.playerInput.brake ? __recoveredScope.Ap.brake : 0)) : 0;
    __recoveredScope.ud += (r - __recoveredScope.ud) * Math.min(1, e * (__recoveredScope.physics.grounded ? r > __recoveredScope.ud ? 5 : 2.5 : 14));
  };
}
/* Recovered binding Mp. Live dependencies: od, MathUtils, ud, physics, rider. */
export function create_Mp(__recoveredScope) {
  return function Mp() {
    __recoveredScope.od.set(__recoveredScope.MathUtils.clamp(__recoveredScope.ud / .18, 0, 1));
    __recoveredScope.od.mesh.visible && (__recoveredScope.od.mesh.position.copy(__recoveredScope.physics.pos), __recoveredScope.od.mesh.quaternion.copy(__recoveredScope.rider.root.quaternion));
  };
}
