/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
import { finishLoading, createSkyDome, lakeContainingPoint, crashDuration, shakeOffDuration, prepareWorldAssets, hotSpringLocation, createCabinInteriorBounds, I as c, liftEndpointPositions, serviceCentreLocations, createRideGondola, treeLineElevation, sampleRouteDistance, selectCrashMotion, createWorldScene, WebGLRenderer, crossedCircularDistance, vitePreload, createYurtInteriorBounds, nearestLakeShore, createBackdropTerrain, graphicsSettingOptions, graphicsModes, createGraphicsController, createTitleLogo, encodeDestination, Rider, consumeDioramaHandoff, setLoadingArrival, createTitleSnow, createFloatingDioramaBase, readDestinationFromUrl, defaultRunName, defaultSkyPalette, findRunHighStart, createTransitionWipe, writeDioramaHandoff, encodePlayerPosition, summitObjectLayout, liftDisplayName, setLoadingProgress, publishPlayerPosition, crashPoseKeyframes, solveArmReachAngle, OutlinePostProcessor, WaterRipples } from "./shared-runtime.js";
import { $n as Ce, B as we, Cr as Vector3, Ct as Te, E as Ee, F as De, G as Oe, H as ke, It as Ae, Jn as je, Kn as Me, Kt as T, N as Ne, P as Pe, Pn as Fe, R as Ie, Rt as Le, Sr as Re, St as ze, Ut as Be, Wn as Ve, Wt as He, bt as MathUtils, c as Ue, d as We, h as Ge, l as Ke, lr as qe, nr as Je, p as Ye, q as Xe, qn as Ze, r as Qe, tr as $e, u as et, ur as tt, v as nt, wr as rt, wt as it, y as at, zt as ot } from "../vendor/three/core.js";
import { t as st } from "../vendor/three/buffer-geometry-utils.js";
import { isMobileModelProfile, cloneSkinnedModel, modelLoadStats, loadGLTF } from "./assets/model-loader.js";
import { toonUniforms, createToonMaterial } from "./render/toon-materials.js";
import { c as mt, l as ht, s as gt, t as _t } from "./rider/model.js";
import { create_yt } from "./ui/graphics-menu.js";
import { create_bt } from "./ui/graphics-menu.js";
import { create_xt } from "./render/diagnostics.js";
import { create_St } from "./rider/actions.js";
import { create_wt } from "./effects/fireball.js";
import { create_Tt } from "./effects/fireball.js";
import { create_Et } from "./physics/collision.js";
import { create_Dt } from "./physics/collision.js";
import { create_At } from "./weather/weather-system.js";
import { create_Ft } from "./weather/weather-system.js";
import { create_weatherPresets } from "./weather/weather-system.js";
import { create_Vt } from "./weather/weather-system.js";
import { create_Wt } from "./weather/weather-system.js";
import { create_Jt } from "./weather/weather-system.js";
import { create_WeatherController } from "./weather/weather-system.js";
import { create_tn } from "./world/prayer-wheels.js";
import { create_mn } from "./world/swing.js";
import { create__n } from "./animals/dog.js";
import { create_vn } from "./animals/quadruped-rig.js";
import { create_Pn } from "./animals/quadruped-rig.js";
import { create_Fn } from "./animals/quadruped-rig.js";
import { create_In } from "./animals/quadruped-rig.js";
import { create_Wn } from "./animals/quadruped-rig.js";
import { create_Qn } from "./animals/quadruped-rig.js";
import { create_Dollarn } from "./animals/quadruped-rig.js";
import { create_er } from "./effects/snow-tracks.js";
import { create_tr } from "./effects/snow-tracks.js";
import { create_rr } from "./effects/snow-tracks.js";
import { create_ir } from "./effects/snow-tracks.js";
import { create_ar } from "./effects/snow-tracks.js";
import { create_ur } from "./effects/snow-tracks.js";
import { create_gr } from "./effects/snow-tracks.js";
import { create__r } from "./effects/snow-tracks.js";
import { create_br } from "./effects/snow-tracks.js";
import { create_Pr } from "./animals/dog.js";
import { create_Fr } from "./animals/dog.js";
import { create_Ir } from "./animals/dog.js";
import { create_Lr } from "./animals/dog.js";
import { create_Rr } from "./animals/dog.js";
import { create_Vr } from "./animals/fox.js";
import { create_Gr } from "./animals/fox.js";
import { create_Yr } from "./animals/fox.js";
import { create_ni } from "./animals/fox.js";
import { create_ri } from "./animals/fox.js";
import { create_ii } from "./animals/fox.js";
import { create_ai } from "./animals/fox.js";
import { create_hi } from "./animals/fox.js";
import { create_gi } from "./animals/fox.js";
import { create__i } from "./animals/fox.js";
import { create_xi } from "./animals/fox.js";
import { create_Si } from "./animals/fox.js";
import { create_Ci } from "./animals/fox.js";
import { create_wi } from "./animals/fox.js";
import { create_Ti } from "./animals/fox.js";
import { create_qi } from "./animals/fox.js";
import { create_Ji } from "./animals/fox.js";
import { create_Zi } from "./animals/horse.js";
import { create_Qi } from "./animals/horse.js";
import { create_Sa } from "./animals/horse.js";
import { create_Ca } from "./animals/horse.js";
import { create_wa } from "./animals/horse.js";
import { create_Ta } from "./animals/horse.js";
import { create_Aa } from "./animals/horse.js";
import { create_ja } from "./animals/horse.js";
import { create_Ma } from "./animals/horse.js";
import { create_Na } from "./animals/horse.js";
import { create_Wa } from "./animals/horse.js";
import { create_Qa } from "./animals/horse.js";
import { create_Dollara } from "./animals/horse.js";
import { create_eo } from "./animals/horse.js";
import { create_io } from "./animals/horse.js";
import { create_oo } from "./animals/horse.js";
import { create_so } from "./animals/horse.js";
import { create_bo } from "./animals/horse.js";
import { create_xo } from "./animals/horse.js";
import { create_So } from "./animals/horse.js";
import { create_To } from "./animals/horse.js";
import { create_Oo } from "./animals/horse.js";
import { create_Ao } from "./animals/horse.js";
import { create_jo } from "./animals/horse.js";
import { create_Mo } from "./animals/horse.js";
import { create_Po } from "./animals/horse.js";
import { create_Wo } from "./animals/horse.js";
import { create_Qo } from "./animals/horse.js";
import { create_Dollaro } from "./animals/horse.js";
import { create_es } from "./animals/horse.js";
import { create_ts } from "./animals/horse.js";
import { create_as } from "./animals/horse.js";
import { create__s } from "./animals/horse.js";
import { create_Ss } from "./animals/horse.js";
import { create_Cs } from "./animals/horse.js";
import { create_Es } from "./animals/horse.js";
import { create_qs } from "./animals/horse.js";
import { create_Js } from "./animals/horse.js";
import { create_Ys } from "./animals/horse.js";
import { create_Xs } from "./animals/horse.js";
import { create_Zs } from "./animals/horse.js";
import { create_Qs } from "./animals/horse.js";
import { create_Dollars } from "./animals/horse.js";
import { create_ec } from "./animals/horse.js";
import { create_nc } from "./animals/snow-monster.js";
import { create_dc } from "./animals/snow-monster.js";
import { create_pc } from "./animals/snow-monster.js";
import { create_mc } from "./animals/snow-monster.js";
import { create_hc } from "./ui/dialogue.js";
import { create_Ec } from "./ui/dialogue.js";
import { create_Dc } from "./ui/dialogue.js";
import { create_Oc } from "./ui/dialogue.js";
import { create_kc } from "./ui/dialogue.js";
import { create_jc } from "./ui/dialogue.js";
import { create_Mc } from "./ui/dialogue.js";
import { create_SnowboardPhysics } from "./physics/skier.js";
import { create_Dollarc } from "./navigation/gps.js";
import { create_el } from "./navigation/gps.js";
import { create_cl } from "./navigation/gps.js";
import { create_ll } from "./navigation/gps.js";
import { create_ul } from "./navigation/gps.js";
import { create_GpsNavigator } from "./navigation/gps.js";
import { create_fl } from "./navigation/gps.js";
import { create_ml } from "./ui/hud.js";
import { create_gl } from "./ui/hud.js";
import { create__l } from "./ui/hud.js";
import { create_wl } from "./navigation/big-map.js";
import { create_BigMapController } from "./navigation/big-map.js";
import { create_El } from "./navigation/big-map.js";
import { create_Ml } from "./navigation/beacons.js";
import { create_Ll } from "./audio/sound-system.js";
import { create_Rl } from "./audio/sound-system.js";
import { create_zl } from "./audio/sound-system.js";
import { create_Bl } from "./audio/sound-system.js";
import { create_Gl } from "./audio/sound-system.js";
import { create_ql } from "./audio/sound-system.js";
import { create_Jl } from "./audio/sound-system.js";
import { create_Yl } from "./audio/sound-system.js";
import { create_Xl } from "./audio/sound-system.js";
import { create_Zl } from "./audio/sound-system.js";
import { create_Ql } from "./audio/sound-system.js";
import { create_Dollarl } from "./audio/sound-system.js";
import { create_eu } from "./audio/sound-system.js";
import { create_nu } from "./ui/menu.js";
import { create_ru } from "./ui/menu.js";
import { create_cu } from "./input/touch.js";
import { create_lu } from "./input/touch.js";
import { create_uu } from "./input/touch.js";
import { create_du } from "./input/touch.js";
import { create_MouseLookController } from "./camera/mouse-look.js";
import { create_vu } from "./camera/mouse-look.js";
import { create_xu } from "./input/player-controls.js";
import { create_Du } from "./render/viewport.js";
import { create_Ju } from "./world/interiors.js";
import { create_Yu } from "./world/interiors.js";
import { create_Qu } from "./game/session.js";
import { create_playSpecialAction } from "./rider/actions.js";
import { create_stopSpecialAction } from "./rider/actions.js";
import { create_bd } from "./navigation/position.js";
import { create_Cd } from "./game/vehicle-riding.js";
import { create_Td } from "./game/vehicle-riding.js";
import { create_Od } from "./input/player-controls.js";
import { create_handleActionKey } from "./input/player-controls.js";
import { create_Ad } from "./input/player-controls.js";
import { create_jd } from "./input/player-controls.js";
import { create_readInputState } from "./input/player-controls.js";
import { create_Id } from "./input/player-controls.js";
import { create_toggleLocomotion } from "./input/player-controls.js";
import { create_Hd } from "./rider/selection.js";
import { create_selectRider } from "./rider/selection.js";
import { create_ef } from "./ui/weather-menu.js";
import { create_nf } from "./ui/weather-menu.js";
import { create_af } from "./ui/weather-menu.js";
import { create_cf } from "./rider/gear.js";
import { create_ff } from "./ui/panel.js";
import { create_startRun } from "./game/session.js";
import { create__f } from "./ui/intro.js";
import { create_vf } from "./ui/intro.js";
import { create_yf } from "./ui/intro.js";
import { create_bf } from "./ui/intro.js";
import { create_Sf } from "./camera/follow.js";
import { create_computeFollowCameraTargets } from "./camera/follow.js";
import { create_Of } from "./camera/follow.js";
import { create_kf } from "./camera/follow.js";
import { create_resetFollowCamera } from "./camera/follow.js";
import { create_Mf } from "./camera/follow.js";
import { create_Nf } from "./camera/follow.js";
import { create_Pf } from "./camera/follow.js";
import { create_Wf } from "./camera/follow.js";
import { create_Gf } from "./camera/follow.js";
import { create_Kf } from "./camera/follow.js";
import { create_Jf } from "./camera/follow.js";
import { create_Xf } from "./camera/follow.js";
import { create_Qf } from "./camera/follow.js";
import { create_updateFollowCamera } from "./camera/follow.js";
import { create_mp } from "./camera/first-person.js";
import { create_hp } from "./camera/first-person.js";
import { create_yp } from "./camera/first-person.js";
import { create_xp } from "./camera/first-person.js";
import { create_Sp } from "./camera/first-person.js";
import { create_Cp } from "./camera/first-person.js";
import { create_kp } from "./camera/first-person.js";
import { create_jp } from "./effects/snow-tracks.js";
import { create_Mp } from "./effects/snow-tracks.js";
import { create_zp } from "./game/render-loop.js";
import { create_Bp } from "./game/render-loop.js";
import { create_Vp } from "./input/touch-hud.js";
import { create_Wp } from "./game/recovery.js";
import { create_tm } from "./game/interactions.js";
import { create_rm } from "./game/lift-riding.js";
import { create_im } from "./game/lift-riding.js";
import { create_am } from "./game/lift-riding.js";
import { create_om } from "./game/lift-riding.js";
import { create_sm } from "./game/lift-riding.js";
import { create_cm } from "./game/lift-riding.js";
import { create_lm } from "./game/lift-riding.js";
import { create_um } from "./game/lift-riding.js";
import { create_dm } from "./world/safe-position.js";
import { create_fm } from "./world/safe-position.js";
import { create_pm } from "./world/safe-position.js";
import { create_mm } from "./world/safe-position.js";
import { create__m } from "./animals/dog.js";
import { create_bm } from "./animals/dog.js";
import { create_Cm } from "./animals/dog.js";
import { create_Em } from "./animals/fox.js";
import { create_Mm } from "./animals/snow-monster.js";
import { create_Nm } from "./animals/snow-monster.js";
import { create_zm } from "./animals/snow-monster.js";
import { create_Bm } from "./animals/snow-monster.js";
import { create_Vm } from "./animals/snow-monster.js";
import { create_Hm } from "./animals/snow-monster.js";
import { create_Xm } from "./animals/snow-monster.js";
import { create_Zm } from "./animals/snow-monster.js";
import { create_Qm } from "./animals/snow-monster.js";
import { create_Dollarm } from "./animals/snow-monster.js";
import { create_eh } from "./animals/snow-monster.js";
import { create_th } from "./animals/snow-monster.js";
import { create_nh } from "./animals/snow-monster.js";
import { create_rh } from "./animals/snow-monster.js";
import { create_ih } from "./animals/snow-monster.js";
import { create_sh } from "./animals/horse.js";
import { create_ch } from "./animals/horse.js";
import { create_lh } from "./animals/horse.js";
import { create_uh } from "./animals/horse.js";
import { create_dh } from "./animals/horse.js";
import { create_ph } from "./animals/horse.js";
import { create_mh } from "./animals/horse.js";
import { create_gh } from "./animals/horse.js";
import { create_vh } from "./animals/horse.js";
import { create_bh } from "./animals/horse.js";
import { create_xh } from "./animals/horse.js";
import { create_Eh } from "./ui/dialogue.js";
import { create_Oh } from "./world/swing.js";
import { create_kh } from "./world/swing.js";
import { create_jh } from "./world/swing.js";
import { create_Mh } from "./world/swing.js";
import { create_Nh } from "./world/swing.js";
import { create_Ph } from "./world/swing.js";
import { create_Lh } from "./world/swing.js";
import { create_Kh } from "./world/prayer-wheels.js";
import { create_qh } from "./world/prayer-wheels.js";
import { create_Xh } from "./rider/snowball.js";
import { create_Qh } from "./game/vehicle-riding.js";
import { create_eg } from "./game/vehicle-riding.js";
import { create_tg } from "./game/vehicle-riding.js";
import { create_ng } from "./game/vehicle-riding.js";
import { create_rg } from "./game/vehicle-riding.js";
import { create_ig } from "./game/vehicle-riding.js";
import { create_og } from "./game/vehicle-riding.js";
import { create_ug } from "./rider/mount-transition.js";
import { create_dg } from "./rider/mount-transition.js";
import { create_mg } from "./camera/vehicle-follow.js";
import { create_hg } from "./camera/vehicle-follow.js";
import { create_yg } from "./game/vehicle-effects.js";
import { create_bg } from "./game/vehicle-effects.js";
import { create_xg } from "./game/vehicle-effects.js";
import { create_Sg } from "./game/vehicle-effects.js";
import { create_Cg } from "./game/onsen-riding.js";
import { create_Ag } from "./game/onsen-riding.js";
import { create_jg } from "./game/onsen-riding.js";
import { create_Mg } from "./game/onsen-riding.js";
import { create_Ng } from "./game/onsen-riding.js";
import { create_Pg } from "./game/onsen-riding.js";
import { create_Rg } from "./game/onsen-riding.js";
import { create_zg } from "./game/onsen-riding.js";
import { create_Bg } from "./game/onsen-riding.js";
import { create_Vg } from "./game/onsen-riding.js";
import { create_Wg } from "./navigation/destinations.js";
import { create_Gg } from "./game/arrival.js";
import { create_qg } from "./game/arrival.js";
import { create_Jg } from "./game/arrival.js";
import { create_Zg } from "./navigation/map-controls.js";
import { create_Dollarg } from "./navigation/map-controls.js";
import { create_e_ } from "./navigation/map-controls.js";
import { create_n_ } from "./navigation/diorama-handoff.js";
import { create_r_ } from "./navigation/diorama-handoff.js";
import { create_a_ } from "./navigation/diorama-handoff.js";
import { create_o_ } from "./navigation/diorama-handoff.js";
import { create_c_ } from "./navigation/diorama-handoff.js";
import { create_l_ } from "./navigation/diorama-handoff.js";
import { create_u_ } from "./navigation/diorama-handoff.js";
/* Accessor context intentionally preserves original shared live state and writes. Feature factories only create declarations; game initialization below retains its original order. */
const gameScope = {
  get __vite__mapDeps() {
    return __vite__mapDeps;
  },
  get finishLoading() {
    return finishLoading;
  },
  get createSkyDome() {
    return createSkyDome;
  },
  get lakeContainingPoint() {
    return lakeContainingPoint;
  },
  get crashDuration() {
    return crashDuration;
  },
  get shakeOffDuration() {
    return shakeOffDuration;
  },
  get prepareWorldAssets() {
    return prepareWorldAssets;
  },
  get hotSpringLocation() {
    return hotSpringLocation;
  },
  get createCabinInteriorBounds() {
    return createCabinInteriorBounds;
  },
  get c() {
    return c;
  },
  get liftEndpointPositions() {
    return liftEndpointPositions;
  },
  get serviceCentreLocations() {
    return serviceCentreLocations;
  },
  get createRideGondola() {
    return createRideGondola;
  },
  get treeLineElevation() {
    return treeLineElevation;
  },
  get sampleRouteDistance() {
    return sampleRouteDistance;
  },
  get selectCrashMotion() {
    return selectCrashMotion;
  },
  get createWorldScene() {
    return createWorldScene;
  },
  get WebGLRenderer() {
    return WebGLRenderer;
  },
  get crossedCircularDistance() {
    return crossedCircularDistance;
  },
  get vitePreload() {
    return vitePreload;
  },
  get createYurtInteriorBounds() {
    return createYurtInteriorBounds;
  },
  get nearestLakeShore() {
    return nearestLakeShore;
  },
  get createBackdropTerrain() {
    return createBackdropTerrain;
  },
  get graphicsSettingOptions() {
    return graphicsSettingOptions;
  },
  get graphicsModes() {
    return graphicsModes;
  },
  get createGraphicsController() {
    return createGraphicsController;
  },
  get createTitleLogo() {
    return createTitleLogo;
  },
  get encodeDestination() {
    return encodeDestination;
  },
  get Rider() {
    return Rider;
  },
  get consumeDioramaHandoff() {
    return consumeDioramaHandoff;
  },
  get setLoadingArrival() {
    return setLoadingArrival;
  },
  get createTitleSnow() {
    return createTitleSnow;
  },
  get createFloatingDioramaBase() {
    return createFloatingDioramaBase;
  },
  get readDestinationFromUrl() {
    return readDestinationFromUrl;
  },
  get defaultRunName() {
    return defaultRunName;
  },
  get defaultSkyPalette() {
    return defaultSkyPalette;
  },
  get findRunHighStart() {
    return findRunHighStart;
  },
  get createTransitionWipe() {
    return createTransitionWipe;
  },
  get writeDioramaHandoff() {
    return writeDioramaHandoff;
  },
  get encodePlayerPosition() {
    return encodePlayerPosition;
  },
  get summitObjectLayout() {
    return summitObjectLayout;
  },
  get liftDisplayName() {
    return liftDisplayName;
  },
  get setLoadingProgress() {
    return setLoadingProgress;
  },
  get publishPlayerPosition() {
    return publishPlayerPosition;
  },
  get crashPoseKeyframes() {
    return crashPoseKeyframes;
  },
  get solveArmReachAngle() {
    return solveArmReachAngle;
  },
  get OutlinePostProcessor() {
    return OutlinePostProcessor;
  },
  get WaterRipples() {
    return WaterRipples;
  },
  get Ce() {
    return Ce;
  },
  get we() {
    return we;
  },
  get Vector3() {
    return Vector3;
  },
  get Te() {
    return Te;
  },
  get Ee() {
    return Ee;
  },
  get De() {
    return De;
  },
  get Oe() {
    return Oe;
  },
  get ke() {
    return ke;
  },
  get Ae() {
    return Ae;
  },
  get je() {
    return je;
  },
  get Me() {
    return Me;
  },
  get T() {
    return T;
  },
  get Ne() {
    return Ne;
  },
  get Pe() {
    return Pe;
  },
  get Fe() {
    return Fe;
  },
  get Ie() {
    return Ie;
  },
  get Le() {
    return Le;
  },
  get Re() {
    return Re;
  },
  get ze() {
    return ze;
  },
  get Be() {
    return Be;
  },
  get Ve() {
    return Ve;
  },
  get He() {
    return He;
  },
  get MathUtils() {
    return MathUtils;
  },
  get Ue() {
    return Ue;
  },
  get We() {
    return We;
  },
  get Ge() {
    return Ge;
  },
  get Ke() {
    return Ke;
  },
  get qe() {
    return qe;
  },
  get Je() {
    return Je;
  },
  get Ye() {
    return Ye;
  },
  get Xe() {
    return Xe;
  },
  get Ze() {
    return Ze;
  },
  get Qe() {
    return Qe;
  },
  get $e() {
    return $e;
  },
  get et() {
    return et;
  },
  get tt() {
    return tt;
  },
  get nt() {
    return nt;
  },
  get rt() {
    return rt;
  },
  get it() {
    return it;
  },
  get at() {
    return at;
  },
  get ot() {
    return ot;
  },
  get st() {
    return st;
  },
  get isMobileModelProfile() {
    return isMobileModelProfile;
  },
  get cloneSkinnedModel() {
    return cloneSkinnedModel;
  },
  get modelLoadStats() {
    return modelLoadStats;
  },
  get loadGLTF() {
    return loadGLTF;
  },
  get toonUniforms() {
    return toonUniforms;
  },
  get createToonMaterial() {
    return createToonMaterial;
  },
  get mt() {
    return mt;
  },
  get ht() {
    return ht;
  },
  get gt() {
    return gt;
  },
  get _t() {
    return _t;
  },
  get vt() {
    return vt;
  },
  set vt(value) {
    vt = value;
  },
  get yt() {
    return yt;
  },
  set yt(value) {
    yt = value;
  },
  get bt() {
    return bt;
  },
  set bt(value) {
    bt = value;
  },
  get xt() {
    return xt;
  },
  set xt(value) {
    xt = value;
  },
  get St() {
    return St;
  },
  set St(value) {
    St = value;
  },
  get Ct() {
    return Ct;
  },
  set Ct(value) {
    Ct = value;
  },
  get wt() {
    return wt;
  },
  set wt(value) {
    wt = value;
  },
  get Tt() {
    return Tt;
  },
  set Tt(value) {
    Tt = value;
  },
  get Et() {
    return Et;
  },
  set Et(value) {
    Et = value;
  },
  get Dt() {
    return Dt;
  },
  set Dt(value) {
    Dt = value;
  },
  get Ot() {
    return Ot;
  },
  set Ot(value) {
    Ot = value;
  },
  get kt() {
    return kt;
  },
  set kt(value) {
    kt = value;
  },
  get At() {
    return At;
  },
  set At(value) {
    At = value;
  },
  get jt() {
    return jt;
  },
  set jt(value) {
    jt = value;
  },
  get Mt() {
    return Mt;
  },
  set Mt(value) {
    Mt = value;
  },
  get Nt() {
    return Nt;
  },
  set Nt(value) {
    Nt = value;
  },
  get Pt() {
    return Pt;
  },
  set Pt(value) {
    Pt = value;
  },
  get Ft() {
    return Ft;
  },
  set Ft(value) {
    Ft = value;
  },
  get It() {
    return It;
  },
  set It(value) {
    It = value;
  },
  get Lt() {
    return Lt;
  },
  set Lt(value) {
    Lt = value;
  },
  get Rt() {
    return Rt;
  },
  set Rt(value) {
    Rt = value;
  },
  get zt() {
    return zt;
  },
  set zt(value) {
    zt = value;
  },
  get weatherPresets() {
    return weatherPresets;
  },
  set weatherPresets(value) {
    weatherPresets = value;
  },
  get Vt() {
    return Vt;
  },
  set Vt(value) {
    Vt = value;
  },
  get Ht() {
    return Ht;
  },
  set Ht(value) {
    Ht = value;
  },
  get Ut() {
    return Ut;
  },
  set Ut(value) {
    Ut = value;
  },
  get Wt() {
    return Wt;
  },
  set Wt(value) {
    Wt = value;
  },
  get Gt() {
    return Gt;
  },
  set Gt(value) {
    Gt = value;
  },
  get Kt() {
    return Kt;
  },
  set Kt(value) {
    Kt = value;
  },
  get qt() {
    return qt;
  },
  set qt(value) {
    qt = value;
  },
  get Jt() {
    return Jt;
  },
  set Jt(value) {
    Jt = value;
  },
  get WeatherController() {
    return WeatherController;
  },
  set WeatherController(value) {
    WeatherController = value;
  },
  get Xt() {
    return Xt;
  },
  set Xt(value) {
    Xt = value;
  },
  get Zt() {
    return Zt;
  },
  set Zt(value) {
    Zt = value;
  },
  get Qt() {
    return Qt;
  },
  set Qt(value) {
    Qt = value;
  },
  get $t() {
    return $t;
  },
  set $t(value) {
    $t = value;
  },
  get en() {
    return en;
  },
  set en(value) {
    en = value;
  },
  get tn() {
    return tn;
  },
  set tn(value) {
    tn = value;
  },
  get nn() {
    return nn;
  },
  set nn(value) {
    nn = value;
  },
  get rn() {
    return rn;
  },
  set rn(value) {
    rn = value;
  },
  get an() {
    return an;
  },
  set an(value) {
    an = value;
  },
  get on() {
    return on;
  },
  set on(value) {
    on = value;
  },
  get sn() {
    return sn;
  },
  set sn(value) {
    sn = value;
  },
  get cn() {
    return cn;
  },
  set cn(value) {
    cn = value;
  },
  get ln() {
    return ln;
  },
  set ln(value) {
    ln = value;
  },
  get un() {
    return un;
  },
  set un(value) {
    un = value;
  },
  get dn() {
    return dn;
  },
  set dn(value) {
    dn = value;
  },
  get fn() {
    return fn;
  },
  set fn(value) {
    fn = value;
  },
  get pn() {
    return pn;
  },
  set pn(value) {
    pn = value;
  },
  get mn() {
    return mn;
  },
  set mn(value) {
    mn = value;
  },
  get hn() {
    return hn;
  },
  set hn(value) {
    hn = value;
  },
  get gn() {
    return gn;
  },
  set gn(value) {
    gn = value;
  },
  get _n() {
    return _n;
  },
  set _n(value) {
    _n = value;
  },
  get vn() {
    return vn;
  },
  set vn(value) {
    vn = value;
  },
  get yn() {
    return yn;
  },
  set yn(value) {
    yn = value;
  },
  get bn() {
    return bn;
  },
  set bn(value) {
    bn = value;
  },
  get xn() {
    return xn;
  },
  set xn(value) {
    xn = value;
  },
  get Sn() {
    return Sn;
  },
  set Sn(value) {
    Sn = value;
  },
  get Cn() {
    return Cn;
  },
  set Cn(value) {
    Cn = value;
  },
  get wn() {
    return wn;
  },
  set wn(value) {
    wn = value;
  },
  get Tn() {
    return Tn;
  },
  set Tn(value) {
    Tn = value;
  },
  get En() {
    return En;
  },
  set En(value) {
    En = value;
  },
  get Dn() {
    return Dn;
  },
  set Dn(value) {
    Dn = value;
  },
  get On() {
    return On;
  },
  set On(value) {
    On = value;
  },
  get kn() {
    return kn;
  },
  set kn(value) {
    kn = value;
  },
  get An() {
    return An;
  },
  set An(value) {
    An = value;
  },
  get jn() {
    return jn;
  },
  set jn(value) {
    jn = value;
  },
  get Mn() {
    return Mn;
  },
  set Mn(value) {
    Mn = value;
  },
  get Nn() {
    return Nn;
  },
  set Nn(value) {
    Nn = value;
  },
  get Pn() {
    return Pn;
  },
  set Pn(value) {
    Pn = value;
  },
  get Fn() {
    return Fn;
  },
  set Fn(value) {
    Fn = value;
  },
  get In() {
    return In;
  },
  set In(value) {
    In = value;
  },
  get Ln() {
    return Ln;
  },
  set Ln(value) {
    Ln = value;
  },
  get Rn() {
    return Rn;
  },
  set Rn(value) {
    Rn = value;
  },
  get zn() {
    return zn;
  },
  set zn(value) {
    zn = value;
  },
  get Bn() {
    return Bn;
  },
  set Bn(value) {
    Bn = value;
  },
  get Vn() {
    return Vn;
  },
  set Vn(value) {
    Vn = value;
  },
  get Hn() {
    return Hn;
  },
  set Hn(value) {
    Hn = value;
  },
  get Un() {
    return Un;
  },
  set Un(value) {
    Un = value;
  },
  get Wn() {
    return Wn;
  },
  set Wn(value) {
    Wn = value;
  },
  get Gn() {
    return Gn;
  },
  set Gn(value) {
    Gn = value;
  },
  get Kn() {
    return Kn;
  },
  set Kn(value) {
    Kn = value;
  },
  get qn() {
    return qn;
  },
  set qn(value) {
    qn = value;
  },
  get Jn() {
    return Jn;
  },
  set Jn(value) {
    Jn = value;
  },
  get Yn() {
    return Yn;
  },
  set Yn(value) {
    Yn = value;
  },
  get Xn() {
    return Xn;
  },
  set Xn(value) {
    Xn = value;
  },
  get Zn() {
    return Zn;
  },
  set Zn(value) {
    Zn = value;
  },
  get Qn() {
    return Qn;
  },
  set Qn(value) {
    Qn = value;
  },
  get $n() {
    return $n;
  },
  set $n(value) {
    $n = value;
  },
  get er() {
    return er;
  },
  set er(value) {
    er = value;
  },
  get tr() {
    return tr;
  },
  set tr(value) {
    tr = value;
  },
  get nr() {
    return nr;
  },
  set nr(value) {
    nr = value;
  },
  get rr() {
    return rr;
  },
  set rr(value) {
    rr = value;
  },
  get ir() {
    return ir;
  },
  set ir(value) {
    ir = value;
  },
  get ar() {
    return ar;
  },
  set ar(value) {
    ar = value;
  },
  get or() {
    return or;
  },
  set or(value) {
    or = value;
  },
  get sr() {
    return sr;
  },
  set sr(value) {
    sr = value;
  },
  get cr() {
    return cr;
  },
  set cr(value) {
    cr = value;
  },
  get lr() {
    return lr;
  },
  set lr(value) {
    lr = value;
  },
  get ur() {
    return ur;
  },
  set ur(value) {
    ur = value;
  },
  get dr() {
    return dr;
  },
  set dr(value) {
    dr = value;
  },
  get fr() {
    return fr;
  },
  set fr(value) {
    fr = value;
  },
  get pr() {
    return pr;
  },
  set pr(value) {
    pr = value;
  },
  get mr() {
    return mr;
  },
  set mr(value) {
    mr = value;
  },
  get hr() {
    return hr;
  },
  set hr(value) {
    hr = value;
  },
  get gr() {
    return gr;
  },
  set gr(value) {
    gr = value;
  },
  get _r() {
    return _r;
  },
  set _r(value) {
    _r = value;
  },
  get vr() {
    return vr;
  },
  set vr(value) {
    vr = value;
  },
  get yr() {
    return yr;
  },
  set yr(value) {
    yr = value;
  },
  get br() {
    return br;
  },
  set br(value) {
    br = value;
  },
  get xr() {
    return xr;
  },
  set xr(value) {
    xr = value;
  },
  get Sr() {
    return Sr;
  },
  set Sr(value) {
    Sr = value;
  },
  get Cr() {
    return Cr;
  },
  set Cr(value) {
    Cr = value;
  },
  get wr() {
    return wr;
  },
  set wr(value) {
    wr = value;
  },
  get Tr() {
    return Tr;
  },
  set Tr(value) {
    Tr = value;
  },
  get Er() {
    return Er;
  },
  set Er(value) {
    Er = value;
  },
  get Dr() {
    return Dr;
  },
  set Dr(value) {
    Dr = value;
  },
  get Or() {
    return Or;
  },
  set Or(value) {
    Or = value;
  },
  get D() {
    return D;
  },
  set D(value) {
    D = value;
  },
  get kr() {
    return kr;
  },
  set kr(value) {
    kr = value;
  },
  get Ar() {
    return Ar;
  },
  set Ar(value) {
    Ar = value;
  },
  get jr() {
    return jr;
  },
  set jr(value) {
    jr = value;
  },
  get Mr() {
    return Mr;
  },
  set Mr(value) {
    Mr = value;
  },
  get Nr() {
    return Nr;
  },
  set Nr(value) {
    Nr = value;
  },
  get Pr() {
    return Pr;
  },
  set Pr(value) {
    Pr = value;
  },
  get Fr() {
    return Fr;
  },
  set Fr(value) {
    Fr = value;
  },
  get Ir() {
    return Ir;
  },
  set Ir(value) {
    Ir = value;
  },
  get Lr() {
    return Lr;
  },
  set Lr(value) {
    Lr = value;
  },
  get Rr() {
    return Rr;
  },
  set Rr(value) {
    Rr = value;
  },
  get zr() {
    return zr;
  },
  set zr(value) {
    zr = value;
  },
  get Br() {
    return Br;
  },
  set Br(value) {
    Br = value;
  },
  get Vr() {
    return Vr;
  },
  set Vr(value) {
    Vr = value;
  },
  get Hr() {
    return Hr;
  },
  set Hr(value) {
    Hr = value;
  },
  get Ur() {
    return Ur;
  },
  set Ur(value) {
    Ur = value;
  },
  get Wr() {
    return Wr;
  },
  set Wr(value) {
    Wr = value;
  },
  get Gr() {
    return Gr;
  },
  set Gr(value) {
    Gr = value;
  },
  get Kr() {
    return Kr;
  },
  set Kr(value) {
    Kr = value;
  },
  get qr() {
    return qr;
  },
  set qr(value) {
    qr = value;
  },
  get Jr() {
    return Jr;
  },
  set Jr(value) {
    Jr = value;
  },
  get Yr() {
    return Yr;
  },
  set Yr(value) {
    Yr = value;
  },
  get Xr() {
    return Xr;
  },
  set Xr(value) {
    Xr = value;
  },
  get Zr() {
    return Zr;
  },
  set Zr(value) {
    Zr = value;
  },
  get Qr() {
    return Qr;
  },
  set Qr(value) {
    Qr = value;
  },
  get $r() {
    return $r;
  },
  set $r(value) {
    $r = value;
  },
  get ei() {
    return ei;
  },
  set ei(value) {
    ei = value;
  },
  get ti() {
    return ti;
  },
  set ti(value) {
    ti = value;
  },
  get ni() {
    return ni;
  },
  set ni(value) {
    ni = value;
  },
  get ri() {
    return ri;
  },
  set ri(value) {
    ri = value;
  },
  get ii() {
    return ii;
  },
  set ii(value) {
    ii = value;
  },
  get ai() {
    return ai;
  },
  set ai(value) {
    ai = value;
  },
  get oi() {
    return oi;
  },
  set oi(value) {
    oi = value;
  },
  get si() {
    return si;
  },
  set si(value) {
    si = value;
  },
  get ci() {
    return ci;
  },
  set ci(value) {
    ci = value;
  },
  get li() {
    return li;
  },
  set li(value) {
    li = value;
  },
  get ui() {
    return ui;
  },
  set ui(value) {
    ui = value;
  },
  get di() {
    return di;
  },
  set di(value) {
    di = value;
  },
  get fi() {
    return fi;
  },
  set fi(value) {
    fi = value;
  },
  get O() {
    return O;
  },
  set O(value) {
    O = value;
  },
  get pi() {
    return pi;
  },
  set pi(value) {
    pi = value;
  },
  get mi() {
    return mi;
  },
  set mi(value) {
    mi = value;
  },
  get hi() {
    return hi;
  },
  set hi(value) {
    hi = value;
  },
  get gi() {
    return gi;
  },
  set gi(value) {
    gi = value;
  },
  get _i() {
    return _i;
  },
  set _i(value) {
    _i = value;
  },
  get vi() {
    return vi;
  },
  set vi(value) {
    vi = value;
  },
  get yi() {
    return yi;
  },
  set yi(value) {
    yi = value;
  },
  get bi() {
    return bi;
  },
  set bi(value) {
    bi = value;
  },
  get xi() {
    return xi;
  },
  set xi(value) {
    xi = value;
  },
  get Si() {
    return Si;
  },
  set Si(value) {
    Si = value;
  },
  get Ci() {
    return Ci;
  },
  set Ci(value) {
    Ci = value;
  },
  get wi() {
    return wi;
  },
  set wi(value) {
    wi = value;
  },
  get Ti() {
    return Ti;
  },
  set Ti(value) {
    Ti = value;
  },
  get Ei() {
    return Ei;
  },
  set Ei(value) {
    Ei = value;
  },
  get Di() {
    return Di;
  },
  set Di(value) {
    Di = value;
  },
  get Oi() {
    return Oi;
  },
  set Oi(value) {
    Oi = value;
  },
  get ki() {
    return ki;
  },
  set ki(value) {
    ki = value;
  },
  get Ai() {
    return Ai;
  },
  set Ai(value) {
    Ai = value;
  },
  get ji() {
    return ji;
  },
  set ji(value) {
    ji = value;
  },
  get Mi() {
    return Mi;
  },
  set Mi(value) {
    Mi = value;
  },
  get Ni() {
    return Ni;
  },
  set Ni(value) {
    Ni = value;
  },
  get Pi() {
    return Pi;
  },
  set Pi(value) {
    Pi = value;
  },
  get Fi() {
    return Fi;
  },
  set Fi(value) {
    Fi = value;
  },
  get Ii() {
    return Ii;
  },
  set Ii(value) {
    Ii = value;
  },
  get Li() {
    return Li;
  },
  set Li(value) {
    Li = value;
  },
  get Ri() {
    return Ri;
  },
  set Ri(value) {
    Ri = value;
  },
  get zi() {
    return zi;
  },
  set zi(value) {
    zi = value;
  },
  get Bi() {
    return Bi;
  },
  set Bi(value) {
    Bi = value;
  },
  get Vi() {
    return Vi;
  },
  set Vi(value) {
    Vi = value;
  },
  get Hi() {
    return Hi;
  },
  set Hi(value) {
    Hi = value;
  },
  get Ui() {
    return Ui;
  },
  set Ui(value) {
    Ui = value;
  },
  get Wi() {
    return Wi;
  },
  set Wi(value) {
    Wi = value;
  },
  get Gi() {
    return Gi;
  },
  set Gi(value) {
    Gi = value;
  },
  get Ki() {
    return Ki;
  },
  set Ki(value) {
    Ki = value;
  },
  get qi() {
    return qi;
  },
  set qi(value) {
    qi = value;
  },
  get Ji() {
    return Ji;
  },
  set Ji(value) {
    Ji = value;
  },
  get Yi() {
    return Yi;
  },
  set Yi(value) {
    Yi = value;
  },
  get Xi() {
    return Xi;
  },
  set Xi(value) {
    Xi = value;
  },
  get Zi() {
    return Zi;
  },
  set Zi(value) {
    Zi = value;
  },
  get Qi() {
    return Qi;
  },
  set Qi(value) {
    Qi = value;
  },
  get $i() {
    return $i;
  },
  set $i(value) {
    $i = value;
  },
  get ea() {
    return ea;
  },
  set ea(value) {
    ea = value;
  },
  get ta() {
    return ta;
  },
  set ta(value) {
    ta = value;
  },
  get na() {
    return na;
  },
  set na(value) {
    na = value;
  },
  get ra() {
    return ra;
  },
  set ra(value) {
    ra = value;
  },
  get ia() {
    return ia;
  },
  set ia(value) {
    ia = value;
  },
  get aa() {
    return aa;
  },
  set aa(value) {
    aa = value;
  },
  get oa() {
    return oa;
  },
  set oa(value) {
    oa = value;
  },
  get sa() {
    return sa;
  },
  set sa(value) {
    sa = value;
  },
  get ca() {
    return ca;
  },
  set ca(value) {
    ca = value;
  },
  get la() {
    return la;
  },
  set la(value) {
    la = value;
  },
  get ua() {
    return ua;
  },
  set ua(value) {
    ua = value;
  },
  get da() {
    return da;
  },
  set da(value) {
    da = value;
  },
  get fa() {
    return fa;
  },
  set fa(value) {
    fa = value;
  },
  get pa() {
    return pa;
  },
  set pa(value) {
    pa = value;
  },
  get ma() {
    return ma;
  },
  set ma(value) {
    ma = value;
  },
  get ha() {
    return ha;
  },
  set ha(value) {
    ha = value;
  },
  get ga() {
    return ga;
  },
  set ga(value) {
    ga = value;
  },
  get _a() {
    return _a;
  },
  set _a(value) {
    _a = value;
  },
  get va() {
    return va;
  },
  set va(value) {
    va = value;
  },
  get ya() {
    return ya;
  },
  set ya(value) {
    ya = value;
  },
  get ba() {
    return ba;
  },
  set ba(value) {
    ba = value;
  },
  get xa() {
    return xa;
  },
  set xa(value) {
    xa = value;
  },
  get Sa() {
    return Sa;
  },
  set Sa(value) {
    Sa = value;
  },
  get Ca() {
    return Ca;
  },
  set Ca(value) {
    Ca = value;
  },
  get wa() {
    return wa;
  },
  set wa(value) {
    wa = value;
  },
  get Ta() {
    return Ta;
  },
  set Ta(value) {
    Ta = value;
  },
  get Ea() {
    return Ea;
  },
  set Ea(value) {
    Ea = value;
  },
  get Da() {
    return Da;
  },
  set Da(value) {
    Da = value;
  },
  get Oa() {
    return Oa;
  },
  set Oa(value) {
    Oa = value;
  },
  get ka() {
    return ka;
  },
  set ka(value) {
    ka = value;
  },
  get Aa() {
    return Aa;
  },
  set Aa(value) {
    Aa = value;
  },
  get ja() {
    return ja;
  },
  set ja(value) {
    ja = value;
  },
  get Ma() {
    return Ma;
  },
  set Ma(value) {
    Ma = value;
  },
  get Na() {
    return Na;
  },
  set Na(value) {
    Na = value;
  },
  get Pa() {
    return Pa;
  },
  set Pa(value) {
    Pa = value;
  },
  get Fa() {
    return Fa;
  },
  set Fa(value) {
    Fa = value;
  },
  get Ia() {
    return Ia;
  },
  set Ia(value) {
    Ia = value;
  },
  get La() {
    return La;
  },
  set La(value) {
    La = value;
  },
  get Ra() {
    return Ra;
  },
  set Ra(value) {
    Ra = value;
  },
  get za() {
    return za;
  },
  set za(value) {
    za = value;
  },
  get Ba() {
    return Ba;
  },
  set Ba(value) {
    Ba = value;
  },
  get Va() {
    return Va;
  },
  set Va(value) {
    Va = value;
  },
  get Ha() {
    return Ha;
  },
  set Ha(value) {
    Ha = value;
  },
  get Ua() {
    return Ua;
  },
  set Ua(value) {
    Ua = value;
  },
  get Wa() {
    return Wa;
  },
  set Wa(value) {
    Wa = value;
  },
  get Ga() {
    return Ga;
  },
  set Ga(value) {
    Ga = value;
  },
  get Ka() {
    return Ka;
  },
  set Ka(value) {
    Ka = value;
  },
  get qa() {
    return qa;
  },
  set qa(value) {
    qa = value;
  },
  get Ja() {
    return Ja;
  },
  set Ja(value) {
    Ja = value;
  },
  get Ya() {
    return Ya;
  },
  set Ya(value) {
    Ya = value;
  },
  get Xa() {
    return Xa;
  },
  set Xa(value) {
    Xa = value;
  },
  get Za() {
    return Za;
  },
  set Za(value) {
    Za = value;
  },
  get Qa() {
    return Qa;
  },
  set Qa(value) {
    Qa = value;
  },
  get $a() {
    return $a;
  },
  set $a(value) {
    $a = value;
  },
  get eo() {
    return eo;
  },
  set eo(value) {
    eo = value;
  },
  get to() {
    return to;
  },
  set to(value) {
    to = value;
  },
  get no() {
    return no;
  },
  set no(value) {
    no = value;
  },
  get ro() {
    return ro;
  },
  set ro(value) {
    ro = value;
  },
  get io() {
    return io;
  },
  set io(value) {
    io = value;
  },
  get ao() {
    return ao;
  },
  set ao(value) {
    ao = value;
  },
  get oo() {
    return oo;
  },
  set oo(value) {
    oo = value;
  },
  get so() {
    return so;
  },
  set so(value) {
    so = value;
  },
  get co() {
    return co;
  },
  set co(value) {
    co = value;
  },
  get lo() {
    return lo;
  },
  set lo(value) {
    lo = value;
  },
  get uo() {
    return uo;
  },
  set uo(value) {
    uo = value;
  },
  get fo() {
    return fo;
  },
  set fo(value) {
    fo = value;
  },
  get po() {
    return po;
  },
  set po(value) {
    po = value;
  },
  get mo() {
    return mo;
  },
  set mo(value) {
    mo = value;
  },
  get ho() {
    return ho;
  },
  set ho(value) {
    ho = value;
  },
  get go() {
    return go;
  },
  set go(value) {
    go = value;
  },
  get _o() {
    return _o;
  },
  set _o(value) {
    _o = value;
  },
  get vo() {
    return vo;
  },
  set vo(value) {
    vo = value;
  },
  get yo() {
    return yo;
  },
  set yo(value) {
    yo = value;
  },
  get bo() {
    return bo;
  },
  set bo(value) {
    bo = value;
  },
  get xo() {
    return xo;
  },
  set xo(value) {
    xo = value;
  },
  get So() {
    return So;
  },
  set So(value) {
    So = value;
  },
  get Co() {
    return Co;
  },
  set Co(value) {
    Co = value;
  },
  get wo() {
    return wo;
  },
  set wo(value) {
    wo = value;
  },
  get To() {
    return To;
  },
  set To(value) {
    To = value;
  },
  get Eo() {
    return Eo;
  },
  set Eo(value) {
    Eo = value;
  },
  get Do() {
    return Do;
  },
  set Do(value) {
    Do = value;
  },
  get Oo() {
    return Oo;
  },
  set Oo(value) {
    Oo = value;
  },
  get ko() {
    return ko;
  },
  set ko(value) {
    ko = value;
  },
  get Ao() {
    return Ao;
  },
  set Ao(value) {
    Ao = value;
  },
  get jo() {
    return jo;
  },
  set jo(value) {
    jo = value;
  },
  get Mo() {
    return Mo;
  },
  set Mo(value) {
    Mo = value;
  },
  get No() {
    return No;
  },
  set No(value) {
    No = value;
  },
  get Po() {
    return Po;
  },
  set Po(value) {
    Po = value;
  },
  get Fo() {
    return Fo;
  },
  set Fo(value) {
    Fo = value;
  },
  get Io() {
    return Io;
  },
  set Io(value) {
    Io = value;
  },
  get Lo() {
    return Lo;
  },
  set Lo(value) {
    Lo = value;
  },
  get Ro() {
    return Ro;
  },
  set Ro(value) {
    Ro = value;
  },
  get zo() {
    return zo;
  },
  set zo(value) {
    zo = value;
  },
  get Bo() {
    return Bo;
  },
  set Bo(value) {
    Bo = value;
  },
  get Vo() {
    return Vo;
  },
  set Vo(value) {
    Vo = value;
  },
  get Ho() {
    return Ho;
  },
  set Ho(value) {
    Ho = value;
  },
  get Uo() {
    return Uo;
  },
  set Uo(value) {
    Uo = value;
  },
  get Wo() {
    return Wo;
  },
  set Wo(value) {
    Wo = value;
  },
  get Go() {
    return Go;
  },
  set Go(value) {
    Go = value;
  },
  get Ko() {
    return Ko;
  },
  set Ko(value) {
    Ko = value;
  },
  get qo() {
    return qo;
  },
  set qo(value) {
    qo = value;
  },
  get Jo() {
    return Jo;
  },
  set Jo(value) {
    Jo = value;
  },
  get Yo() {
    return Yo;
  },
  set Yo(value) {
    Yo = value;
  },
  get Xo() {
    return Xo;
  },
  set Xo(value) {
    Xo = value;
  },
  get Zo() {
    return Zo;
  },
  set Zo(value) {
    Zo = value;
  },
  get Qo() {
    return Qo;
  },
  set Qo(value) {
    Qo = value;
  },
  get $o() {
    return $o;
  },
  set $o(value) {
    $o = value;
  },
  get es() {
    return es;
  },
  set es(value) {
    es = value;
  },
  get ts() {
    return ts;
  },
  set ts(value) {
    ts = value;
  },
  get ns() {
    return ns;
  },
  set ns(value) {
    ns = value;
  },
  get rs() {
    return rs;
  },
  set rs(value) {
    rs = value;
  },
  get is() {
    return is;
  },
  set is(value) {
    is = value;
  },
  get as() {
    return as;
  },
  set as(value) {
    as = value;
  },
  get os() {
    return os;
  },
  set os(value) {
    os = value;
  },
  get ss() {
    return ss;
  },
  set ss(value) {
    ss = value;
  },
  get cs() {
    return cs;
  },
  set cs(value) {
    cs = value;
  },
  get ls() {
    return ls;
  },
  set ls(value) {
    ls = value;
  },
  get us() {
    return us;
  },
  set us(value) {
    us = value;
  },
  get ds() {
    return ds;
  },
  set ds(value) {
    ds = value;
  },
  get fs() {
    return fs;
  },
  set fs(value) {
    fs = value;
  },
  get ps() {
    return ps;
  },
  set ps(value) {
    ps = value;
  },
  get ms() {
    return ms;
  },
  set ms(value) {
    ms = value;
  },
  get hs() {
    return hs;
  },
  set hs(value) {
    hs = value;
  },
  get gs() {
    return gs;
  },
  set gs(value) {
    gs = value;
  },
  get _s() {
    return _s;
  },
  set _s(value) {
    _s = value;
  },
  get vs() {
    return vs;
  },
  set vs(value) {
    vs = value;
  },
  get ys() {
    return ys;
  },
  set ys(value) {
    ys = value;
  },
  get bs() {
    return bs;
  },
  set bs(value) {
    bs = value;
  },
  get xs() {
    return xs;
  },
  set xs(value) {
    xs = value;
  },
  get Ss() {
    return Ss;
  },
  set Ss(value) {
    Ss = value;
  },
  get Cs() {
    return Cs;
  },
  set Cs(value) {
    Cs = value;
  },
  get ws() {
    return ws;
  },
  set ws(value) {
    ws = value;
  },
  get Ts() {
    return Ts;
  },
  set Ts(value) {
    Ts = value;
  },
  get Es() {
    return Es;
  },
  set Es(value) {
    Es = value;
  },
  get Ds() {
    return Ds;
  },
  set Ds(value) {
    Ds = value;
  },
  get Os() {
    return Os;
  },
  set Os(value) {
    Os = value;
  },
  get ks() {
    return ks;
  },
  set ks(value) {
    ks = value;
  },
  get As() {
    return As;
  },
  set As(value) {
    As = value;
  },
  get js() {
    return js;
  },
  set js(value) {
    js = value;
  },
  get Ms() {
    return Ms;
  },
  set Ms(value) {
    Ms = value;
  },
  get Ns() {
    return Ns;
  },
  set Ns(value) {
    Ns = value;
  },
  get Ps() {
    return Ps;
  },
  set Ps(value) {
    Ps = value;
  },
  get Fs() {
    return Fs;
  },
  set Fs(value) {
    Fs = value;
  },
  get Is() {
    return Is;
  },
  set Is(value) {
    Is = value;
  },
  get Ls() {
    return Ls;
  },
  set Ls(value) {
    Ls = value;
  },
  get Rs() {
    return Rs;
  },
  set Rs(value) {
    Rs = value;
  },
  get zs() {
    return zs;
  },
  set zs(value) {
    zs = value;
  },
  get Bs() {
    return Bs;
  },
  set Bs(value) {
    Bs = value;
  },
  get Vs() {
    return Vs;
  },
  set Vs(value) {
    Vs = value;
  },
  get Hs() {
    return Hs;
  },
  set Hs(value) {
    Hs = value;
  },
  get Us() {
    return Us;
  },
  set Us(value) {
    Us = value;
  },
  get Ws() {
    return Ws;
  },
  set Ws(value) {
    Ws = value;
  },
  get Gs() {
    return Gs;
  },
  set Gs(value) {
    Gs = value;
  },
  get Ks() {
    return Ks;
  },
  set Ks(value) {
    Ks = value;
  },
  get qs() {
    return qs;
  },
  set qs(value) {
    qs = value;
  },
  get Js() {
    return Js;
  },
  set Js(value) {
    Js = value;
  },
  get Ys() {
    return Ys;
  },
  set Ys(value) {
    Ys = value;
  },
  get Xs() {
    return Xs;
  },
  set Xs(value) {
    Xs = value;
  },
  get Zs() {
    return Zs;
  },
  set Zs(value) {
    Zs = value;
  },
  get Qs() {
    return Qs;
  },
  set Qs(value) {
    Qs = value;
  },
  get $s() {
    return $s;
  },
  set $s(value) {
    $s = value;
  },
  get ec() {
    return ec;
  },
  set ec(value) {
    ec = value;
  },
  get tc() {
    return tc;
  },
  set tc(value) {
    tc = value;
  },
  get nc() {
    return nc;
  },
  set nc(value) {
    nc = value;
  },
  get rc() {
    return rc;
  },
  set rc(value) {
    rc = value;
  },
  get ic() {
    return ic;
  },
  set ic(value) {
    ic = value;
  },
  get ac() {
    return ac;
  },
  set ac(value) {
    ac = value;
  },
  get oc() {
    return oc;
  },
  set oc(value) {
    oc = value;
  },
  get sc() {
    return sc;
  },
  set sc(value) {
    sc = value;
  },
  get cc() {
    return cc;
  },
  set cc(value) {
    cc = value;
  },
  get lc() {
    return lc;
  },
  set lc(value) {
    lc = value;
  },
  get uc() {
    return uc;
  },
  set uc(value) {
    uc = value;
  },
  get dc() {
    return dc;
  },
  set dc(value) {
    dc = value;
  },
  get fc() {
    return fc;
  },
  set fc(value) {
    fc = value;
  },
  get pc() {
    return pc;
  },
  set pc(value) {
    pc = value;
  },
  get mc() {
    return mc;
  },
  set mc(value) {
    mc = value;
  },
  get hc() {
    return hc;
  },
  set hc(value) {
    hc = value;
  },
  get gc() {
    return gc;
  },
  set gc(value) {
    gc = value;
  },
  get _c() {
    return _c;
  },
  set _c(value) {
    _c = value;
  },
  get vc() {
    return vc;
  },
  set vc(value) {
    vc = value;
  },
  get yc() {
    return yc;
  },
  set yc(value) {
    yc = value;
  },
  get bc() {
    return bc;
  },
  set bc(value) {
    bc = value;
  },
  get xc() {
    return xc;
  },
  set xc(value) {
    xc = value;
  },
  get Sc() {
    return Sc;
  },
  set Sc(value) {
    Sc = value;
  },
  get Cc() {
    return Cc;
  },
  set Cc(value) {
    Cc = value;
  },
  get wc() {
    return wc;
  },
  set wc(value) {
    wc = value;
  },
  get Tc() {
    return Tc;
  },
  set Tc(value) {
    Tc = value;
  },
  get Ec() {
    return Ec;
  },
  set Ec(value) {
    Ec = value;
  },
  get Dc() {
    return Dc;
  },
  set Dc(value) {
    Dc = value;
  },
  get Oc() {
    return Oc;
  },
  set Oc(value) {
    Oc = value;
  },
  get kc() {
    return kc;
  },
  set kc(value) {
    kc = value;
  },
  get Ac() {
    return Ac;
  },
  set Ac(value) {
    Ac = value;
  },
  get jc() {
    return jc;
  },
  set jc(value) {
    jc = value;
  },
  get Mc() {
    return Mc;
  },
  set Mc(value) {
    Mc = value;
  },
  get gravity() {
    return gravity;
  },
  set gravity(value) {
    gravity = value;
  },
  get pushStartSpeedCutoff() {
    return pushStartSpeedCutoff;
  },
  set pushStartSpeedCutoff(value) {
    pushStartSpeedCutoff = value;
  },
  get kickTimingParameters() {
    return kickTimingParameters;
  },
  set kickTimingParameters(value) {
    kickTimingParameters = value;
  },
  get edgePumpParameters() {
    return edgePumpParameters;
  },
  set edgePumpParameters(value) {
    edgePumpParameters = value;
  },
  get worldBoundaryMargin() {
    return worldBoundaryMargin;
  },
  set worldBoundaryMargin(value) {
    worldBoundaryMargin = value;
  },
  get crashedSlideFriction() {
    return crashedSlideFriction;
  },
  set crashedSlideFriction(value) {
    crashedSlideFriction = value;
  },
  get zc() {
    return zc;
  },
  set zc(value) {
    zc = value;
  },
  get Bc() {
    return Bc;
  },
  set Bc(value) {
    Bc = value;
  },
  get Vc() {
    return Vc;
  },
  set Vc(value) {
    Vc = value;
  },
  get Hc() {
    return Hc;
  },
  set Hc(value) {
    Hc = value;
  },
  get Uc() {
    return Uc;
  },
  set Uc(value) {
    Uc = value;
  },
  get SnowboardPhysics() {
    return SnowboardPhysics;
  },
  set SnowboardPhysics(value) {
    SnowboardPhysics = value;
  },
  get Gc() {
    return Gc;
  },
  set Gc(value) {
    Gc = value;
  },
  get Kc() {
    return Kc;
  },
  set Kc(value) {
    Kc = value;
  },
  get qc() {
    return qc;
  },
  set qc(value) {
    qc = value;
  },
  get Jc() {
    return Jc;
  },
  set Jc(value) {
    Jc = value;
  },
  get Yc() {
    return Yc;
  },
  set Yc(value) {
    Yc = value;
  },
  get Xc() {
    return Xc;
  },
  set Xc(value) {
    Xc = value;
  },
  get Zc() {
    return Zc;
  },
  set Zc(value) {
    Zc = value;
  },
  get Qc() {
    return Qc;
  },
  set Qc(value) {
    Qc = value;
  },
  get $c() {
    return $c;
  },
  set $c(value) {
    $c = value;
  },
  get el() {
    return el;
  },
  set el(value) {
    el = value;
  },
  get tl() {
    return tl;
  },
  set tl(value) {
    tl = value;
  },
  get nl() {
    return nl;
  },
  set nl(value) {
    nl = value;
  },
  get rl() {
    return rl;
  },
  set rl(value) {
    rl = value;
  },
  get il() {
    return il;
  },
  set il(value) {
    il = value;
  },
  get al() {
    return al;
  },
  set al(value) {
    al = value;
  },
  get ol() {
    return ol;
  },
  set ol(value) {
    ol = value;
  },
  get sl() {
    return sl;
  },
  set sl(value) {
    sl = value;
  },
  get cl() {
    return cl;
  },
  set cl(value) {
    cl = value;
  },
  get ll() {
    return ll;
  },
  set ll(value) {
    ll = value;
  },
  get ul() {
    return ul;
  },
  set ul(value) {
    ul = value;
  },
  get GpsNavigator() {
    return GpsNavigator;
  },
  set GpsNavigator(value) {
    GpsNavigator = value;
  },
  get fl() {
    return fl;
  },
  set fl(value) {
    fl = value;
  },
  get pl() {
    return pl;
  },
  set pl(value) {
    pl = value;
  },
  get ml() {
    return ml;
  },
  set ml(value) {
    ml = value;
  },
  get hl() {
    return hl;
  },
  set hl(value) {
    hl = value;
  },
  get gl() {
    return gl;
  },
  set gl(value) {
    gl = value;
  },
  get _l() {
    return _l;
  },
  set _l(value) {
    _l = value;
  },
  get vl() {
    return vl;
  },
  set vl(value) {
    vl = value;
  },
  get yl() {
    return yl;
  },
  set yl(value) {
    yl = value;
  },
  get bl() {
    return bl;
  },
  set bl(value) {
    bl = value;
  },
  get xl() {
    return xl;
  },
  set xl(value) {
    xl = value;
  },
  get Sl() {
    return Sl;
  },
  set Sl(value) {
    Sl = value;
  },
  get Cl() {
    return Cl;
  },
  set Cl(value) {
    Cl = value;
  },
  get wl() {
    return wl;
  },
  set wl(value) {
    wl = value;
  },
  get BigMapController() {
    return BigMapController;
  },
  set BigMapController(value) {
    BigMapController = value;
  },
  get El() {
    return El;
  },
  set El(value) {
    El = value;
  },
  get Dl() {
    return Dl;
  },
  set Dl(value) {
    Dl = value;
  },
  get Ol() {
    return Ol;
  },
  set Ol(value) {
    Ol = value;
  },
  get kl() {
    return kl;
  },
  set kl(value) {
    kl = value;
  },
  get Al() {
    return Al;
  },
  set Al(value) {
    Al = value;
  },
  get jl() {
    return jl;
  },
  set jl(value) {
    jl = value;
  },
  get Ml() {
    return Ml;
  },
  set Ml(value) {
    Ml = value;
  },
  get Nl() {
    return Nl;
  },
  set Nl(value) {
    Nl = value;
  },
  get Pl() {
    return Pl;
  },
  set Pl(value) {
    Pl = value;
  },
  get Fl() {
    return Fl;
  },
  set Fl(value) {
    Fl = value;
  },
  get Il() {
    return Il;
  },
  set Il(value) {
    Il = value;
  },
  get Ll() {
    return Ll;
  },
  set Ll(value) {
    Ll = value;
  },
  get Rl() {
    return Rl;
  },
  set Rl(value) {
    Rl = value;
  },
  get zl() {
    return zl;
  },
  set zl(value) {
    zl = value;
  },
  get Bl() {
    return Bl;
  },
  set Bl(value) {
    Bl = value;
  },
  get Vl() {
    return Vl;
  },
  set Vl(value) {
    Vl = value;
  },
  get Hl() {
    return Hl;
  },
  set Hl(value) {
    Hl = value;
  },
  get Ul() {
    return Ul;
  },
  set Ul(value) {
    Ul = value;
  },
  get Wl() {
    return Wl;
  },
  set Wl(value) {
    Wl = value;
  },
  get Gl() {
    return Gl;
  },
  set Gl(value) {
    Gl = value;
  },
  get Kl() {
    return Kl;
  },
  set Kl(value) {
    Kl = value;
  },
  get ql() {
    return ql;
  },
  set ql(value) {
    ql = value;
  },
  get Jl() {
    return Jl;
  },
  set Jl(value) {
    Jl = value;
  },
  get Yl() {
    return Yl;
  },
  set Yl(value) {
    Yl = value;
  },
  get Xl() {
    return Xl;
  },
  set Xl(value) {
    Xl = value;
  },
  get Zl() {
    return Zl;
  },
  set Zl(value) {
    Zl = value;
  },
  get Ql() {
    return Ql;
  },
  set Ql(value) {
    Ql = value;
  },
  get $l() {
    return $l;
  },
  set $l(value) {
    $l = value;
  },
  get eu() {
    return eu;
  },
  set eu(value) {
    eu = value;
  },
  get tu() {
    return tu;
  },
  set tu(value) {
    tu = value;
  },
  get nu() {
    return nu;
  },
  set nu(value) {
    nu = value;
  },
  get ru() {
    return ru;
  },
  set ru(value) {
    ru = value;
  },
  get iu() {
    return iu;
  },
  set iu(value) {
    iu = value;
  },
  get au() {
    return au;
  },
  set au(value) {
    au = value;
  },
  get ou() {
    return ou;
  },
  set ou(value) {
    ou = value;
  },
  get su() {
    return su;
  },
  set su(value) {
    su = value;
  },
  get cu() {
    return cu;
  },
  set cu(value) {
    cu = value;
  },
  get lu() {
    return lu;
  },
  set lu(value) {
    lu = value;
  },
  get uu() {
    return uu;
  },
  set uu(value) {
    uu = value;
  },
  get du() {
    return du;
  },
  set du(value) {
    du = value;
  },
  get mouseLookSensitivity() {
    return mouseLookSensitivity;
  },
  set mouseLookSensitivity(value) {
    mouseLookSensitivity = value;
  },
  get touchLookSensitivity() {
    return touchLookSensitivity;
  },
  set touchLookSensitivity(value) {
    touchLookSensitivity = value;
  },
  get lookPitchLimits() {
    return lookPitchLimits;
  },
  set lookPitchLimits(value) {
    lookPitchLimits = value;
  },
  get MouseLookController() {
    return MouseLookController;
  },
  set MouseLookController(value) {
    MouseLookController = value;
  },
  get gu() {
    return gu;
  },
  set gu(value) {
    gu = value;
  },
  get _u() {
    return _u;
  },
  set _u(value) {
    _u = value;
  },
  get vu() {
    return vu;
  },
  set vu(value) {
    vu = value;
  },
  get yu() {
    return yu;
  },
  set yu(value) {
    yu = value;
  },
  get bu() {
    return bu;
  },
  set bu(value) {
    bu = value;
  },
  get xu() {
    return xu;
  },
  set xu(value) {
    xu = value;
  },
  get Su() {
    return Su;
  },
  set Su(value) {
    Su = value;
  },
  get Cu() {
    return Cu;
  },
  set Cu(value) {
    Cu = value;
  },
  get renderer() {
    return renderer;
  },
  set renderer(value) {
    renderer = value;
  },
  get postProcessor() {
    return postProcessor;
  },
  set postProcessor(value) {
    postProcessor = value;
  },
  get scene() {
    return scene;
  },
  set scene(value) {
    scene = value;
  },
  get camera() {
    return camera;
  },
  set camera(value) {
    camera = value;
  },
  get Eu() {
    return Eu;
  },
  set Eu(value) {
    Eu = value;
  },
  get Du() {
    return Du;
  },
  set Du(value) {
    Du = value;
  },
  get graphicsController() {
    return graphicsController;
  },
  set graphicsController(value) {
    graphicsController = value;
  },
  get ku() {
    return ku;
  },
  set ku(value) {
    ku = value;
  },
  get worldAssets() {
    return worldAssets;
  },
  set worldAssets(value) {
    worldAssets = value;
  },
  get worldMetadata() {
    return worldMetadata;
  },
  set worldMetadata(value) {
    worldMetadata = value;
  },
  get pisteField() {
    return pisteField;
  },
  set pisteField(value) {
    pisteField = value;
  },
  get lakes() {
    return lakes;
  },
  set lakes(value) {
    lakes = value;
  },
  get groundHeightfield() {
    return groundHeightfield;
  },
  set groundHeightfield(value) {
    groundHeightfield = value;
  },
  get Pu() {
    return Pu;
  },
  set Pu(value) {
    Pu = value;
  },
  get worldScene() {
    return worldScene;
  },
  set worldScene(value) {
    worldScene = value;
  },
  get Iu() {
    return Iu;
  },
  set Iu(value) {
    Iu = value;
  },
  get Lu() {
    return Lu;
  },
  set Lu(value) {
    Lu = value;
  },
  get forest() {
    return forest;
  },
  set forest(value) {
    forest = value;
  },
  get cableway() {
    return cableway;
  },
  set cableway(value) {
    cableway = value;
  },
  get Bu() {
    return Bu;
  },
  set Bu(value) {
    Bu = value;
  },
  get Vu() {
    return Vu;
  },
  set Vu(value) {
    Vu = value;
  },
  get Hu() {
    return Hu;
  },
  set Hu(value) {
    Hu = value;
  },
  get Uu() {
    return Uu;
  },
  set Uu(value) {
    Uu = value;
  },
  get Wu() {
    return Wu;
  },
  set Wu(value) {
    Wu = value;
  },
  get Gu() {
    return Gu;
  },
  set Gu(value) {
    Gu = value;
  },
  get Ku() {
    return Ku;
  },
  set Ku(value) {
    Ku = value;
  },
  get qu() {
    return qu;
  },
  set qu(value) {
    qu = value;
  },
  get Ju() {
    return Ju;
  },
  set Ju(value) {
    Ju = value;
  },
  get Yu() {
    return Yu;
  },
  set Yu(value) {
    Yu = value;
  },
  get Xu() {
    return Xu;
  },
  set Xu(value) {
    Xu = value;
  },
  get weather() {
    return weather;
  },
  set weather(value) {
    weather = value;
  },
  get Zu() {
    return Zu;
  },
  set Zu(value) {
    Zu = value;
  },
  get Qu() {
    return Qu;
  },
  set Qu(value) {
    Qu = value;
  },
  get $u() {
    return $u;
  },
  set $u(value) {
    $u = value;
  },
  get ed() {
    return ed;
  },
  set ed(value) {
    ed = value;
  },
  get td() {
    return td;
  },
  set td(value) {
    td = value;
  },
  get nd() {
    return nd;
  },
  set nd(value) {
    nd = value;
  },
  get rd() {
    return rd;
  },
  set rd(value) {
    rd = value;
  },
  get rider() {
    return rider;
  },
  set rider(value) {
    rider = value;
  },
  get physics() {
    return physics;
  },
  set physics(value) {
    physics = value;
  },
  get F() {
    return F;
  },
  set F(value) {
    F = value;
  },
  get id() {
    return id;
  },
  set id(value) {
    id = value;
  },
  get ad() {
    return ad;
  },
  set ad(value) {
    ad = value;
  },
  get od() {
    return od;
  },
  set od(value) {
    od = value;
  },
  get sd() {
    return sd;
  },
  set sd(value) {
    sd = value;
  },
  get cd() {
    return cd;
  },
  set cd(value) {
    cd = value;
  },
  get ld() {
    return ld;
  },
  set ld(value) {
    ld = value;
  },
  get ud() {
    return ud;
  },
  set ud(value) {
    ud = value;
  },
  get I() {
    return I;
  },
  set I(value) {
    I = value;
  },
  get L() {
    return L;
  },
  set L(value) {
    L = value;
  },
  get dd() {
    return dd;
  },
  set dd(value) {
    dd = value;
  },
  get specialActionDefinitions() {
    return specialActionDefinitions;
  },
  set specialActionDefinitions(value) {
    specialActionDefinitions = value;
  },
  get pd() {
    return pd;
  },
  set pd(value) {
    pd = value;
  },
  get R() {
    return R;
  },
  set R(value) {
    R = value;
  },
  get md() {
    return md;
  },
  set md(value) {
    md = value;
  },
  get hd() {
    return hd;
  },
  set hd(value) {
    hd = value;
  },
  get gd() {
    return gd;
  },
  set gd(value) {
    gd = value;
  },
  get z() {
    return z;
  },
  set z(value) {
    z = value;
  },
  get playSpecialAction() {
    return playSpecialAction;
  },
  set playSpecialAction(value) {
    playSpecialAction = value;
  },
  get stopSpecialAction() {
    return stopSpecialAction;
  },
  set stopSpecialAction(value) {
    stopSpecialAction = value;
  },
  get yd() {
    return yd;
  },
  set yd(value) {
    yd = value;
  },
  get bd() {
    return bd;
  },
  set bd(value) {
    bd = value;
  },
  get xd() {
    return xd;
  },
  set xd(value) {
    xd = value;
  },
  get Sd() {
    return Sd;
  },
  set Sd(value) {
    Sd = value;
  },
  get Cd() {
    return Cd;
  },
  set Cd(value) {
    Cd = value;
  },
  get wd() {
    return wd;
  },
  set wd(value) {
    wd = value;
  },
  get Td() {
    return Td;
  },
  set Td(value) {
    Td = value;
  },
  get B() {
    return B;
  },
  set B(value) {
    B = value;
  },
  get Ed() {
    return Ed;
  },
  set Ed(value) {
    Ed = value;
  },
  get V() {
    return V;
  },
  set V(value) {
    V = value;
  },
  get Dd() {
    return Dd;
  },
  set Dd(value) {
    Dd = value;
  },
  get Od() {
    return Od;
  },
  set Od(value) {
    Od = value;
  },
  get handleActionKey() {
    return handleActionKey;
  },
  set handleActionKey(value) {
    handleActionKey = value;
  },
  get Ad() {
    return Ad;
  },
  set Ad(value) {
    Ad = value;
  },
  get jd() {
    return jd;
  },
  set jd(value) {
    jd = value;
  },
  get Md() {
    return Md;
  },
  set Md(value) {
    Md = value;
  },
  get Nd() {
    return Nd;
  },
  set Nd(value) {
    Nd = value;
  },
  get playerInput() {
    return playerInput;
  },
  set playerInput(value) {
    playerInput = value;
  },
  get Pd() {
    return Pd;
  },
  set Pd(value) {
    Pd = value;
  },
  get readInputState() {
    return readInputState;
  },
  set readInputState(value) {
    readInputState = value;
  },
  get Id() {
    return Id;
  },
  set Id(value) {
    Id = value;
  },
  get toggleLocomotion() {
    return toggleLocomotion;
  },
  set toggleLocomotion(value) {
    toggleLocomotion = value;
  },
  get Rd() {
    return Rd;
  },
  set Rd(value) {
    Rd = value;
  },
  get zd() {
    return zd;
  },
  set zd(value) {
    zd = value;
  },
  get Bd() {
    return Bd;
  },
  set Bd(value) {
    Bd = value;
  },
  get Vd() {
    return Vd;
  },
  set Vd(value) {
    Vd = value;
  },
  get Hd() {
    return Hd;
  },
  set Hd(value) {
    Hd = value;
  },
  get Ud() {
    return Ud;
  },
  set Ud(value) {
    Ud = value;
  },
  get Wd() {
    return Wd;
  },
  set Wd(value) {
    Wd = value;
  },
  get selectRider() {
    return selectRider;
  },
  set selectRider(value) {
    selectRider = value;
  },
  get Kd() {
    return Kd;
  },
  set Kd(value) {
    Kd = value;
  },
  get qd() {
    return qd;
  },
  set qd(value) {
    qd = value;
  },
  get Jd() {
    return Jd;
  },
  set Jd(value) {
    Jd = value;
  },
  get Yd() {
    return Yd;
  },
  set Yd(value) {
    Yd = value;
  },
  get Xd() {
    return Xd;
  },
  set Xd(value) {
    Xd = value;
  },
  get Zd() {
    return Zd;
  },
  set Zd(value) {
    Zd = value;
  },
  get Qd() {
    return Qd;
  },
  set Qd(value) {
    Qd = value;
  },
  get $d() {
    return $d;
  },
  set $d(value) {
    $d = value;
  },
  get ef() {
    return ef;
  },
  set ef(value) {
    ef = value;
  },
  get tf() {
    return tf;
  },
  set tf(value) {
    tf = value;
  },
  get nf() {
    return nf;
  },
  set nf(value) {
    nf = value;
  },
  get rf() {
    return rf;
  },
  set rf(value) {
    rf = value;
  },
  get U() {
    return U;
  },
  set U(value) {
    U = value;
  },
  get af() {
    return af;
  },
  set af(value) {
    af = value;
  },
  get of() {
    return of;
  },
  set of(value) {
    of = value;
  },
  get sf() {
    return sf;
  },
  set sf(value) {
    sf = value;
  },
  get cf() {
    return cf;
  },
  set cf(value) {
    cf = value;
  },
  get lf() {
    return lf;
  },
  set lf(value) {
    lf = value;
  },
  get uf() {
    return uf;
  },
  set uf(value) {
    uf = value;
  },
  get df() {
    return df;
  },
  set df(value) {
    df = value;
  },
  get ff() {
    return ff;
  },
  set ff(value) {
    ff = value;
  },
  get W() {
    return W;
  },
  set W(value) {
    W = value;
  },
  get pf() {
    return pf;
  },
  set pf(value) {
    pf = value;
  },
  get mf() {
    return mf;
  },
  set mf(value) {
    mf = value;
  },
  get hf() {
    return hf;
  },
  set hf(value) {
    hf = value;
  },
  get G() {
    return G;
  },
  set G(value) {
    G = value;
  },
  get startRun() {
    return startRun;
  },
  set startRun(value) {
    startRun = value;
  },
  get _f() {
    return _f;
  },
  set _f(value) {
    _f = value;
  },
  get vf() {
    return vf;
  },
  set vf(value) {
    vf = value;
  },
  get yf() {
    return yf;
  },
  set yf(value) {
    yf = value;
  },
  get bf() {
    return bf;
  },
  set bf(value) {
    bf = value;
  },
  get xf() {
    return xf;
  },
  set xf(value) {
    xf = value;
  },
  get K() {
    return K;
  },
  set K(value) {
    K = value;
  },
  get q() {
    return q;
  },
  set q(value) {
    q = value;
  },
  get J() {
    return J;
  },
  set J(value) {
    J = value;
  },
  get Sf() {
    return Sf;
  },
  set Sf(value) {
    Sf = value;
  },
  get Cf() {
    return Cf;
  },
  set Cf(value) {
    Cf = value;
  },
  get wf() {
    return wf;
  },
  set wf(value) {
    wf = value;
  },
  get computeFollowCameraTargets() {
    return computeFollowCameraTargets;
  },
  set computeFollowCameraTargets(value) {
    computeFollowCameraTargets = value;
  },
  get Ef() {
    return Ef;
  },
  set Ef(value) {
    Ef = value;
  },
  get Df() {
    return Df;
  },
  set Df(value) {
    Df = value;
  },
  get Of() {
    return Of;
  },
  set Of(value) {
    Of = value;
  },
  get kf() {
    return kf;
  },
  set kf(value) {
    kf = value;
  },
  get resetFollowCamera() {
    return resetFollowCamera;
  },
  set resetFollowCamera(value) {
    resetFollowCamera = value;
  },
  get jf() {
    return jf;
  },
  set jf(value) {
    jf = value;
  },
  get Mf() {
    return Mf;
  },
  set Mf(value) {
    Mf = value;
  },
  get Nf() {
    return Nf;
  },
  set Nf(value) {
    Nf = value;
  },
  get Pf() {
    return Pf;
  },
  set Pf(value) {
    Pf = value;
  },
  get Ff() {
    return Ff;
  },
  set Ff(value) {
    Ff = value;
  },
  get If() {
    return If;
  },
  set If(value) {
    If = value;
  },
  get Lf() {
    return Lf;
  },
  set Lf(value) {
    Lf = value;
  },
  get Rf() {
    return Rf;
  },
  set Rf(value) {
    Rf = value;
  },
  get zf() {
    return zf;
  },
  set zf(value) {
    zf = value;
  },
  get Bf() {
    return Bf;
  },
  set Bf(value) {
    Bf = value;
  },
  get Vf() {
    return Vf;
  },
  set Vf(value) {
    Vf = value;
  },
  get Hf() {
    return Hf;
  },
  set Hf(value) {
    Hf = value;
  },
  get Uf() {
    return Uf;
  },
  set Uf(value) {
    Uf = value;
  },
  get Wf() {
    return Wf;
  },
  set Wf(value) {
    Wf = value;
  },
  get Gf() {
    return Gf;
  },
  set Gf(value) {
    Gf = value;
  },
  get Kf() {
    return Kf;
  },
  set Kf(value) {
    Kf = value;
  },
  get qf() {
    return qf;
  },
  set qf(value) {
    qf = value;
  },
  get Jf() {
    return Jf;
  },
  set Jf(value) {
    Jf = value;
  },
  get Yf() {
    return Yf;
  },
  set Yf(value) {
    Yf = value;
  },
  get Xf() {
    return Xf;
  },
  set Xf(value) {
    Xf = value;
  },
  get Zf() {
    return Zf;
  },
  set Zf(value) {
    Zf = value;
  },
  get Qf() {
    return Qf;
  },
  set Qf(value) {
    Qf = value;
  },
  get updateFollowCamera() {
    return updateFollowCamera;
  },
  set updateFollowCamera(value) {
    updateFollowCamera = value;
  },
  get ep() {
    return ep;
  },
  set ep(value) {
    ep = value;
  },
  get tp() {
    return tp;
  },
  set tp(value) {
    tp = value;
  },
  get np() {
    return np;
  },
  set np(value) {
    np = value;
  },
  get rp() {
    return rp;
  },
  set rp(value) {
    rp = value;
  },
  get ip() {
    return ip;
  },
  set ip(value) {
    ip = value;
  },
  get ap() {
    return ap;
  },
  set ap(value) {
    ap = value;
  },
  get op() {
    return op;
  },
  set op(value) {
    op = value;
  },
  get sp() {
    return sp;
  },
  set sp(value) {
    sp = value;
  },
  get cp() {
    return cp;
  },
  set cp(value) {
    cp = value;
  },
  get lp() {
    return lp;
  },
  set lp(value) {
    lp = value;
  },
  get up() {
    return up;
  },
  set up(value) {
    up = value;
  },
  get dp() {
    return dp;
  },
  set dp(value) {
    dp = value;
  },
  get fp() {
    return fp;
  },
  set fp(value) {
    fp = value;
  },
  get pp() {
    return pp;
  },
  set pp(value) {
    pp = value;
  },
  get mp() {
    return mp;
  },
  set mp(value) {
    mp = value;
  },
  get hp() {
    return hp;
  },
  set hp(value) {
    hp = value;
  },
  get gp() {
    return gp;
  },
  set gp(value) {
    gp = value;
  },
  get _p() {
    return _p;
  },
  set _p(value) {
    _p = value;
  },
  get vp() {
    return vp;
  },
  set vp(value) {
    vp = value;
  },
  get yp() {
    return yp;
  },
  set yp(value) {
    yp = value;
  },
  get bp() {
    return bp;
  },
  set bp(value) {
    bp = value;
  },
  get xp() {
    return xp;
  },
  set xp(value) {
    xp = value;
  },
  get Sp() {
    return Sp;
  },
  set Sp(value) {
    Sp = value;
  },
  get Cp() {
    return Cp;
  },
  set Cp(value) {
    Cp = value;
  },
  get wp() {
    return wp;
  },
  set wp(value) {
    wp = value;
  },
  get Tp() {
    return Tp;
  },
  set Tp(value) {
    Tp = value;
  },
  get Ep() {
    return Ep;
  },
  set Ep(value) {
    Ep = value;
  },
  get Dp() {
    return Dp;
  },
  set Dp(value) {
    Dp = value;
  },
  get Op() {
    return Op;
  },
  set Op(value) {
    Op = value;
  },
  get kp() {
    return kp;
  },
  set kp(value) {
    kp = value;
  },
  get Ap() {
    return Ap;
  },
  set Ap(value) {
    Ap = value;
  },
  get jp() {
    return jp;
  },
  set jp(value) {
    jp = value;
  },
  get Mp() {
    return Mp;
  },
  set Mp(value) {
    Mp = value;
  },
  get Np() {
    return Np;
  },
  set Np(value) {
    Np = value;
  },
  get Pp() {
    return Pp;
  },
  set Pp(value) {
    Pp = value;
  },
  get Y() {
    return Y;
  },
  set Y(value) {
    Y = value;
  },
  get Fp() {
    return Fp;
  },
  set Fp(value) {
    Fp = value;
  },
  get Ip() {
    return Ip;
  },
  set Ip(value) {
    Ip = value;
  },
  get Lp() {
    return Lp;
  },
  set Lp(value) {
    Lp = value;
  },
  get Rp() {
    return Rp;
  },
  set Rp(value) {
    Rp = value;
  },
  get zp() {
    return zp;
  },
  set zp(value) {
    zp = value;
  },
  get Bp() {
    return Bp;
  },
  set Bp(value) {
    Bp = value;
  },
  get Vp() {
    return Vp;
  },
  set Vp(value) {
    Vp = value;
  },
  get Hp() {
    return Hp;
  },
  set Hp(value) {
    Hp = value;
  },
  get Up() {
    return Up;
  },
  set Up(value) {
    Up = value;
  },
  get Wp() {
    return Wp;
  },
  set Wp(value) {
    Wp = value;
  },
  get Gp() {
    return Gp;
  },
  set Gp(value) {
    Gp = value;
  },
  get Kp() {
    return Kp;
  },
  set Kp(value) {
    Kp = value;
  },
  get qp() {
    return qp;
  },
  set qp(value) {
    qp = value;
  },
  get Jp() {
    return Jp;
  },
  set Jp(value) {
    Jp = value;
  },
  get Yp() {
    return Yp;
  },
  set Yp(value) {
    Yp = value;
  },
  get Xp() {
    return Xp;
  },
  set Xp(value) {
    Xp = value;
  },
  get Zp() {
    return Zp;
  },
  set Zp(value) {
    Zp = value;
  },
  get Qp() {
    return Qp;
  },
  set Qp(value) {
    Qp = value;
  },
  get $p() {
    return $p;
  },
  set $p(value) {
    $p = value;
  },
  get em() {
    return em;
  },
  set em(value) {
    em = value;
  },
  get tm() {
    return tm;
  },
  set tm(value) {
    tm = value;
  },
  get X() {
    return X;
  },
  set X(value) {
    X = value;
  },
  get nm() {
    return nm;
  },
  set nm(value) {
    nm = value;
  },
  get rm() {
    return rm;
  },
  set rm(value) {
    rm = value;
  },
  get im() {
    return im;
  },
  set im(value) {
    im = value;
  },
  get am() {
    return am;
  },
  set am(value) {
    am = value;
  },
  get om() {
    return om;
  },
  set om(value) {
    om = value;
  },
  get sm() {
    return sm;
  },
  set sm(value) {
    sm = value;
  },
  get cm() {
    return cm;
  },
  set cm(value) {
    cm = value;
  },
  get lm() {
    return lm;
  },
  set lm(value) {
    lm = value;
  },
  get um() {
    return um;
  },
  set um(value) {
    um = value;
  },
  get dm() {
    return dm;
  },
  set dm(value) {
    dm = value;
  },
  get fm() {
    return fm;
  },
  set fm(value) {
    fm = value;
  },
  get pm() {
    return pm;
  },
  set pm(value) {
    pm = value;
  },
  get mm() {
    return mm;
  },
  set mm(value) {
    mm = value;
  },
  get hm() {
    return hm;
  },
  set hm(value) {
    hm = value;
  },
  get Z() {
    return Z;
  },
  set Z(value) {
    Z = value;
  },
  get gm() {
    return gm;
  },
  set gm(value) {
    gm = value;
  },
  get _m() {
    return _m;
  },
  set _m(value) {
    _m = value;
  },
  get vm() {
    return vm;
  },
  set vm(value) {
    vm = value;
  },
  get ym() {
    return ym;
  },
  set ym(value) {
    ym = value;
  },
  get bm() {
    return bm;
  },
  set bm(value) {
    bm = value;
  },
  get xm() {
    return xm;
  },
  set xm(value) {
    xm = value;
  },
  get Sm() {
    return Sm;
  },
  set Sm(value) {
    Sm = value;
  },
  get Cm() {
    return Cm;
  },
  set Cm(value) {
    Cm = value;
  },
  get wm() {
    return wm;
  },
  set wm(value) {
    wm = value;
  },
  get Tm() {
    return Tm;
  },
  set Tm(value) {
    Tm = value;
  },
  get Em() {
    return Em;
  },
  set Em(value) {
    Em = value;
  },
  get Q() {
    return Q;
  },
  set Q(value) {
    Q = value;
  },
  get Dm() {
    return Dm;
  },
  set Dm(value) {
    Dm = value;
  },
  get Om() {
    return Om;
  },
  set Om(value) {
    Om = value;
  },
  get km() {
    return km;
  },
  set km(value) {
    km = value;
  },
  get Am() {
    return Am;
  },
  set Am(value) {
    Am = value;
  },
  get jm() {
    return jm;
  },
  set jm(value) {
    jm = value;
  },
  get Mm() {
    return Mm;
  },
  set Mm(value) {
    Mm = value;
  },
  get Nm() {
    return Nm;
  },
  set Nm(value) {
    Nm = value;
  },
  get Pm() {
    return Pm;
  },
  set Pm(value) {
    Pm = value;
  },
  get Fm() {
    return Fm;
  },
  set Fm(value) {
    Fm = value;
  },
  get Im() {
    return Im;
  },
  set Im(value) {
    Im = value;
  },
  get Lm() {
    return Lm;
  },
  set Lm(value) {
    Lm = value;
  },
  get Rm() {
    return Rm;
  },
  set Rm(value) {
    Rm = value;
  },
  get zm() {
    return zm;
  },
  set zm(value) {
    zm = value;
  },
  get Bm() {
    return Bm;
  },
  set Bm(value) {
    Bm = value;
  },
  get Vm() {
    return Vm;
  },
  set Vm(value) {
    Vm = value;
  },
  get Hm() {
    return Hm;
  },
  set Hm(value) {
    Hm = value;
  },
  get Um() {
    return Um;
  },
  set Um(value) {
    Um = value;
  },
  get Wm() {
    return Wm;
  },
  set Wm(value) {
    Wm = value;
  },
  get Gm() {
    return Gm;
  },
  set Gm(value) {
    Gm = value;
  },
  get Km() {
    return Km;
  },
  set Km(value) {
    Km = value;
  },
  get qm() {
    return qm;
  },
  set qm(value) {
    qm = value;
  },
  get Jm() {
    return Jm;
  },
  set Jm(value) {
    Jm = value;
  },
  get Ym() {
    return Ym;
  },
  set Ym(value) {
    Ym = value;
  },
  get Xm() {
    return Xm;
  },
  set Xm(value) {
    Xm = value;
  },
  get Zm() {
    return Zm;
  },
  set Zm(value) {
    Zm = value;
  },
  get Qm() {
    return Qm;
  },
  set Qm(value) {
    Qm = value;
  },
  get $m() {
    return $m;
  },
  set $m(value) {
    $m = value;
  },
  get eh() {
    return eh;
  },
  set eh(value) {
    eh = value;
  },
  get th() {
    return th;
  },
  set th(value) {
    th = value;
  },
  get nh() {
    return nh;
  },
  set nh(value) {
    nh = value;
  },
  get rh() {
    return rh;
  },
  set rh(value) {
    rh = value;
  },
  get ih() {
    return ih;
  },
  set ih(value) {
    ih = value;
  },
  get ah() {
    return ah;
  },
  set ah(value) {
    ah = value;
  },
  get $() {
    return $;
  },
  set $(value) {
    $ = value;
  },
  get oh() {
    return oh;
  },
  set oh(value) {
    oh = value;
  },
  get sh() {
    return sh;
  },
  set sh(value) {
    sh = value;
  },
  get ch() {
    return ch;
  },
  set ch(value) {
    ch = value;
  },
  get lh() {
    return lh;
  },
  set lh(value) {
    lh = value;
  },
  get uh() {
    return uh;
  },
  set uh(value) {
    uh = value;
  },
  get dh() {
    return dh;
  },
  set dh(value) {
    dh = value;
  },
  get fh() {
    return fh;
  },
  set fh(value) {
    fh = value;
  },
  get ph() {
    return ph;
  },
  set ph(value) {
    ph = value;
  },
  get mh() {
    return mh;
  },
  set mh(value) {
    mh = value;
  },
  get hh() {
    return hh;
  },
  set hh(value) {
    hh = value;
  },
  get gh() {
    return gh;
  },
  set gh(value) {
    gh = value;
  },
  get _h() {
    return _h;
  },
  set _h(value) {
    _h = value;
  },
  get vh() {
    return vh;
  },
  set vh(value) {
    vh = value;
  },
  get yh() {
    return yh;
  },
  set yh(value) {
    yh = value;
  },
  get bh() {
    return bh;
  },
  set bh(value) {
    bh = value;
  },
  get xh() {
    return xh;
  },
  set xh(value) {
    xh = value;
  },
  get Sh() {
    return Sh;
  },
  set Sh(value) {
    Sh = value;
  },
  get Ch() {
    return Ch;
  },
  set Ch(value) {
    Ch = value;
  },
  get wh() {
    return wh;
  },
  set wh(value) {
    wh = value;
  },
  get Th() {
    return Th;
  },
  set Th(value) {
    Th = value;
  },
  get Eh() {
    return Eh;
  },
  set Eh(value) {
    Eh = value;
  },
  get Dh() {
    return Dh;
  },
  set Dh(value) {
    Dh = value;
  },
  get Oh() {
    return Oh;
  },
  set Oh(value) {
    Oh = value;
  },
  get kh() {
    return kh;
  },
  set kh(value) {
    kh = value;
  },
  get Ah() {
    return Ah;
  },
  set Ah(value) {
    Ah = value;
  },
  get jh() {
    return jh;
  },
  set jh(value) {
    jh = value;
  },
  get Mh() {
    return Mh;
  },
  set Mh(value) {
    Mh = value;
  },
  get Nh() {
    return Nh;
  },
  set Nh(value) {
    Nh = value;
  },
  get Ph() {
    return Ph;
  },
  set Ph(value) {
    Ph = value;
  },
  get Fh() {
    return Fh;
  },
  set Fh(value) {
    Fh = value;
  },
  get Ih() {
    return Ih;
  },
  set Ih(value) {
    Ih = value;
  },
  get Lh() {
    return Lh;
  },
  set Lh(value) {
    Lh = value;
  },
  get Rh() {
    return Rh;
  },
  set Rh(value) {
    Rh = value;
  },
  get zh() {
    return zh;
  },
  set zh(value) {
    zh = value;
  },
  get Bh() {
    return Bh;
  },
  set Bh(value) {
    Bh = value;
  },
  get Vh() {
    return Vh;
  },
  set Vh(value) {
    Vh = value;
  },
  get Hh() {
    return Hh;
  },
  set Hh(value) {
    Hh = value;
  },
  get Uh() {
    return Uh;
  },
  set Uh(value) {
    Uh = value;
  },
  get Wh() {
    return Wh;
  },
  set Wh(value) {
    Wh = value;
  },
  get Gh() {
    return Gh;
  },
  set Gh(value) {
    Gh = value;
  },
  get Kh() {
    return Kh;
  },
  set Kh(value) {
    Kh = value;
  },
  get qh() {
    return qh;
  },
  set qh(value) {
    qh = value;
  },
  get Jh() {
    return Jh;
  },
  set Jh(value) {
    Jh = value;
  },
  get Yh() {
    return Yh;
  },
  set Yh(value) {
    Yh = value;
  },
  get Xh() {
    return Xh;
  },
  set Xh(value) {
    Xh = value;
  },
  get Zh() {
    return Zh;
  },
  set Zh(value) {
    Zh = value;
  },
  get Qh() {
    return Qh;
  },
  set Qh(value) {
    Qh = value;
  },
  get $h() {
    return $h;
  },
  set $h(value) {
    $h = value;
  },
  get eg() {
    return eg;
  },
  set eg(value) {
    eg = value;
  },
  get tg() {
    return tg;
  },
  set tg(value) {
    tg = value;
  },
  get ng() {
    return ng;
  },
  set ng(value) {
    ng = value;
  },
  get rg() {
    return rg;
  },
  set rg(value) {
    rg = value;
  },
  get ig() {
    return ig;
  },
  set ig(value) {
    ig = value;
  },
  get ag() {
    return ag;
  },
  set ag(value) {
    ag = value;
  },
  get og() {
    return og;
  },
  set og(value) {
    og = value;
  },
  get sg() {
    return sg;
  },
  set sg(value) {
    sg = value;
  },
  get cg() {
    return cg;
  },
  set cg(value) {
    cg = value;
  },
  get lg() {
    return lg;
  },
  set lg(value) {
    lg = value;
  },
  get ug() {
    return ug;
  },
  set ug(value) {
    ug = value;
  },
  get dg() {
    return dg;
  },
  set dg(value) {
    dg = value;
  },
  get fg() {
    return fg;
  },
  set fg(value) {
    fg = value;
  },
  get pg() {
    return pg;
  },
  set pg(value) {
    pg = value;
  },
  get mg() {
    return mg;
  },
  set mg(value) {
    mg = value;
  },
  get hg() {
    return hg;
  },
  set hg(value) {
    hg = value;
  },
  get gg() {
    return gg;
  },
  set gg(value) {
    gg = value;
  },
  get _g() {
    return _g;
  },
  set _g(value) {
    _g = value;
  },
  get vg() {
    return vg;
  },
  set vg(value) {
    vg = value;
  },
  get yg() {
    return yg;
  },
  set yg(value) {
    yg = value;
  },
  get bg() {
    return bg;
  },
  set bg(value) {
    bg = value;
  },
  get xg() {
    return xg;
  },
  set xg(value) {
    xg = value;
  },
  get Sg() {
    return Sg;
  },
  set Sg(value) {
    Sg = value;
  },
  get Cg() {
    return Cg;
  },
  set Cg(value) {
    Cg = value;
  },
  get wg() {
    return wg;
  },
  set wg(value) {
    wg = value;
  },
  get Tg() {
    return Tg;
  },
  set Tg(value) {
    Tg = value;
  },
  get Eg() {
    return Eg;
  },
  set Eg(value) {
    Eg = value;
  },
  get Dg() {
    return Dg;
  },
  set Dg(value) {
    Dg = value;
  },
  get Og() {
    return Og;
  },
  set Og(value) {
    Og = value;
  },
  get kg() {
    return kg;
  },
  set kg(value) {
    kg = value;
  },
  get Ag() {
    return Ag;
  },
  set Ag(value) {
    Ag = value;
  },
  get jg() {
    return jg;
  },
  set jg(value) {
    jg = value;
  },
  get Mg() {
    return Mg;
  },
  set Mg(value) {
    Mg = value;
  },
  get Ng() {
    return Ng;
  },
  set Ng(value) {
    Ng = value;
  },
  get Pg() {
    return Pg;
  },
  set Pg(value) {
    Pg = value;
  },
  get Fg() {
    return Fg;
  },
  set Fg(value) {
    Fg = value;
  },
  get Ig() {
    return Ig;
  },
  set Ig(value) {
    Ig = value;
  },
  get Lg() {
    return Lg;
  },
  set Lg(value) {
    Lg = value;
  },
  get Rg() {
    return Rg;
  },
  set Rg(value) {
    Rg = value;
  },
  get zg() {
    return zg;
  },
  set zg(value) {
    zg = value;
  },
  get Bg() {
    return Bg;
  },
  set Bg(value) {
    Bg = value;
  },
  get Vg() {
    return Vg;
  },
  set Vg(value) {
    Vg = value;
  },
  get Hg() {
    return Hg;
  },
  set Hg(value) {
    Hg = value;
  },
  get Ug() {
    return Ug;
  },
  set Ug(value) {
    Ug = value;
  },
  get Wg() {
    return Wg;
  },
  set Wg(value) {
    Wg = value;
  },
  get Gg() {
    return Gg;
  },
  set Gg(value) {
    Gg = value;
  },
  get Kg() {
    return Kg;
  },
  set Kg(value) {
    Kg = value;
  },
  get qg() {
    return qg;
  },
  set qg(value) {
    qg = value;
  },
  get Jg() {
    return Jg;
  },
  set Jg(value) {
    Jg = value;
  },
  get Yg() {
    return Yg;
  },
  set Yg(value) {
    Yg = value;
  },
  get Xg() {
    return Xg;
  },
  set Xg(value) {
    Xg = value;
  },
  get Zg() {
    return Zg;
  },
  set Zg(value) {
    Zg = value;
  },
  get Qg() {
    return Qg;
  },
  set Qg(value) {
    Qg = value;
  },
  get $g() {
    return $g;
  },
  set $g(value) {
    $g = value;
  },
  get e_() {
    return e_;
  },
  set e_(value) {
    e_ = value;
  },
  get t_() {
    return t_;
  },
  set t_(value) {
    t_ = value;
  },
  get n_() {
    return n_;
  },
  set n_(value) {
    n_ = value;
  },
  get r_() {
    return r_;
  },
  set r_(value) {
    r_ = value;
  },
  get i_() {
    return i_;
  },
  set i_(value) {
    i_ = value;
  },
  get a_() {
    return a_;
  },
  set a_(value) {
    a_ = value;
  },
  get o_() {
    return o_;
  },
  set o_(value) {
    o_ = value;
  },
  get s_() {
    return s_;
  },
  set s_(value) {
    s_ = value;
  },
  get c_() {
    return c_;
  },
  set c_(value) {
    c_ = value;
  },
  get l_() {
    return l_;
  },
  set l_(value) {
    l_ = value;
  },
  get u_() {
    return u_;
  },
  set u_(value) {
    u_ = value;
  },
  get d_() {
    return d_;
  },
  set d_(value) {
    d_ = value;
  },
  get f_() {
    return f_;
  },
  set f_(value) {
    f_ = value;
  },
  get p_() {
    return p_;
  },
  set p_(value) {
    p_ = value;
  },
  get m_() {
    return m_;
  },
  set m_(value) {
    m_ = value;
  },
  get h_() {
    return h_;
  },
  set h_(value) {
    h_ = value;
  }
};
var bt = create_bt(gameScope);
var xt = create_xt(gameScope);
var St = create_St(gameScope);
var wt = create_wt(gameScope);
var Et = create_Et(gameScope);
var Dt = create_Dt(gameScope);
var Ft = create_Ft(gameScope);
var Wt = create_Wt(gameScope);
var _n = create__n(gameScope);
var Pn = create_Pn(gameScope);
var In = create_In(gameScope);
var Qn = create_Qn(gameScope);
var ir = create_ir(gameScope);
var Rr = create_Rr(gameScope);
var Vr = create_Vr(gameScope);
var ri = create_ri(gameScope);
var ii = create_ii(gameScope);
var ai = create_ai(gameScope);
var xi = create_xi(gameScope);
var Ti = create_Ti(gameScope);
var Ji = create_Ji(gameScope);
var Zi = create_Zi(gameScope);
var Sa = create_Sa(gameScope);
var wa = create_wa(gameScope);
var Ta = create_Ta(gameScope);
var Aa = create_Aa(gameScope);
var Qa = create_Qa(gameScope);
var $a = create_Dollara(gameScope);
var oo = create_oo(gameScope);
var So = create_So(gameScope);
var To = create_To(gameScope);
var Ao = create_Ao(gameScope);
var jo = create_jo(gameScope);
var Mo = create_Mo(gameScope);
var $o = create_Dollaro(gameScope);
var es = create_es(gameScope);
var as = create_as(gameScope);
var Ys = create_Ys(gameScope);
var Xs = create_Xs(gameScope);
var Qs = create_Qs(gameScope);
var $s = create_Dollars(gameScope);
var ec = create_ec(gameScope);
var pc = create_pc(gameScope);
var mc = create_mc(gameScope);
var Ec = create_Ec(gameScope);
var Dc = create_Dc(gameScope);
var jc = create_jc(gameScope);
var fl = create_fl(gameScope);
var gl = create_gl(gameScope);
var El = create_El(gameScope);
var Bl = create_Bl(gameScope);
var ql = create_ql(gameScope);
var Yl = create_Yl(gameScope);
var Xl = create_Xl(gameScope);
var Zl = create_Zl(gameScope);
var Ql = create_Ql(gameScope);
var nu = create_nu(gameScope);
var ru = create_ru(gameScope);
var vu = create_vu(gameScope);
var Du = create_Du(gameScope);
var playSpecialAction = create_playSpecialAction(gameScope);
var stopSpecialAction = create_stopSpecialAction(gameScope);
var handleActionKey = create_handleActionKey(gameScope);
var readInputState = create_readInputState(gameScope);
var Id = create_Id(gameScope);
var toggleLocomotion = create_toggleLocomotion(gameScope);
var selectRider = create_selectRider(gameScope);
var nf = create_nf(gameScope);
var af = create_af(gameScope);
var cf = create_cf(gameScope);
var ff = create_ff(gameScope);
var startRun = create_startRun(gameScope);
var computeFollowCameraTargets = create_computeFollowCameraTargets(gameScope);
var kf = create_kf(gameScope);
var resetFollowCamera = create_resetFollowCamera(gameScope);
var Mf = create_Mf(gameScope);
var Nf = create_Nf(gameScope);
var Pf = create_Pf(gameScope);
var Wf = create_Wf(gameScope);
var Gf = create_Gf(gameScope);
var Kf = create_Kf(gameScope);
var Jf = create_Jf(gameScope);
var Xf = create_Xf(gameScope);
var Qf = create_Qf(gameScope);
var updateFollowCamera = create_updateFollowCamera(gameScope);
var hp = create_hp(gameScope);
var yp = create_yp(gameScope);
var xp = create_xp(gameScope);
var Sp = create_Sp(gameScope);
var Cp = create_Cp(gameScope);
var kp = create_kp(gameScope);
var jp = create_jp(gameScope);
var Mp = create_Mp(gameScope);
var zp = create_zp(gameScope);
var Bp = create_Bp(gameScope);
var Vp = create_Vp(gameScope);
var Wp = create_Wp(gameScope);
var tm = create_tm(gameScope);
var rm = create_rm(gameScope);
var im = create_im(gameScope);
var om = create_om(gameScope);
var sm = create_sm(gameScope);
var cm = create_cm(gameScope);
var lm = create_lm(gameScope);
var um = create_um(gameScope);
var pm = create_pm(gameScope);
var mm = create_mm(gameScope);
var _m = create__m(gameScope);
var bm = create_bm(gameScope);
var Cm = create_Cm(gameScope);
var Em = create_Em(gameScope);
var Mm = create_Mm(gameScope);
var Nm = create_Nm(gameScope);
var Hm = create_Hm(gameScope);
var Xm = create_Xm(gameScope);
var Zm = create_Zm(gameScope);
var Qm = create_Qm(gameScope);
var $m = create_Dollarm(gameScope);
var eh = create_eh(gameScope);
var th = create_th(gameScope);
var nh = create_nh(gameScope);
var rh = create_rh(gameScope);
var ih = create_ih(gameScope);
var ch = create_ch(gameScope);
var lh = create_lh(gameScope);
var uh = create_uh(gameScope);
var dh = create_dh(gameScope);
var ph = create_ph(gameScope);
var mh = create_mh(gameScope);
var gh = create_gh(gameScope);
var vh = create_vh(gameScope);
var bh = create_bh(gameScope);
var xh = create_xh(gameScope);
var Eh = create_Eh(gameScope);
var jh = create_jh(gameScope);
var Mh = create_Mh(gameScope);
var Nh = create_Nh(gameScope);
var Ph = create_Ph(gameScope);
var Lh = create_Lh(gameScope);
var Kh = create_Kh(gameScope);
var qh = create_qh(gameScope);
var Xh = create_Xh(gameScope);
var Qh = create_Qh(gameScope);
var eg = create_eg(gameScope);
var tg = create_tg(gameScope);
var ng = create_ng(gameScope);
var rg = create_rg(gameScope);
var ig = create_ig(gameScope);
var og = create_og(gameScope);
var ug = create_ug(gameScope);
var dg = create_dg(gameScope);
var mg = create_mg(gameScope);
var hg = create_hg(gameScope);
var yg = create_yg(gameScope);
var bg = create_bg(gameScope);
var xg = create_xg(gameScope);
var Sg = create_Sg(gameScope);
var Ag = create_Ag(gameScope);
var jg = create_jg(gameScope);
var Mg = create_Mg(gameScope);
var Ng = create_Ng(gameScope);
var Pg = create_Pg(gameScope);
var Rg = create_Rg(gameScope);
var zg = create_zg(gameScope);
var Bg = create_Bg(gameScope);
var Vg = create_Vg(gameScope);
var Wg = create_Wg(gameScope);
var Gg = create_Gg(gameScope);
var qg = create_qg(gameScope);
var Jg = create_Jg(gameScope);
var Zg = create_Zg(gameScope);
var $g = create_Dollarg(gameScope);
var e_ = create_e_(gameScope);
var n_ = create_n_(gameScope);
var r_ = create_r_(gameScope);
var a_ = create_a_(gameScope);
var o_ = create_o_(gameScope);
var c_ = create_c_(gameScope);
var l_ = create_l_(gameScope);
var u_ = create_u_(gameScope);
const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = ["./assets/model-loader-lazy.js", "./assets/model-loader.js", "../vendor/three/core.js", "../vendor/three/buffer-geometry-utils.js", "./render/toon-lazy.js", "./render/toon-materials.js"])) => i.map(i => d[i]);
var vt = {
  auto: `Auto`,
  low: `Low`,
  medium: `Medium`,
  high: `High`,
  custom: `Custom`
};
var yt = create_yt(gameScope);
var Ct = {
  charge: 1.15,
  voice: 1.45,
  release: 2.02,
  flight: 1.15
};
var Tt = create_Tt(gameScope);
var Ot = new Vector3(72, 40, 72);
var kt = 4e4;
var At = create_At(gameScope);
var jt = Math.PI / 180;
var Mt = 48.7 * jt;
var Nt = -7.8 * jt;
var Pt = -.83 * jt;
var It = 12 - Math.acos((Math.sin(Pt) - Math.sin(Mt) * Math.sin(Nt)) / (Math.cos(Mt) * Math.cos(Nt))) / jt / 15;
var Lt = 24 - It;
var Rt = [{
  alt: -14,
  zenith: `#16223d`,
  horizon: `#2c3d63`,
  glow: `#2c3d63`,
  glowAmount: 0,
  cloudLight: `#3d5079`,
  cloudDark: `#1d2b4b`,
  lit: `#a9b9e0`,
  shadow: `#5a6c96`,
  sun: `#ff9a5c`,
  fogInk: `#22304d`,
  night: 1
}, {
  alt: -7,
  zenith: `#2a3766`,
  horizon: `#7d6f9e`,
  glow: `#d98a86`,
  glowAmount: .8,
  cloudLight: `#a07fa8`,
  cloudDark: `#3c4777`,
  lit: `#b4b3d6`,
  shadow: `#6c74a4`,
  sun: `#ff9a5c`,
  fogInk: `#3d4670`,
  night: .45
}, {
  alt: -1.5,
  zenith: `#46609a`,
  horizon: `#e6a39a`,
  glow: `#ffb27a`,
  glowAmount: 1,
  cloudLight: `#f6b9a4`,
  cloudDark: `#7c6e9c`,
  lit: `#e8c0b8`,
  shadow: `#7d86b4`,
  sun: `#ffe2b8`,
  fogInk: `#6a6890`,
  night: 0
}, {
  alt: 4,
  zenith: `#5c8fbf`,
  horizon: `#f5c79a`,
  glow: `#ffb06a`,
  glowAmount: 1,
  cloudLight: `#ffd9b2`,
  cloudDark: `#b98a99`,
  lit: `#ffcf9a`,
  shadow: `#8d99c6`,
  sun: `#fff0d0`,
  fogInk: `#7d7f9a`,
  night: 0
}, {
  alt: 12,
  zenith: `#68aebb`,
  horizon: `#dbe6cf`,
  glow: `#f8e2b8`,
  glowAmount: .6,
  cloudLight: `#f7f0de`,
  cloudDark: `#6ca4aa`,
  lit: `#ffefd6`,
  shadow: `#9dbfcc`,
  sun: `#fff8e4`,
  fogInk: `#62909a`,
  night: 0
}, {
  alt: 25,
  zenith: `#6dbbb8`,
  horizon: `#bfe2da`,
  glow: `#e4efdc`,
  glowAmount: .3,
  cloudLight: `#e8f5ef`,
  cloudDark: `#58a7a8`,
  lit: `#fff6e6`,
  shadow: `#9fc4cc`,
  sun: `#fffbea`,
  fogInk: `#5d8f97`,
  night: 0
}].map(e => Object.fromEntries(Object.entries(e).map(([e, t]) => [e, typeof t == `string` ? new at(t) : t])));
var zt = [`zenith`, `horizon`, `glow`, `cloudLight`, `cloudDark`, `lit`, `shadow`, `sun`, `fogInk`];
var weatherPresets = create_weatherPresets(gameScope);
var Vt = create_Vt(gameScope);
var Ht = new Re(.92, .38).normalize();
var Ut = new at(`#5fd99a`);
var Gt = new at();
var Kt = new at();
var qt = new Re();
var Jt = create_Jt(gameScope);
var WeatherController = create_WeatherController(gameScope);
var Xt = .55;
var Zt = 1.05;
var Qt = 12;
var $t = 1 / 6;
var en = .25;
var tn = create_tn(gameScope);
var nn = new Vector3();
var rn = 9.81;
var an = 1 / 120;
var on = .6;
var sn = 1.5;
var cn = .3;
var ln = .9;
var un = 1;
var dn = .05;
var fn = .25;
var pn = new Vector3();
var mn = create_mn(gameScope);
var hn = `./models/dog/old-english-sheepdog.glb`;
var gn = null;
var vn = create_vn(gameScope);
var yn = [`spine`, `spine1`, `spine2`, `chest`];
var bn = [[`neck`, .3], [`neck1`, .45], [`head`, 1]];
var xn = [`tail`, `tail1`, `tail2`, `tail3`];
var Sn = [[`ear_L`, 1], [`ear_R`, -1]];
var Cn = new Vector3(1, 0, 0);
var wn = new Vector3(0, 1, 0);
var Tn = new Vector3(0, 0, 1);
var En = new T();
var Dn = new T();
var On = new T();
var kn = new De();
var An = new Vector3();
var jn = new Vector3();
var Mn = new Vector3();
var Nn = new Vector3();
var Fn = create_Fn(gameScope);
var {
  clamp: Ln,
  lerp: Rn,
  smoothstep: zn,
  euclideanModulo: Bn
} = MathUtils;
var Vn = Math.PI * 2;
var Hn = [`stand`, `sit`, `lie`, `sleep`, `side`, `belly`, `bow`, `rear`];
var Un = {
  stand: .45,
  sit: .5,
  lie: .7,
  sleep: .9,
  side: .8,
  belly: .6,
  bow: .3,
  rear: .22
};
var Wn = create_Wn(gameScope);
var Gn = new Vector3(1, 0, 0);
var Kn = new Vector3(0, 1, 0);
var qn = new Vector3(0, 0, 1);
var Jn = new T();
var Yn = new De();
var Xn = new Vector3();
var Zn = new Vector3();
var $n = create_Dollarn(gameScope);
var er = create_er(gameScope);
var tr = create_tr(gameScope);
var nr = new Vector3();
var rr = create_rr(gameScope);
var ar = create_ar(gameScope);
var or = .035;
var sr = 150;
var cr = 150;
var lr = 6;
var ur = create_ur(gameScope);
var dr = Object.keys(ur);
var fr = Object.fromEntries(dr.map((e, t) => [e, t]));
var pr = dr.map(e => ur[e].aspect);
var mr = `
attribute vec2 corner;
attribute vec4 aPrint; // when it was made, its number, kind + depth, where the light comes from
uniform vec4 uNow; // the snow's clock, prints made so far, life (s), slots
uniform vec2 uFade; // m from the camera it starts to fade, and is gone
varying vec2 vP;
varying vec2 vSun;
varying float vKind;
varying float vDepth;
varying float vFade;
const float ASPECT[${pr.length}] = ${(e => `float[${e.length}](${e.map(e => e.toFixed(3)).join(`, `)})`)(pr)};
void main() {
  // Whichever comes first: it's filled in, or its slot's about to be wanted.
  float left = min(1. - (uNow.x - aPrint.x) / uNow.z, 1. - (uNow.y - aPrint.y) / uNow.w);
  if (left <= 0.) { gl_Position = vec4(2., 2., 2., 1.); return; }
  vec4 view = modelViewMatrix * vec4(position, 1.);
  vFade = smoothstep(0., .3, left) * (1. - smoothstep(uFade.x, uFade.y, -view.z));
  vKind = floor(aPrint.z);
  vDepth = fract(aPrint.z);
  vP = corner * vec2(ASPECT[int(vKind)], 1.);
  vSun = vec2(cos(aPrint.w), sin(aPrint.w)) * (.09 + .13 * vDepth);
  gl_Position = projectionMatrix * view;
}`;
var hr = `
uniform vec3 uLitTint;
uniform vec3 uShadowTint;
uniform float uShade;
varying vec2 vP;
varying vec2 vSun;
varying float vKind;
varying float vDepth;
varying float vFade;
float disc(vec2 p, vec2 c, float r) { return length(p - c) - r; }
float oval(vec2 p, vec2 c, vec2 r) { return (length((p - c) / r) - 1.) * min(r.x, r.y); }
float bar(vec2 p, vec2 a, vec2 b, float r) {
  vec2 pa = p - a, ba = b - a;
  return length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0., 1.)) - r;
}
float shape(vec2 p, int kind, out float tone) {
  float d = 1.;
  tone = 1.;
${dr.map((e, t) => `  ${t ? `else ` : ``}if (kind == ${t}) {${ur[e].sdf}\n  }`).join(`
`)}
  return d;
}
void main() {
  gl_FragColor = vec4(1.); // white: multiplying by it leaves the snow as it is
  if (vFade <= 0.) return;
  int kind = int(vKind + .5);
  float tone, unused;
  float d = shape(vP, kind, tone), w = fwidth(d) + 1e-4;
  float inside = 1. - smoothstep(-w, w, d);
  if (inside <= 0.) return;
  // Under the wall on the side the light comes from: what the snow's own cast
  // shadows are, tone for tone, so it reads as a dent, not a mark.
  float shaded = smoothstep(-w, w, shape(vP + vSun, kind, unused)) * uShade;
  float amount = max(mix(.14, .36, vDepth) * tone, shaded * mix(.45, .85, vDepth));
  // Under cloud the two tones nearly meet; a dent still shows.
  vec3 dark = min(uShadowTint / max(uLitTint, vec3(.01)), vec3(.62, .72, .8));
  gl_FragColor.rgb = mix(vec3(1.), dark, amount * inside * vFade);
}`;
var gr = create_gr(gameScope);
var _r = create__r(gameScope);
var vr = new Vector3();
var yr = new Vector3();
var br = create_br(gameScope);
var xr = {
  en: `Mantou`,
  zh: `馒头`
};
var Sr = 1.3;
var Cr = {
  walk: 1,
  trot: 2.6,
  run: 6.5,
  sprint: 9.5
};
var wr = 170;
var Tr = 32;
var Er = 10;
var Dr = 2.4;
var Or = 9.81;
var D = new Vector3();
var kr = new Vector3();
var Ar = new Vector3();
var {
  clamp: jr,
  randFloat: Mr,
  euclideanModulo: Nr
} = MathUtils;
var Pr = create_Pr(gameScope);
var Fr = create_Fr(gameScope);
var Ir = create_Ir(gameScope);
var Lr = create_Lr(gameScope);
var zr = `./models/fox/red-fox.glb`;
var Br = null;
var Hr = [new Vector3(.095, .526, .402), new Vector3(-.018, .526, .402)];
var Ur = new Vector3(.032, .021, .032);
var Wr = new at(`#cc7034`);
var Gr = create_Gr(gameScope);
var {
  clamp: Kr,
  smoothstep: qr
} = MathUtils;
var Jr = {
  flickL: .34,
  flickR: .34,
  flick: .4,
  blink: .17,
  wink: .3,
  startle: .5
};
var Yr = create_Yr(gameScope);
var {
  clamp: Xr,
  smoothstep: Zr
} = MathUtils;
var Qr = new Re();
var $r = new Re();
var ei = new Re();
var ti = new Re();
var ni = create_ni(gameScope);
var oi = {
  en: `Red fox`,
  zh: `赤狐`,
  id: `red-fox`
};
var si = .9;
var ci = {
  lift: `6号索道`,
  off: [3, 51.9]
};
var li = 40;
var ui = 10;
var di = {
  ...ni,
  jukeLead: 1,
  jukeMiss: 5,
  jukeRead: true,
  waryLead: 1.8,
  miss: 9,
  offLine: 1.6,
  safe: 34
};
var {
  clamp: fi,
  randFloat: O,
  smoothstep: pi,
  euclideanModulo: mi
} = MathUtils;
var hi = create_hi(gameScope);
var gi = create_gi(gameScope);
var _i = create__i(gameScope);
var vi = new Vector3();
var yi = new Vector3();
var bi = new Vector3(0, 1, 0);
var Si = create_Si(gameScope);
var Ci = create_Ci(gameScope);
var wi = create_wi(gameScope);
var {
  clamp: Ei
} = MathUtils;
var Di = Math.PI * 2;
var Oi = [6, 4.5, 2.6, 2.2, 2];
var ki = [.7, .6, .6, .6, .55];
var Ai = .04;
var ji = [.035, .03, .03];
var Mi = .11;
var Ni = 9;
var Pi = 8;
var Fi = new Vector3();
var Ii = new Vector3();
var Li = new Vector3();
var Ri = new Vector3();
var zi = new T();
var Bi = [0, 1, 2, 3].map(() => new Vector3());
var Vi = new Vector3();
var Hi = new Vector3();
var Ui = new Vector3();
var Wi = new Vector3();
var Gi = new Vector3();
var Ki = new Vector3();
var qi = create_qi(gameScope);
var Yi = `./models/horse/altai-horse.glb`;
var Xi = null;
var Qi = create_Qi(gameScope);
var $i = [`spine`, `spine1`, `spine2`, `chest`];
var ea = [[`chest1`, .45], [`neck`, .3], [`neck1`, .15], [`neck2`, .1]];
var ta = [[`neck`, .25], [`neck1`, .25], [`neck2`, .2], [`neck3`, .15], [`head`, .15]];
var na = [`tail`, `tail1`, `tail2`, `tail3`, `tail4`];
var ra = [1, .3, 0, 0, 0];
var ia = [.3, .25, .2, .15, .1];
var aa = .11;
var oa = .012;
var sa = .53;
var ca = new Vector3(1, 0, 0);
var la = new Vector3(0, 1, 0);
var ua = new Vector3(0, 0, 1);
var da = new T();
var fa = new T();
var pa = new T();
var ma = new De();
var ha = new Vector3();
var ga = new Vector3();
var _a = new Vector3();
var va = new Vector3();
var ya = new Vector3();
var ba = new Vector3();
var xa = new Vector3();
var Ca = create_Ca(gameScope);
var {
  clamp: Ea,
  lerp: Da,
  smoothstep: Oa
} = MathUtils;
var ka = Math.PI * 2;
var ja = create_ja(gameScope);
var Ma = create_Ma(gameScope);
var Na = create_Na(gameScope);
var {
  clamp: Pa,
  lerp: Fa,
  smoothstep: Ia,
  euclideanModulo: La
} = MathUtils;
var Ra = Math.PI * 2;
var za = new Vector3(1, 0, 0);
var Ba = new T();
var Va = new De(0, 0, 0, `YXZ`);
var Ha = new Vector3();
var Ua = new Vector3();
var Wa = create_Wa(gameScope);
var Ga = Wa();
var Ka = Wa();
var qa = Wa();
var Ja = Wa();
var Ya = Wa();
var Xa = Array.from({
  length: 7
}, Wa);
var Za = [`cannon`, `pastern`, `toe`, `blade`];
var eo = create_eo(gameScope);
var to = Object.keys(eo);
var no = [`duty`, `speed`, `hz`, `bob2`, `bob1`, `low`, `pitch`, `flex`, `roll`, `neck`, `nod2`, `nod1`, `rock`, `tail`, `ears`];
var ro = [0, .03, .04, .12];
var io = create_io(gameScope);
var ao = new Vector3();
var so = create_so(gameScope);
var co = new Vector3(0, .705, .335);
var lo = new Vector3(0, -.73, .68).normalize();
var uo = new Vector3(0, .68, .73).normalize();
var fo = new Vector3(1, 0, 0);
var po = {
  crown: -.022,
  brow: .045,
  nose: .15
};
var mo = [[.07, .66, .318], [.06, .61, .322], [.035, .578, .326]];
var ho = {
  strap: .028,
  nose: .038,
  thick: .006,
  gap: .004
};
var go = {
  radius: .034,
  wire: .006
};
var _o = new Vector3();
var vo = new Vector3();
var yo = new Vector3();
var bo = create_bo(gameScope);
var xo = create_xo(gameScope);
var Co = `./models/saddle/kazakh-saddle.glb`;
var wo = null;
var Eo = {
  drop: .57,
  out: .42,
  ahead: .08,
  reach: .44,
  up: .26,
  apart: .28,
  kneeOut: .9
};
var Do = {
  female: .57,
  male: .52
};
var Oo = create_Oo(gameScope);
var ko = {
  width: .27,
  height: .27,
  top: .16,
  bar: .022,
  tread: .024,
  depth: .12,
  taper: .4,
  pad: .008
};
var No = ko.tread + ko.pad;
var Po = create_Po(gameScope);
var Fo = new Vector3(0, 1, 0);
var Io = new Vector3();
var Lo = new Vector3();
var Ro = new Vector3();
var zo = new ze();
var Bo = [new Vector3(.04, .515, .435), new Vector3(-.04, .515, .435)];
var Vo = .011;
var Ho = 2.6;
var Uo = [new Vector3(.095, .64, .25), new Vector3(-.095, .64, .25)];
var Wo = create_Wo(gameScope);
var Go = new Vector3(0, 1, 0);
var Ko = new ze();
var qo = new ze();
var Jo = new Vector3();
var Yo = MathUtils.degToRad(15);
var Xo = -.2;
var Zo = new Vector3(.64, 0, -.34);
var Qo = create_Qo(gameScope);
var ts = create_ts(gameScope);
var ns = [new Vector3(), new Vector3()];
var rs = new Vector3();
var is = new ze();
var {
  clamp: os,
  lerp: ss,
  smoothstep: cs
} = MathUtils;
var ls = Math.PI * 2;
var us = 9.81;
var ds = new De(0, 0, 0, `YXZ`);
var fs = new ze();
var ps = new Vector3();
var ms = new Vector3();
var hs = new Vector3();
var gs = new Vector3();
var _s = create__s(gameScope);
var vs = Object.keys(_s.walk);
var ys = [-.15, .01];
var bs = new Vector3(-.07, 1.66, .14);
var xs = .985;
var Ss = create_Ss(gameScope);
var Cs = create_Cs(gameScope);
var ws = {
  en: `Altai horse`,
  zh: `阿勒泰马`
};
var Ts = 2.6;
var Es = create_Es(gameScope);
var Ds = {
  at: [-135, 11],
  r: 32
};
var Os = 25;
var ks = 4;
var As = 2.5;
var js = [1, -.3];
var Ms = {
  hw: .14,
  hd: 1.25,
  back: .15
};
var Ns = [[12, 11], [18, 6.5], [24, 3.8], [32, 1.7], [35, 0]];
var Ps = [[15, 11], [22, 6.5], [28, 3.8], [36, 1.7], [38, 0]];
var Fs = new Vector3();
new Vector3();
new T();
var Is = new De(0, 0, 0, `YXZ`);
var Ls = [new Vector3(), new Vector3()];
var Rs = new Vector3();
var zs = new Vector3();
var Bs = .07;
var {
  clamp: Vs,
  lerp: Hs,
  randFloat: Us,
  euclideanModulo: Ws,
  smoothstep: Gs,
  radToDeg: Ks
} = MathUtils;
var qs = create_qs(gameScope);
var Js = create_Js(gameScope);
var Zs = create_Zs(gameScope);
var tc = 4.5 / .686035037;
var nc = create_nc(gameScope);
var rc = [`waiting`, `shy`, `flee`];
var ic = [`caught`, `carry`, `ridden`];
var ac = [0, .35, -.35, .7, -.7, 1.05, -1.05, 1.4, -1.4];
var oc = [[-.062, -.038, .518, .557, .112, .128], [.038, .062, .518, .557, .112, .128]];
var sc = [[.4118, .5644, .0054, .0108], [.4764, .5753, .0049, .0108]];
var cc = `
uniform float uBlink;
#ifdef USE_MAP
vec3 unpaintEye(vec3 col, vec2 uv, vec2 c, vec2 hs) {
  vec2 q = (uv - c) / (hs * 1.6);
  if (dot(q, q) > 1.0) return col;
  vec3 face = texture2D(map, vec2(0.445,0.575)).rgb;
  float dark = 1.0 - smoothstep(0.6, 0.95, dot(col, vec3(0.299, 0.587, 0.114)) / dot(face, vec3(0.299, 0.587, 0.114)));
  return mix(col, face, dark);
}
#endif`;
var lc = new Vector3();
var uc = new Vector3();
var dc = create_dc(gameScope);
var fc = `hemu-ski.found`;
var hc = create_hc(gameScope);
var gc = new Vector3(1, 0, 0);
var _c = new Vector3(0, 1, 0);
var vc = new Vector3(0, 0, 1);
var yc = new ze();
var bc = new ze();
var xc = new T();
var Sc = new De(0, 0, 0, `YXZ`);
var Cc = new Vector3();
var wc = new Vector3();
var Tc = new Vector3();
var Oc = create_Oc(gameScope);
var kc = create_kc(gameScope);
var Ac = 40;
var Mc = create_Mc(gameScope);
var gravity = 9.81;
var pushStartSpeedCutoff = 25 / 3.6;
var kickTimingParameters = {
  plant: .15,
  lift: .6,
  push: 5.6,
  strap: 1.4,
  glide: 1.5,
  steps: 2,
  stride: 4.2,
  pole: 7,
  rest: .8
};
var edgePumpParameters = {
  keep: .96,
  pump: 3.2,
  pumpTime: .35,
  pumpFade: [14, 30],
  drag: .2,
  dragFrom: 16,
  dragTo: 30
};
var worldBoundaryMargin = 40;
var crashedSlideFriction = .5;
var zc = new Vector3();
var Bc = new Vector3();
var Vc = new Vector3();
var Hc = new Vector3();
var Uc = new Vector3();
var SnowboardPhysics = create_SnowboardPhysics(gameScope);
var Gc = 25;
var Kc = {
  easy: 10,
  novice: 10,
  intermediate: 14,
  advanced: 18,
  expert: 21,
  freeride: 21
};
var qc = 6;
var Jc = 1.6;
var Yc = 45;
var Xc = 90;
var Zc = 200;
var Qc = 12;
var $c = create_Dollarc(gameScope);
var el = create_el(gameScope);
var tl = `#9b5de5`;
var nl = `#fbfaf5`;
var rl = `#23303a`;
var il = 60;
var al = {
  hall: 150,
  lift: 80
};
var ol = 40;
var sl = `hemu-ski.gps`;
var cl = create_cl(gameScope);
var ll = create_ll(gameScope);
var ul = create_ul(gameScope);
var GpsNavigator = create_GpsNavigator(gameScope);
var pl = {
  easy: `#4f8fd6`,
  novice: `#4f8fd6`,
  intermediate: `#d9534a`,
  advanced: `#23303a`,
  expert: `#23303a`
};
var ml = create_ml(gameScope);
var hl = {
  fill: `#a9d8dc`,
  edge: `#4f8fa0`
};
var _l = create__l(gameScope);
var vl = `#23303a`;
var yl = `#fbfaf5`;
var bl = 500;
var xl = 1.6;
var Sl = 8;
var Cl = [100, 200, 500, 1e3, 2e3];
var wl = create_wl(gameScope);
var BigMapController = create_BigMapController(gameScope);
var Dl = 320;
var Ol = 2.5;
var kl = 3;
var Al = 45;
var jl = .25;
var Ml = create_Ml(gameScope);
var Nl = 98;
var Pl = [90, 110, 170, 250];
var Fl = {
  f: [750, 1150, 2500, 3400],
  a: [1, .7, .35, .2]
};
var Il = {
  f: [320, 800, 2300, 3200],
  a: [1, .35, .08, .05]
};
var Ll = create_Ll(gameScope);
var Rl = create_Rl(gameScope);
var zl = create_zl(gameScope);
var Vl = 32e3;
var Hl = 4;
var Ul = 8;
var Wl = .5;
var Gl = create_Gl(gameScope);
var Kl = Object.keys(Gl);
var Jl = create_Jl(gameScope);
var $l = create_Dollarl(gameScope);
var eu = create_eu(gameScope);
var tu = `hemu-ski.prefs`;
var iu = 46;
var au = .12;
var ou = .35;
var su = .9;
var cu = create_cu(gameScope);
var lu = create_lu(gameScope);
var uu = create_uu(gameScope);
var du = create_du(gameScope);
var mouseLookSensitivity = .0025;
var touchLookSensitivity = .006;
var lookPitchLimits = {
  min: -1,
  max: 1.05
};
var MouseLookController = create_MouseLookController(gameScope);
var gu = new Vector3(0, 1, 0);
var _u = new Vector3();
var yu = 4;
var bu = 200;
var xu = create_xu(gameScope);
var Su = 9.81;
var Cu = document.getElementById(`game`);
var renderer = new WebGLRenderer({
  canvas: Cu,
  antialias: false,
  powerPreference: `high-performance`
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = 1;
renderer.outputColorSpace = Ve;
var postProcessor = new OutlinePostProcessor(renderer);
var scene = new Me();
scene.background = defaultSkyPalette.horizon.clone();
scene.fog = new ke(defaultSkyPalette.horizon.clone().lerp(new at(`#ffffff`), .15), 900, 17e3);
var camera = new ot(60, 1, .3, 6e4);
var Eu = new Ne(`#ffffff`, toonUniforms.uSunIntensity.value);
Eu.castShadow = true;
Eu.shadow.mapSize.set(2048, 2048);
Object.assign(Eu.shadow.camera, {
  left: -70,
  right: 70,
  top: 70,
  bottom: -70,
  near: 1,
  far: 600
});
Eu.shadow.bias = -4e-4;
Eu.shadow.normalBias = .04;
scene.add(Eu, Eu.target);
var graphicsController = createGraphicsController({
  renderer: renderer,
  post: postProcessor,
  sun: Eu,
  resize: Du
});
window.addEventListener(`resize`, Du);
Du();
var ku = consumeDioramaHandoff();
ku && setLoadingArrival(ku);
var worldAssets = await prepareWorldAssets({
  original: new URLSearchParams(location.search).has(`original`),
  onProgress: e => setLoadingProgress(e * .75)
});
await Promise.all([document.fonts.load(`40px "Patrick Hand SC"`), document.fonts.load(`20px "Patrick Hand"`)]).catch(() => {});
setLoadingProgress(.875);
var {
  meta: worldMetadata,
  piste: pisteField,
  lakes: lakes
} = worldAssets;
var groundHeightfield = worldAssets.ground;
var Pu = worldMetadata.runs.find(e => e.name === defaultRunName);
var worldScene = createWorldScene(worldAssets, {
  terrain: {
    tiles: 9,
    lodDistance: 1200,
    nearDistance: 300,
    corduroy: true
  },
  forest: isMobileModelProfile ? {
    maxNearInstances: 4096
  } : {},
  labels: new URLSearchParams(location.search).has(`labels`)
});
var {
  terrain: Iu,
  lodges: Lu,
  forest: forest,
  lifts: cableway,
  onsen: Bu,
  summit: Vu,
  water: Hu
} = worldScene;
scene.add(worldScene.group);
var Uu = createBackdropTerrain(worldAssets.backdrop, groundHeightfield, {
  stride: isMobileModelProfile ? 2 : 1
});
scene.add(Uu);
var Wu = new WaterRipples();
scene.add(Wu.group);
var Gu = createCabinInteriorBounds(Vu.byId.get(`summit:object-7`));
var Ku = createYurtInteriorBounds(Vu.byId.get(`summit:object-1`));
var qu = new Map([[`summit:object-7`, Gu], [`summit:object-1`, Ku]]);
var Ju = create_Ju(gameScope);
var Yu = create_Yu(gameScope);
var Xu = createSkyDome();
scene.add(Xu);
var weather = new WeatherController({
  scene: scene,
  sky: Xu,
  sun: Eu,
  post: postProcessor,
  toon: toonUniforms,
  water: Hu
});
Pu.points.reduce((e, t, n, r) => n ? e + Math.hypot(t[0] - r[n - 1][0], t[1] - r[n - 1][1]) : 0, 0);
var Zu = sampleRouteDistance(Pu.points, 14);
var Qu = create_Qu(gameScope);
var $u = {
  key: `run:${Pu.id}`,
  x: Zu.x,
  z: Zu.z,
  dx: Zu.dx,
  dz: Zu.dz,
  toast: `Drop in!`
};
var ed = cableway.lines.map(e => {
  let t = e.a.y <= e.b.y,
    n = t ? e.cable : [...e.cable].reverse(),
    r = [0];
  for (let e = 1; e < n.length; e++) r.push(r[e - 1] + n[e].distanceTo(n[e - 1]));
  let i = t ? e.a : e.b,
    a = t ? e.b : e.a,
    o = new Vector3(a.x - i.x, 0, a.z - i.z).normalize(),
    s = e.name || (e.type === `gondola` ? `Gondola` : `Chair lift`);
  return {
    id: e.id,
    label: s,
    bottom: i,
    top: a,
    dir: o,
    cable: n,
    acc: r,
    length: r[r.length - 1],
    fixedChair: cableway.chairSystems.some(t => t.id === e.id)
  };
});
var td = 10;
var nd = ed.map(e => ({
  ride: e,
  station: cableway.footprints.find(t => Math.hypot(t.x - e.bottom.x, t.z - e.bottom.z) < 1)
})).filter(e => e.station);
var rd = createRideGondola();
rd.visible = false;
scene.add(rd);
var rider = new Rider({
  model: false
});
scene.add(rider.root);
var physics = new SnowboardPhysics({
  hf: groundHeightfield,
  piste: pisteField,
  forest: forest,
  lakes: lakes,
  obstacles: [...worldScene.obstacles]
});
var F = new tr();
var id = new ar();
var ad = new ar(500, {
  size: .34,
  gravity: 4,
  life: .6
});
var od = new rr();
scene.add(F.mesh, id.points, ad.points, od.mesh);
var sd = new gr({
  hf: groundHeightfield,
  capacity: isMobileModelProfile ? 600 : 1500,
  snowAt(e, t) {
    if (groundHeightfield.holeAt(e, t)) return 0;
    for (let n of qu.values()) if (n.inside(e, t)) return 0;
    return .55 + .45 * MathUtils.smoothstep(pisteField.distAt(e, t), 16, 20);
  },
  onStep(e, t, n, {
    level: r,
    rate: i,
    range: a
  }) {
    let o = a ? 1 - MathUtils.smoothstep(Math.hypot(e - camera.position.x, t - camera.position.z), 3, a) : 1;
    L.crunch(r * o, (n - .55) / .45, i);
  }
});
scene.add(sd.mesh);
var cd = {
  level: .75,
  rate: 1
};
var ld = new br(new _r(sd, fr.boot, 2, {
  length: .34,
  press: .9,
  sound: cd
}), {
  reach: .18,
  heel: .1
});
var ud = 0;
var I = new _l(worldAssets, pisteField, lakes);
var L = new eu();
L.listen();
var dd = new Tt();
scene.add(dd.group);
document.addEventListener(`visibilitychange`, () => {
  document.hidden || L.resume();
});
window.addEventListener(`pageshow`, () => L.resume());
var specialActionDefinitions = [[`booty-hip-hop-dance`, `Booty Hip Hop Dance`], [`macarena-dance`, `Macarena Dance`], [`breakdance-freezes`, `Breakdance Freezes`], [`moonwalk`, `Moonwalk`], [`golf-drive`, `Golf Drive`], [`gunplay`, `Gunplay`], [`fireball`, `Fireball`], [`roundhouse-kick`, `Roundhouse Kick`], [`guitar-playing`, `Guitar Playing`], [`kneeling-down`, `Kneeling Down`]].map(([e, t]) => ({
  id: e,
  label: t
}));
var pd = new Map();
var R = null;
var md = null;
var hd = 0;
var gd = document.getElementById(`action-status`);
var z = ru(L, {
  actions: specialActionDefinitions,
  playAction: playSpecialAction
});
document.getElementById(`action-stop`).addEventListener(`click`, stopSpecialAction);
var yd = new GpsNavigator({
  hf: groundHeightfield,
  runs: worldMetadata.runs,
  rides: ed
});
I.gps = yd;
var bd = create_bd(gameScope);
var xd = new Ml(groundHeightfield);
scene.add(xd.group);
var Sd = serviceCentreLocations.find(e => e.id === `east`);
var Cd = create_Cd(gameScope);
var wd = worldScene.vehicles.map(e => Object.assign(e, Cd[e.name], e.lake && {
  home: e.lake.name
}));
var Td = create_Td(gameScope);
for (let e of wd) {
  scene.add(e.model.root);
  e.phys = null;
  e.tracks = [];
  e.model.ready.then(() => {
    e.phys = worldScene.parkVehicle(e), e.tracks = e.model.marks.map(() => new er()), e.tracks.length && scene.add(...e.tracks.map(e => e.mesh)), physics.obstacles.push(e.model.footprint);
    for (let t of wd) t !== e && t.phys && (t.phys.obstacles.push(e.model.footprint), e.phys.obstacles.push(t.model.footprint));
    I.parked = Td();
  }).catch(t => console.warn(`The ${e.name} failed to load; it stays out of the game.`, t));
}
var B = null;
var Ed = new BigMapController({
  hud: I,
  detail: groundHeightfield,
  runs: worldMetadata.runs,
  lifts: ed,
  lines: worldMetadata.lifts,
  gps: yd,
  onClose: e_,
  onDiorama: () => a_(n_(`you`), `Finding you on the diorama`)
});
var V = new Set();
var Dd = new xu();
var Od = create_Od(gameScope);
window.addEventListener(`keydown`, e => {
  Dd.see(e, performance.now());
  !e.metaKey && (Ed.isOpen ? (e.code === `Escape` || e.code === `KeyM`) && !e.repeat ? e_() : (e.code === `Delete` || e.code === `Backspace`) && !Od(e.target) ? Ed.clearRoute() : !Od(e.target) && Ed.key(e.code) && e.preventDefault() : Od(e.target) || ([`Space`, `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`].includes(e.code) && e.preventDefault(), V.add(e.code), L.start(), handleActionKey(e.code, e.repeat)));
});
var Ad = create_Ad(gameScope);
var jd = create_jd(gameScope);
window.addEventListener(`keyup`, e => {
  Dd.see(e, performance.now());
  e.key === `Meta` ? V.clear() : V.delete(e.code);
});
window.addEventListener(`blur`, () => V.clear());
window.addEventListener(`contextmenu`, () => V.clear());
document.addEventListener(`visibilitychange`, () => {
  document.hidden && V.clear();
});
window.addEventListener(`focusin`, e => {
  Od(e.target) && V.clear();
});
Cu.addEventListener(`pointerdown`, () => {
  (W === `swoop` || W === `arrive`) && handleActionKey(`Space`);
});
document.getElementById(`mi-restart`).addEventListener(`click`, () => {
  z.close();
  L.start();
  handleActionKey(`KeyR`);
});
var Md = {
  act: `KeyE`,
  alt: `KeyQ`
};
var Nd = new du({
  onTap: e => handleActionKey(Md[e] ?? `KeyF`),
  onPress: () => L.start(),
  onMode: e => I.setTouch(e)
});
I.setTouch(Nd.on);
var playerInput = {
  steer: 0,
  tuck: false,
  brake: false,
  jump: false,
  walk: false,
  run: false
};
var Pd = {
  throttle: false,
  reverse: false,
  steer: 0,
  handbrake: false,
  climb: false,
  sink: false
};
var Rd = [`male`, `female`, `classic`];
var zd = document.querySelector(`#fly-rider .riders`);
var Bd = [...zd.querySelectorAll(`[data-rider]`)];
var Vd = document.getElementById(`rider-status`);
var Hd = create_Hd(gameScope);
var Ud = 0;
var Wd = null;
for (let e of Bd) e.addEventListener(`click`, () => {
  e.dataset.rider !== Wd && selectRider(e.dataset.rider);
});
var Kd = new URLSearchParams(location.search);
var qd = document.getElementById(`wx-clock`);
var Jd = document.getElementById(`wx-phase`);
var Yd = document.getElementById(`wx-hour`);
var Xd = document.getElementById(`wx-run`);
var Zd = document.getElementById(`wx-aurora`);
var Qd = [...document.querySelectorAll(`#fly-weather [data-weather]`)];
var $d = {
  sunrise: It + .25,
  noon: 12,
  sunset: Lt - .35,
  night: 22.5
};
var ef = create_ef(gameScope);
var tf = [`time`, `weather`, `aurora`].some(e => Kd.has(e));
{
  let e = parseFloat(Kd.get(`time`)),
    t = [Kd.get(`weather`), z.prefs.weather].find(e => e === `changeable` || e in weatherPresets);
  t && weather.set(t);
  weather.aurora = Kd.has(`aurora`) ? ![`0`, `false`, `no`, `off`].includes(Kd.get(`aurora`)) : z.prefs.aurora === true;
  weather.settle();
  Number.isFinite(e) ? (weather.hour = MathUtils.euclideanModulo(e, 24), weather.running = false) : (Number.isFinite(z.prefs.hour) && (weather.hour = z.prefs.hour), weather.running = z.prefs.dayGoesBy !== false);
  Xd.checked = weather.running;
  Zd.checked = weather.aurora;
  ef();
}
var rf = false;
Yd.addEventListener(`pointerdown`, () => rf = true);
window.addEventListener(`pointerup`, () => rf = false);
Yd.addEventListener(`input`, () => {
  weather.hour = parseFloat(Yd.value) % 24;
  tf = false;
  nf();
});
for (let e of document.querySelectorAll(`#fly-weather [data-hour]`)) e.addEventListener(`click`, () => {
  weather.hour = $d[e.dataset.hour];
  tf = false;
  nf();
});
Xd.addEventListener(`change`, () => {
  weather.running = Xd.checked;
  tf = false;
  nf();
});
Zd.addEventListener(`change`, () => {
  weather.aurora = Zd.checked;
  tf = false;
  nf();
});
for (let e of Qd) e.addEventListener(`click`, () => {
  weather.set(e.dataset.weather);
  ef();
  tf = false;
  nf();
});
window.addEventListener(`pagehide`, nf);
bt(graphicsController, document.getElementById(`set-graphics`));
var U = new MouseLookController(Cu);
U.wanted = () => W === `ride` || W === `drive` || W === `horse` || W === `snowMonster` || W === `soak` || W === `swing` || W === `lift`;
{
  let e = document.getElementById(`set-mouselook`),
    t = t => {
      U.set(t);
      e.checked = t;
    };
  t(z.prefs.mouseLook === true);
  e.addEventListener(`change`, () => {
    t(e.checked);
    z.prefs.mouseLook = e.checked;
    z.save();
    e.checked && I.toast(`Click the view to look around · Esc frees the mouse`, 2600);
  });
}
{
  let e = document.getElementById(`set-realistic`),
    t = t => {
      physics.realistic = t;
      e.checked = t;
    };
  t(z.prefs.realistic === true);
  e.addEventListener(`change`, () => {
    t(e.checked);
    z.prefs.realistic = e.checked;
    z.save();
  });
}
selectRider([new URLSearchParams(location.search).get(`rider`), z.prefs.rider].find(e => Rd.includes(e)) ?? `male`);
var of = [`board`, `ski`];
var sf = [...document.querySelectorAll(`#fly-outfit [data-gear]`)];
for (let e of sf) e.addEventListener(`click`, () => cf(e.dataset.gear));
cf([new URLSearchParams(location.search).get(`gear`), z.prefs.gear].find(e => of.includes(e)) ?? `board`);
var lf = document.getElementById(`panel`);
var uf = document.getElementById(`panel-next`);
var df = null;
uf.addEventListener(`click`, () => {
  if (L.start(), df) {
    let e = df;
    df = null;
    e();
  }
});
var W = `title`;
var pf = 0;
var mf = false;
var hf = 0;
var G = new Vector3(Zu.dx, 0, Zu.dz);
physics.reset(Zu.x, Zu.z, Qu(Zu.dx, Zu.dz));
yd.restore(bd());
var _f = create__f(gameScope);
var vf = create_vf(gameScope);
var yf = create_yf(gameScope);
var bf = create_bf(gameScope);
var xf = new Vector3();
var K = new Vector3();
var q = new Vector3();
var J = new Vector3();
var Sf = create_Sf(gameScope);
var Cf = 0;
var wf = {
  dist: 2.4,
  up: .55,
  ahead: 1.6,
  look: .35
};
var Ef = new Vector3();
var Df = new Vector3();
var Of = create_Of(gameScope);
var jf = 0;
var Ff = 30;
var If = MathUtils.degToRad(24);
var Lf = createFloatingDioramaBase(groundHeightfield, pisteField, {
  ...worldMetadata.detail,
  treeline: treeLineElevation
});
var Rf = createTitleLogo();
var zf = createTitleSnow();
var Bf = createTransitionWipe(document.getElementById(`cloud`));
var Vf = document.getElementById(`title`);
scene.add(Lf, camera);
camera.add(Rf.group, zf.points);
var Hf = new Re();
window.addEventListener(`pointermove`, e => Hf.set(e.clientX / innerWidth * 2 - 1, 1 - e.clientY / innerHeight * 2));
document.getElementById(`begin`).addEventListener(`click`, () => Xf());
var Uf = .5;
var qf = 1;
var Yf = null;
var Zf = new Je();
new URLSearchParams(location.search).has(`notitle`) ? (W = `intro`, Kf(false), Rf.group.visible = false, zf.opacity = 0, Vf.classList.add(`hidden`), bf()) : Kf(true);
var ep = false;
var tp = false;
var np = false;
var rp = {
  yaw: 0,
  pitch: 0,
  slope: 0
};
var ip = .05;
var ap = .3;
var op = .13;
var sp = .1;
var cp = new Vector3();
var lp = new Vector3();
var up = new Vector3();
var dp = new Vector3();
var fp = new Vector3();
var pp = new Vector3();
var mp = create_mp(gameScope);
var gp = 1;
Eu.shadow.camera.layers.enable(gp);
var _p = new Te(new $e(.16, 12, 8), new it());
_p.layers.set(gp);
_p.castShadow = true;
_p.visible = false;
scene.add(_p);
var vp = new WeakMap();
var bp = false;
var wp = new T();
var Tp = new ze();
var Ep = new Vector3();
var Dp = new Vector3();
var Op = new Vector3();
var Ap = {
  slow: .22,
  fast: .12,
  brake: .04
};
var Np = new nt();
var Pp = 0;
var Y = 0;
var Fp = 1 / 120;
var Ip = new Vector3();
var Lp = new Vector3();
var Rp = new Vector3();
var Hp = new Vector3();
var Up = new Vector3();
var Gp = null;
var Kp = null;
var qp = null;
var Jp = false;
var Yp = false;
var Xp = false;
var Zp = null;
var Qp = false;
var $p = false;
var em = null;
var X = null;
var nm = new Vector3();
var am = create_am(gameScope);
var dm = create_dm(gameScope);
var fm = create_fm(gameScope);
var hm = Gu.home;
var Z = new Ir({
  hf: groundHeightfield,
  forest: forest,
  obstacles: physics.obstacles,
  home: hm,
  prints: sd
});
scene.add(Z.root, Z.spray.points, Z.ball.mesh);
Z.ready.catch(e => console.warn(`The dog failed to load; it stays out of the game.`, e));
var gm = {
  pos: physics.pos,
  vel: physics.vel,
  head: new Vector3(),
  facing: new Vector3(),
  crashed: false
};
var vm = 0;
var ym = -1e9;
var xm = new Vector3();
var Sm = new Vector3();
var wm = xi(worldMetadata.lifts);
var Tm = wm && new Si({
  hf: groundHeightfield,
  forest: forest,
  obstacles: physics.obstacles,
  den: wm,
  prints: sd
});
Tm && (scene.add(Tm.root, Tm.spray.points), Tm.ready.catch(e => console.warn(`The foxes failed to load; they stay out of the game.`, e)));
var Q = new dc({
  hf: groundHeightfield,
  route: $s(worldMetadata.runs),
  forest: forest,
  prints: sd,
  blocked: (e, t) => physics.obstacles.some(n => Sg(n, e, t) < 2.5)
});
new URLSearchParams(location.search);
scene.add(Q.root);
Q.ready.catch(e => console.warn(`Snow monster unavailable:`, e));
var Dm = new ar(3e3, {
  size: .28,
  gravity: 7,
  life: .9,
  scatter: .9,
  lift: 1.2,
  settle: true
});
Dm.points.material.onBeforeCompile = e => {
  e.vertexShader = e.vertexShader.replace(`#include <fog_vertex>`, `#include <fog_vertex>
gl_PointSize = min(gl_PointSize, 22.0);`);
};
scene.add(Dm.points);
var Om = [`LeftHand`, `RightHand`, `LeftFoot`, `RightFoot`];
var km = new Vector3();
var Am = new Vector3();
var jm = 0;
var Pm = false;
var Fm = 0;
var Im = 0;
var Lm = true;
var Rm = 0;
var zm = create_zm(gameScope);
var Bm = create_Bm(gameScope);
var Vm = create_Vm(gameScope);
var Um = new Vector3();
var Wm = new Vector3();
var Gm = new Vector3();
var Km = [new Vector3(), new Vector3()];
var qm = [new Vector3(), new Vector3()];
var Jm = new Vector3();
var Ym = new Vector3();
var ah = Ys(worldAssets.summitFrame);
var $ = ah && new Zs({
  hf: groundHeightfield,
  piste: pisteField,
  forest: forest,
  obstacles: physics.obstacles,
  lakes: lakes,
  home: ah,
  rider: rider,
  prints: sd
});
$ && (scene.add($.root, $.loose), $.ready.catch(e => console.warn(`The horse failed to load; it stays out of the game.`, e)));
var oh = -1e9;
var sh = create_sh(gameScope);
var fh = new Vector3();
var hh = {
  up: false,
  down: false,
  held: 0
};
var _h = 0;
var yh = {
  back: 6.5,
  up: 3,
  ahead: 2.5,
  look: 2.3,
  side: -.45
};
var Sh = new Mc(document.getElementById(`hud`));
var Ch = kc.map(e => {
  let t = qu.get(e.home),
    {
      seat: n
    } = t,
    r = new Oc(e, {
      cushion: n.cushion
    });
  return r.root.position.set(n.x, n.y, n.z), r.root.rotation.y = n.yaw, scene.add(r.root), r.ready.catch(t => console.warn(`${e.name} failed to load; they stay out of the game.`, t)), {
    npc: r,
    spec: e,
    room: t,
    in: false
  };
});
var wh = null;
var Th = new Vector3();
var Dh = Vu.byId.has(`summit:object-8`) ? new mn(Vu.byId.get(`summit:object-8`)) : null;
var Oh = create_Oh(gameScope);
var kh = create_kh(gameScope);
var Ah = null;
var Fh = new T();
var Ih = {
  x: 0,
  z: 0
};
var Rh = new tn(summitObjectLayout.objects.filter(e => e.kind === `prayerWheels`).map(e => Vu.byId.get(e.id)));
var zh = .9;
var Bh = 0;
var Vh = null;
var Hh = false;
var Uh = -1e9;
var Wh = new Vector3();
var Gh = new Vector3();
var Jh = new Vector3();
var Yh = new Vector3();
var Zh = false;
var $h = 0;
var ag = new Vector3();
var sg = .35;
var cg = null;
var lg = new T();
var fg = new Vector3(0, 1, 0);
var pg = new Vector3();
var gg = 0;
var _g = 0;
var vg = new Vector3();
var Cg = create_Cg(gameScope);
var wg = false;
var Tg = 0;
var Eg = 0;
var Dg = `swim`;
var Og = 0;
var kg = null;
var Fg = [`ledge`, `wade`, `sitDown`];
var Ig = {
  change: .7,
  wade: .85,
  stride: 1.4,
  turn: 1.1,
  sink: [1.2, 2.4]
};
var Lg = null;
var Hg = `<kbd>A</kbd><kbd>D</kbd> carve · <kbd>W</kbd> tuck or push · <kbd>R</kbd> back here`;
var Ug = `drag low on the left to carve · push up to tuck`;
var Kg = null;
var Yg = new Vector3();
var Xg = 0;
publishPlayerPosition(null);
var Qg = document.getElementById(`minimap-open`);
Qg.addEventListener(`mousedown`, e => e.preventDefault());
Qg.addEventListener(`click`, () => $g());
var t_ = document.querySelector(`#menu a.go`);
t_.addEventListener(`pointerdown`, r_);
t_.addEventListener(`focus`, r_);
var i_ = null;
t_.addEventListener(`click`, e => {
  e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), a_(n_(), `Back to the diorama`));
});
window.addEventListener(`pageshow`, e => {
  e.persisted && (Bf(0), l_(), consumeDioramaHandoff());
});
var s_ = `hemu-ski.resume`;
r_();
var d_ = readDestinationFromUrl();
var f_ = d_ && Wg(d_);
d_ && !f_ && console.warn(`No ${d_.kind} ${d_.id} on this map; starting at the top.`);
var p_ = l_();
var m_ = p_ && u_(p_);
(f_ || m_) && qg(f_ ?? $u, m_ ?? f_);
var h_ = {
  cam: null
};
window.__game = {
  footprints: sd,
  graphics: graphicsController,
  renderer: renderer,
  post: postProcessor,
  memory: () => ({
    profile: isMobileModelProfile ? `mobile` : `desktop`,
    loads: {
      ...modelLoadStats
    },
    ...xt(scene),
    nearTreeCount: forest.group.children.find(e => e.isBatchedMesh).instanceCount,
    nearTreeCapacity: forest.group.children.find(e => e.isBatchedMesh).maxInstanceCount
  }),
  npcs: Ch,
  dialogue: Sh,
  phys: physics,
  rider: rider,
  camera: camera,
  mouseLook: U,
  scene: scene,
  weather: weather,
  input: playerInput,
  startRun: startRun,
  debug: h_,
  cabin: rd,
  forest: forest,
  resolveDestination: Wg,
  bigMap: Ed,
  openMap: $g,
  whereabouts: Zg,
  gps: yd,
  vehicles: wd,
  getIn: Qh,
  getOut: tg,
  lakes: lakes,
  ripples: Wu,
  onsen: Bu,
  soak: jg,
  leavePool: Mg,
  swingSet: Dh,
  sitOnSwing: jh,
  getOffSwing: Nh,
  get onSwing() {
    return Ah;
  },
  dog: Z,
  petDog: Cm,
  throwSnowball: Xh,
  foxes: Tm,
  horse: $,
  mountHorse: uh,
  getOffHorse: dh,
  snowMonster: Q,
  catchSnowMonster: Zm,
  summit: Vu,
  wheels: Rh,
  turnWheel: Kh,
  sound: L,
  rides: ed,
  lifts: cableway,
  board: rm,
  get liftRide() {
    return X;
  },
  get car() {
    return B;
  },
  get state() {
    return W;
  },
  get spawn() {
    return $u;
  }
};
await finishLoading();
requestAnimationFrame(Bp);
Object.assign(window.__game, {
  // Explicit extension points for Snowline Roam. The recovered world stays intact.
  environment: { world: worldScene, ground: groundHeightfield, backdrop: Uu, sky: Xu, sun: Eu, water: Hu, snowEffects: [F.mesh, id.points, ad.points, od.mesh, sd.mesh] },
  prepareExperience: spawn => {
    Kf(false); Bf(0); Rf.group.visible = false; zf.opacity = 0;
    Vf.classList.add('hidden'); Vf.inert = true;
    W = 'intro';
    if (spawn) {
      $u = { ...spawn };
      physics.reset(spawn.x, spawn.z, Qu(spawn.dx, spawn.dz));
      G.set(spawn.dx, 0, spawn.dz); U.reset(); resetFollowCamera();
    }
  },
  beginExperience: (spawn = $u) => {
    L.start();
    Kf(false); Bf(0); Rf.group.visible = false; zf.opacity = 0;
    Vf.classList.add('hidden'); Vf.inert = true;
    $u = { ...spawn };
    startRun($u);
  },
  clearInput: () => { V.clear(); U.reset(); },
  leaveActivity: () => {
    if (Ed.isOpen) Ed.close();
    stopSpecialAction();
    if (X) { if (X.system) cm(X.ride, X.chair, X.system); else lm(X.ride); }
    if (B && !tg()) { B.phys.vel.set(0,0,0); B = null; rider.root.visible = true; }
    if (Ah) Nh();
    if (W === 'horse') dh();
    if (W === 'snowMonster') th();
    if (W === 'soak') Mg();
    rider.setLocomotion('ride'); U.force = false; I.prompt('');
  },
  syncRiderUI: () => { Hd(rider.modelId); Vd.textContent = '人物就绪 · F 切换步行与滑行'; },
  getCameraMode: () => ep ? 'firstPerson' : 'thirdPerson',
  setCameraMode: mode => {
    const desired = mode === 'firstPerson';
    if (!['firstPerson', 'thirdPerson'].includes(mode)) return false;
    if (desired && !mp()) return false;
    if (ep !== desired) hp();
    return ep === desired;
  },
  setRider: async id => {
    await selectRider(id);
    return rider.modelId === id;
  },
  setGear: gear => {
    if (physics.modeController?.surface && gear !== 'board') return false;
    cf(gear);
  },
  sound: L
});
window.__SNOWFIELD_GAME__ = window.__game;
