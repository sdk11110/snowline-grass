/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding hc. Live dependencies: . */
export function create_hc(__recoveredScope) {
  return {
    crossLegged: {
      hips: .15,
      lean: .1,
      head: -.12,
      ankles: [[-.03, .06, .3], [.03, .05, .19]],
      knee: [1, .1, -.15],
      elbow: [.6, -.3, -1],
      wrist: [.02, .07, -.06],
      point: .45
    }
  };
}
/* Recovered binding Ec. Live dependencies: Tc, wc, yc, bc, T. */
export function create_Ec(__recoveredScope) {
  return function Ec(e, t, n, r) {
    let i = (e, t, n) => {
      let r = __recoveredScope.Tc.copy(n).addScaledVector(t, -n.dot(t)).normalize();
      return e.makeBasis(t, r, __recoveredScope.wc.crossVectors(t, r));
    };
    return i(__recoveredScope.yc, e, t), i(__recoveredScope.bc, n, r), new __recoveredScope.T().setFromRotationMatrix(__recoveredScope.bc.multiply(__recoveredScope.yc.transpose()));
  };
}
/* Recovered binding Dc. Live dependencies: Cc, MathUtils. */
export function create_Dc(__recoveredScope) {
  return function Dc(e, t, n, r, i) {
    let a = __recoveredScope.Cc.subVectors(t, e),
      o = __recoveredScope.MathUtils.clamp(a.length(), Math.abs(n - r) + .001, n + r - .001);
    a.normalize();
    t.copy(e).addScaledVector(a, o);
    let s = (n * n - r * r + o * o) / (2 * o),
      c = Math.sqrt(Math.max(0, n * n - s * s)),
      l = i.clone().addScaledVector(a, -i.dot(a)).normalize();
    return e.clone().addScaledVector(a, s).addScaledVector(l, c);
  };
}
/* Recovered binding Oc. Live dependencies: Oe, gt, cloneSkinnedModel, createToonMaterial, Cc, wc, Ue, ht, _t, hc, Vector3, T, xc, gc, Dc, Ec, vc, _c, MathUtils, Sc. */
export function create_Oc(__recoveredScope) {
  return class {
    constructor(e, {
      cushion: t = 0
    } = {}) {
      this.spec = e;
      this.cushion = t;
      this.root = new __recoveredScope.Oe();
      this.root.name = `npc:${e.id}`;
      this.look = {
        yaw: 0,
        pitch: 0
      };
      this.head = null;
      this.ready = __recoveredScope.gt(e.rider).then(e => this.#e(e));
    }
    #e(e) {
      let t = __recoveredScope.cloneSkinnedModel(e.scene);
      t.traverse(e => {
        if (!e.isMesh) return;
        let t = e.material;
        e.material = __recoveredScope.createToonMaterial({
          map: t.map,
          color: t.color,
          side: t.side
        }, {
          rim: 1,
          hatch: 0
        });
        e.castShadow = e.receiveShadow = true;
        e.frustumCulled = false;
      });
      let n = {};
      t.traverse(e => {
        e.isBone && (n[e.name.replace(/^mixamorig:?/, ``)] = e);
      });
      t.updateMatrixWorld(true);
      let r = n.Head.getWorldPosition(__recoveredScope.Cc).y - n.Hips.getWorldPosition(__recoveredScope.wc).y,
        i = new __recoveredScope.Ue().setFromObject(t),
        a = __recoveredScope.ht(__recoveredScope._t[this.spec.rider], r, i);
      t.scale.setScalar(a);
      t.position.y = -i.min.y * a;
      let o = new __recoveredScope.Oe();
      o.add(t);
      o.updateMatrixWorld(true);
      this.#t(n, __recoveredScope.hc[this.spec.pose]);
      this.root.add(o);
    }
    #t(e, t) {
      let n = t => e[t].getWorldPosition(new __recoveredScope.Vector3()),
        r = {};
      for (let [t, i] of Object.entries(e)) r[t] = {
        p: n(t),
        q: i.getWorldQuaternion(new __recoveredScope.T())
      };
      let i = (t, n) => {
          let i = e[t],
            a = n.clone().multiply(r[t].q);
          i.quaternion.copy(i.parent.getWorldQuaternion(__recoveredScope.xc).invert().multiply(a));
          i.updateMatrixWorld(true);
        },
        a = (e, t) => new __recoveredScope.Vector3().subVectors(r[t].p, r[e].p).normalize(),
        o = (e, t) => r[e].p.distanceTo(r[t].p),
        s = e.Hips,
        c = r.Hips.p.clone().setY(this.cushion + t.hips);
      s.position.copy(s.parent.worldToLocal(c));
      s.updateMatrixWorld(true);
      let l = e => new __recoveredScope.T().setFromAxisAngle(__recoveredScope.gc, t.lean * e);
      i(`Spine`, l(.5));
      i(`Spine1`, l(1));
      i(`Head`, l(t.head));
      for (let [e, r] of [[`Left`, 1], [`Right`, -1]]) {
        let s = n(`${e}UpLeg`),
          c = new __recoveredScope.Vector3(...t.ankles[r > 0 ? 0 : 1]);
        c.y += this.cushion;
        let l = new __recoveredScope.Vector3(t.knee[0] * r, t.knee[1], t.knee[2]),
          u = __recoveredScope.Dc(s, c, o(`${e}UpLeg`, `${e}Leg`), o(`${e}Leg`, `${e}Foot`), l),
          d = u.clone().sub(s).normalize(),
          f = c.clone().sub(u).normalize(),
          p = new __recoveredScope.Vector3().crossVectors(d, f).normalize();
        i(`${e}UpLeg`, __recoveredScope.Ec(a(`${e}UpLeg`, `${e}Leg`), __recoveredScope.gc, d, p));
        i(`${e}Leg`, __recoveredScope.Ec(a(`${e}Leg`, `${e}Foot`), __recoveredScope.gc, f, p));
        let m = f.clone().addScaledVector(__recoveredScope.vc, t.point).normalize();
        i(`${e}Foot`, __recoveredScope.Ec(a(`${e}Foot`, `${e}ToeBase`), __recoveredScope.gc, m, p));
        (this.knees ||= {})[e] = u;
      }
      for (let [e, r] of [[`Left`, 1], [`Right`, -1]]) {
        let s = n(`${e}Arm`),
          c = this.knees[e].clone().add(new __recoveredScope.Vector3(t.wrist[0] * r, t.wrist[1], t.wrist[2])),
          l = new __recoveredScope.Vector3(t.elbow[0] * r, t.elbow[1], t.elbow[2]),
          u = __recoveredScope.Dc(s, c, o(`${e}Arm`, `${e}ForeArm`), o(`${e}ForeArm`, `${e}Hand`), l),
          d = u.clone().sub(s).normalize(),
          f = c.clone().sub(u).normalize(),
          p = __recoveredScope._c.clone().multiplyScalar(-r),
          m = __recoveredScope._c.clone().negate(),
          h = new __recoveredScope.Vector3().crossVectors(d, f).normalize();
        i(`${e}Arm`, __recoveredScope.Ec(a(`${e}Arm`, `${e}ForeArm`), p, d, h));
        i(`${e}ForeArm`, __recoveredScope.Ec(a(`${e}ForeArm`, `${e}Hand`), m, f, m));
        let g = f.clone().lerp(__recoveredScope._c.clone().negate(), .6).normalize();
        i(`${e}Hand`, __recoveredScope.Ec(a(`${e}Hand`, `${e}HandMiddle1`), m, g, m));
      }
      let u = e.Head;
      this.head = {
        bone: u,
        q: u.getWorldQuaternion(new __recoveredScope.T()),
        parentQ: u.parent.getWorldQuaternion(new __recoveredScope.T()).invert(),
        at: n(`Head`)
      };
    }
    update(e, t, n = 7) {
      let r = this.head;
      if (!r) return;
      let i = 0,
        a = 0;
      if (t) {
        let e = this.root.worldToLocal(__recoveredScope.Cc.copy(t)).sub(r.at),
          o = Math.hypot(e.x, e.z),
          s = Math.atan2(e.x, e.z);
        o < n && Math.abs(s) < 2 && (i = __recoveredScope.MathUtils.clamp(s, -1.1, 1.1), a = __recoveredScope.MathUtils.clamp(Math.atan2(e.y, o), -.35, .45));
      }
      let o = 1 - Math.exp(-e * 4);
      this.look.yaw += (i - this.look.yaw) * o;
      this.look.pitch += (a - this.look.pitch) * o;
      __recoveredScope.xc.setFromEuler(__recoveredScope.Sc.set(-this.look.pitch, this.look.yaw, 0));
      r.bone.quaternion.copy(r.parentQ).multiply(__recoveredScope.xc).multiply(r.q);
    }
  };
}
/* Recovered binding kc. Live dependencies: . */
export function create_kc(__recoveredScope) {
  return [{
    id: `eric`,
    name: `Eric`,
    rider: `male`,
    pose: `crossLegged`,
    home: `summit:object-1`,
    lines: [`Hi, I'm Eric, the creator of this game! Follow me on X [@redknots](https://x.com/redknots) for updates.`]
  }];
}
/* Recovered binding jc. Live dependencies: . */
export function create_jc(__recoveredScope) {
  return function jc(e) {
    let t = [],
      n = /\[([^\]]+)\]\(([^)\s]+)\)/g,
      r = 0;
    for (let i of e.matchAll(n)) {
      i.index > r && t.push({
        text: e.slice(r, i.index)
      });
      t.push({
        text: i[1],
        href: i[2]
      });
      r = i.index + i[0].length;
    }
    return r < e.length && t.push({
      text: e.slice(r)
    }), {
      parts: t,
      length: t.reduce((e, t) => e + t.text.length, 0)
    };
  };
}
/* Recovered binding Mc. Live dependencies: jc, Ac. */
export function create_Mc(__recoveredScope) {
  return class {
    constructor(e = document.body) {
      this.el = document.createElement(`div`);
      this.el.id = `dialogue`;
      this.el.innerHTML = `<span class="who"></span><p class="line"></p><span class="more"><kbd>E</kbd>&nbsp;▸</span>`;
      this.whoEl = this.el.querySelector(`.who`);
      this.lineEl = this.el.querySelector(`.line`);
      this.el.addEventListener(`mousedown`, e => {
        e.target.closest(`a`) || e.preventDefault();
      });
      this.el.addEventListener(`click`, e => {
        e.target.closest(`a`) || this.next();
      });
      e.appendChild(this.el);
      this.lines = [];
      this.i = 0;
      this.shown = 0;
      this.onEnd = null;
    }
    get open() {
      return this.lines.length > 0;
    }
    say(e, t, n = null) {
      this.whoEl.textContent = e;
      this.lines = t.map(__recoveredScope.jc);
      this.onEnd = n;
      this.#e(0);
      this.el.classList.add(`show`);
    }
    next() {
      if (!this.open) return;
      let e = this.lines[this.i];
      this.shown < e.length ? (this.shown = e.length, this.#t()) : this.i + 1 < this.lines.length ? this.#e(this.i + 1) : this.close();
    }
    close() {
      if (!this.open) return;
      this.lines = [];
      this.el.classList.remove(`show`, `done`);
      let e = this.onEnd;
      this.onEnd = null;
      e?.();
    }
    update(e) {
      if (!this.open) return;
      let t = this.lines[this.i];
      if (this.shown >= t.length) return;
      let n = Math.floor(this.shown);
      this.shown = Math.min(t.length, this.shown + e * __recoveredScope.Ac);
      Math.floor(this.shown) !== n && this.#t();
    }
    #e(e) {
      this.i = e;
      this.shown = 0;
      this.#t();
    }
    #t() {
      let e = this.lines[this.i],
        t = Math.floor(this.shown);
      this.lineEl.replaceChildren();
      for (let {
        text: n,
        href: r
      } of e.parts) {
        if (t <= 0) break;
        let e = n.slice(0, t);
        if (t -= e.length, !r) {
          this.lineEl.append(e);
          continue;
        }
        let i = document.createElement(`a`);
        i.href = r;
        i.target = `_blank`;
        i.rel = `noopener`;
        i.textContent = e;
        this.lineEl.append(i);
      }
      this.el.classList.toggle(`done`, this.shown >= e.length);
    }
  };
}
/* Recovered binding Eh. Live dependencies: Sh, W, Th, physics, rider, Ch, wh. Writes: wh. */
export function create_Eh(__recoveredScope) {
  return function Eh(e) {
    __recoveredScope.Sh.update(e);
    let t = __recoveredScope.W === `ride` || __recoveredScope.W === `intro`;
    __recoveredScope.Th.copy(__recoveredScope.physics.pos).y += __recoveredScope.rider.locomotion === `walk` ? 1.6 : 1.4;
    for (let n of __recoveredScope.Ch) {
      let r = t && n.room.inside(__recoveredScope.physics.pos.x, __recoveredScope.physics.pos.z);
      r && !n.in && !__recoveredScope.wh && __recoveredScope.W === `ride` && (__recoveredScope.wh = n, __recoveredScope.Sh.say(n.spec.name, n.spec.lines, () => {
        __recoveredScope.wh = null;
      }));
      !r && __recoveredScope.wh === n && __recoveredScope.Sh.close();
      n.in = r;
      n.npc.update(e, t ? __recoveredScope.Th : null);
    }
  };
}
