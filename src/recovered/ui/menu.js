/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding nu. Live dependencies: tu. */
export function create_nu(__recoveredScope) {
  return function nu() {
    let e = {
      music: true,
      sfx: true
    };
    try {
      Object.assign(e, JSON.parse(localStorage.getItem(__recoveredScope.tu)));
    } catch {}
    return e;
  };
}
/* Recovered binding ru. Live dependencies: nu, tu. */
export function create_ru(__recoveredScope) {
  return function ru(e, {
    actions: t = [],
    playAction: n = () => {}
  } = {}) {
    let r = document.getElementById(`menu`),
      i = __recoveredScope.nu(),
      a = () => {
        try {
          localStorage.setItem(__recoveredScope.tu, JSON.stringify(i));
        } catch {}
      };
    r.addEventListener(`mousedown`, e => {
      e.target.closest(`button, a`) && e.preventDefault();
    });
    let o = [[`music`, `mi-music`, `Music`, t => e.setMusic(t)], [`sfx`, `mi-sfx`, `Sound effects`, t => e.setSfx(t)]];
    for (let [t, n, r, s] of o) {
      let o = document.getElementById(n),
        c = e => {
          i[t] = e;
          o.setAttribute(`aria-pressed`, String(e));
          o.dataset.tip = `${r}: ${e ? `on` : `off`}`;
          s(e);
        };
      c(i[t] !== false);
      o.addEventListener(`click`, () => {
        e.start();
        c(!i[t]);
        a();
      });
    }
    let s = r.querySelector(`.toggle`),
      c = false;
    function l(e) {
      c = e;
      r.classList.toggle(`expanded`, e);
      s.setAttribute(`aria-expanded`, String(e));
      e || f(null);
    }
    s.addEventListener(`click`, () => l(!c));
    let u = [...r.querySelectorAll(`[data-flyout]`)],
      d = null;
    function f(e) {
      d = e;
      for (let t of u) {
        let n = t.dataset.flyout === e;
        t.setAttribute(`aria-expanded`, String(n));
        document.getElementById(`fly-${t.dataset.flyout}`).classList.toggle(`hidden`, !n);
      }
      r.classList.toggle(`open`, !!e);
    }
    for (let e of u) e.addEventListener(`click`, () => f(d === e.dataset.flyout ? null : e.dataset.flyout));
    window.addEventListener(`keydown`, e => {
      e.code === `Escape` && (d || c) && l(false);
    });
    window.addEventListener(`pointerdown`, e => {
      (d || c) && !r.contains(e.target) && l(false);
    });
    let p = document.getElementById(`action-list`),
      m = document.getElementById(`action-shortcuts`),
      h = new Set(t.map(e => e.id)),
      g = Array.isArray(i.actionSlots) ? i.actionSlots.slice(0, 3) : [];
    for (; g.length < 3;) g.push(``);
    for (let e = 0; e < 3; e++) h.has(g[e]) || (g[e] = ``);
    i.actionSlots = g;
    for (let e of t) {
      let t = document.createElement(`button`);
      t.type = `button`;
      t.textContent = e.label;
      t.addEventListener(`click`, () => n(e.id));
      p.append(t);
    }
    for (let e = 0; e < 3; e++) {
      let n = document.createElement(`label`),
        r = document.createElement(`kbd`);
      r.textContent = String(e + 1);
      let i = document.createElement(`select`);
      i.setAttribute(`aria-label`, `Action for key ${e + 1}`);
      i.add(new Option(`Not assigned`, ``));
      for (let e of t) i.add(new Option(e.label, e.id));
      i.value = g[e];
      i.addEventListener(`change`, () => {
        g[e] = i.value;
        a();
      });
      n.append(r, i);
      m.append(n);
    }
    return {
      prefs: i,
      save: a,
      close: () => l(false),
      actionForKey: e => g[e]
    };
  };
}
