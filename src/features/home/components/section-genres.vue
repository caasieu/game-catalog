<script setup lang="ts">

const genres = [
  'Ação', 'Aventura', 'Horror', 'Drama', 'Sci-Fi', 'Indie', 'Sports', 'FPS',
  '2D Games', 'Plaforma', 'Ação', 'Aventura', 'Horror', 'Drama', 'Sci-Fi', 'Indie', 'Sports', 'FPS',
  '2D Games', 'Plaforma',
]
</script>

<template>

  <div class="px-3 sm:px-6 flex flex-row gap-2 flex-wrap">
    <div v-for="genre in genres" :key="genre" class="border-1 px-3"> {{ genre }} </div>
  </div>
</template>
