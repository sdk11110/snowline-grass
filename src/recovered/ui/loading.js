/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding setLoadingProgress. Live dependencies: loadingProgress, loadingFootsteps, loadingProgressElement. Writes: loadingProgress. */
export function create_setLoadingProgress(__recoveredScope) {
  return function setLoadingProgress(e) {
    if (!Number.isFinite(e)) return;
    __recoveredScope.loadingProgress = Math.max(__recoveredScope.loadingProgress, Math.min(1, Math.max(0, e)));
    let t = Math.floor(__recoveredScope.loadingProgress * __recoveredScope.loadingFootsteps.length + 1e-8);
    __recoveredScope.loadingFootsteps.forEach((e, n) => {
      e.classList.toggle(`landed`, n < t);
      e.classList.toggle(`current`, n === t - 1);
    });
    __recoveredScope.loadingProgressElement.setAttribute(`aria-valuenow`, String(Math.round(__recoveredScope.loadingProgress * 100)));
  };
}
/* Recovered binding setLoadingArrival. Live dependencies: loadingElement. */
export function create_setLoadingArrival(__recoveredScope) {
  return function setLoadingArrival(e) {
    __recoveredScope.loadingElement.querySelector(`.loading-arrival`).textContent = e;
  };
}
/* Recovered binding finishLoading. Live dependencies: setLoadingProgress, loadingElement. */
export function create_finishLoading(__recoveredScope) {
  return async function finishLoading() {
    __recoveredScope.setLoadingProgress(1);
    await new Promise(e => requestAnimationFrame(() => requestAnimationFrame(e)));
    __recoveredScope.loadingElement.classList.add(`done`);
    __recoveredScope.loadingElement.setAttribute(`aria-hidden`, `true`);
  };
}
