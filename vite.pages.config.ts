import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {fileURLToPath} from 'node:url';

const base='/MyPortfolio/';
export default defineConfig({
 base,
 plugins:[{
  name:'portfolio-pages-assets',enforce:'pre',
  transform(code,id){
   if(!/\.[jt]sx?$/.test(id)||id.includes('node_modules'))return;
   return code.replace(/(['"])\/assets\//g,`$1${base}assets/`);
  }
 },react()],
 resolve:{alias:{'@':fileURLToPath(new URL('.',import.meta.url))}},
 build:{outDir:'dist-pages',emptyOutDir:true},
});
