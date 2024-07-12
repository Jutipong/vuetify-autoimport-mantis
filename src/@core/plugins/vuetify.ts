import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'
import { DefaultTheme } from '@/@core/plugins/DefaultTheme'

const vBtn = {
    density: 'comfortable',
    variant: 'flat',
}

export default createVuetify({
    components: { ...components, ...labsComponents },
    directives,
    theme: {
        defaultTheme: 'DefaultTheme',
        themes: {
            DefaultTheme,
        },
    },
    defaults: {
        VCard: {
            variant: 'outlined',
            rounded: 'md',

            // card actions
            VCardActions: {
                VBtn: vBtn,
            },
        },
        VBtn: vBtn,
    },
})
