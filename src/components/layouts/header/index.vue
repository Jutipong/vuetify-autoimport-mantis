<script setup lang="ts">
import { MenuFoldOutlined, SearchOutlined } from '@ant-design/icons-vue'

const customizer = useCustomizerStore()
</script>

<template>
    <v-app-bar elevation="0" height="60">
        <v-btn
            class="text-secondary hidden-md-and-down mr-3" color="darkText" icon rounded="sm" variant="text"
            size="small" @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
        >
            <MenuFoldOutlined :style="{ fontSize: '16px' }" />
        </v-btn>
        <v-btn
            class="text-secondary hidden-lg-and-up ms-3" color="darkText" icon rounded="sm" variant="text"
            size="small" @click.stop="customizer.SET_SIDEBAR_DRAWER"
        >
            <MenuFoldOutlined :style="{ fontSize: '16px' }" />
        </v-btn>

        <!-- search mobile -->
        <v-menu :close-on-content-click="false" class="hidden-lg-and-up" offset="10, 0">
            <template #activator="{ props }">
                <v-btn
                    class="hidden-lg-and-up text-secondary ml-1" color="lightsecondary" icon rounded="sm" variant="flat"
                    size="small" v-bind="props"
                >
                    <SearchOutlined :style="{ fontSize: '17px' }" />
                </v-btn>
            </template>
            <v-sheet class="pa-0 search-sheet v-col-12" width="320">
                <v-text-field placeholder="Search here.." color="primary" variant="solo" hide-details persistent-placeholder>
                    <template #prepend-inner>
                        <SearchOutlined :style="{ fontSize: '17px' }" />
                    </template>
                </v-text-field>
            </v-sheet>
        </v-menu>

        <!-- ---------------------------------------------- -->
        <!-- Search part -->
        <!-- ---------------------------------------------- -->
        <v-sheet class="d-none d-lg-block" width="250">
            <!-- <Searchbar /> -->
        </v-sheet>

        <v-spacer />
        <!-- ---------------------------------------------- -->
        <!-- ---------------------------------------------- -->

        <!-- ---------------------------------------------- -->
        <!-- Github -->
        <!-- ---------------------------------------------- -->
        <!-- <v-btn
            icon class="text-secondary hidden-sm-and-down d-flex" color="darkText" rounded="sm" variant="text"
            href="https://github.com/codedthemes/mantis-free-vuetify-vuejs-admin-template" target="_blank"
        >
            <GithubOutlined :style="{ fontSize: '16px' }" />
        </v-btn> -->

        <!-- ---------------------------------------------- -->
        <!-- Notification -->
        <!-- ---------------------------------------------- -->
        <LayoutsHeaderNotification />

        <!-- ---------------------------------------------- -->
        <!-- User Profile -->
        <!-- ---------------------------------------------- -->
        <v-menu :close-on-content-click="false" offset="8, 0">
            <template #activator="{ props }">
                <v-btn class="profileBtn" variant="text" rounded="sm" v-bind="props">
                    <div class="d-flex align-center">
                        <v-avatar class="mr-sm-2 mr-0 py-2">
                            <img src="@/assets/images/users/avatar-1.png" alt="Julia">
                        </v-avatar>
                        <h6 class="text-subtitle-1 mb-0 d-none d-sm-block">
                            JWT User
                        </h6>
                    </div>
                </v-btn>
            </template>
            <v-sheet rounded="md" width="290">
                <LayoutsHeaderProfile />
            </v-sheet>
        </v-menu>
    </v-app-bar>
</template>
