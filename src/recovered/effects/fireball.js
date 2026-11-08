/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding wt. Live dependencies: . */
export function create_wt(__recoveredScope) {
  return function wt(e, t, n, r) {
    return t >= e ? e < n && t >= n : e < n || t >= n;
  };
}
/* Recovered binding Tt. Live dependencies: Oe, Te, Xe, it, We, et, Be, He, Vector3, wt, Ct, MathUtils. */
export function create_Tt(__recoveredScope) {
  return class {
    constructor() {
      this.group = new __recoveredScope.Oe();
      this.group.visible = false;
      let e = new __recoveredScope.Te(new __recoveredScope.Xe(.19, 2), new __recoveredScope.it({
          color: 14024703
        })),
        t = new __recoveredScope.Te(new __recoveredScope.Xe(.3, 2), new __recoveredScope.it({
          color: 3332607,
          transparent: true,
          opacity: .48,
          blending: 2,
          depthWrite: false
        }));
      this.group.add(e, t);
      this.shell = t;
      let n = new Float32Array(108);
      for (let e = 0; e < 36; e++) {
        let t = e * 2.399,
          r = .22 + e % 4 * .055;
        n[e * 3] = Math.cos(t) * r;
        n[e * 3 + 1] = Math.sin(t) * r;
        n[e * 3 + 2] = e % 9 * .12 - .45;
      }
      let r = new __recoveredScope.We();
      r.setAttribute(`position`, new __recoveredScope.et(n, 3));
      this.sparks = new __recoveredScope.Be(r, new __recoveredScope.He({
        color: 9238783,
        size: .075,
        transparent: true,
        opacity: .9,
        blending: 2,
        depthWrite: false
      }));
      this.group.add(this.sparks);
      this.left = new __recoveredScope.Vector3();
      this.right = new __recoveredScope.Vector3();
      this.origin = new __recoveredScope.Vector3();
      this.direction = new __recoveredScope.Vector3();
      this.age = -1;
    }
    reset() {
      this.age = -1;
      this.group.visible = false;
    }
    update(e, t, n, r) {
      if (!t || t.id !== `fireball` || !n.model) return this.reset(), [];
      let {
          previous: i,
          time: a,
          clip: o
        } = t,
        s = [];
      __recoveredScope.wt(i, a, __recoveredScope.Ct.voice, o.duration) && s.push(`voice`);
      let c = __recoveredScope.wt(i, a, __recoveredScope.Ct.release, o.duration);
      n.root.updateWorldMatrix(true, true);
      n.model.palmAt(`Left`, this.left);
      n.model.palmAt(`Right`, this.right);
      let l = a >= __recoveredScope.Ct.charge && a < __recoveredScope.Ct.release;
      if (l) {
        this.group.visible = true;
        this.group.position.copy(this.left).add(this.right).multiplyScalar(.5);
        let e = __recoveredScope.MathUtils.lerp(.16, 1, (a - __recoveredScope.Ct.charge) / (__recoveredScope.Ct.release - __recoveredScope.Ct.charge));
        this.group.scale.setScalar(e);
        this.age = -1;
      }
      return c && (this.origin.copy(this.left).add(this.right).multiplyScalar(.5), this.direction.copy(r).normalize(), this.age = 0, s.push(`release`)), this.age >= 0 ? (this.age += e, this.age >= __recoveredScope.Ct.flight ? this.reset() : (this.group.visible = true, this.group.position.copy(this.origin).addScaledVector(this.direction, this.age * 9), this.group.scale.setScalar(Math.min(1, (__recoveredScope.Ct.flight - this.age) * 4)), this.group.quaternion.setFromUnitVectors(new __recoveredScope.Vector3(0, 0, -1), this.direction))) : l || (this.group.visible = false), this.shell.rotation.y += e * 3, this.sparks.rotation.z += e * 4, s;
    }
  };
}
