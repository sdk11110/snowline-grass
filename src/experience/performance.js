/** Opt-in local diagnostics (?perf=1). No timer or DOM work in normal play. */
export function createPerformanceProbe(){
  if(new URLSearchParams(location.search).get('perf')!=='1')return null;
  const host=document.createElement('aside');host.id='roam-performance';host.setAttribute('aria-label','场景性能采样');
  host.style.cssText='position:fixed;z-index:130;left:90px;bottom:90px;max-width:450px;max-height:45vh;overflow:auto;padding:10px;background:#faf7ef;color:#25343c;border:1px solid #56746c;font:12px/1.4 system-ui,sans-serif;pointer-events:auto;user-select:text';
  host.innerHTML='<button type="button">重新采样</button><pre id="roam-performance-data" style="white-space:pre-wrap;margin:8px 0 0;font:11px/1.35 monospace">等待场景就绪</pre>';
  document.body.append(host);
  let frames=[],updates=[],submissions=[],previous=0,start=0,lastPaint=0,context={};
  const summary=list=>{
    if(!list.length)return {samples:0};const sorted=[...list].sort((a,b)=>a-b);
    return {samples:list.length,meanMs:+(list.reduce((a,b)=>a+b,0)/list.length).toFixed(3),p95Ms:+sorted[Math.floor((sorted.length-1)*.95)].toFixed(3),maxMs:+sorted.at(-1).toFixed(3)};
  };
  const reset=()=>{frames=[];updates=[];submissions=[];previous=0;lastPaint=0;};host.querySelector('button').addEventListener('click',reset);
  for(const type of ['keydown','keyup','pointerdown','pointerup','click'])host.addEventListener(type,e=>e.stopPropagation());
  const output=host.querySelector('pre');
  const probe={
    beginFrame(game){start=performance.now();game.renderer.info.autoReset=false;game.renderer.info.reset();},
    sampleUpdate(ms,details){updates.push(ms);if(updates.length>1800)updates.shift();context=details;},
    endFrame(game){
      const now=performance.now();
      submissions.push(now-start);if(submissions.length>1800)submissions.shift();
      if(previous&&now-previous<1000){frames.push(now-previous);if(frames.length>1800)frames.shift();}
      previous=now;
      if(now-lastPaint<500)return;lastPaint=now;
      const info=game.renderer.info,frame=summary(frames);
      output.textContent=JSON.stringify({mode:game.experience?.mode,viewport:[innerWidth,innerHeight],frame,estimatedFps:frame.meanMs?+(1000/frame.meanMs).toFixed(1):0,worldUpdate:summary(updates),cpuSubmission:summary(submissions),...context,renderer:{calls:info.render.calls,triangles:info.render.triangles,geometries:info.memory.geometries},note:'帧间隔含渲染等待；worldUpdate为CPU计时；不作为硬件FPS保证。'},null,2);
    },
    reset,
  };
  return probe;
}
