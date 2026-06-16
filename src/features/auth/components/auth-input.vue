<script setup lang="ts">
defineProps<{
  id?: string,
  type?: string,
  placeholder?: string
}>()
</script>

<template>
  <div class=" bg-surface border-border border-1 rounded-sm">
    <input :type="type" :id="id" :placeholder="placeholder" class="w-full p-2" />
  </div>
</template>
