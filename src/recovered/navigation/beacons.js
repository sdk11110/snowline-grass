/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Ml. Live dependencies: Oe, Te, Ee, Ze, at, tl, Dl, Ol, We, et, Pe, Al, kl, jl. */
export function create_Ml(__recoveredScope) {
  return class {
    constructor(e) {
      this.hf = e;
      this.group = new __recoveredScope.Oe();
      this.beacon = new __recoveredScope.Te(new __recoveredScope.Ee(5, 5, 260, 32, 1, true).translate(0, 130, 0), new __recoveredScope.Ze({
        uniforms: {
          uColor: {
            value: new __recoveredScope.at(__recoveredScope.tl)
          },
          uTime: {
            value: 0
          }
        },
        vertexShader: `
          varying vec2 vUv;
          void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `
          uniform vec3 uColor; uniform float uTime; varying vec2 vUv;
          void main() {
            float a = (1.0 - vUv.y) * 0.75 + 0.05;
            a *= 0.75 + 0.25 * sin(vUv.y * 40.0 - uTime * 3.0);
            gl_FragColor = vec4(mix(uColor, vec3(1.0), 0.25), a * 0.7);
          }`,
        transparent: true,
        depthWrite: false,
        side: 2
      }));
      this.beacon.visible = false;
      this.beacon.frustumCulled = false;
      let t = Math.ceil(__recoveredScope.Dl / __recoveredScope.Ol) + 2;
      this.max = t;
      this.pos = new Float32Array(780);
      this.along = new Float32Array(260);
      let n = new __recoveredScope.We();
      n.setAttribute(`position`, new __recoveredScope.et(this.pos, 3).setUsage(__recoveredScope.Pe));
      n.setAttribute(`along`, new __recoveredScope.et(this.along, 1).setUsage(__recoveredScope.Pe));
      let r = new Float32Array(260);
      for (let e = 0; e < t; e++) {
        r[e * 2] = -1;
        r[e * 2 + 1] = 1;
      }
      n.setAttribute(`side`, new __recoveredScope.et(r, 1));
      let i = [];
      for (let e = 0; e < 129; e++) {
        let t = e * 2;
        i.push(t, t + 2, t + 1, t + 1, t + 2, t + 3);
      }
      n.setIndex(i);
      this.strip = new __recoveredScope.Te(n, new __recoveredScope.Ze({
        uniforms: {
          uColor: {
            value: new __recoveredScope.at(__recoveredScope.tl)
          },
          uTime: {
            value: 0
          },
          uLen: {
            value: __recoveredScope.Dl
          }
        },
        vertexShader: `
          attribute float along; attribute float side;
          varying float vAlong; varying float vSide;
          void main() { vAlong = along; vSide = side; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `
          uniform vec3 uColor; uniform float uTime; uniform float uLen;
          varying float vAlong; varying float vSide;
          void main() {
            // Chevrons pointing the way, every 7 m, drifting forward.
            float f = fract((vAlong + abs(vSide) * 2.2) / 7.0 - uTime * 0.35);
            float body = smoothstep(0.0, 0.06, f) * (1.0 - smoothstep(0.38, 0.44, f));
            float edge = smoothstep(0.42, 0.44, f) * (1.0 - smoothstep(0.5, 0.52, f));
            if (body + edge < 0.01) discard;
            // In from the rider's feet, out into the distance.
            float fade = smoothstep(2.0, 10.0, vAlong) * (1.0 - smoothstep(uLen * 0.6, uLen, vAlong));
            vec3 c = mix(uColor, vec3(0.137, 0.188, 0.227), edge);
            gl_FragColor = vec4(c, 0.85 * fade * (body + edge));
          }`,
        transparent: true,
        depthWrite: false,
        side: 2,
        polygonOffset: true,
        polygonOffsetFactor: -4,
        polygonOffsetUnits: -4
      }));
      this.strip.frustumCulled = false;
      this.strip.visible = false;
      this.group.add(this.beacon, this.strip);
      this.hidden = [this.beacon, this.strip];
    }
    update(e, t, n, r) {
      this.beacon.material.uniforms.uTime.value = t;
      this.strip.material.uniforms.uTime.value = t;
      let i = e.waypoint;
      if (this.beacon.visible = !!i, i) {
        this.beacon.position.set(i.x, this.hf.heightAt(i.x, i.z), i.z);
        let e = Math.max(1, Math.hypot(i.x - r.x, i.z - r.z) / 700);
        this.beacon.scale.set(e, 1, e);
      }
      let a = e.route;
      if (!a || n) {
        this.strip.visible = false;
        return;
      }
      let o = a.legs.filter(e => e.kind === `lift`),
        s = Math.min(a.length, e.s + __recoveredScope.Dl);
      for (let t of o) t.end > e.s && t.start < s && (s = Math.max(e.s, t.start));
      let c = Math.min(this.max, Math.floor((s - e.s) / __recoveredScope.Ol) + 1);
      if (c < 2) {
        this.strip.visible = false;
        return;
      }
      let {
          points: l,
          acc: u
        } = a,
        d = e.seg,
        f = e => {
          for (; d < l.length - 2 && u[d + 1] < e;) d++;
          let t = u[d + 1] - u[d] || 1,
            n = Math.min(1, Math.max(0, (e - u[d]) / t));
          return [l[d][0] + (l[d + 1][0] - l[d][0]) * n, l[d][1] + (l[d + 1][1] - l[d][1]) * n];
        },
        p = [];
      for (let t = 0; t < c; t++) p.push(f(e.s + t * __recoveredScope.Ol));
      let m = r.x - p[0][0],
        h = r.z - p[0][1];
      for (let e = 0; e < c; e++) {
        let t = Math.max(0, 1 - e * __recoveredScope.Ol / __recoveredScope.Al),
          n = t * t * (3 - 2 * t);
        p[e][0] += m * n;
        p[e][1] += h * n;
      }
      for (let e = 0; e < c; e++) {
        let t = p[Math.max(0, e - 1)],
          n = p[Math.min(c - 1, e + 1)],
          r = n[0] - t[0],
          i = n[1] - t[1],
          a = Math.hypot(r, i) || 1;
        r /= a;
        i /= a;
        let [o, s] = p[e],
          l = __recoveredScope.kl / 2,
          u = -i * l,
          d = r * l,
          f = e * 6;
        for (let [e, t] of [[0, -1], [3, 1]]) {
          let n = o + u * t,
            r = s + d * t;
          this.pos[f + e] = n;
          this.pos[f + e + 1] = this.hf.heightAt(n, r) + __recoveredScope.jl;
          this.pos[f + e + 2] = r;
        }
        this.along[e * 2] = this.along[e * 2 + 1] = e * __recoveredScope.Ol;
      }
      let g = this.strip.geometry;
      g.attributes.position.needsUpdate = true;
      g.attributes.along.needsUpdate = true;
      g.setDrawRange(0, (c - 1) * 6);
      this.strip.visible = true;
    }
  };
}
