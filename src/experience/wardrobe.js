/** Destination clothing with reversible, per-character source geometry.
 * The female swim asset is an existing, distinct lightweight body. Other
 * imported characters have fused clothing: a seasonal material and modest
 * silhouette tailoring cannot turn those into separately removable garments.
 */
import { Float32BufferAttribute, Matrix4, Vector3, Color, Mesh, BoxGeometry } from './three.js';
import { createToonMaterial } from '../recovered/render/toon-materials.js';
import { createSurfboard } from './gear/surfboard.js';

const names = name => name.replace(/^mixamorig:?/, '');
const clamp = (value, lo, hi) => Math.max(lo, Math.min(hi, value));
const clothGroup = name => /Head|Neck|Eye|Jaw/.test(name) ? 'head'
  : /Hand|Thumb|Index|Middle|Ring|Pinky/.test(name) ? 'hand'
  : /Foot|Toe/.test(name) ? 'foot'
  : /UpLeg|Leg/.test(name) ? 'leg'
  : /Arm|Shoulder/.test(name) ? 'arm' : 'trunk';
const CHILD = { Hips:'Spine', Spine:'Spine1', Spine1:'Spine2', Spine2:'Neck',
  LeftArm:'LeftForeArm', RightArm:'RightForeArm', LeftForeArm:'LeftHand', RightForeArm:'RightHand',
  LeftUpLeg:'LeftLeg', RightUpLeg:'RightLeg', LeftLeg:'LeftFoot', RightLeg:'RightFoot' };

function fittedGeometry(mesh, mode, lightweight) {
  const geometry = mesh.geometry.clone(), position = geometry.attributes.position;
  const joints = geometry.attributes.skinIndex, weights = geometry.attributes.skinWeight;
  if (!joints || !weights || !mesh.skeleton) return { geometry, masked: false };
  geometry.computeBoundingBox();
  const minY = geometry.boundingBox.min.y;
  const height = Math.max(.001, geometry.boundingBox.max.y - minY);
  const boneNames = mesh.skeleton.bones.map(b => names(b.name));
  const indexByName = new Map(boneNames.map((n, i) => [n, i]));
  const inverseBind = new Matrix4().copy(mesh.bindMatrix).invert();
  const points = mesh.skeleton.boneInverses.map(m => new Vector3().setFromMatrixPosition(
    new Matrix4().copy(inverseBind).multiply(new Matrix4().copy(m).invert())));
  const attrs = [], point = new Vector3(), centre = new Vector3(), segment = new Vector3();
  const nearest = new Vector3(), diff = new Vector3();
  for (let i = 0; i < position.count; i++) {
    point.fromBufferAttribute(position, i);
    const group = { head:0, hand:0, foot:0, leg:0, arm:0, trunk:0 };
    centre.set(0, 0, 0); let centreWeight = 0;
    for (let j = 0; j < 4; j++) {
      const index = joints.getComponent(i, j), weight = weights.getComponent(i, j);
      if (!(weight > 0) || !points[index]) continue;
      const name = boneNames[index], type = clothGroup(name);
      group[type] += weight;
      if (type === 'head' || type === 'hand' || type === 'foot') continue;
      const from = points[index], to = points[indexByName.get(CHILD[name])] ?? from;
      segment.subVectors(to, from);
      const along = segment.lengthSq() > 1e-9 ? clamp(diff.subVectors(point, from).dot(segment) / segment.lengthSq(), 0, 1) : 0;
      nearest.copy(from).addScaledVector(segment, along);
      centre.addScaledVector(nearest, weight); centreWeight += weight;
    }
    const top = clamp(group.trunk + group.arm, 0, 1), leg = clamp(group.leg, 0, 1);
    // Foot and hand values are retained separately; bare skin in the real swim
    // asset stays bare rather than being globally painted teal.
    attrs.push(top, leg, clamp(group.foot, 0, 1), (point.y - minY) / height);
    if (!lightweight && centreWeight > .5 && group.head < .15 && group.hand < .15 && group.foot < .25) {
      centre.divideScalar(centreWeight);
      const amount = mode === 'ocean' ? .84 : .945;
      point.sub(centre).multiplyScalar(1 - (1 - amount) * clamp(centreWeight, 0, 1)).add(centre);
      position.setXYZ(i, point.x, point.y, point.z);
    }
  }
  geometry.setAttribute('aWardrobe', new Float32BufferAttribute(attrs, 4));
  position.needsUpdate = true;
  geometry.computeVertexNormals(); geometry.computeBoundingBox(); geometry.computeBoundingSphere();
  return { geometry, masked: true };
}

function seasonalMaterial(source, mode, masked) {
  const material = createToonMaterial({ map: source.map, color: source.color?.clone() ?? '#ffffff',
    side: source.side, vertexColors: source.vertexColors }, { rim: .85, hatch: .3 });
  material.name = mode === 'ocean' ? 'Teal rashguard / charcoal neoprene' : 'Ochre shell / sage trail trousers';
  if (!masked) return material;
  const before = material.onBeforeCompile;
  material.onBeforeCompile = shader => {
    before(shader);
    shader.vertexShader = shader.vertexShader.replace('#include <common>', `#include <common>
      attribute vec4 aWardrobe;
      varying vec4 vWardrobe;
      varying vec3 vWardrobeLocal;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vWardrobe = aWardrobe;
        vWardrobeLocal = position;`);
    shader.fragmentShader = shader.fragmentShader.replace('#include <common>', `#include <common>
      varying vec4 vWardrobe;
      varying vec3 vWardrobeLocal;`)
      // Colour before lighting accumulation as well as before the toon ramp;
      // this keeps its shadow thresholds consistent with the new fabric.
      .replace('#include <color_fragment>', `#include <color_fragment>
        float fabricDetail = mix(0.88, 1.08, clamp(dot(diffuseColor.rgb,vec3(0.299,0.587,0.114)),0.0,1.0));
        float seam = 1.0-smoothstep(0.003,0.007,abs(vWardrobeLocal.x));
        vec3 topFabric = ${mode === 'ocean' ? 'vec3(0.055,0.38,0.39)' : 'vec3(0.69,0.40,0.13)'};
        vec3 legFabric = ${mode === 'ocean' ? 'vec3(0.085,0.13,0.15)' : 'vec3(0.31,0.40,0.25)'};
        float panels = smoothstep(0.09,0.17,abs(vWardrobeLocal.x)) * (1.0-smoothstep(0.68,0.76,vWardrobe.w));
        ${mode === 'ocean' ? 'topFabric = mix(topFabric,vec3(0.07,0.17,0.19),panels*0.72);' : ''}
        topFabric = mix(topFabric,${mode === 'ocean' ? 'vec3(0.39,0.64,0.60)' : 'vec3(0.85,0.65,0.31)'},seam*0.52);
        vec3 seasonal = mix(diffuseColor.rgb,legFabric*fabricDetail,clamp(vWardrobe.y,0.0,1.0));
        seasonal = mix(seasonal,topFabric*fabricDetail,clamp(vWardrobe.x,0.0,1.0));
        ${mode === 'ocean' ? '' : 'seasonal = mix(seasonal,vec3(0.16,0.20,0.16)*fabricDetail,clamp(vWardrobe.z,0.0,1.0)*0.88);'}
        diffuseColor.rgb = seasonal;`);
  };
  material.customProgramCacheKey = () => `snowline-wardrobe-${mode}-v1`;
  return material;
}

function below(object, ancestor) {
  for (let node = object; node; node = node.parent) if (node === ancestor) return true;
  return false;
}

export function createWardrobe(game) {
  if (!game?.rider) throw new TypeError('createWardrobe requires a ready rider.');
  const rider = game.rider, surfboard = createSurfboard();
  rider.edge.add(surfboard.root); surfboard.root.visible = false;
  const records = [], visibility = new Map(), looks = new Map();
  let mode = 'snow', serial = 0, pending = null, ready = true, disposed = false;
  let appliedModel = null, appliedId = null, appliedOutfit = null, limitation = '';
  let classicFeet = [];
  const snapshot = () => ({ id:rider.modelId, outfit:rider.outfit ?? null });
  looks.set('snow', snapshot());

  function rememberVisibility(node, value = false) {
    if (!node) return;
    if (!visibility.has(node)) visibility.set(node, node.visible);
    node.visible = value;
  }
  function restore() {
    for (const record of records) {
      record.mesh.material = record.material;
      if (record.geometry) { record.mesh.geometry = record.geometry; record.createdGeometry.dispose(); }
      for (const material of record.createdMaterials) material.dispose();
    }
    records.length = 0;
    for (const [node, visible] of visibility) node.visible = visible;
    visibility.clear();
    for (const mesh of classicFeet) { mesh.removeFromParent(); mesh.geometry.dispose(); mesh.material.dispose(); }
    classicFeet = [];
    appliedModel = appliedId = appliedOutfit = null;
    limitation = '';
  }

  function applyImported() {
    const lightweight = rider.modelId === 'female' && rider.outfit === 'swim';
    rider.model.root.traverse(mesh => {
      if (!mesh.isMesh) return;
      const originalMaterial = mesh.material, originalGeometry = mesh.geometry;
      const { geometry, masked } = fittedGeometry(mesh, mode, lightweight);
      const list = (Array.isArray(originalMaterial) ? originalMaterial : [originalMaterial])
        .map(source => seasonalMaterial(source, mode, masked));
      mesh.geometry = geometry; mesh.material = Array.isArray(originalMaterial) ? list : list[0];
      records.push({ mesh, material:originalMaterial, geometry:originalGeometry,
        createdGeometry:geometry, createdMaterials:list });
    });
    limitation = lightweight ? '' : '原雪服为单片网格：季节材质与轮廓收薄；帽镜等融合部件仍保留。';
  }

  function applyClassic() {
    rider.classic.traverse(mesh => {
      if (!mesh.isMesh) return;
      // The procedural character has separate helmet, goggle and backpack
      // pieces, so these can actually be removed without touching the face.
      if (below(mesh, rider.head)) {
        const c = mesh.material?.color?.getHexString();
        if (mode === 'ocean' && ['efe9dc','1c1d21','f7f5ee'].includes(c) && mesh.position.y > .22) rememberVisibility(mesh);
        return;
      }
      if (mesh.parent === rider.torso && mesh.position.z < -.18) { rememberVisibility(mesh); return; }
      const originalMaterial = mesh.material;
      if (!originalMaterial?.color) return;
      const inUpper = below(mesh, rider.torso) || below(mesh, rider.armL?.sh) || below(mesh, rider.armR?.sh);
      const color = mode === 'ocean' ? (inUpper ? '#226f72' : '#283d42') : (inUpper ? '#bc8039' : '#71805a');
      const material = createToonMaterial({ color, map:originalMaterial.map, side:originalMaterial.side }, { rim:.85,hatch:.3 });
      records.push({ mesh, material:originalMaterial, createdMaterials:[material] });
      mesh.material = material;
    });
    if (mode === 'ocean') {
      for (const node of rider.head.children) if (!node.isMesh && Math.abs(node.position.y - .32) < .01) rememberVisibility(node);
      for (const foot of rider.feet) {
        const mesh = new Mesh(new BoxGeometry(.17,.055,.29), createToonMaterial({ color:'#e2b391' }, { rim:.6,hatch:.1 }));
        mesh.name = 'Bare surf foot'; mesh.position.set(0,.026,.025);
        mesh.castShadow = true; foot.add(mesh); classicFeet.push(mesh);
      }
    }
    limitation = '';
  }

  function apply() {
    restore();
    if (mode === 'snow' || disposed) return;
    if (rider.model) applyImported(); else applyClassic();
    appliedModel = rider.model; appliedId = rider.modelId; appliedOutfit = rider.outfit;
  }

  function emit() {
    if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('snowfield:wardrobe', { detail:controller.state }));
  }
  async function ensureSeasonalOutfit(token) {
    if (mode === 'ocean' && rider.modelId === 'female' && rider.outfit !== 'swim') {
      const base = rider.base;
      try {
        await rider.loadOutfit('swim');
        if (token !== serial || rider.base !== base || mode !== 'ocean') return;
        rider.wear('swim');
      } catch (error) {
        console.warn('Dedicated swim outfit unavailable; keeping the selected character.', error);
      }
    }
    if (token !== serial || disposed) return;
    apply(); ready = true; emit();
  }

  const controller = {
    get state() {
      const ocean = mode === 'ocean', swim = rider.modelId === 'female' && rider.outfit === 'swim';
      return Object.freeze({ mode, rider:rider.modelId, outfit:rider.outfit ?? null, ready,
        description: mode === 'snow' ? '雪岭 · 保留你的雪场衣装'
          : ocean ? swim ? '潮汐 · 轻便防晒衣 / 潜水长裤'
            : '潮汐 · 蓝绿防晒衣 / 深色机能长裤'
          : '青岚 · 土黄外衣 / 鼠尾草绿长裤',
        limitations: limitation,
      });
    },
    get boardRoot() { return surfboard.root; },
    get boardDeck() { return surfboard.deck; },
    async setBiome(id) {
      if (!['snow','meadow','ocean'].includes(id)) throw new RangeError(`Unknown wardrobe biome: ${id}`);
      if (disposed) throw new Error('Wardrobe has been disposed.');
      if (mode === id && ready) return controller.state;
      looks.set(mode, snapshot());
      const token = ++serial;
      ready = false; mode = id; restore(); surfboard.root.visible = false;
      // A first coastal visit gets the available real swim body. Later visits
      // remember the user's explicit character choice for that destination.
      if (!looks.has(id)) looks.set(id, id === 'ocean' ? { id:'female',outfit:'swim' } : snapshot());
      const look = looks.get(id);
      try {
        if (rider.modelId !== look.id) await rider.selectModel(look.id);
        if (token !== serial) return controller.state;
        if (look.outfit) { await rider.loadOutfit(look.outfit); if (token !== serial) return controller.state; }
        rider.wear(look.outfit);
        pending = ensureSeasonalOutfit(token);
        await pending;
      } finally {
        if (token === serial) { pending = null; ready = true; emit(); }
      }
      // Recompute equipment after restoring saved visibility. A destination
      // may have changed gear while its stock meshes were hidden by surfing.
      rider.setGear(rider.gear);
      controller.update(0, 0);
      return controller.state;
    },
    update() {
      if (disposed) return;
      if (mode === 'snow') { looks.set('snow', snapshot()); return; }
      if (!pending && ready && (rider.model !== appliedModel || rider.modelId !== appliedId || rider.outfit !== appliedOutfit)) {
        const token = ++serial;
        ready = false;
        pending = ensureSeasonalOutfit(token).finally(() => { if (token === serial) pending = null; });
      }
      const surfing = mode === 'ocean' && rider.locomotion === 'ride';
      surfboard.root.visible = surfing;
      if (mode !== 'ocean') return;
      // Gear/model changes call Rider.#n(), which reopens stock snow equipment.
      // Keep only this visual override per frame; materials are changed once.
      for (const node of [rider.proceduralBoard, rider.boardAssembly, ...rider.skis, ...rider.poles,
        ...rider.bindings, ...rider.boots]) rememberVisibility(node);
      if (surfing) surfboard.updateLeash(rider);
    },
    destroy() {
      ++serial; disposed = true; restore(); surfboard.dispose();
      rider.setGear(rider.gear);
    },
  };
  return controller;
}
