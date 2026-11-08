/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding rm. Live dependencies: cableway, om, Id, MathUtils, X, rider, rd, physics, F, I, Ad, im, camera, K. Writes: W, X. */
export function create_rm(__recoveredScope) {
  return function rm(e) {
    let t = __recoveredScope.cableway.chairSystems.find(t => t.id === e.id);
    if (t) {
      __recoveredScope.om(e, t);
      return;
    }
    let n = __recoveredScope.cableway.gondolaSystems.find(t => t.id === e.id);
    if (__recoveredScope.Id(), __recoveredScope.W = `lift`, __recoveredScope.X = {
      ride: e,
      t: 0,
      dur: __recoveredScope.MathUtils.clamp(e.length / 110, 10, 22)
    }, n) {
      __recoveredScope.cableway.update(0);
      let {
          path: t
        } = n,
        r = e => ((t.boarding - e.distance) % t.total + t.total) % t.total,
        i = n.cars.reduce((e, t) => r(t) < r(e) ? t : e);
      n.phase = (n.phase + r(i)) % t.total;
      __recoveredScope.cableway.update(0);
      n.passenger = i;
      n.speed = n.targetSpeed = e.length / __recoveredScope.X.dur;
      Object.assign(__recoveredScope.X, {
        gondolaSystem: n,
        car: i,
        previous: i.distance
      });
      __recoveredScope.cableway.update(0);
    }
    __recoveredScope.rider.root.visible = false;
    __recoveredScope.rd.visible = true;
    __recoveredScope.rd.setLine(e.label);
    __recoveredScope.rd.rotation.set(0, Math.atan2(e.dir.x, e.dir.z), 0);
    __recoveredScope.physics.vel.set(0, 0, 0);
    __recoveredScope.F.gap(__recoveredScope.physics.pos);
    __recoveredScope.I.prompt(`<kbd>Space</kbd> skip the ride`, `Skip the ride ▸`, __recoveredScope.Ad);
    __recoveredScope.im(0);
    __recoveredScope.camera.position.copy(__recoveredScope.K);
  };
}
/* Recovered binding im. Live dependencies: X, sm, rd, crossedCircularDistance, lm, physics, nm, K, groundHeightfield, camera, q, J, Sf. */
export function create_im(__recoveredScope) {
  return function im(e) {
    let t = __recoveredScope.X,
      {
        ride: n
      } = t;
    if (t.system) __recoveredScope.sm(e);else {
      if (t.t = Math.min(t.dur, t.t + e), t.gondolaSystem) {
        if (__recoveredScope.rd.position.copy(t.car.position), __recoveredScope.rd.rotation.y = t.car.yaw, __recoveredScope.crossedCircularDistance(t.previous, t.car.distance, t.gondolaSystem.path.upLength, t.gondolaSystem.path.total)) {
          __recoveredScope.lm(n);
          return;
        }
        t.previous = t.car.distance;
      } else {
        let e = t.t / t.dur,
          r = (e - Math.sin(e * Math.PI * 2) / (Math.PI * 2)) * n.length,
          i = 1;
        for (; i < n.acc.length - 1 && n.acc[i] < r;) i++;
        __recoveredScope.rd.position.lerpVectors(n.cable[i - 1], n.cable[i], (r - n.acc[i - 1]) / (n.acc[i] - n.acc[i - 1]));
      }
      __recoveredScope.rd.rotation.z = Math.sin(t.t * 1.3) * .02;
      __recoveredScope.physics.pos.copy(__recoveredScope.rd.position);
      __recoveredScope.nm.set(-n.dir.z, 0, n.dir.x);
      __recoveredScope.K.copy(__recoveredScope.rd.position).addScaledVector(n.dir, -14).addScaledVector(__recoveredScope.nm, 5);
      __recoveredScope.K.y = Math.max(__recoveredScope.K.y + 1, __recoveredScope.groundHeightfield.heightAt(__recoveredScope.K.x, __recoveredScope.K.z) + 2);
      __recoveredScope.camera.position.lerp(__recoveredScope.K, 1 - Math.exp(-e * 4));
      __recoveredScope.q.copy(__recoveredScope.rd.position).addScaledVector(n.dir, 6);
      __recoveredScope.q.y -= 3;
      __recoveredScope.J.copy(__recoveredScope.q);
      __recoveredScope.camera.lookAt(__recoveredScope.J);
      __recoveredScope.camera.fov = 58 + __recoveredScope.Sf() * 12;
      __recoveredScope.camera.updateProjectionMatrix();
      !t.gondolaSystem && t.t >= t.dur && __recoveredScope.lm(n);
    }
  };
}
/* Recovered binding am. Live dependencies: Vector3. */
export function create_am(__recoveredScope) {
  return {
    hips: new __recoveredScope.Vector3(0, 0, 0),
    feet: [new __recoveredScope.Vector3(.18, -.48, .48), new __recoveredScope.Vector3(-.18, -.48, .48)],
    grips: [new __recoveredScope.Vector3(.35, .18, .22), new __recoveredScope.Vector3(-.35, .18, .22)],
    kneeOut: .12,
    fold: .05,
    lift: true,
    chairAnimation: true
  };
}
/* Recovered binding om. Live dependencies: cableway, physics, groundHeightfield, Et, I, Id, U, rider, F, rd. Writes: W, X. */
export function create_om(__recoveredScope) {
  return function om(e, t) {
    __recoveredScope.cableway.update(0);
    let n = __recoveredScope.physics.pos.clone(),
      r = t.path.points[0].clone();
    r.y = __recoveredScope.groundHeightfield.heightAt(r.x, r.z);
    let i = __recoveredScope.Et(n, r, __recoveredScope.cableway.collisionParts.filter(t => Math.hypot(t.x - e.bottom.x, t.z - e.bottom.z) < 9));
    if (!i) {
      __recoveredScope.I.toast(`Move clear of the station posts to board`, 2e3);
      return;
    }
    __recoveredScope.Id();
    let a = i.slice(1).reduce((e, t, n) => e + Math.hypot(t.x - i[n].x, t.z - i[n].z), 0),
      o = Math.max(1, a / 3);
    __recoveredScope.W = `lift`;
    __recoveredScope.U.force = true;
    __recoveredScope.U.reset();
    __recoveredScope.rider.setLocomotion(`walk`);
    let s = t.path.total - 1.2,
      c = t.chairs.map(e => ({
        c: e,
        wait: (s - e.distance + t.path.total) % t.path.total / Math.max(t.speed, .1)
      })).filter(e => e.wait >= o + .5).sort((e, t) => e.wait - t.wait)[0]?.c ?? t.chairs[0];
    __recoveredScope.X = {
      ride: e,
      system: t,
      chair: c,
      catchAt: s,
      t: 0,
      waiting: true,
      waypoints: i,
      walkLength: a,
      walkTime: o,
      previous: c.distance
    };
    __recoveredScope.physics.vel.set(0, 0, 0);
    __recoveredScope.F.gap(__recoveredScope.physics.pos);
    __recoveredScope.rd.visible = false;
    __recoveredScope.I.prompt(`Walk to the loading point · wait for your chair`, `Wait for your chair`);
  };
}
/* Recovered binding sm. Live dependencies: X, MathUtils, physics, groundHeightfield, Qu, kp, crossedCircularDistance, ug, rider, am, I, Ad, fg, cg, dg, cm, V, U, q, K, vu, nm, forest, Sg, camera, J, Sf. */
export function create_sm(__recoveredScope) {
  return function sm(e) {
    let t = __recoveredScope.X,
      {
        chair: n,
        system: r,
        ride: i
      } = t;
    if (t.t += e, t.waiting) {
      let i = __recoveredScope.MathUtils.smootherstep(t.t / t.walkTime, 0, 1) * t.walkLength,
        a = t.waypoints[0],
        o = t.waypoints.at(-1);
      for (let e = 1; e < t.waypoints.length; e++) {
        let n = t.waypoints[e],
          r = Math.hypot(n.x - a.x, n.z - a.z);
        if (o = n, i <= r || e === t.waypoints.length - 1) {
          let e = r ? Math.min(1, i / r) : 1;
          __recoveredScope.physics.pos.x = __recoveredScope.MathUtils.lerp(a.x, o.x, e);
          __recoveredScope.physics.pos.z = __recoveredScope.MathUtils.lerp(a.z, o.z, e);
          break;
        }
        i -= r;
        a = n;
      }
      __recoveredScope.physics.pos.y = __recoveredScope.groundHeightfield.heightAt(__recoveredScope.physics.pos.x, __recoveredScope.physics.pos.z);
      let s = o.x - a.x,
        c = o.z - a.z;
      __recoveredScope.physics.yaw = __recoveredScope.Qu(s, c);
      __recoveredScope.physics.vel.set(s, 0, c).normalize().multiplyScalar(t.t < t.walkTime ? 3 : 0);
      __recoveredScope.kp(e);
      __recoveredScope.crossedCircularDistance(t.previous, n.distance, t.catchAt, r.path.total) && (t.waiting = false, __recoveredScope.physics.vel.set(0, 0, 0), __recoveredScope.ug(), __recoveredScope.rider.setLocomotion(`sit`, __recoveredScope.am), __recoveredScope.I.prompt(`<kbd>Space</kbd> speed up the lift · mouse / arrows look around`, `Drag to look around · speed up ▸`, __recoveredScope.Ad));
      t.previous = n.distance;
    } else {
      let t = Math.cos(n.yaw),
        a = Math.sin(n.yaw);
      if (__recoveredScope.rider.root.position.copy(n.position), __recoveredScope.rider.root.position.x += t * .55 + a * .08, __recoveredScope.rider.root.position.z += -a * .55 + t * .08, __recoveredScope.rider.root.position.y -= 2.25, __recoveredScope.rider.root.quaternion.setFromAxisAngle(__recoveredScope.fg, n.yaw + Math.PI), __recoveredScope.cg && __recoveredScope.dg(e), __recoveredScope.rider.update(e, {
        crouch: 0,
        air: false,
        speed: 0,
        lean: 0,
        twist: 0
      }), __recoveredScope.physics.pos.copy(__recoveredScope.rider.root.position), r.path.upLength - n.distance < 75 && (r.targetSpeed = 5), n.distance >= r.path.upLength - .8 && n.distance < r.path.upLength + 10) {
        __recoveredScope.cm(i, n, r);
        return;
      }
    }
    __recoveredScope.V.has(`ArrowLeft`) && __recoveredScope.U.turn(1.15 * e, 0);
    __recoveredScope.V.has(`ArrowRight`) && __recoveredScope.U.turn(-1.15 * e, 0);
    __recoveredScope.q.copy(t.waiting ? __recoveredScope.physics.pos : n.position);
    __recoveredScope.q.y += t.waiting ? 1 : -1.75;
    __recoveredScope.K.copy(__recoveredScope.q).addScaledVector(i.dir, -6).addScaledVector(r.path.side, 3);
    __recoveredScope.K.y += 2;
    __recoveredScope.vu(__recoveredScope.K, __recoveredScope.q, i.dir, __recoveredScope.U.yaw, __recoveredScope.U.pitch);
    __recoveredScope.K.y = Math.max(__recoveredScope.K.y, __recoveredScope.groundHeightfield.heightAt(__recoveredScope.K.x, __recoveredScope.K.z) + 1.2);
    let a = Math.hypot(__recoveredScope.q.x - i.bottom.x, __recoveredScope.q.z - i.bottom.z) < 10 ? i.bottom : Math.hypot(__recoveredScope.q.x - i.top.x, __recoveredScope.q.z - i.top.z) < 10 ? i.top : null;
    a && (__recoveredScope.K.y = Math.min(__recoveredScope.K.y, a.y + 2.8));
    for (let e = .3; e <= 1; e += .08) {
      __recoveredScope.nm.lerpVectors(__recoveredScope.q, __recoveredScope.K, e);
      let i = __recoveredScope.forest.hit(__recoveredScope.nm.x, __recoveredScope.nm.z, .45),
        a = __recoveredScope.physics.obstacles.some(e => __recoveredScope.nm.y < e.top + .4 && __recoveredScope.Sg(e, __recoveredScope.nm.x, __recoveredScope.nm.z) < .45),
        o = false;
      for (let e of r.chairs) {
        if (!t.waiting && e === n) continue;
        let i = e.position;
        if (__recoveredScope.nm.y < i.y - 3.4 || __recoveredScope.nm.y > i.y + .6) continue;
        let a = e.tangent.x * r.speed * .5,
          s = e.tangent.z * r.speed * .5,
          c = a * a + s * s,
          l = c ? __recoveredScope.MathUtils.clamp(((__recoveredScope.nm.x - i.x) * a + (__recoveredScope.nm.z - i.z) * s) / c, 0, 1) : 0;
        if (Math.hypot(__recoveredScope.nm.x - i.x - a * l, __recoveredScope.nm.z - i.z - s * l) < 2.1) {
          o = true;
          break;
        }
      }
      if (i && __recoveredScope.nm.y < i.top + .4 || a || o) {
        __recoveredScope.K.lerpVectors(__recoveredScope.q, __recoveredScope.K, Math.max(.22, e - .12));
        break;
      }
    }
    __recoveredScope.camera.position.lerp(__recoveredScope.K, 1 - Math.exp(-e * (a ? 9 : 5)));
    __recoveredScope.J.lerp(__recoveredScope.q, 1 - Math.exp(-e * 8));
    __recoveredScope.camera.lookAt(__recoveredScope.J);
    __recoveredScope.camera.fov = 58 + __recoveredScope.Sf() * 12;
    __recoveredScope.camera.updateProjectionMatrix();
  };
}
/* Recovered binding cm. Live dependencies: U, ug, rider, physics, Qu, G, I, F, yd, bd. Writes: X, W. */
export function create_cm(__recoveredScope) {
  return function cm(e, t, n) {
    n.targetSpeed = 5;
    __recoveredScope.U.force = false;
    !__recoveredScope.U.on && __recoveredScope.U.locked && document.exitPointerLock();
    __recoveredScope.U.reset();
    __recoveredScope.ug();
    __recoveredScope.rider.setLocomotion(`ride`);
    let r = t.position.x + e.dir.x * 2 - n.path.side.x * 3.5,
      i = t.position.z + e.dir.z * 2 - n.path.side.z * 3.5;
    __recoveredScope.physics.reset(r, i, __recoveredScope.Qu(e.dir.x, e.dir.z));
    __recoveredScope.G.copy(e.dir);
    __recoveredScope.X = null;
    __recoveredScope.W = `ride`;
    __recoveredScope.I.prompt(``);
    __recoveredScope.I.toast(`${e.label} · ${Math.round(e.top.y).toLocaleString()} m`, 2e3);
    __recoveredScope.F.gap(__recoveredScope.physics.pos);
    __recoveredScope.yd.reroute(__recoveredScope.bd());
  };
}
/* Recovered binding lm. Live dependencies: X, Id, um, physics, Qu, G, resetFollowCamera, rider, rd, I, yd, bd. Writes: X, W. */
export function create_lm(__recoveredScope) {
  return function lm(e) {
    __recoveredScope.X?.gondolaSystem && (__recoveredScope.X.gondolaSystem.passenger = null, __recoveredScope.X.gondolaSystem.speed = __recoveredScope.X.gondolaSystem.targetSpeed = 5);
    __recoveredScope.Id();
    let t = e.top,
      n = __recoveredScope.um(e);
    __recoveredScope.physics.reset(n.x, n.z, __recoveredScope.Qu(n.dx, n.dz));
    __recoveredScope.G.set(n.dx, 0, n.dz);
    __recoveredScope.resetFollowCamera();
    __recoveredScope.rider.root.visible = true;
    __recoveredScope.rd.visible = false;
    __recoveredScope.X = null;
    __recoveredScope.W = `ride`;
    __recoveredScope.I.prompt(``);
    __recoveredScope.I.toast(`${e.label} · ${Math.round(t.y).toLocaleString()} m`, 2e3);
    __recoveredScope.yd.reroute(__recoveredScope.bd());
  };
}
/* Recovered binding um. Live dependencies: pm, pisteField, mm. */
export function create_um(__recoveredScope) {
  return function um(e) {
    let t = e.top,
      n = __recoveredScope.pm(t, [26, 36, 48], (e, t, n, r) => +(__recoveredScope.pisteField.distAt(e, t) < 17) + Math.min(1 - n.y, .12) * 6 - r * .004);
    return n ? __recoveredScope.mm({
      x: n.x,
      z: n.z,
      dx: n.nx,
      dz: n.nz
    }, e.dir) : {
      x: t.x + e.dir.x * 30,
      z: t.z + e.dir.z * 30,
      dx: e.dir.x,
      dz: e.dir.z
    };
  };
}
