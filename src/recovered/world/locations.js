/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding summitObjectLayout. Live dependencies: . */
export function create_summitObjectLayout(__recoveredScope) {
  return {
    stations: [1127891899, 1127891930],
    origin: [349.8, -403.45],
    objects: [{
      id: `summit:object-1`,
      label: `1`,
      kind: `yurt`,
      en: `Yurt`,
      zh: `传统蒙古包`,
      at: [24.4, -35],
      yaw: -.68,
      size: [3.3, 3.3],
      round: true,
      from: {
        A: [.3, .6038],
        B: [.8318, .6054],
        C: [.4385, .7265],
        D: [.602, .5234]
      },
      how: `A and D cast to 8 m of each other (D hits the roof, so lands north); the middle. Door turned to the plaza: a guess.`
    }, {
      id: `summit:object-2`,
      label: `2`,
      kind: `signpost`,
      en: `Four-country signpost`,
      zh: `一眼望四国路牌`,
      at: [.5, -3.5],
      yaw: 0,
      size: [2.6, 2.6],
      round: true,
      from: {
        A: [.4276, .5377],
        B: [.4029, .6311],
        C: [.3972, .4752],
        D: [.4742, .694]
      },
      how: `A, B and D cast within 4 m. Its arrows point the real ways: Russia north, Mongolia east, Kazakhstan west, China south.`
    }, ...[[-37.4, -5.2], [-43.6, -3.2], [-49.8, -1.2]].map((e, t) => ({
      id: `summit:object-3-set-${t + 1}`,
      label: `3·${t + 1}`,
      kind: `prayerWheels`,
      en: `Prayer wheels ${t + 1} of 3`,
      zh: `转经轮 第${t + 1}组`,
      at: e,
      yaw: .31,
      size: [2.7, .75],
      from: t ? {} : {
        A: [.5645, .6639],
        B: [.16, .4847],
        C: [.5883, .4416],
        D: [.2853, .5441]
      },
      how: `The arrows mark the area only. Three sets in a row, 6.5 m apart, along the long roof seen in A and D (which cast to x -35 to -48), from G6 toward the ovoo; each set's own place and turn are estimates. Their fronts face the path out to the ovoo, so it passes them on your right.`
    })), {
      id: `summit:object-4`,
      label: `4`,
      kind: `ovoo`,
      en: `Ovoo and prayer flags`,
      zh: `敖包与经幡`,
      at: [-70, 7],
      yaw: 1.77,
      size: [3.4, 3.4],
      round: true,
      from: {
        A: [.6705, .7173],
        C: [.6184, .3498],
        D: [.1169, .5564]
      },
      how: `A's circle casts to (-76, 14), D's half in frame to (-68, 4); set between, 4 m off A and half out of D's frame as there. Steps face the path from G6.`
    }, {
      id: `summit:object-5`,
      label: `5`,
      kind: `hut`,
      en: `Small wooden hut`,
      zh: `小木屋`,
      at: [-21.5, -19.5],
      yaw: .83,
      size: [1.8, 1.5],
      from: {
        A: [.4617, .6968],
        B: [.366, .5081],
        C: [.6175, .5063],
        D: [.4003, .5114]
      },
      how: `A and D cast within 3 m, at the mast's foot. What it is for is not known.`
    }, {
      id: `summit:object-6`,
      label: `6`,
      kind: `photoFrame`,
      en: `Giant photo frame`,
      zh: `巨型木相框`,
      at: [3.5, -24.5],
      yaw: -.06,
      size: [2.7, 1],
      from: {
        A: [.3674, .5988],
        B: [.5783, .5925],
        C: [.4973, .5812],
        D: [.5128, .532]
      },
      how: `The user's later D arrow (on its top bar) cast to (3, -28), its base about 3 m nearer; B's face-on frame casts to (2, -21). Faces the plaza, its plane east–west as D and B see it.`
    }, {
      id: `summit:object-7`,
      label: `7`,
      kind: `cabin`,
      en: `Coffee cabin`,
      zh: `咖啡小屋`,
      at: [-20, -57],
      yaw: .34,
      size: [5, 4.75],
      from: {
        A: [.3813, .868],
        B: [.6073, .5595],
        C: [.9128, .763],
        D: [.4492, .3552]
      },
      how: `A and D cast within 2 m, out on the shoulder past the mast. Door to the way up from the plaza: a guess.`
    }, {
      id: `summit:object-8`,
      label: `8`,
      kind: `swing`,
      en: `Two-seat swing`,
      zh: `双座秋千`,
      at: [7.5, -5],
      yaw: -.2,
      size: [2.9, .5],
      from: {
        A: [.3961, .4889],
        B: [.4877, .6696],
        C: [.3207, .5089],
        D: [.5301, .7116]
      },
      how: `A, B and D cast to x 5–12, z -6 to 2; drawn 3 m west of that so it clears the game's wider G7 station. Beam east–west as in A and D.`
    }, ...[[-4.3, -96, .05, [.5229, .2482]], [2.5, -105.5, -.02, [.5449, .2312]], [37, -109, -.33, [.6421, .2692]]].map(([e, t, n, r], i) => ({
      id: `summit:object-9-pod-${i + 1}`,
      label: `9${`abc`[i]}`,
      kind: `pod`,
      en: `Dome pod ${`abc`[i]}`,
      zh: `穹顶帐篷 ${`abc`[i]}`,
      at: [e, t],
      yaw: n,
      size: [2.3, 2.3],
      round: true,
      from: {
        D: r
      },
      how: `D only, from a pick of each pod (the arrow marks the three together), cast onto the shoulder raised for them; a, b, c left to right in D.`
    })), {
      id: `summit:helper-mast`,
      label: `M`,
      kind: `mast`,
      en: `Telecoms mast`,
      zh: `通信杆`,
      at: [-28, -25.3],
      yaw: 0,
      size: [.7, .7],
      from: {},
      how: `Not one of the nine: fitted as a free point with camera D (base and top), and A agrees within 2 m. A landmark for checking the views.`
    }],
    terrain: {
      terrace: {
        lines: [[[-22, 5, 0], [0, -4, 0], [21, -6, 0]], [[-26, -24, 0], [-6, -10, 0]]],
        r0: 14,
        r1: 30
      },
      ridge: {
        line: [[-28, -3, .3], [-53, -.5, .4], [-62, 5, 2], [-70, 7, 3]],
        r0: 3,
        r1: 12
      },
      shoulder: {
        line: [[-24, -24, 0], [-13, -42, -3], [-16, -58, -5], [-8, -80, -6.5], [-2, -98, -7.5], [14, -106, -7.5], [37, -109, -8]],
        r0: 5,
        r1: 16
      },
      knoll: {
        at: [28, -52],
        axis: [.6, -.8],
        half: 30,
        nw: 11,
        se: 22,
        height: 4
      }
    }
  };
}
/* Recovered binding findSummitObject. Live dependencies: summitObjectLayout. */
export function create_findSummitObject(__recoveredScope) {
  return e => __recoveredScope.summitObjectLayout.objects.find(t => t.id === e);
}
/* Recovered binding serviceCentreLocations. Live dependencies: . */
export function create_serviceCentreLocations(__recoveredScope) {
  return [{
    id: `east`,
    zh: `东区服务大厅`,
    en: `East Service Centre`,
    ele: 1439,
    x: 710,
    z: 4410,
    faceTo: [610, 4280],
    roof: `#5f8064`,
    lift: `1号索道`
  }, {
    id: `west`,
    zh: `西区服务大厅`,
    en: `West Service Centre`,
    ele: 1383,
    x: -1240,
    z: 4640,
    faceTo: [-1183, 4512],
    roof: `#4a5661`,
    lift: `3号索道`
  }];
}
/* Recovered binding ga. Live dependencies: liftEndpointPositions, summitObjectLayout. */
export function create_ga(__recoveredScope) {
  return function ga(e) {
    let t = __recoveredScope.liftEndpointPositions(e),
      n = __recoveredScope.summitObjectLayout.stations.map(n => {
        let r = e.findIndex(e => String(e.id) === String(n));
        return r >= 0 && t[r];
      });
    if (!n[0] || !n[1]) return null;
    let r = null;
    for (let e of n[0]) for (let t of n[1]) {
      let n = Math.hypot(e[0] - t[0], e[1] - t[1]);
      (!r || n < r.d) && (r = {
        d: n,
        a: e,
        b: t
      });
    }
    let {
      a: i,
      b: a
    } = r;
    return {
      origin: [(i[0] + a[0]) / 2, (i[1] + a[1]) / 2],
      stations: [i, a]
    };
  };
}
/* Recovered binding va. Live dependencies: ga, summitObjectLayout. Writes: _a. */
export function create_va(__recoveredScope) {
  return function va(e) {
    __recoveredScope._a = __recoveredScope.ga(e)?.origin ?? __recoveredScope.summitObjectLayout.origin;
  };
}
/* Recovered binding Ca. Live dependencies: Sa, findSummitObject, _a, ha, ba. */
export function create_Ca(__recoveredScope) {
  return function Ca(e) {
    if (__recoveredScope.Sa[e]) return {
      ...__recoveredScope.Sa[e]
    };
    let [t, n] = e.split(`:`);
    if (t === `summit`) {
      let {
        at: t,
        yaw: n
      } = __recoveredScope.findSummitObject(e);
      return {
        x: __recoveredScope._a[0] + t[0],
        z: __recoveredScope._a[1] + t[1],
        yaw: n
      };
    }
    if (t === `vehicle`) {
      let {
          x: e,
          z: t,
          yaw: r
        } = Ca(`lodge:east`),
        [i, a] = __recoveredScope.ha[n],
        o = Math.cos(r),
        s = Math.sin(r);
      return {
        x: e + i * o + a * s,
        z: t - i * s + a * o,
        yaw: r
      };
    }
    let {
      x: r,
      z: i,
      faceTo: a
    } = __recoveredScope.ba.get(e);
    return {
      x: r,
      z: i,
      yaw: Math.atan2(a[0] - r, a[1] - i)
    };
  };
}
/* Recovered binding wa. Live dependencies: xa, ya, ba, Sa. Writes: Sa. */
export function create_wa(__recoveredScope) {
  return function wa(e = {}) {
    __recoveredScope.Sa = Object.fromEntries(Object.entries(e).filter(([e]) => __recoveredScope.xa.includes(e)));
    for (let [e, t] of __recoveredScope.ya) {
      let n = __recoveredScope.ba.get(e);
      if (!__recoveredScope.Sa[e]) {
        Object.assign(t, {
          x: n.x,
          z: n.z,
          faceTo: [...n.faceTo]
        });
        continue;
      }
      let {
          x: r,
          z: i,
          yaw: a
        } = __recoveredScope.Sa[e],
        o = Math.hypot(n.faceTo[0] - n.x, n.faceTo[1] - n.z);
      Object.assign(t, {
        x: r,
        z: i,
        faceTo: [r + Math.sin(a) * o, i + Math.cos(a) * o]
      });
    }
  };
}
