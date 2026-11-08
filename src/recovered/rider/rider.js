/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Rider. Live dependencies: g, $, Qf, Q, W, uf, Tf, $d, ef, Vector3, vitePreload, __vite__mapDeps, Yf, Zf, d, $e, We, c, me, ot, Pf, createToonMaterial, Nf, st, He, Cd, Rd, Vd, Ld, Wd, Kf, Gf, Gd, zd, Lf, Hf, Rf, zf, Bf, Uf, Vf, Wf, qd, Jd, If, solveArmReachAngle, bt, yt, xt, vt, qf, Jf. */
export function create_Rider(__recoveredScope) {
  return class {
    constructor({
      model: e = false
    } = {}) {
      this.root = new __recoveredScope.g();
      this.edge = new __recoveredScope.g();
      this.root.add(this.edge);
      this.proceduralBoard = new __recoveredScope.g();
      this.edge.add(this.proceduralBoard);
      this.board = __recoveredScope.$(__recoveredScope.Qf(), __recoveredScope.Q.board, this.proceduralBoard, 0, 0, 0);
      this.board.receiveShadow = true;
      let t = __recoveredScope.$(new __recoveredScope.W(.24, .006, 1), __recoveredScope.Q.boardBase, this.proceduralBoard, 0, -.002, 0);
      t.castShadow = false;
      this.body = new __recoveredScope.g();
      this.body.rotation.y = Math.PI / 2;
      this.edge.add(this.body);
      this.classic = new __recoveredScope.g();
      this.body.add(this.classic);
      this.bindings = [];
      this.boots = [];
      this.#r();
      this.stance = this.feet.map(e => e.position.clone());
      this.bindingAt = this.bindings.map(e => e.position.clone());
      this.gear = `board`;
      this.skiPose = new __recoveredScope.uf();
      this.boardPose = new __recoveredScope.Tf();
      this.skis = this.feet.map(e => {
        let t = __recoveredScope.$d();
        return t.position.z = .02, e.add(t), t;
      });
      this.poles = [__recoveredScope.ef(), __recoveredScope.ef()];
      this.body.add(...this.poles);
      for (let e of [...this.skis, ...this.poles]) e.visible = false;
      this.kneeShift = 0;
      this.mitts = [new __recoveredScope.Vector3(), new __recoveredScope.Vector3()];
      this.handSpots = null;
      this.seat = null;
      this.reach = null;
      this.reachW = 0;
      this.reachAt = new __recoveredScope.Vector3();
      this.reachLeft = false;
      this.throwT = null;
      this.pose = {
        crouch: .4,
        lean: 0,
        twist: 0,
        armSwing: 0,
        air: 0,
        tumble: 0
      };
      this.t = 0;
      this.model = null;
      this.base = null;
      this.outfit = null;
      this.modelId = `classic`;
      this.locomotion = `ride`;
      this.act = null;
      this.models = new Map();
      this.outfits = new Map();
      this.selection = 0;
      e && this.selectModel(e === true ? `male` : e).catch(e => console.warn(`Rider model unavailable.`, e));
    }
    async selectModel(e) {
      let t = ++this.selection,
        n = null;
      if (e !== `classic` && (this.models.has(e) || this.models.set(e, __recoveredScope.vitePreload(async () => {
        let {
          RIDER_MODELS: e,
          loadRiderModel: t,
          loadRiderLocomotion: n,
          loadPitching: r,
          loadIdle: i,
          loadChairSitting: a,
          RiderModel: o
        } = await import(`./model-lazy.js`);
        return {
          RIDER_MODELS: e,
          loadRiderModel: t,
          loadRiderLocomotion: n,
          loadPitching: r,
          loadIdle: i,
          loadChairSitting: a,
          RiderModel: o
        };
      }, __recoveredScope.__vite__mapDeps([0, 1, 2, 3, 4, 5, 6]), import.meta.url).then(async ({
        RIDER_MODELS: t,
        loadRiderModel: n,
        loadRiderLocomotion: r,
        loadPitching: i,
        loadIdle: a,
        loadChairSitting: o,
        RiderModel: s
      }) => {
        let c = t[e].walkFrom,
          [l, u, d, f, p] = await Promise.all([n(e), c ? r(c) : null, i().catch(e => (console.warn(`Pitching animation unavailable; using procedural throw.`, e), null)), a().catch(e => (console.warn(`Idle animation unavailable.`, e), null)), e === `female` ? o().catch(e => (console.warn(`Chair animation unavailable; using seated pose.`, e), null)) : null]);
        return new s(l, e, {
          borrow: u,
          pitching: d,
          idle: f,
          chair: p
        });
      }).catch(t => {
        throw this.models.delete(e), t;
      })), n = await this.models.get(e), this.boardAssembly ||= (this.boardLoading ||= __recoveredScope.vitePreload(async () => {
        let {
          makeStockBoard: e
        } = await import(`./gear-mount.js`);
        return {
          makeStockBoard: e
        };
      }, __recoveredScope.__vite__mapDeps([7, 2, 4, 5]), import.meta.url).then(({
        makeStockBoard: e
      }) => {
        let t = e(this.stance);
        return t.visible = false, this.body.add(t), t;
      }).catch(e => {
        throw this.boardLoading = null, e;
      }), await this.boardLoading)), t !== this.selection) return false;
      this.locomotion !== `sit` && this.setLocomotion(`ride`);
      this.model && this.body.remove(this.model.root);
      this.model = this.base = n;
      this.outfit = null;
      this.modelId = e;
      n && this.body.add(n.root);
      this.classic.visible = !n;
      for (let e of this.boots) e.visible = !n;
      return this.#n(), true;
    }
    get build() {
      return this.model?.build ?? __recoveredScope.Yf;
    }
    get canWalk() {
      return !!this.base?.canWalk;
    }
    preloadOutfit(e) {
      e && this.base && this.#e(e);
    }
    outfitModel(e) {
      return this.base && this.outfits.get(`${this.modelId}:${e}`)?.model || null;
    }
    async loadOutfit(e) {
      let t = this.modelId,
        n = e ? this.base && (await this.#e(e).promise) : this.base;
      return !!n && t === this.modelId && n !== this.model;
    }
    wear(e) {
      let t = e ? this.base && this.#e(e).model : this.base;
      return !t || t === this.model ? false : (this.body.remove(this.model.root), this.model = t, this.outfit = e, this.body.add(t.root), t.snapTo(this.locomotion, this.locomotion === `act` ? this.act.clip : null), t.update(0, this, this.locomotion, 0), true);
    }
    #e(e) {
      let t = this.modelId,
        n = this.base,
        r = `${t}:${e}`,
        i = this.outfits.get(r);
      return i || (i = {
        model: null
      }, i.promise = __recoveredScope.vitePreload(async () => {
        let {
          RIDER_MODELS: e,
          loadRiderModel: t,
          loadPitching: n,
          loadIdle: r,
          RiderModel: i
        } = await import(`./model-lazy.js`);
        return {
          RIDER_MODELS: e,
          loadRiderModel: t,
          loadPitching: n,
          loadIdle: r,
          RiderModel: i
        };
      }, __recoveredScope.__vite__mapDeps([0, 1, 2, 3, 4, 5, 6]), import.meta.url).then(async ({
        RIDER_MODELS: r,
        loadRiderModel: a,
        loadPitching: o,
        loadIdle: s,
        RiderModel: c
      }) => {
        if (!r[t].outfits?.[e]) return null;
        let [l, u, d] = await Promise.all([a(t, e), o().catch(e => (console.warn(`Pitching animation unavailable; using procedural throw.`, e), null)), s().catch(e => (console.warn(`Idle animation unavailable.`, e), null))]);
        return i.model = new c(l, t, {
          outfit: e,
          fit: n,
          pitching: u,
          idle: d
        }), i.model;
      }).catch(n => (console.warn(`No ${e} outfit for the ${t} rider; keeping their own clothes.`, n), null)), this.outfits.set(r, i)), i;
    }
    setLocomotion(e, t = this.seat) {
      if (e === `walk` && !this.canWalk || e === `sit` && !t || e === `act` && !(this.model && this.act)) return false;
      this.seat = t;
      e !== `sit` && this.#t();
      this.locomotion = e;
      let n = e === `sit` && !!t?.lift;
      return this.proceduralBoard.position.set(0, n ? -.48 : 0, n ? -.48 : 0), this.proceduralBoard.rotation.y = n ? Math.PI / 2 : 0, this.skiPose.snap = this.boardPose.snap = true, this.#n(), true;
    }
    play(e, t) {
      return this.act = {
        clip: e,
        time: t
      }, this.locomotion === `act` || this.setLocomotion(`act`);
    }
    setGear(e) {
      this.gear = e === `ski` ? `ski` : `board`;
      this.skiPose.snap = this.boardPose.snap = true;
      this.locomotion !== `sit` && this.#t();
      this.#n();
    }
    get skiing() {
      return this.gear === `ski` && this.locomotion === `ride`;
    }
    #t() {
      this.feet.forEach((e, t) => {
        e.position.copy(this.stance[t]);
        e.rotation.set(0, 0, 0);
      });
    }
    #n() {
      let e = this.locomotion === `ride`,
        t = this.locomotion === `sit` && !!this.seat?.lift,
        n = (e || t) && this.gear !== `ski`;
      this.modelId;
      let r = this.modelId === `classic` ? null : this.boardAssembly;
      this.boardAssembly && (this.boardAssembly.position.set(0, t ? -.48 : 0, t ? .48 : 0), this.boardAssembly.visible = n && !!r);
      r && r.wear(this.modelId);
      this.proceduralBoard.visible = n && !r;
      for (let e of this.bindings) e.visible = n && !r;
      for (let n of this.skis) n.visible = (e || t) && this.gear === `ski`;
      for (let t of this.poles) t.visible = e && this.gear === `ski`;
      for (let e of this.boots) e.visible = !this.model && this.locomotion !== `walk`;
    }
    #r() {
      let e = this.body;
      this.feet = [.26, -.26].map(t => {
        let n = new __recoveredScope.g();
        return n.position.set(t, .025, 0), e.add(n), this.boots.push(__recoveredScope.$(new __recoveredScope.W(.17, .16, .33), __recoveredScope.Q.black, n, 0, .09, .02), __recoveredScope.$(new __recoveredScope.W(.19, .05, .12), __recoveredScope.Q.orange, n, 0, .15, .05), __recoveredScope.$(new __recoveredScope.W(.19, .04, .07), __recoveredScope.Q.orange, n, 0, .12, .15)), this.bindings.push(__recoveredScope.$(new __recoveredScope.W(.18, .035, .35), __recoveredScope.Q.orange, n, 0, .015, .02)), this.bindings.push(__recoveredScope.$(new __recoveredScope.W(.18, .26, .05), __recoveredScope.Q.orange, n, 0, .17, -.16)), n;
      });
      let t = this.classic;
      this.thighs = [1, -1].map(e => new __recoveredScope.Zf(t, .135, .15, __recoveredScope.Q.navy, {
        top: {
          len: .55,
          mat: __recoveredScope.Q.cream
        },
        pipe: {
          side: e,
          mat: __recoveredScope.Q.piping
        }
      }));
      this.shins = [1, -1].map(e => new __recoveredScope.Zf(t, .135, .14, __recoveredScope.Q.navy, {
        pipe: {
          side: e,
          mat: __recoveredScope.Q.piping
        }
      }));
      this.cuffs = [0, 1].map(() => __recoveredScope.$(new __recoveredScope.d(.145, .14, .08, 9), __recoveredScope.Q.black, t));
      this.knees = [0, 1].map(() => __recoveredScope.$(new __recoveredScope.$e(.14, 9, 7), __recoveredScope.Q.navy, t));
      this.hips = new __recoveredScope.g();
      t.add(this.hips);
      __recoveredScope.$(new __recoveredScope.$e(.2, 10, 8).scale(1.25, .75, .95), __recoveredScope.Q.navy, this.hips);
      __recoveredScope.$(new __recoveredScope.$e(.205, 12, 8, Math.PI / 2 - 1.2, 2.4, .5, 1.6).scale(1.25, .75, .95), __recoveredScope.Q.cream, this.hips);
      this.torso = new __recoveredScope.g();
      this.torso.position.y = .04;
      this.hips.add(this.torso);
      let n = this.torso;
      __recoveredScope.$(new __recoveredScope.d(.245, .26, .2, 12), __recoveredScope.Q.navy, n, 0, .1, 0);
      __recoveredScope.$(new __recoveredScope.We(.225, .08, 4, 12), __recoveredScope.Q.cream, n, 0, .3, 0).scale.set(1.08, 1, .95);
      __recoveredScope.$(new __recoveredScope.W(.014, .19, .02), __recoveredScope.Q.piping, n, 0, .1, .258);
      __recoveredScope.$(new __recoveredScope.W(.012, .3, .02), __recoveredScope.Q.navy, n, 0, .36, .215);
      __recoveredScope.$(new __recoveredScope.d(.13, .17, .11, 12), __recoveredScope.Q.cream, n, 0, .55, 0);
      __recoveredScope.$(new __recoveredScope.$e(.15, 10, 8).scale(1.2, .75, .8), __recoveredScope.Q.cream, n, 0, .55, -.11);
      for (let e of [-.13, .13]) {
        let t = __recoveredScope.$(new __recoveredScope.W(.032, .24, .02), __recoveredScope.Q.black, n, e, .42, .2);
        t.rotation.x = -.35;
      }
      __recoveredScope.$(new __recoveredScope.W(.28, .025, .02), __recoveredScope.Q.black, n, 0, .37, .222);
      __recoveredScope.$(new __recoveredScope.d(.04, .04, .02, 14), __recoveredScope.Q.yellow, n, -.12, .44, .22).rotation.x = Math.PI / 2;
      __recoveredScope.$(new __recoveredScope.W(.09, .13, .05), __recoveredScope.Q.black, n, .12, .31, .235);
      __recoveredScope.$(new __recoveredScope.W(.02, .07, .01), __recoveredScope.Q.orange, n, .12, .31, .262);
      __recoveredScope.$(new __recoveredScope.W(.38, .46, .17), __recoveredScope.Q.black, n, 0, .31, -.27);
      __recoveredScope.$(new __recoveredScope.W(.4, .1, .19), __recoveredScope.Q.black, n, 0, .53, -.27);
      for (let e of [-.195, .195]) {
        __recoveredScope.$(new __recoveredScope.W(.02, .07, .03), __recoveredScope.Q.orange, n, e, .42, -.22);
        __recoveredScope.$(new __recoveredScope.W(.02, .06, .03), __recoveredScope.Q.orange, n, e, .18, -.22);
      }
      let r = new __recoveredScope.c(new __recoveredScope.me(.17, .34), new __recoveredScope.ot({
        map: __recoveredScope.Pf()
      }));
      r.position.set(0, .29, -.357);
      r.rotation.y = Math.PI;
      n.add(r);
      this.head = new __recoveredScope.g();
      this.head.position.y = .56;
      n.add(this.head);
      let i = this.head;
      __recoveredScope.$(new __recoveredScope.$e(.19, 24, 16), __recoveredScope.createToonMaterial({
        map: __recoveredScope.Nf()
      }, {
        rim: 1,
        hatch: 0
      }), i, 0, .19, 0).scale.set(1.04, 1, .98);
      for (let e of [-1, 1]) __recoveredScope.$(new __recoveredScope.$e(.042, 8, 6), __recoveredScope.Q.skin, i, e * .19, .17, 0);
      __recoveredScope.$(new __recoveredScope.$e(.203, 18, 12, Math.PI / 2 + .95, Math.PI * 2 - 1.9, 0, Math.PI * .64), __recoveredScope.Q.hair, i, 0, .195, -.004).scale.set(1.06, 1.02, 1.04);
      let a = (e, t, n, r, a, o, s = __recoveredScope.Q.hair) => {
        __recoveredScope.$(new __recoveredScope.st(.045 * o, .13 * o, 5).rotateX(Math.PI), s, i, e, t, n).rotation.set(r, 0, a);
      };
      for (let e = -3; e <= 3; e++) {
        let t = e * .21;
        a(Math.sin(t) * .18, .265 - Math.abs(e) * .008, Math.cos(t) * .18, -.55, -t * .6, 1 - Math.abs(e) * .06, e % 2 ? __recoveredScope.Q.hairDark : __recoveredScope.Q.hair);
      }
      for (let e of [-1, 1]) {
        a(e * .2, .21, .06, .1, e * .9, 1.1);
        a(e * .21, .16, -.04, -.1, e * 1.4, 1, __recoveredScope.Q.hairDark);
        a(e * .15, .09, -.14, .7, e * 1.1, 1.1);
      }
      a(0, .07, -.18, 1.1, 0, 1.2);
      __recoveredScope.$(new __recoveredScope.$e(.222, 20, 12, 0, Math.PI * 2, 0, Math.PI * .47), __recoveredScope.Q.cream, i, 0, .22, -.012).scale.set(1.05, 1.3, 1.08);
      __recoveredScope.$(new __recoveredScope.$e(.15, 12, 9), __recoveredScope.Q.cream, i, 0, .42000000000000004, -.07).scale.set(1.2, .85, 1.2);
      let o = __recoveredScope.$(new __recoveredScope.He(.228, .012, 5, 28), __recoveredScope.Q.black, i, 0, .29000000000000004, -.01);
      o.rotation.x = Math.PI / 2 + .18;
      o.scale.set(1.04, 1.07, 1);
      for (let e of [-1, 1]) {
        let t = __recoveredScope.$(new __recoveredScope.He(.024, .006, 5, 12), __recoveredScope.Q.piping, i, e * .24, .28500000000000003, -.03);
        t.rotation.y = Math.PI / 2;
      }
      let s = new __recoveredScope.g();
      s.position.set(0, .32, -.01);
      s.rotation.x = -.18;
      i.add(s);
      __recoveredScope.$(new __recoveredScope.d(.236, .236, .125, 18, 1, true, -.82, 1.64), __recoveredScope.Q.black, s);
      __recoveredScope.$(new __recoveredScope.d(.243, .243, .095, 18, 1, true, -.74, 1.48), __recoveredScope.Q.lens, s);
      __recoveredScope.$(new __recoveredScope.W(.12, .01, .012), __recoveredScope.Q.lensGlint, s, .07, .02, .233).rotation.z = -.12;
      __recoveredScope.$(new __recoveredScope.W(.07, .008, .012), __recoveredScope.Q.lensGlint, s, -.09, -.015, .226).rotation.z = -.12;
      let l = e => {
        let t = new __recoveredScope.g();
        t.position.set(.26 * e, .43, 0);
        n.add(t);
        __recoveredScope.$(new __recoveredScope.$e(.105, 9, 7), __recoveredScope.Q.cream, t);
        __recoveredScope.$(new __recoveredScope.d(.095, .1, .22, 9).translate(0, -.11, 0), __recoveredScope.Q.cream, t);
        let r = new __recoveredScope.g();
        return r.position.y = -.22, t.add(r), __recoveredScope.$(new __recoveredScope.$e(.098, 9, 7), __recoveredScope.Q.navy, r), __recoveredScope.$(new __recoveredScope.d(.105, .1, .2, 9).translate(0, -.1, 0), __recoveredScope.Q.navy, r), __recoveredScope.$(new __recoveredScope.$e(.085, 9, 7).scale(.95, 1.15, .85), __recoveredScope.Q.black, r, 0, -.25, .01), {
          sh: t,
          el: r
        };
      };
      this.armL = l(1);
      this.armR = l(-1);
      __recoveredScope.$(new __recoveredScope.W(.01, .07, .08), __recoveredScope.Q.patch, this.armL.sh, .1, -.08, 0);
    }
    update(e, t) {
      this.t += e;
      this.bindings.forEach((e, t) => {
        e.position.copy(this.bindingAt[t]);
        e.quaternion.identity();
      });
      let n = this.pose,
        r = 1 - Math.exp(-e * 10);
      n.crouch += (t.crouch - n.crouch) * r;
      n.lean += (t.lean - n.lean) * (1 - Math.exp(-e * 8));
      n.twist += (t.twist - n.twist) * r;
      n.air += (+!!t.air - n.air) * (1 - Math.exp(-e * 6));
      let i = this.locomotion === `sit`,
        a = this.skiing;
      i ? this.#d(n) : a ? this.#s(e, t) : this.#i(e, t);
      let o = t.protective || 0;
      this.torso.rotation.x += o * .2;
      this.head.rotation.x += o * .25;
      for (let e of [this.armL, this.armR]) {
        e.sh.rotation.z *= 1 - o * .7;
        e.el.rotation.x += (-1.6 - e.el.rotation.x) * o;
      }
      let c = !!this.fall;
      this.fall = t.fall ? __recoveredScope.Cd(t.fall.time, t.fall.motion) : null;
      c && !this.fall && this.model?.fadeFromPose();
      this.fall ? __recoveredScope.Rd(this, this.fall) : t.shakeTime != null && __recoveredScope.Vd(this, t.shakeTime);
      let l = new __recoveredScope.Vector3(0, 0, 1);
      this.kneeOut = i ? this.seat.kneeOut ?? .45 : a ? this.skiPose.x.kneeOut : this.boardPose.x.kneeOut;
      this.kneeShift = i ? 0 : a ? this.skiPose.x.kneeShift : this.boardPose.x.kneeShift;
      for (let e = 0; e < 2; e++) {
        let t = e === 0 ? 1 : -1,
          n = new __recoveredScope.Vector3(.12 * t, 0, 0).applyEuler(this.hips.rotation).add(this.hips.position),
          r = this.feet[e].position.clone().add(new __recoveredScope.Vector3(0, .15, 0)),
          i = .3,
          a = n.clone().sub(r),
          o = Math.min(a.length(), 2 * i - .001),
          c = r.clone().addScaledVector(a.normalize(), o / 2),
          u = l.clone().addScaledVector(a, -l.dot(a)).normalize();
        u.x += t * this.kneeOut + this.kneeShift;
        u.normalize();
        let d = c.addScaledVector(u, Math.sqrt(i * i - (o / 2) ** 2));
        this.thighs[e].set(d, n);
        this.shins[e].set(r, d);
        this.knees[e].position.copy(d);
        this.cuffs[e].position.copy(r).add(new __recoveredScope.Vector3(0, .02, 0));
      }
      i && (this.#m(this.armL, this.seat.grips[0], 1), this.#m(this.armR, this.seat.grips[1], -1));
      this.reach && this.reachAt.copy(this.reach);
      this.reachW += ((this.reach && !i ? 1 : 0) - this.reachW) * (1 - Math.exp(-e * 6));
      this.reachW < .001 && (this.reachW = 0);
      this.throwT !== null && (this.throwT += e, (this.throwT >= this.throwLength || i) && (this.throwT = null));
      this.throwT !== null && this.locomotion === `ride` ? this.#f(this.throwT) : this.reachW > 0 && this.locomotion === `ride` && this.#p();
      this.body.rotation.x = 0;
      this.fall ? __recoveredScope.Ld(this.edge, this.fall) : __recoveredScope.Wd(this.edge, t.roll ?? n.tumble, .65);
      let u = this.locomotion === `walk` || this.locomotion === `act`,
        d = u || i || a && !this.fall ? Math.PI : Math.PI / 2;
      this.body.rotation.y += (d - this.body.rotation.y) * Math.min(1, e / .08);
      u || i ? (this.edge.rotation.set(0, 0, 0), this.edge.position.set(0, 0, 0)) : !a && !this.fall && (this.edge.position.y += __recoveredScope.Kf + __recoveredScope.Gf * Math.abs(Math.sin(this.edge.rotation.z)));
      this.handSpots = this.locomotion === `ride` && !this.fall ? [this.#l(this.armL, this.mitts[0]), this.#l(this.armR, this.mitts[1])] : null;
      this.model?.update(e, this, this.locomotion, t.speed || 0);
      a && this.#c();
    }
    clearGround(e, t = false) {
      let n = __recoveredScope.Gd(this.root, e, t),
        r = this.fall?.hands;
      return r && this.model && (r[0][0] > 0 || r[1][0] > 0) && (r.forEach((t, n) => {
        t[0] > 0 && this.model.plantHand(__recoveredScope.zd(this.root, t, e), t[0], n ? `Right` : `Left`);
      }), __recoveredScope.Gd(this.root, e)), n;
    }
    #i(e, t) {
      this.#t();
      let n = this.boardPose.update(e, t, this.t);
      this.#a(this.boardPose.back);
      this.edge.rotation.z = n.edge;
      this.hips.position.set(n.px, n.py, n.pz);
      this.hips.rotation.set(n.pPitch, n.pYaw, n.pRoll);
      this.torso.rotation.set(n.tPitch, n.tYaw, n.tRoll);
      this.#o(n);
      let r = this.hips.position;
      this.#m(this.armL, __recoveredScope.Lf.set(n.hlx, n.hly, n.hlz).add(r), 1);
      this.#m(this.armR, __recoveredScope.Lf.set(n.hrx, n.hry, n.hrz).add(r), -1);
    }
    #a(e) {
      if (e.w < .001) return;
      let t = this.feet[1],
        n = this.stance[1],
        r = e.w;
      t.position.set(n.x + (e.x - n.x) * r, n.y + (e.y - n.y) * r + .28 * r * (1 - r), n.z + (e.z - n.z) * r);
      t.rotation.set(e.pitch * r, e.yaw * r, 0, `YXZ`);
      __recoveredScope.Hf.copy(t.quaternion).invert();
      for (let e of [2, 3]) {
        let r = this.bindings[e];
        r.position.copy(this.bindingAt[e]).add(n).sub(t.position).applyQuaternion(__recoveredScope.Hf);
        r.quaternion.copy(__recoveredScope.Hf);
      }
    }
    #o(e) {
      let t = Math.cos(e.gPitch);
      __recoveredScope.Rf.set(-Math.sin(e.gYaw) * t, -Math.sin(e.gPitch), -Math.cos(e.gYaw) * t);
      __recoveredScope.zf.crossVectors(__recoveredScope.Bf.set(-Math.sin(e.gTilt), Math.cos(e.gTilt), 0), __recoveredScope.Rf).normalize();
      __recoveredScope.Bf.crossVectors(__recoveredScope.Rf, __recoveredScope.zf);
      __recoveredScope.Hf.setFromEuler(__recoveredScope.Uf.set(0, 0, e.edge)).multiply(this.body.quaternion).multiply(this.hips.quaternion).multiply(this.torso.quaternion).invert();
      this.head.quaternion.setFromRotationMatrix(__recoveredScope.Vf.makeBasis(__recoveredScope.zf, __recoveredScope.Bf, __recoveredScope.Rf)).premultiply(__recoveredScope.Hf);
      let n = 2 * Math.acos(Math.min(1, Math.abs(this.head.quaternion.w)));
      n > __recoveredScope.Wf && this.head.quaternion.slerp(__recoveredScope.Hf.identity(), 1 - __recoveredScope.Wf / n);
    }
    #s(e, t) {
      let n = this.skiPose.update(e, {
        lean: t.lean || 0,
        speed: t.speed || 0,
        air: !!t.air,
        brake: !!t.brake,
        tuck: !!t.tuck,
        charge: t.charge || 0,
        slip: t.slip || 0,
        landing: t.landing || 0,
        skate: t.skate
      }, this.t);
      this.edge.rotation.z = n.roll;
      this.hips.position.set(n.px, n.py, n.pz);
      this.hips.rotation.set(n.pPitch, n.pYaw, n.pRoll);
      this.torso.rotation.set(n.tPitch, n.tYaw, n.tRoll);
      this.head.rotation.set(n.hPitch, n.hYaw, n.hRoll);
      let r = Math.tan(n.roll);
      for (let [e, t] of [[this.feet[0], `l`], [this.feet[1], `r`]]) {
        let i = n[t + `x`];
        e.position.set(i, __recoveredScope.qd.sole + n[t + `y`] + i * r, n[t + `z`]);
        e.rotation.set(n[t + `Pitch`], n[t + `Yaw`], n[t + `Roll`], `YXZ`);
      }
      let i = this.hips.position;
      this.#m(this.armL, __recoveredScope.Lf.set(n.hlx, n.hly, n.hlz).add(i), 1);
      this.#m(this.armR, __recoveredScope.Lf.set(n.hrx, n.hry, n.hrz).add(i), -1);
    }
    #c() {
      let e = this.skiPose.x,
        t = this.fall ? 0 : Math.tan(e.roll);
      this.body.updateMatrixWorld(true);
      for (let [n, r, i] of [[0, `Left`, `pl`], [1, `Right`, `pr`]]) {
        let a = this.poles[n],
          o = this.body.worldToLocal(this.#u(r, __recoveredScope.Lf)),
          s = __recoveredScope.Rf.set(e[i + `x`], e[i + `y`], e[i + `z`]).sub(o).normalize(),
          c = __recoveredScope.Jd.length,
          l = (o.x + s.x * c) * t;
        if (o.y + s.y * c < l) {
          let e = Math.hypot(s.x, s.z) || 1,
            t = Math.max(-1, (l - o.y) / c),
            n = Math.sqrt(1 - t * t) / e;
          s.set(s.x * n, t, s.z * n);
        }
        a.position.copy(o);
        a.quaternion.setFromUnitVectors(__recoveredScope.If, s);
      }
    }
    #l(e, t) {
      return e.el.updateWorldMatrix(true, false), this.body.worldToLocal(e.el.localToWorld(t.set(0, -.25, .01)));
    }
    #u(e, t) {
      if (this.model) return this.model.palmAt(e, t);
      let n = (e === `Left` ? this.armL : this.armR).el;
      return n.updateWorldMatrix(true, false), n.localToWorld(t.set(0, -.25, .01));
    }
    #d(e) {
      let t = this.seat,
        {
          build: n
        } = this;
      this.hips.position.copy(t.hips);
      this.hips.position.y += n.seat;
      let r = t.tilt,
        i = t.look;
      this.hips.rotation.set(r?.x ?? 0, r?.y ?? 0, r?.z ?? 0);
      let a = t.fold ?? __recoveredScope.solveArmReachAngle(n, this.hips.position, t.grips[0]);
      this.torso.rotation.set(a, e.twist * .12, -e.lean);
      this.head.rotation.set(-a * .85 + (i?.x ?? 0), -e.twist * .15 + (i?.y ?? 0), e.lean * .6 + (i?.z ?? 0));
      this.feet.forEach((e, n) => {
        e.position.copy(t.feet[n]);
        e.rotation.set(0, t.toes?.[n] ?? 0, 0);
      });
    }
    startThrow() {
      if (this.locomotion !== `ride` && this.locomotion !== `walk`) return false;
      let e = this.locomotion === `walk` ? this.model?.pitching : null;
      return this.throwLength = e?.clip.duration ?? __recoveredScope.bt.length, this.throwRelease = e ? 1.6 : __recoveredScope.bt.release, this.throwUsesPitch = !!e, this.throwT = 0, true;
    }
    hand(e = new __recoveredScope.Vector3()) {
      return this.model ? this.model.handAt(e) : (this.armR.el.updateWorldMatrix(true, false), this.armR.el.localToWorld(e.set(0, -.25, .01)));
    }
    #f(e) {
      let t = __recoveredScope.yt(__recoveredScope.xt, e),
        n = __recoveredScope.vt(e),
        {
          sh: r,
          el: i
        } = this.armR;
      this.torso.rotation.y += t.turn * n;
      this.head.rotation.y -= t.turn * n * .7;
      let a = r.quaternion.clone(),
        o = i.quaternion.clone();
      this.root.updateMatrixWorld(true);
      this.body.updateMatrixWorld(true);
      let c = this.body.worldToLocal(r.getWorldPosition(__recoveredScope.Lf)).add(new __recoveredScope.Vector3().fromArray(t.rh));
      this.#m(this.armR, c, -1);
      r.quaternion.slerpQuaternions(a, r.quaternion.clone(), n);
      i.quaternion.slerpQuaternions(o, i.quaternion.clone(), n);
    }
    #p() {
      let e = this.reachW,
        {
          sh: t,
          el: n
        } = this.armR;
      this.torso.rotation.x += .25 * e;
      let r = t.quaternion.clone(),
        i = n.quaternion.clone();
      this.root.updateMatrixWorld(true);
      this.#m(this.armR, this.body.worldToLocal(__recoveredScope.Lf.copy(this.reachAt)), -1);
      t.quaternion.slerpQuaternions(r, t.quaternion.clone(), e);
      n.quaternion.slerpQuaternions(i, n.quaternion.clone(), e);
    }
    #m(e, t, n) {
      this.body.updateMatrixWorld(true);
      let r = this.body.worldToLocal(e.sh.getWorldPosition(new __recoveredScope.Vector3())),
        i = t.clone().sub(r),
        a = Math.min(i.length(), .4699);
      i.normalize();
      let o = (__recoveredScope.qf ** 2 - __recoveredScope.Jf ** 2 + a ** 2) / (2 * a),
        c = Math.sqrt(Math.max(0, __recoveredScope.qf ** 2 - o ** 2)),
        l = new __recoveredScope.Vector3(n * .5, -.45, -.75);
      l.addScaledVector(i, -l.dot(i));
      l.length() < .4 && (l.x += n * .8);
      l.addScaledVector(i, -l.dot(i)).normalize();
      let u = r.clone().addScaledVector(i, o).addScaledVector(l, c),
        d = r.clone().addScaledVector(i, a),
        f = this.hips.quaternion.clone().multiply(this.torso.quaternion).invert();
      e.sh.quaternion.setFromUnitVectors(__recoveredScope.If, u.clone().sub(r).normalize().applyQuaternion(f));
      f.premultiply(e.sh.quaternion.clone().invert());
      e.el.quaternion.setFromUnitVectors(__recoveredScope.If, d.sub(u).normalize().applyQuaternion(f));
    }
  };
}
