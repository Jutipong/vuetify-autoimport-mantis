import antfu from '@antfu/eslint-config'

export default antfu(
    {
        stylistic: { 
            indent: 4
        },
        typescript: true,
        vue: true,
        rules: {
            'vue/valid-v-slot': ['error', {
                allowModifiers: true,
            }],
            'vue/no-mutating-props': ['error', {
                shallowOnly: true,
            }],
            'vue/prop-name-casing': ['off'],
            'vue/no-template-shadow': ['off'],
        },
        unocss: true,
        jsonc: false,
        yaml: false,
        ignores: [
            '**/fixtures',
            'vite-env.d.ts',
            '**/*.d.ts',
            '**/.d.ts',
        ],
    },
)