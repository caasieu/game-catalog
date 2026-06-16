<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>

<template>
  <div>
    <button class="bg-primary text-white rounded-sm p-2"> {{ label }} </button>
  </div>
</template>
