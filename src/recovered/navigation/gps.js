/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding $c. Live dependencies: . */
export function create_Dollarc(__recoveredScope) {
  return class {
    constructor(e) {
      this.key = e;
      this.a = [];
    }
    get size() {
      return this.a.length;
    }
    push(e) {
      let t = this.a,
        n = this.key;
      t.push(e);
      for (let e = t.length - 1; e > 0;) {
        let r = e - 1 >> 1;
        if (n[t[r]] <= n[t[e]]) break;
        [t[r], t[e]] = [t[e], t[r]];
        e = r;
      }
    }
    pop() {
      let e = this.a,
        t = this.key,
        n = e[0],
        r = e.pop();
      if (e.length) {
        e[0] = r;
        for (let n = 0;;) {
          let r = n * 2 + 1,
            i = r + 1,
            a = n;
          if (r < e.length && t[e[r]] < t[e[a]] && (a = r), i < e.length && t[e[i]] < t[e[a]] && (a = i), a === n) break;
          [e[a], e[n]] = [e[n], e[a]];
          n = a;
        }
      }
      return n;
    }
  };
}
/* Recovered binding el. Live dependencies: Gc, Kc, Yc, qc, Qc, Xc, Jc, serviceCentreLocations, Zc, $c. */
export function create_el(__recoveredScope) {
  return class {
    constructor({
      hf: e,
      runs: t,
      rides: n
    }) {
      this.hf = e;
      this.runs = t;
      this.rides = n;
      this.x = [];
      this.z = [];
      this.y = [];
      this.info = [];
      this.out = [];
      this.runNodes = [];
      this.#n();
      this.#r();
      this.#a();
      this.#c();
      this.#l();
    }
    #e(e, t, n) {
      let r = this.x.length;
      return this.x.push(e), this.z.push(t), this.y.push(this.hf.heightAt(e, t)), this.info.push(n), this.out.push([]), r;
    }
    #t(e, t, n, r, i = null) {
      this.out[e].push({
        to: t,
        cost: n,
        kind: r,
        ref: i
      });
    }
    dist(e, t) {
      return Math.hypot(this.x[e] - this.x[t], this.z[e] - this.z[t]);
    }
    #n() {
      let {
        hf: e
      } = this;
      this.runs.forEach((t, n) => {
        let r = t.points;
        if (r.length < 2) return;
        e.heightAt(...r[0]) < e.heightAt(...r[r.length - 1]) && (r = [...r].reverse());
        let i = [],
          a = (e, t) => i.push(this.#e(e, t, {
            kind: `run`,
            run: n
          }));
        a(...r[0]);
        for (let e = 0; e < r.length - 1; e++) {
          let [t, n] = r[e],
            [i, o] = r[e + 1],
            s = Math.hypot(i - t, o - n),
            c = Math.max(1, Math.round(s / __recoveredScope.Gc));
          for (let e = 1; e <= c; e++) a(t + (i - t) * e / c, n + (o - n) * e / c);
        }
        let o = __recoveredScope.Kc[t.difficulty] || __recoveredScope.Kc.intermediate;
        for (let e = 0; e < i.length - 1; e++) {
          let t = i[e],
            r = i[e + 1],
            a = this.dist(t, r);
          this.#t(t, r, a / o, `run`, n);
          this.y[t] < this.y[r] - 2 && this.#t(r, t, a / o, `run`, n);
        }
        this.runNodes.push(i);
      });
      this.runCount = this.x.length;
    }
    #r() {
      this.cell = 60;
      this.grid = new Map();
      for (let e = 0; e < this.runCount; e++) {
        let t = this.#i(this.x[e], this.z[e]);
        this.grid.has(t) || this.grid.set(t, []);
        this.grid.get(t).push(e);
      }
    }
    #i(e, t) {
      return `${Math.floor(e / this.cell)},${Math.floor(t / this.cell)}`;
    }
    near(e, t, n) {
      let r = this.cell,
        i = [];
      for (let a = Math.floor((e - n) / r); a <= Math.floor((e + n) / r); a++) for (let o = Math.floor((t - n) / r); o <= Math.floor((t + n) / r); o++) for (let r of this.grid.get(`${a},${o}`) ?? []) {
        let a = Math.hypot(this.x[r] - e, this.z[r] - t);
        a <= n && i.push([r, a]);
      }
      return i.sort((e, t) => e[1] - t[1]);
    }
    #a() {
      for (let e of this.runNodes) {
        let t = e[e.length - 1];
        for (let n of e) {
          let e = this.info[n].run,
            r = n === t ? 90 : __recoveredScope.Yc,
            i = new Set();
          for (let [t, a] of this.near(this.x[n], this.z[n], r)) {
            let r = this.info[t].run;
            r === e || i.has(r) || (i.add(r), !(this.y[t] > this.y[n] + 2) && this.#t(n, t, a / __recoveredScope.qc + 1, `link`));
          }
        }
      }
    }
    #o(e, t, n = 5) {
      for (let [r, i] of this.near(this.x[e], this.z[e], t)) this.y[r] <= this.y[e] + n && this.#t(e, r, i / __recoveredScope.qc + 2, `link`);
    }
    #s(e, t, n = 15) {
      for (let [r, i] of this.near(this.x[e], this.z[e], t)) this.y[r] >= this.y[e] - n && this.#t(r, e, i / __recoveredScope.qc + 2, `link`);
    }
    #c() {
      this.stations = new Map();
      for (let e of this.rides) {
        let t = this.#e(e.bottom.x, e.bottom.z, {
            kind: `station`,
            ride: e,
            end: `bottom`
          }),
          n = this.#e(e.top.x, e.top.z, {
            kind: `station`,
            ride: e,
            end: `top`
          });
        this.y[t] = e.bottom.y;
        this.y[n] = e.top.y;
        this.stations.set(e.id, {
          bottom: t,
          top: n
        });
        let r = e.fixedChair ? e.length / 5 : Math.min(Math.max(e.length / 110, 10), 22);
        this.#t(t, n, __recoveredScope.Qc + r, `lift`, e);
        this.#s(t, __recoveredScope.Xc);
        this.#o(n, __recoveredScope.Xc * 1.4);
        this.#o(t, __recoveredScope.Xc);
      }
      for (let e of this.stations.values()) for (let t of this.stations.values()) e !== t && this.dist(e.top, t.bottom) < 150 && this.#t(e.top, t.bottom, this.dist(e.top, t.bottom) / __recoveredScope.Jc, `link`);
    }
    #l() {
      this.halls = new Map();
      for (let e of __recoveredScope.serviceCentreLocations) {
        let t = this.#e(e.x, e.z, {
          kind: `hall`,
          hall: e
        });
        this.halls.set(e.id, t);
        this.#s(t, __recoveredScope.Zc, 25);
        this.#o(t, __recoveredScope.Zc * .6, 3);
        let n = this.rides.find(t => t.label === e.lift),
          r = n && this.stations.get(n.id);
        r && (this.#t(t, r.bottom, this.dist(t, r.bottom) / __recoveredScope.Jc, `link`), this.#t(r.bottom, t, this.dist(t, r.bottom) / __recoveredScope.Jc, `link`));
      }
    }
    placeAt(e, t, n = 350, r = 0) {
      let i = [];
      for (let e of this.halls.values()) i.push([e, 140]);
      for (let e of this.stations.values()) i.push([e.bottom, 70], [e.top, 70]);
      let a = null;
      for (let [n, o] of i) {
        let i = Math.hypot(this.x[n] - e, this.z[n] - t);
        i < Math.max(o, r) && (!a || i < a[1]) && (a = [n, i]);
      }
      return a ||= this.near(e, t, n)[0], a ? this.place(a[0]) : null;
    }
    place(e) {
      let t = this.info[e],
        n = {
          node: e,
          x: this.x[e],
          z: this.z[e],
          y: this.y[e]
        };
      if (t.kind === `hall`) return {
        ...n,
        name: t.hall.zh,
        sub: t.hall.en,
        label: t.hall.zh,
        badge: `hall`,
        key: `lodge:${t.hall.id}`
      };
      if (t.kind === `station`) return {
        ...n,
        name: t.ride.label,
        sub: `${t.end} station`,
        label: `${t.ride.label} ${t.end}`,
        badge: `lift`,
        key: `lift:${t.ride.id}:${t.end}`
      };
      let r = this.runs[t.run],
        i = r.name || `Unnamed run`;
      return {
        ...n,
        name: i,
        sub: `run`,
        label: i,
        badge: r.difficulty,
        key: `run:${r.id}`
      };
    }
    route(e, t) {
      let n = this.x.length,
        r = n,
        i = new Float64Array(n + 1).fill(1 / 0),
        a = new Int32Array(n + 1).fill(-1),
        o = Array(n + 1),
        s = new __recoveredScope.$c(i),
        c = (e, t, n, c = null) => {
          t < i[e] && (i[e] = t, a[e] = r, o[e] = {
            kind: n,
            ref: c
          }, s.push(e));
        };
      if (e.lift && this.stations.has(e.lift)) c(this.stations.get(e.lift).top, 0, `lift`, this.rides.find(t => t.id === e.lift));else {
        let t = e.y ?? this.hf.heightAt(e.x, e.z);
        for (let n of [300, 800, 2e3]) {
          for (let [r, i] of this.near(e.x, e.z, n)) {
            let e = this.y[r] - t;
            c(r, e > 3 ? i / __recoveredScope.Jc + e * 2 : i / 8, `start`);
          }
          if (s.size) break;
        }
        for (let t of this.stations.values()) {
          let n = Math.hypot(this.x[t.bottom] - e.x, this.z[t.bottom] - e.z);
          n < 60 && c(t.bottom, n / __recoveredScope.qc, `start`);
        }
        for (let t of this.halls.values()) {
          let n = Math.hypot(this.x[t] - e.x, this.z[t] - e.z);
          n < 150 && c(t, n / __recoveredScope.qc, `start`);
        }
      }
      for (; s.size;) {
        let e = s.pop();
        if (e === t) break;
        for (let t of this.out[e]) {
          let n = i[e] + t.cost;
          n < i[t.to] && (i[t.to] = n, a[t.to] = e, o[t.to] = t, s.push(t.to));
        }
      }
      if (!Number.isFinite(i[t])) return null;
      let l = [];
      for (let e = t; e !== r; e = a[e]) l.push(e);
      l.reverse();
      let u = [[e.x, e.z]],
        d = [o[l[0]]];
      for (let e of l) {
        u.push([this.x[e], this.z[e]]);
        d.push(o[e]);
      }
      let f = [0];
      for (let e = 1; e < u.length; e++) f.push(f[e - 1] + Math.hypot(u[e][0] - u[e - 1][0], u[e][1] - u[e - 1][1]));
      return {
        points: u,
        acc: f,
        lift: d.slice(1).map(e => e.kind === `lift` ? e.ref.id : null),
        legs: this.#u(u, f, d),
        time: i[t],
        length: f[f.length - 1],
        goal: t
      };
    }
    #u(e, t, n) {
      let r = [];
      for (let i = 1; i < e.length; i++) {
        let e = n[i],
          a;
        if (e.kind === `run`) {
          let t = this.runs[e.ref];
          a = {
            kind: `run`,
            name: t.name || `Unnamed run`,
            badge: t.difficulty,
            id: t.id
          };
        } else a = e.kind === `lift` ? {
          kind: `lift`,
          name: e.ref.label,
          badge: `lift`,
          id: e.ref.id,
          top: e.ref.top.y
        } : {
          kind: `cross`,
          name: ``,
          badge: `offpiste`
        };
        let o = r[r.length - 1];
        o && o.kind === a.kind && (a.kind === `cross` || o.name === a.name) ? o.end = t[i] : r.push({
          ...a,
          start: t[i - 1],
          end: t[i]
        });
      }
      let i = [];
      for (let [e, t] of r.entries()) {
        let n = i[i.length - 1];
        t.kind === `cross` && t.end - t.start < 60 && (n || r[e + 1]) ? n ? n.end = t.end : r[e + 1].start = t.start : n && n.kind === t.kind && n.name === t.name && t.kind !== `cross` ? n.end = t.end : i.push(t);
      }
      return i;
    }
  };
}
/* Recovered binding cl. Live dependencies: . */
export function create_cl(__recoveredScope) {
  return e => document.querySelector(e);
}
/* Recovered binding ll. Live dependencies: . */
export function create_ll(__recoveredScope) {
  return e => e < 950 ? `${Math.max(10, Math.round(e / 10) * 10)} m` : `${(e / 1e3).toFixed(1)} km`;
}
/* Recovered binding ul. Live dependencies: . */
export function create_ul(__recoveredScope) {
  return e => e < 60 ? `under a minute` : `~${Math.round(e / 60)} min`;
}
/* Recovered binding GpsNavigator. Live dependencies: el, cl, sl, al, ol, il, ll, ul, rl, nl, tl. */
export function create_GpsNavigator(__recoveredScope) {
  return class {
    constructor({
      hf: e,
      runs: t,
      rides: n
    }) {
      this.graph = new __recoveredScope.el({
        hf: e,
        runs: t,
        rides: n
      });
      this.waypoint = null;
      this.route = null;
      this.s = 0;
      this.seg = 0;
      this.version = 0;
      this.offFor = 0;
      this.card = {
        el: __recoveredScope.cl(`#gps`),
        badge: __recoveredScope.cl(`#gps .badge`),
        act: __recoveredScope.cl(`#gps .act`),
        dist: __recoveredScope.cl(`#gps .dist`),
        then: __recoveredScope.cl(`#gps .then`)
      };
    }
    setWaypoint(e, t) {
      this.waypoint = e;
      this.#e(t);
      this.#t();
    }
    clear() {
      this.waypoint = null;
      this.route = null;
      this.version++;
      this.#t();
      this.#r();
    }
    #e(e) {
      this.route = this.waypoint && this.graph.route(e, this.waypoint.node);
      this.s = 0;
      this.seg = 0;
      this.offFor = 0;
      this.version++;
      this.route && this.#n(e, 0, true);
      this.#r();
    }
    reroute(e) {
      this.waypoint && this.#e(e);
    }
    #t() {
      try {
        this.waypoint ? sessionStorage.setItem(__recoveredScope.sl, JSON.stringify({
          key: this.waypoint.key,
          x: this.waypoint.x,
          z: this.waypoint.z
        })) : sessionStorage.removeItem(__recoveredScope.sl);
      } catch {}
    }
    restore(e) {
      try {
        let t = JSON.parse(sessionStorage.getItem(__recoveredScope.sl)),
          n = t && this.graph.placeAt(t.x, t.z, 60);
        n && this.setWaypoint(n, e);
      } catch {}
    }
    update(e, t) {
      if (!this.waypoint) return null;
      let n = __recoveredScope.al[this.waypoint.badge] ?? __recoveredScope.ol;
      if (Math.hypot(t.x - this.waypoint.x, t.z - this.waypoint.z) < n && !t.lift) {
        let e = this.waypoint.label;
        return this.clear(), {
          type: `arrived`,
          name: e
        };
      }
      return this.route && (this.#n(t, e), this.#r()), null;
    }
    #n(e, t, n = false) {
      let {
          points: r,
          acc: i,
          lift: a
        } = this.route,
        o = 1 / 0,
        s = this.seg,
        c = this.s;
      this.riding = e.lift ?? null;
      let l = n ? 0 : Math.max(0, this.seg - 4),
        u = n ? r.length - 1 : Math.min(r.length - 1, this.seg + 60);
      for (let t = l; t < u; t++) {
        if (a[t] !== this.riding) continue;
        let [n, l] = r[t],
          [u, d] = r[t + 1],
          f = u - n,
          p = d - l,
          m = f * f + p * p || 1,
          h = Math.max(0, Math.min(1, ((e.x - n) * f + (e.z - l) * p) / m)),
          g = Math.hypot(n + f * h - e.x, l + p * h - e.z);
        g < o - .01 && (o = g, s = t, c = i[t] + h * (i[t + 1] - i[t]));
      }
      this.seg = s;
      this.s = c;
      this.offFor = o < __recoveredScope.il ? 0 : this.offFor + t;
      this.offFor > 1.2 && this.#e(e);
    }
    leg(e = this.s) {
      let t = this.route?.legs ?? [];
      return t.find(t => e < t.end) ?? t[t.length - 1];
    }
    remaining() {
      return this.route ? Math.max(0, this.route.length - this.s) : 0;
    }
    #r() {
      let e = this.card;
      if (!e.el || (e.el.classList.toggle(`hidden`, !this.waypoint), !this.waypoint)) return;
      if (!this.route) {
        e.badge.className = `badge offpiste`;
        e.act.textContent = `No way there from here`;
        e.dist.textContent = ``;
        e.then.textContent = this.waypoint.name;
        return;
      }
      let t = this.route.legs,
        n = this.leg(),
        r = t[t.indexOf(n) + 1],
        i = n.end - this.s,
        a;
      a = n.kind === `run` ? `Ride ${n.name}` : n.kind === `lift` ? this.riding ? `Ride ${n.name} up` : `Board ${n.name}` : r ? `Cross to ${r.name}` : `Head for ${this.waypoint.label}`;
      e.badge.className = `badge ${n.badge}`;
      e.act.textContent = a;
      e.dist.textContent = n.kind === `lift` && !this.riding ? `` : __recoveredScope.ll(i);
      let o = this.remaining(),
        s = this.route.time * (o / (this.route.length || 1)),
        c = r?.kind === `lift` ? `then board ${r.name}` : r?.kind === `run` ? `then ${r.name}` : ``,
        l = r ? `${__recoveredScope.ll(o)} · ${__recoveredScope.ul(s)} to ${this.waypoint.label}` : `${__recoveredScope.ul(s)} to ${this.waypoint.label}`;
      e.then.textContent = [c, l].filter(Boolean).join(` · `);
    }
    drawRoute(e, t, {
      whole: n = false,
      width: r = 5
    } = {}) {
      let i = this.route;
      if (!i) return;
      let a = i.points,
        o = n ? 0 : this.seg,
        s = a[o];
      if (!n && a[o + 1]) {
        let [e, t] = a[o],
          [n, r] = a[o + 1],
          c = (this.s - i.acc[o]) / (i.acc[o + 1] - i.acc[o] || 1);
        s = [e + (n - e) * c, t + (r - t) * c];
      }
      let c = [];
      for (let e = o; e < a.length - 1; e++) {
        let t = i.lift[e] != null,
          n = c[c.length - 1];
        (!n || n.lift !== t) && c.push(n = {
          lift: t,
          pts: [e === o ? s : a[e]]
        });
        n.pts.push(a[e + 1]);
      }
      let l = n => {
          e.beginPath();
          n.forEach((n, r) => r ? e.lineTo(...t(...n)) : e.moveTo(...t(...n)));
        },
        u = [r * 1.2, r * 2.8],
        d = [{
          snow: [__recoveredScope.rl, r + 4],
          lift: [__recoveredScope.nl, r + 2]
        }, {
          snow: [__recoveredScope.nl, r + 1.5],
          lift: [__recoveredScope.rl, r + 3, u]
        }, {
          snow: [__recoveredScope.tl, r],
          lift: [__recoveredScope.tl, r, u]
        }];
      e.save();
      e.lineCap = `round`;
      e.lineJoin = `round`;
      for (let t of d) for (let n of c) {
        let [r, i, a = []] = n.lift ? t.lift : t.snow;
        l(n.pts);
        e.setLineDash(a);
        e.strokeStyle = r;
        e.lineWidth = i;
        e.stroke();
      }
      e.setLineDash([]);
      let f = r * .7 + 3;
      c.forEach((r, i) => {
        if (!r.lift) return;
        let a = i > 0 || n ? [r.pts[0], r.pts[r.pts.length - 1]] : [r.pts[r.pts.length - 1]];
        for (let n of a) {
          let [r, i] = t(...n);
          e.beginPath();
          e.arc(r, i, f, 0, Math.PI * 2);
          e.fillStyle = __recoveredScope.nl;
          e.fill();
          e.lineWidth = 3;
          e.strokeStyle = __recoveredScope.tl;
          e.stroke();
          e.beginPath();
          e.arc(r, i, f + 1.5, 0, Math.PI * 2);
          e.lineWidth = 1.5;
          e.strokeStyle = __recoveredScope.rl;
          e.stroke();
        }
      });
      e.restore();
    }
  };
}
/* Recovered binding fl. Live dependencies: tl, rl, nl. */
export function create_fl(__recoveredScope) {
  return function fl(e, t, n, r = 1) {
    e.save();
    e.translate(t, n);
    e.scale(r, r);
    e.beginPath();
    e.moveTo(0, 0);
    e.bezierCurveTo(-3, -7, -10, -11, -10, -19);
    e.arc(0, -19, 10, Math.PI, 0);
    e.bezierCurveTo(10, -11, 3, -7, 0, 0);
    e.closePath();
    e.fillStyle = __recoveredScope.tl;
    e.strokeStyle = __recoveredScope.rl;
    e.lineWidth = 2.5;
    e.lineJoin = `round`;
    e.fill();
    e.stroke();
    e.beginPath();
    e.arc(0, -19, 4, 0, Math.PI * 2);
    e.fillStyle = __recoveredScope.nl;
    e.fill();
    e.restore();
  };
}
