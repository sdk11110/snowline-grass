/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding encodeDestination. Live dependencies: . */
export function create_encodeDestination(__recoveredScope) {
  return function encodeDestination(e) {
    return e.kind === `run` ? `run:${e.id}` : e.kind === `lift` ? `lift:${e.id}:${e.end}` : `lodge:${e.id}`;
  };
}
/* Recovered binding parseDestination. Live dependencies: kp. */
export function create_parseDestination(__recoveredScope) {
  return function parseDestination(e) {
    let [t, n, r] = String(e ?? ``).split(`:`);
    return n ? t === `run` || t === `lodge` ? {
      kind: t,
      id: n
    } : t === `lift` ? {
      kind: t,
      id: n,
      end: __recoveredScope.kp.has(r) ? r : `bottom`
    } : null : null;
  };
}
/* Recovered binding readDestinationFromUrl. Live dependencies: parseDestination. */
export function create_readDestinationFromUrl(__recoveredScope) {
  return () => __recoveredScope.parseDestination(new URLSearchParams(location.search).get(`at`));
}
/* Recovered binding findRunHighStart. Live dependencies: . */
export function create_findRunHighStart(__recoveredScope) {
  return function findRunHighStart(e, t, n) {
    let r = t.find(e => String(e.id) === String(n));
    if (!r) return null;
    let i = r.name ? t.filter(e => e.name === r.name) : [r],
      a = null;
    for (let t of i) for (let n of [0, t.points.length - 1]) {
      let [r, i] = t.points[n],
        o = e.heightAt(r, i);
      (!a || o > a.y) && (a = {
        run: t,
        x: r,
        y: o,
        z: i,
        points: n ? [...t.points].reverse() : t.points
      });
    }
    return a;
  };
}
/* Recovered binding encodePlayerPosition. Live dependencies: . */
export function create_encodePlayerPosition(__recoveredScope) {
  return function encodePlayerPosition({
    x: e,
    z: t,
    bearing: n,
    lift: r
  }) {
    return [Math.round(e), Math.round(t), Math.round(n), ...(r ? [r] : [])].join(`,`);
  };
}
/* Recovered binding parsePlayerPosition. Live dependencies: . */
export function create_parsePlayerPosition(__recoveredScope) {
  return function parsePlayerPosition(e) {
    let [t, n, r, i] = String(e ?? ``).split(`,`);
    return [t, n].every(e => e !== `` && Number.isFinite(+e)) ? {
      x: +t,
      z: +n,
      bearing: +r || 0,
      lift: i || null
    } : null;
  };
}
/* Recovered binding publishPlayerPosition. Live dependencies: Pp, encodePlayerPosition. */
export function create_publishPlayerPosition(__recoveredScope) {
  return function publishPlayerPosition(e) {
    try {
      e ? localStorage.setItem(__recoveredScope.Pp, JSON.stringify({
        at: __recoveredScope.encodePlayerPosition(e),
        t: Date.now()
      })) : localStorage.removeItem(__recoveredScope.Pp);
    } catch {}
  };
}
/* Recovered binding subscribePlayerPosition. Live dependencies: parsePlayerPosition, Pp, Fp. */
export function create_subscribePlayerPosition(__recoveredScope) {
  return function subscribePlayerPosition(e) {
    let t = (e, t) => {
      try {
        let {
          at: n,
          t: r
        } = JSON.parse(e);
        return Date.now() - r < t ? __recoveredScope.parsePlayerPosition(n) : null;
      } catch {
        return null;
      }
    };
    window.addEventListener(`storage`, n => {
      n.key === __recoveredScope.Pp && e(n.newValue ? t(n.newValue, 1 / 0) : null);
    });
    try {
      return t(localStorage.getItem(__recoveredScope.Pp), __recoveredScope.Fp);
    } catch {
      return null;
    }
  };
}
/* Recovered binding writeDioramaHandoff. Live dependencies: Bp. */
export function create_writeDioramaHandoff(__recoveredScope) {
  return function writeDioramaHandoff(e) {
    try {
      sessionStorage.setItem(__recoveredScope.Bp, e);
    } catch {}
  };
}
/* Recovered binding consumeDioramaHandoff. Live dependencies: Bp. */
export function create_consumeDioramaHandoff(__recoveredScope) {
  return function consumeDioramaHandoff() {
    try {
      let e = sessionStorage.getItem(__recoveredScope.Bp);
      return sessionStorage.removeItem(__recoveredScope.Bp), e;
    } catch {
      return null;
    }
  };
}
/* Recovered binding bilingualRunNames. Live dependencies: . */
export function create_bilingualRunNames(__recoveredScope) {
  return {
    丁香道: [`Dingxiang`, `Lilac`],
    不冻泉道: [`Budongquan`, `Unfrozen Spring`],
    也麦盖特道: [`Yemaigaite`],
    云杉道: [`Yunshan`, `Spruce`],
    云湖道: [`Yunhu`, `Cloud Lake`],
    云霄峰道: [`Yunxiaofeng`, `Sky-High Peak`],
    五彩滩道: [`Wucaitan`, `Five-Colour Shoal`],
    五指泉道: [`Wuzhiquan`, `Five-Finger Spring`],
    伊雷木湖道: [`Yileimuhu`, `Yileimu Lake`],
    冷杉道: [`Lengshan`, `Fir`],
    卧龙湾道: [`Wolongwan`, `Sleeping Dragon Bay`],
    友谊峰道: [`Youyifeng`, `Friendship Peak`],
    双湖道: [`Shuanghu`, `Twin Lakes`],
    可可托海道: [`Keketuohai`, `Koktokay`],
    吉克普林道: [`Jikepulin`],
    响泉道: [`Xiangquan`, `Echoing Spring`],
    喀纳斯道: [`Kanasi`, `Kanas`],
    圣泉道: [`Shengquan`, `Holy Spring`],
    将军山道: [`Jiangjunshan`, `General's Mountain`],
    山楂道: [`Shanzha`, `Hawthorn`],
    巴丹莉道: [`Badanli`],
    干湖道: [`Ganhu`, `Dry Lake`],
    月亮湾道: [`Yueliangwan`, `Moon Bay`],
    望泉道: [`Wangquan`, `Spring View`],
    柳兰道: [`Liulan`, `Fireweed`],
    泰加林道: [`Taijialin`, `Taiga`],
    清泉道: [`Qingquan`, `Clear Spring`],
    滴水泉道: [`Dishuiquan`, `Dripping Spring`],
    狼山道: [`Langshan`, `Wolf Mountain`],
    白哈巴道: [`Baihaba`],
    白杨道: [`Baiyang`, `Poplar`],
    白桦道: [`Baihua`, `Birch`],
    白沙湖道: [`Baishahu`, `White Sand Lake`],
    白湖道: [`Baihu`, `White Lake`],
    盘古道: [`Pangu`],
    石泉道: [`Shiquan`, `Stone Spring`],
    神仙湾道: [`Shenxianwan`, `Immortals' Bay`],
    神石城道: [`Shenshicheng`, `Stone City`],
    禾木道: [`Hemu`],
    红柳道: [`Hongliu`, `Red Willow`],
    美丽峰道: [`Meilifeng`, `Beautiful Peak`],
    芍药道: [`Shaoyao`, `Peony`],
    花楸道: [`Huaqiu`, `Rowan`],
    蔷薇道: [`Qiangwei`, `Wild Rose`],
    蝴蝶泉道: [`Hudiequan`, `Butterfly Spring`],
    谷帘泉道: [`Gulianquan`, `Curtain Spring`],
    贾登峪道: [`Jiadengyu`],
    连接道: [`Lianjie`, `Connector`],
    野卡峡道: [`Yekaxia`, `Yeka Gorge`],
    金莲花道: [`Jinlianhua`, `Globeflower`],
    青格里道: [`Qinggeli`],
    静泉谷: [`Jingquangu`, `Quiet Spring Valley`],
    驼颈湾道: [`Tuojingwan`, `Camel's Neck Bay`],
    鸭泽湖道: [`Yazehu`, `Duck Marsh Lake`],
    黑湖道: [`Heihu`, `Black Lake`]
  };
}
/* Recovered binding runDifficultyStyles. Live dependencies: . */
export function create_runDifficultyStyles(__recoveredScope) {
  return {
    easy: {
      label: `Easy`,
      color: `#4f8fd6`,
      rank: 0
    },
    novice: {
      label: `Novice`,
      color: `#4f8fd6`,
      rank: 0
    },
    intermediate: {
      label: `Intermediate`,
      color: `#d9534a`,
      rank: 1
    },
    advanced: {
      label: `Advanced`,
      color: `#23303a`,
      rank: 2
    },
    expert: {
      label: `Expert`,
      color: `#23303a`,
      rank: 3
    },
    freeride: {
      label: `Freeride`,
      color: `#f08a24`,
      rank: 3
    }
  };
}
/* Recovered binding Gp. Live dependencies: . */
export function create_Gp(__recoveredScope) {
  return {
    gondola: `Gondola`,
    chair_lift: `Chairlift`,
    magic_carpet: `Magic carpet`,
    drag_lift: `Drag lift`,
    "t-bar": `T-bar`
  };
}
/* Recovered binding liftDisplayName. Live dependencies: Gp. */
export function create_liftDisplayName(__recoveredScope) {
  return function liftDisplayName(e) {
    let t = __recoveredScope.Gp[e.type] || `Lift`,
      n = e.name && e.name.match(/(\d+)号/);
    return {
      zh: e.name || `魔毯`,
      en: n ? `${t} No. ${n[1]}` : t
    };
  };
}
