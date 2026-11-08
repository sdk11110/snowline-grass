/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding wl. Live dependencies: . */
export function create_wl(__recoveredScope) {
  return (e, t, n) => Math.min(Math.max(e, t), n);
}
/* Recovered binding BigMapController. Live dependencies: serviceCentreLocations, xl, wl, bl, Sl, ll, yl, gl, pl, vl, El, fl, Cl. */
export function create_BigMapController(__recoveredScope) {
  return class {
    constructor({
      hud: e,
      detail: t,
      runs: n,
      lifts: r,
      lines: i,
      gps: a,
      onClose: o,
      onDiorama: s
    }) {
      Object.assign(this, {
        hud: e,
        detail: t,
        runs: n,
        lifts: r,
        lines: i,
        gps: a
      });
      this.el = document.getElementById(`bigmap`);
      let c = e => this.el.querySelector(e);
      this.frame = c(`.frame`);
      this.canvas = c(`canvas`);
      this.you = c(`.you`);
      this.here = {
        badge: c(`.here .badge`),
        name: c(`.here .name`),
        alt: c(`.here .alt`)
      };
      this.pick = c(`.pick`);
      this.dest = {
        badge: c(`.dest .badge`),
        what: c(`.dest .what`),
        clear: c(`.dest .clear`)
      };
      this.zoomIn = c(`.zin`);
      this.zoomOut = c(`.zout`);
      this.isOpen = false;
      this.pointers = new Map();
      this.press = null;
      this.pinch = null;
      this.touch = matchMedia(`(pointer: coarse)`).matches;
      let l = this.bounds = {
          x0: 1 / 0,
          z0: 1 / 0,
          x1: -1 / 0,
          z1: -1 / 0
        },
        d = (e, t) => {
          l.x0 = Math.min(l.x0, e);
          l.x1 = Math.max(l.x1, e);
          l.z0 = Math.min(l.z0, t);
          l.z1 = Math.max(l.z1, t);
        };
      for (let e of n) for (let [t, n] of e.points) d(t, n);
      for (let e of r) {
        d(e.bottom.x, e.bottom.z);
        d(e.top.x, e.top.z);
      }
      for (let e of __recoveredScope.serviceCentreLocations) d(e.x, e.z);
      this.el.addEventListener(`mousedown`, e => {
        e.target.closest(`button`) && e.preventDefault();
      });
      c(`.x`).addEventListener(`click`, o);
      c(`.back`).addEventListener(`click`, o);
      c(`.go`).addEventListener(`click`, s);
      this.dest.clear.addEventListener(`click`, () => this.clearRoute());
      this.zoomIn.addEventListener(`click`, () => this.zoomBy(__recoveredScope.xl));
      this.zoomOut.addEventListener(`click`, () => this.zoomBy(1 / __recoveredScope.xl));
      c(`.zme`).addEventListener(`click`, () => this.#t());
      c(`.zfit`).addEventListener(`click`, () => this.#r(this.home));
      let f = this.canvas;
      f.addEventListener(`pointerdown`, e => this.#s(e));
      f.addEventListener(`pointermove`, e => this.#c(e));
      f.addEventListener(`pointerup`, e => this.#l(e, true));
      f.addEventListener(`pointercancel`, e => this.#l(e, false));
      f.addEventListener(`pointerleave`, e => {
        e.pointerType === `mouse` && !this.press && this.#p(null);
      });
      f.addEventListener(`wheel`, e => this.#o(e), {
        passive: false
      });
      this.el.addEventListener(`click`, e => {
        e.target === this.el && o();
      });
      window.addEventListener(`resize`, () => this.isOpen && this.#i());
    }
    open(e, t, n) {
      this.isOpen = true;
      this.at = e;
      this.el.classList.remove(`hidden`);
      this.home = this.#h(e);
      this.view = {
        ...this.home
      };
      this.you.style.setProperty(`--bearing`, `${e.bearing}deg`);
      this.here.badge.className = `badge ${t.badge}`;
      this.here.name.textContent = t.name;
      this.here.alt.textContent = `${Math.round(n).toLocaleString()} m`;
      this.#p(null);
      this.#_();
      this.#m();
    }
    close() {
      this.isOpen = false;
      this.el.classList.add(`hidden`);
      this.pointers.clear();
      this.press = this.pinch = null;
    }
    clearRoute() {
      this.gps.clear();
      this.#p(null);
      this.#i();
      this.#m();
    }
    key(e) {
      let t = this.view,
        n = t.size * .2;
      if (e === `Equal` || e === `NumpadAdd`) this.zoomBy(__recoveredScope.xl);else if (e === `Minus` || e === `NumpadSubtract`) this.zoomBy(1 / __recoveredScope.xl);else if (e === `Digit0` || e === `Numpad0`) this.#r(this.home);else if (e === `ArrowLeft`) this.#r({
        ...t,
        x0: t.x0 - n
      });else if (e === `ArrowRight`) this.#r({
        ...t,
        x0: t.x0 + n
      });else if (e === `ArrowUp`) this.#r({
        ...t,
        z0: t.z0 - n
      });else if (e === `ArrowDown`) this.#r({
        ...t,
        z0: t.z0 + n
      });else return false;
      return true;
    }
    zoomBy(e) {
      this.#e(e, .5, .5);
    }
    #e(e, t, n) {
      let r = this.view,
        i = this.#n(r.size / e),
        a = r.x0 + t * r.size,
        o = r.z0 + n * r.size;
      this.#r({
        size: i,
        x0: a - t * i,
        z0: o - n * i
      });
    }
    #t() {
      let e = Math.min(this.view.size, 1500);
      this.#r({
        size: e,
        x0: this.at.x - e / 2,
        z0: this.at.z - e / 2
      });
    }
    #n(e) {
      return __recoveredScope.wl(e, __recoveredScope.bl, this.detail.size);
    }
    #r(e) {
      let t = this.detail,
        n = this.#n(e.size);
      this.view = {
        size: n,
        x0: __recoveredScope.wl(e.x0, t.x0, t.x0 + t.size - n),
        z0: __recoveredScope.wl(e.z0, t.z0, t.z0 + t.size - n)
      };
      this.#i();
    }
    #i() {
      this.frameReq ||= requestAnimationFrame(() => {
        this.frameReq = 0;
        this.isOpen && this.#_();
      });
    }
    #a(e) {
      let t = this.canvas.getBoundingClientRect();
      return {
        u: (e.clientX - t.left) / t.width,
        w: (e.clientY - t.top) / t.height,
        r: t
      };
    }
    #o(e) {
      e.preventDefault();
      let t = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 400 : 1,
        n = Math.exp(-e.deltaY * t * (e.ctrlKey ? .012 : .0015)),
        {
          u: r,
          w: i
        } = this.#a(e);
      this.#e(n, r, i);
      e.pointerType !== `touch` && this.#f(e, false);
    }
    #s(e) {
      if (e.pointerType !== `mouse` || e.button === 0) {
        try {
          this.canvas.setPointerCapture(e.pointerId);
        } catch {}
        this.pointers.set(e.pointerId, {
          x: e.clientX,
          y: e.clientY
        });
        this.pointers.size === 1 ? this.press = {
          x: e.clientX,
          y: e.clientY,
          view: {
            ...this.view
          },
          moved: false
        } : (this.press = null, this.#u());
        e.pointerType !== `mouse` && this.#p(null);
      }
    }
    #c(e) {
      let t = this.pointers.get(e.pointerId);
      if (!t) {
        e.pointerType === `mouse` && this.#f(e, false);
        return;
      }
      if (t.x = e.clientX, t.y = e.clientY, this.pinch) {
        this.#d();
        return;
      }
      let n = this.press;
      if (!n) return;
      let r = e.clientX - n.x,
        i = e.clientY - n.y;
      if (!n.moved && Math.hypot(r, i) < __recoveredScope.Sl) return;
      n.moved = true;
      this.canvas.classList.add(`dragging`);
      this.#p(null);
      let a = this.canvas.getBoundingClientRect();
      this.#r({
        size: n.view.size,
        x0: n.view.x0 - r / a.width * n.view.size,
        z0: n.view.z0 - i / a.height * n.view.size
      });
    }
    #l(e, t) {
      if (!this.pointers.delete(e.pointerId)) return;
      if (this.pinch) {
        this.pointers.size < 2 && (this.pinch = null);
        let [e] = this.pointers.values();
        e && (this.press = {
          x: e.x,
          y: e.y,
          view: {
            ...this.view
          },
          moved: true
        });
        return;
      }
      let n = this.press;
      this.press = null;
      this.canvas.classList.remove(`dragging`);
      t && n && !n.moved ? this.#f(e, true) : e.pointerType === `mouse` && this.#f(e, false);
    }
    #u() {
      let [e, t] = this.pointers.values();
      this.pinch = {
        d: Math.hypot(e.x - t.x, e.y - t.y) || 1,
        mx: (e.x + t.x) / 2,
        my: (e.y + t.y) / 2,
        view: {
          ...this.view
        }
      };
    }
    #d() {
      let [e, t] = this.pointers.values(),
        n = this.pinch,
        r = this.canvas.getBoundingClientRect(),
        i = this.#n(n.view.size * n.d / (Math.hypot(e.x - t.x, e.y - t.y) || 1)),
        a = n.view.x0 + (n.mx - r.left) / r.width * n.view.size,
        o = n.view.z0 + (n.my - r.top) / r.height * n.view.size,
        s = ((e.x + t.x) / 2 - r.left) / r.width,
        c = ((e.y + t.y) / 2 - r.top) / r.height;
      this.#r({
        size: i,
        x0: a - s * i,
        z0: o - c * i
      });
    }
    #f(e, t) {
      let {
          u: n,
          w: r,
          r: i
        } = this.#a(e),
        a = this.view;
      if (n < 0 || n > 1 || r < 0 || r > 1) {
        this.#p(null);
        return;
      }
      let o = a.x0 + n * a.size,
        s = a.z0 + r * a.size,
        c = i.width / a.size,
        l = e.pointerType === `touch` || e.pointerType === `pen`,
        u = this.gps.waypoint,
        d = u && Math.hypot((u.x - o) * c, (u.z - s) * c - 19) < (l ? 24 : 14),
        f = d ? null : this.gps.graph.placeAt(o, s, __recoveredScope.wl(60 / c, 40, 400), (l ? 26 : 16) / c);
      if (t) {
        if (d) {
          this.clearRoute();
          return;
        }
        if (f && (this.gps.setWaypoint(f, this.at), this.#i(), this.#m()), l) return;
      }
      this.#p(d ? `Clear route` : f ? `${f.name} · ${f.sub}` : null, n * i.width, r * i.height);
    }
    #p(e, t = 0, n = 0) {
      let r = this.pick;
      if (r.classList.toggle(`hidden`, !e), this.canvas.style.cursor = e ? `pointer` : ``, !e) return;
      r.textContent = e;
      let i = this.frame.clientWidth,
        a = r.offsetWidth,
        o = r.offsetHeight,
        s = t + 14;
      s + a > i - 4 && (s = t - 14 - a);
      r.style.left = `${__recoveredScope.wl(s, 4, i - 4 - a)}px`;
      r.style.top = `${__recoveredScope.wl(n - o / 2, 4, i - 4 - o)}px`;
    }
    #m() {
      let e = this.gps,
        t = this.dest,
        n = e.waypoint;
      t.clear.classList.toggle(`hidden`, !n);
      t.badge.className = `badge ${n ? n.badge : `pin`}`;
      n ? e.route ? t.what.textContent = `${n.name} · ${n.sub} · ${__recoveredScope.ll(e.remaining())}` : t.what.textContent = `${n.name} · no way there from here` : t.what.textContent = this.touch ? `Tap a place to go there · pinch to zoom` : `Click a place to go there · scroll to zoom, drag to move`;
    }
    #h(e) {
      let t = this.bounds,
        n = this.detail,
        r = Math.min(t.x0, e.x),
        i = Math.max(t.x1, e.x),
        a = Math.min(t.z0, e.z),
        o = Math.max(t.z1, e.z),
        s = Math.min(n.size, Math.max(i - r, o - a) * 1.12),
        c = (e, t) => __recoveredScope.wl(e, t, t + n.size - s);
      return {
        size: s,
        x0: c((r + i - s) / 2, n.x0),
        z0: c((a + o - s) / 2, n.z0)
      };
    }
    #g() {
      if (this.ends) return this.ends;
      let e = new Set(this.lifts.map(e => String(e.id)));
      this.ends = this.lifts.map(e => [e.bottom, e.top]);
      for (let t of this.lines) {
        if (e.has(String(t.id))) continue;
        let [n, r] = [t.points[0], t.points[t.points.length - 1]].map(([e, t]) => ({
          x: e,
          z: t,
          y: this.detail.heightAt(e, t)
        }));
        this.ends.push(n.y <= r.y ? [n, r] : [r, n]);
      }
      return this.ends;
    }
    #_() {
      let e = this.frame.clientWidth,
        t = this.view;
      if (!e || !t) return;
      let n = Math.min(window.devicePixelRatio, 2),
        r = this.canvas,
        i = Math.round(e * n);
      r.width !== i && (r.width = r.height = i);
      let a = r.getContext(`2d`);
      a.setTransform(n, 0, 0, n, 0, 0);
      a.fillStyle = __recoveredScope.yl;
      a.fillRect(0, 0, e, e);
      a.imageSmoothingEnabled = true;
      a.imageSmoothingQuality = `high`;
      let {
          ppm: o,
          reliefCanvas: s
        } = this.hud,
        c = this.detail;
      a.drawImage(s, (t.x0 - c.x0) * o, (t.z0 - c.z0) * o, t.size * o, t.size * o, 0, 0, e, e);
      let l = e / t.size,
        d = (e, n) => [(e - t.x0) * l, (n - t.z0) * l],
        f = (t, n, r = 0) => t > r && t < e - r && n > r && n < e - r;
      for (let e of this.hud.lakes) __recoveredScope.gl(a, e, e => d(...e), __recoveredScope.wl(l * 2, 1, 2));
      a.lineCap = `round`;
      a.lineJoin = `round`;
      a.lineWidth = __recoveredScope.wl(1 + l * 4.5, 1.6, 7);
      for (let e of this.runs) {
        a.strokeStyle = __recoveredScope.pl[e.difficulty] || __recoveredScope.pl.intermediate;
        a.beginPath();
        e.points.forEach((e, t) => t ? a.lineTo(...d(...e)) : a.moveTo(...d(...e)));
        a.stroke();
      }
      let p = this.#g();
      a.setLineDash([4, 3]);
      a.strokeStyle = __recoveredScope.vl;
      a.lineWidth = 1.5;
      for (let [e, t] of p) {
        a.beginPath();
        a.moveTo(...d(e.x, e.z));
        a.lineTo(...d(t.x, t.z));
        a.stroke();
      }
      a.setLineDash([]);
      for (let e of __recoveredScope.serviceCentreLocations) {
        let [t, n] = d(e.x, e.z),
          r = Math.max(4, 40 * l);
        a.fillStyle = e.roof;
        a.fillRect(t - r, n - r, r * 2, r * 2);
        a.strokeRect(t - r, n - r, r * 2, r * 2);
      }
      let m = [[0, 0, 44, 44], [e - 50, 0, e, 168], [e - 170, e - 40, e, e]],
        h = (e, t, n, {
          font: r = 15,
          optional: i = false
        } = {}) => {
          a.font = `${r}px "Patrick Hand SC", "Patrick Hand", sans-serif`;
          let o = a.measureText(e).width / 2 + 3,
            s = r / 2 + 2,
            c = [t - o, n - s, t + o, n + s];
          (!i || f(t, n, o) && !m.some(e => c[0] < e[2] && c[2] > e[0] && c[1] < e[3] && c[3] > e[1])) && (m.push(c), a.textAlign = `center`, a.textBaseline = `middle`, a.lineJoin = `round`, a.lineWidth = 4, a.strokeStyle = __recoveredScope.yl, a.strokeText(e, t, n), a.fillStyle = __recoveredScope.vl, a.fillText(e, t, n));
        };
      for (let t of __recoveredScope.serviceCentreLocations) {
        let [n, r] = d(t.x, t.z),
          i = Math.max(4, 40 * l);
        h(t.zh, n, r + i + 12 < e - 10 ? r + i + 12 : r - i - 10);
      }
      for (let e of this.hud.lakes) {
        let [t, n] = d((e.box[0] + e.box[2]) / 2, e.box[1]);
        e.name && h(e.name, t, n - 10, {
          font: 14,
          optional: true
        });
      }
      for (let e of this.lifts) {
        let t = __recoveredScope.El([[e.bottom.x, e.bottom.z], [e.top.x, e.top.z]], d, f);
        t && h(e.label.replace(`索道`, ``), ...t, {
          font: l > .25 ? 17 : 15
        });
      }
      if (l > .16) {
        let e = new Map();
        for (let t of this.runs) {
          if (!t.name) continue;
          let n = __recoveredScope.El(t.points, d, f);
          n && (e.get(t.name)?.some(([e, t]) => Math.hypot(e - n[0], t - n[1]) < 260) || (e.has(t.name) || e.set(t.name, []), e.get(t.name).push(n), h(t.name, n[0], n[1] - 12, {
            font: 14,
            optional: true
          })));
        }
      }
      let g = __recoveredScope.wl(2.5 + l * 3, 3.5, 6);
      a.lineWidth = 2;
      for (let [e, t] of p) for (let [n, r] of [[t, false], [e, true]]) {
        let [e, t] = d(n.x, n.z);
        a.beginPath();
        a.arc(e, t, g, 0, Math.PI * 2);
        a.fillStyle = r ? __recoveredScope.vl : __recoveredScope.yl;
        a.strokeStyle = r ? __recoveredScope.yl : __recoveredScope.vl;
        a.fill();
        a.stroke();
        r && (a.beginPath(), a.arc(e, t, g + 1.5, 0, Math.PI * 2), a.lineWidth = 1, a.strokeStyle = __recoveredScope.vl, a.stroke(), a.lineWidth = 2);
      }
      let _ = this.gps.waypoint;
      _ && (this.gps.drawRoute(a, d, {
        width: __recoveredScope.wl(3 + l * 4, 4, 8)
      }), __recoveredScope.fl(a, ...d(_.x, _.z), 1));
      let v = __recoveredScope.Cl.filter(e => e * l <= 140).pop() ?? __recoveredScope.Cl[0],
        y = v * l,
        b = e - 14 - y,
        x = e - 16;
      a.strokeStyle = __recoveredScope.vl;
      a.lineWidth = 2;
      a.beginPath();
      a.moveTo(b, x - 5);
      a.lineTo(b, x);
      a.lineTo(b + y, x);
      a.lineTo(b + y, x - 5);
      a.stroke();
      h(v >= 1e3 ? `${v / 1e3} km` : `${v} m`, b + y / 2, x - 10, {
        font: 14
      });
      a.fillStyle = __recoveredScope.vl;
      a.beginPath();
      a.moveTo(20, 8);
      a.lineTo(25, 18);
      a.lineTo(15, 18);
      a.closePath();
      a.fill();
      h(`N`, 20, 30, {
        font: 20
      });
      let S = (this.at.x - t.x0) / t.size,
        C = (this.at.z - t.z0) / t.size;
      this.you.classList.toggle(`hidden`, S < 0 || S > 1 || C < 0 || C > 1);
      this.you.style.left = `${S * 100}%`;
      this.you.style.top = `${C * 100}%`;
      this.you.classList.toggle(`flip-x`, S > .72);
      this.you.classList.toggle(`flip-y`, C < .12);
      this.zoomIn.disabled = t.size <= 501;
      this.zoomOut.disabled = t.size >= c.size - 1;
    }
  };
}
/* Recovered binding El. Live dependencies: . */
export function create_El(__recoveredScope) {
  return function El(e, t, n) {
    let r = [];
    for (let i = 0; i < e.length - 1; i++) {
      let [a, o] = e[i],
        [s, c] = e[i + 1],
        l = t(a, o),
        u = t(s, c),
        d = Math.max(1, Math.ceil(Math.hypot(u[0] - l[0], u[1] - l[1]) / 12));
      for (let e = 0; e < d; e++) {
        let t = e / d,
          i = [l[0] + (u[0] - l[0]) * t, l[1] + (u[1] - l[1]) * t];
        n(...i, 12) && r.push(i);
      }
    }
    return r.length >= 4 ? r[Math.floor(r.length / 2)] : null;
  };
}
