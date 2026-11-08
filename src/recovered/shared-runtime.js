/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/names-Bi68pVgn.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
import { $t as e, A as t, An as n, Ar as r, B as i, Bt as a, C as o, Cr as Vector3, Ct as c, D as l, Dr as u, E as d, Er as f, Et as p, F as m, Fr as h, G as g, Gn as _, I as v, In as y, Ir as b, It as x, Jn as S, K as C, Kn as w, Kt as T, L as E, Ln as D, Lr as O, Lt as k, M as ee, Mn as A, Mr as j, Mt as M, Nr as N, Nt as te, O as P, Or as ne, Ot as re, P as ie, Pr as ae, Pt as oe, R as F, Rn as se, Rr as I, Sr as L, St as ce, T as le, Tt as ue, U as de, Ut as fe, V as pe, Vt as me, Wn as he, X as ge, Xn as _e, Y as ve, Yt as ye, _ as be, a as xe, ar as Se, at as Ce, b as we, br as Te, bt as MathUtils, c as Ee, ct as De, d as z, dr as Oe, dt as ke, en as Ae, er as je, fr as Me, ft as Ne, g as B, gr as Pe, h as Fe, i as Ie, ir as Le, it as V, j as Re, jn as ze, jr as H, jt as U, k as Be, kr as Ve, l as W, lr as He, lt as Ue, m as We, mr as Ge, ot as Ke, p as qe, pr as Je, pt as Ye, q as Xe, qn as Ze, sr as Qe, tr as $e, u as et, ur as tt, ut as nt, vr as rt, w as it, wr as at, wt as ot, x as st, xr as ct, xt as G, y as K, yr as lt, zn as ut, zr as dt, zt as ft } from "../vendor/three/core.js";
import { n as pt, t as mt } from "../vendor/three/buffer-geometry-utils.js";
import { isMobileModelProfile, loadGLTF } from "./assets/model-loader.js";
import { toonUniforms, createToonMaterial } from "./render/toon-materials.js";
import { a as vt, i as yt, r as bt, t as xt } from "./rider/throw.js";
import { kt, At, J, Y, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr, rr, ir, ar, or, sr, cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, Er, Dr, Or, kr, Ar, jr, Mr, Nr, Pr, Fr, Ir, Lr, Rr, zr, Br, Vr, Hr, Ur, Wr, Gr, Kr, qr, Jr, Yr, Xr, Zr, Qr, $r, ei, ti, ni, ri, ii, ai, oi, si, ci, li, ui, di, fi, pi, mi, hi, gi, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi, ki, Ai, ji, Mi, Ni, Pi, Fi, Ii, Li, Ri, zi, Bi, Vi, Hi, Ui, Wi, Gi, WebGLRenderer } from "../vendor/three/webgl-renderer.js";
import { create_setLoadingProgress } from "./ui/loading.js";
import { create_setLoadingArrival } from "./ui/loading.js";
import { create_finishLoading } from "./ui/loading.js";
import { create_Ji } from "./render/graphics-settings.js";
import { create_graphicsSettingOptions } from "./render/graphics-settings.js";
import { create_Qi } from "./render/graphics-settings.js";
import { create_Dollari } from "./render/graphics-settings.js";
import { create_ea } from "./render/graphics-settings.js";
import { create_createGraphicsController } from "./render/graphics-settings.js";
import { create_liftEndpointPositions } from "./world/lifts.js";
import { create_summitObjectLayout } from "./world/locations.js";
import { create_findSummitObject } from "./world/locations.js";
import { create_decodeHeightU16 } from "./world/data.js";
import { create_loadOptionalWorldEdits } from "./world/data.js";
import { create_loadWorldData } from "./world/data.js";
import { create_Heightfield } from "./world/heightfield.js";
import { create_PisteDistanceField } from "./world/pistes.js";
import { create_serviceCentreLocations } from "./world/locations.js";
import { create_ga } from "./world/locations.js";
import { create_va } from "./world/locations.js";
import { create_Ca } from "./world/locations.js";
import { create_wa } from "./world/locations.js";
import { create_Ta } from "./world/terrain.js";
import { create_Ea } from "./world/terrain.js";
import { create_Da } from "./world/terrain.js";
import { create_Oa } from "./world/terrain.js";
import { create_ka } from "./world/terrain.js";
import { create_createTerrainLod } from "./world/terrain.js";
import { create_ja } from "./world/terrain.js";
import { create_Ma } from "./world/terrain.js";
import { create_Na } from "./world/terrain.js";
import { create_Pa } from "./world/terrain.js";
import { create_Fa } from "./world/terrain.js";
import { create_Ia } from "./world/terrain.js";
import { create_La } from "./world/terrain.js";
import { create_createBackdropTerrain } from "./world/terrain.js";
import { create_Ba } from "./world/terrain.js";
import { create_raisePisteBanks } from "./world/terrain.js";
import { create_Ha } from "./world/terrain.js";
import { create_Ua } from "./world/landmarks.js";
import { create_Wa } from "./world/landmarks.js";
import { create_Ga } from "./world/landmarks.js";
import { create_Ka } from "./world/landmarks.js";
import { create_qa } from "./world/landmarks.js";
import { create_Ja } from "./world/landmarks.js";
import { create_Ya } from "./world/structures.js";
import { create_X } from "./world/structures.js";
import { create_Qa } from "./world/structures.js";
import { create_Z } from "./world/structures.js";
import { create_Dollara } from "./world/structures.js";
import { create_eo } from "./world/structures.js";
import { create_to } from "./world/structures.js";
import { create_ao } from "./world/structures.js";
import { create_createYurtInteriorBounds } from "./world/structures.js";
import { create_lo } from "./world/structures.js";
import { create_uo } from "./world/structures.js";
import { create_mo } from "./world/structures.js";
import { create_ho } from "./world/structures.js";
import { create__o } from "./world/structures.js";
import { create_vo } from "./world/structures.js";
import { create_yo } from "./world/structures.js";
import { create_xo } from "./world/structures.js";
import { create_Co } from "./world/structures.js";
import { create_createCabinInteriorBounds } from "./world/structures.js";
import { create_To } from "./world/structures.js";
import { create_Do } from "./world/structures.js";
import { create_Oo } from "./world/structures.js";
import { create_ko } from "./world/structures.js";
import { create_Ao } from "./world/structures.js";
import { create_jo } from "./world/structures.js";
import { create_Mo } from "./world/structures.js";
import { create_No } from "./world/structures.js";
import { create_Po } from "./world/lifts.js";
import { create_Yo } from "./world/lifts.js";
import { create_Xo } from "./world/lifts.js";
import { create_Zo } from "./world/lifts.js";
import { create_Dollaro } from "./world/lifts.js";
import { create_es } from "./world/lifts.js";
import { create_ts } from "./world/lifts.js";
import { create_ns } from "./world/lifts.js";
import { create_rs } from "./world/lifts.js";
import { create_is } from "./world/lifts.js";
import { create_as } from "./world/lifts.js";
import { create_ds } from "./world/water.js";
import { create_ps } from "./world/water.js";
import { create_ms } from "./world/water.js";
import { create_hs } from "./world/water.js";
import { create_gs } from "./world/water.js";
import { create__s } from "./world/water.js";
import { create_lakeContainingPoint } from "./world/water.js";
import { create_ys } from "./world/water.js";
import { create_nearestLakeShore } from "./world/water.js";
import { create_Ss } from "./world/water.js";
import { create_ws } from "./world/water.js";
import { create_Ts } from "./world/water.js";
import { create_Es } from "./world/water.js";
import { create_Ds } from "./world/water.js";
import { create_ks } from "./world/water.js";
import { create_WaterRipples } from "./world/water.js";
import { create_Ls } from "./world/forest.js";
import { create_Rs } from "./world/forest.js";
import { create_zs } from "./world/forest.js";
import { create_Bs } from "./world/forest.js";
import { create_Vs } from "./world/forest.js";
import { create_loadTreeModelLibrary } from "./world/forest.js";
import { create_Us } from "./world/forest.js";
import { create_forestPlacementDefaults } from "./world/forest.js";
import { create_Gs } from "./world/forest.js";
import { create_Ys } from "./world/forest.js";
import { create_Xs } from "./world/forest.js";
import { create_Zs } from "./world/forest.js";
import { create_Qs } from "./world/forest.js";
import { create_Dollars } from "./world/forest.js";
import { create_ec } from "./world/forest.js";
import { create_placeForestTrees } from "./world/forest.js";
import { create_nc } from "./world/forest.js";
import { create_createForestBatches } from "./world/forest.js";
import { create_ic } from "./world/forest.js";
import { create_ac } from "./world/lifts.js";
import { create_oc } from "./world/lifts.js";
import { create_lc } from "./world/lifts.js";
import { create_crossedCircularDistance } from "./world/lifts.js";
import { create_dc } from "./world/lifts.js";
import { create_fc } from "./world/lifts.js";
import { create_pc } from "./world/lifts.js";
import { create_mc } from "./world/lifts.js";
import { create__c } from "./world/lifts.js";
import { create_Cc } from "./world/lifts.js";
import { create_wc } from "./world/lifts.js";
import { create_Tc } from "./world/lifts.js";
import { create_Ec } from "./world/lifts.js";
import { create_Dc } from "./world/lifts.js";
import { create_Pc } from "./world/lifts.js";
import { create_createCableway } from "./world/lifts.js";
import { create_Ic } from "./world/lifts.js";
import { create_zc } from "./world/lifts.js";
import { create_Bc } from "./world/lifts.js";
import { create_createRideGondola } from "./world/lifts.js";
import { create_Hc } from "./world/markers.js";
import { create_Uc } from "./world/structures.js";
import { create_Wc } from "./world/structures.js";
import { create_Gc } from "./world/structures.js";
import { create_rl } from "./world/onsen.js";
import { create_il } from "./world/onsen.js";
import { create_al } from "./world/onsen.js";
import { create_ol } from "./world/onsen.js";
import { create_sl } from "./world/onsen.js";
import { create_ll } from "./world/onsen.js";
import { create_ul } from "./world/onsen.js";
import { create_fl } from "./world/onsen.js";
import { create_pl } from "./world/onsen.js";
import { create_ml } from "./world/onsen.js";
import { create_yl } from "./world/onsen.js";
import { create_xl } from "./world/onsen.js";
import { create_wl } from "./world/vehicles.js";
import { create_Tl } from "./world/vehicles.js";
import { create_El } from "./world/vehicles.js";
import { create_Dl } from "./world/vehicles.js";
import { create_Al } from "./world/vehicles.js";
import { create_jl } from "./world/vehicles.js";
import { create_Ml } from "./world/vehicles.js";
import { create_Fl } from "./world/vehicles.js";
import { create_Il } from "./world/vehicles.js";
import { create_Ul } from "./world/vehicles.js";
import { create_Wl } from "./world/vehicles.js";
import { create_Zl } from "./world/vehicles.js";
import { create_Ql } from "./world/vehicles.js";
import { create_Dollarl } from "./world/vehicles.js";
import { create_tu } from "./world/vehicles.js";
import { create_mu } from "./world/vehicles.js";
import { create_gu } from "./world/vehicles.js";
import { create_Tu } from "./world/vehicles.js";
import { create_Eu } from "./world/vehicles.js";
import { create_Du } from "./world/vehicles.js";
import { create_Ou } from "./world/vehicles.js";
import { create_ku } from "./world/vehicles.js";
import { create_Nu } from "./world/vehicles.js";
import { create_Pu } from "./world/vehicles.js";
import { create_Fu } from "./world/vehicles.js";
import { create_zu } from "./world/vehicles.js";
import { create_Bu } from "./world/vehicles.js";
import { create_Vu } from "./world/vehicles.js";
import { create_Ju } from "./world/vehicles.js";
import { create_Yu } from "./world/vehicles.js";
import { create_Xu } from "./world/vehicles.js";
import { create_Zu } from "./world/vehicles.js";
import { create_prepareWorldAssets } from "./world/scene.js";
import { create_sampleRouteDistance } from "./world/scene.js";
import { create_rd } from "./world/scene.js";
import { create_createWorldScene } from "./world/scene.js";
import { create_defaultSkyPalette } from "./weather/sky.js";
import { create_createSkyDome } from "./weather/sky.js";
import { create_dd } from "./rider/pose.js";
import { create_fd } from "./rider/pose.js";
import { create_pd } from "./rider/pose.js";
import { create_gd } from "./rider/pose.js";
import { create__d } from "./rider/pose.js";
import { create_vd } from "./rider/pose.js";
import { create_crashPoseKeyframes } from "./rider/pose.js";
import { create_selectCrashMotion } from "./rider/pose.js";
import { create_Sd } from "./rider/pose.js";
import { create_Cd } from "./rider/pose.js";
import { create_Id } from "./rider/pose.js";
import { create_Ld } from "./rider/pose.js";
import { create_Rd } from "./rider/pose.js";
import { create_zd } from "./rider/pose.js";
import { create_Bd } from "./rider/pose.js";
import { create_Vd } from "./rider/pose.js";
import { create_Wd } from "./rider/pose.js";
import { create_Gd } from "./rider/pose.js";
import { create_Kd } from "./rider/pose.js";
import { create_Zd } from "./rider/pose.js";
import { create_Qd } from "./rider/pose.js";
import { create_Dollard } from "./rider/pose.js";
import { create_ef } from "./rider/pose.js";
import { create_tf } from "./rider/pose.js";
import { create_nf } from "./rider/pose.js";
import { create_lf } from "./rider/pose.js";
import { create_uf } from "./rider/pose.js";
import { create_df } from "./rider/pose.js";
import { create_ff } from "./rider/pose.js";
import { create_wf } from "./rider/pose.js";
import { create_Tf } from "./rider/pose.js";
import { create_Df } from "./rider/pose.js";
import { create_kf } from "./rider/pose.js";
import { create_Af } from "./rider/pose.js";
import { create_vitePreload } from "./rider/pose.js";
import { create_Mf } from "./rider/pose.js";
import { create_Nf } from "./rider/pose.js";
import { create_Pf } from "./rider/pose.js";
import { create_solveArmReachAngle } from "./rider/pose.js";
import { create_Dollar } from "./rider/pose.js";
import { create_Zf } from "./rider/pose.js";
import { create_Qf } from "./rider/pose.js";
import { create_Rider } from "./rider/rider.js";
import { create_OutlinePostProcessor } from "./render/postprocess.js";
import { create_ap } from "./ui/diorama-base.js";
import { create_op } from "./ui/diorama-base.js";
import { create_sp } from "./ui/diorama-base.js";
import { create_cp } from "./ui/diorama-base.js";
import { create_lp } from "./ui/diorama-base.js";
import { create_up } from "./ui/diorama-base.js";
import { create_createPedestalDioramaBase } from "./ui/diorama-base.js";
import { create_fp } from "./ui/diorama-base.js";
import { create_createFloatingDioramaBase } from "./ui/diorama-base.js";
import { create_mp } from "./ui/diorama-base.js";
import { create_hp } from "./ui/diorama-base.js";
import { create_gp } from "./ui/title.js";
import { create_wp } from "./ui/title.js";
import { create_Tp } from "./ui/title.js";
import { create_createTitleLogo } from "./ui/title.js";
import { create_createTitleSnow } from "./ui/title.js";
import { create_createTransitionWipe } from "./ui/title.js";
import { create_encodeDestination } from "./ui/navigation-data.js";
import { create_parseDestination } from "./ui/navigation-data.js";
import { create_readDestinationFromUrl } from "./ui/navigation-data.js";
import { create_findRunHighStart } from "./ui/navigation-data.js";
import { create_encodePlayerPosition } from "./ui/navigation-data.js";
import { create_parsePlayerPosition } from "./ui/navigation-data.js";
import { create_publishPlayerPosition } from "./ui/navigation-data.js";
import { create_subscribePlayerPosition } from "./ui/navigation-data.js";
import { create_writeDioramaHandoff } from "./ui/navigation-data.js";
import { create_consumeDioramaHandoff } from "./ui/navigation-data.js";
import { create_bilingualRunNames } from "./ui/navigation-data.js";
import { create_runDifficultyStyles } from "./ui/navigation-data.js";
import { create_Gp } from "./ui/navigation-data.js";
import { create_liftDisplayName } from "./ui/navigation-data.js";
/* Accessor context intentionally preserves original shared live state and writes. Feature factories only create declarations; game initialization below retains its original order. */
const worldScope = {
  get __vite__mapDeps() {
    return __vite__mapDeps;
  },
  get e() {
    return e;
  },
  get t() {
    return t;
  },
  get n() {
    return n;
  },
  get r() {
    return r;
  },
  get i() {
    return i;
  },
  get a() {
    return a;
  },
  get o() {
    return o;
  },
  get Vector3() {
    return Vector3;
  },
  get c() {
    return c;
  },
  get l() {
    return l;
  },
  get u() {
    return u;
  },
  get d() {
    return d;
  },
  get f() {
    return f;
  },
  get p() {
    return p;
  },
  get m() {
    return m;
  },
  get h() {
    return h;
  },
  get g() {
    return g;
  },
  get _() {
    return _;
  },
  get v() {
    return v;
  },
  get y() {
    return y;
  },
  get b() {
    return b;
  },
  get x() {
    return x;
  },
  get S() {
    return S;
  },
  get C() {
    return C;
  },
  get w() {
    return w;
  },
  get T() {
    return T;
  },
  get E() {
    return E;
  },
  get D() {
    return D;
  },
  get O() {
    return O;
  },
  get k() {
    return k;
  },
  get ee() {
    return ee;
  },
  get A() {
    return A;
  },
  get j() {
    return j;
  },
  get M() {
    return M;
  },
  get N() {
    return N;
  },
  get te() {
    return te;
  },
  get P() {
    return P;
  },
  get ne() {
    return ne;
  },
  get re() {
    return re;
  },
  get ie() {
    return ie;
  },
  get ae() {
    return ae;
  },
  get oe() {
    return oe;
  },
  get F() {
    return F;
  },
  get se() {
    return se;
  },
  get I() {
    return I;
  },
  get L() {
    return L;
  },
  get ce() {
    return ce;
  },
  get le() {
    return le;
  },
  get ue() {
    return ue;
  },
  get de() {
    return de;
  },
  get fe() {
    return fe;
  },
  get pe() {
    return pe;
  },
  get me() {
    return me;
  },
  get he() {
    return he;
  },
  get ge() {
    return ge;
  },
  get _e() {
    return _e;
  },
  get ve() {
    return ve;
  },
  get ye() {
    return ye;
  },
  get be() {
    return be;
  },
  get xe() {
    return xe;
  },
  get Se() {
    return Se;
  },
  get Ce() {
    return Ce;
  },
  get we() {
    return we;
  },
  get Te() {
    return Te;
  },
  get MathUtils() {
    return MathUtils;
  },
  get Ee() {
    return Ee;
  },
  get De() {
    return De;
  },
  get z() {
    return z;
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
  get Ne() {
    return Ne;
  },
  get B() {
    return B;
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
  get V() {
    return V;
  },
  get Re() {
    return Re;
  },
  get ze() {
    return ze;
  },
  get H() {
    return H;
  },
  get U() {
    return U;
  },
  get Be() {
    return Be;
  },
  get Ve() {
    return Ve;
  },
  get W() {
    return W;
  },
  get He() {
    return He;
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
  get ct() {
    return ct;
  },
  get G() {
    return G;
  },
  get K() {
    return K;
  },
  get lt() {
    return lt;
  },
  get ut() {
    return ut;
  },
  get dt() {
    return dt;
  },
  get ft() {
    return ft;
  },
  get pt() {
    return pt;
  },
  get mt() {
    return mt;
  },
  get isMobileModelProfile() {
    return isMobileModelProfile;
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
  get vt() {
    return vt;
  },
  get yt() {
    return yt;
  },
  get bt() {
    return bt;
  },
  get xt() {
    return xt;
  },
  get loadingElement() {
    return loadingElement;
  },
  set loadingElement(value) {
    loadingElement = value;
  },
  get loadingProgressElement() {
    return loadingProgressElement;
  },
  set loadingProgressElement(value) {
    loadingProgressElement = value;
  },
  get loadingFootsteps() {
    return loadingFootsteps;
  },
  set loadingFootsteps(value) {
    loadingFootsteps = value;
  },
  get loadingProgress() {
    return loadingProgress;
  },
  set loadingProgress(value) {
    loadingProgress = value;
  },
  get setLoadingProgress() {
    return setLoadingProgress;
  },
  set setLoadingProgress(value) {
    setLoadingProgress = value;
  },
  get setLoadingArrival() {
    return setLoadingArrival;
  },
  set setLoadingArrival(value) {
    setLoadingArrival = value;
  },
  get finishLoading() {
    return finishLoading;
  },
  set finishLoading(value) {
    finishLoading = value;
  },
  get kt() {
    return kt;
  },
  get At() {
    return At;
  },
  get J() {
    return J;
  },
  get Y() {
    return Y;
  },
  get jt() {
    return jt;
  },
  get Mt() {
    return Mt;
  },
  get Nt() {
    return Nt;
  },
  get Pt() {
    return Pt;
  },
  get Ft() {
    return Ft;
  },
  get It() {
    return It;
  },
  get Lt() {
    return Lt;
  },
  get Rt() {
    return Rt;
  },
  get zt() {
    return zt;
  },
  get Bt() {
    return Bt;
  },
  get Vt() {
    return Vt;
  },
  get Ht() {
    return Ht;
  },
  get Ut() {
    return Ut;
  },
  get Wt() {
    return Wt;
  },
  get Gt() {
    return Gt;
  },
  get Kt() {
    return Kt;
  },
  get qt() {
    return qt;
  },
  get Jt() {
    return Jt;
  },
  get Yt() {
    return Yt;
  },
  get Xt() {
    return Xt;
  },
  get Zt() {
    return Zt;
  },
  get Qt() {
    return Qt;
  },
  get $t() {
    return $t;
  },
  get en() {
    return en;
  },
  get tn() {
    return tn;
  },
  get nn() {
    return nn;
  },
  get rn() {
    return rn;
  },
  get an() {
    return an;
  },
  get on() {
    return on;
  },
  get sn() {
    return sn;
  },
  get cn() {
    return cn;
  },
  get ln() {
    return ln;
  },
  get un() {
    return un;
  },
  get dn() {
    return dn;
  },
  get fn() {
    return fn;
  },
  get pn() {
    return pn;
  },
  get mn() {
    return mn;
  },
  get hn() {
    return hn;
  },
  get gn() {
    return gn;
  },
  get _n() {
    return _n;
  },
  get vn() {
    return vn;
  },
  get yn() {
    return yn;
  },
  get bn() {
    return bn;
  },
  get xn() {
    return xn;
  },
  get Sn() {
    return Sn;
  },
  get Cn() {
    return Cn;
  },
  get wn() {
    return wn;
  },
  get Tn() {
    return Tn;
  },
  get En() {
    return En;
  },
  get Dn() {
    return Dn;
  },
  get On() {
    return On;
  },
  get kn() {
    return kn;
  },
  get An() {
    return An;
  },
  get jn() {
    return jn;
  },
  get Mn() {
    return Mn;
  },
  get Nn() {
    return Nn;
  },
  get Pn() {
    return Pn;
  },
  get Fn() {
    return Fn;
  },
  get In() {
    return In;
  },
  get Ln() {
    return Ln;
  },
  get Rn() {
    return Rn;
  },
  get zn() {
    return zn;
  },
  get Bn() {
    return Bn;
  },
  get Vn() {
    return Vn;
  },
  get Hn() {
    return Hn;
  },
  get Un() {
    return Un;
  },
  get Wn() {
    return Wn;
  },
  get Gn() {
    return Gn;
  },
  get Kn() {
    return Kn;
  },
  get qn() {
    return qn;
  },
  get Jn() {
    return Jn;
  },
  get Yn() {
    return Yn;
  },
  get Xn() {
    return Xn;
  },
  get Zn() {
    return Zn;
  },
  get Qn() {
    return Qn;
  },
  get $n() {
    return $n;
  },
  get er() {
    return er;
  },
  get tr() {
    return tr;
  },
  get nr() {
    return nr;
  },
  get rr() {
    return rr;
  },
  get ir() {
    return ir;
  },
  get ar() {
    return ar;
  },
  get or() {
    return or;
  },
  get sr() {
    return sr;
  },
  get cr() {
    return cr;
  },
  get lr() {
    return lr;
  },
  get ur() {
    return ur;
  },
  get dr() {
    return dr;
  },
  get fr() {
    return fr;
  },
  get pr() {
    return pr;
  },
  get mr() {
    return mr;
  },
  get hr() {
    return hr;
  },
  get gr() {
    return gr;
  },
  get _r() {
    return _r;
  },
  get vr() {
    return vr;
  },
  get yr() {
    return yr;
  },
  get br() {
    return br;
  },
  get xr() {
    return xr;
  },
  get Sr() {
    return Sr;
  },
  get Cr() {
    return Cr;
  },
  get wr() {
    return wr;
  },
  get Tr() {
    return Tr;
  },
  get Er() {
    return Er;
  },
  get Dr() {
    return Dr;
  },
  get Or() {
    return Or;
  },
  get kr() {
    return kr;
  },
  get Ar() {
    return Ar;
  },
  get jr() {
    return jr;
  },
  get Mr() {
    return Mr;
  },
  get Nr() {
    return Nr;
  },
  get Pr() {
    return Pr;
  },
  get Fr() {
    return Fr;
  },
  get Ir() {
    return Ir;
  },
  get Lr() {
    return Lr;
  },
  get Rr() {
    return Rr;
  },
  get zr() {
    return zr;
  },
  get Br() {
    return Br;
  },
  get Vr() {
    return Vr;
  },
  get Hr() {
    return Hr;
  },
  get Ur() {
    return Ur;
  },
  get Wr() {
    return Wr;
  },
  get Gr() {
    return Gr;
  },
  get Kr() {
    return Kr;
  },
  get qr() {
    return qr;
  },
  get Jr() {
    return Jr;
  },
  get Yr() {
    return Yr;
  },
  get Xr() {
    return Xr;
  },
  get Zr() {
    return Zr;
  },
  get Qr() {
    return Qr;
  },
  get $r() {
    return $r;
  },
  get ei() {
    return ei;
  },
  get ti() {
    return ti;
  },
  get ni() {
    return ni;
  },
  get ri() {
    return ri;
  },
  get ii() {
    return ii;
  },
  get ai() {
    return ai;
  },
  get oi() {
    return oi;
  },
  get si() {
    return si;
  },
  get ci() {
    return ci;
  },
  get li() {
    return li;
  },
  get ui() {
    return ui;
  },
  get di() {
    return di;
  },
  get fi() {
    return fi;
  },
  get pi() {
    return pi;
  },
  get mi() {
    return mi;
  },
  get hi() {
    return hi;
  },
  get gi() {
    return gi;
  },
  get _i() {
    return _i;
  },
  get vi() {
    return vi;
  },
  get yi() {
    return yi;
  },
  get bi() {
    return bi;
  },
  get xi() {
    return xi;
  },
  get Si() {
    return Si;
  },
  get Ci() {
    return Ci;
  },
  get wi() {
    return wi;
  },
  get Ti() {
    return Ti;
  },
  get Ei() {
    return Ei;
  },
  get Di() {
    return Di;
  },
  get Oi() {
    return Oi;
  },
  get ki() {
    return ki;
  },
  get Ai() {
    return Ai;
  },
  get ji() {
    return ji;
  },
  get Mi() {
    return Mi;
  },
  get Ni() {
    return Ni;
  },
  get Pi() {
    return Pi;
  },
  get Fi() {
    return Fi;
  },
  get Ii() {
    return Ii;
  },
  get Li() {
    return Li;
  },
  get Ri() {
    return Ri;
  },
  get zi() {
    return zi;
  },
  get Bi() {
    return Bi;
  },
  get Vi() {
    return Vi;
  },
  get Hi() {
    return Hi;
  },
  get Ui() {
    return Ui;
  },
  get Wi() {
    return Wi;
  },
  get Gi() {
    return Gi;
  },
  get WebGLRenderer() {
    return WebGLRenderer;
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
  get graphicsSettingOptions() {
    return graphicsSettingOptions;
  },
  set graphicsSettingOptions(value) {
    graphicsSettingOptions = value;
  },
  get graphicsModes() {
    return graphicsModes;
  },
  set graphicsModes(value) {
    graphicsModes = value;
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
  get createGraphicsController() {
    return createGraphicsController;
  },
  set createGraphicsController(value) {
    createGraphicsController = value;
  },
  get liftEndpointPositions() {
    return liftEndpointPositions;
  },
  set liftEndpointPositions(value) {
    liftEndpointPositions = value;
  },
  get summitObjectLayout() {
    return summitObjectLayout;
  },
  set summitObjectLayout(value) {
    summitObjectLayout = value;
  },
  get summitObjectIds() {
    return summitObjectIds;
  },
  set summitObjectIds(value) {
    summitObjectIds = value;
  },
  get findSummitObject() {
    return findSummitObject;
  },
  set findSummitObject(value) {
    findSummitObject = value;
  },
  get worldDataBase() {
    return worldDataBase;
  },
  set worldDataBase(value) {
    worldDataBase = value;
  },
  get decodeHeightU16() {
    return decodeHeightU16;
  },
  set decodeHeightU16(value) {
    decodeHeightU16 = value;
  },
  get editsDataDirectory() {
    return editsDataDirectory;
  },
  set editsDataDirectory(value) {
    editsDataDirectory = value;
  },
  get loadOptionalWorldEdits() {
    return loadOptionalWorldEdits;
  },
  set loadOptionalWorldEdits(value) {
    loadOptionalWorldEdits = value;
  },
  get loadWorldData() {
    return loadWorldData;
  },
  set loadWorldData(value) {
    loadWorldData = value;
  },
  get Heightfield() {
    return Heightfield;
  },
  set Heightfield(value) {
    Heightfield = value;
  },
  get PisteDistanceField() {
    return PisteDistanceField;
  },
  set PisteDistanceField(value) {
    PisteDistanceField = value;
  },
  get serviceCentreLocations() {
    return serviceCentreLocations;
  },
  set serviceCentreLocations(value) {
    serviceCentreLocations = value;
  },
  get hotSpringLocation() {
    return hotSpringLocation;
  },
  set hotSpringLocation(value) {
    hotSpringLocation = value;
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
  get createTerrainLod() {
    return createTerrainLod;
  },
  set createTerrainLod(value) {
    createTerrainLod = value;
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
  get createBackdropTerrain() {
    return createBackdropTerrain;
  },
  set createBackdropTerrain(value) {
    createBackdropTerrain = value;
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
  get raisePisteBanks() {
    return raisePisteBanks;
  },
  set raisePisteBanks(value) {
    raisePisteBanks = value;
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
  get X() {
    return X;
  },
  set X(value) {
    X = value;
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
  get Z() {
    return Z;
  },
  set Z(value) {
    Z = value;
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
  get createYurtInteriorBounds() {
    return createYurtInteriorBounds;
  },
  set createYurtInteriorBounds(value) {
    createYurtInteriorBounds = value;
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
  get createCabinInteriorBounds() {
    return createCabinInteriorBounds;
  },
  set createCabinInteriorBounds(value) {
    createCabinInteriorBounds = value;
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
  get lakeContainingPoint() {
    return lakeContainingPoint;
  },
  set lakeContainingPoint(value) {
    lakeContainingPoint = value;
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
  get nearestLakeShore() {
    return nearestLakeShore;
  },
  set nearestLakeShore(value) {
    nearestLakeShore = value;
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
  get WaterRipples() {
    return WaterRipples;
  },
  set WaterRipples(value) {
    WaterRipples = value;
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
  get loadTreeModelLibrary() {
    return loadTreeModelLibrary;
  },
  set loadTreeModelLibrary(value) {
    loadTreeModelLibrary = value;
  },
  get Us() {
    return Us;
  },
  set Us(value) {
    Us = value;
  },
  get forestPlacementDefaults() {
    return forestPlacementDefaults;
  },
  set forestPlacementDefaults(value) {
    forestPlacementDefaults = value;
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
  get placeForestTrees() {
    return placeForestTrees;
  },
  set placeForestTrees(value) {
    placeForestTrees = value;
  },
  get nc() {
    return nc;
  },
  set nc(value) {
    nc = value;
  },
  get createForestBatches() {
    return createForestBatches;
  },
  set createForestBatches(value) {
    createForestBatches = value;
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
  get crossedCircularDistance() {
    return crossedCircularDistance;
  },
  set crossedCircularDistance(value) {
    crossedCircularDistance = value;
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
  get Nc() {
    return Nc;
  },
  set Nc(value) {
    Nc = value;
  },
  get Pc() {
    return Pc;
  },
  set Pc(value) {
    Pc = value;
  },
  get createCableway() {
    return createCableway;
  },
  set createCableway(value) {
    createCableway = value;
  },
  get Ic() {
    return Ic;
  },
  set Ic(value) {
    Ic = value;
  },
  get Lc() {
    return Lc;
  },
  set Lc(value) {
    Lc = value;
  },
  get Rc() {
    return Rc;
  },
  set Rc(value) {
    Rc = value;
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
  get createRideGondola() {
    return createRideGondola;
  },
  set createRideGondola(value) {
    createRideGondola = value;
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
  get Wc() {
    return Wc;
  },
  set Wc(value) {
    Wc = value;
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
  get dl() {
    return dl;
  },
  set dl(value) {
    dl = value;
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
  get Tl() {
    return Tl;
  },
  set Tl(value) {
    Tl = value;
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
  get fu() {
    return fu;
  },
  set fu(value) {
    fu = value;
  },
  get pu() {
    return pu;
  },
  set pu(value) {
    pu = value;
  },
  get mu() {
    return mu;
  },
  set mu(value) {
    mu = value;
  },
  get hu() {
    return hu;
  },
  set hu(value) {
    hu = value;
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
  get wu() {
    return wu;
  },
  set wu(value) {
    wu = value;
  },
  get Tu() {
    return Tu;
  },
  set Tu(value) {
    Tu = value;
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
  get Ou() {
    return Ou;
  },
  set Ou(value) {
    Ou = value;
  },
  get ku() {
    return ku;
  },
  set ku(value) {
    ku = value;
  },
  get Au() {
    return Au;
  },
  set Au(value) {
    Au = value;
  },
  get ju() {
    return ju;
  },
  set ju(value) {
    ju = value;
  },
  get Mu() {
    return Mu;
  },
  set Mu(value) {
    Mu = value;
  },
  get Nu() {
    return Nu;
  },
  set Nu(value) {
    Nu = value;
  },
  get Pu() {
    return Pu;
  },
  set Pu(value) {
    Pu = value;
  },
  get Fu() {
    return Fu;
  },
  set Fu(value) {
    Fu = value;
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
  get Ru() {
    return Ru;
  },
  set Ru(value) {
    Ru = value;
  },
  get zu() {
    return zu;
  },
  set zu(value) {
    zu = value;
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
  get treeLineElevation() {
    return treeLineElevation;
  },
  set treeLineElevation(value) {
    treeLineElevation = value;
  },
  get defaultRunName() {
    return defaultRunName;
  },
  set defaultRunName(value) {
    defaultRunName = value;
  },
  get prepareWorldAssets() {
    return prepareWorldAssets;
  },
  set prepareWorldAssets(value) {
    prepareWorldAssets = value;
  },
  get sampleRouteDistance() {
    return sampleRouteDistance;
  },
  set sampleRouteDistance(value) {
    sampleRouteDistance = value;
  },
  get rd() {
    return rd;
  },
  set rd(value) {
    rd = value;
  },
  get createWorldScene() {
    return createWorldScene;
  },
  set createWorldScene(value) {
    createWorldScene = value;
  },
  get defaultSkyPalette() {
    return defaultSkyPalette;
  },
  set defaultSkyPalette(value) {
    defaultSkyPalette = value;
  },
  get createSkyDome() {
    return createSkyDome;
  },
  set createSkyDome(value) {
    createSkyDome = value;
  },
  get crashDuration() {
    return crashDuration;
  },
  set crashDuration(value) {
    crashDuration = value;
  },
  get shakeOffDuration() {
    return shakeOffDuration;
  },
  set shakeOffDuration(value) {
    shakeOffDuration = value;
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
  get dd() {
    return dd;
  },
  set dd(value) {
    dd = value;
  },
  get fd() {
    return fd;
  },
  set fd(value) {
    fd = value;
  },
  get pd() {
    return pd;
  },
  set pd(value) {
    pd = value;
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
  get _d() {
    return _d;
  },
  set _d(value) {
    _d = value;
  },
  get vd() {
    return vd;
  },
  set vd(value) {
    vd = value;
  },
  get crashPoseKeyframes() {
    return crashPoseKeyframes;
  },
  set crashPoseKeyframes(value) {
    crashPoseKeyframes = value;
  },
  get selectCrashMotion() {
    return selectCrashMotion;
  },
  set selectCrashMotion(value) {
    selectCrashMotion = value;
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
  get Ed() {
    return Ed;
  },
  set Ed(value) {
    Ed = value;
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
  get kd() {
    return kd;
  },
  set kd(value) {
    kd = value;
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
  get Pd() {
    return Pd;
  },
  set Pd(value) {
    Pd = value;
  },
  get Fd() {
    return Fd;
  },
  set Fd(value) {
    Fd = value;
  },
  get Id() {
    return Id;
  },
  set Id(value) {
    Id = value;
  },
  get Ld() {
    return Ld;
  },
  set Ld(value) {
    Ld = value;
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
  get Gd() {
    return Gd;
  },
  set Gd(value) {
    Gd = value;
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
  get gf() {
    return gf;
  },
  set gf(value) {
    gf = value;
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
  get Tf() {
    return Tf;
  },
  set Tf(value) {
    Tf = value;
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
  get Af() {
    return Af;
  },
  set Af(value) {
    Af = value;
  },
  get vitePreload() {
    return vitePreload;
  },
  set vitePreload(value) {
    vitePreload = value;
  },
  get Mf() {
    return Mf;
  },
  set Mf(value) {
    Mf = value;
  },
  get Q() {
    return Q;
  },
  set Q(value) {
    Q = value;
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
  get solveArmReachAngle() {
    return solveArmReachAngle;
  },
  set solveArmReachAngle(value) {
    solveArmReachAngle = value;
  },
  get $() {
    return $;
  },
  set $(value) {
    $ = value;
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
  get Rider() {
    return Rider;
  },
  set Rider(value) {
    Rider = value;
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
  get OutlinePostProcessor() {
    return OutlinePostProcessor;
  },
  set OutlinePostProcessor(value) {
    OutlinePostProcessor = value;
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
  get createPedestalDioramaBase() {
    return createPedestalDioramaBase;
  },
  set createPedestalDioramaBase(value) {
    createPedestalDioramaBase = value;
  },
  get fp() {
    return fp;
  },
  set fp(value) {
    fp = value;
  },
  get createFloatingDioramaBase() {
    return createFloatingDioramaBase;
  },
  set createFloatingDioramaBase(value) {
    createFloatingDioramaBase = value;
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
  get createTitleLogo() {
    return createTitleLogo;
  },
  set createTitleLogo(value) {
    createTitleLogo = value;
  },
  get createTitleSnow() {
    return createTitleSnow;
  },
  set createTitleSnow(value) {
    createTitleSnow = value;
  },
  get createTransitionWipe() {
    return createTransitionWipe;
  },
  set createTransitionWipe(value) {
    createTransitionWipe = value;
  },
  get kp() {
    return kp;
  },
  set kp(value) {
    kp = value;
  },
  get encodeDestination() {
    return encodeDestination;
  },
  set encodeDestination(value) {
    encodeDestination = value;
  },
  get parseDestination() {
    return parseDestination;
  },
  set parseDestination(value) {
    parseDestination = value;
  },
  get readDestinationFromUrl() {
    return readDestinationFromUrl;
  },
  set readDestinationFromUrl(value) {
    readDestinationFromUrl = value;
  },
  get findRunHighStart() {
    return findRunHighStart;
  },
  set findRunHighStart(value) {
    findRunHighStart = value;
  },
  get Pp() {
    return Pp;
  },
  set Pp(value) {
    Pp = value;
  },
  get Fp() {
    return Fp;
  },
  set Fp(value) {
    Fp = value;
  },
  get encodePlayerPosition() {
    return encodePlayerPosition;
  },
  set encodePlayerPosition(value) {
    encodePlayerPosition = value;
  },
  get parsePlayerPosition() {
    return parsePlayerPosition;
  },
  set parsePlayerPosition(value) {
    parsePlayerPosition = value;
  },
  get publishPlayerPosition() {
    return publishPlayerPosition;
  },
  set publishPlayerPosition(value) {
    publishPlayerPosition = value;
  },
  get subscribePlayerPosition() {
    return subscribePlayerPosition;
  },
  set subscribePlayerPosition(value) {
    subscribePlayerPosition = value;
  },
  get Bp() {
    return Bp;
  },
  set Bp(value) {
    Bp = value;
  },
  get writeDioramaHandoff() {
    return writeDioramaHandoff;
  },
  set writeDioramaHandoff(value) {
    writeDioramaHandoff = value;
  },
  get consumeDioramaHandoff() {
    return consumeDioramaHandoff;
  },
  set consumeDioramaHandoff(value) {
    consumeDioramaHandoff = value;
  },
  get bilingualRunNames() {
    return bilingualRunNames;
  },
  set bilingualRunNames(value) {
    bilingualRunNames = value;
  },
  get runDifficultyStyles() {
    return runDifficultyStyles;
  },
  set runDifficultyStyles(value) {
    runDifficultyStyles = value;
  },
  get Gp() {
    return Gp;
  },
  set Gp(value) {
    Gp = value;
  },
  get liftDisplayName() {
    return liftDisplayName;
  },
  set liftDisplayName(value) {
    liftDisplayName = value;
  }
};
var setLoadingProgress = create_setLoadingProgress(worldScope);
var setLoadingArrival = create_setLoadingArrival(worldScope);
var finishLoading = create_finishLoading(worldScope);
var Qi = create_Qi(worldScope);
var $i = create_Dollari(worldScope);
var ea = create_ea(worldScope);
var createGraphicsController = create_createGraphicsController(worldScope);
var liftEndpointPositions = create_liftEndpointPositions(worldScope);
var decodeHeightU16 = create_decodeHeightU16(worldScope);
var loadOptionalWorldEdits = create_loadOptionalWorldEdits(worldScope);
var loadWorldData = create_loadWorldData(worldScope);
var ga = create_ga(worldScope);
var va = create_va(worldScope);
var Ca = create_Ca(worldScope);
var wa = create_wa(worldScope);
var Ta = create_Ta(worldScope);
var Da = create_Da(worldScope);
var Oa = create_Oa(worldScope);
var ka = create_ka(worldScope);
var createTerrainLod = create_createTerrainLod(worldScope);
var ja = create_ja(worldScope);
var Ma = create_Ma(worldScope);
var Na = create_Na(worldScope);
var Pa = create_Pa(worldScope);
var Fa = create_Fa(worldScope);
var Ia = create_Ia(worldScope);
var La = create_La(worldScope);
var createBackdropTerrain = create_createBackdropTerrain(worldScope);
var raisePisteBanks = create_raisePisteBanks(worldScope);
var Ua = create_Ua(worldScope);
var Ka = create_Ka(worldScope);
var qa = create_qa(worldScope);
var Ja = create_Ja(worldScope);
var Z = create_Z(worldScope);
var $a = create_Dollara(worldScope);
var to = create_to(worldScope);
var ao = create_ao(worldScope);
var createYurtInteriorBounds = create_createYurtInteriorBounds(worldScope);
var uo = create_uo(worldScope);
var mo = create_mo(worldScope);
var ho = create_ho(worldScope);
var _o = create__o(worldScope);
var vo = create_vo(worldScope);
var yo = create_yo(worldScope);
var createCabinInteriorBounds = create_createCabinInteriorBounds(worldScope);
var To = create_To(worldScope);
var Do = create_Do(worldScope);
var Oo = create_Oo(worldScope);
var ko = create_ko(worldScope);
var jo = create_jo(worldScope);
var Mo = create_Mo(worldScope);
var No = create_No(worldScope);
var Po = create_Po(worldScope);
var Xo = create_Xo(worldScope);
var Zo = create_Zo(worldScope);
var $o = create_Dollaro(worldScope);
var ts = create_ts(worldScope);
var ns = create_ns(worldScope);
var rs = create_rs(worldScope);
var is = create_is(worldScope);
var as = create_as(worldScope);
var ds = create_ds(worldScope);
var ms = create_ms(worldScope);
var hs = create_hs(worldScope);
var gs = create_gs(worldScope);
var _s = create__s(worldScope);
var lakeContainingPoint = create_lakeContainingPoint(worldScope);
var ys = create_ys(worldScope);
var nearestLakeShore = create_nearestLakeShore(worldScope);
var Ss = create_Ss(worldScope);
var ws = create_ws(worldScope);
var Ts = create_Ts(worldScope);
var Es = create_Es(worldScope);
var Ds = create_Ds(worldScope);
var ks = create_ks(worldScope);
var Rs = create_Rs(worldScope);
var zs = create_zs(worldScope);
var Bs = create_Bs(worldScope);
var Vs = create_Vs(worldScope);
var loadTreeModelLibrary = create_loadTreeModelLibrary(worldScope);
var Us = create_Us(worldScope);
var Gs = create_Gs(worldScope);
var Ys = create_Ys(worldScope);
var Xs = create_Xs(worldScope);
var Zs = create_Zs(worldScope);
var Qs = create_Qs(worldScope);
var $s = create_Dollars(worldScope);
var ec = create_ec(worldScope);
var placeForestTrees = create_placeForestTrees(worldScope);
var nc = create_nc(worldScope);
var createForestBatches = create_createForestBatches(worldScope);
var ic = create_ic(worldScope);
var ac = create_ac(worldScope);
var oc = create_oc(worldScope);
var lc = create_lc(worldScope);
var crossedCircularDistance = create_crossedCircularDistance(worldScope);
var dc = create_dc(worldScope);
var mc = create_mc(worldScope);
var Cc = create_Cc(worldScope);
var wc = create_wc(worldScope);
var Tc = create_Tc(worldScope);
var Ec = create_Ec(worldScope);
var Dc = create_Dc(worldScope);
var Pc = create_Pc(worldScope);
var createCableway = create_createCableway(worldScope);
var Ic = create_Ic(worldScope);
var zc = create_zc(worldScope);
var Bc = create_Bc(worldScope);
var createRideGondola = create_createRideGondola(worldScope);
var Hc = create_Hc(worldScope);
var Uc = create_Uc(worldScope);
var Wc = create_Wc(worldScope);
var Gc = create_Gc(worldScope);
var rl = create_rl(worldScope);
var il = create_il(worldScope);
var al = create_al(worldScope);
var ol = create_ol(worldScope);
var sl = create_sl(worldScope);
var ll = create_ll(worldScope);
var ul = create_ul(worldScope);
var fl = create_fl(worldScope);
var pl = create_pl(worldScope);
var ml = create_ml(worldScope);
var yl = create_yl(worldScope);
var xl = create_xl(worldScope);
var Tl = create_Tl(worldScope);
var El = create_El(worldScope);
var Dl = create_Dl(worldScope);
var Ml = create_Ml(worldScope);
var Ql = create_Ql(worldScope);
var $l = create_Dollarl(worldScope);
var Tu = create_Tu(worldScope);
var Eu = create_Eu(worldScope);
var Ou = create_Ou(worldScope);
var Nu = create_Nu(worldScope);
var Pu = create_Pu(worldScope);
var Fu = create_Fu(worldScope);
var zu = create_zu(worldScope);
var Bu = create_Bu(worldScope);
var Xu = create_Xu(worldScope);
var prepareWorldAssets = create_prepareWorldAssets(worldScope);
var sampleRouteDistance = create_sampleRouteDistance(worldScope);
var rd = create_rd(worldScope);
var createWorldScene = create_createWorldScene(worldScope);
var createSkyDome = create_createSkyDome(worldScope);
var selectCrashMotion = create_selectCrashMotion(worldScope);
var Cd = create_Cd(worldScope);
var Id = create_Id(worldScope);
var Ld = create_Ld(worldScope);
var Rd = create_Rd(worldScope);
var zd = create_zd(worldScope);
var Bd = create_Bd(worldScope);
var Vd = create_Vd(worldScope);
var Wd = create_Wd(worldScope);
var Gd = create_Gd(worldScope);
var Zd = create_Zd(worldScope);
var Qd = create_Qd(worldScope);
var $d = create_Dollard(worldScope);
var ef = create_ef(worldScope);
var Nf = create_Nf(worldScope);
var Pf = create_Pf(worldScope);
var solveArmReachAngle = create_solveArmReachAngle(worldScope);
var $ = create_Dollar(worldScope);
var Qf = create_Qf(worldScope);
var ap = create_ap(worldScope);
var op = create_op(worldScope);
var sp = create_sp(worldScope);
var cp = create_cp(worldScope);
var lp = create_lp(worldScope);
var up = create_up(worldScope);
var createPedestalDioramaBase = create_createPedestalDioramaBase(worldScope);
var fp = create_fp(worldScope);
var createFloatingDioramaBase = create_createFloatingDioramaBase(worldScope);
var mp = create_mp(worldScope);
var hp = create_hp(worldScope);
var wp = create_wp(worldScope);
var Tp = create_Tp(worldScope);
var createTitleLogo = create_createTitleLogo(worldScope);
var createTitleSnow = create_createTitleSnow(worldScope);
var createTransitionWipe = create_createTransitionWipe(worldScope);
var encodeDestination = create_encodeDestination(worldScope);
var parseDestination = create_parseDestination(worldScope);
var findRunHighStart = create_findRunHighStart(worldScope);
var encodePlayerPosition = create_encodePlayerPosition(worldScope);
var parsePlayerPosition = create_parsePlayerPosition(worldScope);
var publishPlayerPosition = create_publishPlayerPosition(worldScope);
var subscribePlayerPosition = create_subscribePlayerPosition(worldScope);
var writeDioramaHandoff = create_writeDioramaHandoff(worldScope);
var consumeDioramaHandoff = create_consumeDioramaHandoff(worldScope);
var liftDisplayName = create_liftDisplayName(worldScope);
const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = ["./rider/model-lazy.js", "./rider/model.js", "../vendor/three/core.js", "./assets/model-loader.js", "../vendor/three/buffer-geometry-utils.js", "./render/toon-materials.js", "./rider/throw.js", "./rider/gear-mount.js"])) => i.map(i => d[i]);
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver(e => {
    for (let t of e) if (t.type === `childList`) for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function t(e) {
    let t = {};
    return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), t.credentials = e.crossOrigin === `use-credentials` ? `include` : e.crossOrigin === `anonymous` ? `omit` : `same-origin`, t;
  }
  function n(e) {
    if (e.ep) return;
    e.ep = true;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var loadingElement = document.getElementById(`loading`);
var loadingProgressElement = loadingElement.querySelector(`[role="progressbar"]`);
var loadingFootsteps = [...loadingElement.querySelectorAll(`.step`)];
var loadingProgress = 0;
var qi = `hemu-ski.graphics`;
var Ji = create_Ji(worldScope);
var Yi = {
  fps: 30,
  scale: 1,
  msaa: 2,
  shadowSize: 1024,
  shadows: true,
  outline: `medium`
};
var graphicsSettingOptions = create_graphicsSettingOptions(worldScope);
var graphicsModes = [`auto`, `low`, `medium`, `high`, `custom`];
var summitObjectLayout = create_summitObjectLayout(worldScope);
var summitObjectIds = summitObjectLayout.objects.map(e => e.id);
var findSummitObject = create_findSummitObject(worldScope);
var worldDataBase = `./data/`;
var editsDataDirectory = `edits/`;
var Heightfield = create_Heightfield(worldScope);
var PisteDistanceField = create_PisteDistanceField(worldScope);
var serviceCentreLocations = create_serviceCentreLocations(worldScope);
var hotSpringLocation = {
  zh: `温泉`,
  en: `Hot spring`,
  x: 638,
  z: 4536,
  faceTo: [710, 4410],
  clearing: 10
};
var ha = {
  pickup: [-16, 33],
  snowmobile: [28, 31],
  jetson: [4, 52]
};
var _a = summitObjectLayout.origin;
var ya = [...serviceCentreLocations.map(e => [`lodge:${e.id}`, e]), [`onsen`, hotSpringLocation]];
var ba = new Map(ya.map(([e, t]) => [e, {
  x: t.x,
  z: t.z,
  faceTo: [...t.faceTo]
}]));
var xa = [...ya.map(([e]) => e), ...Object.keys(ha).map(e => `vehicle:${e}`), ...summitObjectIds];
var Sa = {};
var Ea = create_Ea(worldScope);
var za = {
  height: [1.4, 2.5],
  width: [6, 10],
  fade: [12, 45],
  ends: 40
};
var Ba = create_Ba(worldScope);
var Ha = create_Ha(worldScope);
var Wa = create_Wa(worldScope);
var Ga = create_Ga(worldScope);
var Ya = create_Ya(worldScope);
var X = create_X(worldScope);
var Xa = createToonMaterial({
  vertexColors: true,
  side: 2
}, {
  hatch: 0
});
var Za = createToonMaterial({
  vertexColors: true,
  flatShading: true
}, {
  rim: 1
});
var Qa = create_Qa(worldScope);
var eo = create_eo(worldScope);
var no = {
  R: 3.2,
  wall: 2.1,
  door: [.62, 1.95],
  gap: .85,
  seat: [0, -1.75]
};
var ro = createToonMaterial({
  color: `#f2eee4`,
  side: 2
}, {
  rim: 0
});
var io = createToonMaterial({
  color: `#e6dfd0`,
  side: 2
}, {
  rim: 0
});
var oo = Ya(`#d8a73e`);
var so = Ya(`#2f5a8a`);
var lo = create_lo(worldScope);
var fo = {
  scale: 5.5,
  posts: .448,
  depth: .027,
  top: .526
};
var po = null;
var go = [`#2f6fc0`, `#f4f2ea`, `#cf3b2e`, `#3f9a52`, `#f0c23a`].map(e => new K(e));
var bo = {
  scale: 10,
  floor: .042,
  room: [-.42, .436, -.25, .16],
  door: [-.09, .136]
};
var xo = create_xo(worldScope);
var So = {
  home: [.26, .04],
  roam: .16,
  via: [.023, .5],
  door: [.023, .09]
};
var Co = create_Co(worldScope);
var Eo = 1;
var Ao = create_Ao(worldScope);
var Fo = [`6号索道`, `7号索道`];
var Io = {
  mouth: 9,
  floor: 1.3,
  wheel: {
    u: 1,
    x: .2,
    r: 1.75
  }
};
var Lo = 4.11;
var Ro = 3;
var zo = MathUtils.degToRad;
var Bo = zo(1);
var Vo = zo(15);
var Ho = [12, 8, 25];
var Uo = [28, 20, 50];
var Wo = 8;
var Go = [130, 40, 450];
var Ko = 6.5;
var qo = 40;
var Jo = MathUtils.degToRad(12);
var Yo = create_Yo(worldScope);
var Qo = 200;
var es = create_es(worldScope);
var os = {
  smooth: 3,
  slope: .12,
  straight: 12,
  depth: 3,
  bank: .02,
  shore: 50,
  pad: 5
};
var ss = [[0, 9, .03, 0], [.45, 5.5, .02, 1.7], [-.55, 3.7, .012, 4.1], [.18, 14, .022, 2.6]];
var cs = Math.atan2(.38, .92);
var ls = ss.map(([e, t, n, r]) => {
  let i = 2 * Math.PI / t,
    a = cs + e;
  return {
    kx: Math.cos(a) * i,
    kz: Math.sin(a) * i,
    w: Math.sqrt(9.81 * i),
    a: n,
    p: r
  };
});
var us = ss.reduce((e, t) => e + t[2], 0);
var fs = {
  shallow: `#86cfc9`,
  deep: `#3f8ea6`,
  sky: `#c4e4ea`,
  ripple: `#e6f5f2`,
  foam: `#fbfaf4`,
  ink: `#3d6f7a`
};
var ps = create_ps(worldScope);
var bs = {
  lake: null,
  d: 0,
  nx: 0,
  nz: 0
};
var Cs = 64;
var Os = `
float wHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float wNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(wHash(i), wHash(i + vec2(1, 0)), u.x), mix(wHash(i + vec2(0, 1)), wHash(i + vec2(1, 1)), u.x), u.y);
}
float waves(vec2 p, float t) {
  return ${ls.map(e => `${e.a.toFixed(4)} * sin(dot(vec2(${e.kx.toFixed(5)}, ${e.kz.toFixed(5)}), p) - ${e.w.toFixed(5)} * t + ${e.p.toFixed(3)})`).join(`
    + `)};
}
`;
var WaterRipples = create_WaterRipples(worldScope);
var js = new K(`#4d7560`);
var Ms = new K(`#3d6352`);
var Ns = new K(`#f6f7f2`);
var Ps = new K(`#6b5248`);
var Fs = 11.8;
var Is = [`spruce`, `larch`, `pine`, `birch`];
var Ls = create_Ls(worldScope);
var forestPlacementDefaults = create_forestPlacementDefaults(worldScope);
var Ks = 19;
var qs = 9;
var Js = MathUtils.smoothstep;
var sc = new Vector3();
var cc = new Vector3();
var fc = create_fc(worldScope);
var pc = create_pc(worldScope);
var hc = {
  "6号索道": `gray`,
  "2号索道": `yellow`
};
var gc = {
  red: null,
  yellow: `#f0c24a`,
  gray: `#aeb5b8`
};
var _c = create__c(worldScope);
var vc = 4.2;
var yc = 3;
var bc = 18;
var xc = `./models/lifts/`;
var Sc = null;
var Oc = 6;
var kc = 14;
var Ac = 5;
var jc = `./models/lift-pylon/lift-pylon-no-sign-v03.glb`;
var Mc = createToonMaterial({
  vertexColors: true
}, {
  hatch: 0,
  rim: 0
});
var Nc;
var Lc = createToonMaterial({
  vertexColors: true
}, {
  rim: 1
});
var Rc = new Map();
var Kc = `./models/onsen/`;
var qc = 7.2;
var Jc = 6;
var Yc = .66;
var Xc = 3;
var Zc = {
  x: -.04,
  y: .48,
  from: .1,
  lip: .488
};
var Qc = {
  x: 3.3,
  z: .12
};
var $c = .15;
var el = {
  x: .6,
  shore: 3.5,
  stone: 3.3,
  water: 2.45
};
var tl = {
  deep: `#86cbbf`,
  pale: `#b3e3d8`,
  foam: `#f3faf6`
};
var nl = new Vector3(.22, 0, .12);
var cl = 96;
var dl = `
float oHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float oNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(oHash(i), oHash(i + vec2(1, 0)), u.x), mix(oHash(i + vec2(0, 1)), oHash(i + vec2(1, 1)), u.x), u.y);
}
`;
var hl = .15;
var gl = 1.5;
var _l = .5;
var vl = new Vector3(0, .55, 0);
var bl = `
  #include <fog_pars_fragment>
  uniform vec3 uShadowTint;
  varying vec2 vCorner;
  varying float vAlpha, vKey, vLife;
  ${dl}
  void main() {
    float d = length(vCorner) + (oNoise(vCorner * 2.2 + vKey) - 0.5) * 0.45;
    float body = 1.0 - smoothstep(0.62, 0.68, d);
    if (body * vAlpha < 0.01) discard;
    float core = 1.0 - smoothstep(0.32, 0.38, d + vCorner.y * 0.25);
    vec3 col = mix(mix(vec3(1.0), uShadowTint, 0.35), vec3(1.0), core);
    col = mix(col * mix(uShadowTint, vec3(1.0), 0.7), col, smoothstep(0.0, 0.4, vLife));
    gl_FragColor = vec4(col, body * vAlpha * (0.75 + 0.25 * core));
    #include <colorspace_fragment>
    #include <fog_fragment>
  }`;
var Sl = `./models/truck/pickup.glb`;
var Cl = 5.6;
var wl = create_wl(worldScope);
var Ol = `./models/snowmobile/snowmobile.glb`;
var kl = 2.6;
var Al = create_Al(worldScope);
var jl = create_jl(worldScope);
var Nl = 9.81;
var Pl = 40;
var Fl = create_Fl(worldScope);
var Il = create_Il(worldScope);
var Ll = new Vector3();
var Rl = new Vector3();
var zl = new Vector3();
var Bl = new ce();
var Vl = new Vector3();
var Hl = new Vector3();
var Ul = create_Ul(worldScope);
var Wl = create_Wl(worldScope);
var Gl = `./models/jetson/jetson-one.glb`;
var Kl = 3.1;
var ql = [`17`, `18`, `8`, `26`, `new_0`, `new_0_0_0`, `new_0_1_0`, `new_0_2`].map(e => `tripo_part_${e}`);
var Jl = [`tripo_part_new_0_3`, `tripo_part_new_0_0`];
var Yl = {
  pads: [.141, -.157, .12],
  seat: [-.085, .172],
  feet: [.14, .15, .055],
  sticks: [.052, .18, .312, .05]
};
var Xl = .3;
var Zl = create_Zl(worldScope);
var eu = 40;
var tu = create_tu(worldScope);
var nu = 20;
var ru = 12;
var iu = new Vector3();
var au = new Vector3();
var ou = new Vector3();
var su = new ce();
var cu = new Vector3();
var lu = new Vector3();
var uu = new T();
var du = new m(0, 0, 0, `YXZ`);
var fu = new Vector3();
var pu = new Vector3();
var mu = create_mu(worldScope);
var hu = MathUtils.clamp;
var gu = create_gu(worldScope);
var _u = 3.4;
var vu = 1.36;
var yu = {
  seat: [.12, .2],
  locks: [-.2, .05],
  feet: [-.36, .14],
  thwarts: [1.02, -1.18]
};
var bu = {
  inboard: .6,
  outboard: 1.62,
  grip: .52
};
var xu = 1.35;
var Su = .25;
var Cu = -.08;
var wu = {
  paint: `#f2ede2`,
  stripe: `#c9473d`,
  wood: `#b98b5a`,
  thwart: `#a2754a`,
  oar: `#dcb683`,
  iron: `#3a4148`
};
var Du = create_Du(worldScope);
var ku = create_ku(worldScope);
var Au = {
  stations: 24,
  around: 16,
  inset: .015
};
var ju = new Vector3();
var Mu = new Vector3();
var Iu = new Vector3();
var Lu = new Vector3();
var Ru = new Vector3();
var Vu = create_Vu(worldScope);
var Hu = {
  angle: .05,
  dip: .35,
  feather: 1
};
var Uu = {
  angle: -1.25,
  dip: .55,
  feather: 1
};
var Wu = new L(.92, .38).normalize();
var Gu = new Vector3();
var Ku = new Vector3();
var qu = MathUtils.clamp;
var Ju = create_Ju(worldScope);
var Yu = create_Yu(worldScope);
var Zu = create_Zu(worldScope);
var Qu = [[.98, 0], [.55, .62], [.55, -.62], [0, 1], [0, -1], [-.6, .9], [-.6, -.9], [-1, .62], [-1, -.62]];
var treeLineElevation = forestPlacementDefaults.treeline;
var defaultRunName = `云霄峰道`;
var defaultSkyPalette = create_defaultSkyPalette(worldScope);
var crashDuration = 3.1;
var shakeOffDuration = 2.4;
var ld = 1.05;
var ud = 1.5;
var dd = create_dd(worldScope);
var fd = create_fd(worldScope);
var pd = create_pd(worldScope);
var md = {
  armL: [-1.1, .35, -1.7],
  armR: [-1.1, .35, -1.7]
};
var hd = {
  armL: [.75, .5, -.15],
  armR: [.75, .5, -.15]
};
var gd = create_gd(worldScope);
var _d = create__d(worldScope);
var vd = create_vd(worldScope);
var crashPoseKeyframes = create_crashPoseKeyframes(worldScope);
var xd = Object.fromEntries(Object.entries(crashPoseKeyframes).map(([e, t]) => {
  let n = pd;
  return [e, [[0, pd], ...t.keys, ...vd[t.rest]].map(([e, t]) => {
    let r = {
      ...n,
      ...t
    };
    return r.spin = n.spin + Math.atan2(Math.sin(r.spin - n.spin), Math.cos(r.spin - n.spin)), [e, n = r];
  })];
}));
var Sd = create_Sd(worldScope);
var wd = .2;
var Td = .72;
var Ed = .55;
var Dd = new T();
var Od = new T();
var kd = new T().setFromAxisAngle(new Vector3(0, 1, 0), Math.PI / 2);
var Ad = new m();
var jd = new Vector3();
var Md = new Vector3();
var Nd = new Vector3();
var Pd = new T();
var Fd = new Vector3(1, 0, 0);
var Hd = new Vector3();
var Ud = new Vector3();
var Kd = create_Kd(worldScope);
var qd = {
  length: 1.4,
  waist: .11,
  tip: .13,
  thick: .02,
  sole: .035
};
var Jd = {
  length: .82
};
var Yd = .125;
var Xd = Object.fromEntries(Object.entries({
  top: `#3d6fa6`,
  stripe: `#b9d4ee`,
  accent: `#f2a7b9`,
  navy: `#1f2a44`,
  binding: `#efe9dc`,
  steel: `#a9b2b8`
}).map(([e, t]) => [e, createToonMaterial({
  color: t
}, {
  rim: 1,
  hatch: 0
})]));
var tf = create_tf(worldScope);
var nf = create_nf(worldScope);
var rf = MathUtils;
var af = .15;
var of = .6;
var sf = .2;
var cf = {
  yaw: .26,
  out: .17,
  edge: .14,
  lift: .07
};
var lf = create_lf(worldScope);
var uf = create_uf(worldScope);
var df = create_df(worldScope);
var ff = create_ff(worldScope);
var pf = MathUtils;
var mf = .45;
var hf = .92;
var gf = 1.08;
var _f = .85;
var vf = .19;
var yf = [-.5, 1.05];
var bf = -.015;
var xf = {
  ready: [.1, .06, -.28],
  plant: [.08, bf, -.28],
  end: [-.22, bf, -.27],
  rest: [-.15, .025, 0],
  swing: .08
};
var Sf = .15;
var Cf = .6;
var wf = create_wf(worldScope);
var Tf = create_Tf(worldScope);
var Ef = `modulepreload`;
var Df = create_Df(worldScope);
var Of = {};
var kf = create_kf(worldScope);
var Af = create_Af(worldScope);
var vitePreload = create_vitePreload(worldScope);
var Mf = create_Mf(worldScope);
var Q = Object.fromEntries(Object.entries(Mf).map(([e, t]) => [e, createToonMaterial({
  color: t
}, {
  rim: 1,
  hatch: 0
})]));
var Ff = new Vector3(0, 1, 0);
var If = new Vector3(0, -1, 0);
var Lf = new Vector3();
var Rf = new Vector3();
var zf = new Vector3();
var Bf = new Vector3();
var Vf = new ce();
var Hf = new T();
var Uf = new m();
var Wf = 1.35;
var Gf = .2;
var Kf = .02;
var qf = .22;
var Jf = .25;
var Yf = {
  seat: .15,
  pivot: .04,
  shoulder: [.26, .43],
  reach: .47,
  leg: .6,
  ankle: .15,
  hip: [.12, 0]
};
var Zf = create_Zf(worldScope);
var Rider = create_Rider(worldScope);
var ep = 600;
var tp = `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;
var np = `
#include <packing>
uniform sampler2D tColor;
uniform sampler2D tDepth;
uniform sampler2D tNormal;
uniform vec2 uRes;
uniform float uNear;
uniform float uFar;
uniform float uPixelRatio;
uniform float uDepthScale;
uniform float uLineWidth;
uniform float uLineOpacity;
uniform float uNormalStep;
uniform vec3 uInk;
uniform vec3 uFogInk;
uniform vec2 uFogRange;
varying vec2 vUv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float viewDepth(vec2 uv) {
  float z = texture2D(tDepth, uv).x;
  return -perspectiveDepthToViewZ(z, uNear, uFar) * uDepthScale;
}
vec3 nrm(vec2 uv) {
  vec3 n = texture2D(tNormal, uv).xyz * 2.0 - 1.0;
  return n / max(length(n), 0.001);
}
float crease(vec3 centre, vec2 uv, float dc) {
  // A different depth surface belongs to the silhouette pass. Comparing its
  // normal as well paints a second, displaced contour (especially on hair).
  float dz = abs(viewDepth(uv) - dc) / max(dc, 0.001);
  float sameSurface = 1.0 - smoothstep(0.008, 0.025, dz);
  float covered = step(0.5, texture2D(tNormal, vUv).a) * step(0.5, texture2D(tNormal, uv).a);
  return (1.0 - clamp(dot(centre, nrm(uv)), -1.0, 1.0)) * sameSurface * covered;
}

void main() {
  vec2 px = 1.0 / uRes;
  float dc = viewDepth(vUv);
  // Radius in CSS pixels, independent of DPR. Keep sampling fixed in time:
  // moving it at 6 Hz used to make even a stationary model's outline jump.
  float near = 1.0 - smoothstep(4.0, 260.0, dc);
  float w = mix(0.65, 0.95, near) * uLineWidth * uPixelRatio;
  vec2 o = vec2(w) * px;

  float dl = viewDepth(vUv - vec2(o.x, 0.0));
  float dr = viewDepth(vUv + vec2(o.x, 0.0));
  float dd = viewDepth(vUv - vec2(0.0, o.y));
  float du = viewDepth(vUv + vec2(0.0, o.y));
  // Keep the near-surface half of the Laplacian: abs() marked both sides,
  // doubling the band and leaving a halo outside the actual model.
  float lap = max(0.0, dl + dr + dd + du - 4.0 * dc) / max(dc, 0.001);
  float depthEdge = smoothstep(0.035, 0.09, lap);

  // A half-size normal pass (Low outlines) is compared a texel of its own apart.
  vec3 nc = nrm(vUv);
  vec2 on = o * uNormalStep;
  float ndiff = 0.0;
  ndiff += crease(nc, vUv - vec2(on.x, 0.0), dc);
  ndiff += crease(nc, vUv + vec2(on.x, 0.0), dc);
  ndiff += crease(nc, vUv - vec2(0.0, on.y), dc);
  ndiff += crease(nc, vUv + vec2(0.0, on.y), dc);
  float normalEdge = smoothstep(0.55, 0.95, ndiff) * (1.0 - smoothstep(150.0, ${ep.toFixed(1)}, dc));

  float edge = max(depthEdge, normalEdge * 0.55);
  // Break long lines up a touch, like a dry pen.
  edge *= 0.75 + 0.25 * noise(vUv * uRes / uPixelRatio * 0.12);

  vec3 col = texture2D(tColor, vUv).rgb;
  // Distant lines fade toward the haze color instead of staying black.
  float far = smoothstep(uFogRange.x, uFogRange.y, dc);
  vec3 ink = mix(uInk, uFogInk, far);
  col = mix(col, ink, edge * uLineOpacity * mix(1.0, 0.6, far));

  // Paper grain + soft vignette.
  vec2 sc = gl_FragCoord.xy / uPixelRatio;
  float grain = hash(floor(sc * 0.5)) - 0.5;
  col *= 1.0 + grain * 0.05;
  float vig = smoothstep(1.25, 0.45, length(vUv - 0.5) * 1.6);
  col *= mix(0.9, 1.0, vig);

  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}
`;
var OutlinePostProcessor = create_OutlinePostProcessor(worldScope);
var ip = 14;
var gp = create_gp(worldScope);
var _p = [`HEMU`, `SKI`];
var vp = 10;
var yp = 1.8;
var bp = 7.5;
var xp = 43.9;
var Sp = 21.3;
var Cp = Object.fromEntries(Object.entries({
  cream: `#f7f2e4`,
  slot: `#4d6467`,
  top: `#efe9d8`,
  left: `#ddd5c1`,
  right: `#bfb6a1`,
  bottom: `#a39a87`,
  back: `#8f877a`
}).map(([e, t]) => [e, new K(t)]));
var kp = new Set([`bottom`, `top`, `ride`]);
var readDestinationFromUrl = create_readDestinationFromUrl(worldScope);
var Pp = `hemu-ski.you`;
var Fp = 6e5;
var Bp = `hemu-ski.arriving`;
var bilingualRunNames = create_bilingualRunNames(worldScope);
var runDifficultyStyles = create_runDifficultyStyles(worldScope);
var Gp = create_Gp(worldScope);
export { finishLoading as $, createSkyDome as A, lakeContainingPoint as B, crashDuration as C, shakeOffDuration as D, ld as E, prepareWorldAssets as F, hotSpringLocation as G, createCabinInteriorBounds as H, hl as I, liftEndpointPositions as J, serviceCentreLocations as K, createRideGondola as L, treeLineElevation as M, sampleRouteDistance as N, selectCrashMotion as O, createWorldScene as P, WebGLRenderer as Q, crossedCircularDistance as R, vitePreload as S, ud as T, createYurtInteriorBounds as U, nearestLakeShore as V, createBackdropTerrain as W, graphicsSettingOptions as X, graphicsModes as Y, createGraphicsController as Z, createTitleLogo as _, encodeDestination as a, Rider as b, parsePlayerPosition as c, consumeDioramaHandoff as d, setLoadingArrival as et, subscribePlayerPosition as f, createTitleSnow as g, createFloatingDioramaBase as h, readDestinationFromUrl as i, defaultRunName as j, defaultSkyPalette as k, findRunHighStart as l, createTransitionWipe as m, bilingualRunNames as n, writeDioramaHandoff as o, encodePlayerPosition as p, summitObjectLayout as q, liftDisplayName as r, parseDestination as s, runDifficultyStyles as t, setLoadingProgress as tt, publishPlayerPosition as u, createPedestalDioramaBase as v, crashPoseKeyframes as w, solveArmReachAngle as x, OutlinePostProcessor as y, WaterRipples as z };
export { finishLoading, createSkyDome, lakeContainingPoint, crashDuration, shakeOffDuration, ld, prepareWorldAssets, hotSpringLocation, createCabinInteriorBounds, hl, liftEndpointPositions, serviceCentreLocations, createRideGondola, treeLineElevation, sampleRouteDistance, selectCrashMotion, createWorldScene, WebGLRenderer, crossedCircularDistance, vitePreload, ud, createYurtInteriorBounds, nearestLakeShore, createBackdropTerrain, graphicsSettingOptions, graphicsModes, createGraphicsController, createTitleLogo, encodeDestination, Rider, parsePlayerPosition, consumeDioramaHandoff, setLoadingArrival, subscribePlayerPosition, createTitleSnow, createFloatingDioramaBase, readDestinationFromUrl, defaultRunName, defaultSkyPalette, findRunHighStart, createTransitionWipe, bilingualRunNames, writeDioramaHandoff, encodePlayerPosition, summitObjectLayout, liftDisplayName, parseDestination, runDifficultyStyles, setLoadingProgress, publishPlayerPosition, createPedestalDioramaBase, crashPoseKeyframes, solveArmReachAngle, OutlinePostProcessor, WaterRipples };
