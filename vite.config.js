import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { mkdirSync, copyFileSync } from 'node:fs';

export default defineConfig({
  base: './',
  plugins: [{name:'local-project-guides',closeBundle(){
    mkdirSync(resolve(import.meta.dirname,'dist/docs'),{recursive:true});
    for(const name of ['PLAY_SYSTEMS.md','PROVENANCE.md','EXPERIENCE.md','MEADOW_RENDERING.md'])copyFileSync(resolve(import.meta.dirname,'docs',name),resolve(import.meta.dirname,'dist/docs',name));
  }}],
  build: {
    target: 'es2022',
    sourcemap: true,
    rollupOptions: { input: { game: resolve(import.meta.dirname, 'index.html'), diorama: resolve(import.meta.dirname, 'diorama.html') } }
  }
});
