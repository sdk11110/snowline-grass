/** Original Snowline Roam worlds. Snow is a reversible, untouched baseline.
 * New worlds share its renderer, authored DEM, lighting and character rig.
 * Call update after the recovered scene/weather update, before its render.
 */
import {
  Group, Mesh, BufferGeometry, BufferAttribute, Float32BufferAttribute, InstancedMesh,
  Matrix4, Quaternion, Vector3, Color, CylinderGeometry, SphereGeometry,
  IcosahedronGeometry, MeshBasicMaterial, ShaderMaterial, Points, DoubleSide,
} from './three.js';
import { createToonMaterial } from '../recovered/render/toon-materials.js';
import { OCEAN, OCEAN_WAVES, OCEAN_ISLANDS, OCEAN_FOAM } from './physics/ocean-surface.js';
import { createMeadowStream } from './meadow-stream.js';

export const BIOMES = Object.freeze({
  snow: { name: '雪岭纵行', subtitle: '高山雪场 / Alpine snow', color: '#a7d8dc' },
  meadow: { name: '青岚山谷', subtitle: '山地草场 / Alpine meadow', color: '#b4c77b' },
  ocean: { name: '潮汐海湾', subtitle: '海上冲浪 / Open-water surf', color: '#66c8bf' },
});

const hash = (x, z = 0) => { const n = Math.sin(x * 127.1 + z * 311.7) * 43758.5453; return n - Math.floor(n); };
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const temp = new Vector3();
const MEADOW_WIND_GLSL = `
  float meadowWind(vec2 p,float t){
    return sin(dot(p,vec2(.048,.023))-t*1.12)*.55
      +sin(dot(p,vec2(-.029,.051))-t*.78+1.7)*.29
      +sin(dot(p,vec2(.14,.075))-t*1.71)*.16;
  }
`;

function toon(color, options = {}) {
  return createToonMaterial({ color, ...options }, { hatch: .65 });
}

/** Palette is authored in the material, rather than permanently rewriting DEM colors.
 * aPiste is the exact same route field used by the original snow grooming.
 */
function meadowMaterial(routes = false, backdrop = false, uniforms) {
  const material = toon('#adbe77');
  const original = material.onBeforeCompile;
  material.onBeforeCompile = shader => {
    original(shader);
    shader.uniforms.uMeadowTime = uniforms.time;
    shader.vertexShader = shader.vertexShader.replace('#include <common>', `#include <common>
      varying float vMeadowSlope;
      varying float vMeadowRoute;
      varying float vMeadowOff;
      ${routes ? 'attribute vec3 aPiste;' : ''}`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vMeadowSlope = normal.y;
        vMeadowRoute = ${routes ? 'aPiste.z' : '0.0'};
        vMeadowOff = ${routes ? 'aPiste.x' : '100.0'};`);
    shader.fragmentShader = shader.fragmentShader.replace('#include <common>', `#include <common>
      varying float vMeadowSlope;
      varying float vMeadowRoute;
      varying float vMeadowOff;
      uniform float uMeadowTime;
      ${MEADOW_WIND_GLSL}`)
      .replace('vec3 base = diffuseColor.rgb;', `
        float broad = tNoise(vTWorld.xz * 0.007);
        float meadow = tNoise(vTWorld.xz * 0.055 + broad * 3.0);
        float wind = meadowWind(vTWorld.xz,uMeadowTime);
        vec3 base = mix(vec3(.25,.32,.18), vec3(.53,.56,.31), broad*.62+meadow*.38);
        float rock = 1.0 - smoothstep(0.39, 0.63, vMeadowSlope + (meadow - 0.5) * 0.1);
        base = mix(base, mix(vec3(0.27,0.30,0.24),vec3(0.50,0.51,0.38),broad),rock);
        float route = smoothstep(.35,.8,vMeadowRoute)*(1.0-smoothstep(.55,1.6,abs(vMeadowOff)));
        base = mix(base, mix(vec3(.48,.43,.28),vec3(.62,.56,.37),meadow),route*.65);
        ${backdrop ? 'base = mix(base,vec3(0.37,0.46,0.33),0.2);' : ''}
        // The distant slope reads as a soft, continuous fleece. Broad wind
        // bands are the same field that bends the nearby individual blades.
        base *= .92 + smoothstep(-.6,.7,wind)*.16*(1.0-rock);
        vec2 wool=mat2(.91,-.41,.41,.91)*vTWorld.xz;
        vec2 fibreUV=wool*vec2(.9,3.8)+vec2(wind*.7,0.0);
        float tuft=tNoise(fibreUV);
        // Suppress fibres smaller than a pixel; retain the broad moving wind.
        float footprint=max(length(dFdx(fibreUV)),length(dFdy(fibreUV)));
        float fine = (1.0-smoothstep(.22,.65,footprint))*(1.0-smoothstep(80.0,420.0,length(vViewPosition)));
        base *= 1.0-(tuft-.5)*.11*fine*(1.0-rock);
        base += vec3(.024,.020,.009)*smoothstep(.4,.9,wind)*(1.0-rock);
      `);
  };
  material.customProgramCacheKey = () => `snowline-meadow-fleece-${routes}-${backdrop}-v5`;
  return material;
}

function summerTreeMaterial(original) {
  // Preserve the original far-tree instancing shader, then remap its white snow
  // into leaf colors. Cloning alone does not preserve onBeforeCompile in Three.
  const material = original.clone();
  const before = original.onBeforeCompile;
  material.onBeforeCompile = shader => {
    before.call(original, shader);
    shader.fragmentShader = shader.fragmentShader.replace('vec3 base = diffuseColor.rgb;', `
      vec3 base = diffuseColor.rgb;
      float summerSnow = smoothstep(0.46,0.80,dot(base,vec3(0.299,0.587,0.114)));
      float canopy = tNoise(vTWorld.xz * 0.16 + vTWorld.y * 0.21);
      base = mix(base,mix(vec3(0.23,0.35,0.12),vec3(0.48,0.59,0.23),canopy),summerSnow);
    `);
  };
  material.customProgramCacheKey = () => `${original.customProgramCacheKey()}-snowline-summer`;
  return material;
}

function bladeGeometry(blades = 16, segments = 4) {
  const p = [], n = [], growth = [], seeds = [], indices=[];
  for (let i = 0; i < blades; i++) {
    const angle=i*2.39996,c=Math.cos(angle),s=Math.sin(angle);
    const radius=Math.sqrt((i+.5)/blades)*.48;
    const seedHead=i%4===0;
    const bx=c*radius,bz=s*radius,height=(.68+hash(i+48)*.44)*(seedHead?1.12:1);
    const lean=.23+hash(i+92)*.44,width=.008+hash(i+17)*.010;
    const start=p.length/3;
    for(let j=0;j<=segments;j++){
      const t=j/segments;
      const plume=seedHead?smooth(.62,.75,t)*(1-smooth(.86,1,t))*.012:0;
      const spread=width*Math.pow(1-t,.7)+plume,bend=lean*t*t;
      for(const side of [-1,1]){
        p.push(bx+c*bend-s*spread*side,height*t,bz+s*bend+c*spread*side);
        n.push(-c*.2,.94,-s*.2);growth.push(t);seeds.push((i+.5)/blades);
      }
      if(j<segments){const k=start+j*2;indices.push(k,k+1,k+2,k+1,k+3,k+2);}
    }
  }
  const geo = new BufferGeometry();
  geo.setAttribute('position',new Float32BufferAttribute(p,3));
  geo.setAttribute('normal',new Float32BufferAttribute(n,3));
  geo.setAttribute('aGrowth',new Float32BufferAttribute(growth,1));
  geo.setAttribute('aBladeSeed',new Float32BufferAttribute(seeds,1));
  geo.setIndex(indices);
  return geo;
}

function flowerGeometry() {
  const p = [], n = [], colors = [];
  const add = (a,b,c,color) => { for (const v of [a,b,c]) {p.push(...v);n.push(0,1,0);colors.push(...color);} };
  for(let i=0;i<5;i++){
    const a=i*Math.PI*2/5, b=a+.65;
    add([0,.62,0],[Math.cos(a)*.22,.64,Math.sin(a)*.22],[Math.cos(b)*.22,.64,Math.sin(b)*.22],[1,.96,.77]);
    add([0,.63,0],[Math.cos(a)*.07,.65,Math.sin(a)*.07],[Math.cos(b)*.07,.65,Math.sin(b)*.07],[.95,.65,.12]);
  }
  add([-.018,0,0],[.018,0,0],[0,.62,0],[.22,.36,.12]);
  const geo=new BufferGeometry();
  geo.setAttribute('position',new Float32BufferAttribute(p,3));
  geo.setAttribute('normal',new Float32BufferAttribute(n,3));
  geo.setAttribute('color',new Float32BufferAttribute(colors,3));
  return geo;
}

export function createMeadowDetails(game) {
  const group = new Group(); group.name = 'Snowline meadow ecology';
  // Leave the ground's depth for the ink pass. Per-blade depth would turn a
  // soft grass fleece into a mass of black wires, even without normal outlines.
  const grassMaterial = toon('#ffffff',{side:DoubleSide,depthWrite:false});
  const uniforms={time:{value:0},player:{value:new Vector3()}};
  const before=grassMaterial.onBeforeCompile;
  grassMaterial.onBeforeCompile=shader=>{
    before(shader);shader.uniforms.uMeadowTime=uniforms.time;shader.uniforms.uMeadowPlayer=uniforms.player;
    shader.vertexShader=shader.vertexShader.replace('#include <common>',`#include <common>
      uniform float uMeadowTime;uniform vec3 uMeadowPlayer;
      attribute float aGrowth;attribute float aBladeSeed;attribute vec2 aGrassRange;
      varying float vBladeGrowth;varying float vBladeWind;
      varying float vGrassVisibility;varying float vGrassSeed;
      ${MEADOW_WIND_GLSL}`)
      .replace('#include <begin_vertex>',`#include <begin_vertex>
      vec2 bladeWorld=(instanceMatrix*vec4(0.0,0.0,0.0,1.0)).xz;
      float grassDistance=length(bladeWorld-uMeadowPlayer.xz);
      float outerFade=1.0-smoothstep(aGrassRange.y-12.0,aGrassRange.y,grassDistance);
      float innerFade=aGrassRange.x>0.0?smoothstep(aGrassRange.x,aGrassRange.x+7.0,grassDistance):1.0;
      vGrassVisibility=outerFade*innerFade;
      vGrassSeed=fract(sin(dot(bladeWorld,vec2(12.9898,78.233))+aBladeSeed*93.73)*43758.5453);
      float breeze=meadowWind(bladeWorld,uMeadowTime);
      float flutter=sin(dot(bladeWorld,vec2(1.3,1.9))+uMeadowTime*4.2)*.035;
      vec2 windDirection=normalize(vec2(.91,.41));
      vec2 localWind=normalize(vec2(dot(instanceMatrix[0].xz,windDirection),dot(instanceMatrix[2].xz,windDirection)));
      transformed.xz+=localWind*aGrowth*aGrowth*(.27+breeze*.25+flutter);
      vec2 playerDelta=bladeWorld-uMeadowPlayer.xz;
      float pressed=1.0-smoothstep(.55,2.1,length(playerDelta));
      vec2 away=normalize(playerDelta+vec2(.001));
      vec2 localAway=vec2(dot(instanceMatrix[0].xz,away),dot(instanceMatrix[2].xz,away));
      transformed.y*=1.0-pressed*.74;
      transformed.xz+=localAway*aGrowth*aGrowth*pressed*.65;
      vBladeGrowth=aGrowth;vBladeWind=breeze;`);
    shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>\nvarying float vBladeGrowth;varying float vBladeWind;varying float vGrassVisibility;varying float vGrassSeed;`)
      .replace('#include <clipping_planes_fragment>',`#include <clipping_planes_fragment>
        // Fade by stable individual blades, never squash an instance into the
        // terrain. Flattened curved leaves caused z-fighting and black bands.
        if(vGrassVisibility<=0.0 || vGrassSeed>vGrassVisibility)discard;`)
      .replace('vec3 base = diffuseColor.rgb;',`
        vec3 base=diffuseColor.rgb;
        float goldenTip=smoothstep(.58,.98,vBladeGrowth);
        base=mix(base,vec3(.73,.64,.39),goldenTip*.84);
        base*=.91+smoothstep(-.6,.7,vBladeWind)*.18;
        // Warm translucent blade edges; restrained so shadow still has shape.
        base+=vec3(.034,.029,.013)*goldenTip;
      `)
      .replace('outgoingLight = col + totalEmissiveRadiance;',`
        // A thin blade transmits the warm light. Preserve broad shadow shape
        // while avoiding the grey, opaque backs of a solid tree material.
        vec3 transmitted=base*vec3(1.09,1.035,.88);
        col=mix(col,transmitted,.69);
        outgoingLight=col+totalEmissiveRadiance;
      `);
  };
  grassMaterial.customProgramCacheKey=()=> 'snowline-tussock-stream-fade-v6';
  const mobile=typeof window!=='undefined'&&window.innerWidth<760;
  // Capacity is a stable border pool, not a quota cropped in world-Z order.
  // Count contains only active world cells and upload ranges contain changes.
  const grass=new InstancedMesh(bladeGeometry(22,4),grassMaterial,mobile?7000:12000);
  grass.name='Soft curved tussock grass · near';grass.receiveShadow=true;grass.frustumCulled=false;grass.renderOrder=1;
  const midGrass=new InstancedMesh(bladeGeometry(8,2),grassMaterial,mobile?12000:20000);
  midGrass.name='Continuous grass fleece · middle distance';midGrass.receiveShadow=false;midGrass.frustumCulled=false;midGrass.renderOrder=1;
  const flowers=new InstancedMesh(flowerGeometry(),toon('#ffffff',{vertexColors:true,side:DoubleSide}),500);
  flowers.name='Alpine wildflowers';flowers.frustumCulled=false;
  group.add(grass,midGrass,flowers);game.scene.add(group);group.visible=false;
  const stream=createMeadowStream({game,grass,midGrass,flowers,mobile});
  return {group,uniforms,stream,prepare:()=>stream.prepare(),update(time){uniforms.time.value=time;uniforms.player.value.copy(game.phys.pos);stream.update();},invalidate(){stream.invalidate();},destroy(){stream.destroy();group.removeFromParent();disposeGroup(group);}};
}

/** A 1 m close grid stitched to increasingly wide square rings: detailed under
 * the board, ~20k vertices total, and an unbroken horizon without stacked planes.
 */
function oceanGrid() {
  const subdivisions=128,half=64,p=[],index=[];
  for(let z=0;z<=subdivisions;z++)for(let x=0;x<=subdivisions;x++)p.push(-half+x/subdivisions*half*2,0,-half+z/subdivisions*half*2);
  for(let z=0;z<subdivisions;z++)for(let x=0;x<subdivisions;x++){
    const a=z*(subdivisions+1)+x,b=a+1,c=a+subdivisions+1;
    index.push(a,c,b,b,c,c+1);
  }
  let edge=[];
  for(let x=0;x<subdivisions;x++)edge.push(x);
  for(let z=0;z<subdivisions;z++)edge.push(z*(subdivisions+1)+subdivisions);
  for(let x=subdivisions;x>0;x--)edge.push(subdivisions*(subdivisions+1)+x);
  for(let z=subdivisions;z>0;z--)edge.push(z*(subdivisions+1));
  for(const outer of [80,96,112,128,160,192,256,320,560,960,1800,3400]){
    const ring=[];
    for(let side=0;side<4;side++)for(let j=0;j<subdivisions;j++){
      const t=j/subdivisions,xy=[[-1+2*t,-1],[1,-1+2*t],[1-2*t,1],[-1,1-2*t]][side];
      ring.push(p.length/3);p.push(xy[0]*outer,0,xy[1]*outer);
    }
    for(let j=0;j<ring.length;j++){const k=(j+1)%ring.length;index.push(edge[j],edge[k],ring[j],edge[k],ring[k],ring[j]);}
    edge=ring;
  }
  const geo=new BufferGeometry();geo.setAttribute('position',new Float32BufferAttribute(p,3));geo.setIndex(index);geo.computeVertexNormals();geo.computeBoundingSphere();
  return geo;
}

const glslNumber=n=>Number(n).toFixed(9);
function oceanWaveShader() {
  return `vec4 oceanWave(vec2 world,float time){
    vec2 q=world-vec2(${glslNumber(OCEAN.center.x)},${glslNumber(OCEAN.center.z)});
    float h=${glslNumber(OCEAN.base)}, dx=0.0,dz=0.0,mainUnit=0.0;
    ${OCEAN_WAVES.map((w,i)=>`{
      vec2 d=vec2(${w.direction.map(glslNumber).join(',')});
      float k=${glslNumber(Math.PI*2/w.wavelength)};
      float p=k*dot(d,q)-${glslNumber(w.omega)}*time+${glslNumber(w.phase)};
      h+=${glslNumber(w.amplitude)}*(sin(p)+${glslNumber(w.sharpness)}*sin(2.0*p));
      ${i===0?`mainUnit=sin(p)+${glslNumber(w.sharpness)}*sin(2.0*p);`:''}
      float derivative=${glslNumber(w.amplitude)}*(cos(p)+${glslNumber(w.sharpness*2)}*cos(2.0*p))*k;
      dx+=derivative*d.x;dz+=derivative*d.y;
    }`).join('\n')}
    return vec4(h,dx,dz,mainUnit);
  }`;
}

function createWater(surface) {
  const material=toon('#228f98',{side:DoubleSide});
  const time={value:0},origin={value:new Vector3(OCEAN.center.x,0,OCEAN.center.z)};
  const before=material.onBeforeCompile;
  material.onBeforeCompile=shader=>{
    before(shader);Object.assign(shader.uniforms,{uOceanTime:time,uPatchOrigin:origin});
    shader.vertexShader=shader.vertexShader.replace('#include <common>',`#include <common>
      uniform float uOceanTime;uniform vec3 uPatchOrigin;
      varying float vOceanCrest;varying float vOceanSlope;varying float vOceanHeight;
      ${oceanWaveShader()}`)
      .replace('#include <beginnormal_vertex>',`#include <beginnormal_vertex>
        vec4 oceanData=oceanWave(position.xz+uPatchOrigin.xz,uOceanTime);
        objectNormal=normalize(vec3(-oceanData.y,1.0,-oceanData.z));`)
      .replace('#include <begin_vertex>',`#include <begin_vertex>
        transformed.y=oceanData.x;
        vOceanCrest=oceanData.w;vOceanSlope=length(oceanData.yz);vOceanHeight=oceanData.x;`);
    shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
      uniform float uOceanTime;varying float vOceanCrest;varying float vOceanSlope;varying float vOceanHeight;`)
      .replace('vec3 base = diffuseColor.rgb;',`
        vec2 oq=vTWorld.xz-vec2(${OCEAN.center.x.toFixed(1)},${OCEAN.center.z.toFixed(1)});
        float shore=min(length((oq-vec2(-330.0,-80.0))/vec2(150.0,290.0)),length((oq-vec2(390.0,-500.0))/vec2(170.0,140.0)));
        float shallow=1.0-smoothstep(1.05,1.65,shore);
        float detail=tNoise(oq*.40+vec2(uOceanTime*.32,uOceanTime*.61));
        float smallFoam=tNoise(oq*1.65+vec2(uOceanTime*.48,-uOceanTime*.76));
        vec3 base=mix(vec3(.014,.15,.21),vec3(.035,.47,.43),clamp(.52+vOceanHeight*.11,0.0,1.0));
        base+=vec3(.035,.095,.055)*smoothstep(.2,.95,vOceanCrest);
        base=mix(base,vec3(.20,.69,.61),shallow*.7);
        float crest=smoothstep(${OCEAN_FOAM.crestStart.toFixed(3)},${OCEAN_FOAM.crestEnd.toFixed(3)},vOceanCrest);
        float steepFoam=smoothstep(${OCEAN_FOAM.slopeStart.toFixed(3)},${OCEAN_FOAM.slopeEnd.toFixed(3)},vOceanSlope);
        float foam=crest*(${OCEAN_FOAM.base.toFixed(3)}+${(1-OCEAN_FOAM.base).toFixed(3)}*steepFoam);
        foam*=smoothstep(.22,.59,detail*.58+smallFoam*.42);
        float shoreline=(1.0-smoothstep(.035,.10,abs(shore-1.04+sin(uOceanTime*1.7)*.012)))*smoothstep(.3,.7,detail);
        float fresnel=pow(1.0-abs(dot(normalize(normal),normalize(vViewPosition))),3.0);
        base=mix(base,vec3(.23,.56,.59),fresnel*.48);
        base=mix(base,vec3(.83,.94,.84),max(foam*.94,shoreline*.88));
      `)
      .replace('outgoingLight = col + totalEmissiveRadiance;',`
        float sparkle=pow(max(0.0,dot(reflect(-normalize(vec3(.62,.55,.56)),normal),normalize(vViewPosition))),96.0);
        float shimmer=smoothstep(.66,.76,tNoise(vTWorld.xz*.9+uOceanTime*.25));
        col+=vec3(1.0,.88,.60)*sparkle*shimmer*.8;
        outgoingLight=col+totalEmissiveRadiance;
      `);
  };
  material.customProgramCacheKey=()=> 'snowline-shared-wave-water-v6';
  const mesh=new Mesh(oceanGrid(),material);mesh.name='Shared-wave surf surface';mesh.frustumCulled=false;mesh.position.set(OCEAN.center.x,0,OCEAN.center.z);
  return {mesh,update(pos){time.value=surface.time;mesh.position.x=Math.round(pos.x/24)*24;mesh.position.z=Math.round(pos.z/24)*24;origin.value.copy(mesh.position);}};
}

const ISLANDS=OCEAN_ISLANDS.map((island,i)=>({...island,seed:[4,13,32][i]}));

function islandHeight(x,z,island) {
  const qx=(x-island.x)/island.rx,qz=(z-island.z)/island.rz;
  const r=Math.hypot(qx,qz),a=Math.atan2(qz,qx);
  const edge=1+.055*Math.sin(a*5+island.seed)+.035*Math.cos(a*7-island.seed);
  const d=r/edge;
  const ridge=.88+.13*Math.sin(qx*5.2+island.seed)+.10*Math.cos(qz*6.3-island.seed*.7);
  const shoulder=1.5*Math.sin(qx*14+qz*8)*Math.sin(qz*11-island.seed)*Math.max(0,1-d);
  return -5+Math.pow(Math.max(0,1-d),1.48)*island.height*ridge+6*(1-smooth(.76,1.10,d))+shoulder;
}

function createIsland(island) {
  const group=new Group();group.name='Coastal island';
  group.position.set(OCEAN.center.x+island.x,0,OCEAN.center.z+island.z);
  const p=[],color=[],index=[],c=new Color(),rings=32,sides=80;
  for(let r=0;r<=rings;r++)for(let a=0;a<=sides;a++){
    const theta=a/sides*Math.PI*2,rr=r/rings*1.16;
    const x=Math.cos(theta)*island.rx*rr,z=Math.sin(theta)*island.rz*rr;
    const y=islandHeight(x+island.x,z+island.z,island);
    p.push(x,y,z);
    c.set(y<4?'#d7bf80':y<8?'#a0ab57':'#5d8145');
    c.multiplyScalar(.93+hash(r,a)*.13);color.push(c.r,c.g,c.b);
    if(r<rings&&a<sides){const i=r*(sides+1)+a;index.push(i,i+1,i+sides+1,i+1,i+sides+2,i+sides+1);}
  }
  const geo=new BufferGeometry();geo.setAttribute('position',new Float32BufferAttribute(p,3));geo.setAttribute('color',new Float32BufferAttribute(color,3));geo.setIndex(index);geo.computeVertexNormals();
  const land=new Mesh(geo,toon('#ffffff',{vertexColors:true}));land.receiveShadow=true;land.castShadow=true;group.add(land);
  const rockGeo=new IcosahedronGeometry(1,1),rockMaterial=toon('#5e7169',{flatShading:true});
  const rocks=new InstancedMesh(rockGeo,rockMaterial,56),caps=new InstancedMesh(rockGeo,toon('#969a7c',{flatShading:true}),56);
  rocks.castShadow=rocks.receiveShadow=true;caps.castShadow=caps.receiveShadow=true;
  const matrix=new Matrix4(),rotation=new Quaternion(),scale=new Vector3(),pos=new Vector3(),up=new Vector3(0,1,0),tint=new Color();
  for(let i=0;i<56;i++){
    const a=hash(i,island.seed)*Math.PI*2,r=.68+hash(i+19,island.seed)*.27;
    const x=Math.cos(a)*island.rx*r,z=Math.sin(a)*island.rz*r,y=islandHeight(x+island.x,z+island.z,island);
    const s=3+hash(i+24,island.seed)*8;rotation.setFromAxisAngle(up,i*1.81);
    pos.set(x,y-.9,z);scale.set(s,s*.52,s*.79);matrix.compose(pos,rotation,scale);rocks.setMatrixAt(i,matrix);
    tint.set('#a1b2a2').multiplyScalar(.73+hash(i,42)*.27);rocks.setColorAt(i,tint);
    pos.y+=s*.33;scale.set(s*.81,s*.28,s*.67);matrix.compose(pos,rotation,scale);caps.setMatrixAt(i,matrix);
    tint.set('#e4dfb6').multiplyScalar(.76+hash(i,48)*.24);caps.setColorAt(i,tint);
  }
  group.add(rocks,caps);
  const shrubs=new InstancedMesh(new IcosahedronGeometry(1,1),toon('#72924d',{flatShading:true}),110);shrubs.receiveShadow=true;
  for(let i=0;i<110;i++){
    const a=hash(i+89,island.seed)*Math.PI*2,r=Math.sqrt(hash(i+45,island.seed))*.78;
    const x=Math.cos(a)*island.rx*r,z=Math.sin(a)*island.rz*r,y=islandHeight(x+island.x,z+island.z,island);
    const s=2+hash(i+31,island.seed)*4;pos.set(x,y+s*.35,z);scale.set(s,s*.58,s*.9);rotation.setFromAxisAngle(up,i*1.13);matrix.compose(pos,rotation,scale);shrubs.setMatrixAt(i,matrix);
    tint.set('#c9cc91').lerp(new Color('#739460'),hash(i,island.seed));shrubs.setColorAt(i,tint);
  }
  group.add(shrubs);
  for(let i=0;i<22;i++){
    const a=hash(i+48,island.seed)*Math.PI*2,r=.45+hash(i+62,island.seed)*.38;
    const x=Math.cos(a)*island.rx*r,z=Math.sin(a)*island.rz*r,y=islandHeight(x+island.x,z+island.z,island);
    if(y<3)continue;
    const palm=createPalm(7+hash(i+71,island.seed)*7,i+island.seed);palm.position.set(x,y-.2,z);palm.rotation.y=hash(i,island.seed+9)*Math.PI*2;group.add(palm);
  }
  return group;
}

function createPalm(height,seed){
  const group=new Group();const bend=Math.sin(seed)*height*.16;
  const trunk=new Mesh(new CylinderGeometry(.18,.43,height,7,5),toon('#796a43'));trunk.position.set(bend*.4,height/2,0);trunk.rotation.z=-bend/height;trunk.castShadow=true;group.add(trunk);
  const positions=[],colors=[],leafColor=new Color();
  for(let leaf=0;leaf<8;leaf++){
    const angle=leaf*Math.PI/4+seed,dx=Math.cos(angle),dz=Math.sin(angle),len=height*.55;
    for(let i=0;i<9;i++){
      const a=i/9,b=(i+1)/9;
      const point=(t,side)=>{const width=Math.sin(t*Math.PI)*len*.14*side;return [bend+dx*t*len-dz*width,height+Math.sin(t*Math.PI)*len*.12-t*t*len*.33,dz*t*len+dx*width];};
      for(const vertex of [point(a,0),point(b,-1),point(b,0),point(a,0),point(b,0),point(b,1)]){
        positions.push(...vertex);leafColor.set(leaf%2?'#638a3d':'#799b4b');colors.push(leafColor.r,leafColor.g,leafColor.b);
      }
    }
  }
  const geo=new BufferGeometry();geo.setAttribute('position',new Float32BufferAttribute(positions,3));geo.setAttribute('color',new Float32BufferAttribute(colors,3));geo.computeVertexNormals();
  const leaves=new Mesh(geo,toon('#ffffff',{vertexColors:true,side:DoubleSide}));leaves.castShadow=true;group.add(leaves);return group;
}

function createSurfWake(surface){
  const limit=96,positions=new Float32Array(limit*6),sides=new Float32Array(limit*2),fades=new Float32Array(limit*2),indices=[];
  for(let i=0;i<limit;i++){sides[i*2]=-1;sides[i*2+1]=1;if(i<limit-1)indices.push(i*2,i*2+1,i*2+2,i*2+1,i*2+3,i*2+2);}
  const geo=new BufferGeometry();geo.setAttribute('position',new BufferAttribute(positions,3));geo.setAttribute('aWakeSide',new BufferAttribute(sides,1));geo.setAttribute('aWakeFade',new BufferAttribute(fades,1));geo.setIndex(indices);geo.setDrawRange(0,0);
  const material=new MeshBasicMaterial({color:'#d3eeeb',transparent:true,opacity:.42,depthWrite:false,side:DoubleSide});
  material.onBeforeCompile=shader=>{
    shader.vertexShader=shader.vertexShader.replace('#include <common>',`#include <common>\nattribute float aWakeSide;attribute float aWakeFade;varying float vWakeSide;varying float vWakeFade;varying vec2 vWakeWorld;`)
      .replace('#include <begin_vertex>',`#include <begin_vertex>\nvWakeSide=aWakeSide;vWakeFade=aWakeFade;vWakeWorld=position.xz;`);
    shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
      varying float vWakeSide;varying float vWakeFade;varying vec2 vWakeWorld;
      float wakeHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float wakeNoise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);return mix(mix(wakeHash(i),wakeHash(i+vec2(1,0)),u.x),mix(wakeHash(i+vec2(0,1)),wakeHash(i+vec2(1,1)),u.x),u.y);}`)
      .replace('#include <opaque_fragment>',`
        float edge=1.0-smoothstep(.28,.98,abs(vWakeSide));
        float grains=wakeNoise(vWakeWorld*3.1)*.67+wakeNoise(vWakeWorld*8.3)*.33;
        float broken=smoothstep(.31,.70,grains);
        diffuseColor.a*=vWakeFade*edge*broken;
        #include <opaque_fragment>`);
  };
  material.customProgramCacheKey=()=> 'snowline-surf-wake-v1';
  const mesh=new Mesh(geo,material);mesh.name='Board wake';mesh.frustumCulled=false;mesh.renderOrder=2;
  const samples=[];
  return {mesh,reset(){samples.length=0;geo.setDrawRange(0,0);},update(phys){
    const time=surface.time,pos=phys.pos;
    if(samples[0]&&Math.hypot(pos.x-samples[0].x,pos.z-samples[0].z)>30)samples.length=0;
    if(phys.grounded&&phys.speed>1.4&&(!samples[0]||Math.hypot(pos.x-samples[0].x,pos.z-samples[0].z)>.55)){
      samples.unshift({x:pos.x,z:pos.z,time,dx:-Math.sin(phys.yaw),dz:-Math.cos(phys.yaw),strength:clamp(phys.speed/8,.1,1)});
    }
    while(samples.length>limit||samples.at(-1)&&time-samples.at(-1).time>3.4)samples.pop();
    for(let i=0;i<samples.length;i++){
      const s=samples[i],age=time-s.time,width=.32+age*.32;
      for(let edge=0;edge<2;edge++){
        const side=edge?1:-1,x=s.x-s.dz*side*width,z=s.z+s.dx*side*width,j=i*6+edge*3;
        positions[j]=x;positions[j+1]=surface.heightAt(x,z)+.045;positions[j+2]=z;
        fades[i*2+edge]=Math.pow(1-age/3.4,2.0)*s.strength;
      }
    }
    geo.attributes.position.needsUpdate=true;geo.attributes.aWakeFade.needsUpdate=true;geo.setDrawRange(0,Math.max(0,samples.length-1)*6);
  }};
}

/** Ballistic spray in world space, rather than reusing the snow emitter.
 * Board rails throw fans when carving; real crest samples emit finer spindrift.
 * Every particle falls back onto the same moving surface as the board.
 */
function createSurfSpray(game,surface){
  const count=1800,positions=new Float32Array(count*3),sizes=new Float32Array(count),opacities=new Float32Array(count);
  const velocities=new Float32Array(count*3),ages=new Float32Array(count),lifetimes=new Float32Array(count),baseSizes=new Float32Array(count);
  const streaks=new Float32Array(count);
  ages.fill(100);lifetimes.fill(1);
  const geo=new BufferGeometry();geo.setAttribute('position',new BufferAttribute(positions,3));geo.setAttribute('aSize',new BufferAttribute(sizes,1));geo.setAttribute('aOpacity',new BufferAttribute(opacities,1));geo.setAttribute('aVelocity',new BufferAttribute(velocities,3));geo.setAttribute('aStreak',new BufferAttribute(streaks,1));
  const uniforms={uViewHeight:{value:900},uSprayColor:{value:new Color('#c8eeee')}};
  const material=new ShaderMaterial({
    transparent:true,depthWrite:false,uniforms,
    vertexShader:`attribute float aSize;attribute float aOpacity;attribute vec3 aVelocity;attribute float aStreak;
      uniform float uViewHeight;varying float vOpacity;varying float vStreak;varying float vAngle;
      void main(){vec4 mv=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mv;
        gl_PointSize=clamp(aSize*uViewHeight/max(1.0,-mv.z)*mix(1.0,2.6,aStreak),1.0,mix(5.0,11.0,aStreak));
        vec3 projectedVelocity=mat3(modelViewMatrix)*aVelocity;
        vAngle=atan(projectedVelocity.y,projectedVelocity.x);vOpacity=aOpacity;vStreak=aStreak;
      }`,
    fragmentShader:`uniform vec3 uSprayColor;varying float vOpacity;varying float vStreak;varying float vAngle;
      void main(){vec2 q=gl_PointCoord*2.0-1.0;
        float c=cos(vAngle),s=sin(vAngle);q=mat2(c,-s,s,c)*q;q.y/=mix(1.0,.14,vStreak);float r=dot(q,q);
        if(r>1.0||vOpacity<.005)discard;
        float a=(1.0-smoothstep(.55,1.0,r))*vOpacity;
        gl_FragColor=vec4(uSprayColor,a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const points=new Points(geo,material);points.name='Ocean rail spray and breaking-crest spindrift';points.frustumCulled=false;points.renderOrder=3;
  let cursor=0,serial=0,lastTime=surface.time,boardDebt=0;
  const sample={};
  function emit(x,y,z,vx,vy,vz,size,life){
    const i=cursor,j=i*3;positions[j]=x;positions[j+1]=y;positions[j+2]=z;velocities[j]=vx;velocities[j+1]=vy;velocities[j+2]=vz;
    sizes[i]=baseSizes[i]=size;ages[i]=0;lifetimes[i]=life;opacities[i]=.42;streaks[i]=serial%11===0?1:0;cursor=(cursor+1)%count;
  }
  return {points,reset(){ages.fill(100);sizes.fill(0);opacities.fill(0);lastTime=surface.time;boardDebt=0;},get active(){let n=0;for(let i=0;i<count;i++)if(ages[i]<lifetimes[i])n++;return n;},update(){
    const now=surface.time,dt=clamp(now-lastTime,0,.06);lastTime=now;if(!dt)return;
    const phys=game.phys,pos=phys.pos,feedback=phys.surf||{};
    uniforms.uViewHeight.value=game.renderer?.domElement?.height??900;
    const night=game.environment.sky.material.uniforms.uNight?.value??0;
    uniforms.uSprayColor.value.set(night>.3?'#78aeb8':'#c8eeee');
    const speed=Math.hypot(phys.vel?.x||0,phys.vel?.z||0),spray=feedback.spray??clamp(Math.abs(phys.yawRate)*speed*.1,0,1);
    if(phys.grounded&&speed>2){
      boardDebt+=dt*(20+spray*270);
      const fx=-Math.sin(phys.yaw),fz=-Math.cos(phys.yaw),rx=-fz,rz=fx;
      while(boardDebt>=1){
        boardDebt--;const id=serial++,side=id%2?1:-1,r=hash(id,1),s=hash(id,3);
        const railX=pos.x+rx*side*(.28+r*.15)-fx*.45,railZ=pos.z+rz*side*(.28+r*.15)-fz*.45;
        const fan=(1.2+spray*3.5)*(side===Math.sign(phys.yawRate||1)?1.45:.6);
        emit(railX,surface.heightAt(railX,railZ)+.12,railZ,
          phys.vel.x*.17+rx*side*fan-fx*speed*.14,
          1.0+r*1.8+spray*2.2,
          phys.vel.z*.17+rz*side*fan-fz*speed*.14,
          .018+s*.047,.28+r*.40);
      }
    }
    // A finite near-water patch avoids simulating the entire ocean. Candidates
    // emit only on actual high, steep crests, so the cloud follows the waves.
    const candidates=Math.ceil(dt*1600);
    for(let n=0;n<candidates;n++){
      const id=serial++,x=pos.x+(hash(id,11)-.5)*118,z=pos.z+(hash(id,13)-.5)*118;
      surface.waveInfoAt(x,z,sample);
      if(sample.foam<.46||hash(id,17)>sample.foam*.68)continue;
      const size=hash(id,23)>.97?.12:.018+hash(id,19)*.067;
      emit(x,sample.height+.10,z,sample.flowX*1.1+1.1,1.1+hash(id,18)*1.8,sample.flowZ*1.1+.5,size,.32+hash(id,21)*.43);
    }
    for(let i=0;i<count;i++){
      ages[i]+=dt;if(ages[i]>=lifetimes[i]){sizes[i]=0;opacities[i]=0;continue;}
      const j=i*3,life=ages[i]/lifetimes[i];velocities[j+1]-=5.8*dt;
      positions[j]+=velocities[j]*dt;positions[j+1]+=velocities[j+1]*dt;positions[j+2]+=velocities[j+2]*dt;
      if(ages[i]>.16&&positions[j+1]<surface.heightAt(positions[j],positions[j+2])+.035){ages[i]=lifetimes[i];sizes[i]=0;opacities[i]=0;continue;}
      sizes[i]=baseSizes[i]*(1+life*.15);opacities[i]=Math.sin(Math.PI*clamp(life*1.15,0,1))*.40;
    }
    geo.attributes.position.needsUpdate=true;geo.attributes.aSize.needsUpdate=true;geo.attributes.aOpacity.needsUpdate=true;geo.attributes.aVelocity.needsUpdate=true;geo.attributes.aStreak.needsUpdate=true;
  }};
}

function createOceanDetails(game,surface){
  const group=new Group();group.name='Snowline coastal world';
  const water=createWater(surface);group.add(water.mesh);
  const wake=createSurfWake(surface);group.add(wake.mesh);
  const spray=createSurfSpray(game,surface);group.add(spray.points);
  for(const island of ISLANDS)group.add(createIsland(island));
  // Surf gates are navigable landmarks; their width leaves room for a full turn.
  const floatGeo=new SphereGeometry(1,12,8),floatMaterial=toon('#e2b552'),flagMaterial=toon('#e99c67',{side:DoubleSide});
  const buoys=[];
  for(let gate=0;gate<7;gate++)for(const side of [-1,1]){
    const x=Math.sin(gate*.9)*84+side*29,z=50-gate*105;
    const buoy=new Group();buoy.position.set(OCEAN.center.x+x,0,OCEAN.center.z+z);
    const ball=new Mesh(floatGeo,floatMaterial);ball.scale.set(.65,.72,.65);buoy.add(ball);
    const pole=new Mesh(new CylinderGeometry(.035,.035,1.7,5),toon('#394e49'));pole.position.y=1;buoy.add(pole);
    const flagGeo=new BufferGeometry();flagGeo.setAttribute('position',new Float32BufferAttribute([0,1.7,0,1.1,1.45,0,0,1.15,0],3));flagGeo.computeVertexNormals();buoy.add(new Mesh(flagGeo,flagMaterial));
    group.add(buoy);buoys.push(buoy);
  }
  // High, distant headlands give the open water a designed horizon.
  for(const [x,z,s] of [[-1450,-1700,180],[1100,-2100,240],[1750,-1300,150]]){
    const rock=new Mesh(new IcosahedronGeometry(1,1),toon('#789b90',{flatShading:true}));rock.position.set(OCEAN.center.x+x,10,OCEAN.center.z+z);rock.scale.set(s,s*.4,s*.9);rock.rotation.y=x;group.add(rock);
  }
  game.scene.add(group);group.visible=false;
  return {group,outlineExclusions:[water.mesh,wake.mesh],get activeSpray(){return spray.active;},reset(){wake.reset();spray.reset();},update(){water.update(game.phys.pos);wake.update(game.phys);spray.update();for(const b of buoys){b.position.y=surface.heightAt(b.position.x,b.position.z)+.25;surface.normalAt(b.position.x,b.position.z,temp);b.rotation.x=temp.z*.3;b.rotation.z=-temp.x*.3;}},destroy(){group.removeFromParent();disposeGroup(group);}};
}

function disposeGroup(group){
  const geometries=new Set(),materials=new Set();group.traverse(o=>{if(o.geometry)geometries.add(o.geometry);for(const m of [].concat(o.material||[]))materials.add(m);});
  geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());
}

export function createBiomeWorlds(game,{physics=game.biomePhysics}={}) {
  if(!game.environment?.world||!physics?.surface)throw new Error('Biome rendering requires the world environment and shared ocean surface.');
  const env=game.environment,scene=game.scene;
  const originals=new Map(),adapted=new Set(),originalVisibility=new Map();
  const materialCache=new Map();
  const meadow=createMeadowDetails(game),ocean=createOceanDetails(game,physics.surface);
  const ownRoots=new Set([meadow.group,ocean.group]);
  const terrainMaterials=[meadowMaterial(false,false,meadow.uniforms),meadowMaterial(true,false,meadow.uniforms),meadowMaterial(false,true,meadow.uniforms)];terrainMaterials.forEach(m=>adapted.add(m));
  let mode='snow',destroyed=false;

  function replace(object,material){if(!originals.has(object))originals.set(object,object.material);object.material=material;}
  function patchObject(o,kind){
    if(mode!=='meadow'||!o.isMesh||!o.material)return;
    if(kind==='terrain')replace(o,terrainMaterials[o.geometry?.hasAttribute('aPiste')?1:0]);
    else if(kind==='backdrop')replace(o,terrainMaterials[2]);
    else if(!adapted.has(o.material)){
      let summer=materialCache.get(o.material);if(!summer){summer=summerTreeMaterial(o.material);materialCache.set(o.material,summer);adapted.add(summer);}
      replace(o,summer);
    }
  }
  // LOD meshes announce their additions/removals synchronously. Patch only
  // changed nodes, instead of traversing ~1000 objects on every rendered frame.
  const watched=new Map();
  function watchTree(node,kind){
    if(!node||watched.has(node))return;
    const added=event=>watchTree(event.child,kind),removed=event=>unwatchTree(event.child);
    node.addEventListener('childadded',added);node.addEventListener('childremoved',removed);
    watched.set(node,{kind,added,removed});patchObject(node,kind);
    for(const child of node.children)watchTree(child,kind);
  }
  function unwatchTree(node){
    const record=watched.get(node);if(!record)return;
    for(const child of node.children)unwatchTree(child);
    node.removeEventListener('childadded',record.added);node.removeEventListener('childremoved',record.removed);watched.delete(node);
    if(originals.has(node)){node.material=originals.get(node);originals.delete(node);}
  }
  watchTree(env.world.terrain,'terrain');watchTree(env.backdrop,'backdrop');watchTree(env.world.forest.group,'forest');
  function patchMeadow(){for(const [node,record]of watched)patchObject(node,record.kind);}
  function restoreMaterials(){for(const [o,m]of originals)o.material=m;originals.clear();}
  function rememberVisibility(o){if(o&&!originalVisibility.has(o))originalVisibility.set(o,o.visible);}
  function restoreVisibility(){for(const[o,v]of originalVisibility)o.visible=v;originalVisibility.clear();}
  function applyVisibility(){
    if(mode==='ocean'){
      for(const child of scene.children){
        if(ownRoots.has(child)||child===game.rider.root||child===game.camera||child===env.sky||child.isLight||child===env.sun?.target)continue;
        rememberVisibility(child);child.visible=false;
      }
    }else if(mode==='meadow')for(const effect of env.snowEffects||[]){rememberVisibility(effect);effect.visible=false;}
    meadow.group.visible=mode==='meadow';ocean.group.visible=mode==='ocean';
  }
  async function setBiome(id){
    if(id==='grass')id='meadow';if(!BIOMES[id])throw new Error(`Unknown destination: ${id}`);if(destroyed)throw new Error('Biome worlds have been disposed.');
    restoreVisibility();restoreMaterials();mode=id;
    if(mode==='meadow'){patchMeadow();meadow.invalidate();meadow.update(0);await meadow.prepare();}
    if(mode==='ocean'){ocean.reset();ocean.update();}applyVisibility();
    return {id,name:BIOMES[id].name};
  }
  return {
    setBiome,
    outlineExclusions:[...meadow.group.children,...ocean.outlineExclusions],
    update(dt,time){
      if(destroyed)return;
      if(mode==='meadow')meadow.update(time);
      else if(mode==='ocean'){
        ocean.update();
        // Weather remains live. Color only its daylight, preserving true night,
        // dawn, overcast and user-customized time changes.
        const daylight=env.sky.material.uniforms.uNight?.value??0;
        if(daylight<.25&&game.weather.kind==='clear'){
          const u=env.sky.material.uniforms;
          u.uZenith.value.set('#62b0b9');u.uHorizon.value.set('#c5dfcd');
          u.uCloudLight.value.set('#fff0cd');u.uCloudDark.value.set('#7eafa8');
          if(scene.fog){scene.fog.color.copy(u.uHorizon.value);scene.fog.near=700;scene.fog.far=6200;}
        }
      }
      applyVisibility();
    },
    get state(){return {mode,terrainPatches:originals.size,oceanTime:physics.surface.time,grassTufts:meadow.group.children[0].count+meadow.group.children[1].count,meadowStreaming:meadow.stream.state,activeSpray:ocean.activeSpray};},
    destroy(){restoreVisibility();restoreMaterials();for(const node of [...watched.keys()])unwatchTree(node);meadow.destroy();ocean.destroy();adapted.forEach(m=>m.dispose());destroyed=true;},
  };
}
