import { createApp } from 'vue'

import type { PluginOptions } from 'vue-toastification'
import Toast from 'vue-toastification'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'

import App from './App.vue'

import vuetify from '@/@core/plugins/vuetify'
import router from '@/@core/router'

import './assets/scss/style.scss'
import 'vue3-perfect-scrollbar/style.css'
import 'vue-toastification/dist/index.css'
import 'virtual:uno.css'

document.title = import.meta.env.VITE_APP_TITLE

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(PerfectScrollbarPlugin)
app.use(piniaConfig)
app.use(Toast, {
    transition: 'Vue-Toastification__bounce',
    timeout: 5000,
    maxToasts: 9,
    newestOnTop: true,
} as PluginOptions)
app.mount('#app')
