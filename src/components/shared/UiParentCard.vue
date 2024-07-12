<script setup lang="ts">
const props = defineProps({
    title: String,
})
</script>

// ===============================|| Ui Parent Card||=============================== //
<template>
    <v-card variant="outlined" elevation="0" class="withbg">
        <v-card-item>
            <div class="align-center justify-space-between d-sm-flex">
                <v-card-title class="text-h6" style="line-height: 1.57">
                    {{ props.title }}
                </v-card-title>
                <slot name="action" />
            </div>
        </v-card-item>
        <v-divider />
        <v-card-text>
            <slot />
        </v-card-text>
    </v-card>
</template>
