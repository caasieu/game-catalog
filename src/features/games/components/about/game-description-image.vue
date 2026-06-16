<script setup lang="ts">
defineProps<{ background_image?: string }>()
</script>

<template>
  <div class="relative w-full h-[15rem] sm:h-[20rem] md:25 z-0 ">
    <img class="absolute inset-0 w-full h-full object-cover " alt="description background image"
      :src="background_image" />
  </div>
</template>
