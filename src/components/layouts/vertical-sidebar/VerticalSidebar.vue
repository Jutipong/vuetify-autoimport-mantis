<script setup lang="ts">
import { shallowRef } from 'vue'
import Logo from '../logo/LogoDark.vue'
import sidebarItems from './sidebarItem'

import ExtraBox from './extrabox/ExtraBox.vue'

const customizer = useCustomizerStore()
const sidebarMenu = shallowRef(sidebarItems)
</script>

<template>
    <v-navigation-drawer
        v-model="customizer.Sidebar_drawer" left elevation="0" rail-width="60" mobile-breakpoint="lg" app
        class="leftSidebar" :rail="customizer.mini_sidebar" expand-on-hover
    >
        <div class="pa-5">
            <Logo />
        </div>
        <!-- ---------------------------------------------- -->
        <!---Navigation -->
        <!-- ---------------------------------------------- -->
        <perfect-scrollbar class="scrollnavbar">
            <v-list aria-busy="true" aria-label="menu list">
                <!---Menu Loop -->
                <template v-for="(item, i) in sidebarMenu" :key="i">
                    <!---Item Sub Header -->
                    <LayoutsVerticalSidebarNavGroupNavGroup v-if="item.header" :key="item.title" :item="item" />
                    <!---Item Divider -->
                    <v-divider v-else-if="item.divider" class="my-3" />
                    <!---If Has Child -->
                    <LayoutsVerticalSidebarNavCollapseNavCollapse v-else-if="item.children" class="leftPadding" :item="item" :level="0" />
                    <!---Single Item -->
                    <LayoutsVerticalSidebarNavItemNavItem v-else :item="item" />
                    <!---End Single Item -->
                </template>
            </v-list>
            <div class="pa-4">
                <ExtraBox />
            </div>
        </perfect-scrollbar>
    </v-navigation-drawer>
</template>
