/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding ap. Live dependencies: qe, he. */
export function create_ap(__recoveredScope) {
  return function ap(e, t, n) {
    let r = document.createElement(`canvas`);
    r.width = e;
    r.height = t;
    n(r.getContext(`2d`), e, t);
    let i = new __recoveredScope.qe(r);
    return i.colorSpace = __recoveredScope.he, i.anisotropy = 8, i;
  };
}
/* Recovered binding op. Live dependencies: ap, D. */
export function create_op(__recoveredScope) {
  return function op() {
    let e = [[0, `#5d6264`], [.16, `#6f7472`], [.3, `#7d6a5a`], [.44, `#8f7a63`], [.56, `#a48a6c`], [.68, `#8c735d`], [.8, `#a79680`], [.9, `#7f6a58`]],
      t = __recoveredScope.ap(512, 1024, (t, n, r) => {
        e.forEach(([i, a], o) => {
          let s = o + 1 < e.length ? e[o + 1][0] : 1.01;
          t.fillStyle = a;
          t.beginPath();
          for (let e = 0; e <= n; e += 8) {
            let a = Math.sin(e / n * Math.PI * 2 * (2 + o)) * .012 + Math.sin(e / n * Math.PI * 2 * 5 + o) * .006;
            t[e ? `lineTo` : `moveTo`](e, r - (i + (o ? a : -.1)) * r);
          }
          for (let e = n; e >= 0; e -= 8) {
            let i = Math.sin(e / n * Math.PI * 2 * (3 + o)) * .012 + Math.sin(e / n * Math.PI * 2 * 4 + o) * .006;
            t.lineTo(e, r - (s + i) * r);
          }
          t.fill();
        });
        let i = 7,
          a = () => (i = i * 16807 % 2147483647) / 2147483647;
        for (let e = 0; e < 260; e++) {
          let e = a() * n,
            i = a() * r;
          t.fillStyle = a() > .5 ? `rgba(40,46,52,0.35)` : `rgba(250,245,235,0.25)`;
          t.beginPath();
          t.ellipse(e, i, 2 + a() * 6, 1.5 + a() * 3, a() * 3, 0, Math.PI * 2);
          t.fill();
        }
      });
    return t.wrapS = __recoveredScope.D, t;
  };
}
/* Recovered binding sp. Live dependencies: ap, D. */
export function create_sp(__recoveredScope) {
  return function sp() {
    let e = __recoveredScope.ap(1024, 128, (e, t, n) => {
      e.fillStyle = `#7a5640`;
      e.fillRect(0, 0, t, n);
      for (let r = 0; r < 46; r++) {
        let i = r / 46 * n;
        e.strokeStyle = r % 3 ? `rgba(60,38,26,0.25)` : `rgba(150,110,80,0.25)`;
        e.lineWidth = 1 + r % 4;
        e.beginPath();
        for (let n = 0; n <= t; n += 16) e[n ? `lineTo` : `moveTo`](n, i + Math.sin(n * .006 + r) * 4 + Math.sin(n * .031 + r * 2) * 1.5);
        e.stroke();
      }
    });
    return e.wrapS = e.wrapT = __recoveredScope.D, e;
  };
}
/* Recovered binding cp. Live dependencies: ap. */
export function create_cp(__recoveredScope) {
  return function cp(e, t) {
    return __recoveredScope.ap(2048, 160, (n, r, i) => {
      let a = n.createLinearGradient(0, 0, 0, i);
      a.addColorStop(0, `#e7c873`);
      a.addColorStop(1, `#c9a24f`);
      n.fillStyle = a;
      n.fillRect(0, 0, r, i);
      n.strokeStyle = `#6d5124`;
      n.lineWidth = 6;
      n.strokeRect(10, 10, r - 20, i - 20);
      n.fillStyle = `#3b2c14`;
      n.textAlign = `center`;
      n.textBaseline = `middle`;
      n.font = `700 70px "Patrick Hand SC", "PingFang SC", sans-serif`;
      n.fillText(e, r / 2, 62);
      n.font = `38px "Patrick Hand SC", "PingFang SC", sans-serif`;
      n.fillText(t, r / 2, 118);
    });
  };
}
/* Recovered binding lp. Live dependencies: ap. */
export function create_lp(__recoveredScope) {
  return function lp() {
    return __recoveredScope.ap(256, 256, e => {
      e.fillStyle = `#d8b863`;
      e.beginPath();
      e.arc(128, 128, 124, 0, Math.PI * 2);
      e.fill();
      e.strokeStyle = `#6d5124`;
      e.lineWidth = 6;
      e.beginPath();
      e.arc(128, 128, 112, 0, Math.PI * 2);
      e.stroke();
      e.fillStyle = `#3b2c14`;
      e.beginPath();
      e.moveTo(128, 34);
      e.lineTo(156, 140);
      e.lineTo(128, 124);
      e.lineTo(100, 140);
      e.closePath();
      e.fill();
      e.font = `700 54px "Patrick Hand SC", sans-serif`;
      e.textAlign = `center`;
      e.textBaseline = `middle`;
      e.fillText(`N`, 128, 186);
    });
  };
}
/* Recovered binding up. Live dependencies: z, i, Vector3. */
export function create_up(__recoveredScope) {
  return function up(e, t, n, r, a, o) {
    let c = [],
      l = [],
      u = [],
      {
        verts: d,
        size: f,
        cells: p,
        x0: m,
        z0: h
      } = e,
      g = 0,
      _ = null;
    t.forEach((t, n) => {
      let i = m + t % d / p * f,
        s = h + Math.floor(t / d) / p * f;
      _ && (g += Math.hypot(i - _[0], s - _[1]));
      _ = [i, s];
      let v = r(e.h[t]),
        y = a(e.h[t]);
      if (c.push(i, v, s, i, y, s), l.push(g / 1600, o(v), g / 1600, o(y)), n) {
        let e = n * 2;
        u.push(e - 2, e - 1, e, e, e - 1, e + 1);
      }
    });
    let v = new __recoveredScope.z();
    if (v.setAttribute(`position`, new __recoveredScope.i(c, 3)), v.setAttribute(`uv`, new __recoveredScope.i(l, 2)), v.setIndex(u), v.computeVertexNormals(), new __recoveredScope.Vector3().fromBufferAttribute(v.attributes.normal, 0).dot(n) < 0) {
      let e = v.index.array;
      for (let t = 0; t < e.length; t += 3) [e[t + 1], e[t + 2]] = [e[t + 2], e[t + 1]];
      v.computeVertexNormals();
    }
    return v;
  };
}
/* Recovered binding createPedestalDioramaBase. Live dependencies: g, Vector3, createToonMaterial, op, c, up, ip, sp, W, me, cp, B, lp, ap, ot. */
export function create_createPedestalDioramaBase(__recoveredScope) {
  return function createPedestalDioramaBase(e, {
    baseY: t,
    top: n,
    title: r,
    subtitle: i
  }) {
    let a = new __recoveredScope.g(),
      o = e.verts,
      l = [{
        ks: [...Array(o).keys()],
        out: new __recoveredScope.Vector3(0, 0, -1)
      }, {
        ks: [...Array(o).keys()].map(e => (o - 1) * o + e),
        out: new __recoveredScope.Vector3(0, 0, 1)
      }, {
        ks: [...Array(o).keys()].map(e => e * o),
        out: new __recoveredScope.Vector3(-1, 0, 0)
      }, {
        ks: [...Array(o).keys()].map(e => e * o + o - 1),
        out: new __recoveredScope.Vector3(1, 0, 0)
      }],
      u = __recoveredScope.createToonMaterial({
        map: __recoveredScope.op()
      }, {
        hatch: 1
      }),
      d = __recoveredScope.createToonMaterial({
        color: `#f4f6f1`
      }, {
        hatch: 1
      }),
      f = e => (e - t) / (n - t);
    for (let n of l) {
      let r = new __recoveredScope.c(__recoveredScope.up(e, n.ks, n.out, e => e + .5, e => e - __recoveredScope.ip, f), d),
        i = new __recoveredScope.c(__recoveredScope.up(e, n.ks, n.out, e => e - __recoveredScope.ip, () => t, f), u);
      i.receiveShadow = r.receiveShadow = true;
      a.add(r, i);
    }
    let p = __recoveredScope.sp(),
      m = __recoveredScope.createToonMaterial({
        map: p,
        color: `#b89a86`
      }, {
        hatch: 1
      }),
      h = e.size,
      [_, v] = e.center,
      y = [{
        w: h + 260,
        h: 170,
        y: t
      }, {
        w: h + 520,
        h: 120,
        y: t - 170
      }];
    for (let e of y) {
      let t = new __recoveredScope.c(new __recoveredScope.W(e.w, e.h, e.w), m);
      t.position.set(_, e.y - e.h / 2, v);
      t.receiveShadow = true;
      t.castShadow = true;
      a.add(t);
    }
    let b = new __recoveredScope.c(new __recoveredScope.me(2400, 150), __recoveredScope.createToonMaterial({
      map: __recoveredScope.cp(r, i)
    }, {
      hatch: 0
    }));
    b.position.set(_, t - 85, v + (h + 260) / 2 + 1.5);
    a.add(b);
    let x = new __recoveredScope.c(new __recoveredScope.B(95, 40), __recoveredScope.createToonMaterial({
      map: __recoveredScope.lp()
    }, {
      hatch: 0
    }));
    x.rotation.x = -Math.PI / 2;
    x.position.set(_ + h / 2 + 65, t + 1.5, v + h / 2 + 65);
    x.scale.setScalar(.55);
    a.add(x);
    let S = __recoveredScope.ap(256, 256, e => {
        let t = e.createRadialGradient(128, 128, 30, 128, 128, 128);
        t.addColorStop(0, `rgba(20,50,55,0.38)`);
        t.addColorStop(.55, `rgba(20,50,55,0.18)`);
        t.addColorStop(1, `rgba(20,50,55,0)`);
        e.fillStyle = t;
        e.fillRect(0, 0, 256, 256);
      }),
      C = new __recoveredScope.c(new __recoveredScope.me(h * 2.1, h * 2.1), new __recoveredScope.ot({
        map: S,
        transparent: true,
        depthWrite: false
      }));
    return C.rotation.x = -Math.PI / 2, C.position.set(_, t - 290 - 2, v), C.renderOrder = -1, a.add(C), {
      group: a,
      shadow: C,
      floorY: t - 290
    };
  };
}
/* Recovered binding fp. Live dependencies: . */
export function create_fp(__recoveredScope) {
  return function fp(e) {
    return () => (e = e * 16807 % 2147483647) / 2147483647;
  };
}
/* Recovered binding createFloatingDioramaBase. Live dependencies: g, Vector3, createToonMaterial, op, c, up, hp, mp, fp, Xe. */
export function create_createFloatingDioramaBase(__recoveredScope) {
  return function createFloatingDioramaBase(e, t, {
    min: n,
    max: r,
    treeline: i
  }) {
    let a = new __recoveredScope.g(),
      o = n - 260,
      l = 3400,
      u = e.verts,
      d = [{
        ks: [...Array(u).keys()],
        out: new __recoveredScope.Vector3(0, 0, -1)
      }, {
        ks: [...Array(u).keys()].map(e => (u - 1) * u + e),
        out: new __recoveredScope.Vector3(0, 0, 1)
      }, {
        ks: [...Array(u).keys()].map(e => e * u),
        out: new __recoveredScope.Vector3(-1, 0, 0)
      }, {
        ks: [...Array(u).keys()].map(e => e * u + u - 1),
        out: new __recoveredScope.Vector3(1, 0, 0)
      }],
      f = __recoveredScope.createToonMaterial({
        map: __recoveredScope.op()
      }, {
        hatch: 1
      }),
      p = e => (e - o) / (r - o);
    for (let t of d) a.add(new __recoveredScope.c(__recoveredScope.up(e, t.ks, t.out, e => e - 119, () => o, p), f));
    a.add(new __recoveredScope.c(__recoveredScope.hp(e, o, l), __recoveredScope.createToonMaterial({
      vertexColors: true
    }, {
      hatch: 1
    })));
    a.add(new __recoveredScope.c(__recoveredScope.mp(e, t, i), __recoveredScope.createToonMaterial({
      vertexColors: true
    }, {
      hatch: 1
    })));
    let m = e.center[0],
      h = e.center[1],
      _ = __recoveredScope.fp(29),
      v = __recoveredScope.createToonMaterial({
        color: `#857a6c`
      }, {
        hatch: 1
      }),
      y = new __recoveredScope.Xe(1, 0),
      b = [];
    for (let e = 0; e < 7; e++) {
      let t = e / 7 * Math.PI * 2 + _() * .6,
        n = 120 + _() * 260,
        r = new __recoveredScope.c(y, v),
        i = 5e3 + _() * 1400;
      r.position.set(m + Math.cos(t) * i, o - 300 - _() * 1500, h + Math.sin(t) * i);
      r.scale.set(n, n * .75, n * .9);
      r.rotation.set(_() * 3, _() * 3, _() * 3);
      r.userData.y = r.position.y;
      b.push(r);
      a.add(r);
    }
    let x = __recoveredScope.createToonMaterial({
        color: `#ffffff`
      }, {
        hatch: 0
      }),
      S = new __recoveredScope.Xe(1, 2),
      C = [];
    for (let e = 0; e < 6; e++) {
      let t = new __recoveredScope.g(),
        n = 4 + Math.floor(_() * 3);
      for (let e = 0; e < n; e++) {
        let r = new __recoveredScope.c(S, x),
          i = 260 + _() * 320 * (1 - Math.abs(e / (n - 1) - .5));
        r.scale.set(i, i * .8, i);
        r.position.set((e - (n - 1) / 2) * 380, i * .25, (_() - .5) * 300);
        t.add(r);
      }
      let i = e % 2 == 0;
      t.userData = {
        a: e / 6 * Math.PI * 2 + _() * .5,
        R: 4300 + _() * 1300,
        y: i ? r - 500 + _() * 700 : o - 200 + _() * 900
      };
      C.push(t);
      a.add(t);
    }
    a.update = e => {
      b.forEach((t, n) => {
        t.position.y = t.userData.y + Math.sin(e * .35 + n * 1.7) * 60;
        t.rotation.y += 6e-4;
      });
      for (let t of C) {
        let n = t.userData.a + e * .006;
        t.position.set(m + Math.cos(n) * t.userData.R, t.userData.y, h + Math.sin(n) * t.userData.R);
        t.rotation.y = -n;
      }
    };
    let w = (r + o - l) / 2;
    return a.userData = {
      center: new __recoveredScope.Vector3(m, w, h),
      radius: Math.hypot(e.half * Math.SQRT2, (r - (o - l)) / 2)
    }, a.update(0), a;
  };
}
/* Recovered binding mp. Live dependencies: Vector3, K, Oa, z, i. */
export function create_mp(__recoveredScope) {
  return function mp(e, t, n) {
    let r = Math.floor(e.size / 24),
      a = new __recoveredScope.Vector3(),
      o = new __recoveredScope.K(),
      c = new __recoveredScope.K(`#3e5a4f`),
      l = new __recoveredScope.K(`#557a63`),
      u = [],
      d = [],
      f = [],
      p = new Map(),
      m = (t, n) => {
        let i = n * (r + 1) + t;
        if (!p.has(i)) {
          let r = e.x0 + t * 24,
            a = e.z0 + n * 24;
          p.set(i, u.length / 3);
          u.push(r, e.heightAt(r, a) + 14, a);
          o.copy(c).lerp(l, __recoveredScope.Oa(r * .004, a * .004));
          d.push(o.r, o.g, o.b);
        }
        return p.get(i);
      };
    for (let i = 0; i < r; i++) for (let o = 0; o < r; o++) {
      let r = e.x0 + (o + .5) * 24,
        s = e.z0 + (i + .5) * 24;
      if (!e.inside(r, s, 30) || e.holeAt(r, s) || e.heightAt(r, s) > n - 60 + (__recoveredScope.Oa(r * .006, s * .006) - .5) * 160 || t.distAt(r, s) < 22 || e.normalAt(r, s, a).y < .78 || __recoveredScope.Oa(r * .012 + 40, s * .012) < .42) continue;
      let c = m(o, i),
        l = m(o + 1, i),
        u = m(o, i + 1),
        d = m(o + 1, i + 1);
      f.push(c, u, l, l, u, d);
    }
    let h = new __recoveredScope.z();
    return h.setAttribute(`position`, new __recoveredScope.i(u, 3)), h.setAttribute(`color`, new __recoveredScope.i(d, 3)), h.setIndex(f), h.computeVertexNormals(), h;
  };
}
/* Recovered binding hp. Live dependencies: fp, Vector3, K, z, i. */
export function create_hp(__recoveredScope) {
  return function hp(e, t, n) {
    let {
        x0: r,
        z0: a,
        size: o
      } = e,
      c = r + o / 2,
      l = a + o / 2,
      u = [];
    for (let e = 0; e < 4; e++) for (let t = 0; t < 7; t++) {
      let n = t / 7,
        [i, s] = [[n, 0], [1, n], [1 - n, 1], [0, 1 - n]][e];
      u.push([r + i * o, a + s * o]);
    }
    let d = __recoveredScope.fp(7),
      f = [];
    for (let e = 0; e < 6; e++) {
      let r = e / 6,
        i = +!!e;
      f.push(u.map(([e, a]) => {
        let o = (1 - r) ** .75 * (1 + (d() - .5) * .22 * i),
          u = t - n * r ** 1.3 + (d() - .5) * n * .07 * i;
        return new __recoveredScope.Vector3(c + (e - c) * o, u, l + (a - l) * o);
      }));
    }
    let p = new __recoveredScope.Vector3(c + 180, t - n, l - 120),
      m = [`#8f7a63`, `#7d6a5a`, `#6f7472`, `#5d6264`, `#6a6e6c`, `#585d60`].map(e => new __recoveredScope.K(e)),
      h = [],
      g = [],
      _ = new __recoveredScope.Vector3(),
      v = new __recoveredScope.Vector3(),
      y = new __recoveredScope.Vector3(),
      b = new __recoveredScope.Vector3(),
      x = new __recoveredScope.K(),
      S = (e, t, n, r) => {
        _.crossVectors(v.subVectors(t, e), y.subVectors(n, e));
        b.addVectors(e, t).add(n).divideScalar(3);
        _.x * (b.x - c) + _.z * (b.z - l) < 0 && ([t, n] = [n, t]);
        x.copy(m[Math.min(r, m.length - 1)]).multiplyScalar(.9 + d() * .2);
        for (let r of [e, t, n]) {
          h.push(r.x, r.y, r.z);
          g.push(x.r, x.g, x.b);
        }
      },
      C = u.length;
    for (let e = 0; e < 6; e++) for (let t = 0; t < C; t++) {
      let n = f[e][t],
        r = f[e][(t + 1) % C];
      if (e === 5) {
        S(n, r, p, e);
        continue;
      }
      let i = f[e + 1][t],
        a = f[e + 1][(t + 1) % C];
      S(n, r, i, e);
      S(r, a, i, e);
    }
    let w = new __recoveredScope.z();
    return w.setAttribute(`position`, new __recoveredScope.i(h, 3)), w.setAttribute(`color`, new __recoveredScope.i(g, 3)), w.computeVertexNormals(), w;
  };
}
