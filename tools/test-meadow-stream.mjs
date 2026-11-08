import assert from 'node:assert/strict';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import * as THREE from '../src/experience/three.js';
import { createMeadowDetails } from '../src/experience/biomes.js';
import { create_Heightfield } from '../src/recovered/world/heightfield.js';
import { create_decodeHeightU16 } from '../src/recovered/world/data.js';

const root=new URL('../',import.meta.url);
const world=JSON.parse(await readFile(new URL('public/data/world.json',root),'utf8'));
const buffer=await readFile(new URL('public/data/'+world.detail.file,root));
const raw=buffer.buffer.slice(buffer.byteOffset,buffer.byteOffset+buffer.byteLength);
const Heights=create_Heightfield({Vector3:THREE.Vector3});
const hf=new Heights(world.detail.size,world.detail.cells,create_decodeHeightU16({})(raw,world.detail),world.detail.center);
const makeGame=()=>({scene:new THREE.Scene(),phys:{pos:new THREE.Vector3(2178.7,1967,2011.4),piste:{distAt:()=>20}},environment:{ground:hf}});
const percentile=(values,p)=>[...values].sort((a,b)=>a-b)[Math.min(values.length-1,Math.floor(values.length*p))];
const summary=values=>({samples:values.length,averageMs:values.reduce((a,b)=>a+b,0)/values.length,p95Ms:percentile(values,.95),maxMs:Math.max(...values)});
await mkdir(new URL('evidence/',root),{recursive:true});

if(process.argv.includes('--baseline')){
  // The before report was captured from the original synchronous factory,
  // before replacing it. Do not re-label current timings as an old baseline.
  console.log(await readFile(new URL('evidence/meadow-stream-before.json',root),'utf8'));
}else{
  const results=[],benchmarks=[];
  const check=(name,fn)=>{try{const info=fn();results.push({name,status:'passed',...info});console.log('PASS '+name);}catch(error){results.push({name,status:'failed',message:error.message});console.error('FAIL '+name+': '+error.message);}};
  const settle=(details,max=400)=>{
    for(let i=0;i<max;i++){details.update(i/30);if(details.stream.state.pendingTiles===0)return i+1;}
    throw new Error('Grass stream did not settle within its bounded preparation frames.');
  };
  const consumeGpuRanges=details=>{for(const mesh of details.group.children){mesh.instanceMatrix.clearUpdateRanges();mesh.instanceColor?.clearUpdateRanges();}};
  const game=makeGame(),details=createMeadowDetails(game);
  const startupFrames=settle(details);
  const before=details.stream.snapshot(),beforeMap=before.map(layer=>new Map(layer.items.map(item=>[item.key,item])));
  check('near and mid grass use complete finite draw ranges',()=>{
    for(const mesh of details.group.children.slice(0,2)){
      const range=mesh.geometry.attributes.aGrassRange;
      assert.equal(range.count,mesh.geometry.attributes.position.count);
      for(let i=0;i<range.count;i++){assert.ok(Number.isFinite(range.getX(i))&&Number.isFinite(range.getY(i)));assert.ok(range.getY(i)>range.getX(i));}
    }
    return {startupFrames,near:before[0].items.length,mid:before[1].items.length};
  });
  check('every active grass matrix has finite positive non-degenerate basis',()=>{
    let count=0;
    for(const layer of before)for(const item of layer.items){
      assert.ok(item.matrix.every(Number.isFinite)&&item.color.every(Number.isFinite));
      for(const start of [0,4,8])assert.ok(item.matrix.slice(start,start+3).reduce((n,v)=>n+v*v,0)>1e-8);
      count++;
    }
    return {activeMatrices:count,zeroScaleCount:0};
  });
  game.phys.pos.x-=12;game.phys.pos.z-=4;settle(details);
  const moved=details.stream.snapshot();
  check('overlapping world grass retains exact transforms and colors after crossing cells',()=>{
    let compared=0;
    for(let l=0;l<moved.length;l++)for(const item of moved[l].items){const old=beforeMap[l].get(item.key);if(!old)continue;assert.deepEqual(item.matrix,old.matrix);assert.deepEqual(item.color,old.color);compared++;}
    assert.ok(compared>10000);return {unchangedCells:compared};
  });
  check('idle updates do not resubmit instance buffers',()=>{
    consumeGpuRanges(details);const versions=details.group.children.map(mesh=>mesh.instanceMatrix.version);
    for(let i=0;i<120;i++)details.update(i/60);
    assert.deepEqual(details.group.children.map(mesh=>mesh.instanceMatrix.version),versions);
  });
  check('resetting and reusing cached tiles leaves no stale slots or flowers',()=>{
    const cacheBuilt=details.stream.state.totalBuiltCells,counts=details.group.children.map(mesh=>mesh.count);
    details.invalidate();assert.ok(details.group.children.every(mesh=>mesh.count===0));settle(details);
    assert.deepEqual(details.group.children.map(mesh=>mesh.count),counts);
    assert.equal(details.stream.state.totalBuiltCells,cacheBuilt);
    const snap=details.stream.snapshot();
    for(const layer of snap)assert.equal(new Set(layer.items.map(item=>item.key)).size,layer.items.length);
  });
  const savedMeshes=details.group.children.slice();
  check('teleports repopulate the new location with the same persistent mesh objects',()=>{
    game.phys.pos.set(-427.7,1773,3140.6);settle(details);
    assert.deepEqual(details.group.children,savedMeshes);
    const a=details.group.children[0].instanceMatrix.array;
    for(let i=0;i<details.group.children[0].count;i++)assert.ok(Math.hypot(a[i*16+12]-game.phys.pos.x,a[i*16+14]-game.phys.pos.z)<45);
  });
  details.destroy();
  check('destroy removes its scene group and releases the cell cache',()=>{
    assert.equal(game.scene.getObjectByName('Snowline meadow ecology'),undefined);
    assert.equal(details.stream.state.nearCount,0);
  });

  const prepared=createMeadowDetails(makeGame());
  const preparedState=await prepared.prepare();
  check('map preparation waits for complete near and middle grass before revealing',()=>{
    assert.equal(preparedState.pendingTiles,0);assert.ok(preparedState.nearCount>8500&&preparedState.midCount>14000);
  });
  prepared.destroy();

  for(const speed of [25,45]){
    const scenario=makeGame(),meadow=createMeadowDetails(scenario);settle(meadow);consumeGpuRanges(meadow);
    const samples=[],pending=[],uploads=[];let maxFrameBuild=0,minNear=Infinity,worstCoverage=0;
    const startBuilt=meadow.stream.state.totalBuiltCells,startUploads=meadow.stream.state.totalUploadedInstances;
    for(let i=0;i<3600;i++){
      scenario.phys.pos.x=2178.7-i/30*speed*.992;scenario.phys.pos.z=2011.4-i/30*speed*.126;
      const start=performance.now();meadow.update(i/30);samples.push(performance.now()-start);
      const state=meadow.stream.state;pending.push(state.pendingTiles);uploads.push(state.uploadedInstances);
      maxFrameBuild=Math.max(maxFrameBuild,state.builtCells);minNear=Math.min(minNear,state.nearCount);
      // Probe the playable 18m disk in eight directions, without allocating a
      // full debug snapshot during the timed path or disturbing memory timing.
      if(i%120===0){
        const mesh=meadow.group.children[0],m=mesh.instanceMatrix.array;
        for(let side=0;side<8;side++){
          const angle=side*Math.PI/4,x=scenario.phys.pos.x+Math.cos(angle)*18,z=scenario.phys.pos.z+Math.sin(angle)*18;
          const n=hf.normalAt(x,z,new THREE.Vector3());if(n.y<.65)continue;
          let nearest=Infinity;for(let j=0;j<mesh.count;j++)nearest=Math.min(nearest,Math.hypot(x-m[j*16+12],z-m[j*16+14]));
          worstCoverage=Math.max(worstCoverage,nearest);
        }
      }
      consumeGpuRanges(meadow);
    }
    const state=meadow.stream.state,benchmark={speedMetersPerSecond:speed,simulationFps:30,seconds:120,
      update:summary(samples),maxPendingTiles:Math.max(...pending),endPendingTiles:pending.at(-1),minNearTufts:minNear,
      maxUploadedInstancesPerFrame:Math.max(...uploads),meanUploadedInstancesPerFrame:uploads.reduce((n,v)=>n+v,0)/uploads.length,
      worstNearbyCoverageGapMeters:worstCoverage,cacheTiles:state.cacheTiles,maxBuiltCellsPerFrame:maxFrameBuild,
      totalBuiltCells:state.totalBuiltCells-startBuilt,totalUploadedInstances:state.totalUploadedInstances-startUploads};
    benchmarks.push(benchmark);
    check(`30 Hz streaming keeps up with ${speed} m/s for two minutes`,()=>{
      assert.ok(benchmark.maxPendingTiles<70,'The entering edge must not accumulate an ever-growing queue.');
      assert.ok(benchmark.minNearTufts>7500,'Dense near grass must remain populated.');
      assert.ok(worstCoverage<3,'Playable nearby cells must not become empty during movement.');
      assert.ok(benchmark.cacheTiles<=1400,'World cache must remain bounded.');
      assert.ok(benchmark.maxUploadedInstancesPerFrame<5000,'Movement must not upload the whole field.');
      assert.ok(maxFrameBuild<=1024,'Normal frame generation must respect its fixed work ceiling.');
      return benchmark;
    });
    meadow.destroy();
  }
  const failed=results.filter(r=>r.status==='failed');
  const report={at:new Date().toISOString(),kind:'After: stable cached world grass streaming, CPU-only measurements',
    scope:'Actual createMeadowDetails, project Three objects, shipped 900-cell DEM; constant off-trail route field. Render/GPU, edited ground wrappers and browser frame rate are excluded.',
    baseline:JSON.parse(await readFile(new URL('evidence/meadow-stream-before.json',root),'utf8')),
    summary:{passed:results.length-failed.length,failed:failed.length},results,benchmarks};
  await writeFile(new URL('evidence/meadow-stream-tests.json',root),JSON.stringify(report,null,2)+'\n');
  console.log(JSON.stringify({summary:report.summary,benchmarks},null,2));
  if(failed.length)process.exitCode=1;
}
