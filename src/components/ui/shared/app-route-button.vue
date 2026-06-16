<script setup lang="ts">
import type { RouteButtonType } from './types/route-button-type';

defineProps<{ route: RouteButtonType }>()
</script>

<template>
  <RouterLink :to="route.path">
    <div class="flex flex-row items-center gap-2 w-full h-full">
      <i v-if="route.icon" class="pi " :class="route.icon" style="font-size: 12pt;"></i>
      <span> {{ route.label }} </span>
    </div>
  </RouterLink>
</template>
