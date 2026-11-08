/** Project identity and profile persistence. Edit this file to change the shipped default. */
export const PROJECT = Object.freeze({
  name: '雪线漫游',
  englishName: 'Snowline Roam',
  description: '越过一季，又是一片天地。',
  accent: '#dcb847',
  storageKey: 'snowfield-lab.profile.v1',
  schemaVersion: 1,
});

export function createProfile(runtimeDefaults) {
  return {version:1, name:PROJECT.name, accent:PROJECT.accent, settings:{...runtimeDefaults}};
}

export function validateProfile(input, defaults, schema) {
  if(!input || typeof input!=='object' || Array.isArray(input)) throw new Error('配置应为一个 JSON 对象。');
  if(input.version!==1) throw new Error('配置版本不支持，请导入版本 1 的配置。');
  const output=createProfile(defaults);
  if(typeof input.name==='string') output.name=input.name.trim().slice(0,30)||PROJECT.name;
  if(output.name==='雪原工坊')output.name=PROJECT.name;
  if(typeof input.accent==='string' && /^#[0-9a-f]{6}$/i.test(input.accent)) output.accent=input.accent;
  for(const field of schema){
    const value=input.settings?.[field.key];
    if(value===undefined)continue;
    if(field.type==='checkbox' || field.type==='boolean'){
      if(typeof value!=='boolean')throw new Error(`${field.label} 应为开关值。`);
      output.settings[field.key]=value;
    }else if(field.options){
      const values=field.options.map(option=>typeof option==='object'?option.value:option);
      if(!values.includes(value))throw new Error(`${field.label} 的选项无效。`);
      output.settings[field.key]=value;
    }else{
      const number=Number(value);
      if(!Number.isFinite(number) || (field.min!=null&&number<field.min) || (field.max!=null&&number>field.max))
        throw new Error(`${field.label} 超出允许范围。`);
      output.settings[field.key]=number;
    }
  }
  return output;
}

export function readProfile(defaults,schema){
  try{const saved=localStorage.getItem(PROJECT.storageKey);return saved?validateProfile(JSON.parse(saved),defaults,schema):createProfile(defaults);}
  catch{return createProfile(defaults);}
}

export function saveProfile(profile){localStorage.setItem(PROJECT.storageKey,JSON.stringify(profile));}

export function exportProfile(profile){
  const blob=new Blob([JSON.stringify(profile,null,2)+'\n'],{type:'application/json'});
  const href=URL.createObjectURL(blob),a=document.createElement('a');a.href=href;a.download='snowfield-profile.json';a.click();
  setTimeout(()=>URL.revokeObjectURL(href),1000);
}
