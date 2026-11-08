/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding ef. Live dependencies: Qd, weather. */
export function create_ef(__recoveredScope) {
  return () => {
    for (let e of __recoveredScope.Qd) e.setAttribute(`aria-pressed`, String(e.dataset.weather === __recoveredScope.weather.kind));
  };
}
/* Recovered binding nf. Live dependencies: tf, z, weather. */
export function create_nf(__recoveredScope) {
  return function nf() {
    __recoveredScope.tf || (Object.assign(__recoveredScope.z.prefs, {
      weather: __recoveredScope.weather.kind,
      hour: Math.round(__recoveredScope.weather.hour * 100) / 100,
      dayGoesBy: __recoveredScope.weather.running,
      aurora: __recoveredScope.weather.aurora
    }), __recoveredScope.z.save());
  };
}
/* Recovered binding af. Live dependencies: weather, qd, Jd, weatherPresets, rf, Yd. */
export function create_af(__recoveredScope) {
  return function af() {
    if (document.getElementById(`fly-weather`).classList.contains(`hidden`)) return;
    let e = Math.floor(__recoveredScope.weather.hour * 60);
    __recoveredScope.qd.value = `${String(Math.floor(e / 60)).padStart(2, `0`)}:${String(e % 60).padStart(2, `0`)}`;
    __recoveredScope.Jd.textContent = __recoveredScope.weather.kind === `changeable` ? `${__recoveredScope.weather.phase} · ${__recoveredScope.weatherPresets[__recoveredScope.weather.current].label.toLowerCase()}` : __recoveredScope.weather.phase;
    __recoveredScope.rf || (__recoveredScope.Yd.value = __recoveredScope.weather.hour.toFixed(2));
  };
}
