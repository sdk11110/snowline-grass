/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding wl. Live dependencies: g, loadGLTF, Sl, Cl, Vector3, createToonMaterial, Dl, c, Tl, MathUtils. */
export function create_wl(__recoveredScope) {
  return class {
    constructor() {
      this.root = new __recoveredScope.g();
      this.root.name = `Truck`;
      this.body = new __recoveredScope.g();
      this.root.add(this.body);
      this.wheels = [];
      this.dims = null;
      this.footprint = {
        kind: `pickup`,
        x: 0,
        z: 0,
        yaw: 0,
        hw: 0,
        hd: 0
      };
      this.marks = [];
      this.exits = [];
      this.ready = __recoveredScope.loadGLTF(__recoveredScope.Sl).then(e => this.#e(e));
      this.lean = {
        pitch: 0,
        roll: 0,
        vp: 0,
        vr: 0
      };
    }
    #e(e) {
      let t = null;
      e.scene.updateMatrixWorld(true);
      e.scene.traverse(e => {
        e.isMesh && !t && (t = e);
      });
      let n = t.geometry.clone().applyMatrix4(t.matrixWorld);
      n.computeBoundingBox();
      let r = n.boundingBox,
        i = __recoveredScope.Cl / (r.max.z - r.min.z);
      n.translate(-(r.min.x + r.max.x) / 2, -r.min.y, -(r.min.z + r.max.z) / 2).scale(i, i, i);
      n.computeBoundingBox();
      let a = n.boundingBox.getSize(new __recoveredScope.Vector3()),
        o = __recoveredScope.createToonMaterial({
          map: t.material.map,
          side: t.material.side
        }, {
          rim: 1
        }),
        l = __recoveredScope.Dl(n),
        u = (e, t, n) => {
          let r = new __recoveredScope.c(t, o);
          return n && r.position.copy(n).negate(), r.castShadow = true, r.receiveShadow = true, e.add(r), r;
        };
      u(this.body, l.body);
      for (let e of l.wheels) {
        let t = new __recoveredScope.g();
        t.position.copy(e.centre);
        let n = new __recoveredScope.g();
        t.add(n);
        u(n, e.spin, e.centre);
        e.fixed && u(t, e.fixed, e.centre);
        this.root.add(t);
        this.wheels.push({
          steer: t,
          spin: n,
          front: e.centre.z > 0
        });
      }
      let d = l.wheels.filter(e => e.centre.z > 0),
        f = l.wheels.filter(e => e.centre.z <= 0),
        p = (e, t) => e.reduce((e, n) => e + n.centre[t], 0) / Math.max(1, e.length),
        m = l.wheels.length ? p(l.wheels, `y`) : .45;
      this.dims = {
        length: a.z,
        height: a.y,
        halfWidth: l.bodyHalfWidth,
        halfLength: a.z / 2,
        wheelbase: l.wheels.length === 4 ? p(d, `z`) - p(f, `z`) : a.z * .62,
        axleZ: l.wheels.length === 4 ? (p(d, `z`) + p(f, `z`)) / 2 : 0,
        track: l.wheels.length === 4 ? Math.abs(d[0].centre.x - d[1].centre.x) : l.bodyHalfWidth * 1.6,
        wheelRadius: m
      };
      this.body.position.z = this.dims.axleZ ? -this.dims.axleZ : 0;
      for (let e of this.wheels) e.steer.position.z -= this.dims.axleZ;
      this.footprint.hw = this.dims.halfWidth;
      this.footprint.hd = this.dims.halfLength;
      let h = this.dims;
      return this.marks = [-1, 1].map(e => ({
        along: -h.wheelbase / 2,
        left: e * h.track / 2,
        width: .4
      })), this.exits = [[.4, h.halfWidth + .9], [.4, -h.halfWidth - .9], [-h.halfLength - 1.2, 0], [h.halfLength + 1.2, 0]].map(([e, t]) => ({
        along: e,
        left: t
      })), this;
    }
    update(e, t) {
      this.root.position.copy(t.pos);
      this.root.quaternion.copy(t.quat);
      let n = this.lean;
      __recoveredScope.Tl(n, e, __recoveredScope.MathUtils.clamp(-t.accel * .006, -.06, .06), __recoveredScope.MathUtils.clamp(t.lateral * .008, -.07, .07));
      this.body.rotation.set(n.pitch, 0, n.roll);
      for (let e of this.wheels) {
        e.front && (e.steer.rotation.y = t.steer);
        e.spin.rotation.x = t.roll;
      }
      this.footprint.x = t.pos.x;
      this.footprint.z = t.pos.z;
      this.footprint.yaw = t.yaw;
      this.footprint.top = t.pos.y + this.dims.height;
    }
  };
}
/* Recovered binding Tl. Live dependencies: . */
export function create_Tl(__recoveredScope) {
  return function Tl(e, t, n, r) {
    e.vp += ((n - e.pitch) * 90 - e.vp * 12) * t;
    e.vr += ((r - e.roll) * 90 - e.vr * 12) * t;
    e.pitch += e.vp * t;
    e.roll += e.vr * t;
  };
}
/* Recovered binding El. Live dependencies: z, et. */
export function create_El(__recoveredScope) {
  return function El(e, t, n) {
    if (!n.length) return null;
    let r = new __recoveredScope.z();
    for (let [t, n] of Object.entries(e.attributes)) r.setAttribute(t, n);
    let i = new Uint32Array(n.length * 3);
    return n.forEach((e, n) => i.set([t[e], t[e + 1], t[e + 2]], n * 3)), r.setIndex(new __recoveredScope.et(i, 1)), r;
  };
}
/* Recovered binding Dl. Live dependencies: Ee, Vector3, El. */
export function create_Dl(__recoveredScope) {
  return function Dl(e) {
    let t = e.attributes.position,
      n = e.index ? e.index.array : Array.from({
        length: t.count
      }, (e, t) => t),
      r = t.count,
      i = new Int32Array(r),
      a = new Map();
    for (let e = 0; e < r; e++) {
      let n = `${t.getX(e).toFixed(4)},${t.getY(e).toFixed(4)},${t.getZ(e).toFixed(4)}`,
        r = a.get(n);
      i[e] = r ?? e;
      r === void 0 && a.set(n, e);
    }
    let o = Int32Array.from({
        length: r
      }, (e, t) => t),
      c = e => {
        for (; o[e] !== e;) e = o[e] = o[o[e]];
        return e;
      };
    for (let e = 0; e < n.length; e += 3) {
      let t = c(i[n[e]]);
      for (let r of [n[e + 1], n[e + 2]]) {
        let e = c(i[r]);
        t !== e && (o[e] = t);
      }
    }
    let l = new Map();
    for (let e = 0; e < n.length; e += 3) {
      let r = c(i[n[e]]),
        a = l.get(r);
      a || l.set(r, a = {
        tris: [],
        box: new __recoveredScope.Ee()
      });
      a.tris.push(e);
      for (let r = 0; r < 3; r++) a.box.expandByPoint(new __recoveredScope.Vector3().fromBufferAttribute(t, n[e + r]));
    }
    let u = [...l.values()],
      d = new __recoveredScope.Vector3(),
      f = new __recoveredScope.Vector3(),
      p = u.filter(e => (e.box.getSize(d), e.box.min.y < d.y * .1 && Math.abs(d.y - d.z) < d.y * .15 && d.x < d.y * .8 && d.y > .3)).sort((e, t) => t.tris.length - e.tris.length).slice(0, 4),
      m = u.reduce((e, t) => t.tris.length > e.tris.length ? t : e),
      h = Math.max(-m.box.min.x, m.box.max.x);
    if (p.length !== 4) return console.warn(`Truck: found ${p.length} tyres, not 4; the wheels won't turn.`), {
      body: e,
      wheels: [],
      bodyHalfWidth: h
    };
    let g = p.map(e => ({
        c: e,
        centre: e.box.getCenter(new __recoveredScope.Vector3()),
        r: e.box.getSize(d).y / 2,
        spin: [],
        fixed: []
      })),
      _ = [];
    for (let e of u) {
      e.box.getCenter(f);
      let t = g.find(t => t.c === e || Math.sign(f.x) === Math.sign(t.centre.x) && Math.abs(f.x) > Math.abs(t.centre.x) - t.r * .8 && e.box.min.y > t.centre.y - t.r - .01 && e.box.max.y < t.centre.y + t.r + .01 && e.box.min.z > t.centre.z - t.r - .01 && e.box.max.z < t.centre.z + t.r + .01);
      t ? t.c === e || Math.hypot(f.y - t.centre.y, f.z - t.centre.z) < t.r * .15 ? t.spin.push(...e.tris) : t.fixed.push(...e.tris) : _.push(...e.tris);
    }
    let v = t => __recoveredScope.El(e, n, t);
    return {
      body: v(_),
      wheels: g.map(e => ({
        centre: e.centre,
        spin: v(e.spin),
        fixed: v(e.fixed)
      })),
      bodyHalfWidth: h
    };
  };
}
/* Recovered binding Al. Live dependencies: . */
export function create_Al(__recoveredScope) {
  return {
    seat: [-.06, .281],
    grips: [.135, .375, .155],
    boards: [.02, .107, .135],
    skis: [.275, .17],
    track: [-.195, .102]
  };
}
/* Recovered binding jl. Live dependencies: g, x, loadGLTF, Ol, kl, Vector3, Al, createToonMaterial, Ml, c, Tl, MathUtils. */
export function create_jl(__recoveredScope) {
  return class {
    constructor() {
      this.root = new __recoveredScope.g();
      this.root.name = `Snowmobile`;
      this.body = new __recoveredScope.g();
      this.root.add(this.body);
      this.saddle = new __recoveredScope.x();
      this.saddle.rotation.y = Math.PI;
      this.body.add(this.saddle);
      this.skis = [];
      this.seat = null;
      this.dims = null;
      this.footprint = {
        kind: `snowmobile`,
        x: 0,
        z: 0,
        yaw: 0,
        hw: 0,
        hd: 0
      };
      this.marks = [];
      this.exits = [];
      this.lean = {
        pitch: 0,
        roll: 0,
        vp: 0,
        vr: 0
      };
      this.ready = __recoveredScope.loadGLTF(__recoveredScope.Ol).then(e => this.#e(e));
    }
    #e(e) {
      let t = null;
      e.scene.updateMatrixWorld(true);
      e.scene.traverse(e => {
        e.isMesh && !t && (t = e);
      });
      let n = t.geometry.clone().applyMatrix4(t.matrixWorld);
      n.computeBoundingBox();
      let r = n.boundingBox,
        i = __recoveredScope.kl / (r.max.x - r.min.x);
      n.translate(-(r.min.x + r.max.x) / 2, -r.min.y, -(r.min.z + r.max.z) / 2).rotateY(-Math.PI / 2).scale(i, i, i);
      n.computeBoundingBox();
      let a = n.boundingBox.getSize(new __recoveredScope.Vector3()),
        o = (e, t, n) => new __recoveredScope.Vector3(-n * i, t * i, e * i),
        l = __recoveredScope.Al.skis[0] * i,
        u = __recoveredScope.Al.track[0] * i,
        d = this.dims = {
          length: a.z,
          height: a.y,
          halfWidth: a.x / 2,
          halfLength: a.z / 2,
          wheelbase: l - u,
          axleZ: (l + u) / 2,
          track: 2 * __recoveredScope.Al.skis[1] * i,
          wheelRadius: .2
        },
        f = __recoveredScope.createToonMaterial({
          map: t.material.map,
          side: t.material.side
        }, {
          rim: 1
        }),
        p = __recoveredScope.Ml(n, i),
        m = (e, t, n) => {
          let r = new __recoveredScope.c(t, f);
          return n && r.position.copy(n).negate(), r.castShadow = true, r.receiveShadow = true, e.add(r), r;
        };
      m(this.body, p.body);
      this.body.position.z = -d.axleZ;
      p.skis.forEach((e, t) => {
        if (!e) return;
        let n = o(__recoveredScope.Al.skis[0], 0, t ? __recoveredScope.Al.skis[1] : -__recoveredScope.Al.skis[1]),
          r = new __recoveredScope.g();
        r.position.copy(n);
        r.position.z -= d.axleZ;
        m(r, e, n);
        this.root.add(r);
        this.skis.push(r);
      });
      let h = ([e, t, n]) => [o(e, t, -n), o(e, t, n)];
      this.seat = {
        hips: o(__recoveredScope.Al.seat[0], __recoveredScope.Al.seat[1], 0),
        feet: h(__recoveredScope.Al.boards),
        grips: h(__recoveredScope.Al.grips)
      };
      this.footprint.hw = d.halfWidth;
      this.footprint.hd = d.halfLength;
      this.marks = [{
        along: -d.wheelbase / 2,
        left: 0,
        width: 2 * __recoveredScope.Al.track[1] * i
      }, ...[-1, 1].map(e => ({
        along: d.wheelbase / 2,
        left: e * d.track / 2,
        width: .12
      }))];
      let _ = __recoveredScope.Al.seat[0] * i - d.axleZ;
      return this.exits = [[_, d.halfWidth + .7], [_, -d.halfWidth - .7], [-d.halfLength - 1, 0], [d.halfLength + 1, 0]].map(([e, t]) => ({
        along: e,
        left: t
      })), this;
    }
    update(e, t) {
      this.root.position.copy(t.pos);
      this.root.quaternion.copy(t.quat);
      __recoveredScope.Tl(this.lean, e, __recoveredScope.MathUtils.clamp(-t.accel * .008, -.07, .07), __recoveredScope.MathUtils.clamp(t.lateral * .005, -.05, .05));
      this.body.rotation.set(this.lean.pitch, 0, this.lean.roll);
      for (let e of this.skis) e.rotation.y = t.steer;
      this.footprint.x = t.pos.x;
      this.footprint.z = t.pos.z;
      this.footprint.yaw = t.yaw;
      this.footprint.top = t.pos.y + this.dims.height;
    }
  };
}
/* Recovered binding Ml. Live dependencies: El. */
export function create_Ml(__recoveredScope) {
  return function Ml(e, t) {
    let n = e.attributes.position,
      r = e.index ? e.index.array : Array.from({
        length: n.count
      }, (e, t) => t),
      i = e => n.getZ(e) > .17 * t && n.getY(e) < .12 * t && Math.abs(n.getX(e)) > .105 * t,
      a = [],
      o = [[], []];
    for (let e = 0; e < r.length; e += 3) i(r[e]) && i(r[e + 1]) && i(r[e + 2]) ? o[n.getX(r[e]) > 0 ? 0 : 1].push(e) : a.push(e);
    return {
      body: __recoveredScope.El(e, r, a),
      skis: o.map(t => __recoveredScope.El(e, r, t))
    };
  };
}
/* Recovered binding Fl. Live dependencies: . */
export function create_Fl(__recoveredScope) {
  return {
    engine: 6.5,
    topSpeed: 30,
    reverse: 3.5,
    reverseSpeed: 7,
    brake: 9,
    maxSpeed: 40,
    grip: .55,
    steer: .6,
    drag: [.03, .08],
    air: .0016
  };
}
/* Recovered binding Il. Live dependencies: . */
export function create_Il(__recoveredScope) {
  return {
    engine: 16,
    topSpeed: 66,
    reverse: 2,
    reverseSpeed: 4,
    brake: 6,
    maxSpeed: 200 / 3.6,
    grip: .7,
    steer: .5,
    drag: [.025, .04],
    air: 6e-4
  };
}
/* Recovered binding Ul. Live dependencies: . */
export function create_Ul(__recoveredScope) {
  return (e, t) => Math.sign(e) * Math.max(0, Math.abs(e) - t);
}
/* Recovered binding Wl. Live dependencies: Fl, Vector3, T, Ll, Rl, Nl, MathUtils, Ul, zl, Hl, Vl, Bl, Pl, nearestLakeShore. */
export function create_Wl(__recoveredScope) {
  return class {
    constructor({
      hf: e,
      piste: t,
      forest: n,
      obstacles: r = [],
      lakes: i = [],
      dims: a,
      handling: o = __recoveredScope.Fl
    }) {
      this.hf = e;
      this.piste = t;
      this.forest = n;
      this.obstacles = r;
      this.lakes = i;
      this.dims = a;
      this.h = o;
      this.pos = new __recoveredScope.Vector3();
      this.prev = new __recoveredScope.Vector3();
      this.vel = new __recoveredScope.Vector3();
      this.normal = new __recoveredScope.Vector3(0, 1, 0);
      this.quat = new __recoveredScope.T();
      this.yaw = 0;
      this.yawRate = 0;
      this.steer = 0;
      this.roll = 0;
      this.accel = 0;
      this.lateral = 0;
      this.slip = 0;
      this.events = [];
    }
    reset(e, t, n) {
      this.pos.set(e, 0, t);
      this.vel.set(0, 0, 0);
      this.yaw = n;
      this.yawRate = this.steer = this.accel = this.lateral = this.slip = 0;
      this.#e(1);
    }
    get speed() {
      return this.vel.length();
    }
    forward(e = new __recoveredScope.Vector3()) {
      return e.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    }
    left(e = new __recoveredScope.Vector3()) {
      return e.set(-Math.cos(this.yaw), 0, Math.sin(this.yaw));
    }
    step(e, t) {
      let {
        dims: n,
        h: r
      } = this;
      this.prev.copy(this.pos);
      let i = this.forward(__recoveredScope.Ll),
        a = this.left(__recoveredScope.Rl),
        o = this.normal,
        s = this.vel.dot(i),
        c = this.vel.dot(a),
        l = s,
        u = __recoveredScope.Nl * o.y * o.dot(i),
        d = __recoveredScope.Nl * o.y * o.dot(a),
        f = r.grip * __recoveredScope.Nl * o.y,
        p = this.piste.distAt(this.pos.x, this.pos.z) < 19,
        m = 0,
        h = 0,
        {
          throttle: g,
          reverse: _,
          handbrake: v
        } = t;
      g && !_ ? s < -.3 ? h = r.brake : m = r.engine * Math.max(0, 1 - s / r.topSpeed) : _ && !g ? s > .3 ? h = r.brake : m = -r.reverse * Math.max(0, 1 + s / r.reverseSpeed) : h = g && _ || Math.abs(s) < 1.5 ? r.brake : .6;
      v && (h = Math.max(h, 4));
      m = __recoveredScope.MathUtils.clamp(m, -f, f);
      h = Math.min(h, f);
      let y = r.drag[+!p] * __recoveredScope.Nl * o.y + r.air * s * s;
      s += (u + m) * e;
      s = __recoveredScope.Ul(s, (h + y) * e);
      let b = Math.abs(s),
        x = t.steer * r.steer / (1 + b * b / 180);
      this.steer += (x - this.steer) * (1 - Math.exp(-e * 8));
      let S = f * (v ? 2.2 : 1.25) / Math.max(b, 2),
        C = s * Math.tan(this.steer) / n.wheelbase;
      v && (C *= 1.5);
      this.yawRate = __recoveredScope.MathUtils.clamp(C, -S, S);
      this.yaw += this.yawRate * e;
      c = __recoveredScope.Ul(c + d * e, f * (v ? .35 : 1.2) * e);
      this.slip = Math.abs(c);
      this.vel.copy(i).multiplyScalar(s).addScaledVector(a, c);
      this.vel.length() > r.maxSpeed && this.vel.setLength(r.maxSpeed);
      this.pos.x += this.vel.x * e;
      this.pos.z += this.vel.z * e;
      this.#t();
      this.#e(e);
      let w = this.vel.dot(i);
      this.accel += ((w - l) / e - this.accel) * (1 - Math.exp(-e * 10));
      this.lateral += (w * this.yawRate - this.lateral) * (1 - Math.exp(-e * 10));
      this.roll += w * e / n.wheelRadius;
    }
    #e(e) {
      let {
          hf: t,
          dims: n,
          pos: r
        } = this,
        i = this.forward(__recoveredScope.Ll),
        a = this.left(__recoveredScope.Rl),
        o = n.wheelbase / 2,
        s = n.track / 2,
        c = (e, n) => t.heightAt(r.x + i.x * o * e + a.x * s * n, r.z + i.z * o * e + a.z * s * n),
        l = c(1, 1),
        u = c(1, -1),
        d = c(-1, 1),
        f = c(-1, -1);
      r.y = (l + u + d + f) / 4;
      let p = (l + u - d - f) / (2 * n.wheelbase),
        m = (l + d - u - f) / (2 * n.track);
      __recoveredScope.zl.set(0, 1, 0).addScaledVector(i, -p).addScaledVector(a, -m).normalize();
      this.normal.lerp(__recoveredScope.zl, 1 - Math.exp(-e * 25)).normalize();
      __recoveredScope.Hl.copy(i).addScaledVector(this.normal, -i.dot(this.normal)).normalize();
      __recoveredScope.Vl.crossVectors(this.normal, __recoveredScope.Hl);
      this.quat.setFromRotationMatrix(__recoveredScope.Bl.makeBasis(__recoveredScope.Vl, this.normal, __recoveredScope.Hl));
    }
    #t() {
      let {
          hf: e,
          pos: t,
          vel: n,
          prev: r,
          dims: i
        } = this,
        a = e.half - __recoveredScope.Pl - i.halfLength;
      for (let [r, i] of [[`x`, e.center[0]], [`z`, e.center[1]]]) {
        let e = t[r] - i;
        Math.abs(e) <= a || (t[r] = i + Math.sign(e) * a, n[r] * e > 0 && (n[r] = 0));
      }
      let o = this.forward(__recoveredScope.Ll),
        s = this.left(__recoveredScope.Rl),
        c = i.wheelbase / 2,
        l = i.track / 2;
      for (let [i, a] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) if (e.holeAt(t.x + o.x * c * i + s.x * l * a, t.z + o.z * c * i + s.z * l * a)) {
        t.copy(r);
        n.set(0, 0, 0);
        break;
      }
      let u = i.halfWidth,
        d = i.halfLength - u;
      for (let e of [-1, 0, 1]) {
        let n = () => t.x + o.x * d * e,
          r = () => t.z + o.z * d * e;
        for (let e of this.obstacles) {
          let t = Math.cos(e.yaw),
            i = Math.sin(e.yaw),
            a = n() - e.x,
            o = r() - e.z,
            s = a * t - o * i,
            c = a * i + o * t,
            l = e.hw + u - Math.abs(s),
            d = e.hd + u - Math.abs(c);
          if (l <= 0 || d <= 0) continue;
          let [f, p, m] = l < d ? [t * Math.sign(s), -i * Math.sign(s), l] : [i * Math.sign(c), t * Math.sign(c), d];
          this.#n(f, p, m, `wall`);
        }
        for (let e = 0; e < 3; e++) {
          let e = this.forest.hit(n(), r(), u);
          if (!e) break;
          let t = n() - e.x,
            i = r() - e.z,
            a = Math.hypot(t, i) || 1;
          t /= a;
          i /= a;
          this.#n(t, i, u + e.r - a + .01, `tree`);
        }
        let i = __recoveredScope.nearestLakeShore(this.lakes, n(), r(), u + 1);
        i && i.d < u && this.#n(i.nx, i.nz, u - i.d, `wall`);
      }
    }
    #n(e, t, n, r) {
      this.pos.x += e * n;
      this.pos.z += t * n;
      let i = this.vel.x * e + this.vel.z * t;
      i >= 0 || (this.vel.x -= e * i * 1.25, this.vel.z -= t * i * 1.25, this.vel.multiplyScalar(.85), i < -5 && this.events.push({
        type: `crash`,
        reason: r,
        speed: -i
      }));
    }
  };
}
/* Recovered binding Zl. Live dependencies: g, x, loadGLTF, Gl, ql, Jl, Ee, Kl, Yl, Vector3, createToonMaterial, c, mt, $l, Ql, B, ot, MathUtils, Xl. */
export function create_Zl(__recoveredScope) {
  return class {
    constructor() {
      this.root = new __recoveredScope.g();
      this.root.name = `Jetson`;
      this.body = new __recoveredScope.g();
      this.root.add(this.body);
      this.saddle = new __recoveredScope.x();
      this.saddle.rotation.y = Math.PI;
      this.body.add(this.saddle);
      this.rotors = [];
      this.sticks = [];
      this.seat = null;
      this.dims = null;
      this.footprint = {
        kind: `jetson`,
        x: 0,
        z: 0,
        yaw: 0,
        hw: 0,
        hd: 0
      };
      this.marks = [];
      this.exits = [];
      this.t = 0;
      this.hover = 0;
      this.ready = __recoveredScope.loadGLTF(__recoveredScope.Gl).then(e => this.#e(e));
    }
    #e(e) {
      e.scene.updateMatrixWorld(true);
      let t = new Map(),
        n = null;
      e.scene.traverse(e => {
        e.isMesh && (t.set(e.name, e.geometry.clone().applyMatrix4(e.matrixWorld)), n ||= e.material);
      });
      for (let e of [...__recoveredScope.ql, ...__recoveredScope.Jl]) if (!t.has(e)) throw Error(`jetson-one.glb has no ${e}`);
      let r = new __recoveredScope.Ee();
      for (let e of t.values()) {
        e.computeBoundingBox();
        r.union(e.boundingBox);
      }
      let i = __recoveredScope.Kl / (r.max.x - r.min.x),
        a = (__recoveredScope.Yl.pads[0] + __recoveredScope.Yl.pads[1]) / 2,
        o = (e, t, n) => new __recoveredScope.Vector3(-n * i, t * i, (e - a) * i),
        l = e => e.translate(-a, 0, 0).rotateY(-Math.PI / 2).scale(i, i, i);
      for (let e of t.values()) l(e);
      let u = __recoveredScope.createToonMaterial({
          map: n.map,
          side: n.side
        }, {
          rim: 1
        }),
        d = e => {
          let t = new __recoveredScope.c(e, u);
          return t.castShadow = true, t.receiveShadow = true, t;
        },
        f = (e, t) => {
          let n = new __recoveredScope.g();
          return n.position.copy(t), n.add(d(e.translate(-t.x, -t.y, -t.z))), this.body.add(n), n;
        };
      this.body.add(d(__recoveredScope.mt([...t].filter(([e]) => !__recoveredScope.ql.includes(e) && !__recoveredScope.Jl.includes(e)).map(([, e]) => e))));
      let p = __recoveredScope.$l();
      for (let e of __recoveredScope.ql) {
        let n = t.get(e),
          {
            tips: r,
            y: i
          } = __recoveredScope.Ql(n),
          a = new __recoveredScope.Vector3((r[0].x + r[1].x) / 2, i, (r[0].z + r[1].z) / 2),
          o = r[0].distanceTo(r[1]) / 2,
          l = {
            pivot: f(n, a),
            hub: a,
            radius: o,
            dir: 1
          },
          u = new __recoveredScope.B(o * 1.02, 40).rotateX(-Math.PI / 2);
        u.deleteAttribute(`normal`);
        l.disc = new __recoveredScope.c(u, new __recoveredScope.ot({
          map: p,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          side: 2
        }));
        l.disc.position.copy(a);
        l.disc.renderOrder = 1;
        this.body.add(l.disc);
        this.rotors.push(l);
      }
      for (let e of this.rotors) {
        let t = this.rotors.find(t => t !== e && Math.hypot(t.hub.x - e.hub.x, t.hub.z - e.hub.z) < e.radius);
        e.dir = (!t || e.hub.y > t.hub.y ? 1 : -1) * Math.sign(e.hub.x * e.hub.z || 1);
      }
      let m = __recoveredScope.Yl.sticks;
      this.sticks = __recoveredScope.Jl.map((e, n) => f(t.get(e), o(m[0], m[1], n ? m[3] : -m[3])));
      this.handles = this.sticks.map(() => new __recoveredScope.Vector3(0, (m[2] - m[1]) * i, 0));
      let h = __recoveredScope.Yl.pads,
        _ = this.dims = {
          length: (r.max.x - r.min.x) * i,
          height: r.max.y * i,
          halfWidth: (r.max.z - r.min.z) * i / 2,
          halfLength: (r.max.x - r.min.x) * i / 2,
          wheelbase: (h[0] - h[1]) * i,
          track: 2 * h[2] * i
        },
        v = ([e, t, n]) => [o(e, t, -n), o(e, t, n)];
      this.seat = {
        hips: o(__recoveredScope.Yl.seat[0], __recoveredScope.Yl.seat[1], 0),
        feet: v(__recoveredScope.Yl.feet),
        grips: this.sticks.map((e, t) => this.handles[t].clone().add(e.position)),
        kneeOut: .05
      };
      this.footprint.hw = _.halfWidth;
      this.footprint.hd = _.halfLength;
      let y = this.rotors.reduce((e, t) => e + t.hub.z, 0) / this.rotors.length;
      return this.exits = [[y, _.halfWidth + .6], [y, -_.halfWidth - .6], [-_.halfLength - 1, 0], [_.halfLength + 1, 0]].map(([e, t]) => ({
        along: e,
        left: t
      })), this;
    }
    update(e, t) {
      this.t += e;
      this.root.position.copy(t.pos);
      this.root.quaternion.copy(t.quat);
      this.hover += (+!t.landed - this.hover) * (1 - Math.exp(-e * 3));
      this.body.position.y = Math.sin(this.t * 1.7) * .03 * this.hover;
      this.body.rotation.z = Math.sin(this.t * 1.1 + 1) * .006 * this.hover;
      let n = t.spool * (24 + 8 * t.load),
        r = __recoveredScope.MathUtils.smoothstep(t.spool, .25, .9) * (.2 + .08 * t.load);
      for (let t of this.rotors) {
        t.pivot.rotation.y += n * t.dir * e;
        t.disc.material.opacity = r;
        t.disc.visible = r > .005;
      }
      let i = t.stick;
      this.sticks[0].rotation.set(i.lift * __recoveredScope.Xl, 0, 0);
      this.sticks[1].rotation.set(i.pitch * __recoveredScope.Xl, 0, -i.turn * __recoveredScope.Xl);
      this.sticks.forEach((e, t) => this.seat.grips[t].copy(this.handles[t]).applyEuler(e.rotation).add(e.position));
      this.footprint.x = t.pos.x;
      this.footprint.z = t.pos.z;
      this.footprint.yaw = t.yaw;
    }
  };
}
/* Recovered binding Ql. Live dependencies: Vector3. */
export function create_Ql(__recoveredScope) {
  return function Ql(e) {
    let t = e.attributes.position,
      n = new __recoveredScope.Vector3(),
      r = e.boundingBox.getCenter(new __recoveredScope.Vector3()),
      i = e => {
        let r = null,
          i = -1;
        for (let a = 0; a < t.count; a++) {
          n.fromBufferAttribute(t, a);
          let o = Math.hypot(n.x - e.x, n.z - e.z);
          o > i && (i = o, r = n.clone());
        }
        return r;
      },
      a = i(r),
      o = i(a);
    return {
      tips: [a, o],
      y: (a.y + o.y) / 2
    };
  };
}
/* Recovered binding $l. Live dependencies: qe, he. */
export function create_Dollarl(__recoveredScope) {
  return function $l() {
    let e = document.createElement(`canvas`);
    e.width = e.height = 128;
    let t = e.getContext(`2d`),
      n = t.createRadialGradient(64, 64, 7.68, 64, 64, 64);
    n.addColorStop(0, `rgba(40,44,50,0)`);
    n.addColorStop(.25, `rgba(40,44,50,0.35)`);
    n.addColorStop(.8, `rgba(40,44,50,0.8)`);
    n.addColorStop(.95, `rgba(40,44,50,1)`);
    n.addColorStop(1, `rgba(40,44,50,0)`);
    t.fillStyle = n;
    t.fillRect(0, 0, 128, 128);
    let r = new __recoveredScope.qe(e);
    return r.colorSpace = __recoveredScope.he, r;
  };
}
/* Recovered binding tu. Live dependencies: . */
export function create_tu(__recoveredScope) {
  return {
    topSpeed: 50,
    backSpeed: 12,
    tilt: .5,
    push: 12,
    turnPush: 16,
    yawRate: 2,
    climb: 15,
    sink: 10,
    lift: [12, 10],
    clearance: 1.2,
    ceiling: 3300,
    spool: .8,
    drag: [.04, .0035]
  };
}
/* Recovered binding mu. Live dependencies: . */
export function create_mu(__recoveredScope) {
  return (e, t, n, r) => e + (t - e) * (1 - Math.exp(-r * n));
}
/* Recovered binding gu. Live dependencies: tu, Vector3, T, uu, mu, iu, au, hu, du, fu, pu, ou, lu, cu, su, eu, nu, ru. */
export function create_gu(__recoveredScope) {
  return class {
    constructor({
      hf: e,
      forest: t,
      obstacles: n = [],
      dims: r,
      handling: i = __recoveredScope.tu
    }) {
      this.hf = e;
      this.forest = t;
      this.obstacles = n;
      this.dims = r;
      this.h = i;
      this.pos = new __recoveredScope.Vector3();
      this.prev = new __recoveredScope.Vector3();
      this.vel = new __recoveredScope.Vector3();
      this.normal = new __recoveredScope.Vector3(0, 1, 0);
      this.quat = new __recoveredScope.T();
      this.yaw = 0;
      this.yawRate = 0;
      this.pitch = 0;
      this.bank = 0;
      this.steer = 0;
      this.accel = 0;
      this.lateral = 0;
      this.spool = 0;
      this.load = 0;
      this.stick = {
        pitch: 0,
        turn: 0,
        lift: 0
      };
      this.landed = true;
      this.agl = 0;
      this.events = [];
    }
    reset(e, t, n) {
      this.pos.set(e, 0, t);
      this.vel.set(0, 0, 0);
      this.yaw = n;
      this.yawRate = this.pitch = this.bank = this.steer = this.accel = this.lateral = 0;
      this.landed = true;
      this.#n(1);
      this.quat.copy(__recoveredScope.uu);
    }
    get speed() {
      return Math.hypot(this.vel.x, this.vel.z);
    }
    get canExit() {
      return this.landed || this.agl < this.h.clearance + .4 && this.speed < 2;
    }
    forward(e = new __recoveredScope.Vector3()) {
      return e.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    }
    left(e = new __recoveredScope.Vector3()) {
      return e.set(-Math.cos(this.yaw), 0, Math.sin(this.yaw));
    }
    step(e, t) {
      let n = this.h;
      this.prev.copy(this.pos);
      this.spool = Math.min(1, this.spool + e / n.spool);
      let r = t.throttle && !t.reverse ? 1 : t.reverse && !t.throttle ? -1 : 0,
        i = t.climb && !t.sink ? 1 : t.sink && !t.climb ? -1 : 0;
      if (this.stick.pitch = __recoveredScope.mu(this.stick.pitch, r, 12, e), this.stick.turn = __recoveredScope.mu(this.stick.turn, t.steer, 12, e), this.stick.lift = __recoveredScope.mu(this.stick.lift, i, 12, e), this.steer = this.stick.turn, this.landed) {
        this.vel.set(0, 0, 0);
        this.yawRate = this.accel = this.lateral = 0;
        this.pitch = __recoveredScope.mu(this.pitch, 0, 6, e);
        this.bank = __recoveredScope.mu(this.bank, 0, 6, e);
        this.load = __recoveredScope.mu(this.load, 0, 4, e);
        this.#n(e);
        this.quat.slerp(__recoveredScope.uu, 1 - Math.exp(-e * 10));
        i > 0 && this.spool > .85 && (this.landed = false, this.vel.y = 1, this.events.push({
          type: `takeoff`
        }));
        return;
      }
      let a = this.forward(__recoveredScope.iu),
        o = this.left(__recoveredScope.au),
        s = this.vel.x * a.x + this.vel.z * a.z,
        c = this.vel.x * o.x + this.vel.z * o.z,
        l = s,
        u = Math.hypot(s, c),
        d = t.steer * n.yawRate / (1 + u / 10);
      this.yawRate = __recoveredScope.mu(this.yawRate, d, 6, e);
      this.yaw += this.yawRate * e;
      let f = __recoveredScope.hu(((r > 0 ? n.topSpeed + 4 : r < 0 ? s > .5 ? -n.topSpeed : -n.backSpeed : 0) - s) * .12, -n.tilt, n.tilt),
        p = __recoveredScope.hu(-c * .15, -n.tilt, n.tilt);
      this.pitch = __recoveredScope.mu(this.pitch, f, 6, e);
      this.bank = __recoveredScope.mu(this.bank, p, 6, e);
      let m = n.drag[0] + n.drag[1] * u,
        h = Math.tan(n.tilt);
      s += (n.push * Math.tan(this.pitch) / h - m * s) * e;
      c += (n.turnPush * Math.tan(this.bank) / h - m * c) * e;
      let g = this.#t();
      this.agl = this.pos.y - g;
      let {
          x: _,
          z: v
        } = this.pos,
        {
          x: y,
          z: b
        } = this.vel,
        x = e => this.hf.heightAt(_ + y * e, v + b * e),
        S = this.pos.y - Math.max(g, x(1), x(2), x(3)),
        C = n.clearance + u * .3,
        w = i * (i > 0 ? n.climb : n.sink);
      i >= 0 && S < C ? w = Math.max(w, Math.min(30, (C - S) * 2)) : i < 0 && (w = Math.max(w, -Math.max(1, this.agl * 1.5)));
      let [T, E] = n.lift;
      this.vel.y += __recoveredScope.hu(w - this.vel.y, -E * e, (w > n.climb ? T * 1.6 : T) * e);
      this.vel.x = a.x * s + o.x * c;
      this.vel.z = a.z * s + o.z * c;
      let D = Math.hypot(this.vel.x, this.vel.z) / n.topSpeed;
      D > 1 && (this.vel.x /= D, this.vel.z /= D);
      this.pos.addScaledVector(this.vel, e);
      this.pos.y > n.ceiling && (this.pos.y = n.ceiling, this.vel.y = Math.min(0, this.vel.y));
      this.#r();
      this.#e(i);
      let O = this.vel.dot(a);
      this.accel = __recoveredScope.mu(this.accel, (O - l) / e, 10, e);
      this.lateral = __recoveredScope.mu(this.lateral, O * this.yawRate, 10, e);
      this.load = __recoveredScope.mu(this.load, __recoveredScope.hu(Math.abs(r) * .5 + Math.max(0, i) * .7 + Math.abs(t.steer) * .2, 0, 1), 4, e);
      __recoveredScope.du.set(this.pitch, this.yaw + Math.PI, -this.bank);
      this.quat.slerp(__recoveredScope.uu.setFromEuler(__recoveredScope.du), 1 - Math.exp(-e * 20));
    }
    #e(e) {
      let {
          pos: t,
          vel: n
        } = this,
        r = this.#t();
      if (this.agl = t.y - r, this.agl > 0) return;
      t.y = r;
      let i = -n.y,
        a = this.speed;
      i > 4 || a > 9 ? (this.events.push({
        type: `crash`,
        reason: `ground`,
        speed: Math.max(i, a)
      }), n.y = Math.max(1.5, i * .3), n.x *= .6, n.z *= .6) : e < 0 && a < 4 ? (this.landed = true, n.set(0, 0, 0), this.events.push({
        type: `landed`
      })) : n.y = Math.max(n.y, 0);
    }
    #t() {
      let {
          hf: e,
          dims: t,
          pos: n
        } = this,
        r = this.forward(__recoveredScope.fu),
        i = this.left(__recoveredScope.pu),
        a = t.wheelbase / 2,
        o = t.track / 2,
        s = -1 / 0;
      for (let [t, c] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) s = Math.max(s, e.heightAt(n.x + r.x * a * t + i.x * o * c, n.z + r.z * a * t + i.z * o * c));
      return s;
    }
    #n(e) {
      let {
          hf: t,
          dims: n,
          pos: r
        } = this,
        i = this.forward(__recoveredScope.fu),
        a = this.left(__recoveredScope.pu),
        o = n.wheelbase / 2,
        s = n.track / 2,
        c = (e, n) => t.heightAt(r.x + i.x * o * e + a.x * s * n, r.z + i.z * o * e + a.z * s * n),
        l = c(1, 1),
        u = c(1, -1),
        d = c(-1, 1),
        f = c(-1, -1);
      r.y = (l + u + d + f) / 4;
      this.agl = 0;
      let p = (l + u - d - f) / (2 * n.wheelbase),
        m = (l + d - u - f) / (2 * n.track);
      __recoveredScope.ou.set(0, 1, 0).addScaledVector(i, -p).addScaledVector(a, -m).normalize();
      this.normal.lerp(__recoveredScope.ou, 1 - Math.exp(-e * 25)).normalize();
      __recoveredScope.lu.copy(i).addScaledVector(this.normal, -i.dot(this.normal)).normalize();
      __recoveredScope.cu.crossVectors(this.normal, __recoveredScope.lu);
      __recoveredScope.uu.setFromRotationMatrix(__recoveredScope.su.makeBasis(__recoveredScope.cu, this.normal, __recoveredScope.lu));
    }
    #r() {
      let {
          hf: e,
          pos: t,
          vel: n,
          prev: r,
          dims: i
        } = this,
        a = e.half - __recoveredScope.eu - i.halfLength;
      for (let [r, i] of [[`x`, e.center[0]], [`z`, e.center[1]]]) {
        let e = t[r] - i;
        Math.abs(e) <= a || (t[r] = i + Math.sign(e) * a, n[r] * e > 0 && (n[r] = 0));
      }
      e.holeAt(t.x, t.z) && (t.copy(r), n.set(0, 0, 0));
      let o = i.halfWidth,
        s = e.heightAt(t.x, t.z);
      for (let e of this.obstacles) {
        if (t.y > (e.top ?? s + __recoveredScope.nu)) continue;
        let n = Math.cos(e.yaw),
          r = Math.sin(e.yaw),
          i = t.x - e.x,
          a = t.z - e.z,
          c = i * n - a * r,
          l = i * r + a * n,
          u = e.hw + o - Math.abs(c),
          d = e.hd + o - Math.abs(l);
        if (u <= 0 || d <= 0) continue;
        let [f, p, m] = u < d ? [n * Math.sign(c), -r * Math.sign(c), u] : [r * Math.sign(l), n * Math.sign(l), d];
        this.#i(f, p, m, `wall`);
      }
      if (t.y - s < __recoveredScope.ru * 1.4) for (let e = 0; e < 3; e++) {
        let e = this.forest.hit(t.x, t.z, o);
        if (!e || t.y > (e.top ?? s + __recoveredScope.ru)) break;
        let n = t.x - e.x,
          r = t.z - e.z,
          i = Math.hypot(n, r) || 1;
        n /= i;
        r /= i;
        this.#i(n, r, o + e.r - i + .01, `tree`);
      }
    }
    #i(e, t, n, r) {
      this.pos.x += e * n;
      this.pos.z += t * n;
      let i = this.vel.x * e + this.vel.z * t;
      i >= 0 || (this.vel.x -= e * i * 1.3, this.vel.z -= t * i * 1.3, this.vel.multiplyScalar(.8), i < -4 && this.events.push({
        type: `crash`,
        reason: r,
        speed: -i
      }));
    }
    land() {
      this.landed = true;
      this.vel.set(0, 0, 0);
      this.#n(1);
      this.quat.copy(__recoveredScope.uu);
    }
    coast(e) {
      this.spool = Math.max(0, this.spool - e / (this.h.spool * 2));
      this.load = __recoveredScope.mu(this.load, 0, 4, e);
      this.stick.pitch = __recoveredScope.mu(this.stick.pitch, 0, 8, e);
      this.stick.turn = __recoveredScope.mu(this.stick.turn, 0, 8, e);
      this.stick.lift = __recoveredScope.mu(this.stick.lift, 0, 8, e);
    }
  };
}
/* Recovered binding Tu. Live dependencies: vu. */
export function create_Tu(__recoveredScope) {
  return function Tu(e) {
    return {
      half: __recoveredScope.vu / 2 * (e < .45 ? .72 + .28 * Math.sin(e / .45 * Math.PI / 2) : Math.max(0, 1 - ((e - .45) / .55) ** 2) ** .75),
      keel: -.17 + .2 * Math.max(0, (e - .62) / .38) ** 2 + .05 * Math.max(0, (.2 - e) / .2) ** 2,
      sheer: .36 + .16 * Math.max(0, (e - .45) / .55) ** 2 + .05 * Math.max(0, (.3 - e) / .3) ** 2
    };
  };
}
/* Recovered binding Eu. Live dependencies: Tu, Vector3, _u. */
export function create_Eu(__recoveredScope) {
  return function Eu(e, t, n = 0) {
    let {
        half: r,
        keel: i,
        sheer: a
      } = __recoveredScope.Tu(e),
      o = Math.abs(t) * Math.PI / 2,
      c = Math.sign(t) * Math.max(0, r - n) * Math.sin(o) ** .8,
      l = i + n + (a - i - n) * (1 - Math.cos(o));
    return new __recoveredScope.Vector3(c, l, (e - .5) * __recoveredScope._u);
  };
}
/* Recovered binding Du. Live dependencies: _u. */
export function create_Du(__recoveredScope) {
  return e => e / __recoveredScope._u + .5;
}
/* Recovered binding Ou. Live dependencies: Du, Eu. */
export function create_Ou(__recoveredScope) {
  return function Ou(e, t, n = 0) {
    let r = __recoveredScope.Du(e),
      i = 0;
    for (; i < 1 && __recoveredScope.Eu(r, i, n).y < t;) i += .01;
    return __recoveredScope.Eu(r, Math.min(1, i), n).x;
  };
}
/* Recovered binding ku. Live dependencies: g, x, _u, vu, createToonMaterial, wu, c, Nu, K, Tu, Du, et, Pu, Fu, W, yu, Ou, d, He, Vector3, bu, xu, MathUtils, Su, Cu, Au, Eu, ju, Mu, L. */
export function create_ku(__recoveredScope) {
  return class {
    constructor() {
      this.root = new __recoveredScope.g();
      this.root.name = `Rowboat`;
      this.body = new __recoveredScope.g();
      this.root.add(this.body);
      this.saddle = new __recoveredScope.x();
      this.body.add(this.saddle);
      this.oars = [];
      this.seat = null;
      this.dims = {
        length: __recoveredScope._u,
        beam: __recoveredScope.vu,
        halfLength: __recoveredScope._u / 2,
        halfWidth: __recoveredScope.vu / 2,
        height: .7
      };
      this.footprint = {
        kind: `rowboat`,
        x: 0,
        z: 0,
        yaw: 0,
        hw: __recoveredScope.vu / 2,
        hd: __recoveredScope._u / 2
      };
      this.marks = [];
      this.exits = [[-1, 0], [1, 0], [0, 1], [0, -1]].flatMap(([e, t]) => [.9, 1.8].map(n => ({
        along: e * (__recoveredScope._u / 2 + n),
        left: t * (__recoveredScope.vu / 2 + n)
      })));
      this.t = 0;
      this.#e();
      this.ready = Promise.resolve(this);
    }
    #e() {
      let e = __recoveredScope.createToonMaterial({
          color: `#ffffff`,
          vertexColors: true
        }, {
          rim: 1
        }),
        t = __recoveredScope.createToonMaterial({
          color: __recoveredScope.wu.wood
        }, {
          rim: 1
        }),
        n = __recoveredScope.createToonMaterial({
          color: __recoveredScope.wu.thwart
        }, {
          rim: 1
        }),
        r = __recoveredScope.createToonMaterial({
          color: __recoveredScope.wu.oar
        }, {
          rim: 1
        }),
        i = __recoveredScope.createToonMaterial({
          color: __recoveredScope.wu.iron
        }),
        a = (e, t, n = this.body) => {
          let r = new __recoveredScope.c(e, t);
          return r.castShadow = true, r.receiveShadow = true, n.add(r), r;
        },
        o = .035,
        l = __recoveredScope.Nu(20, 8, 0, -1),
        u = __recoveredScope.Nu(20, 8, o, 1),
        f = new __recoveredScope.K(__recoveredScope.wu.stripe),
        p = new __recoveredScope.K(__recoveredScope.wu.paint),
        m = l.attributes.position,
        h = new Float32Array(m.count * 3);
      for (let e = 0; e < m.count; e++) (__recoveredScope.Tu(__recoveredScope.Du(m.getZ(e))).sheer - m.getY(e) < .09 ? f : p).toArray(h, e * 3);
      l.setAttribute(`color`, new __recoveredScope.et(h, 3));
      a(l, e);
      a(u, t);
      a(__recoveredScope.Pu(20, o), n);
      a(__recoveredScope.Fu(8, o), __recoveredScope.createToonMaterial({
        color: __recoveredScope.wu.paint
      }, {
        rim: 1
      }));
      let _ = __recoveredScope.Tu(.5).keel + .09;
      a(new __recoveredScope.W(.5, .025, 2).translate(0, _, -.2), n);
      let [v, y] = __recoveredScope.yu.seat;
      for (let [e, t, r] of [[v, y, .24], [__recoveredScope.yu.thwarts[0], y + .03, .2], [__recoveredScope.yu.thwarts[1], y + .02, .34]]) {
        let i = 2 * __recoveredScope.Ou(e, t, o) - .01;
        a(new __recoveredScope.W(i, .04, r).translate(0, t - .02, e), n);
      }
      let [b, x] = __recoveredScope.yu.locks,
        S = __recoveredScope.Du(b),
        C = __recoveredScope.Tu(S).sheer,
        w = __recoveredScope.Tu(S).half - o / 2,
        T = new __recoveredScope.d(.012, .012, .09, 6).translate(0, .045, 0),
        E = new __recoveredScope.He(.04, .008, 5, 10, Math.PI).rotateY(Math.PI / 2).translate(0, .07, 0);
      for (let e of [1, -1]) {
        let t = new __recoveredScope.Vector3(e * w, C + x, b),
          o = a(T, i);
        o.position.set(t.x, C, t.z);
        a(E, i, o);
        let c = new __recoveredScope.g();
        c.position.copy(t);
        this.body.add(c);
        let l = new __recoveredScope.g();
        l.rotation.y = e > 0 ? 0 : Math.PI;
        c.add(l);
        let u = __recoveredScope.bu.inboard + __recoveredScope.bu.outboard;
        a(new __recoveredScope.d(.022, .022, u, 7).rotateZ(Math.PI / 2).translate((__recoveredScope.bu.outboard - __recoveredScope.bu.inboard) / 2, 0, 0), r, l);
        a(new __recoveredScope.d(.03, .03, .16, 7).rotateZ(Math.PI / 2).translate(-__recoveredScope.bu.inboard + .08, 0, 0), r, l);
        a(new __recoveredScope.d(.032, .032, .14, 7).rotateZ(Math.PI / 2).translate(.02, 0, 0), n, l);
        let f = new __recoveredScope.g();
        f.position.x = __recoveredScope.xu;
        l.add(f);
        a(new __recoveredScope.W(.52, .016, .15), r, f);
        a(new __recoveredScope.W(.14, .018, .152).translate(.2, 0, 0), __recoveredScope.createToonMaterial({
          color: __recoveredScope.wu.stripe
        }, {
          rim: 1
        }), f);
        this.oars.push({
          pivot: c,
          blade: f,
          side: e
        });
      }
      let D = (e, t, n) => new __recoveredScope.Vector3(-e, t, -n),
        [O, k] = __recoveredScope.yu.feet;
      this.seat = {
        hips: D(0, y, v),
        feet: [D(-k, _ + .015, O), D(k, _ + .015, O)],
        grips: [new __recoveredScope.Vector3(), new __recoveredScope.Vector3()],
        kneeOut: .3
      };
      this.oars.forEach(e => this.#t(e, {
        angle: 0,
        dip: .3,
        feather: 1
      }));
    }
    update(e, t) {
      this.t += e;
      this.root.position.copy(t.pos);
      this.root.rotation.set(0, t.yaw + Math.PI, 0);
      this.body.rotation.set(-t.pitch.x, Math.sin(this.t * .6) * .012, t.roll.x);
      this.oars.forEach((e, n) => this.#t(e, t.oars[n]));
      this.footprint.x = t.pos.x;
      this.footprint.z = t.pos.z;
      this.footprint.yaw = t.yaw;
      this.footprint.top = t.pos.y + this.dims.height;
    }
    #t(e, {
      angle: t,
      dip: n,
      feather: r
    }) {
      let i = e.pivot.position.y - __recoveredScope.MathUtils.lerp(__recoveredScope.Su, __recoveredScope.Cu, n),
        a = Math.asin(__recoveredScope.MathUtils.clamp(i / __recoveredScope.xu, -1, 1));
      e.pivot.rotation.set(0, -e.side * t, -e.side * a, `YZX`);
      e.blade.rotation.x = (1 - r) * Math.PI / 2;
      let o = this.seat.grips[+(e.side > 0)];
      o.set(-e.side * __recoveredScope.bu.grip, 0, 0).applyEuler(e.pivot.rotation).add(e.pivot.position);
      o.set(-o.x, o.y, -o.z);
    }
    bladeAt(e, t = new __recoveredScope.Vector3()) {
      let n = this.oars[e];
      return n.pivot.updateWorldMatrix(true, false), n.pivot.localToWorld(t.set(n.side * __recoveredScope.xu, 0, 0));
    }
    waterline(e) {
      this.body.updateWorldMatrix(true, false);
      let t = this.body.matrixWorld,
        n = __recoveredScope.Au.inset,
        r = (e, r, i) => i.copy(__recoveredScope.Eu(e, r, n)).applyMatrix4(t),
        i = t => r(t, 0, __recoveredScope.ju).y < e,
        a = (t, n) => {
          let i = r(t, 0, __recoveredScope.ju);
          for (let a = 1; a <= __recoveredScope.Au.around; a++) {
            let o = r(t, n * a / __recoveredScope.Au.around, __recoveredScope.Mu);
            if (o.y >= e) {
              let t = (e - i.y) / (o.y - i.y);
              return new __recoveredScope.L(i.x + (o.x - i.x) * t, i.z + (o.z - i.z) * t);
            }
            i.copy(o);
          }
          return new __recoveredScope.L(i.x, i.z);
        },
        o = (e, t) => {
          for (let n = 0; n < 12; n++) {
            let n = (e + t) / 2;
            i(n) ? e = n : t = n;
          }
          let n = r(e, 0, __recoveredScope.ju);
          return new __recoveredScope.L(n.x, n.z);
        },
        s = __recoveredScope.Au.stations,
        c = Array.from({
          length: s + 1
        }, (e, t) => t ? t / s : n / __recoveredScope._u),
        l = c.map(i),
        u = l.indexOf(true),
        d = l.lastIndexOf(true);
      if (u < 0) return [];
      let f = [],
        p = [];
      for (let e = u; e <= d; e++) {
        f.push(a(c[e], 1));
        p.push(a(c[e], -1));
      }
      let m = [...f];
      return d < s && m.push(o(c[d], c[d + 1])), m.push(...p.reverse()), u > 0 && m.push(o(c[u], c[u - 1])), m;
    }
  };
}
/* Recovered binding Nu. Live dependencies: Eu, zu, Bu. */
export function create_Nu(__recoveredScope) {
  return function Nu(e, t, n, r) {
    let i = [];
    for (let r = 0; r <= e; r++) for (let a = -t; a <= t; a++) i.push(__recoveredScope.Eu(r / e, a / t, n));
    let a = 2 * t + 1,
      o = [];
    for (let n = 0; n < e; n++) for (let e = 0; e < 2 * t; e++) {
      let t = n * a + e,
        s = t + a,
        c = s + 1,
        l = t + 1;
      __recoveredScope.zu(i, o, [t, s, c], r);
      __recoveredScope.zu(i, o, [t, c, l], r);
    }
    return __recoveredScope.Bu(i, o);
  };
}
/* Recovered binding Pu. Live dependencies: Eu, zu, Bu. */
export function create_Pu(__recoveredScope) {
  return function Pu(e, t) {
    let n = [],
      r = [];
    for (let i of [1, -1]) for (let a = 0; a <= e; a++) {
      let o = n.length;
      if (n.push(__recoveredScope.Eu(a / e, i, 0), __recoveredScope.Eu(a / e, i, t)), a === 0) continue;
      let s = o - 2,
        c = o - 1,
        l = o + 1,
        u = o;
      __recoveredScope.zu(n, r, [s, c, l], 0, [0, 1, 0]);
      __recoveredScope.zu(n, r, [s, l, u], 0, [0, 1, 0]);
    }
    return __recoveredScope.Bu(n, r);
  };
}
/* Recovered binding Fu. Live dependencies: Eu, Vector3, Tu, zu, Bu. */
export function create_Fu(__recoveredScope) {
  return function Fu(e, t) {
    let n = [],
      r = [];
    for (let [i, a] of [[0, -1], [t, 1]]) {
      let t = n.length,
        o = __recoveredScope.Eu(0, 0, 0);
      n.push(new __recoveredScope.Vector3(0, (o.y + __recoveredScope.Tu(0).sheer) / 2, -3.4 / 2 + i));
      for (let t = -e; t <= e; t++) n.push(__recoveredScope.Eu(0, t / e, 0).setZ(-3.4 / 2 + i));
      for (let i = 0; i < 2 * e; i++) __recoveredScope.zu(n, r, [t, t + 1 + i, t + 2 + i], 0, [0, 0, a]);
      __recoveredScope.zu(n, r, [t, t + 2 * e + 1, t + 1], 0, [0, 0, a]);
    }
    return __recoveredScope.Bu(n, r);
  };
}
/* Recovered binding zu. Live dependencies: Iu, Lu, Ru. */
export function create_zu(__recoveredScope) {
  return function zu(e, t, [n, r, i], a, o = null) {
    let s = __recoveredScope.Iu.subVectors(e[r], e[n]).cross(__recoveredScope.Lu.subVectors(e[i], e[n])),
      c;
    o ? c = __recoveredScope.Ru.fromArray(o) : (c = __recoveredScope.Ru.copy(e[n]).add(e[r]).add(e[i]).divideScalar(3), c.set(c.x, c.y - .25, 0).multiplyScalar(-a));
    t.push(...(s.dot(c) >= 0 ? [n, r, i] : [n, i, r]));
  };
}
/* Recovered binding Bu. Live dependencies: z. */
export function create_Bu(__recoveredScope) {
  return function Bu(e, t) {
    let n = new __recoveredScope.z().setFromPoints(e);
    return n.setIndex(t), n.computeVertexNormals(), n;
  };
}
/* Recovered binding Vu. Live dependencies: . */
export function create_Vu(__recoveredScope) {
  return {
    stroke: 2.4,
    drive: .42,
    pull: .8,
    back: .65,
    turn: 1.1,
    catch: .7,
    finish: .38,
    drag: [.05, .06],
    slip: [1.1, .8],
    spin: [1, .6],
    hold: 1.4,
    breeze: .008,
    steer: 1
  };
}
/* Recovered binding Ju. Live dependencies: MathUtils. */
export function create_Ju(__recoveredScope) {
  return (e, t, n) => __recoveredScope.MathUtils.smoothstep(n, e, t);
}
/* Recovered binding Yu. Live dependencies: . */
export function create_Yu(__recoveredScope) {
  return (e, t, n, r) => e + (t - e) * (1 - Math.exp(-r * n));
}
/* Recovered binding Xu. Live dependencies: . */
export function create_Xu(__recoveredScope) {
  return function Xu(e, t, n, r, i) {
    e.v += (-n * n * (e.x - t) - 2 * r * n * e.v) * i;
    e.x += e.v * i;
  };
}
/* Recovered binding Zu. Live dependencies: Vu, Vector3, Uu, qu, Yu, Hu, Ju, MathUtils, Gu, Ku, Wu, ds, Xu, Qu, nearestLakeShore. */
export function create_Zu(__recoveredScope) {
  return class {
    constructor({
      lake: e,
      dims: t,
      handling: n = __recoveredScope.Vu
    }) {
      this.lake = e;
      this.lakes = [e];
      this.dims = t;
      this.h = n;
      this.obstacles = [];
      this.pos = new __recoveredScope.Vector3();
      this.vel = new __recoveredScope.Vector3();
      this.yaw = 0;
      this.yawRate = 0;
      this.steer = 0;
      this.accel = 0;
      this.lateral = 0;
      this.slip = 0;
      this.t = 0;
      this.crewed = false;
      this.phase = 1;
      this.rest = 1;
      this.holding = 0;
      this.efforts = [0, 0];
      this.drives = [0, 0];
      this.from = [0, 0];
      this.sweeps = [0, 0];
      this.oars = [{
        ...__recoveredScope.Uu
      }, {
        ...__recoveredScope.Uu
      }];
      this.heave = {
        x: 0,
        v: 0
      };
      this.pitch = {
        x: 0,
        v: 0
      };
      this.roll = {
        x: 0,
        v: 0
      };
      this.shore = 1 / 0;
      this.events = [];
    }
    reset(e, t, n) {
      this.pos.set(e, this.lake.level, t);
      this.vel.set(0, 0, 0);
      this.yaw = n;
      this.yawRate = this.steer = this.accel = this.lateral = this.slip = 0;
      this.#t(0, 0, 0);
    }
    get speed() {
      return this.vel.length();
    }
    forward(e = new __recoveredScope.Vector3()) {
      return e.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    }
    left(e = new __recoveredScope.Vector3()) {
      return e.set(-Math.cos(this.yaw), 0, Math.sin(this.yaw));
    }
    get canExit() {
      return this.shore < 1.2;
    }
    nudge(e) {
      this.roll.v += e * .18;
      this.heave.v -= .2;
    }
    step(e, t) {
      this.crewed = true;
      let [n, r] = this.#e(e, t);
      this.#t(e, n + r, (r - n) * this.h.turn);
    }
    coast(e) {
      this.crewed = false;
      this.#e(e, null);
      this.#t(e, 0, 0);
    }
    #e(e, t) {
      let n = this.h,
        r = n.drive,
        i = [0, 0],
        a = false,
        o = false;
      if (t) {
        let e = t.throttle === t.reverse ? 0 : t.throttle ? 1 : -1;
        i = [__recoveredScope.qu(e - t.steer, -1, 1), __recoveredScope.qu(e + t.steer, -1, 1)];
        a = Math.abs(i[0]) > .05 || Math.abs(i[1]) > .05;
        o = t.handbrake && !a;
      }
      for (let t = 0; t < 2; t++) this.efforts[t] = __recoveredScope.Yu(this.efforts[t], i[t], 5, e);
      this.steer = __recoveredScope.Yu(this.steer, (i[1] - i[0]) / 2, 6, e);
      a && this.rest > .95 && (this.phase = .8, this.from = [...this.sweeps], this.drives = [0, 0]);
      this.rest = __recoveredScope.Yu(this.rest, +!a, a ? 6 : 2.5, e);
      this.holding = __recoveredScope.Yu(this.holding, +!!o, 5, e);
      let s = this.phase;
      this.rest < .98 && (this.phase += e / n.stroke);
      this.phase >= 1 && (--this.phase, this.drives = [...this.efforts], this.rest < .5 && this.events.push({
        type: `catch`,
        oars: this.drives.map(e => Math.abs(e) > .1)
      }));
      s < r && this.phase >= r && (this.from = [...this.sweeps], this.rest < .5 && this.events.push({
        type: `release`,
        oars: this.drives.map(e => Math.abs(e) > .1)
      }));
      let c = [0, 0],
        l = this.crewed ? __recoveredScope.Hu : __recoveredScope.Uu;
      for (let e = 0; e < 2; e++) {
        let t, i;
        if (this.phase < r) {
          let a = this.phase / r,
            o = Math.sign(this.drives[e]),
            s = o * Math.max(0, this.efforts[e] * o);
          t = -s * Math.cos(Math.PI * a);
          i = Math.abs(this.drives[e]) > .05 ? __recoveredScope.Ju(0, .1, a) * (1 - __recoveredScope.Ju(.9, 1, a)) : 0;
          c[e] = s * (s < 0 ? n.back : 1) * n.pull * Math.sin(Math.PI * a) * i * (1 - this.rest);
        } else {
          let n = (this.phase - r) / (1 - r);
          t = __recoveredScope.MathUtils.lerp(this.from[e], -this.efforts[e], __recoveredScope.Ju(0, 1, n));
          i = 0;
        }
        this.sweeps[e] = t;
        let a = this.oars[e],
          o = t < 0 ? -t * n.catch : -t * n.finish;
        a.angle = __recoveredScope.MathUtils.lerp(__recoveredScope.MathUtils.lerp(o, l.angle, this.rest), 0, this.holding);
        a.dip = __recoveredScope.MathUtils.lerp(__recoveredScope.MathUtils.lerp(i, l.dip, this.rest), 1, this.holding);
        a.feather = __recoveredScope.MathUtils.lerp(__recoveredScope.MathUtils.lerp(1 - i, l.feather, this.rest), 0, this.holding);
      }
      return c;
    }
    #t(e, t, n) {
      let r = this.h;
      this.t += e;
      let i = this.forward(__recoveredScope.Gu),
        a = this.left(__recoveredScope.Ku),
        o = this.vel.dot(i),
        s = this.vel.dot(a),
        c = o;
      o += t * e;
      this.crewed && (o += (__recoveredScope.Wu.x * i.x + __recoveredScope.Wu.y * i.z) * r.breeze * e, s += (__recoveredScope.Wu.x * a.x + __recoveredScope.Wu.y * a.z) * r.breeze * e);
      let l = this.holding * r.hold;
      o -= (r.drag[0] * o + r.drag[1] * o * Math.abs(o) + l * o) * e;
      s -= (r.slip[0] * s + r.slip[1] * s * Math.abs(s) + l * s) * e;
      this.slip = Math.abs(s);
      let u = this.yawRate + n * e;
      u -= (r.spin[0] * u + r.spin[1] * u * Math.abs(u) + l * u) * e;
      this.yawRate = u;
      this.yaw += u * e;
      this.vel.copy(i).multiplyScalar(o).addScaledVector(a, s);
      this.pos.x += this.vel.x * e;
      this.pos.z += this.vel.z * e;
      this.#n();
      let {
          length: d,
          beam: f
        } = this.dims,
        p = this.forward(__recoveredScope.Gu),
        m = this.left(__recoveredScope.Ku),
        {
          x: h,
          z: g
        } = this.pos,
        _ = this.t,
        v = (e, t) => __recoveredScope.ds(h + p.x * e + m.x * t, g + p.z * e + m.z * t, _),
        y = v(d * .38, 0),
        b = v(-d * .38, 0),
        x = v(0, f * .45),
        S = v(0, -f * .45),
        C = (this.sweeps[0] + this.sweeps[1]) / 2 * (1 - this.rest);
      if (e > 0) {
        __recoveredScope.Xu(this.heave, (y + b + x + S) / 4 - (this.crewed ? .035 : 0), 4.2, .3, e);
        __recoveredScope.Xu(this.pitch, (y - b) / (d * .76) - C * .014 + this.accel * .004, 3.4, .18, e);
        __recoveredScope.Xu(this.roll, (x - S) / (f * .9) + this.lateral * .01, 2.9, .14, e);
        let t = this.vel.dot(i);
        this.accel = __recoveredScope.Yu(this.accel, (t - c) / e, 10, e);
        this.lateral = __recoveredScope.Yu(this.lateral, t * this.yawRate, 10, e);
      }
      this.pos.y = this.lake.level + this.heave.x;
    }
    #n() {
      let {
          length: e,
          beam: t
        } = this.dims,
        n = this.forward(__recoveredScope.Gu),
        r = this.left(__recoveredScope.Ku),
        i = (e * e + t * t) / 12,
        a = 1 / 0;
      for (let [o, s] of __recoveredScope.Qu) {
        let c = o * e / 2,
          l = s * t / 2,
          u = n.x * c + r.x * l,
          d = n.z * c + r.z * l,
          f = __recoveredScope.nearestLakeShore(this.lakes, this.pos.x + u, this.pos.z + d, 6);
        if (!f) continue;
        a = Math.min(a, -f.d);
        let p = f.d + .1;
        if (p <= 0) continue;
        let {
          nx: m,
          nz: h
        } = f;
        this.pos.x -= m * p;
        this.pos.z -= h * p;
        let g = (this.vel.x + this.yawRate * d) * m + (this.vel.z - this.yawRate * u) * h;
        if (g <= 0) continue;
        let _ = d * m - u * h,
          v = -1.15 * g / (1 + _ * _ / i);
        this.vel.x += v * m;
        this.vel.z += v * h;
        this.yawRate += v * _ / i;
        g > 1.2 && this.events.push({
          type: `crash`,
          reason: `ground`,
          speed: g
        });
      }
      this.shore = a;
    }
  };
}
