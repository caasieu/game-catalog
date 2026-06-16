<script setup lang="ts">
defineProps<{ genre: string }>()
</script>

<template>
  <div class="bg-card border-1 border-border rounded-sm px-3 py-1"> <span> {{ genre }} </span> </div>
</template>
