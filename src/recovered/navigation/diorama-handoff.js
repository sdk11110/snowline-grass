/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding n_. Live dependencies: $u, W, encodePlayerPosition, Zg. */
export function create_n_(__recoveredScope) {
  return function n_(e = __recoveredScope.$u.key) {
    return `./diorama.html?at=${e}${__recoveredScope.W !== `title` && __recoveredScope.W !== `swoop` ? `&you=${__recoveredScope.encodePlayerPosition(__recoveredScope.Zg())}` : ``}`;
  };
}
/* Recovered binding r_. Live dependencies: t_, n_. */
export function create_r_(__recoveredScope) {
  return function r_() {
    __recoveredScope.t_.href = __recoveredScope.n_();
  };
}
/* Recovered binding a_. Live dependencies: writeDioramaHandoff, c_. Writes: i_. */
export function create_a_(__recoveredScope) {
  return function a_(e, t) {
    __recoveredScope.i_ ||= (__recoveredScope.writeDioramaHandoff(t), __recoveredScope.c_(), {
      t: 0,
      href: e
    });
  };
}
/* Recovered binding o_. Live dependencies: i_, Bf, MathUtils, e_. Writes: i_. */
export function create_o_(__recoveredScope) {
  return function o_(e) {
    __recoveredScope.i_.t = Math.min(1, __recoveredScope.i_.t + e / (matchMedia(`(prefers-reduced-motion: reduce)`).matches ? .45 : .7));
    __recoveredScope.Bf(__recoveredScope.MathUtils.smoothstep(__recoveredScope.i_.t, 0, 1));
    __recoveredScope.i_.t >= 1 && (__recoveredScope.e_(), location.assign(__recoveredScope.i_.href), __recoveredScope.i_ = null);
  };
}
/* Recovered binding c_. Live dependencies: W, s_, Zg. */
export function create_c_(__recoveredScope) {
  return function c_() {
    try {
      __recoveredScope.W === `ride` || __recoveredScope.W === `lift` || __recoveredScope.W === `drive` || __recoveredScope.W === `horse` || __recoveredScope.W === `soak` || __recoveredScope.W === `swing` ? sessionStorage.setItem(__recoveredScope.s_, JSON.stringify(__recoveredScope.Zg())) : sessionStorage.removeItem(__recoveredScope.s_);
    } catch {}
  };
}
/* Recovered binding l_. Live dependencies: s_. */
export function create_l_(__recoveredScope) {
  return function l_() {
    try {
      let e = JSON.parse(sessionStorage.getItem(__recoveredScope.s_));
      return sessionStorage.removeItem(__recoveredScope.s_), e && performance.getEntriesByType(`navigation`)[0]?.type === `back_forward` ? e : null;
    } catch {
      return null;
    }
  };
}
/* Recovered binding u_. Live dependencies: Wg, MathUtils, groundHeightfield. */
export function create_u_(__recoveredScope) {
  return function u_(e) {
    if (e.lift) return __recoveredScope.Wg({
      kind: `lift`,
      id: String(e.lift),
      end: `top`
    });
    let t = __recoveredScope.MathUtils.degToRad(e.bearing);
    return __recoveredScope.groundHeightfield.inside(e.x, e.z) ? {
      x: e.x,
      z: e.z,
      dx: Math.sin(t),
      dz: -Math.cos(t),
      toast: `Back on the snow`
    } : null;
  };
}
