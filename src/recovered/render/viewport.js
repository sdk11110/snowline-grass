/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Du. Live dependencies: graphicsController, renderer, postProcessor, toonUniforms, camera. */
export function create_Du(__recoveredScope) {
  return function Du() {
    let e = window.innerWidth,
      t = window.innerHeight,
      n = __recoveredScope.graphicsController.pixelRatio();
    __recoveredScope.renderer.setPixelRatio(n);
    __recoveredScope.renderer.setSize(e, t, false);
    __recoveredScope.postProcessor.setSize(e, t, n);
    __recoveredScope.toonUniforms.uPixelRatio.value = n;
    __recoveredScope.toonUniforms.uRibScale.value = Math.min(e, t) < 600 ? 12 : 1;
    __recoveredScope.camera.aspect = e / t;
    __recoveredScope.camera.updateProjectionMatrix();
  };
}
