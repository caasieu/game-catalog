<script setup lang="ts">
import { useRoute } from 'vue-router';
import type { DrawerCategoryType } from './types/drawer-category-type.ts';

defineProps<{ category: DrawerCategoryType }>()


const currentRoute = useRoute()
const emit = defineEmits<{
  navigate: []
}>()
</script>

<template>
  <div class="flex flex-col gap-3 text-sm border-b-1 border-border py-3">
    <div>
      <h4 class="font-semibold"> {{ category.label }} </h4>
    </div>

    <RouterLink v-for="route in category.routes" @click="emit('navigate')" :key="route.label" :to="route.path"
      class="flex items-center h-[3rem] rounded-sm bg-card px-3" :class="{
        'bg-primary text-white': currentRoute.path === route.path
      }">
      <div class="flex flex-row items-center gap-2 w-full h-full">
        <i v-if="route.icon" class="pi " :class="route.icon" style="font-size: 12pt;"></i>
        <span> {{ route.label }} </span>
      </div>
    </RouterLink>
  </div>
</template>
