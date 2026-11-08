import { DESTINATIONS, destinationById } from './destinations.js';
import { paintAtlas } from './atlas.js';

const mark='<svg viewBox="0 0 44 32" aria-hidden="true"><path d="m2 23 12-19 9 13 6-9 13 19H2"/><path d="m9 12 5 4 4-4M22 25c4-4 7 4 11 0s7 1 9-1"/></svg>';

/** One authored moment: a printed trail map unfolds into the live destination. */
export function mountOpening(){
  const only=DESTINATIONS.length===1?DESTINATIONS[0]:null;
  let selected=DESTINATIONS[0].id,game=null,travel=null,busy=false,animations=[],resizeFrame=0;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const host=document.createElement('section');host.className='roam-opening';host.setAttribute('aria-label','雪线漫游 · 选择目的地');
  host.innerHTML=`<div class="roam-paper roam-paper-left"></div><div class="roam-paper roam-paper-right"></div>
    <header class="roam-masthead"><span class="roam-wordmark">${mark}<span>${only?.id==='meadow'?'青岚草浪':'Snowline Roam'}</span></span><span class="roam-edition">${only?.id==='meadow'?'顺着草浪，滑出自己的弧线。':'一块板，三种自由。'}</span></header>
    <div class="roam-intro"><div class="roam-copy"><h1>${only?.id==='meadow'?'青岚草浪<span>雪退去的山坡，<br>藏着另一条路。</span>':'雪线漫游<span>越过一季，<br>又是一片天地。</span>'}</h1><p class="roam-description"></p><button class="roam-depart" disabled><span>正在准备旅程…</span><svg viewBox="0 0 32 20" aria-hidden="true"><path d="M2 10h27M21 2l8 8-8 8"/></svg></button><p class="roam-load" role="status" aria-live="polite">正在准备地形、人物和场景…</p></div>
    <figure class="roam-atlas"><canvas aria-label="目的地等高线地图"></canvas><figcaption><span class="roam-map-name"></span><span class="roam-map-caption">沿着地图出发</span></figcaption><span class="roam-fold roam-fold-one"></span><span class="roam-fold roam-fold-two"></span></figure></div>
    <div class="roam-destinations" role="group" aria-label="选择目的地">${DESTINATIONS.map(d=>`<button class="roam-destination" data-destination="${d.id}" aria-pressed="${d.id===selected}"><span class="roam-destination-name">${d.name}<small>${d.subtitle}</small></span><span class="roam-terrain">${d.terrain}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 17 14-10M9 7h10v10"/></svg></button>`).join('')}</div>
    <footer class="roam-footnote"><span>漫游不赶路，找到自己的节奏。</span><span>耳机戴好，出发。</span></footer><button class="roam-skip" hidden>直接进入</button>`;
  document.body.append(host);document.body.classList.add('roam-selecting');
  if(only?.id==='meadow'){document.title='青岚草浪';host.setAttribute('aria-label','青岚草浪');const chooser=host.querySelector('.roam-destinations');if(chooser)chooser.hidden=true;}
  const canvas=host.querySelector('canvas'),depart=host.querySelector('.roam-depart'),load=host.querySelector('.roam-load'),skip=host.querySelector('.roam-skip');
  const inertTargets=()=>[...document.querySelectorAll('#title,#menu,.lab-host,#hud,#touch')];
  function block(value){for(const el of inertTargets())el.inert=value;}
  block(true);
  const draw=()=>{if(!host.hidden)paintAtlas(canvas,selected,game?.environment?.ground);};
  const observer=new ResizeObserver(()=>{cancelAnimationFrame(resizeFrame);resizeFrame=requestAnimationFrame(draw);});observer.observe(host.querySelector('.roam-atlas'));
  function choose(id){
    selected=destinationById(id).id;const destination=destinationById(selected);
    host.dataset.destination=selected;host.style.setProperty('--roam-route',destination.color);host.style.setProperty('--roam-paper',destination.paper);
    for(const button of host.querySelectorAll('[data-destination]'))button.setAttribute('aria-pressed',String(button.dataset.destination===selected));
    host.querySelector('.roam-description').textContent=destination.line;
    host.querySelector('.roam-map-name').textContent=destination.name;
    if(game){depart.querySelector('span').textContent=destination.action;depart.disabled=false;load.textContent='旅程已就绪，选一片天地出发。';}
    draw();
  }
  for(const button of host.querySelectorAll('[data-destination]'))button.addEventListener('click',()=>{if(!busy)choose(button.dataset.destination);});
  for(const type of ['keydown','keyup','pointerdown','pointerup','click','wheel'])host.addEventListener(type,e=>e.stopPropagation());
  const originalProgress=document.getElementById('loading-progress');
  const progressObserver=new MutationObserver(()=>{if(!game)load.textContent=`正在准备地形、人物和场景 · ${originalProgress.getAttribute('aria-valuenow')||0}%`;});
  if(originalProgress)progressObserver.observe(originalProgress,{attributes:true,attributeFilter:['aria-valuenow']});
  const finish=()=>{animations.forEach(a=>a.cancel());animations=[];host.hidden=true;host.classList.remove('roam-leaving');skip.hidden=true;document.body.classList.remove('roam-selecting');block(false);game?.clearInput?.();document.getElementById('game').focus({preventScroll:true});busy=false;};
  async function leave(){
    if(!game||!travel||busy)return;busy=true;depart.disabled=true;load.textContent='正在展开目的地…';
    // Audio is unlocked by the actual user gesture before any awaited work.
    game.sound.start();game.clearInput?.();
    try{await travel(selected);}catch(error){busy=false;depart.disabled=false;load.textContent=`目的地未能展开：${error.message}。请重试。`;return;}
    host.classList.add('roam-leaving');skip.hidden=false;
    const duration=reduced.matches?180:880;
    if(!reduced.matches){
      const options={duration,easing:'cubic-bezier(.16,1,.3,1)',fill:'forwards'};
      animations=[
        host.querySelector('.roam-paper-left').animate([{transform:'perspective(1200px) rotateY(0deg)'},{transform:'perspective(1200px) translateX(-104%) rotateY(-14deg)'}],options),
        host.querySelector('.roam-paper-right').animate([{transform:'perspective(1200px) rotateY(0deg)'},{transform:'perspective(1200px) translateX(104%) rotateY(14deg)'}],options),
        host.querySelector('.roam-atlas').animate([{transform:'scale(1)',opacity:1},{transform:'scale(1.25)',opacity:0,offset:.55},{transform:'scale(1.3)',opacity:0}],{duration:680,fill:'forwards',easing:'cubic-bezier(.16,1,.3,1)'})
      ];
    }else animations=[host.animate([{opacity:1},{opacity:0}],{duration,fill:'forwards'})];
    await Promise.allSettled(animations.map(a=>a.finished));finish();
  }
  depart.addEventListener('click',leave);skip.addEventListener('click',finish);
  window.addEventListener('snowfield:error',e=>{depart.disabled=true;load.textContent=`旅程准备失败：${e.detail}。请刷新重试。`;});
  choose(selected);
  return {
    connect(nextGame,onTravel){game=nextGame;travel=onTravel;progressObserver.disconnect();choose(selected);},
    open(id){if(busy)return;choose(id||selected);host.hidden=false;block(true);document.body.classList.add('roam-selecting');requestAnimationFrame(draw);depart.focus({preventScroll:true});},
    bypass(){finish();},
    get selected(){return selected;}
  };
}
