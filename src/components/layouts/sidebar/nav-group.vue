<script setup lang="ts">
const props = defineProps({ item: Object })
</script>

<template>
    <v-list-subheader color="lightText" class="text-subtitle-2 smallCap">
        <!-- {{ $t(props.item.header) }} -->
        {{ props?.item?.header }}
    </v-list-subheader>
</template>
