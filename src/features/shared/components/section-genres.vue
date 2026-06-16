<script setup lang="ts">
import { useRouter } from 'vue-router';


const genres = [
  'Ação', 'Aventura', 'Horror', 'Drama', 'Sci-Fi', 'Indie', 'Sports', 'FPS',
  '2D Games', 'Plaforma', 'Ação', 'Aventura', 'Horror', 'Drama', 'Sci-Fi', 'Indie', 'Sports', 'FPS',
  '2D Games', 'Plaforma',
]

const router = useRouter()
const handleGenreClick = (q: string) => router.push('/search?q=' + q);
</script>

<template>
  <div class="flex flex-row gap-2 flex-wrap text-xs">
    <div v-for="genre in genres" :key="genre" @click="handleGenreClick(genre)"
      class="bg-surface border-1 border-border rounded-sm px-3 py-1"> {{ genre }} </div>
  </div>
</template>
