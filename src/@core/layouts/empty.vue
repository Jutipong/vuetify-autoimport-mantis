// ===============================|| Blank Layout ||=============================== //
<script setup lang="ts">
import { RouterView } from 'vue-router'
import Loader from './loader.vue'
</script>

<template>
    <v-app>
        <!-- Loader start -->
        <Loader />
        <!-- Loader end -->
        <RouterView />
    </v-app>
</template>
