import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { URL, fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { typescriptConfig, vueConfig } from './src/constants/vite-config'
import UnoCSS from 'unocss/vite'
export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        VueRouterAutoImports,
        {
          typescript: typescriptConfig,
          vue: vueConfig,
          pinia: ['defineStore', 'acceptHMRUpdate'],
          lodash: [['default', '_']],
          vuetify: ['useTheme', 'useDisplay'],
          zod: ['z'],
        },
      ],
      dirs: ['./src/**'],
      dts: './src/auto-imports.d.ts',
    }),
    Components({
      dirs: ['src/components', 'src/@core/layouts/components'],
      dts: 'src/components.d.ts',
      deep: true,
      directoryAsNamespace: true,
    }),
    Layouts({
      layoutsDirs: 'src/@core/layouts',
      defaultLayout: 'default',
    }),
    VueRouter({
      routesFolder: 'src/pages',
      dts: 'src/typed-router.d.ts',
    }),
    vue(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
})
