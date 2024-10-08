import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    //extensions: [".js", ".jsx", ".ejs", '.mjs','.json','vue'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // find: 'src',
      // replacement: path.resolve(__dirname, './src'),
    }
  }
})
