// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
// import vuetify from './plugins/vuetify';
// import router from '@/@core/router'

// const app = createApp(App);
// app.use(router as any);
// app.use(vuetify).mount('#app');

import { createApp } from 'vue'
// import '@/assets/css/styles/index.scss'
// import '@/scss/style.scss';
import '@/scss/style.scss'

import type { PluginOptions } from 'vue-toastification'
import Toast from 'vue-toastification'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import App from './App.vue'
// import vuetify from '@/@core/plugins/vuetify'
import router from '@/@core/router'

// import '@/assets/css/main.css'

import 'vue-toastification/dist/index.css'
import 'virtual:uno.css'

document.title = import.meta.env.VITE_APP_TITLE

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(PerfectScrollbar)
app.use(piniaConfig)
app.use(Toast, {
    transition: 'Vue-Toastification__bounce',
    timeout: 5000,
    maxToasts: 9,
    newestOnTop: true,
} as PluginOptions)
app.mount('#app')
