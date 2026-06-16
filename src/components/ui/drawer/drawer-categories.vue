<script setup lang="ts">
import AppRouteButton from '../shared/app-route-button.vue';
import type { DrawerCategoryType } from './types/drawer-category-type.ts';

defineProps<{ category: DrawerCategoryType }>()
</script>

<template>
  <div class="flex flex-col gap-3 text-lg border-b-1 py-4">
    <div>
      <h4 class="font-semibold"> {{ category.label }} </h4>
    </div>
    <AppRouteButton v-for="route in category.routes" :key="route.label" :route="route" />
  </div>
</template>
