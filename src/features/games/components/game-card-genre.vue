<script setup lang="ts">
defineProps<{ genre: string }>()
</script>

<template>
  <div class="border-1 px-2"> <span> {{ genre }} </span> </div>
</template>
