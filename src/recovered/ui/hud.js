/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding ml. Live dependencies: . */
export function create_ml(__recoveredScope) {
  return e => document.getElementById(e);
}
/* Recovered binding gl. Live dependencies: hl. */
export function create_gl(__recoveredScope) {
  return function gl(e, t, n, r = 1) {
    e.beginPath();
    t.outline.forEach((t, r) => r ? e.lineTo(...n(t)) : e.moveTo(...n(t)));
    e.closePath();
    e.fillStyle = __recoveredScope.hl.fill;
    e.fill();
    e.strokeStyle = __recoveredScope.hl.edge;
    e.lineWidth = r;
    e.stroke();
  };
}
/* Recovered binding _l. Live dependencies: ml, gl, pl, serviceCentreLocations, lakeContainingPoint, fl. */
export function create__l(__recoveredScope) {
  return class {
    constructor(e, t, n = []) {
      this.world = e;
      this.piste = t;
      this.lakes = n;
      this.el = __recoveredScope.ml(`hud`);
      this.speed = __recoveredScope.ml(`speed`);
      this.time = __recoveredScope.ml(`time`);
      this.alt = __recoveredScope.ml(`alt`);
      this.runName = __recoveredScope.ml(`run-name`);
      this.badge = __recoveredScope.ml(`run-badge`);
      this.toastEl = __recoveredScope.ml(`toast`);
      this.promptEl = __recoveredScope.ml(`prompt`);
      this.promptEl.addEventListener(`mousedown`, e => e.preventDefault());
      this.promptEl.addEventListener(`click`, () => this.promptAct?.());
      this.touch = false;
      this.map = __recoveredScope.ml(`minimap`).getContext(`2d`);
      this.#e();
      this.lastRun = null;
      this.place = {
        name: ``,
        badge: `offpiste`
      };
      this.parked = [];
    }
    #e() {
      let {
          detail: e,
          meta: t
        } = this.world,
        n = .3,
        r = Math.round(e.size * n),
        i = document.createElement(`canvas`);
      i.width = i.height = r;
      let a = i.getContext(`2d`),
        o = a.createImageData(r, r),
        {
          x0: s,
          z0: c
        } = e,
        l = new Float32Array(r * r);
      for (let t = 0; t < r; t++) for (let i = 0; i < r; i++) l[t * r + i] = e.heightAt(i / n + s, t / n + c);
      for (let e = 1; e < r - 1; e++) for (let t = 1; t < r - 1; t++) {
        let n = e * r + t,
          i = l[n],
          a = Math.max(-1, Math.min(1, (l[n - 1] - l[n + 1] + l[n - r] - l[n + r]) * .08)),
          s = 246 + a * 14,
          c = 244 + a * 12,
          u = 236 + a * 8,
          d = Math.floor(i / 50);
        (d !== Math.floor(l[n + 1] / 50) || d !== Math.floor(l[n + r] / 50)) && (s -= 40, c -= 30, u -= 20);
        o.data.set([s, c, u, 255], n * 4);
      }
      a.putImageData(o, 0, 0);
      let d = document.createElement(`canvas`);
      d.width = d.height = r;
      let f = d.getContext(`2d`);
      f.drawImage(i, 0, 0);
      let p = e => [(e[0] - s) * n, (e[1] - c) * n];
      for (let e of this.lakes) __recoveredScope.gl(f, e, p);
      f.lineCap = `round`;
      f.lineJoin = `round`;
      for (let e of t.runs) {
        f.strokeStyle = __recoveredScope.pl[e.difficulty] || __recoveredScope.pl.intermediate;
        f.lineWidth = e.name === `云霄峰道` ? 5 : 3;
        f.beginPath();
        e.points.forEach((e, t) => t ? f.lineTo(...p(e)) : f.moveTo(...p(e)));
        f.stroke();
      }
      f.setLineDash([4, 3]);
      f.strokeStyle = `#23303a`;
      f.lineWidth = 1.5;
      for (let e of t.lifts) {
        f.beginPath();
        e.points.forEach((e, t) => t ? f.lineTo(...p(e)) : f.moveTo(...p(e)));
        f.stroke();
      }
      f.setLineDash([]);
      for (let e of __recoveredScope.serviceCentreLocations) {
        let [t, n] = p([e.x, e.z]);
        f.fillStyle = e.roof;
        f.fillRect(t - 12, n - 12, 24, 24);
        f.strokeRect(t - 12, n - 12, 24, 24);
      }
      this.mapCanvas = d;
      this.reliefCanvas = i;
      this.ppm = n;
    }
    show(e) {
      this.el.classList.toggle(`hidden`, !e);
    }
    update(e, t, r = null) {
      this.speed.textContent = Math.round(e.speed * 3.6);
      this.alt.textContent = Math.round(e.pos.y);
      let i = Math.floor(t / 60),
        a = t - i * 60;
      this.time.textContent = `${i}:${a.toFixed(1).padStart(4, `0`)}`;
      let o = this.piste.distAt(e.pos.x, e.pos.z) < 22,
        s = r ?? (o ? this.piste.runAt(e.pos.x, e.pos.z) : -1),
        c = r || o ? null : __recoveredScope.lakeContainingPoint(this.lakes, e.pos.x, e.pos.z),
        l = c ? `lake:${c.id}` : s;
      if (l !== this.lastRun) {
        this.lastRun = l;
        let e = r || c ? null : this.world.meta.runs[s];
        this.runName.textContent = r ?? (c ? c.name || `Lake` : e ? e.name || `Unnamed run` : `Off-piste`);
        let t = c ? `lake` : e ? e.difficulty : `offpiste`;
        this.badge.className = `badge ` + t;
        this.place = {
          name: this.runName.textContent,
          badge: r ? `lift` : t
        };
      }
      let u = this.map,
        d = u.canvas.width,
        f = d / (700 * this.ppm),
        {
          x0: p,
          z0: m
        } = this.world.detail,
        h = (e.pos.x - p) * this.ppm,
        g = (e.pos.z - m) * this.ppm;
      u.save();
      u.fillStyle = `#fbfaf5`;
      u.fillRect(0, 0, d, d);
      u.translate(d / 2, d / 2);
      u.scale(f, f);
      u.drawImage(this.mapCanvas, -h, -g);
      u.restore();
      this.gps?.waypoint && this.#t(u, e.pos, d / 700);
      for (let t of this.parked) this.#n(u, e.pos, d / 700, t);
      u.save();
      u.translate(d / 2, d / 2);
      u.rotate(-e.yaw);
      u.fillStyle = `#f0c24a`;
      u.strokeStyle = `#23303a`;
      u.lineWidth = 2.5;
      u.beginPath();
      u.moveTo(0, -11);
      u.lineTo(7, 8);
      u.lineTo(0, 4);
      u.lineTo(-7, 8);
      u.closePath();
      u.fill();
      u.stroke();
      u.restore();
      u.fillStyle = `#23303a`;
      u.font = `16px "Patrick Hand SC", sans-serif`;
      u.textAlign = `center`;
      u.fillText(`N`, d / 2, 18);
    }
    #t(e, t, n) {
      let r = e.canvas.width / 2,
        i = (e, i) => [r + (e - t.x) * n, r + (i - t.z) * n];
      this.gps.drawRoute(e, i, {
        width: 4
      });
      let [a, o] = i(this.gps.waypoint.x, this.gps.waypoint.z),
        s = a - r,
        c = o - r,
        l = Math.hypot(s, c),
        u = r - 16;
      l < u ? __recoveredScope.fl(e, a, o, .8) : __recoveredScope.fl(e, r + s / l * u, r + c / l * u + 10, .7);
    }
    #n(e, t, n, r) {
      let i = e.canvas.width / 2,
        a = i - 12,
        o = (r.x - t.x) * n,
        s = (r.z - t.z) * n,
        c = Math.hypot(o, s);
      if (c > a && (o *= a / c, s *= a / c), e.save(), e.translate(i + o, i + s), e.rotate(-r.yaw), e.strokeStyle = `#23303a`, e.lineWidth = 2, e.beginPath(), r.kind === `jetson`) {
        e.fillStyle = `#fbfaf5`;
        for (let [t, n] of [[-6, -6], [6, -6], [-6, 6], [6, 6]]) {
          e.moveTo(0, 0);
          e.lineTo(t, n);
        }
        e.stroke();
        for (let [t, n] of [[-6, -6], [6, -6], [-6, 6], [6, 6]]) {
          e.beginPath();
          e.arc(t, n, 3.5, 0, Math.PI * 2);
          e.fill();
          e.stroke();
        }
        e.beginPath();
        e.ellipse(0, 0, 3.5, 7, 0, 0, Math.PI * 2);
        e.fill();
        e.stroke();
      } else r.kind === `rowboat` ? (e.fillStyle = `#f2ede2`, e.moveTo(0, -8), e.quadraticCurveTo(5, -3, 4, 6), e.lineTo(-4, 6), e.quadraticCurveTo(-5, -3, 0, -8), e.fill(), e.stroke(), e.beginPath(), e.moveTo(-3.5, 0), e.lineTo(3.5, 0), e.stroke()) : r.kind === `snowmobile` ? (e.moveTo(-6, -10), e.lineTo(-6, -3), e.moveTo(6, -10), e.lineTo(6, -3), e.stroke(), e.fillStyle = `#f0883a`, e.beginPath(), e.roundRect(-4, -7, 8, 15, 3), e.fill(), e.stroke(), e.fillStyle = `#23303a`, e.fillRect(-2.5, -4, 5, 2.5)) : (e.fillStyle = `#d9604c`, e.roundRect(-5, -9, 10, 18, 3), e.fill(), e.stroke(), e.fillStyle = `#23303a`, e.fillRect(-3.5, -5, 7, 4));
      e.restore();
    }
    prompt(e, t = e, n = null) {
      this.promptKeys = e;
      this.promptTouch = t;
      this.promptAct = n;
      let r = this.touch ? t : e;
      (r !== this.lastPrompt || !!n !== this.promptTap) && (this.lastPrompt = r, this.promptTap = !!n, r && (this.promptEl.innerHTML = r), this.promptEl.classList.toggle(`show`, !!r), this.promptEl.classList.toggle(`tap`, !!n), this.promptEl.disabled = !n);
    }
    setTouch(e) {
      this.touch = e;
      this.prompt(this.promptKeys ?? ``, this.promptTouch ?? ``, this.promptAct);
    }
    toast(e, t = 1400) {
      this.toastEl.textContent = e;
      this.toastEl.classList.add(`show`);
      clearTimeout(this.toastT);
      clearTimeout(this.toastClear);
      this.toastT = setTimeout(() => {
        this.toastEl.classList.remove(`show`);
        this.toastClear = setTimeout(() => {
          this.toastEl.textContent = ``;
        }, 300);
      }, t);
    }
  };
}
