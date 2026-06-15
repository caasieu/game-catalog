<script setup lang="ts">

interface RouteButtonType {
  path: string,
  label: string,
  icon: string | null | undefined
}
defineProps<{ route: RouteButtonType }>()

</script>

<template>
  <RouterLink :to="route.path">
    <div class="flex flex-row items-center gap-2">
      <i v-if="route.icon" class="pi " :class="route.icon"></i>
      <span> {{ route.label }} </span>
    </div>
  </RouterLink>
</template>
