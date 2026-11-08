import { createBiomePhysics } from './physics/biome-physics.js';
import { createBiomeWorlds } from './biomes.js';
import { destinationById } from './destinations.js';
import { createEnvironmentAudio } from './environment-audio.js';
import { createWardrobe } from './wardrobe.js';
import { createPerformanceProbe } from './performance.js';

/** Owns destination transitions; source gameplay and new maps remain independent. */
export function mountExperience(game,opening){
  game.performanceProbe=createPerformanceProbe();
  const physics=createBiomePhysics(game),worlds=createBiomeWorlds(game),audio=createEnvironmentAudio(game),wardrobe=createWardrobe(game);
  const climates=new Map();
  game.experienceOutlineExclusions=worlds.outlineExclusions||[];
  const gearByBiome=new Map();
  let mode='snow',switching=false;
  const toolbar=document.createElement('nav');toolbar.className='roam-toolbar';toolbar.setAttribute('aria-label','漫游目的地');
  toolbar.innerHTML='<button type="button" aria-label="切换目的地"><svg viewBox="0 0 36 28" aria-hidden="true"><path d="m2 23 10-18 8 13 5-8 9 15H2"/><path d="m8 12 4 3 3-3m9 9c4-4 6 3 10 0"/></svg><span>雪线漫游</span><small>雪岭 · 换个天地</small></button>';
  document.body.append(toolbar);
  const help=document.createElement('div');help.className='roam-help';document.body.append(help);
  const toolbarButton=toolbar.querySelector('button');
  function releaseActivity(){
    game.leaveActivity();
    game.clearInput();
  }
  async function travel(id){
    if(switching)return;switching=true;
    const next=destinationById(id);
    try{
      releaseActivity();
      if(mode!==next.id)gearByBiome.set(mode,game.rider.gear);
      if(mode!==next.id){
        climates.set(mode,{hour:game.weather.hour,running:game.weather.running,kind:game.weather.kind,aurora:game.weather.aurora});
        const climate=climates.get(next.id)||{hour:next.id==='meadow'?16.3:15.5,running:false,kind:'clear',aurora:false};
        game.weather.hour=climate.hour;game.weather.running=climate.running;game.weather.aurora=climate.aurora;game.weather.set(climate.kind);game.weather.settle();
      }
      const spawn=physics.setBiome(next.id,next.id==='meadow'?{spawn:{x:2178.7,z:2011.4,dx:-.9533,dz:-.3021,toast:'青岚山谷 · 草浪间自由滑行'}}:{});
      game.setGear(next.id==='ocean'?'board':gearByBiome.get(next.id)||game.rider.gear);
      // Fill the actual destination, rather than streaming the place just left.
      game.prepareExperience(spawn);
      await worlds.setBiome(next.id);
      await wardrobe.setBiome(next.id);
      game.syncRiderUI();
      audio.setBiome(next.id);
      mode=next.id;
      game.beginExperience({...spawn,toast:next.id==='snow'?'雪岭 · 自由滑行':spawn.toast});
      document.body.classList.add('roam-entered');
      document.body.classList.toggle('roam-ocean',mode==='ocean');
      document.body.dataset.biome=mode;
      toolbar.querySelector('small').textContent=`${next.name} · 换个天地`;
      help.textContent=next.hint;
      window.dispatchEvent(new CustomEvent('snowfield:biome',{detail:{id:mode}}));
      for(const button of document.querySelectorAll('[data-gear]')){
        button.disabled=mode==='ocean'&&button.dataset.gear==='ski';
        button.textContent=button.dataset.gear==='ski'?'双板':mode==='ocean'?'冲浪板':mode==='meadow'?'山地板':'单板';
      }
      worlds.update(0,0);
    }finally{switching=false;}
  }
  toolbarButton.addEventListener('click',()=>{releaseActivity();game.prepareExperience();opening.open(mode);});
  for(const type of ['keydown','keyup','pointerdown','pointerup','click'])toolbar.addEventListener(type,e=>e.stopPropagation());
  window.addEventListener('keydown',e=>{if(mode==='ocean'&&e.code==='KeyM'){e.preventDefault();e.stopImmediatePropagation();}},true);
  game.experienceUpdate=(dt,time)=>{
    const updateStart=game.performanceProbe?performance.now():0;
    physics.update(dt);worlds.update(dt,time);wardrobe.update(dt,time);audio.update(time);
    game.performanceProbe?.sampleUpdate(performance.now()-updateStart,worlds.state);
    const outfitStatus=document.getElementById('roam-outfit-status');
    if(outfitStatus&&outfitStatus.textContent!==wardrobe.state.description)outfitStatus.textContent=wardrobe.state.description;
    if(mode==='ocean'){
      document.getElementById('run-name').textContent='潮汐海湾 · 自由海域';
      document.getElementById('run-badge').className='badge lake';
    }else if(mode==='meadow'){
      document.getElementById('run-name').textContent='青岚山谷 · 草浪漫游';
    }
  };
  game.experience={travel,worlds,physics,wardrobe,get mode(){return mode;}};
  opening.connect(game,travel);
  const query=new URLSearchParams(location.search);
  if(query.has('at')||query.has('notitle')||query.has('run')||game.state==='arrive'){
    opening.bypass();document.body.classList.add('roam-entered');help.textContent=destinationById('snow').hint;
  }else game.prepareExperience();
  return game.experience;
}
