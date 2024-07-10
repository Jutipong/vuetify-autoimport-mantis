<script setup lang="ts">
import LoaderWrapper from './LoaderWrapper.vue'
</script>

<template>
    <v-locale-provider>
        <v-app :class="[]">
            <LayoutsVerticalSidebarVerticalSidebar />
            <LayoutsVerticalHeader />

            <v-main class="page-wrapper">
                <v-container>
                    <div>
                        <!-- Loader start -->
                        <LoaderWrapper />
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
