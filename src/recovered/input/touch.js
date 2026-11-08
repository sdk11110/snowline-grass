/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding cu. Live dependencies: . */
export function create_cu(__recoveredScope) {
  return e => `<svg viewBox="0 0 24 24" aria-hidden="true">${e}</svg>`;
}
/* Recovered binding lu. Live dependencies: . */
export function create_lu(__recoveredScope) {
  return {
    ollie: `<path d="M4 19h16M12 15V4M7.5 8.5 12 4l4.5 4.5"/>`,
    brake: `<circle cx="12" cy="12" r="6"/><path d="M12 9v3.6M12 15.2v.1"/><path d="M4.8 6.5a8.5 8.5 0 0 0 0 11M19.2 6.5a8.5 8.5 0 0 1 0 11"/>`,
    up: `<path d="M12 19V6M5.5 12 12 5.5 18.5 12"/>`,
    down: `<path d="M12 5v13M5.5 12 12 18.5 18.5 12"/>`,
    board: `<rect x="2.5" y="9.5" width="19" height="5.5" rx="2.75" fill="#d9534a"/><path d="M8.5 9.5v5.5M15.5 9.5v5.5"/>`,
    foot: `<circle cx="13.5" cy="4.5" r="2"/><path d="M10 21l2.5-6.5L10 11l1.5-4 3 2.5 3 1M11.5 7 8 9.5 7 13M12.5 14.5 16 17l1 4"/>`,
    lift: `<path d="M2 5.5 22 2M12 4v4"/><rect x="6" y="8" width="12" height="12" rx="2.5"/><path d="M6 13h12"/>`,
    in: `<path d="M14 4h5v16h-5"/><path d="M10 8l4 4-4 4M14 12H5"/>`,
    out: `<path d="M10 4H5v16h5"/><path d="M14 8l4 4-4 4M18 12H9"/>`,
    skip: `<path d="M5 6l7 6-7 6zM12 6l7 6-7 6z"/>`,
    paw: `<ellipse cx="12" cy="15.5" rx="4.5" ry="3.8"/><circle cx="6" cy="10" r="1.8"/><circle cx="9.8" cy="6.4" r="1.8"/><circle cx="14.2" cy="6.4" r="1.8"/><circle cx="18" cy="10" r="1.8"/>`,
    ball: `<circle cx="15" cy="9" r="5" fill="#fff"/><path d="M3 20c3-1 5-3 7-6"/>`,
    talk: `<path d="M4 5h16v10H10l-4 4v-4H4z"/><path d="M8 9h8M8 12h5"/>`,
    wheel: `<rect x="8.5" y="2.5" width="7" height="11" rx="1.5"/><path d="M10.5 6h3M10.5 10h3"/><path d="M20.5 13a8.5 4.5 0 0 1-17 0"/><path d="M1.6 15.4 3.5 13l2.6 1.6"/>`
  };
}
/* Recovered binding uu. Live dependencies: . */
export function create_uu(__recoveredScope) {
  return {
    ollie: {
      label: `Ollie`,
      icon: `ollie`,
      hold: true
    },
    handbrake: {
      label: `Handbrake`,
      icon: `brake`,
      hold: true
    },
    hold: {
      label: `Hold water`,
      icon: `brake`,
      hold: true
    },
    up: {
      label: `Up`,
      icon: `up`,
      hold: true
    },
    down: {
      label: `Down`,
      icon: `down`,
      hold: true
    },
    board: {
      label: `Board`,
      icon: `board`
    },
    foot: {
      label: `On foot`,
      icon: `foot`
    },
    throw: {
      label: `Throw`,
      icon: `ball`
    },
    steer: {
      label: `Steer`,
      icon: `up`
    },
    jump: {
      label: `Jump`,
      icon: `ollie`,
      hold: true
    },
    getDown: {
      label: `Get down`,
      icon: `out`
    },
    auto: {
      label: `Auto`,
      icon: `up`
    },
    manual: {
      label: `Manual`,
      icon: `down`
    }
  };
}
/* Recovered binding du. Live dependencies: au, ou, su, uu, cu, lu, iu. */
export function create_du(__recoveredScope) {
  return class {
    constructor({
      onTap: e,
      onMode: t,
      onPress: n
    }) {
      Object.assign(this, {
        onTap: e,
        onMode: t,
        onPress: n
      });
      this.el = document.getElementById(`touch`);
      this.zone = this.el.querySelector(`.zone`);
      this.stickEl = this.el.querySelector(`.stick`);
      this.knob = this.stickEl.querySelector(`i`);
      this.buttons = {};
      this.shown = {};
      this.specs = {};
      this.held = {
        big: false,
        low: false
      };
      this.stick = {
        id: null,
        ox: 0,
        oy: 0,
        x: 0,
        y: 0
      };
      this.visible = false;
      this.on = false;
      for (let e of [`big`, `low`, `act`, `alt`, `aux`]) {
        let t = this.el.querySelector(`.${e}`);
        this.buttons[e] = t;
        t.addEventListener(`pointerdown`, n => {
          if (n.preventDefault(), this.onPress?.(), this.#e(e)?.hold) {
            try {
              t.setPointerCapture(n.pointerId);
            } catch {}
            this.#n(e, true);
          }
        });
        let n = () => this.#n(e, false);
        t.addEventListener(`pointerup`, n);
        t.addEventListener(`pointercancel`, n);
        t.addEventListener(`lostpointercapture`, n);
        t.addEventListener(`click`, () => {
          this.#e(e)?.hold || this.onTap?.(e);
        });
      }
      let r = this.zone;
      r.addEventListener(`pointerdown`, e => this.#r(e));
      r.addEventListener(`pointermove`, e => this.#i(e));
      r.addEventListener(`pointerup`, e => this.#a(e));
      r.addEventListener(`pointercancel`, e => this.#a(e));
      window.addEventListener(`pointerdown`, e => {
        e.pointerType === `touch` ? this.setMode(true) : e.pointerType === `mouse` && this.setMode(false);
      }, true);
      window.addEventListener(`keydown`, () => this.setMode(false), true);
      window.addEventListener(`blur`, () => this.release());
      document.addEventListener(`visibilitychange`, () => this.release());
      this.setMode(matchMedia(`(pointer: coarse)`).matches, true);
    }
    setMode(e, t = false) {
      (e !== this.on || t) && (this.on = e, document.body.classList.toggle(`touch`, e), e || this.show(false), t || this.onMode?.(e));
    }
    read() {
      let {
          x: e,
          y: t
        } = this.stick,
        n = -e,
        r = Math.abs(n);
      return {
        steer: r < __recoveredScope.au ? 0 : Math.sign(n) * (r - __recoveredScope.au) / .88,
        up: t < -.35,
        down: t > __recoveredScope.ou,
        full: Math.hypot(e, t) > __recoveredScope.su,
        big: this.held.big && !!this.#e(`big`)?.hold,
        low: this.held.low
      };
    }
    show(e) {
      e !== this.visible && (this.visible = e, this.el.classList.toggle(`hidden`, !e), e || this.release());
    }
    layout({
      layout: e,
      stick: t = true,
      big: n = null,
      low: r = null,
      alt: i = null,
      aux: a = null,
      act: o = null
    }) {
      this.shown.layout !== e && (this.shown.layout = e, this.el.dataset.layout = e);
      this.shown.stick !== t && (this.shown.stick = t, this.zone.classList.toggle(`hidden`, !t), this.stickEl.classList.toggle(`hidden`, !t), t || this.#o());
      this.#t(`big`, n && __recoveredScope.uu[n]);
      this.#t(`low`, r && __recoveredScope.uu[r]);
      this.#t(`alt`, i && __recoveredScope.uu[i]);
      this.#t(`aux`, a && __recoveredScope.uu[a]);
      this.#t(`act`, o);
    }
    release() {
      this.#o();
      this.#n(`big`, false);
      this.#n(`low`, false);
    }
    #e(e) {
      return this.specs[e] ?? null;
    }
    #t(e, t) {
      let n = t ? JSON.stringify(t) : ``;
      if (this.shown[e] === n) return;
      this.shown[e] = n;
      this.specs[e] = t || null;
      let r = this.buttons[e];
      r.classList.toggle(`hidden`, !t);
      t ? (r.innerHTML = `${__recoveredScope.cu(__recoveredScope.lu[t.icon] ?? ``)}<span>${t.label}</span>`, r.setAttribute(`aria-label`, t.hold ? `${t.label} (hold)` : t.label), r.classList.toggle(`lit`, !!t.lit), r.classList.toggle(`dim`, !!t.dim), t.hold || this.#n(e, false)) : this.#n(e, false);
    }
    #n(e, t) {
      e in this.held && this.held[e] !== t && (this.held[e] = t, this.buttons[e].classList.toggle(`down`, t));
    }
    #r(e) {
      if (this.stick.id !== null) return;
      e.preventDefault();
      this.onPress?.();
      try {
        this.zone.setPointerCapture(e.pointerId);
      } catch {}
      let t = this.stickEl.offsetWidth / 2 + 6,
        n = Math.min(Math.max(e.clientX, t), window.innerWidth - t),
        r = Math.min(Math.max(e.clientY, t), window.innerHeight - t);
      Object.assign(this.stick, {
        id: e.pointerId,
        ox: n,
        oy: r,
        x: 0,
        y: 0
      });
      let i = this.stickEl.style;
      i.left = `${n - this.stickEl.offsetWidth / 2}px`;
      i.top = `${r - this.stickEl.offsetHeight / 2}px`;
      i.bottom = `auto`;
      this.stickEl.classList.add(`live`);
      this.#i(e);
    }
    #i(e) {
      let t = this.stick;
      if (e.pointerId !== t.id) return;
      let n = e.clientX - t.ox,
        r = e.clientY - t.oy,
        i = Math.hypot(n, r);
      i > __recoveredScope.iu && (n *= __recoveredScope.iu / i, r *= __recoveredScope.iu / i);
      t.x = n / __recoveredScope.iu;
      t.y = r / __recoveredScope.iu;
      this.knob.style.transform = `translate(${n}px, ${r}px)`;
    }
    #a(e) {
      e.pointerId === this.stick.id && this.#o();
    }
    #o() {
      Object.assign(this.stick, {
        id: null,
        x: 0,
        y: 0
      });
      this.stickEl.removeAttribute(`style`);
      this.stickEl.classList.remove(`live`);
      this.knob.style.transform = ``;
    }
  };
}
