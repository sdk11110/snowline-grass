/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/diorama-DPOYz-if.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
import { finishLoading, createSkyDome, prepareWorldAssets, serviceCentreLocations, createWorldScene, WebGLRenderer, createGraphicsController, Rider, parsePlayerPosition, consumeDioramaHandoff, setLoadingArrival, subscribePlayerPosition, defaultSkyPalette, findRunHighStart, createTransitionWipe, bilingualRunNames, writeDioramaHandoff, liftDisplayName, parseDestination, runDifficultyStyles, setLoadingProgress, createPedestalDioramaBase, OutlinePostProcessor } from "./shared-runtime.js";
import { B as se, Bt as ce, Cr as Vector3, Ct as _, G as v, It as le, Jn as ue, Kn as de, Kt as fe, N as pe, Nn as me, Pn as he, S as ge, Sr as y, St as _e, Wn as ve, X as ye, Yn as be, bt as MathUtils, c as xe, d as Se, g as Ce, l as we, m as Te, nr as Ee, or as x, s as De, tr as Oe, v as ke, vt as S, wt as Ae, x as je, y as Me, zt as Ne } from "../vendor/three/core.js";
import { toonUniforms, createToonMaterial } from "./render/toon-materials.js";
var Fe = {
  type: `change`
};
var Ie = {
  type: `start`
};
var Le = {
  type: `end`
};
var Re = new me();
var ze = new ce();
var Be = Math.cos(70 * MathUtils.DEG2RAD);
var w = new Vector3();
var T = 2 * Math.PI;
var E = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
};
var Ve = 1e-6;
var He = class extends ge {
  constructor(e, t = null) {
    super(e, t);
    this.state = E.NONE;
    this.target = new Vector3();
    this.cursor = new Vector3();
    this.minDistance = 0;
    this.maxDistance = 1 / 0;
    this.minZoom = 0;
    this.maxZoom = 1 / 0;
    this.minTargetRadius = 0;
    this.maxTargetRadius = 1 / 0;
    this.minPolarAngle = 0;
    this.maxPolarAngle = Math.PI;
    this.minAzimuthAngle = -1 / 0;
    this.maxAzimuthAngle = 1 / 0;
    this.enableDamping = false;
    this.dampingFactor = .05;
    this.enableZoom = true;
    this.zoomSpeed = 1;
    this.enableRotate = true;
    this.rotateSpeed = 1;
    this.keyRotateSpeed = 1;
    this.enablePan = true;
    this.panSpeed = 1;
    this.screenSpacePanning = true;
    this.keyPanSpeed = 7;
    this.zoomToCursor = false;
    this.autoRotate = false;
    this.autoRotateSpeed = 2;
    this.keys = {
      LEFT: `ArrowLeft`,
      UP: `ArrowUp`,
      RIGHT: `ArrowRight`,
      BOTTOM: `ArrowDown`
    };
    this.mouseButtons = {
      LEFT: S.ROTATE,
      MIDDLE: S.DOLLY,
      RIGHT: S.PAN
    };
    this.touches = {
      ONE: x.ROTATE,
      TWO: x.DOLLY_PAN
    };
    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object.zoom;
    this._cursorStyle = `auto`;
    this._domElementKeyEvents = null;
    this._lastPosition = new Vector3();
    this._lastQuaternion = new fe();
    this._lastTargetPosition = new Vector3();
    this._quat = new fe().setFromUnitVectors(e.up, new Vector3(0, 1, 0));
    this._quatInverse = this._quat.clone().invert();
    this._spherical = new Ee();
    this._sphericalDelta = new Ee();
    this._scale = 1;
    this._panOffset = new Vector3();
    this._rotateStart = new y();
    this._rotateEnd = new y();
    this._rotateDelta = new y();
    this._panStart = new y();
    this._panEnd = new y();
    this._panDelta = new y();
    this._dollyStart = new y();
    this._dollyEnd = new y();
    this._dollyDelta = new y();
    this._dollyDirection = new Vector3();
    this._mouse = new y();
    this._performCursorZoom = false;
    this._pointers = [];
    this._pointerPositions = {};
    this._controlActive = false;
    this._onPointerMove = We.bind(this);
    this._onPointerDown = Ue.bind(this);
    this._onPointerUp = Ge.bind(this);
    this._onContextMenu = Qe.bind(this);
    this._onMouseWheel = Je.bind(this);
    this._onKeyDown = Ye.bind(this);
    this._onTouchStart = Xe.bind(this);
    this._onTouchMove = Ze.bind(this);
    this._onMouseDown = Ke.bind(this);
    this._onMouseMove = qe.bind(this);
    this._interceptControlDown = $e.bind(this);
    this._interceptControlUp = et.bind(this);
    this.domElement !== null && this.connect(this.domElement);
    this.update();
  }
  set cursorStyle(e) {
    this._cursorStyle = e;
    e === `grab` ? this.domElement.style.cursor = `grab` : this.domElement.style.cursor = `auto`;
  }
  get cursorStyle() {
    return this._cursorStyle;
  }
  connect(e) {
    super.connect(e);
    this.domElement.addEventListener(`pointerdown`, this._onPointerDown);
    this.domElement.addEventListener(`pointercancel`, this._onPointerUp);
    this.domElement.addEventListener(`contextmenu`, this._onContextMenu);
    this.domElement.addEventListener(`wheel`, this._onMouseWheel, {
      passive: false
    });
    this.domElement.getRootNode().addEventListener(`keydown`, this._interceptControlDown, {
      passive: true,
      capture: true
    });
    this.domElement.style.touchAction = `none`;
  }
  disconnect() {
    this.state = E.NONE;
    this.domElement.removeEventListener(`pointerdown`, this._onPointerDown);
    this.domElement.ownerDocument.removeEventListener(`pointermove`, this._onPointerMove);
    this.domElement.ownerDocument.removeEventListener(`pointerup`, this._onPointerUp);
    this.domElement.removeEventListener(`pointercancel`, this._onPointerUp);
    this.domElement.removeEventListener(`wheel`, this._onMouseWheel);
    this.domElement.removeEventListener(`contextmenu`, this._onContextMenu);
    this.stopListenToKeyEvents();
    let e = this.domElement.getRootNode();
    e.removeEventListener(`keydown`, this._interceptControlDown, {
      capture: true
    });
    e.removeEventListener(`keyup`, this._interceptControlUp, {
      capture: true
    });
    this._controlActive = false;
    this._pointers.length = 0;
    this._pointerPositions = {};
    this.domElement.style.touchAction = ``;
    this.domElement.style.cursor = `auto`;
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    e.addEventListener(`keydown`, this._onKeyDown);
    this._domElementKeyEvents = e;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener(`keydown`, this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target);
    this.position0.copy(this.object.position);
    this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0);
    this.object.position.copy(this.position0);
    this.object.zoom = this.zoom0;
    this.object.updateProjectionMatrix();
    this.dispatchEvent(Fe);
    this.update();
    this.state = E.NONE;
  }
  pan(e, t) {
    this._pan(e, t);
    this.update();
  }
  dollyIn(e) {
    this._dollyIn(e);
    this.update();
  }
  dollyOut(e) {
    this._dollyOut(e);
    this.update();
  }
  rotateLeft(e) {
    this._rotateLeft(e);
    this.update();
  }
  rotateUp(e) {
    this._rotateUp(e);
    this.update();
  }
  update(e = null) {
    let t = this.object.position;
    w.copy(t).sub(this.target);
    w.applyQuaternion(this._quat);
    this._spherical.setFromVector3(w);
    this.autoRotate && this.state === E.NONE && this._rotateLeft(this._getAutoRotationAngle(e));
    this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle,
      r = this.maxAzimuthAngle;
    isFinite(n) && isFinite(r) && (n < -Math.PI ? n += T : n > Math.PI && (n -= T), r < -Math.PI ? r += T : r > Math.PI && (r -= T), n <= r ? this._spherical.theta = Math.max(n, Math.min(r, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + r) / 2 ? Math.max(n, this._spherical.theta) : Math.min(r, this._spherical.theta));
    this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi));
    this._spherical.makeSafe();
    this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset);
    this.target.sub(this.cursor);
    this.target.clampLength(this.minTargetRadius, this.maxTargetRadius);
    this.target.add(this.cursor);
    let i = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);else {
      let e = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale);
      i = e != this._spherical.radius;
    }
    if (w.setFromSpherical(this._spherical), w.applyQuaternion(this._quatInverse), t.copy(this.target).add(w), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let e = null;
      if (this.object.isPerspectiveCamera) {
        let t = w.length();
        e = this._clampDistance(t * this._scale);
        let n = t - e;
        this.object.position.addScaledVector(this._dollyDirection, n);
        this.object.updateMatrixWorld();
        i = !!n;
      } else if (this.object.isOrthographicCamera) {
        let t = new Vector3(this._mouse.x, this._mouse.y, 0);
        t.unproject(this.object);
        let n = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale));
        this.object.updateProjectionMatrix();
        i = n !== this.object.zoom;
        let r = new Vector3(this._mouse.x, this._mouse.y, 0);
        r.unproject(this.object);
        this.object.position.sub(r).add(t);
        this.object.updateMatrixWorld();
        e = w.length();
      } else {
        console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`);
        this.zoomToCursor = !1;
      }
      e !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position) : (Re.origin.copy(this.object.position), Re.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(Re.direction)) < Be ? this.object.lookAt(this.target) : (ze.setFromNormalAndCoplanarPoint(this.object.up, this.target), Re.intersectPlane(ze, this.target))));
    } else if (this.object.isOrthographicCamera) {
      let e = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale));
      e !== this.object.zoom && (this.object.updateProjectionMatrix(), i = true);
    }
    return this._scale = 1, this._performCursorZoom = false, i || this._lastPosition.distanceToSquared(this.object.position) > Ve || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > Ve || this._lastTargetPosition.distanceToSquared(this.target) > Ve ? (this.dispatchEvent(Fe), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(e) {
    return e === null ? T / 60 / 60 * this.autoRotateSpeed : T / 60 * this.autoRotateSpeed * e;
  }
  _getZoomScale(e) {
    let t = Math.abs(e * .01);
    return .95 ** (this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    w.setFromMatrixColumn(t, 0);
    w.multiplyScalar(-e);
    this._panOffset.add(w);
  }
  _panUp(e, t) {
    this.screenSpacePanning === true ? w.setFromMatrixColumn(t, 1) : (w.setFromMatrixColumn(t, 0), w.crossVectors(this.object.up, w));
    w.multiplyScalar(e);
    this._panOffset.add(w);
  }
  _pan(e, t) {
    let n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      let r = this.object.position;
      w.copy(r).sub(this.target);
      let i = w.length();
      i *= Math.tan(this.object.fov / 2 * Math.PI / 180);
      this._panLeft(2 * e * i / n.clientHeight, this.object.matrix);
      this._panUp(2 * t * i / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`), this.enablePan = false);
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`), this.enableZoom = false);
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`), this.enableZoom = false);
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = true;
    let n = this.domElement.getBoundingClientRect(),
      r = e - n.left,
      i = t - n.top,
      a = n.width,
      o = n.height;
    this._mouse.x = r / a * 2 - 1;
    this._mouse.y = -(i / o) * 2 + 1;
    this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX);
    this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY);
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    let t = this.domElement;
    this._rotateLeft(T * this._rotateDelta.x / t.clientHeight);
    this._rotateUp(T * this._rotateDelta.y / t.clientHeight);
    this._rotateStart.copy(this._rotateEnd);
    this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY);
    this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart);
    this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y));
    this._dollyStart.copy(this._dollyEnd);
    this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY);
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed);
    this._pan(this._panDelta.x, this._panDelta.y);
    this._panStart.copy(this._panEnd);
    this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY);
    e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY));
    this.update();
  }
  _handleKeyDown(e) {
    let t = false;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(T * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed);
        t = true;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-T * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed);
        t = true;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(T * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0);
        t = true;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-T * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0);
        t = true;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);else {
      let t = this._getSecondPointerPosition(e),
        n = .5 * (e.pageX + t.x),
        r = .5 * (e.pageY + t.y);
      this._rotateStart.set(n, r);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);else {
      let t = this._getSecondPointerPosition(e),
        n = .5 * (e.pageX + t.x),
        r = .5 * (e.pageY + t.y);
      this._panStart.set(n, r);
    }
  }
  _handleTouchStartDolly(e) {
    let t = this._getSecondPointerPosition(e),
      n = e.pageX - t.x,
      r = e.pageY - t.y,
      i = Math.sqrt(n * n + r * r);
    this._dollyStart.set(0, i);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e);
    this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e);
    this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);else {
      let t = this._getSecondPointerPosition(e),
        n = .5 * (e.pageX + t.x),
        r = .5 * (e.pageY + t.y);
      this._rotateEnd.set(n, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    let t = this.domElement;
    this._rotateLeft(T * this._rotateDelta.x / t.clientHeight);
    this._rotateUp(T * this._rotateDelta.y / t.clientHeight);
    this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);else {
      let t = this._getSecondPointerPosition(e),
        n = .5 * (e.pageX + t.x),
        r = .5 * (e.pageY + t.y);
      this._panEnd.set(n, r);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed);
    this._pan(this._panDelta.x, this._panDelta.y);
    this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    let t = this._getSecondPointerPosition(e),
      n = e.pageX - t.x,
      r = e.pageY - t.y,
      i = Math.sqrt(n * n + r * r);
    this._dollyEnd.set(0, i);
    this._dollyDelta.set(0, (this._dollyEnd.y / this._dollyStart.y) ** +this.zoomSpeed);
    this._dollyOut(this._dollyDelta.y);
    this._dollyStart.copy(this._dollyEnd);
    let a = (e.pageX + t.x) * .5,
      o = (e.pageY + t.y) * .5;
    this._updateZoomParameters(a, o);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e);
    this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e);
    this.enableRotate && this._handleTouchMoveRotate(e);
  }
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) {
      this._pointers.splice(t, 1);
      return;
    }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return true;
    return false;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    t === void 0 && (t = new y(), this._pointerPositions[e.pointerId] = t);
    t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    let t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  _customWheelEvent(e) {
    let t = e.deltaMode,
      n = {
        clientX: e.clientX,
        clientY: e.clientY,
        deltaY: e.deltaY
      };
    switch (t) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
    }
    return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
};
function Ue(e) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(e.pointerId), this.domElement.ownerDocument.addEventListener(`pointermove`, this._onPointerMove), this.domElement.ownerDocument.addEventListener(`pointerup`, this._onPointerUp)), !this._isTrackingPointer(e) && (this._addPointer(e), e.pointerType === `touch` ? this._onTouchStart(e) : this._onMouseDown(e), this._cursorStyle === `grab` && (this.domElement.style.cursor = `grabbing`)));
}
function We(e) {
  this.enabled !== false && (e.pointerType === `touch` ? this._onTouchMove(e) : this._onMouseMove(e));
}
function Ge(e) {
  switch (this._removePointer(e), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(e.pointerId);
      this.domElement.ownerDocument.removeEventListener(`pointermove`, this._onPointerMove);
      this.domElement.ownerDocument.removeEventListener(`pointerup`, this._onPointerUp);
      this.dispatchEvent(Le);
      this.state = E.NONE;
      this._cursorStyle === `grab` && (this.domElement.style.cursor = `grab`);
      break;
    case 1:
      let t = this._pointers[0],
        n = this._pointerPositions[t];
      this._onTouchStart({
        pointerId: t,
        pageX: n.x,
        pageY: n.y
      });
  }
}
function Ke(e) {
  let t;
  switch (e.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case S.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(e);
      this.state = E.DOLLY;
      break;
    case S.ROTATE:
      if (e.ctrlKey || e.metaKey || e.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(e);
        this.state = E.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(e);
        this.state = E.ROTATE;
      }
      break;
    case S.PAN:
      if (e.ctrlKey || e.metaKey || e.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(e);
        this.state = E.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(e);
        this.state = E.PAN;
      }
      break;
    default:
      this.state = E.NONE;
  }
  this.state !== E.NONE && this.dispatchEvent(Ie);
}
function qe(e) {
  switch (this.state) {
    case E.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(e);
      break;
    case E.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(e);
      break;
    case E.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(e);
  }
}
function Je(e) {
  this.enabled !== false && this.enableZoom !== false && this.state === E.NONE && (e.preventDefault(), this.dispatchEvent(Ie), this._handleMouseWheel(this._customWheelEvent(e)), this.dispatchEvent(Le));
}
function Ye(e) {
  this.enabled !== false && this._handleKeyDown(e);
}
function Xe(e) {
  switch (this._trackPointer(e), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case x.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(e);
          this.state = E.TOUCH_ROTATE;
          break;
        case x.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(e);
          this.state = E.TOUCH_PAN;
          break;
        default:
          this.state = E.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case x.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(e);
          this.state = E.TOUCH_DOLLY_PAN;
          break;
        case x.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(e);
          this.state = E.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = E.NONE;
      }
      break;
    default:
      this.state = E.NONE;
  }
  this.state !== E.NONE && this.dispatchEvent(Ie);
}
function Ze(e) {
  switch (this._trackPointer(e), this.state) {
    case E.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(e);
      this.update();
      break;
    case E.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(e);
      this.update();
      break;
    case E.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(e);
      this.update();
      break;
    case E.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(e);
      this.update();
      break;
    default:
      this.state = E.NONE;
  }
}
function Qe(e) {
  this.enabled !== false && e.preventDefault();
}
function $e(e) {
  e.key === `Control` && (this._controlActive = true, this.domElement.getRootNode().addEventListener(`keyup`, this._interceptControlUp, {
    passive: true,
    capture: true
  }));
}
function et(e) {
  e.key === `Control` && (this._controlActive = false, this.domElement.getRootNode().removeEventListener(`keyup`, this._interceptControlUp, {
    passive: true,
    capture: true
  }));
}
var tt = 9.81;
var nt = {
  easy: 10,
  novice: 10,
  intermediate: 14,
  advanced: 18,
  expert: 21,
  freeride: 21
};
var rt = [`#d9604c`, `#4f8fd6`, `#f0c24a`, `#6fae78`, `#b678c9`, `#efe9dc`, `#ff8a3d`, `#2f8f9d`];
var it = [`#ee4f2c`, `#23303a`, `#4f8fd6`, `#f0c24a`, `#efe9dc`];
var at = new Me(`#efe9dc`).getHex();
var ot = new Me(`#ee4f2c`).getHex();
var st = 6;
function ct(e, t, n) {
  let r = t.points;
  e.heightAt(r[0][0], r[0][1]) < e.heightAt(r[r.length - 1][0], r[r.length - 1][1]) && (r = [...r].reverse());
  let i = [],
    a = [];
  for (let e = 0; e < r.length - 1; e++) {
    let t = Math.hypot(r[e + 1][0] - r[e][0], r[e + 1][1] - r[e][1]);
    for (let n = 0; n < t; n += st) {
      i.push(r[e][0] + (r[e + 1][0] - r[e][0]) * n / t);
      a.push(r[e][1] + (r[e + 1][1] - r[e][1]) * n / t);
    }
  }
  let o = r[r.length - 1];
  i.push(o[0]);
  a.push(o[1]);
  let s = [0];
  for (let e = 1; e < i.length; e++) s.push(s[e - 1] + Math.hypot(i[e] - i[e - 1], a[e] - a[e - 1]));
  let c = s[s.length - 1],
    l = Math.max(2, Math.round(c / st) + 1),
    u = new Float32Array(l),
    d = new Float32Array(l),
    f = 0;
  for (let e = 0; e < l; e++) {
    let t = e / (l - 1) * c;
    for (; f < s.length - 2 && s[f + 1] < t;) f++;
    let n = (t - s[f]) / (s[f + 1] - s[f] || 1);
    u[e] = i[f] + (i[f + 1] - i[f]) * n;
    d[e] = a[f] + (a[f + 1] - a[f]) * n;
  }
  let p = e.heightAt(u[0], d[0]),
    m = e.heightAt(u[l - 1], d[l - 1]);
  return {
    index: n,
    run: t,
    X: u,
    Z: d,
    n: l,
    step: c / (l - 1),
    length: c,
    drop: p - m,
    next: []
  };
}
function lt(e) {
  let t = new ye(new Te(.26, .45, 3, 8).translate(0, .78, 0), createToonMaterial({
      color: `#ffffff`
    }, {
      rim: 1,
      hatch: 0
    }), e),
    n = new ye(new Oe(.24, 10, 8).translate(0, 1.36, 0), createToonMaterial({
      color: `#f6dcc6`
    }, {
      rim: 1,
      hatch: 0
    }), e),
    r = new ye(new we(.3, .06, 1.56).translate(0, .03, 0), createToonMaterial({
      color: `#ffffff`
    }, {
      hatch: 0
    }), e);
  for (let e of [t, n, r]) {
    e.frustumCulled = !1;
    e.castShadow = !0;
  }
  return {
    body: t,
    head: n,
    board: r
  };
}
var ut = class {
  constructor(e, t, {
    count: n = 40,
    scale: r = 7,
    lodDistance: i = 2600
  } = {}) {
    this.hf = e;
    this.scale = r;
    this.lodDistance = i;
    this.group = new v();
    this.full = new v();
    this.group.add(this.full);
    this.paths = t.map((t, n) => ct(e, t, n)).filter(e => e.length > 180 && e.drop > 30);
    for (let e of this.paths) {
      let t = e.X[e.n - 1],
        n = e.Z[e.n - 1];
      for (let r of this.paths) r !== e && Math.hypot(r.X[0] - t, r.Z[0] - n) < 90 && e.next.push(r);
    }
    this.totalLength = this.paths.reduce((e, t) => e + t.length, 0);
    this.proxy = lt(n);
    this.group.add(this.proxy.body, this.proxy.head, this.proxy.board);
    let a = rt.map(e => createToonMaterial({
        color: e
      }, {
        rim: 1,
        hatch: 0
      })),
      o = it.map(e => createToonMaterial({
        color: e
      }, {
        rim: 1,
        hatch: 0
      }));
    this.skiers = [];
    for (let e = 0; e < n; e++) {
      let t = e % rt.length,
        n = e * 3 % it.length;
      this.proxy.body.setColorAt(e, new Me(rt[t]));
      this.proxy.board.setColorAt(e, new Me(it[n]));
      let r = {
        i: e,
        rider: null,
        jacketMat: a[t],
        boardMat: o[n],
        pos: new Vector3(),
        quat: new fe(),
        yaw: 0,
        yawRate: 0,
        lean: 0,
        pop: 1,
        path: null,
        s: 0,
        phase: 0,
        amp: 0,
        wave: 0,
        speed: 0
      };
      this.#t(r, this.#e(), true);
      this.skiers.push(r);
    }
  }
  #e() {
    let e = Math.random() * this.totalLength;
    for (let t of this.paths) if ((e -= t.length) <= 0) return t;
    return this.paths[0];
  }
  #t(e, t, n = false, r = false) {
    e.path = t;
    e.s = n ? Math.random() * t.length * .9 : 0;
    r || (e.phase = Math.random() * Math.PI * 2, e.pop = +!!n);
    e.amp = 6 + Math.random() * 6;
    e.wave = 70 + Math.random() * 60;
    e.speed = (nt[t.run.difficulty] || 14) * (.8 + Math.random() * .4);
    e.yaw = NaN;
  }
  #n(e, t, n) {
    let r = Math.min(Math.max(t / e.step, 0), e.n - 1.001),
      i = Math.floor(r),
      a = r - i;
    n.x = e.X[i] + (e.X[i + 1] - e.X[i]) * a;
    n.z = e.Z[i] + (e.Z[i + 1] - e.Z[i]) * a;
    let o = Math.hypot(e.X[i + 1] - e.X[i], e.Z[i + 1] - e.Z[i]) || 1;
    return n.tx = (e.X[i + 1] - e.X[i]) / o, n.tz = (e.Z[i + 1] - e.Z[i]) / o, n;
  }
  update(e, t) {
    let n = {},
      r = this.hf,
      i = new _e(),
      a = new Vector3(),
      o = new Vector3(),
      s = new Vector3(),
      c = new Vector3(),
      l = new Vector3();
    for (let u of this.skiers) {
      let d = u.path;
      u.s += u.speed * e;
      u.phase += u.speed * e / u.wave * Math.PI * 2;
      let f = Math.min(1, u.s / 40, (d.length - u.s) / 40);
      if (u.s >= d.length) {
        d.next.length && Math.random() < .75 ? this.#t(u, d.next[Math.floor(Math.random() * d.next.length)], false, true) : this.#t(u, this.#e());
        continue;
      }
      u.pop = Math.min(1, u.pop + e * 2.5);
      let p = d.next.length ? 1 : Math.min(1, (d.length - u.s) / 25);
      this.#n(d, u.s, n);
      let m = Math.PI * 2 / u.wave,
        ee = u.amp * f * Math.sin(u.phase),
        te = u.amp * f * m * Math.cos(u.phase),
        ne = -n.tz,
        re = n.tx;
      u.pos.set(n.x + ne * ee, 0, n.z + re * ee);
      u.pos.y = r.heightAt(u.pos.x, u.pos.z);
      let h = n.tx + ne * te,
        ie = n.tz + re * te,
        ae = Math.atan2(-h, -ie);
      if (!Number.isNaN(u.yaw)) {
        let t = ae - u.yaw;
        t = Math.atan2(Math.sin(t), Math.cos(t));
        u.yawRate += (t / Math.max(e, 1e-4) - u.yawRate) * (1 - Math.exp(-e * 6));
      }
      u.yaw = ae;
      u.lean = MathUtils.clamp(Math.atan2(u.speed * u.yawRate, tt), -.9, .9);
      r.normalAt(u.pos.x, u.pos.z, o);
      s.set(h, 0, ie).normalize();
      s.addScaledVector(o, -s.dot(o)).normalize();
      c.crossVectors(s, o);
      i.makeBasis(c, o, l.copy(s).negate());
      u.quat.setFromRotationMatrix(i);
      let oe = this.scale * u.pop * p,
        se = t.position.distanceTo(u.pos) < this.lodDistance;
      se && !u.rider && this.#r(u);
      !se && u.rider && this.#i(u);
      u.rider ? (u.rider.root.position.copy(u.pos), u.rider.root.quaternion.copy(u.quat), u.rider.root.scale.setScalar(Math.max(oe, .001)), u.rider.update(e, {
        crouch: .35 + Math.abs(u.lean) * .4,
        lean: u.lean,
        twist: Math.sin(u.phase) * .3,
        air: false
      }), a.setScalar(0)) : a.setScalar(oe);
      i.compose(u.pos, u.quat, a);
      this.proxy.body.setMatrixAt(u.i, i);
      this.proxy.head.setMatrixAt(u.i, i);
      this.proxy.board.setMatrixAt(u.i, i);
    }
    for (let e of Object.values(this.proxy)) {
      e.instanceMatrix.needsUpdate = !0;
      e.instanceColor && (e.instanceColor.needsUpdate = !0);
    }
  }
  #r(e) {
    let t = (this.pool ||= []).pop() || new Rider();
    t.root.traverse(t => {
      if (!t.isMesh) return;
      t.userData.baseMat ||= t.material;
      let n = t.userData.baseMat.color?.getHex();
      t.material = n === at ? e.jacketMat : n === ot ? e.boardMat : t.userData.baseMat;
    });
    e.rider = t;
    this.full.add(t.root);
  }
  #i(e) {
    this.full.remove(e.rider.root);
    this.pool.push(e.rider);
    e.rider = null;
  }
  get nearCount() {
    return this.full.children.length;
  }
};
var dt = 3;
function ft(e, t, n, r) {
  let i = [];
  for (let e = 0; e < t.length - 1; e++) {
    let [n, r] = t[e],
      [a, o] = t[e + 1],
      s = Math.hypot(a - n, o - r);
    for (let e = 0; e < s; e += 8) i.push([n + (a - n) * e / s, r + (o - r) * e / s]);
  }
  i.push(t[t.length - 1]);
  let a = [],
    o = [],
    s = [],
    c = new Vector3();
  i.forEach(([t, l], u) => {
    let d = i[Math.max(0, u - 1)],
      f = i[Math.min(i.length - 1, u + 1)],
      p = Math.hypot(f[0] - d[0], f[1] - d[1]) || 1,
      m = -(f[1] - d[1]) / p,
      ee = (f[0] - d[0]) / p;
    for (let i of [-1, 1]) {
      let s = t + m * n * i,
        u = l + ee * n * i;
      a.push(s, e.heightAt(s, u) + r, u);
      e.normalAt(s, u, c);
      o.push(c.x, c.y, c.z);
    }
    if (u) {
      let e = u * 2;
      s.push(e - 2, e, e - 1, e - 1, e, e + 1);
    }
  });
  let l = new Se();
  return l.setAttribute(`position`, new se(a, 3)), l.setAttribute(`normal`, new se(o, 3)), l.setIndex(s), l;
}
function pt(e, t, n) {
  return createToonMaterial({
    color: e,
    transparent: t < 1,
    opacity: t,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -2 - n,
    polygonOffsetUnits: -4 - n * 2,
    side: 2
  }, {
    hatch: 0
  });
}
function mt(e, t, n, r = 48) {
  return Array.from({
    length: r + 1
  }, (i, a) => [e + Math.cos(a / r * Math.PI * 2) * n, t + Math.sin(a / r * Math.PI * 2) * n]);
}
function ht(e, t, n, r) {
  let i = r[0] - n[0],
    a = r[1] - n[1],
    o = ((e - n[0]) * i + (t - n[1]) * a) / (i * i + a * a || 1);
  return o = Math.max(0, Math.min(1, o)), Math.hypot(n[0] + i * o - e, n[1] + a * o - t);
}
var gt = class {
  constructor(e, t, n, {
    lineHalf: r = 7,
    liftCable: i
  }) {
    this.hf = e;
    this.group = new v();
    this.hoverGroup = new v();
    this.pickGroup = new v();
    this.group.add(this.hoverGroup, this.pickGroup);
    let a = new Map();
    t.forEach((e, t) => {
      let n = e.name || `#${t}`;
      a.has(n) || a.set(n, {
        key: n,
        kind: `run`,
        name: e.name,
        runs: [],
        difficulty: e.difficulty
      });
      let r = a.get(n);
      r.runs.push(e);
      (runDifficultyStyles[e.difficulty]?.rank ?? 1) > (runDifficultyStyles[r.difficulty]?.rank ?? 1) && (r.difficulty = e.difficulty);
    });
    this.groups = [...a.values()];
    for (let t of this.groups) {
      let n = 0,
        r = -1 / 0,
        i = 1 / 0,
        a = new Set();
      for (let o of t.runs) {
        a.add(o.difficulty);
        o.points.forEach((t, a) => {
          a && (n += Math.hypot(t[0] - o.points[a - 1][0], t[1] - o.points[a - 1][1]));
          let s = e.heightAt(t[0], t[1]);
          r = Math.max(r, s), i = Math.min(i, s);
        });
      }
      Object.assign(t, {
        length: n,
        top: r,
        bottom: i,
        difficulties: [...a]
      });
    }
    let o = this.lineMats = {};
    for (let [e, t] of Object.entries(runDifficultyStyles)) o[e] = pt(t.color, .9, 0);
    for (let t of this.groups) for (let n of t.runs) {
      let t = new _(ft(e, n.points, r, dt), o[n.difficulty] || o.intermediate);
      t.renderOrder = 1;
      this.group.add(t);
    }
    o.lift = pt(`#f0c24a`, .9, 0);
    for (let t of n) {
      let n = new _(ft(e, [t.points[0], t.points[t.points.length - 1]], r * .6, dt), o.lift);
      n.renderOrder = 1;
      this.group.add(n);
    }
    this.lifts = n.map(t => {
      let n = t.points[0],
        r = t.points[t.points.length - 1],
        a = e.heightAt(n[0], n[1]),
        o = e.heightAt(r[0], r[1]),
        s = i(t);
      return {
        kind: `lift`,
        lift: t,
        ...liftDisplayName(t),
        A: new Vector3(n[0], a + s, n[1]),
        B: new Vector3(r[0], o + s, r[1]),
        length: Math.hypot(r[0] - n[0], r[1] - n[1], o - a),
        rise: Math.abs(o - a),
        bottomY: Math.min(a, o),
        topY: Math.max(a, o)
      };
    });
    this.hot = null;
    this.picked = null;
    this.hiMats = {
      casing: pt(`#f0c24a`, 1, 1),
      line: Object.fromEntries(Object.entries(runDifficultyStyles).map(([e, t]) => [e, pt(t.color, 1, 2)])),
      lift: pt(`#23303a`, 1, 2)
    };
  }
  setLineOpacity(e) {
    for (let t of Object.values(this.lineMats)) t.opacity = e;
  }
  pickGround(e, t) {
    let n = t,
      r = new Vector3();
    if (n.containsPoint(e.origin)) r.copy(e.origin);else if (!e.intersectBox(n, r)) return null;
    let i = this.hf,
      a = e.direction,
      o = 0,
      s = 0,
      c = r.clone();
    for (; o < 3e4;) {
      if (r.copy(c).addScaledVector(a, o), !i.inside(r.x, r.z)) {
        if (o > 0) return null;
      } else if (r.y < i.heightAt(r.x, r.z)) {
        let e = s,
          t = o;
        for (let n = 0; n < 8; n++) {
          let n = (e + t) / 2;
          r.copy(c).addScaledVector(a, n);
          r.y < i.heightAt(r.x, r.z) ? t = n : e = n;
        }
        return r.copy(c).addScaledVector(a, t);
      }
      if (r.y < n.min.y) return null;
      s = o;
      o += 12;
    }
    return null;
  }
  nearestRun(e, t, n) {
    let r = null,
      i = n;
    for (let n of this.groups) for (let a of n.runs) for (let o = 0; o < a.points.length - 1; o++) {
      let s = ht(e, t, a.points[o], a.points[o + 1]);
      s < i && (i = s, r = n);
    }
    return r;
  }
  nearestLift(e, t, n, r, i) {
    let a = new Vector3(),
      o = new Vector3(),
      s = null,
      c = i;
    for (let i of this.lifts) {
      if (a.copy(i.A).project(t), o.copy(i.B).project(t), a.z > 1 || o.z > 1) continue;
      let l = (a.x + 1) * n / 2,
        u = (1 - a.y) * r / 2,
        d = (o.x + 1) * n / 2,
        f = (1 - o.y) * r / 2,
        p = ht(e.x, e.y, [l, u], [d, f]);
      p < c && (c = p, s = i);
    }
    return s;
  }
  setHot(e) {
    this.#e(`hot`, e);
  }
  setPicked(e) {
    this.#e(`picked`, e);
  }
  #e(e, t) {
    if (t === this[e]) return;
    this[e] = t;
    let n = e === `hot` ? this.hoverGroup : this.pickGroup;
    for (let e of [...n.children]) {
      e.geometry.dispose();
      n.remove(e);
    }
    if (!t) return;
    let r = (e, t, r, i) => {
      let a = new _(ft(this.hf, e, t, 4), this.hiMats.casing),
        o = new _(ft(this.hf, e, r, 5), i);
      a.renderOrder = 2;
      o.renderOrder = 3;
      n.add(a, o);
    };
    if (t.kind === `run`) {
      for (let e of t.runs) r(e.points, 30, 13, this.hiMats.line[e.difficulty] || this.hiMats.line.intermediate);
      return;
    }
    let i = t.kind === `station` ? t.lift.lift : t.kind === `lift` ? t.lift : null;
    i && r([i.points[0], i.points[i.points.length - 1]], 22, 11, this.hiMats.lift);
    t.ring && r(mt(t.x, t.z, t.ring), 12, 5, this.hiMats.lift);
  }
  describe(e) {
    if (e.kind === `station`) {
      let t = e.lift;
      return {
        badge: `lift`,
        zh: `${t.zh} · ${e.end === `bottom` ? `下站` : `上站`}`,
        en: `${t.en} · ${e.end} station`,
        rows: [[`${Math.round(e.y).toLocaleString()} m`, ``], [e.end === `bottom` ? `up to ${Math.round(t.topY).toLocaleString()} m` : `from ${Math.round(t.bottomY).toLocaleString()} m`, ``]]
      };
    }
    if (e.kind === `lift`) return {
      badge: `lift`,
      zh: e.zh,
      en: e.en,
      rows: [[`${Math.round(e.length).toLocaleString()} m`, `long`], [`${Math.round(e.rise).toLocaleString()} m`, `rise`], [`${Math.round(e.bottomY).toLocaleString()} → ${Math.round(e.topY).toLocaleString()} m`, ``]]
    };
    let t = e.name && bilingualRunNames[e.name],
      n = runDifficultyStyles[e.difficulty] || runDifficultyStyles.intermediate,
      r = e.difficulties.map(e => runDifficultyStyles[e] || runDifficultyStyles.intermediate).sort((e, t) => t.rank - e.rank).map(e => e.label);
    return {
      badge: e.difficulty,
      zh: e.name || `Unnamed run`,
      en: t ? t[1] ? `${t[0]} · ${t[1]}` : t[0] : e.name ? `` : `No name in OpenStreetMap`,
      rows: [[[...new Set(r)].join(` / `) || n.label, ``], [`${Math.round(e.length).toLocaleString()} m`, `long`], [`${Math.round(e.top - e.bottom).toLocaleString()} m`, `drop`]]
    };
  }
};
var _t = {
  run: `Run`,
  lift: `Lift`,
  station: `Lift station`,
  lodge: `Service centre`,
  you: `You`
};
var vt = e => `${Math.round(e).toLocaleString()} m`;
var yt = class {
  constructor({
    hf: e,
    runs: t,
    runMap: n,
    lodges: r,
    stations: i,
    you: a,
    describe: o,
    onSelect: s,
    onLook: c,
    onGo: l,
    onBack: u
  }) {
    Object.assign(this, {
      hf: e,
      runs: t,
      runMap: n,
      lodges: r,
      stations: i,
      you: a,
      describe: o,
      onSelect: s,
      onLook: c,
      onGo: l,
      onBack: u
    });
    this.selected = null;
    this.actions = [];
    this.el = document.getElementById(`pick`);
    this.acts = this.el.querySelector(`.acts`);
    this.el.querySelector(`.x`).addEventListener(`click`, () => this.select(null));
    this.acts.addEventListener(`click`, e => {
      let t = e.target.closest(`button`);
      t && this.#n(this.actions[+t.dataset.i]);
    });
    window.addEventListener(`keydown`, e => {
      !this.selected || e.metaKey || e.ctrlKey || e.altKey || (e.code === `Escape` ? this.select(null) : e.code === `Enter` && !e.target.closest?.(`button, a`) && (e.preventDefault(), this.#n(this.actions[0])));
    });
  }
  select(e) {
    e !== this.selected && (this.selected = e, this.runMap.setPicked(e), this.#r(), this.el.classList.toggle(`hidden`, !e), document.body.classList.toggle(`picking`, !!e), this.onSelect?.(e), e && this.#e(e));
  }
  refresh() {
    this.selected && (this.runMap.setPicked(null), this.runMap.setPicked(this.selected), this.#e(this.selected));
  }
  #e(e) {
    let t = this.describe(e),
      {
        what: n,
        acts: r
      } = this.#t(e);
    this.actions = r;
    let i = e => this.el.querySelector(e);
    i(`.tab`).textContent = _t[e.kind];
    i(`.badge`).className = `badge ${t.badge}`;
    i(`.zh`).textContent = t.zh;
    i(`.en`).textContent = t.en;
    i(`.en`).classList.toggle(`hidden`, !t.en);
    i(`.rows`).innerHTML = t.rows.map(([e, t]) => `<span><b>${e}</b>${t ? ` ${t}` : ``}</span>`).join(``);
    i(`.what`).textContent = n;
    this.acts.innerHTML = r.map((e, t) => `<button type="button" data-i="${t}" class="${t === 0 ? `go` : e.look ? `look` : ``}">${e.label}${e.key || e.back ? ` ▸` : ``}</button>`).join(``);
  }
  #t(e) {
    let t = {
        label: `Look closer`,
        look: true
      },
      n = e.kind === `station` ? e.lift.lift.id : e.lift?.id;
    switch (e.kind) {
      case `run`:
        {
          let n = findRunHighStart(this.hf, this.runs, e.runs[0].id);
          return {
            what: `You drop in at the top, ${vt(n.y)} up, and ride it down.`,
            acts: [{
              label: `Ride it from the top`,
              key: `run:${n.run.id}`
            }, t]
          };
        }
      case `you`:
        return {
          what: e.outside ? `You’re past the edge of the table, out this way.` : `Where you are in the game.`,
          acts: [...(this.onBack ? [{
            label: `Back to riding`,
            back: true
          }] : []), t]
        };
      case `lodge`:
        return {
          what: `Tickets, food and rentals. Board ${e.lift} at its station out front, or ride off from the door.`,
          acts: [{
            label: `Go to the hall`,
            key: `lodge:${e.id}`
          }, t]
        };
      case `station`:
        return e.end === `bottom` ? {
          what: `Board here for the ride up to ${vt(e.lift.topY)}, or ride off from the station.`,
          acts: [{
            label: `Go to the station`,
            key: `lift:${n}:bottom`
          }, {
            label: `Board and ride up`,
            key: `lift:${n}:ride`
          }, t]
        } : {
          what: `Step off at ${vt(e.y)} and take any run down from here.`,
          acts: [{
            label: `Go to the top station`,
            key: `lift:${n}:top`
          }, t]
        };
      default:
        {
          let r = e.lift.type === `magic_carpet`;
          return {
            what: r ? `A beginners’ belt on the nursery slope.` : `Runs from ${vt(e.bottomY)} up to ${vt(e.topY)}.`,
            acts: [{
              label: r ? `Go to the bottom` : `Bottom station`,
              key: `lift:${n}:bottom`
            }, {
              label: r ? `Go to the top` : `Top station`,
              key: `lift:${n}:top`
            }, t]
          };
        }
    }
  }
  #n(e) {
    e && (e.look ? this.onLook(this.selected) : e.back ? this.onBack(this.selected) : this.onGo(e.key, this.itemOf(e.key) ?? this.selected));
  }
  keyOf(e) {
    return e.kind === `you` ? `you` : e.kind === `run` ? `run:${findRunHighStart(this.hf, this.runs, e.runs[0].id).run.id}` : e.kind === `lodge` ? `lodge:${e.id}` : e.kind === `station` ? `lift:${e.lift.lift.id}:${e.end}` : `lift:${e.lift.id}`;
  }
  itemOf(e) {
    if (e === `you`) return this.you();
    let t = parseDestination(e);
    if (!t) return null;
    if (t.kind === `run`) return this.runMap.groups.find(e => e.runs.some(e => String(e.id) === t.id)) ?? null;
    if (t.kind === `lodge`) return this.lodges.find(e => e.id === t.id) ?? null;
    if (e.split(`:`)[2]) {
      let e = t.end === `ride` ? `bottom` : t.end,
        n = this.stations.find(n => String(n.lift.lift.id) === t.id && n.end === e);
      if (n) return n;
    }
    return this.runMap.lifts.find(e => String(e.lift.id) === t.id) ?? null;
  }
  focus(e, {
    dive: t = false
  } = {}) {
    let n = new Vector3(),
      r = (e, t) => n.set(e, this.hf.heightAt(e, t), t);
    switch (e.kind) {
      case `run`:
        {
          if (t) {
            let t = findRunHighStart(this.hf, this.runs, e.runs[0].id);
            return {
              point: r(t.x, t.z),
              size: 400
            };
          }
          let n = new De();
          for (let t of e.runs) for (let [e, r] of t.points) n.expandByPoint(new y(e, r));
          let i = n.getCenter(new y()),
            a = n.getSize(new y());
          return {
            point: r(i.x, i.y),
            size: Math.max(a.x, a.y)
          };
        }
      case `lift`:
        {
          if (t) return {
            point: r(e.lift.points[0][0], e.lift.points[0][1]),
            size: 400
          };
          let n = e.lift.points[0],
            i = e.lift.points[e.lift.points.length - 1];
          return {
            point: r((n[0] + i[0]) / 2, (n[1] + i[1]) / 2),
            size: e.length
          };
        }
      default:
        return {
          point: r(e.x, e.z),
          size: e.ring * 6
        };
    }
  }
  #r() {
    let e = new URL(location.href);
    this.selected ? e.searchParams.set(`at`, this.keyOf(this.selected)) : e.searchParams.delete(`at`);
    e.search = e.searchParams.toString().replaceAll(`%3A`, `:`).replaceAll(`%2C`, `,`);
    history.replaceState(history.state, ``, e);
  }
};
var bt = 60;
var D = 16;
var xt = 2500;
var St = .35;
var Ct = 40;
var wt = class {
  constructor(e, t, n) {
    Object.assign(this, {
      hf: e,
      tag: t
    });
    this.group = new v();
    this.group.visible = false;
    this.item = {
      kind: `you`,
      x: 0,
      y: 0,
      z: 0,
      ring: 42,
      top: new Vector3(),
      bearing: 0,
      lift: null,
      outside: false
    };
    this.reach = D;
    this.normal = new Vector3(0, 1, 0);
    let r = createToonMaterial({
        color: `#f0c24a`
      }, {
        hatch: 0
      }),
      i = (e, t) => createToonMaterial({
        color: e,
        polygonOffset: true,
        polygonOffsetFactor: -2 - t,
        polygonOffsetUnits: -4 - t * 2
      }, {
        hatch: 0
      }),
      a = new Ae({
        color: `#23303a`,
        side: 1
      }),
      o = e => new je(e, bt, 24, 1, true).rotateX(Math.PI).translate(0, bt / 2, 0);
    this.pin = new v();
    let s = new _(o(D * .7), r),
      c = new _(o(13.44).translate(0, -2.24 * 1.5, 0), a);
    this.head = new v();
    this.head.position.y = bt;
    let l = new _(new Ce(D * .42, 24), createToonMaterial({
      color: `#fbfaf5`
    }, {
      hatch: 0
    }));
    l.position.z = D * 1.01;
    this.head.add(new _(new Oe(D, 32, 16), r), new _(new Oe(18.240000000000002, 32, 16), a), l);
    this.pin.add(s, c, this.head);
    this.pin.visible = false;
    let u = new pe(`#ffffff`, toonUniforms.uSunIntensity.value);
    u.position.copy(n);
    this.overlay = new de();
    this.overlay.add(this.pin, u, u.target);
    let d = new ue([[0, 11], [7, -8], [0, -4], [-7, -8]].map(([e, t]) => new y(e, t))),
      f = new be(d).scale(D * .22, D * .22, 1).rotateX(-Math.PI / 2);
    this.arrow = new v();
    let p = new _(f, i(`#23303a`, 0));
    p.scale.setScalar(1.3);
    let m = new _(f, i(`#f0c24a`, 1));
    m.position.y = .5;
    this.heading = new v();
    this.heading.add(p, m);
    this.arrow.add(this.heading);
    this.group.add(this.arrow);
  }
  get shown() {
    return this.group.visible;
  }
  set(e) {
    if (this.group.visible = this.pin.visible = !!e, this.tag.classList.toggle(`hidden`, !e), !e) return;
    let {
        hf: t,
        item: n
      } = this,
      [r, i] = t.center,
      a = t.half - Ct;
    n.outside = !t.inside(e.x, e.z, Ct);
    n.x = MathUtils.clamp(e.x, r - a, r + a);
    n.z = MathUtils.clamp(e.z, i - a, i + a);
    n.y = t.heightAt(n.x, n.z);
    n.bearing = e.bearing;
    n.lift = e.lift;
    this.group.position.set(n.x, n.y, n.z);
    t.normalAt(n.x, n.z, this.normal);
    this.arrow.quaternion.setFromUnitVectors(le.DEFAULT_UP, this.normal);
    this.heading.rotation.y = -MathUtils.degToRad(e.bearing);
  }
  update(e, t, n, r) {
    if (!this.group.visible) return;
    let i = Math.max(St, e.position.distanceTo(this.group.position) / xt),
      a = (Math.sin(t * 2.4) * .5 + .5) * 6;
    this.pin.scale.setScalar(i);
    this.pin.position.copy(this.group.position);
    this.pin.position.y += a * i;
    this.arrow.scale.setScalar(i);
    this.arrow.position.copy(this.normal).multiplyScalar(2 * i);
    this.head.quaternion.copy(e.quaternion);
    this.item.top.set(this.item.x, this.item.y + (bt / 2 + a) * i, this.item.z);
    this.reach = 46 * i;
    let o = this.item.top.clone().setY(this.item.y + (bt + a + D * 1.3) * i).project(e),
      s = o.z < 1 && Math.abs(o.x) < 1.2 && Math.abs(o.y) < 1.2;
    this.tag.classList.toggle(`hidden`, !s);
    s && (this.tag.style.transform = `translate(${(o.x + 1) * n / 2}px, ${(1 - o.y) * r / 2}px) translate(-50%, -100%)`);
  }
  drawOver(e, t) {
    this.pin.visible && (e.autoClear = false, e.clearDepth(), e.render(this.overlay, t), e.autoClear = true);
  }
};
var O = {
  lift: 5,
  station: 3.2,
  lodge: 1.8,
  tree: 2.8,
  treeCell: 34,
  treePer: 12,
  carSpacing: 2.4,
  liftSpeed: 14
};
var Tt = 8;
var Et = 56;
var k = document.getElementById(`game`);
var A = new WebGLRenderer({
  canvas: k,
  antialias: false,
  powerPreference: `high-performance`
});
A.shadowMap.enabled = true;
A.shadowMap.type = 1;
A.outputColorSpace = ve;
var Dt = new OutlinePostProcessor(A, {
  depthScale: .03
});
var j = new de();
j.background = defaultSkyPalette.horizon;
var M = new Ne(30, 1, 20, 8e4);
var Ot = consumeDioramaHandoff();
Ot && setLoadingArrival(Ot);
var kt = await prepareWorldAssets({
  original: new URLSearchParams(location.search).has(`original`),
  onProgress: e => setLoadingProgress(e * .75)
});
await Promise.all([document.fonts.load(`40px "Patrick Hand SC"`), document.fonts.load(`20px "Patrick Hand"`)]).catch(() => {});
setLoadingProgress(.875);
var {
  ground: N,
  meta: P
} = kt;
var [At, jt] = N.center;
var Mt = 1 / 0;
var F = -1 / 0;
for (let e of N.h) {
  e < Mt && (Mt = e);
  e > F && (F = e);
}
var I = Mt - 160;
var Nt = new Vector3(.62, .55, .56).normalize();
var L = new pe(`#ffffff`, toonUniforms.uSunIntensity.value);
L.castShadow = true;
L.shadow.mapSize.set(4096, 4096);
var Pt = N.half * 1.45;
Object.assign(L.shadow.camera, {
  left: -Pt,
  right: Pt,
  top: Pt,
  bottom: -Pt,
  near: 100,
  far: 22e3
});
L.shadow.bias = -4e-4;
L.shadow.normalBias = 4;
L.target.position.set(At, (F + I) / 2, jt);
L.position.copy(L.target.position).addScaledVector(Nt, 1e4);
j.add(L, L.target);
var R = createWorldScene(kt, {
  terrain: {
    skirt: false,
    castShadow: true,
    tiles: 9,
    lodDistance: 7e3,
    nearDistance: 500
  },
  forest: {
    chunk: 800,
    lodDistance: 2600
  },
  toy: O
});
var {
  terrain: Ft,
  lifts: It,
  forest: Lt,
  water: Rt
} = R;
j.add(R.group);
var zt = createPedestalDioramaBase(N, {
  baseY: I,
  top: F,
  title: `HEMU · 禾木  —  JIKEPULIN SKI RESORT`,
  subtitle: `Altay, Xinjiang · ${Math.round(Mt).toLocaleString()}–${Math.round(F).toLocaleString()} m · ${P.runs.length} runs · ${P.lifts.length} lifts`
});
j.add(zt.group);
var Bt = [];
for (let e of R.vehicles) e.model.ready.then(() => {
  R.parkVehicle(e);
  R.fits([e.model.footprint]) && (j.add(e.model.root), e.floats && Bt.push(e.model.waterline(e.lake.level)));
}).catch(() => {});
var Vt = serviceCentreLocations.map((e, t) => {
  let n = R.lodges[t];
  return {
    kind: `lodge`,
    ...e,
    group: n,
    ring: 64 * O.lodge,
    top: new Vector3(e.x, n.position.y + 20 * O.lodge, e.z)
  };
});
var z = new gt(N, P.runs, P.lifts, {
  lineHalf: 10,
  liftCable: e => e.type === `magic_carpet` ? 3 : (e.type === `gondola` ? 13 : 9) * O.lift
});
j.add(z.group);
var Ht = It.lines.flatMap(e => {
  let t = z.lifts.find(t => t.lift.id === e.id),
    n = e.a.y <= e.b.y;
  return [[n ? e.a : e.b, `bottom`], [n ? e.b : e.a, `top`]].map(([e, n]) => ({
    kind: `station`,
    lift: t,
    end: n,
    x: e.x,
    y: e.y,
    z: e.z,
    ring: 13 * O.station,
    top: new Vector3(e.x, e.y + 6 * O.station, e.z)
  }));
});
var Ut = new ut(N, P.runs, {
  count: Et,
  scale: Tt
});
j.add(Ut.group);
var Wt = createSkyDome();
j.add(Wt);
var B = new wt(N, document.getElementById(`you-tag`), Nt);
j.add(B.group);
var Gt = subscribePlayerPosition(e => {
  B.set(e);
  Ln();
});
B.set(parsePlayerPosition(new URLSearchParams(location.search).get(`you`)) ?? Gt);
document.getElementById(`stats`).textContent = `${z.groups.filter(e => e.name).length} named runs · ${P.lifts.length} lifts · ${Et} riders`;
var V = 900;
var H = new He(M, k);
H.enableDamping = true;
H.dampingFactor = .08;
H.rotateSpeed = .6;
H.zoomToCursor = true;
H.screenSpacePanning = false;
H.minDistance = V;
H.maxDistance = 24e3;
H.minPolarAngle = .12;
H.maxPolarAngle = 1.42;
H.autoRotateSpeed = .35;
var Kt = new Vector3(At, (F + I) / 2 + 150, jt + 250);
H.target.copy(Kt);
var qt = new xe(new Vector3(N.x0, I, N.z0), new Vector3(N.x0 + N.size, F, N.z0 + N.size));
function Jt() {
  let e = MathUtils.degToRad(M.fov),
    t = 2 * Math.atan(Math.tan(e / 2) * M.aspect),
    n = M.aspect < 1 ? 1.6 + (1 - M.aspect) * 1 : 1.3;
  return N.size * n / (2 * Math.tan(Math.min(e, t) / 2));
}
function Yt() {
  let e = window.innerWidth,
    t = window.innerHeight,
    n = U.pixelRatio();
  A.setPixelRatio(n);
  A.setSize(e, t, false);
  Dt.setSize(e, t, n);
  toonUniforms.uPixelRatio.value = n;
  M.aspect = e / t;
  M.updateProjectionMatrix();
}
var U = createGraphicsController({
  renderer: A,
  post: Dt,
  sun: L,
  resize: Yt,
  shadowScale: 2
});
window.addEventListener(`resize`, Yt);
Yt();
{
  let e = document.getElementById(`graphics`),
    t = () => {
      e.querySelector(`[value="custom"]`).hidden = U.mode !== `custom`;
      e.value = U.mode;
    };
  e.addEventListener(`change`, () => U.setMode(e.value));
  U.onChange(t);
  t();
}
M.position.copy(Kt).add(new Vector3(.45, .52, .72).normalize().multiplyScalar(Jt()));
var Xt = document.getElementById(`spin`);
var Zt = true;
var Qt = 0;
H.autoRotate = Zt;
var $t = e => {
  Zt = e;
  Xt.setAttribute(`aria-pressed`, String(e));
  H.autoRotate = e;
};
Xt.addEventListener(`click`, () => $t(!Zt));
var en = () => {
  H.autoRotate = false;
  clearTimeout(Qt);
};
var tn = () => {
  clearTimeout(Qt);
  Qt = setTimeout(() => H.autoRotate = Zt && !G.size && !Z.selected, 6e3);
};
H.addEventListener(`start`, en);
H.addEventListener(`end`, tn);
var W = null;
var nn = e => 1 - (1 - e) ** 3;
function rn(e, t, {
  dur: n = 1.4,
  ease: r = nn
} = {}) {
  W = {
    t: 0,
    dur: n,
    ease: r,
    from: M.position.clone(),
    fromT: H.target.clone(),
    to: e,
    toT: t
  };
}
document.getElementById(`home`).addEventListener(`click`, () => {
  rn(Kt.clone().add(new Vector3(.45, .52, .72).normalize().multiplyScalar(Jt())), Kt);
});
var an = new Ee();
function on(e, t, n = [.55, 1.1]) {
  return an.setFromVector3(M.position.clone().sub(H.target)), an.phi = MathUtils.clamp(an.phi, n[0], n[1]), an.radius = t, e.clone().add(new Vector3().setFromSpherical(an));
}
function sn(e) {
  let t = e * 1.4 / (2 * Math.tan(MathUtils.degToRad(M.fov) / 2));
  return MathUtils.clamp(t, V * 1.3, Jt());
}
var cn = {
  KeyW: [0, 0, 1],
  KeyS: [0, 0, -1],
  KeyA: [-1, 0, 0],
  KeyD: [1, 0, 0],
  KeyE: [0, 1, 0],
  KeyQ: [0, -1, 0]
};
var G = new Set();
var ln = false;
var un = new Vector3();
var dn = new Vector3();
var fn = new Vector3();
var pn = new Vector3();
var K = new Vector3();
var mn = new me();
var hn = M.near * 2;
function gn(e) {
  let t = 0,
    n = 1 / 0;
  for (let r of [`x`, `y`, `z`]) {
    let i = (qt.min[r] - e.origin[r]) / e.direction[r],
      a = (qt.max[r] - e.origin[r]) / e.direction[r];
    t = Math.max(t, Math.min(i, a));
    n = Math.min(n, Math.max(i, a));
  }
  return t <= n ? [t, n] : null;
}
window.addEventListener(`keydown`, e => {
  ln = e.shiftKey;
  !(!cn[e.code] || e.metaKey || e.ctrlKey || e.altKey) && (e.target.closest?.(`input, textarea, select`) || (e.preventDefault(), G.add(e.code), W = null, en()));
});
window.addEventListener(`keyup`, e => {
  ln = e.shiftKey;
  let t = G.size;
  e.key === `Meta` ? G.clear() : G.delete(e.code);
  t && !G.size && tn();
});
var _n = () => {
  G.clear();
  ln = false;
};
window.addEventListener(`blur`, _n);
document.addEventListener(`visibilitychange`, _n);
function vn(e) {
  let t = M.position,
    n = H.target;
  dn.set(0, 0, 0);
  M.getWorldDirection(fn);
  pn.crossVectors(fn, M.up).normalize();
  for (let e of G) {
    let [t, n, r] = cn[e];
    dn.addScaledVector(pn, t).addScaledVector(M.up, n).addScaledVector(fn, r);
  }
  if (dn.lengthSq() > 0) {
    let e = Math.max(t.distanceTo(n), V) * (ln ? .8 : .25);
    dn.normalize().multiplyScalar(e);
  }
  if (un.lerp(dn, 1 - Math.exp(-e * 8)), !G.size && un.lengthSq() < 1) return un.set(0, 0, 0);
  K.copy(t);
  t.addScaledVector(un, e);
  let r = (N.inside(t.x, t.z) ? N.heightAt(t.x, t.z) : I) + 80;
  t.y < r && (t.y = r);
  n.add(K.subVectors(t, K));
  mn.set(t, fn);
  let i = z.pickGround(mn, qt),
    a = gn(mn);
  i && i.distanceTo(t) > hn ? n.copy(i) : a && a[1] > hn ? mn.at(MathUtils.clamp(t.distanceTo(n), Math.max(a[0], hn), a[1]), n) : (K.copy(n), qt.clampPoint(n, n), t.add(K.subVectors(n, K)));
  H.minDistance = Math.min(V, t.distanceTo(n));
  Y = true;
}
var q = document.getElementById(`tip`);
var J = new y();
var yn = new y();
var bn = new he();
var xn = new xe(new Vector3(N.x0, I, N.z0), new Vector3(N.x0 + N.size, F + 400, N.z0 + N.size));
var Sn = false;
var Cn = false;
var wn = null;
var Y = false;
var X = null;
k.addEventListener(`pointermove`, e => {
  J.set(e.clientX, e.clientY);
  Sn = true;
  Y = true;
});
k.addEventListener(`pointerleave`, () => {
  Sn = false;
  Y = true;
});
k.addEventListener(`pointerdown`, e => {
  Cn = true;
  wn = [e.clientX, e.clientY];
  Y = true;
});
window.addEventListener(`pointerup`, e => {
  if (Cn = false, wn && Math.hypot(e.clientX - wn[0], e.clientY - wn[1]) < 6) {
    let t = e.pointerType !== `mouse`,
      n = performance.now();
    J.set(e.clientX, e.clientY);
    Sn = true;
    t && X && n - X.t < 320 && Math.hypot(e.clientX - X.x, e.clientY - X.y) < 30 ? (X = null, Q || Dn()) : (e.button === 0 && !Q && Z.select(Tn(t)), X = t ? {
      t: n,
      x: e.clientX,
      y: e.clientY
    } : null);
  }
  e.pointerType !== `mouse` && (Sn = false);
  wn = null;
  Y = true;
});
function Tn(e = false) {
  if (!Sn || Cn) return null;
  let t = window.innerWidth,
    n = window.innerHeight,
    r = e ? 2 : 1,
    i = B.shown && kn([B.item], B.reach, t, n, 12 * r) || kn(Vt, 55 * O.lodge, t, n, 12 * r) || kn(Ht, 16 * O.station, t, n, 12 * r);
  if (i) return i;
  let a = z.nearestLift(J, M, t, n, 9 * r);
  if (a) return a;
  let o = En(J.x, J.y);
  if (!o) return null;
  let s = M.position.distanceTo(o) * 2 * Math.tan(MathUtils.degToRad(M.fov) / 2) / n;
  return z.nearestRun(o.x, o.z, Math.max(20, s * 10 * r));
}
function En(e, t) {
  return yn.set(e / window.innerWidth * 2 - 1, -(t / window.innerHeight) * 2 + 1), bn.setFromCamera(yn, M), z.pickGround(bn.ray, xn);
}
function Dn() {
  let e = En(J.x, J.y);
  e && (en(), rn(on(e, Math.max(V, M.position.distanceTo(e) * .45)), e), tn());
}
var On = new Vector3();
function kn(e, t, n, r, i = 12) {
  let a = r / (2 * Math.tan(MathUtils.degToRad(M.fov) / 2)),
    o = null,
    s = 1;
  for (let c of e) {
    if (On.copy(c.top).project(M), On.z > 1) continue;
    let e = Math.max(i, t * a / M.position.distanceTo(c.top)),
      l = Math.hypot((On.x + 1) * n / 2 - J.x, (1 - On.y) * r / 2 - J.y) / e;
    l < s && (s = l, o = c);
  }
  return o;
}
var An = e => ({
  badge: `lodge`,
  zh: e.zh,
  en: e.en,
  rows: [[`${e.ele.toLocaleString()} m`, ``], [`Tickets · food · rental · first aid`, ``]]
});
function jn(e) {
  let t = e.lift && z.lifts.find(t => String(t.lift.id) === e.lift),
    n = !t && !e.outside && z.nearestRun(e.x, e.z, 22),
    r = t ? `${t.zh} ↑` : n ? n.name || `Unnamed run` : e.outside ? `Off the table` : `Off-piste`,
    i = e => `${Math.round(e).toLocaleString()} m`;
  return {
    badge: `you`,
    zh: `你在这里`,
    en: `You are here`,
    rows: [[r, ``], [t ? `up to ${i(t.topY)}` : i(e.y), ``]]
  };
}
var Mn = e => e.kind === `lodge` ? An(e) : e.kind === `you` ? jn(e) : z.describe(e);
function Nn(e) {
  if (z.setHot(e), k.style.cursor = e ? `pointer` : Cn ? `grabbing` : `grab`, !e) {
    q.classList.add(`hidden`);
    return;
  }
  let t = Mn(e);
  q.querySelector(`.badge`).className = `badge ${t.badge}`;
  q.querySelector(`.zh`).textContent = t.zh;
  q.querySelector(`.en`).textContent = t.en;
  q.querySelector(`.en`).classList.toggle(`hidden`, !t.en);
  q.querySelector(`.rows`).innerHTML = t.rows.map(([e, t]) => `<span><b>${e}</b>${t ? ` ${t}` : ``}</span>`).join(``);
  q.classList.remove(`hidden`);
}
function Pn() {
  if (q.classList.contains(`hidden`)) return;
  let e = q.getBoundingClientRect(),
    t = J.x + 18,
    n = J.y + 20;
  t + e.width > window.innerWidth - 12 && (t = J.x - e.width - 14);
  n + e.height > window.innerHeight - 12 && (n = J.y - e.height - 14);
  q.style.transform = `translate(${Math.max(12, t)}px, ${Math.max(12, n)}px)`;
}
var Fn = new URL(`./`, location.href).pathname;
var In = (() => {
  try {
    let e = new URL(document.referrer);
    return history.length > 1 && e.origin === location.origin && [Fn, `${Fn}index.html`].includes(e.pathname);
  } catch {
    return false;
  }
})();
var Z = new yt({
  hf: N,
  runs: P.runs,
  runMap: z,
  lodges: Vt,
  stations: Ht,
  describe: Mn,
  you: () => B.shown ? B.item : null,
  onSelect: e => e ? en() : tn(),
  onLook: e => {
    let t = Z.focus(e);
    rn(on(t.point, sn(t.size)), t.point);
  },
  onGo: (e, t) => zn(t, () => location.assign(`./?at=${e}`), `Off to ${Mn(t).zh}`),
  onBack: In ? e => zn(e, () => history.back(), `Back to riding`) : null
});
function Ln() {
  Z.selected === B.item && (B.shown ? Z.refresh() : Z.select(null));
  z.setHot(null);
  Y = true;
}
var Rn = createTransitionWipe(document.getElementById(`cloud`));
var Q = null;
function zn(e, t, n) {
  if (Q) return;
  let r = Z.focus(e, {
      dive: true
    }),
    i = matchMedia(`(prefers-reduced-motion: reduce)`).matches;
  i || rn(on(r.point, 160, [.7, 1]), r.point, {
    dur: 1.3,
    ease: e => e * e * (3 - 2 * e)
  });
  en();
  n && writeDioramaHandoff(n);
  Q = {
    t: 0,
    dur: i ? .45 : 1.3,
    cloud: e => MathUtils.smoothstep(e, .35, 1),
    done: t
  };
}
function Bn(e) {
  let t = Z.focus(e);
  H.target.copy(t.point);
  let n = matchMedia(`(prefers-reduced-motion: reduce)`).matches;
  M.position.copy(on(t.point, n ? sn(t.size) : 160, [.7, 1]));
  n || rn(on(t.point, sn(t.size)), t.point, {
    dur: 2.2
  });
  Rn(1);
  Q = {
    t: 0,
    dur: n ? .65 : 2.2,
    cloud: e => 1 - MathUtils.smoothstep(e, .05, .55)
  };
}
var Vn = Z.itemOf(new URLSearchParams(location.search).get(`at`));
Vn && (Z.select(Vn), Bn(Vn));
var Hn = `hemu-diorama.touch-guide`;
var $ = document.getElementById(`guide`);
function Un(e) {
  if (document.body.classList.toggle(`touch`, e), !e) return;
  let t = true;
  try {
    t = !!localStorage.getItem(Hn);
  } catch {}
  !t && !Vn && $.classList.remove(`hidden`);
}
function Wn() {
  $.classList.add(`hidden`);
  try {
    localStorage.setItem(Hn, `1`);
  } catch {}
}
$.querySelector(`.ok`).addEventListener(`click`, Wn);
$.addEventListener(`click`, e => {
  e.target === $ && Wn();
});
window.addEventListener(`pointerdown`, e => {
  e.pointerType === `touch` && !document.body.classList.contains(`touch`) ? Un(true) : e.pointerType === `mouse` && document.body.classList.remove(`touch`);
}, true);
window.addEventListener(`keydown`, () => document.body.classList.remove(`touch`), true);
Un(matchMedia(`(pointer: coarse)`).matches);
window.addEventListener(`pageshow`, e => {
  e.persisted && Z.selected && Bn(Z.selected);
});
var Gn = new ke();
var Kn = 0;
var qn = [Wt, z.group, zt.shadow];
function Jn() {
  let e = Math.min(Gn.getDelta(), .05);
  if (Kn += e, W) {
    W.t = Math.min(1, W.t + e / W.dur);
    let t = W.ease(W.t);
    M.position.lerpVectors(W.from, W.to, t);
    H.target.lerpVectors(W.fromT, W.toT, t);
    H.minDistance = Math.min(V, M.position.distanceTo(H.target));
    W.t >= 1 && (W = null);
  }
  if (Q && (Q.t = Math.min(1, Q.t + e / Q.dur), Rn(Q.cloud(Q.t)), Q.t >= 1)) {
    let e = Q;
    Q = null;
    e.done?.();
  }
  vn(e);
  H.update(e);
  let t = H.target;
  qt.clampPoint(t, t);
  H.minDistance = Math.min(V, M.position.distanceTo(t));
  z.setLineOpacity(MathUtils.clamp((M.position.distanceTo(t) - 1500) / 5e3, .18, .9));
  It.update(e);
  Ut.update(e, M);
  B.update(M, Kn, window.innerWidth, window.innerHeight);
  Lt.update(M.position);
  Ft.update(M.position);
  Wt.position.copy(M.position);
  Wt.material.uniforms.uTime.value = Kn;
  Rt.update(Kn, Bt);
  (Y || H.autoRotate) && (Y = false, Nn(Tn()));
  Pn();
  Dt.render(j, M, Kn, qn);
  B.drawOver(A, M);
}
function Yn(e) {
  requestAnimationFrame(Yn);
  U.shouldRender(e) && Jn();
}
window.__diorama = {
  graphics: U,
  scene: j,
  camera: M,
  controls: H,
  skiers: Ut,
  runMap: z,
  lifts: It,
  forest: Lt,
  renderer: A,
  nav: Z,
  stations: Ht,
  lodges: Vt,
  you: B
};
await finishLoading();
requestAnimationFrame(Yn);
