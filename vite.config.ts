import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import UnoCSS from 'unocss/vite'
import { typescriptConfig, vueConfig } from './src/constants/vite-config'

export default defineConfig({
    plugins: [
        AutoImport({
            imports: [
                VueRouterAutoImports,
                {
                    typescript: typescriptConfig,
                    vue: vueConfig,
                    pinia: ['defineStore', 'acceptHMRUpdate', 'storeToRefs'],
                    lodash: [['default', '_']],
                    vuetify: ['useTheme', 'useDisplay'],
                    zod: ['z'],
                },
            ],
            dirs: ['./src/**'],
            dts: './src/auto-imports.d.ts',
        }),
        Components({
            dirs: ['src/components'],
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
            '@core': fileURLToPath(new URL('./src/@core', import.meta.url)),
            '@assets': fileURLToPath(new URL('./assets', import.meta.url)),
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
            '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
            '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
        },
        extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
    },
    css: {
        preprocessorOptions: {
            scss: {
                // './src/assets/styles/variables.scss': '@import
            },
        },
    },
    build: {
        chunkSizeWarningLimit: 1024 * 1024, // Set the limit to 1 MB
    },
    optimizeDeps: {
        exclude: ['vuetify'],
        entries: ['./src/**/*.vue'],
    },
})
