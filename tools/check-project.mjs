import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root=fileURLToPath(new URL('../',import.meta.url));
function files(dir){return fs.existsSync(dir)?fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]):[];}
const report={checkedUtc:new Date().toISOString(),kind:'Source structure and asset integrity checks',errors:[],sourceFiles:0,recoveredFeatureModules:0,vendorModules:0,assetsChecked:0};
const recovery=JSON.parse(fs.readFileSync(path.join(root,'src/recovered/recovery-manifest.json'),'utf8'));
const features=new Set(recovery.modules.filter(m=>m.category==='recovered-feature').map(m=>m.file));
for(const file of files(path.join(root,'public'))){if(/\.(?:js|html|css)$/i.test(file))report.errors.push('Compiled page/code in public: '+path.relative(root,file));}
for(const file of files(path.join(root,'src')).filter(f=>f.endsWith('.js'))){
  report.sourceFiles++;const relative=path.relative(root,file).split(path.sep).join('/');
  if(relative.startsWith('src/vendor/'))report.vendorModules++;
  else if(features.has(relative))report.recoveredFeatureModules++;
  const text=fs.readFileSync(file,'utf8');
  const imports=[...text.matchAll(/(?:from\s*|import\s*\()\s*["']([^"']+)["']/g)].map(m=>m[1]);
  const oldBundles=/^(?:main-VX-cDQwL|names-Bi68pVgn|rider-model-BIDVHzGE|three\.core-CPCyBexQ|toon-zaef0iWs|model-loader-DSq0b4m1|gear-mount-CvxORJQd|diorama-DPOYz-if)\.js$/;
  if(imports.some(p=>p.includes('hemu-ski-local')||p.includes('/site/')||oldBundles.test(p.split('/').pop())))report.errors.push('Old deployment import in '+relative);
  const parsed=spawnSync(process.execPath,['--check',file],{encoding:'utf8'});
  if(parsed.status!==0)report.errors.push(relative+': '+parsed.stderr.slice(0,1000));
}
for(const entry of ['src/recovered/main.js','src/recovered/diorama.js','src/studio.js','src/customize/runtime-controls.js'])if(!fs.existsSync(path.join(root,entry)))report.errors.push('Missing source entry: '+entry);
const provenance=JSON.parse(fs.readFileSync(path.join(root,'ASSET_PROVENANCE.json'),'utf8'));
for(const entry of provenance.resources){const p=path.join(root,entry.path);if(!fs.existsSync(p)){report.errors.push('Missing asset: '+entry.path);continue;}
  const hash=crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');if(hash!==entry.sha256)report.errors.push('Changed asset: '+entry.path);report.assetsChecked++;
}
report.passed=report.errors.length===0;
fs.writeFileSync(path.join(root,'evidence','project-check.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));if(!report.passed)process.exitCode=1;
