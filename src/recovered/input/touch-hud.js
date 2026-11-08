/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Vp. Live dependencies: Nd, Ed, i_, W, rider, Sh, qp, Jp, Yp, Xp, Zp, Qp, em, Gp, $p, B, $, Q, Ah, X. */
export function create_Vp(__recoveredScope) {
  return function Vp() {
    let e = __recoveredScope.Nd.on && !__recoveredScope.Ed.isOpen && !__recoveredScope.i_ && (__recoveredScope.W === `ride` || __recoveredScope.W === `drive` || __recoveredScope.W === `horse` || __recoveredScope.W === `snowMonster` || __recoveredScope.W === `lift` || __recoveredScope.W === `soak` || __recoveredScope.W === `swing`);
    if (__recoveredScope.Nd.show(e), e) {
      if (__recoveredScope.W === `ride`) {
        let e = __recoveredScope.rider.locomotion === `walk`,
          t = __recoveredScope.Sh.open ? {
            label: `Next`,
            icon: `talk`,
            lit: true
          } : __recoveredScope.qp ? {
            label: __recoveredScope.qp.touch.enter,
            icon: `in`,
            lit: true
          } : __recoveredScope.Jp ? {
            label: `Catch`,
            icon: `in`,
            lit: true
          } : __recoveredScope.Yp ? {
            label: `Ride`,
            icon: `in`,
            lit: true
          } : __recoveredScope.Xp ? {
            label: `Soak`,
            icon: `in`,
            lit: true
          } : __recoveredScope.Zp ? {
            label: `Swing`,
            icon: `in`,
            lit: true
          } : __recoveredScope.Qp ? {
            label: `Pet`,
            icon: `paw`,
            lit: true
          } : __recoveredScope.em ? {
            label: `Turn`,
            icon: `wheel`,
            lit: true
          } : __recoveredScope.Gp ? {
            label: `Ride up`,
            icon: `lift`,
            lit: true
          } : null;
        __recoveredScope.Nd.layout({
          layout: e ? `walk` : `board`,
          big: e ? `board` : `ollie`,
          alt: __recoveredScope.$p ? `throw` : null,
          aux: !e && __recoveredScope.rider.canWalk ? `foot` : null,
          act: t
        });
      } else if (__recoveredScope.W === `drive`) __recoveredScope.Nd.layout({
        layout: __recoveredScope.B.flies ? `fly` : `drive`,
        big: __recoveredScope.B.flies ? `up` : __recoveredScope.B.floats ? `hold` : `handbrake`,
        low: __recoveredScope.B.flies ? `down` : null,
        act: {
          label: __recoveredScope.B.touch.exit,
          icon: `out`,
          dim: __recoveredScope.B.phys.canExit === false
        }
      });else if (__recoveredScope.W === `horse`) __recoveredScope.Nd.layout({
        layout: `drive`,
        act: {
          label: `Get off`,
          icon: `out`,
          dim: __recoveredScope.$.state !== `ridden`
        }
      });else if (__recoveredScope.W === `snowMonster`) {
        let e = __recoveredScope.Q.state;
        e === `caught` ? __recoveredScope.Nd.layout({
          layout: `lift`,
          stick: false,
          act: {
            label: `Summit`,
            icon: `lift`,
            lit: true
          },
          aux: `steer`,
          alt: `getDown`
        }) : __recoveredScope.Nd.layout({
          layout: e === `ridden` ? `board` : `lift`,
          stick: e === `ridden`,
          big: `jump`,
          act: {
            label: `Get down`,
            icon: `out`
          }
        });
      } else __recoveredScope.W === `soak` ? __recoveredScope.Nd.layout({
        layout: `lift`,
        act: {
          label: `Get out`,
          icon: `out`
        }
      }) : __recoveredScope.W === `swing` ? __recoveredScope.Nd.layout({
        layout: `lift`,
        aux: __recoveredScope.Ah.auto ? `manual` : `auto`,
        act: {
          label: `Jump off`,
          icon: `out`
        }
      }) : __recoveredScope.Nd.layout({
        layout: `lift`,
        stick: false,
        act: __recoveredScope.X.t > .5 && !__recoveredScope.X.waiting ? {
          label: __recoveredScope.X.system ? `Faster` : `Skip`,
          icon: `skip`
        } : null
      });
    }
  };
}
