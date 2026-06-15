<script setup lang="ts">
import RouteButton from './route-button.vue';

interface RouteButtonType {
  path: string,
  label: string,
  icon: string | null | undefined
}

interface CategoryType {
  label: string,
  routes: Array<RouteButtonType>
}

defineProps<{ category: CategoryType }>()

const emit = defineEmits<{
  close: []
}>()

</script>

<template>
  <div class="flex flex-col gap-3 text-lg border-b-1 py-4">
    <div>
      <h4 class="font-semibold"> {{ category.label }} </h4>
    </div>
    <RouteButton v-for="route in category.routes" :key="route.label" :route="route" @click="emit('close')" />
  </div>
</template>
