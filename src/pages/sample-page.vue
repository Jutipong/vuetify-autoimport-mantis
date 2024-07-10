<script setup lang="ts">
const page = ref({ title: 'Sample Page' })
const breadcrumbs = shallowRef([
    {
        title: 'Others',
        disabled: false,
        href: '#',
    },
    {
        title: 'Sample Page',
        disabled: true,
        href: '#',
    },
])
</script>

<template>
    <SharedBaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs" />
    <v-row>
        <v-col cols="12" md="12">
            <SharedUiParentCard title="Simple Title">
                Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
                minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
                reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui
                officiate descent molls anim id est labours.
            </SharedUiParentCard>
        </v-col>
    </v-row>
</template>
