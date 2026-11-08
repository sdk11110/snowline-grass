import { Matrix4, Quaternion, Vector3, Color, Float32BufferAttribute } from './three.js';

const hash=(x,z=0)=>{const n=Math.sin(x*127.1+z*311.7)*43758.5453;return n-Math.floor(n);};
const clock=()=>performance.now();

/** Stable world cells, streamed into two dense instance buffers.
 * Terrain is sampled once per cached cell. A short per-frame work budget loads
 * only the entering border; moving the rider never regenerates the whole disk.
 * Distance fading is GPU-side (aGrassRange), so a cell's transform/color stays
 * identical across movement. Matrix scales are always positive.
 */
export function createMeadowStream({game,grass,midGrass,flowers,mobile=false,budgetMs=1.1,maxCells=1024}){
  const matrix=new Matrix4(),rotation=new Quaternion(),up=new Vector3(0,1,0),normal=new Vector3();
  const scale=new Vector3(),pos=new Vector3(),color=new Color();
  const sage=new Color('#a9b28b'),dry=new Color('#c5b77e');
  const makeLayer=(mesh,spacing,inner,outer,density,spread,cacheLimit)=>{
    // Store the continuous draw range in the geometry, not in the transforms.
    const ranges=new Float32Array(mesh.geometry.attributes.position.count*2);
    for(let i=0;i<ranges.length;i+=2){ranges[i]=inner;ranges[i+1]=outer;}
    mesh.geometry.setAttribute('aGrassRange',new Float32BufferAttribute(ranges,2));
    mesh.count=0;mesh.instanceMatrix.setUsage(35048); // DynamicDrawUsage, inlined by vendor.
    return {mesh,spacing,inner,outer,density,spread,tileCells:8,tileSize:spacing*8,
      radius:outer,cacheLimit,cache:new Map(),tilePool:[],active:new Map(),queue:[],slots:[],
      dirty:new Set(),lastX:Infinity,lastZ:Infinity,normalCalls:0,heightCalls:0};
  };
  const layers=[makeLayer(grass,mobile?.76:.60,0,mobile?25:30,.94,1.04,800),
    makeLayer(midGrass,mobile?1.75:1.38,mobile?20:24,mobile?82:96,.86,1.55,600)];
  flowers.count=0;flowers.instanceMatrix.setUsage(35048);
  const flowerSlots=[],flowerDirty=new Set();
  let disposed=false,resetting=true,tick=0,totalBuilt=0,totalActivations=0,totalUploads=0;
  const stats={frames:0,builtCells:0,activatedInstances:0,uploadedInstances:0,plannedTiles:0,
    updateMs:0,maxUpdateMs:0,cacheTiles:0,nearCount:0,midCount:0,pendingTiles:0};

  function removeFlower(item){
    if(item.flowerSlot===undefined)return;
    const at=item.flowerSlot,last=flowerSlots.pop();
    if(at<flowerSlots.length){flowerSlots[at]=last;last.flowerSlot=at;matrix.fromArray(last.tile.flowerMatrices,last.index*16);flowers.setMatrixAt(at,matrix);flowerDirty.add(at);}
    delete item.flowerSlot;flowers.count=flowerSlots.length;
  }
  function removeItem(layer,item){
    if(item.slot===undefined)return;
    removeFlower(item);
    const at=item.slot,last=layer.slots.pop();
    if(at<layer.slots.length){layer.slots[at]=last;last.slot=at;matrix.fromArray(last.tile.matrices,last.index*16);layer.mesh.setMatrixAt(at,matrix);color.fromArray(last.tile.colors,last.index*3);layer.mesh.setColorAt(at,color);layer.dirty.add(at);}
    delete item.slot;layer.mesh.count=layer.slots.length;
  }
  function deactivate(layer,tile){for(const item of tile.items)removeItem(layer,item);tile.activated=0;layer.active.delete(tile.key);}

  function plan(layer,center){
    if(Math.hypot(center.x-layer.lastX,center.z-layer.lastZ)<layer.tileSize*.40)return;
    layer.lastX=center.x;layer.lastZ=center.z;
    const size=layer.tileSize,cx=Math.floor(center.x/size),cz=Math.floor(center.z/size);
    const cells=Math.ceil(layer.radius/size)+1,diagonal=size*Math.SQRT2*.5,wanted=new Set();
    for(let z=-cells;z<=cells;z++)for(let x=-cells;x<=cells;x++){
      const tx=cx+x,tz=cz+z,dx=(tx+.5)*size-center.x,dz=(tz+.5)*size-center.z,d=Math.hypot(dx,dz);
      if(d-diagonal>layer.radius||layer.inner&&d+diagonal<Math.max(0,layer.inner-12))continue;
      const key=`${tx},${tz}`;wanted.add(key);
      let tile=layer.cache.get(key);
      if(!tile){
        tile=layer.tilePool.pop()||{items:[],itemsByCell:[],matrices:new Float32Array(64*16),colors:new Float32Array(64*3)};
        Object.assign(tile,{key,tx,tz,cursor:0,complete:false,activated:0,touched:tick});tile.items.length=0;
        layer.cache.set(key,tile);
      }
      tile.touched=tick;tile.priority=d;
    }
    for(const [key,tile]of layer.active)if(!wanted.has(key))deactivate(layer,tile);
    layer.queue=[];
    for(const key of wanted){const tile=layer.cache.get(key);if(!tile.complete||tile.activated<tile.items.length)layer.queue.push(tile);}
    // The ground immediately under the rider becomes available first. This
    // ordering does not crop a row to a global instance budget.
    layer.queue.sort((a,b)=>a.priority-b.priority);
    while(layer.cache.size>layer.cacheLimit){
      let oldest=null;
      for(const tile of layer.cache.values())if(!wanted.has(tile.key)&&(!oldest||tile.touched<oldest.touched))oldest=tile;
      if(!oldest)break;layer.cache.delete(oldest.key);if(layer.tilePool.length<64)layer.tilePool.push(oldest);
    }
    stats.plannedTiles+=wanted.size;
  }

  function buildCell(layer,tile,index){
    const ix=tile.tx*8+index%8,iz=tile.tz*8+Math.floor(index/8),h=hash(ix*1.7,iz*1.7);
    if(h>layer.density)return;
    const x=(ix+hash(ix+21,iz)*.9)*layer.spacing,z=(iz+hash(ix,iz+31)*.9)*layer.spacing;
    const hf=game.environment.ground;
    if(hf.inside&&!hf.inside(x,z)||hf.holeAt?.(x,z))return;
    const y=hf.heightAt(x,z);hf.normalAt(x,z,normal);layer.heightCalls++;layer.normalCalls++;
    if(!Number.isFinite(y)||normal.y<.60)return;
    const route=game.phys.piste?.distAt?.(x,z)??60;
    if(route<.85&&hash(ix+41,iz)>.08)return;
    pos.set(x,y-.05,z);rotation.setFromAxisAngle(up,h*Math.PI*2);
    scale.set(layer.spread+hash(ix+7,iz)*.28,.42+hash(ix+39,iz)*.23,layer.spread+hash(ix+4,iz)*.28);
    matrix.compose(pos,rotation,scale);
    color.copy(sage).lerp(dry,hash(ix,iz+8)*.7).multiplyScalar(.9+hash(ix+17,iz)*.2);
    tile.matrices.set(matrix.elements,index*16);tile.colors[index*3]=color.r;tile.colors[index*3+1]=color.g;tile.colors[index*3+2]=color.b;
    const item=tile.itemsByCell[index]??={tile,index};item.flower=false;
    if(layer===layers[0]&&h>.83&&route>2&&hash(ix+44,iz)>.8){
      const fs=.55+hash(ix+12,iz)*.24;scale.set(fs,fs,fs);matrix.compose(pos,rotation,scale);tile.flowerMatrices??=new Float32Array(64*16);tile.flowerMatrices.set(matrix.elements,index*16);item.flower=true;
    }
    tile.items.push(item);
  }
  function activate(layer,tile,item){
    if(item.slot!==undefined)return;
    if(layer.slots.length>=layer.mesh.instanceMatrix.count)return false;
    const slot=layer.slots.length;item.slot=slot;layer.slots.push(item);
    matrix.fromArray(tile.matrices,item.index*16);layer.mesh.setMatrixAt(slot,matrix);color.fromArray(tile.colors,item.index*3);layer.mesh.setColorAt(slot,color);layer.dirty.add(slot);
    layer.mesh.count=layer.slots.length;layer.active.set(tile.key,tile);totalActivations++;
    if(item.flower&&flowerSlots.length<flowers.instanceMatrix.count){
      item.flowerSlot=flowerSlots.length;flowerSlots.push(item);matrix.fromArray(tile.flowerMatrices,item.index*16);flowers.setMatrixAt(item.flowerSlot,matrix);flowerDirty.add(item.flowerSlot);flowers.count=flowerSlots.length;
    }
    return true;
  }
  function work(layer,cellBudget,deadline){
    let cells=0;
    while(layer.queue.length&&cells<cellBudget){
      const tile=layer.queue[0];
      while(tile.activated<tile.items.length&&cells<cellBudget){
        if(activate(layer,tile,tile.items[tile.activated])===false)return cells;
        tile.activated++;cells++;
      }
      if(!tile.complete&&cells<cellBudget){
        const count=Math.min(16,64-tile.cursor,cellBudget-cells);
        for(let i=0;i<count;i++){buildCell(layer,tile,tile.cursor++);totalBuilt++;}
        cells+=count;tile.complete=tile.cursor===64;
      }
      if(tile.complete&&tile.activated===tile.items.length)layer.queue.shift();
      if(clock()>=deadline)break;
    }
    return cells;
  }
  function upload(mesh,dirty,withColor=true){
    if(!dirty.size)return 0;
    const slots=[...dirty].filter(slot=>slot<mesh.count).sort((a,b)=>a-b);
    // Three clears updateRanges after uploading. Empty/replaced slots need no
    // zero matrices: dense swap removal changes only the replacement slots.
    mesh.instanceMatrix.clearUpdateRanges();if(withColor&&mesh.instanceColor)mesh.instanceColor.clearUpdateRanges();
    let start=-1,end=-1;
    const flush=()=>{if(start<0)return;mesh.instanceMatrix.addUpdateRange(start*16,(end-start+1)*16);if(withColor&&mesh.instanceColor)mesh.instanceColor.addUpdateRange(start*3,(end-start+1)*3);};
    for(const slot of slots){if(slot===end+1){end=slot;continue;}flush();start=end=slot;}flush();
    mesh.instanceMatrix.needsUpdate=true;if(withColor&&mesh.instanceColor)mesh.instanceColor.needsUpdate=true;
    dirty.clear();totalUploads+=slots.length;return slots.length;
  }
  function clear(){
    for(const layer of layers){for(const tile of layer.active.values()){for(const item of tile.items){delete item.slot;delete item.flowerSlot;}tile.activated=0;}layer.active.clear();layer.queue.length=0;layer.slots.length=0;layer.dirty.clear();layer.mesh.count=0;layer.lastX=layer.lastZ=Infinity;}
    flowers.count=0;flowerSlots.length=0;flowerDirty.clear();resetting=true;
    stats.nearCount=stats.midCount=stats.pendingTiles=0;
  }
  return {
    update(){
      if(disposed)return;
      const start=clock(),center=game.phys.pos;tick++;
      if(Number.isFinite(layers[0].lastX)&&Math.hypot(center.x-layers[0].lastX,center.z-layers[0].lastZ)>layers[1].radius*2)clear();
      stats.plannedTiles=0;
      for(const layer of layers)plan(layer,center);
      const beforeBuilt=totalBuilt,beforeActive=totalActivations,beforeUploaded=totalUploads;
      const limit=resetting?maxCells*3:maxCells,deadline=clock()+(resetting?budgetMs*2:budgetMs);
      let remaining=limit,round=0;
      while(remaining>0&&layers.some(layer=>layer.queue.length)){
        const layer=layers[round++%3===2?1:0],used=work(layer,Math.min(48,remaining),deadline);remaining-=used;
        if(clock()>=deadline)break;
      }
      resetting=false;
      for(const layer of layers)upload(layer.mesh,layer.dirty);
      upload(flowers,flowerDirty,false);
      stats.frames++;stats.builtCells=totalBuilt-beforeBuilt;stats.activatedInstances=totalActivations-beforeActive;stats.uploadedInstances=totalUploads-beforeUploaded;
      stats.updateMs=clock()-start;stats.maxUpdateMs=Math.max(stats.maxUpdateMs,stats.updateMs);
      stats.cacheTiles=layers.reduce((n,l)=>n+l.cache.size,0);stats.nearCount=grass.count;stats.midCount=midGrass.count;stats.pendingTiles=layers.reduce((n,l)=>n+l.queue.length,0);
    },
    invalidate:clear,
    async prepare(){
      for(let frame=0;frame<240&&!disposed;frame++){
        this.update();if(stats.pendingTiles===0)return this.state;
        if(typeof requestAnimationFrame==='function')await new Promise(resolve=>requestAnimationFrame(resolve));else await Promise.resolve();
      }
      if(!disposed&&stats.pendingTiles)throw new Error('草场准备超时，请重新选择目的地。');
      return this.state;
    },
    get state(){return {...stats,totalBuiltCells:totalBuilt,totalActivatedInstances:totalActivations,totalUploadedInstances:totalUploads};},
    // Read-only snapshots for deterministic regression checks and diagnostics.
    snapshot(){return layers.map(layer=>({spacing:layer.spacing,range:[layer.inner,layer.outer],items:layer.slots.map(item=>({key:`${item.tile.tx*8+item.index%8},${item.tile.tz*8+Math.floor(item.index/8)}`,slot:item.slot,matrix:Array.from(item.tile.matrices.subarray(item.index*16,item.index*16+16)),color:Array.from(item.tile.colors.subarray(item.index*3,item.index*3+3))}))}));},
    destroy(){clear();for(const layer of layers){layer.cache.clear();layer.tilePool.length=0;}stats.cacheTiles=0;disposed=true;},
  };
}
