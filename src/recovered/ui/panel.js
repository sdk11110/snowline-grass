/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding ff. Live dependencies: uf, lf. Writes: df. */
export function create_ff(__recoveredScope) {
  return function ff(e, t, n, r = null) {
    document.getElementById(`panel-tab`).textContent = e;
    document.getElementById(`panel-body`).innerHTML = t;
    __recoveredScope.uf.textContent = r ?? `▶`;
    __recoveredScope.uf.classList.toggle(`wide`, !!r);
    __recoveredScope.lf.classList.remove(`hidden`);
    __recoveredScope.df = () => {
      __recoveredScope.lf.classList.add(`hidden`);
      n();
    };
  };
}
