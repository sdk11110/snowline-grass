/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding PisteDistanceField. Live dependencies: . */
export function create_PisteDistanceField(__recoveredScope) {
  return class {
    constructor(e, t, n = 4, r = 60, i = [0, 0]) {
      this.size = t;
      this.cell = n;
      this.half = t / 2;
      this.x0 = i[0] - this.half;
      this.z0 = i[1] - this.half;
      this.n = Math.round(t / n) + 1;
      this.maxDist = r;
      this.dist = new Float32Array(this.n * this.n).fill(r);
      this.run = new Int16Array(this.n * this.n).fill(-1);
      this.seg = new Uint16Array(this.n * this.n);
      this.lines = e.map(({
        points: e
      }) => {
        let t = new Float32Array(e.length);
        for (let n = 1; n < e.length; n++) t[n] = t[n - 1] + Math.hypot(e[n][0] - e[n - 1][0], e[n][1] - e[n - 1][1]);
        return {
          p: e,
          cum: t
        };
      });
      e.forEach((e, t) => {
        let n = e.points;
        for (let e = 0; e < n.length - 1; e++) this.#e(n[e], n[e + 1], t, e);
      });
    }
    #e(e, t, n, r) {
      let {
          cell: i,
          n: a,
          maxDist: o
        } = this,
        s = Math.min(e[0], t[0]) - o - this.x0,
        c = Math.max(e[0], t[0]) + o - this.x0,
        l = Math.min(e[1], t[1]) - o - this.z0,
        u = Math.max(e[1], t[1]) + o - this.z0,
        d = Math.max(0, Math.floor(s / i)),
        f = Math.min(a - 1, Math.ceil(c / i)),
        p = Math.max(0, Math.floor(l / i)),
        m = Math.min(a - 1, Math.ceil(u / i)),
        h = t[0] - e[0],
        g = t[1] - e[1],
        _ = h * h + g * g || 1;
      for (let t = p; t <= m; t++) {
        let o = t * i + this.z0;
        for (let s = d; s <= f; s++) {
          let c = s * i + this.x0,
            l = ((c - e[0]) * h + (o - e[1]) * g) / _;
          l = Math.max(0, Math.min(1, l));
          let u = e[0] + h * l - c,
            d = e[1] + g * l - o,
            f = Math.sqrt(u * u + d * d),
            p = t * a + s;
          f < this.dist[p] && (this.dist[p] = f, this.run[p] = n, this.seg[p] = r);
        }
      }
    }
    distAt(e, t) {
      let {
          cell: n,
          n: r
        } = this,
        i = (e - this.x0) / n,
        a = (t - this.z0) / n;
      i = Math.min(Math.max(i, 0), r - 1.0001);
      a = Math.min(Math.max(a, 0), r - 1.0001);
      let o = Math.floor(i),
        s = Math.floor(a),
        c = i - o,
        l = a - s,
        u = s * r + o,
        d = this.dist;
      return (d[u] * (1 - c) + d[u + 1] * c) * (1 - l) + (d[u + r] * (1 - c) + d[u + r + 1] * c) * l;
    }
    runAt(e, t) {
      let {
          cell: n,
          n: r
        } = this,
        i = Math.round((e - this.x0) / n),
        a = Math.round((t - this.z0) / n);
      return i < 0 || a < 0 || i >= r || a >= r ? -1 : this.run[a * r + i];
    }
    coordsAt(e, t, n = {}) {
      let {
          cell: r,
          n: i
        } = this,
        a = Math.round((e - this.x0) / r),
        o = Math.round((t - this.z0) / r),
        s = o * i + a;
      if (n.run = a < 0 || o < 0 || a >= i || o >= i ? -1 : this.run[s], n.run < 0) return n;
      let {
          p: c,
          cum: l
        } = this.lines[n.run],
        u = 1 / 0;
      for (let r = Math.max(0, this.seg[s] - 1); r <= Math.min(c.length - 2, this.seg[s] + 1); r++) {
        let i = c[r],
          a = c[r + 1],
          o = a[0] - i[0],
          s = a[1] - i[1],
          d = o * o + s * s || 1,
          f = Math.max(0, Math.min(1, ((e - i[0]) * o + (t - i[1]) * s) / d)),
          p = e - i[0] - o * f,
          m = t - i[1] - s * f,
          h = Math.hypot(p, m);
        h < u && (u = h, n.along = l[r] + f * Math.sqrt(d), n.off = o * m - s * p < 0 ? -h : h);
      }
      return n;
    }
  };
}
