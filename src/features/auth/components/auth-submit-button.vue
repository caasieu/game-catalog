<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>

<template>
  <div class="w-full ">
    <button class="w-full bg-primary text-white rounded-sm p-2"> {{ label }} </button>
  </div>
</template>
