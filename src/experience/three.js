/** The same Three.js r186 module as the recovered game, with readable names.
 * Keep this bridge: a second Three instance would break the renderer's objects.
 */
export {
  G as Group, Ct as Mesh, It as Object3D,
  l as BoxGeometry, E as CylinderGeometry, x as ConeGeometry,
  Vt as PlaneGeometry, tr as SphereGeometry, q as IcosahedronGeometry,
  g as CircleGeometry, lr as TorusGeometry,
  d as BufferGeometry, u as BufferAttribute, B as Float32BufferAttribute,
  dr as Uint16BufferAttribute, fr as Uint32BufferAttribute,
  X as InstancedMesh, St as Matrix4, Kt as Quaternion,
  Cr as Vector3, Sr as Vector2, y as Color, H as Fog,
  Kn as Scene, N as DirectionalLight, wt as MeshBasicMaterial,
  At as MeshStandardMaterial, qn as ShaderMaterial, bt as MathUtils,
  Ut as Points,
  at as Line, ot as LineBasicMaterial,
} from '../vendor/three/core.js';
// These constants were inlined in the published vendor file (not exported).
export const FrontSide = 0;
export const BackSide = 1;
export const DoubleSide = 2;
