import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'
import { DefaultTheme } from '@/@core/plugins/DefaultTheme'

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
        VBtn: {},
        VCard: {
            variant: 'outlined',
            rounded: 'md',
        },
        VTextField: {
            rounded: 'lg',
        },
        VTooltip: {
            // set v-tooltip default location to top
            location: 'top',
        },
    },
})
