/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding yt. Live dependencies: . */
export function create_yt(__recoveredScope) {
  return [[`fps`, `Frame rate`, e => e ? `${e} fps` : `Unlimited`], [`scale`, `Resolution`, e => `${e}×`], [`msaa`, `Anti-aliasing`, e => e ? `${e}× MSAA` : `Off`], [`shadowSize`, `Shadow quality`, e => ({
    512: `Low`,
    1024: `Medium`,
    2048: `High`
  })[e]], [`outline`, `Outlines`, e => e[0].toUpperCase() + e.slice(1)]];
}
/* Recovered binding bt. Live dependencies: graphicsModes, vt, yt, graphicsSettingOptions. */
export function create_bt(__recoveredScope) {
  return function bt(e, t) {
    t.innerHTML = `<p class="sect">Graphics</p>`;
    let n = document.createElement(`div`);
    n.className = `choices gfx-modes`;
    n.setAttribute(`role`, `group`);
    n.setAttribute(`aria-label`, `Graphics quality`);
    let r = __recoveredScope.graphicsModes.map(t => {
        let r = document.createElement(`button`);
        return r.type = `button`, r.textContent = __recoveredScope.vt[t], r.dataset.mode = t, r.addEventListener(`click`, () => e.setMode(t)), n.append(r), r;
      }),
      i = document.createElement(`p`);
    i.className = `note gfx-summary`;
    i.setAttribute(`role`, `status`);
    let a = document.createElement(`div`);
    a.className = `gfx-custom`;
    let o = {};
    for (let [t, n, r] of __recoveredScope.yt) {
      let i = document.createElement(`label`),
        s = document.createElement(`select`);
      s.setAttribute(`aria-label`, n);
      for (let e of __recoveredScope.graphicsSettingOptions[t]) s.add(new Option(r(e), String(e)));
      s.addEventListener(`change`, () => {
        let n = s.value;
        e.set(t, t === `outline` ? n : Number(n));
      });
      i.append(n, s);
      a.append(i);
      o[t] = s;
    }
    let s = document.createElement(`label`);
    s.className = `check`;
    let c = document.createElement(`input`);
    c.type = `checkbox`;
    c.addEventListener(`change`, () => e.set(`shadows`, c.checked));
    s.append(c, ` Shadows`);
    a.insertBefore(s, o.shadowSize.parentElement);
    t.append(n, i, a);
    function l(t = e.current) {
      for (let t of r) t.setAttribute(`aria-pressed`, String(t.dataset.mode === e.mode));
      a.hidden = e.mode !== `custom`;
      let n = e.displayHz;
      for (let e of o.fps.options) {
        let t = Number(e.value);
        e.textContent = __recoveredScope.yt[0][2](t) + (n && t > n ? ` (screen: ${n} Hz)` : ``);
      }
      for (let t of o.msaa.options) t.disabled = Number(t.value) > e.caps.maxSamples;
      let s = e.custom;
      for (let [e] of __recoveredScope.yt) o[e].value = String(s[e]);
      c.checked = s.shadows;
      o.shadowSize.disabled = !s.shadows;
      let {
          render: l
        } = e.summary(),
        u = t.fps && !(n && t.fps >= n) ? `${t.fps} fps cap` : n ? `${n} fps (screen)` : `no fps cap`;
      i.textContent = `${u} · ${t.scale}× · ${t.msaa ? `${t.msaa}× MSAA` : `no MSAA`} · ${t.shadows ? `${t.shadowSize} shadows` : `no shadows`} · ${t.outline} outlines · ${l.replace(`×`, ` × `)} px`;
    }
    e.onChange(l);
    window.addEventListener(`resize`, () => l());
    l();
  };
}
