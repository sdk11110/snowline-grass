import { createRuntimeControls, DEFAULT_SETTINGS, CONTROL_SCHEMA } from './customize/runtime-controls.js';
import { PROJECT, readProfile, saveProfile, validateProfile, exportProfile, createProfile } from './customize/project-settings.js';

const GROUPS = [
  {id:'world',label:'世界',groups:['environment']},
  {id:'ride',label:'操控',groups:['physics','camera']},
  {id:'rider',label:'人物',groups:['rider']},
  {id:'display',label:'画面',groups:['graphics','audio']},
  {id:'project',label:'工程',groups:[]},
];
const PRESETS = {
  classic:{label:'雪线原始手感',patch:{...DEFAULT_SETTINGS}},
  practice:{label:'轻松练习',patch:{gravityScale:.75,dragScale:1.5,steeringScale:1.15,maxSpeed:15,realisticRiding:false}},
  night:{label:'月夜粉雪',patch:{timeOfDay:22.5,weather:'snow',dayCycle:false,aurora:true}},
};
const icon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 18 6-12 4 7 3-5 5 10H3Z"/><path d="m6.5 11 2.5 2 2-2m4-1 1 2 1.5-1"/></svg>';

export function mountStudio(){
  let profile=readProfile(DEFAULT_SETTINGS,CONTROL_SCHEMA);
  // The original bootstrap publishes __game before its final loading transition.
  // Wait for the adaptation API, so startup preferences cannot be applied too early.
  const getGame=()=>window.__SNOWFIELD_GAME__||null;
  const controls=createRuntimeControls(getGame,profile.settings);
  const host=document.createElement('aside');host.className='lab-host';host.setAttribute('aria-label','个性化工坊');
  host.innerHTML=`
    <button class="lab-launcher" aria-expanded="false" aria-controls="lab-panel">${icon}<span class="lab-project-name"></span><span class="lab-launcher-action">定制</span></button>
    <section class="lab-panel" id="lab-panel" hidden aria-labelledby="lab-heading">
      <header class="lab-header"><div><h1 id="lab-heading">漫游工坊</h1><p>让每一次出发，都有自己的节奏。</p></div><button class="lab-close" aria-label="收起定制面板">×</button></header>
      <div class="lab-connection" role="status"><span class="lab-status-dot"></span><span class="lab-ready-label">正在准备雪场…</span></div>
      <label class="lab-preset-label">玩法预设<select class="lab-preset"><option value="">自由定制</option></select></label>
      <div class="lab-tabs" role="tablist" aria-label="定制类别"></div>
      <div class="lab-pages"></div>
      <p class="lab-feedback" role="status" aria-live="polite">设置保存在这台电脑，也可导出带走。</p>
      <footer class="lab-footer"><button class="lab-export">导出配置</button><button class="lab-import">导入配置</button><button class="lab-reset">恢复默认</button></footer>
      <input class="lab-file" type="file" accept="application/json,.json" hidden>
    </section>`;
  document.body.append(host);
  const panel=host.querySelector('.lab-panel'),launcher=host.querySelector('.lab-launcher');
  const feedback=host.querySelector('.lab-feedback'),readyLabel=host.querySelector('.lab-ready-label');
  const fields=new Map();let ready=false,applying=Promise.resolve(),debounce,pendingPatch={};
  const say=(message,error=false)=>{feedback.textContent=message;feedback.classList.toggle('lab-error',error);};

  function identity(){
    host.style.setProperty('--lab-accent',profile.accent);
    const rgb=profile.accent.slice(1).match(/../g).map(x=>parseInt(x,16)/255);
    const linear=rgb.map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);
    const luminance=linear[0]*.2126+linear[1]*.7152+linear[2]*.0722;
    host.style.setProperty('--lab-accent-ink',(luminance+.05)/.05>=1.05/(luminance+.05)?'#000000':'#ffffff');
    host.querySelector('.lab-project-name').textContent=profile.name;
    document.title=`${profile.name} · Snowline Roam`;
    const title=document.querySelector('#title .where');if(title)title.textContent=`${profile.name} · 私人的雪场`;
  }
  function persist(){
    try{saveProfile(profile);}catch{say('浏览器无法保存设置。你仍可导出配置文件。',true);}
  }
  function open(value){panel.hidden=!value;launcher.setAttribute('aria-expanded',String(value));host.classList.toggle('lab-open',value);}
  launcher.addEventListener('click',()=>open(panel.hidden));
  host.querySelector('.lab-close').addEventListener('click',()=>{open(false);launcher.focus();});
  host.addEventListener('keydown',event=>{
    event.stopPropagation();
    if(event.key==='Escape'){event.preventDefault();open(false);launcher.focus();}
  });
  // Editing a setting must not also steer the rider through global game listeners.
  for(const event of ['keyup','pointerdown','pointerup','click','wheel'])host.addEventListener(event,e=>e.stopPropagation());

  function queueApply(patch,success='已应用，并保存到本机。'){
    profile.settings={...profile.settings,...patch};persist();
    if(!ready){say('已保存，将在雪场准备好后应用。');return;}
    applying=applying.then(async()=>{
      say('正在应用…');
      const report=await controls.apply(patch),snapshot=controls.snapshot();
      refresh(snapshot);
      const errors=[...report.errors.map(e=>e.message),...report.unsupported.map(e=>e.reason)];
      if(errors.length)say(errors.join('；'),true);else say(success);
      window.dispatchEvent(new CustomEvent('snowfield:settings',{detail:{patch,report,snapshot}}));
    }).catch(error=>say(`设置未应用：${error.message}`,true));
  }
  function refresh(snapshot){
    for(const [key,{input,output,field}] of fields){
      const supported=ready&&snapshot.capabilities?.[key]===true;
      const oceanGear=key==='gear'&&getGame()?.experience?.mode==='ocean';
      input.disabled=!supported||oceanGear;
      if(key==='gear'){
        input.title=oceanGear?'海上使用冲浪板；返回陆地可更换装备。':'';
        const board=input.querySelector('option[value="board"]');if(board)board.textContent=oceanGear?'冲浪板':'单板';
      }
      const actual=snapshot.settings?.[key];
      if(actual!==undefined && document.activeElement!==input){
        if(field.type==='boolean')input.checked=Boolean(actual);else input.value=String(actual);
      }
      if(output){const value=actual??profile.settings[key];output.textContent=formatValue(field,value);}
      input.closest('.lab-control').classList.toggle('lab-unsupported',ready&&!supported);
    }
  }
  function flushPending(){
    clearTimeout(debounce);
    if(!Object.keys(pendingPatch).length)return;
    const patch=pendingPatch;pendingPatch={};queueApply(patch);
  }
  function stageRange(patch){
    profile.settings={...profile.settings,...patch};persist();
    pendingPatch={...pendingPatch,...patch};clearTimeout(debounce);debounce=setTimeout(flushPending,140);
  }
  function formatValue(field,value){
    if(field.key==='timeOfDay'){let hour=Math.floor(Number(value)),minutes=Math.round((Number(value)-hour)*60);if(minutes===60){hour++;minutes=0;}return `${String(hour%24).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`;}
    if(field.key==='maxSpeed')return Number(value)===0?'不限速':`${Math.round(Number(value)*3.6)} km/h`;
    return `${Number(value).toFixed(field.step&&field.step<1?2:0).replace(/\.00$/,'')}${field.unit||''}`;
  }

  const tabs=host.querySelector('.lab-tabs'),pages=host.querySelector('.lab-pages');
  for(const group of GROUPS){
    const tab=document.createElement('button');tab.type='button';tab.role='tab';tab.id=`lab-tab-${group.id}`;tab.textContent=group.label;tab.setAttribute('aria-controls',`lab-page-${group.id}`);
    const page=document.createElement('section');page.id=`lab-page-${group.id}`;page.className='lab-page';page.role='tabpanel';page.setAttribute('aria-labelledby',tab.id);page.hidden=group.id!=='world';
    tab.setAttribute('aria-selected',String(!page.hidden));tab.tabIndex=page.hidden?-1:0;
    function select(){for(const button of tabs.children){button.setAttribute('aria-selected',String(button===tab));button.tabIndex=button===tab?0:-1;}for(const child of pages.children)child.hidden=child!==page;}
    tab.addEventListener('click',select);
    tab.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();const index=GROUPS.findIndex(g=>g.id===group.id),next=tabs.children[(index+(event.key==='ArrowRight'?1:GROUPS.length-1))%GROUPS.length];next.click();next.focus();}});
    tabs.append(tab);pages.append(page);
    for(const field of CONTROL_SCHEMA.filter(f=>group.groups.includes(f.group))){
      const row=document.createElement('div');row.className='lab-control';
      const label=document.createElement('label');label.htmlFor=`lab-${field.key}`;label.textContent=field.label;
      const input=document.createElement(field.type==='select'?'select':'input');input.id=`lab-${field.key}`;input.disabled=true;
      let output;
      if(field.type==='select')for(const option of field.options){const opt=document.createElement('option');opt.value=option.value;opt.textContent=option.label;input.append(opt);}
      else if(field.type==='boolean'){input.type='checkbox';row.classList.add('lab-switch');}
      else{input.type='range';input.min=String(field.min);input.max=String(field.max);input.step=String(field.step||1);output=document.createElement('output');output.htmlFor=input.id;row.classList.add('lab-range');}
      if(field.type==='boolean')input.checked=Boolean(profile.settings[field.key]);else input.value=String(profile.settings[field.key]);
      if(output){const line=document.createElement('div');line.className='lab-control-heading';line.append(label,output);row.append(line,input);output.textContent=formatValue(field,profile.settings[field.key]);}
      else row.append(label,input);
      if(field.note){const note=document.createElement('small');note.textContent=field.note;row.append(note);}
      function changed(){const value=field.type==='boolean'?input.checked:field.type==='select'?input.value:Number(input.value);if(output)output.textContent=formatValue(field,value);host.querySelector('.lab-preset').value='';if(field.type==='range')stageRange({[field.key]:value});else{flushPending();queueApply({[field.key]:value});}}
      input.addEventListener(field.type==='range'?'input':'change',changed);page.append(row);fields.set(field.key,{input,output,field});
    }
    if(group.id==='project'){
      page.innerHTML=`<label class="lab-name-label">作品名称<input class="lab-name-input" maxlength="30"></label><label class="lab-color-label">强调色<input type="color" class="lab-color-input"></label><div class="lab-source-note"><h2>继续改成你的作品</h2><p>玩法代码、地图数据和素材已分开。界面配置之外，也可以直接改对应模块。</p><a href="./docs/PLAY_SYSTEMS.md" target="_blank" rel="noopener">查看玩法与源码入口 ↗</a><a href="./docs/PROVENANCE.md" target="_blank" rel="noopener">查看复用与改造记录 ↗</a></div>`;
      const name=page.querySelector('.lab-name-input'),color=page.querySelector('.lab-color-input');name.value=profile.name;color.value=profile.accent;
      name.addEventListener('input',()=>{profile.name=name.value.trim()||PROJECT.name;identity();persist();});
      color.addEventListener('input',()=>{profile.accent=color.value;identity();persist();});
    }
  }
  const preset=host.querySelector('.lab-preset');for(const [value,setting]of Object.entries(PRESETS)){const option=document.createElement('option');option.value=value;option.textContent=setting.label;preset.append(option);}
  preset.addEventListener('change',()=>{const item=PRESETS[preset.value];if(item){flushPending();queueApply(item.patch,`已应用「${item.label}」。`);}});
  host.querySelector('.lab-export').addEventListener('click',()=>{flushPending();exportProfile(profile);say('已导出配置，可在另一台电脑导入。');});
  const file=host.querySelector('.lab-file');host.querySelector('.lab-import').addEventListener('click',()=>{flushPending();file.click();});
  file.addEventListener('change',async()=>{try{const selected=file.files?.[0];if(!selected)return;if(selected.size>100000)throw new Error('配置文件应小于100 KB。');const imported=validateProfile(JSON.parse(await selected.text()),DEFAULT_SETTINGS,CONTROL_SCHEMA);clearTimeout(debounce);pendingPatch={};profile=imported;identity();host.querySelector('.lab-name-input').value=profile.name;host.querySelector('.lab-color-input').value=profile.accent;queueApply(profile.settings,'配置已导入并应用。');}catch(error){say(`导入失败：${error.message}`,true);}finally{file.value='';}});
  host.querySelector('.lab-reset').addEventListener('click',()=>{clearTimeout(debounce);pendingPatch={};profile=createProfile(DEFAULT_SETTINGS);identity();host.querySelector('.lab-name-input').value=profile.name;host.querySelector('.lab-color-input').value=profile.accent;preset.value='';queueApply(profile.settings,'已恢复本项目默认配置。');});
  async function attach(){
    if(ready||!getGame())return;
    ready=true;host.classList.add('lab-connected');readyLabel.textContent='场景就绪 · 可以实时调整';
    const report=await controls.apply(profile.settings);refresh(controls.snapshot());
    const issues=[...report.errors.map(e=>e.message),...report.unsupported.map(e=>e.reason)];say(issues.length?issues.join('；'):'设置已连接到游戏，改动会立即生效。',issues.length>0);
    clearInterval(probe);
  }
  const probe=setInterval(attach,300);window.addEventListener('snowfield:ready',attach,{once:true});
  window.addEventListener('snowfield:biome',()=>{if(ready){refresh(controls.snapshot());host.querySelector('.lab-preset').value='';}});
  window.addEventListener('snowfield:error',event=>{clearInterval(probe);readyLabel.textContent='雪场启动失败';say(`${event.detail}。请检查本地服务或刷新重试。`,true);});
  window.snowfieldLab={version:'0.1.0',controls,getProfile:()=>structuredClone(profile),applyProfile:input=>{profile=validateProfile(input,DEFAULT_SETTINGS,CONTROL_SCHEMA);identity();queueApply(profile.settings);},get game(){return getGame();}};
  identity();open(false);return controls;
}
