<script setup lang="ts">
import Loader from './loader.vue'
</script>

<template>
    <v-locale-provider>
        <v-app :class="[]">
            <LayoutsSidebar />
            <LayoutsHeader />

            <v-main class="page-wrapper">
                <v-container>
                    <div>
                        <!-- Loader start -->
                        <Loader />
                        <!-- Loader end -->
                        <RouterView />
                    </div>
                </v-container>
                <v-container class="pt-0">
                    <div>
                        <!-- <FooterPanel /> -->
                        <LayoutsFooterFooterPanel />
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>
