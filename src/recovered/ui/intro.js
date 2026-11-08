/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding _f. Live dependencies: . */
export function create__f(__recoveredScope) {
  return {
    stick: `<circle cx="26" cy="26" r="22" stroke-dasharray="3 3"/><circle cx="19" cy="22" r="9" fill="#fff" stroke-width="2.4"/><path d="M26 9l-3 3M26 9l3 3M26 43l-3-3M26 43l3-3M9 26l3-3M9 26l3 3M43 26l-3-3M43 26l-3 3"/>`,
    speed: `<path d="M8 34a19 19 0 1 1 36 0M12 34h28M26 30l9-12"/><circle cx="26" cy="30" r="2.5" fill="#f0c24a"/>`,
    home: `<path d="M12 24a15 15 0 1 1 3 12M12 13v11h11"/>`,
    ollie: `<circle cx="26" cy="26" r="21" fill="#f0c24a" stroke-width="2.4"/><path d="M15 33h22M26 29V15M20.5 20.5 26 15l5.5 5.5"/>`,
    card: `<rect x="4" y="15" width="44" height="22" fill="#fff" stroke-width="2.4"/><path d="M11 26h20M37 21l5 5-5 5"/>`,
    map: `<circle cx="26" cy="26" r="21" fill="#fff" stroke-width="2.4"/><path d="M17 37c3-8 6-13 9-20M30 38c-1-7 0-14 4-21" stroke="#4f8fd6"/><path d="M26 15l5 13-5-3-5 3z" fill="#f0c24a"/>`
  };
}
/* Recovered binding vf. Live dependencies: _f. */
export function create_vf(__recoveredScope) {
  return e => `<svg viewBox="0 0 52 52" aria-hidden="true">${__recoveredScope._f[e]}</svg>`;
}
/* Recovered binding yf. Live dependencies: vf. */
export function create_yf(__recoveredScope) {
  return (e, t, n) => `<div class="intro-tile">${__recoveredScope.vf(e)}<div><b>${t}</b><span>${n}</span></div></div>`;
}
/* Recovered binding bf. Live dependencies: ff, Nd, yf, xr, startRun. */
export function create_bf(__recoveredScope) {
  return () => __recoveredScope.ff(`Hemu · 禾木`, `
  <div class="intro-guide">
    <p class="intro-place">Gondola No. 6 · 2,756 m <span>— your mountain awaits</span></p>
    <div class="intro-tiles">
      ${__recoveredScope.Nd.on ? `
        ${__recoveredScope.yf(`stick`, `Carve &amp; speed`, `Drag low left · up to tuck · back to skid`)}
        ${__recoveredScope.yf(`ollie`, `Jump`, `Hold Ollie, then release · turn in the air`)}
        ${__recoveredScope.yf(`card`, `Explore`, `Tap the card to interact nearby`)}
        ${__recoveredScope.yf(`map`, `Find your way`, `Tap the map for the mountain &amp; GPS`)}
      ` : `
        ${__recoveredScope.yf(`stick`, `Carve`, `<kbd>A</kbd> <kbd>D</kbd> turn left / right`)}
        ${__recoveredScope.yf(`speed`, `Speed`, `<kbd>W</kbd> tuck / push · <kbd>S</kbd> skid`)}
        ${__recoveredScope.yf(`ollie`, `Jump`, `<kbd>Space</kbd> hold, release · spin in air`)}
        ${__recoveredScope.yf(`card`, `Explore`, `<kbd>E</kbd> interact nearby`)}
        ${__recoveredScope.yf(`map`, `Map &amp; GPS`, `<kbd>M</kbd> or click the map`)}
        ${__recoveredScope.yf(`home`, `Back to start`, `<kbd>R</kbd> return to the top`)}
      `}
    </div>
    ${__recoveredScope.Nd.on ? `` : `<details class="intro-more"><summary>More controls</summary>
      <p><kbd>F</kbd> board / on foot (with a walking rider) · <kbd>W</kbd> walk, <kbd>Shift</kbd> run, <kbd>A</kbd> / <kbd>D</kbd> turn, <kbd>S</kbd> stop</p>
      <p><kbd>V</kbd> first-person view, riding or on the swing (male and female riders)</p>
      <p><kbd>E</kbd> pet ${__recoveredScope.xr.en} · <kbd>Q</kbd> throw a snowball</p>
      <p>Jetson ONE: <kbd>Space</kbd> take off / climb · <kbd>Shift</kbd> descend / land</p>
    </details>`}
    <p class="intro-credit">Terrain: real elevation data · Runs &amp; lifts: OpenStreetMap / OpenSkiMap</p>
  </div>`, __recoveredScope.startRun, `Drop in ▸`);
}
