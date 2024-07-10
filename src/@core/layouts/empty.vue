// ===============================|| Blank Layout ||=============================== //
<script setup lang="ts">
import { RouterView } from 'vue-router'
import LoaderWrapper from './LoaderWrapper.vue'
</script>

<template>
    <v-app>
        <!-- Loader start -->
        <LoaderWrapper />
        <!-- Loader end -->
        <RouterView />
    </v-app>
</template>
