import {
  Group, Mesh, BoxGeometry, BufferGeometry, Float32BufferAttribute,
  Vector3, Color, Line, LineBasicMaterial, DoubleSide,
} from '../three.js';
import { createToonMaterial } from '../../recovered/render/toon-materials.js';

export const SURFBOARD_SIZE = Object.freeze({ length: 2.4, width: .60, thickness: .075 });

/** A separate longboard, rather than a stretched version of the ski equipment.
 * Its local -Z is the nose, matching the rider and the ocean solver's heading.
 * The deck is at Y=.014m and the existing rig's sole targets are Y=.025m.
 */
export function createSurfboard() {
  const root = new Group();
  root.name = 'Snowline / 2.4m coastal longboard';
  root.userData.dimensions = { ...SURFBOARD_SIZE };
  const geometry = new BoxGeometry(1, SURFBOARD_SIZE.thickness, SURFBOARD_SIZE.length, 16, 1, 64);
  const positions = geometry.attributes.position, sourceNormals = geometry.attributes.normal;
  const colors = [], cream = new Color('#f2e5c7'), coral = new Color('#cf6a4f');
  const sand = new Color('#c9b991'), underside = new Color('#e5d8b9');
  const color = new Color();
  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i) * 2, z = positions.getZ(i), q = z / 1.2;
    const outline = Math.sqrt(Math.max(.00015, 1 - q * q)) * (.98 - q * .055);
    const rocker = Math.max(0, -z - .68) ** 2 * .36 + Math.max(0, z - .84) ** 2 * .15;
    const upper = sourceNormals.getY(i) > .5;
    // Soft rails and a domed deck remain visible from the gameplay camera.
    positions.setXYZ(i, x * .30 * outline,
      positions.getY(i) - .024 + rocker + (upper ? .009 * (1 - x * x) : 0), z);
    const rail = Math.abs(x) > .82 || Math.abs(sourceNormals.getX(i)) > .5;
    const stringer = upper && Math.abs(x) < .045;
    color.copy(rail || stringer ? coral : upper ? cream : underside);
    if (upper && !rail && !stringer && z > -.55 && z < .63) {
      // Warm wax patches under both feet; their low contrast keeps the ivory
      // deck and coral pinline legible rather than adding a noisy decal.
      const wax = Math.max(0, 1 - Math.abs(x) / .72) * .18;
      color.lerp(sand, wax);
    }
    colors.push(color.r, color.g, color.b);
  }
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  const material = createToonMaterial({ vertexColors: true }, { rim: .65, hatch: .25 });
  const deck = new Mesh(geometry, material);
  deck.name = 'Ivory deck / coral rails';
  deck.castShadow = deck.receiveShadow = true;
  root.add(deck);

  const finMaterial = createToonMaterial({ color: '#3c6863', side: DoubleSide }, { hatch: .2 });
  const finGeometry = new BufferGeometry();
  finGeometry.setAttribute('position', new Float32BufferAttribute([
    0,-.055,.56, 0,-.055,.99, 0,-.21,.85,
  ], 3));
  finGeometry.computeVertexNormals();
  for (const [x, scale] of [[0, 1], [-.17, .68], [.17, .68]]) {
    const fin = new Mesh(finGeometry, finMaterial);
    fin.position.x = x; fin.scale.setScalar(scale);
    fin.name = x === 0 ? 'Centre fin' : 'Side fin';
    fin.castShadow = true; root.add(fin);
  }

  const cordGeometry = new BufferGeometry();
  cordGeometry.setAttribute('position', new Float32BufferAttribute(new Float32Array(39), 3));
  const cordMaterial = new LineBasicMaterial({ color: '#335453', transparent: true, opacity: .85 });
  const cord = new Line(cordGeometry, cordMaterial);
  cord.name = 'Coiled safety leash';
  root.add(cord);
  const start = new Vector3(.12, -.005, .97), ankle = new Vector3();
  function updateLeash(rider) {
    if (!rider?.feet?.[1]) return;
    rider.feet[1].updateWorldMatrix(true, false);
    ankle.set(0, .08, 0).applyMatrix4(rider.feet[1].matrixWorld);
    root.worldToLocal(ankle);
    const a = cordGeometry.attributes.position;
    for (let i = 0; i < a.count; i++) {
      const t = i / (a.count - 1), loop = Math.sin(Math.PI * t);
      a.setXYZ(i, start.x + (ankle.x - start.x) * t + loop * .12,
        start.y + (ankle.y - start.y) * t - loop * .04,
        start.z + (ankle.z - start.z) * t + Math.sin(t * Math.PI * 5) * loop * .035);
    }
    a.needsUpdate = true;
    cordGeometry.computeBoundingSphere();
  }

  return {
    root, deck, updateLeash,
    dispose() {
      root.removeFromParent();
      geometry.dispose(); material.dispose(); finGeometry.dispose(); finMaterial.dispose();
      cordGeometry.dispose(); cordMaterial.dispose();
    },
  };
}
