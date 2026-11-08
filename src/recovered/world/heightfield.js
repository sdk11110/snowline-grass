/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Heightfield. Live dependencies: Vector3. */
export function create_Heightfield(__recoveredScope) {
  return class {
    constructor(e, t, n, r = [0, 0]) {
      this.size = e;
      this.cells = t;
      this.verts = t + 1;
      this.step = e / t;
      this.half = e / 2;
      this.center = r;
      this.x0 = r[0] - this.half;
      this.z0 = r[1] - this.half;
      this.h = n;
      this.setHoles(10, []);
    }
    setHoles(e, t) {
      this.tileCells = e;
      this.tiles = Math.ceil(this.cells / e);
      this.tileSize = e * this.step;
      this.holes = new Uint8Array(this.tiles * this.tiles);
      for (let e of t) this.holes[e] = 1;
      this.hasHoles = t.length > 0;
    }
    tileAt(e, t) {
      let n = Math.floor((e - this.x0) / this.tileSize),
        r = Math.floor((t - this.z0) / this.tileSize);
      return n < 0 || r < 0 || n >= this.tiles || r >= this.tiles ? -1 : r * this.tiles + n;
    }
    holeAt(e, t) {
      if (!this.hasHoles) return false;
      let n = this.tileAt(e, t);
      return n >= 0 && this.holes[n] === 1;
    }
    cellIsHole(e, t) {
      return this.hasHoles && this.holes[Math.floor(t / this.tileCells) * this.tiles + Math.floor(e / this.tileCells)] === 1;
    }
    inside(e, t, n = 0) {
      return Math.abs(e - this.center[0]) < this.half - n && Math.abs(t - this.center[1]) < this.half - n;
    }
    heightAt(e, t) {
      let n = this.verts,
        r = (e - this.x0) / this.step,
        i = (t - this.z0) / this.step;
      r = Math.min(Math.max(r, 0), this.cells - 1e-6);
      i = Math.min(Math.max(i, 0), this.cells - 1e-6);
      let a = Math.floor(r),
        o = Math.floor(i),
        s = r - a,
        c = i - o,
        l = o * n + a,
        u = this.h;
      return (u[l] * (1 - s) + u[l + 1] * s) * (1 - c) + (u[l + n] * (1 - s) + u[l + n + 1] * s) * c;
    }
    surfaceAt(e, t) {
      let n = this.verts,
        r = Math.min(Math.max((e - this.x0) / this.step, 0), this.cells - 1e-6),
        i = Math.min(Math.max((t - this.z0) / this.step, 0), this.cells - 1e-6),
        a = Math.floor(r),
        o = Math.floor(i),
        s = r - a,
        c = i - o,
        l = o * n + a,
        u = this.h;
      return s + c <= 1 ? u[l] + (u[l + 1] - u[l]) * s + (u[l + n] - u[l]) * c : u[l + n + 1] + (u[l + n] - u[l + n + 1]) * (1 - s) + (u[l + 1] - u[l + n + 1]) * (1 - c);
    }
    normalAt(e, t, n = new __recoveredScope.Vector3()) {
      let r = this.heightAt(e - 2, t),
        i = this.heightAt(e + 2, t),
        a = this.heightAt(e, t - 2),
        o = this.heightAt(e, t + 2);
      return n.set(r - i, 4, a - o).normalize();
    }
  };
}
