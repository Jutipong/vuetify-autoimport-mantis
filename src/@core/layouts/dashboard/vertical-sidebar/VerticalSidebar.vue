<script setup lang="ts">
import { shallowRef } from 'vue'
import { useCustomizerStore } from '../../../../stores/customizer'
import Logo from '../logo/LogoDark.vue'
import sidebarItems from './sidebarItem'

import NavGroup from './NavGroup/NavGroup.vue'
import NavItem from './NavItem/NavItem.vue'
import NavCollapse from './NavCollapse/NavCollapse.vue'

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
                    <NavGroup v-if="item.header" :key="item.title" :item="item" />
                    <!---Item Divider -->
                    <v-divider v-else-if="item.divider" class="my-3" />
                    <!---If Has Child -->
                    <NavCollapse v-else-if="item.children" class="leftPadding" :item="item" :level="0" />
                    <!---Single Item -->
                    <NavItem v-else :item="item" />
                    <!---End Single Item -->
                </template>
            </v-list>
            <div class="pa-4">
                <ExtraBox />
            </div>
        </perfect-scrollbar>
    </v-navigation-drawer>
</template>
