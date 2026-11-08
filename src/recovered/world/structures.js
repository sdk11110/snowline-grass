/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Ya. Live dependencies: createToonMaterial. */
export function create_Ya(__recoveredScope) {
  return (e, t = 0) => __recoveredScope.createToonMaterial({
    color: e
  }, {
    rim: t
  });
}
/* Recovered binding X. Live dependencies: Ya. */
export function create_X(__recoveredScope) {
  return {
    felt: __recoveredScope.Ya(`#f2eee4`),
    feltRoof: __recoveredScope.Ya(`#e6dfd0`),
    band: __recoveredScope.Ya(`#a8432f`),
    door: __recoveredScope.Ya(`#c4572f`),
    crown: __recoveredScope.Ya(`#7d5a3c`),
    timber: __recoveredScope.Ya(`#c98a3e`),
    board: __recoveredScope.Ya(`#efe3c8`),
    gold: __recoveredScope.Ya(`#d8a73e`, 1),
    stone: __recoveredScope.Ya(`#9d978c`),
    stoneDark: __recoveredScope.Ya(`#7d786f`),
    pole: __recoveredScope.Ya(`#6b5136`),
    logs: __recoveredScope.Ya(`#b98b5d`),
    hutRoof: __recoveredScope.Ya(`#6c5a48`),
    frame: __recoveredScope.Ya(`#7b5230`),
    pale: __recoveredScope.Ya(`#e6dac5`),
    shingle: __recoveredScope.Ya(`#a09583`),
    dark: __recoveredScope.Ya(`#34302d`),
    post: __recoveredScope.Ya(`#987a5c`),
    seat: __recoveredScope.Ya(`#c4463a`),
    rope: __recoveredScope.Ya(`#3d3a36`),
    orange: __recoveredScope.Ya(`#e2742c`, 1),
    steel: __recoveredScope.Ya(`#4b5157`),
    mast: __recoveredScope.Ya(`#e3e6e8`),
    panel: __recoveredScope.Ya(`#c9cfd3`)
  };
}
/* Recovered binding Qa. Live dependencies: W. */
export function create_Qa(__recoveredScope) {
  return (e, t, n) => new __recoveredScope.W(e, t, n);
}
/* Recovered binding Z. Live dependencies: c. */
export function create_Z(__recoveredScope) {
  return function Z(e, t, n, r = 0, i = 0, a = 0) {
    let o = new __recoveredScope.c(t, n);
    return o.position.set(r, i, a), o.castShadow = o.receiveShadow = true, e.add(o), o;
  };
}
/* Recovered binding $a. Live dependencies: . */
export function create_Dollara(__recoveredScope) {
  return function $a(e, t, n) {
    return e.userData.solids = t, e.userData.height = n, e;
  };
}
/* Recovered binding eo. Live dependencies: . */
export function create_eo(__recoveredScope) {
  return (e, t) => [0, Math.PI / 4].map(n => ({
    x: 0,
    z: 0,
    yaw: n,
    hw: e,
    hd: e,
    top: t
  }));
}
/* Recovered binding to. Live dependencies: Z, Qa, S, L, F. */
export function create_to(__recoveredScope) {
  return function to(e, t, n, r, i, a, o, s) {
    let c = n / 2 + a,
      l = Math.atan2(i, n / 2);
    for (let n of [-1, 1]) {
      let s = __recoveredScope.Z(e, __recoveredScope.Qa(t + 2 * a, .12, c / Math.cos(l)), o, 0, r + i - c / 2 * Math.tan(l) + .06, n * c / 2);
      s.rotation.x = n * l;
    }
    let u = new __recoveredScope.S([new __recoveredScope.L(-n / 2, 0), new __recoveredScope.L(n / 2, 0), new __recoveredScope.L(0, i)]);
    __recoveredScope.Z(e, new __recoveredScope.F(u, {
      depth: t,
      bevelEnabled: false
    }).rotateY(Math.PI / 2).translate(-t / 2, r, 0), s);
  };
}
/* Recovered binding ao. Live dependencies: g, no, Z, d, ro, X, st, io, Qa, oo, so, $a. */
export function create_ao(__recoveredScope) {
  return function ao() {
    let e = new __recoveredScope.g(),
      {
        R: t,
        wall: n,
        door: [r, i],
        gap: a
      } = __recoveredScope.no,
      o = Math.asin(r / t),
      s = Math.PI * 2 - 2 * o;
    __recoveredScope.Z(e, new __recoveredScope.d(t, t, n, 32, 1, true, o, s), __recoveredScope.ro, 0, n / 2, 0);
    __recoveredScope.Z(e, new __recoveredScope.d(t + .03, t + .03, .28, 32, 1, true, o, s), __recoveredScope.X.band, 0, n - .3, 0);
    __recoveredScope.Z(e, new __recoveredScope.st(t + .2, 1.5, 32, 1, true), __recoveredScope.io, 0, n + .75, 0);
    __recoveredScope.Z(e, new __recoveredScope.d(.5, .55, .3, 12), __recoveredScope.X.crown, 0, n + 1.45, 0);
    let c = Math.sqrt(t * t - r * r);
    for (let t of [-1, 1]) __recoveredScope.Z(e, __recoveredScope.Qa(.12, i, .16), __recoveredScope.X.door, t * r, i / 2, c);
    __recoveredScope.Z(e, __recoveredScope.Qa(2 * r + .12, .12, .16), __recoveredScope.X.door, 0, i + .06, c);
    __recoveredScope.Z(e, __recoveredScope.Qa(2 * r, n - i - .12, .06), __recoveredScope.X.felt, 0, (n + i + .12) / 2, c);
    let l = new __recoveredScope.g();
    l.position.set(-r, 0, c + .05);
    l.rotation.y = -2.3;
    __recoveredScope.Z(l, __recoveredScope.Qa(2 * r - .08, i - .06, .06), __recoveredScope.X.door, r - .04, (i - .06) / 2, 0);
    e.add(l);
    let u = Math.cos(l.rotation.y),
      f = Math.sin(l.rotation.y);
    __recoveredScope.Z(e, new __recoveredScope.d(t - .3, t - .3, .025, 32), __recoveredScope.X.band, 0, .0125, 0);
    __recoveredScope.Z(e, new __recoveredScope.d(t - .75, t - .75, .03, 32), __recoveredScope.oo, 0, .015, 0);
    let [p, m] = __recoveredScope.no.seat;
    __recoveredScope.Z(e, new __recoveredScope.d(.55, .56, .04, 20), __recoveredScope.so, p, .05, m + .08);
    __recoveredScope.Z(e, __recoveredScope.Qa(.5, .3, .4), __recoveredScope.X.crown, p - .85, .15, m + .15);
    __recoveredScope.Z(e, new __recoveredScope.d(.06, .08, .13, 10), __recoveredScope.X.gold, p - .85, .365, m + .15);
    let h = Math.asin(a / t),
      _ = (Math.PI * 2 - 2 * h) / 14,
      v = [];
    for (let e = 0; e < 14; e++) {
      let r = h + (e + .5) * _;
      v.push({
        x: Math.sin(r) * (t - .05),
        z: Math.cos(r) * (t - .05),
        yaw: r,
        hw: t * Math.tan(_ / 2) + .05,
        hd: .15,
        top: n + 1.6
      });
    }
    return v.push({
      x: -r + r * u,
      z: c + .05 - r * f,
      yaw: l.rotation.y,
      hw: r,
      hd: .05,
      top: i
    }), v.push({
      x: p - .85,
      z: m + .15,
      hw: .25,
      hd: .2,
      top: .3
    }, {
      x: p,
      z: m + .1,
      hw: .5,
      hd: .45,
      top: 1.1
    }), __recoveredScope.$a(e, v, n + 1.6);
  };
}
/* Recovered binding createYurtInteriorBounds. Live dependencies: no, Ga. */
export function create_createYurtInteriorBounds(__recoveredScope) {
  return function createYurtInteriorBounds(e, t = 4) {
    let {
        R: n,
        door: [r],
        seat: i
      } = __recoveredScope.no,
      a = Math.cos(e.rotation.y),
      o = Math.sin(e.rotation.y),
      s = (t, n) => {
        let r = t - e.position.x,
          i = n - e.position.z;
        return [r * a - i * o, r * o + i * a];
      },
      c = (t, r) => Math.hypot(t - e.position.x, r - e.position.z) < n - .1,
      l = (e, i) => {
        if (c(e, i)) return 1;
        let [a, o] = s(e, i),
          l = Math.sqrt(n * n - r * r);
        return Math.abs(a) < r + 1 && o >= l ? 1 - __recoveredScope.Ga(0, t, o - l) : 0;
      },
      u = (t, r) => {
        let i = t.x - e.position.x,
          a = t.z - e.position.z,
          o = Math.hypot(i, a),
          s = n - r;
        o <= s || (t.x = e.position.x + i / o * s, t.z = e.position.z + a / o * s);
      },
      [d, f] = i;
    return {
      room: l,
      inside: c,
      keepIn: u,
      seat: {
        x: e.position.x + d * a + f * o,
        y: e.position.y,
        z: e.position.z - d * o + f * a,
        yaw: e.rotation.y,
        cushion: .07
      }
    };
  };
}
/* Recovered binding lo. Live dependencies: . */
export function create_lo(__recoveredScope) {
  return [{
    dir: [0, -1],
    y: 4.6,
    colors: [`#2e5fb0`, `#d8352a`]
  }, {
    dir: [1, 0],
    y: 4.15,
    colors: [`#c8342c`, `#2550a0`]
  }, {
    dir: [-1, 0],
    y: 4.15,
    colors: [`#33a9dc`, `#f2c230`]
  }, {
    dir: [0, 1],
    y: 4.6,
    colors: [`#d8352a`, `#f2c230`]
  }];
}
/* Recovered binding uo. Live dependencies: g, Z, Qa, X, lo, Ya, d, $a. */
export function create_uo(__recoveredScope) {
  return function uo() {
    let e = new __recoveredScope.g(),
      t = 6.2,
      n = 3.2,
      r = 2.4;
    __recoveredScope.Z(e, __recoveredScope.Qa(.38, t, .38), __recoveredScope.X.timber, 0, t / 2, 0);
    for (let t of [-1, 1]) __recoveredScope.Z(e, __recoveredScope.Qa(.3, 1.3, .3), __recoveredScope.X.timber, t * .42, 6.55, 0).rotation.z = -t * .7;
    let i = [];
    for (let t = 0; t < 4; t++) {
      let a = Math.PI / 4 + t * Math.PI / 2,
        o = Math.sin(a),
        s = Math.cos(a),
        c = __recoveredScope.Z(e, __recoveredScope.Qa(.26, Math.hypot(r, n), .26), __recoveredScope.X.timber, o * r / 2, n / 2, s * r / 2);
      c.rotation.order = `YXZ`;
      c.rotation.set(-Math.atan2(r, n), a, 0);
      i.push({
        x: o * 2.6999999999999997 / 2,
        z: s * 2.6999999999999997 / 2,
        yaw: a,
        hw: .17,
        hd: r / 2,
        top: n
      });
    }
    for (let {
      dir: t,
      y: n,
      colors: r
    } of __recoveredScope.lo) {
      let i = new __recoveredScope.g();
      i.position.y = n;
      i.rotation.y = Math.atan2(t[0], t[1]);
      __recoveredScope.Z(i, __recoveredScope.Qa(.1, .34, 1.25), __recoveredScope.X.board, 0, 0, .82);
      __recoveredScope.Z(i, __recoveredScope.Qa(.11, .34, .32), __recoveredScope.Ya(r[0]), 0, 0, 1.6);
      __recoveredScope.Z(i, new __recoveredScope.d(0, .2, .34, 3).rotateX(Math.PI / 2).rotateZ(Math.PI / 2), __recoveredScope.Ya(r[1]), 0, 0, 1.86);
      e.add(i);
    }
    return __recoveredScope.$a(e, [{
      x: 0,
      z: 0,
      hw: .25,
      hd: .25,
      top: 7.2
    }, ...i], 7.2);
  };
}
/* Recovered binding mo. Live dependencies: loadGLTF, Vector3, createToonMaterial, po. Writes: po. */
export function create_mo(__recoveredScope) {
  return function mo() {
    return __recoveredScope.po ??= __recoveredScope.loadGLTF(`./models/prayer-wheels/prayer-wheels.glb`).then(e => {
      let t = e.scene,
        n = new Map();
      return t.traverse(e => {
        if (!e.isMesh) return;
        let t = /^wheel_/.test(e.name);
        if (t) {
          e.geometry.computeBoundingBox();
          let t = e.geometry.boundingBox.getCenter(new __recoveredScope.Vector3());
          e.geometry.translate(-t.x, 0, -t.z);
          e.geometry.computeBoundingBox();
          e.position.x += t.x;
          e.position.z += t.z;
        }
        let r = `${e.material.uuid}${t}`;
        n.has(r) || n.set(r, __recoveredScope.createToonMaterial({
          map: e.material.map,
          color: 16777215,
          side: e.material.side
        }, {
          rim: +!!t
        }));
        e.material = n.get(r);
        e.castShadow = e.receiveShadow = true;
      }), t;
    }), __recoveredScope.po;
  };
}
/* Recovered binding ho. Live dependencies: g, fo, mo, $a. */
export function create_ho(__recoveredScope) {
  return function ho() {
    let e = new __recoveredScope.g(),
      t = __recoveredScope.fo.scale;
    return e.userData.wheels = [], e.userData.ready = __recoveredScope.mo().then(n => {
      let r = n.clone();
      r.scale.setScalar(t);
      r.traverse(n => {
        if (!/^wheel_/.test(n.name)) return;
        let r = n.geometry.boundingBox;
        e.userData.wheels.push({
          mesh: n,
          x: n.position.x * t,
          r: (r.max.x - r.min.x + r.max.z - r.min.z) / 4 * t
        });
      });
      e.userData.wheels.sort((e, t) => e.x - t.x);
      e.add(r);
    }), __recoveredScope.$a(e, [{
      x: 0,
      z: 0,
      hw: (__recoveredScope.fo.posts + .01) * t,
      hd: __recoveredScope.fo.depth * t,
      top: __recoveredScope.fo.top * t
    }], __recoveredScope.fo.top * t);
  };
}
/* Recovered binding _o. Live dependencies: g, Z, d, X, st, Qa, Vector3, z, go, i, mt, Xa, De, Ke, $a, eo. */
export function create__o(__recoveredScope) {
  return function _o() {
    let e = new __recoveredScope.g(),
      t = 0;
    for (let [n, r] of [[3.3, .8], [2.5, .75], [1.75, .7]]) {
      __recoveredScope.Z(e, new __recoveredScope.d(n - .15, n, r, 11), t ? __recoveredScope.X.stone : __recoveredScope.X.stoneDark, 0, t + r / 2, 0);
      t += r;
    }
    __recoveredScope.Z(e, new __recoveredScope.st(1.1, .9, 9), __recoveredScope.X.stone, 0, t + .45, 0);
    __recoveredScope.Z(e, new __recoveredScope.d(.07, .1, 4.6, 6), __recoveredScope.X.pole, 0, t + 2.3, 0);
    __recoveredScope.Z(e, new __recoveredScope.st(.18, .6, 6), __recoveredScope.X.gold, 0, t + 4.9, 0);
    for (let t = 0; t < 3; t++) __recoveredScope.Z(e, __recoveredScope.Qa(1.6, (t + 1) * .27, .45), __recoveredScope.X.stoneDark, 0, (t + 1) * .135, 3.3 + (2.5 - t) * .45);
    let n = new __recoveredScope.Vector3(0, t + 4.2, 0),
      r = [],
      a = [];
    for (let e = 0; e < 8; e++) {
      let t = e / 8 * Math.PI * 2,
        o = new __recoveredScope.Vector3(Math.sin(t) * 5.2, .05, Math.cos(t) * 5.2);
      a.push(n, o);
      let c = o.clone().sub(n).normalize();
      for (let e = 0; e < 7; e++) {
        let t = n.clone().lerp(o, .12 + e * .11),
          a = new __recoveredScope.z().setFromPoints([t, t.clone().addScaledVector(c, .3), t.clone().addScaledVector(c, .3).setY(t.y - .26), t.clone().setY(t.y - .26)]);
        a.setIndex([0, 1, 2, 0, 2, 3]);
        let s = __recoveredScope.go[e % 5];
        a.setAttribute(`color`, new __recoveredScope.i([s, s, s, s].flatMap(e => e.toArray()), 3));
        r.push(a);
      }
    }
    let o = __recoveredScope.mt(r);
    return o.computeVertexNormals(), __recoveredScope.Z(e, o, __recoveredScope.Xa).castShadow = false, e.add(new __recoveredScope.De(new __recoveredScope.z().setFromPoints(a), new __recoveredScope.Ke({
      color: `#4a3f36`
    }))), __recoveredScope.$a(e, [...__recoveredScope.eo(3.3, t + 5), {
      x: 0,
      z: 3.95,
      hw: .8,
      hd: .7,
      top: .8
    }], t + 5.2);
  };
}
/* Recovered binding vo. Live dependencies: g, Z, Qa, X, to, $a. */
export function create_vo(__recoveredScope) {
  return function vo() {
    let e = new __recoveredScope.g(),
      t = 3.6,
      n = 2.4;
    return __recoveredScope.Z(e, __recoveredScope.Qa(t, n, 3), __recoveredScope.X.logs, 0, n / 2, 0), __recoveredScope.to(e, t, 3, n, 1.1, .3, __recoveredScope.X.hutRoof, __recoveredScope.X.logs), __recoveredScope.Z(e, __recoveredScope.Qa(.9, 1.85, .08), __recoveredScope.X.dark, .6, .93, 1.52), __recoveredScope.Z(e, __recoveredScope.Qa(.8, .6, .08), __recoveredScope.X.dark, -.9, 1.4, 1.52), __recoveredScope.$a(e, [{
      x: 0,
      z: 0,
      hw: 1.9000000000000001,
      hd: 1.6,
      top: 3.5
    }], 3.5);
  };
}
/* Recovered binding yo. Live dependencies: g, Z, Qa, X, ot, jo, c, me, $a. */
export function create_yo(__recoveredScope) {
  return function yo() {
    let e = new __recoveredScope.g(),
      t = .34,
      n = .28,
      r = .24,
      i = 3.58;
    for (let r of [-1, 1]) {
      let a = r * 2.4699999999999998;
      __recoveredScope.Z(e, __recoveredScope.Qa(t, i, n), __recoveredScope.X.frame, a, i / 2, 0);
      __recoveredScope.Z(e, __recoveredScope.Qa(t * .9, .2, 1.9), __recoveredScope.X.frame, a, .1, 0);
      for (let n of [-1, 1]) __recoveredScope.Z(e, __recoveredScope.Qa(t * .6, 1.45, .16), __recoveredScope.X.frame, a, .62, n * .48).rotation.x = n * .68;
    }
    __recoveredScope.Z(e, __recoveredScope.Qa(5.279999999999999, t, n), __recoveredScope.X.frame, 0, i - t / 2, 0);
    __recoveredScope.Z(e, __recoveredScope.Qa(4.6, r, n), __recoveredScope.X.frame, 0, r / 2, 0);
    let a = new __recoveredScope.ot({
        map: __recoveredScope.jo(`云霄峰 2800`),
        transparent: true,
        alphaTest: .5,
        side: 2
      }),
      o = new __recoveredScope.c(new __recoveredScope.me(2.6, .55), a);
    return o.position.set(0, 3.24 - .42, 0), e.add(o), __recoveredScope.$a(e, [-1, 1].map(e => ({
      x: e * 2.4699999999999998,
      z: 0,
      hw: .22000000000000003,
      hd: .95,
      top: i
    })), i);
  };
}
/* Recovered binding xo. Live dependencies: bo. */
export function create_xo(__recoveredScope) {
  return [[-.455, __recoveredScope.bo.door[0], .16, .25, .32], [__recoveredScope.bo.door[1], .463, .16, .25, .32], [-.455, -.42, -.31, .25, .32], [.436, .463, -.31, .25, .32], [-.455, -.1, -.31, -.25, .32], [.15, .463, -.31, -.25, .32], [-.135, -.1, -.4, -.25, .35], [.15, .185, -.4, -.25, .35], [-.135, .185, -.4, -.381, .35], [-.42, -.19, -.25, -.17, .15], [-.27, -.19, -.17, -.05, .15], {
    at: [-.2925, -.1475],
    yaw: -Math.PI / 4,
    hw: .064,
    hd: .032,
    top: .15
  }, [-.19, -.125, -.24, -.17, .14], [-.22, -.16, .01, .14, .26], [-.1, -.035, -.32, -.26, .14], [-.1, -.05, -.385, -.335, .16], [.06, .4, -.25, -.175, .14], [-.437, -.096, .25, .335, .14], [.189, .436, .25, .335, .14], [-.18, -.07, .25, .37, .22], {
    at: [.163, .337],
    yaw: Math.atan2(.054, .162),
    hw: .012,
    hd: .086,
    top: .32
  }, [.385, .495, .305, .425, .15], [-.45, -.135, -.37, -.29, .14], [.185, .46, -.37, -.29, .14]];
}
/* Recovered binding Co. Live dependencies: bo. */
export function create_Co(__recoveredScope) {
  return () => __recoveredScope.bo.floor * __recoveredScope.bo.scale - .03;
}
/* Recovered binding createCabinInteriorBounds. Live dependencies: bo, Ga, So. */
export function create_createCabinInteriorBounds(__recoveredScope) {
  return function createCabinInteriorBounds(e, t = 4) {
    let n = __recoveredScope.bo.scale,
      r = Math.cos(e.rotation.y),
      i = Math.sin(e.rotation.y),
      a = ([t, a]) => ({
        x: e.position.x + t * n * r + a * n * i,
        z: e.position.z - t * n * i + a * n * r
      }),
      o = (t, n) => {
        let a = t - e.position.x,
          o = n - e.position.z;
        return [a * r - o * i, a * i + o * r];
      },
      [s, c, l, u] = __recoveredScope.bo.room.map(e => e * n),
      d = (e, t) => {
        let [n, r] = o(e, t);
        return n > s && n < c && r > l && r < u;
      },
      f = (__recoveredScope.bo.door[0] + __recoveredScope.bo.door[1]) / 2 * n,
      p = (__recoveredScope.bo.door[1] - __recoveredScope.bo.door[0]) / 2 * n,
      m = (e, n) => {
        let [r, i] = o(e, n);
        return r > s && r < c && i > l && i < u ? 1 : Math.abs(r - f) < p + 1 && i >= u ? 1 - __recoveredScope.Ga(0, t, i - u) : 0;
      },
      h = (t, n) => {
        let [a, d] = o(t.x, t.z),
          f = Math.max(s + n, Math.min(c - n, a)),
          p = Math.max(l + n, Math.min(u - n, d));
        t.x = e.position.x + f * r + p * i;
        t.z = e.position.z - f * i + p * r;
      };
    return {
      home: {
        ...a(__recoveredScope.So.home),
        yaw: e.rotation.y,
        roam: __recoveredScope.So.roam * n,
        via: a(__recoveredScope.So.via),
        door: a(__recoveredScope.So.door),
        inside: d
      },
      inside: d,
      room: m,
      keepIn: h
    };
  };
}
/* Recovered binding To. Live dependencies: g, bo, Co, xo, loadGLTF, Eo, ot, createToonMaterial, $a. */
export function create_To(__recoveredScope) {
  return function To() {
    let e = new __recoveredScope.g(),
      t = __recoveredScope.bo.scale,
      n = e => e * t - __recoveredScope.Co(),
      r = __recoveredScope.xo.map(e => Array.isArray(e) ? {
        x: (e[0] + e[1]) / 2 * t,
        z: (e[2] + e[3]) / 2 * t,
        hw: (e[1] - e[0]) / 2 * t,
        hd: (e[3] - e[2]) / 2 * t,
        top: n(e[4])
      } : {
        x: e.at[0] * t,
        z: e.at[1] * t,
        yaw: e.yaw,
        hw: e.hw * t,
        hd: e.hd * t,
        top: n(e.top)
      });
    return e.userData.ready = __recoveredScope.loadGLTF(`./models/coffee-cabin/coffee-cabin.glb`).then(n => {
      let r = n.scene;
      r.scale.setScalar(t);
      r.position.y = -__recoveredScope.Co();
      r.traverse(e => {
        if (e.isLight) {
          if (!/^Interior/.test(e.name)) {
            e.visible = false;
            return;
          }
          e.distance *= t;
          e.intensity *= t * t * __recoveredScope.Eo;
          e.decay = 2;
          return;
        }
        if (!e.isMesh) return;
        let n = e.material,
          r = n.transparent || n.opacity < 1 || /glass/i.test(n.name);
        n.emissive && n.emissive.getHex() > 0 ? e.material = new __recoveredScope.ot({
          color: n.emissive.clone().multiplyScalar(Math.min(1, n.emissiveIntensity ?? 1))
        }) : (e.material = r ? __recoveredScope.createToonMaterial({
          color: n.color,
          transparent: true,
          opacity: n.opacity,
          depthWrite: false,
          side: n.side
        }, {
          hatch: 0
        }) : __recoveredScope.createToonMaterial({
          map: n.map,
          color: n.map ? 16777215 : n.color,
          side: n.side
        }), e.castShadow = !r, e.receiveShadow = true);
      });
      e.add(r);
    }), __recoveredScope.$a(e, r, n(.8));
  };
}
/* Recovered binding Do. Live dependencies: g, Z, d, X, Qa, x, $a. */
export function create_Do(__recoveredScope) {
  return function Do() {
    let e = new __recoveredScope.g(),
      t = 2.65,
      n = 3.4,
      r = 3.35;
    for (let r of [-1, 1]) __recoveredScope.Z(e, new __recoveredScope.d(.15, .17, n, 8), __recoveredScope.X.post, r * t, n / 2, 0);
    __recoveredScope.Z(e, new __recoveredScope.d(.13, .13, 5.8, 8), __recoveredScope.X.post, 0, r, 0).rotation.z = Math.PI / 2;
    let i = [];
    for (let t of [-1, 1]) {
      let n = new __recoveredScope.g();
      n.name = `swing-seat`;
      n.position.set(t * 1.25, r, 0);
      e.add(n);
      __recoveredScope.Z(n, __recoveredScope.Qa(.75, .07, .38), __recoveredScope.X.seat, 0, -2.8, 0);
      for (let e of [-.32, .32]) __recoveredScope.Z(n, __recoveredScope.Qa(.035, 2.8, .035), __recoveredScope.X.rope, e, -2.8 / 2, 0);
      let a = new __recoveredScope.x();
      a.position.y = -2.7649999999999997;
      n.add(a);
      i.push({
        pivot: n,
        x: t * 1.25,
        length: 2.7649999999999997,
        mount: a
      });
    }
    return e.userData.seats = i, __recoveredScope.$a(e, [-1, 1].map(e => ({
      x: e * t,
      z: 0,
      hw: .22,
      hd: .22,
      top: n
    })), n);
  };
}
/* Recovered binding Oo. Live dependencies: g, Xe, K, i, Z, Za, d, X, Qa, $a. */
export function create_Oo(__recoveredScope) {
  return function Oo() {
    let e = new __recoveredScope.g(),
      t = 2.3,
      n = 2.2,
      r = .9,
      a = new __recoveredScope.Xe(t, 1).scale(1, r, 1),
      o = a.attributes.position,
      s = [],
      c = new __recoveredScope.K(`#2e3a45`),
      l = new __recoveredScope.K(`#e2742c`);
    for (let e = 0; e < o.count; e += 3) {
      let n = (o.getY(e) + o.getY(e + 1) + o.getY(e + 2)) / 3 > t * r * .55 ? c : l;
      for (let e = 0; e < 3; e++) s.push(n.r, n.g, n.b);
    }
    a.setAttribute(`color`, new __recoveredScope.i(s, 3));
    __recoveredScope.Z(e, a, __recoveredScope.Za, 0, 4.27 - .35, 0);
    __recoveredScope.Z(e, new __recoveredScope.d(t * .85, t * .7, .45, 12), __recoveredScope.X.steel, 0, 2.4000000000000004, 0);
    let u = [];
    for (let t = 0; t < 4; t++) {
      let r = Math.PI / 4 + t * Math.PI / 2,
        i = Math.sin(r) * 1.45,
        a = Math.cos(r) * 1.45;
      __recoveredScope.Z(e, new __recoveredScope.d(.11, .2, 1.8000000000000003, 8), __recoveredScope.X.steel, i, 1.35, a);
      __recoveredScope.Z(e, new __recoveredScope.d(.22, .26, .5, 8), __recoveredScope.X.orange, i, .25, a);
      u.push({
        x: i,
        z: a,
        hw: .27,
        hd: .27,
        top: n
      });
    }
    let f = Math.hypot(n, .8),
      p = Math.atan2(-.8, n);
    for (let t of [-1, 1]) __recoveredScope.Z(e, __recoveredScope.Qa(.05, f, .05), __recoveredScope.X.steel, t * .28, n / 2, 1.7).rotation.x = p;
    for (let t = 1; t <= 5; t++) __recoveredScope.Z(e, __recoveredScope.Qa(.56, .04, .05), __recoveredScope.X.steel, 0, t / 6 * n, 2.1 - t / 6 * .8);
    return __recoveredScope.$a(e, u, 5.99);
  };
}
/* Recovered binding ko. Live dependencies: g, Z, Qa, X, d, $a. */
export function create_ko(__recoveredScope) {
  return function ko() {
    let e = new __recoveredScope.g();
    __recoveredScope.Z(e, __recoveredScope.Qa(1.4, .5, 1.4), __recoveredScope.X.stoneDark, 0, .25, 0);
    __recoveredScope.Z(e, new __recoveredScope.d(.32, .5, 26, 8), __recoveredScope.X.mast, 0, 13, 0);
    for (let t = 0; t < 3; t++) {
      let n = t * Math.PI * 2 / 3;
      __recoveredScope.Z(e, __recoveredScope.Qa(.35, 2.2, .12), __recoveredScope.X.panel, Math.sin(n) * .48, 22.5, Math.cos(n) * .48).rotation.y = n;
      __recoveredScope.Z(e, __recoveredScope.Qa(.3, 1.2, .1), __recoveredScope.X.panel, Math.sin(n + 1) * .5, 18, Math.cos(n + 1) * .5).rotation.y = n + 1;
    }
    for (let t = 0; t < 6; t++) {
      let n = t * Math.PI / 3;
      __recoveredScope.Z(e, new __recoveredScope.d(.03, .03, 1.6, 4), __recoveredScope.X.steel, Math.sin(n) * .3, 26.6, Math.cos(n) * .3).rotation.set(Math.cos(n) * .5, 0, -Math.sin(n) * .5);
    }
    return __recoveredScope.$a(e, [{
      x: 0,
      z: 0,
      hw: .75,
      hd: .75,
      top: 27
    }], 27.4);
  };
}
/* Recovered binding Ao. Live dependencies: ao, uo, ho, _o, vo, yo, To, Do, Oo, ko. */
export function create_Ao(__recoveredScope) {
  return {
    yurt: __recoveredScope.ao,
    signpost: __recoveredScope.uo,
    prayerWheels: __recoveredScope.ho,
    ovoo: __recoveredScope._o,
    hut: __recoveredScope.vo,
    photoFrame: __recoveredScope.yo,
    cabin: __recoveredScope.To,
    swing: __recoveredScope.Do,
    pod: __recoveredScope.Oo,
    mast: __recoveredScope.ko
  };
}
/* Recovered binding jo. Live dependencies: qe, he. */
export function create_jo(__recoveredScope) {
  return function jo(e) {
    let t = document.createElement(`canvas`);
    t.width = 512;
    t.height = 108;
    let n = t.getContext(`2d`);
    n.fillStyle = `#e2b54a`;
    n.strokeStyle = `#5a3d1c`;
    n.lineWidth = 6;
    n.textAlign = `center`;
    n.textBaseline = `middle`;
    n.font = `700 84px "PingFang SC", "Patrick Hand SC", sans-serif`;
    n.strokeText(e, 256, 58);
    n.fillText(e, 256, 58);
    let r = new __recoveredScope.qe(t);
    return r.colorSpace = __recoveredScope.he, r;
  };
}
/* Recovered binding Mo. Live dependencies: qe, he, Le, Se. */
export function create_Mo(__recoveredScope) {
  return function Mo(e) {
    let t = document.createElement(`canvas`);
    t.width = t.height = 128;
    let n = t.getContext(`2d`);
    n.beginPath();
    n.arc(64, 64, 58, 0, Math.PI * 2);
    n.fillStyle = e === `M` ? `#5c6a73` : `#c8402f`;
    n.fill();
    n.lineWidth = 7;
    n.strokeStyle = `#fbfaf5`;
    n.stroke();
    n.fillStyle = `#fbfaf5`;
    n.textAlign = `center`;
    n.textBaseline = `middle`;
    n.font = `700 ${e.length > 1 ? 54 : 78}px "Patrick Hand SC", sans-serif`;
    n.fillText(e, 64, 68);
    let r = new __recoveredScope.qe(t);
    r.colorSpace = __recoveredScope.he;
    let i = new __recoveredScope.Le(new __recoveredScope.Se({
      map: r,
      depthTest: false,
      depthWrite: false,
      sizeAttenuation: false
    }));
    return i.scale.set(.05, .05, 1), i.renderOrder = 10, i;
  };
}
/* Recovered binding No. Live dependencies: g, summitObjectLayout, Ca, Ao, Mo. */
export function create_No(__recoveredScope) {
  return function No(e, {
    labels: t = false,
    keep: n = () => true
  } = {}) {
    let r = new __recoveredScope.g();
    r.name = `summit`;
    let i = new __recoveredScope.g();
    i.visible = t;
    r.add(i);
    let a = [],
      o = new Map(),
      s = [];
    for (let t of __recoveredScope.summitObjectLayout.objects) {
      let {
          x: c,
          z: l,
          yaw: u
        } = __recoveredScope.Ca(t.id),
        [d, f] = t.round ? [t.size[0], t.size[0]] : t.size;
      if (!n({
        x: c,
        z: l,
        yaw: u,
        hw: d,
        hd: f
      })) continue;
      let p = new __recoveredScope.g();
      p.name = t.id;
      p.userData = {
        id: t.id,
        label: t.label
      };
      p.position.set(c, e.heightAt(c, l), l);
      p.rotation.y = u;
      let m = __recoveredScope.Ao[t.kind]();
      m.name = `placeholder`;
      m.userData.ready && s.push(m.userData.ready);
      p.add(m);
      r.add(p);
      o.set(t.id, p);
      let h = Math.cos(u),
        _ = Math.sin(u);
      for (let e of m.userData.solids) a.push({
        id: t.id,
        x: c + e.x * h + e.z * _,
        z: l - e.x * _ + e.z * h,
        yaw: u + (e.yaw ?? 0),
        hw: e.hw,
        hd: e.hd,
        top: p.position.y + e.top
      });
      let v = __recoveredScope.Mo(t.label);
      v.position.set(c, p.position.y + m.userData.height + 1.5, l);
      i.add(v);
    }
    return {
      group: r,
      footprints: a,
      byId: o,
      tags: i,
      ready: Promise.all(s)
    };
  };
}
/* Recovered binding Uc. Live dependencies: qe, he. */
export function create_Uc(__recoveredScope) {
  return function Uc(e, t, n) {
    let r = document.createElement(`canvas`);
    r.width = 1024;
    r.height = 256;
    let i = r.getContext(`2d`);
    i.fillStyle = t;
    i.fillRect(0, 0, r.width, r.height);
    i.strokeStyle = `#23303a`;
    i.lineWidth = 14;
    i.strokeRect(7, 7, r.width - 14, r.height - 14);
    i.fillStyle = n;
    i.textAlign = `center`;
    i.textBaseline = `middle`;
    i.font = `700 104px "Patrick Hand SC", "PingFang SC", sans-serif`;
    i.fillText(e[0], r.width / 2, e[1] ? 100 : 128);
    e[1] && (i.font = `56px "Patrick Hand SC", sans-serif`, i.fillText(e[1], r.width / 2, 196));
    let a = new __recoveredScope.qe(r);
    return a.colorSpace = __recoveredScope.he, a.anisotropy = 4, a;
  };
}
/* Recovered binding Wc. Live dependencies: g, createToonMaterial, c, W, fc, d, me, ot, Uc. */
export function create_Wc(__recoveredScope) {
  return function Wc(e, {
    x: t,
    z: n,
    faceTo: r,
    roof: i,
    zh: a,
    en: o,
    ele: s
  }, {
    scale: l = 1
  } = {}) {
    let u = new __recoveredScope.g(),
      f = Math.atan2(r[0] - t, r[1] - n),
      p = 1 / 0,
      m = -1 / 0,
      h = Math.cos(f),
      _ = Math.sin(f);
    for (let r = -.5; r <= .5; r += .125) for (let i = -.5; i <= .5; i += .25) {
      let a = r * 96 * 1.3 * l,
        o = i * 34 * 1.6 * l,
        s = e.heightAt(t + a * h + o * _, n - a * _ + o * h);
      p = Math.min(p, s);
      m = Math.max(m, s);
    }
    u.position.set(t, m, n);
    u.rotation.y = f;
    u.scale.setScalar(l);
    let v = (m - p) / l + 2,
      y = __recoveredScope.createToonMaterial({
        color: i
      }, {
        rim: 1
      }),
      b = (e, t, n, r, i) => {
        let a = new __recoveredScope.c(e, t);
        return a.position.set(n, r, i), a.castShadow = true, a.receiveShadow = true, u.add(a), a;
      };
    b(new __recoveredScope.W(120, v, 51), __recoveredScope.fc.wall, 0, -v / 2 + .4, 0);
    b(new __recoveredScope.W(96, 10, 34), __recoveredScope.fc.wall, 0, 5, 0);
    b(new __recoveredScope.W(82.56, 6, .6), __recoveredScope.fc.glass, 0, 4.2, 17);
    b(new __recoveredScope.W(90.24, 7, 24.48), __recoveredScope.fc.wood, 0, 13.5, -2.04);
    let x = (e, t, n) => {
      let r = b(new __recoveredScope.W(e, 1.2, 32.3), y, t, 17.3 + Math.tan(Math.abs(n)) * e * .5, -1.36);
      r.rotation.z = n;
    };
    x(51.84, -23.04, -.16);
    x(48, 24, .11);
    b(new __recoveredScope.W(22, 1, 9), y, 11.52, 6.2, 21.2);
    for (let e of [-9, 9]) b(new __recoveredScope.d(.4, .4, 6, 6), __recoveredScope.fc.dark, 11.52 + e, 3, 25);
    let S = new __recoveredScope.c(new __recoveredScope.me(34, 8.5), new __recoveredScope.ot({
      map: __recoveredScope.Uc([a, `${o} · ${s} m`], `#fbfaf5`, `#23303a`)
    }));
    return S.position.set(-17.28, 13.6, 10.299999999999999), u.add(S), u.userData.footprint = {
      x: t,
      z: n,
      yaw: f,
      hw: 60 * l,
      hd: 25.5 * l,
      top: m + 20 * l
    }, u;
  };
}
/* Recovered binding Gc. Live dependencies: g, createToonMaterial, c, d, W, Uc, me, ot. */
export function create_Gc(__recoveredScope) {
  return function Gc(e, t, n, r, i) {
    let a = new __recoveredScope.g(),
      o = e.heightAt(t.x, t.z);
    a.position.set(t.x, o, t.z);
    a.rotation.y = Math.atan2(n.x, n.z);
    let s = __recoveredScope.createToonMaterial({
      color: i
    }, {
      rim: 1
    });
    for (let e of [-9, 9]) {
      let t = new __recoveredScope.c(new __recoveredScope.d(.6, .75, 6.5, 8).translate(0, 3.25, 0), s);
      t.position.x = e;
      t.castShadow = true;
      a.add(t);
    }
    let l = new __recoveredScope.c(new __recoveredScope.W(20, 2.6, .9), s);
    l.position.y = 7.2;
    l.castShadow = true;
    let u = __recoveredScope.Uc(r, `#fbfaf5`, `#23303a`),
      f = new __recoveredScope.c(new __recoveredScope.me(14, 3.5), new __recoveredScope.ot({
        map: u
      }));
    f.position.set(0, 7.2, .5);
    let p = f.clone();
    return p.rotation.y = Math.PI, p.position.z = -.5, a.add(l, f, p), a.userData.footprint = {
      x: t.x,
      z: t.z,
      yaw: a.rotation.y,
      hw: 9.75,
      hd: .75
    }, a;
  };
}
