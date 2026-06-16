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
  <div class="px-3 sm:px-6 flex flex-row gap-2 flex-wrap">
    <div v-for="genre in genres" :key="genre" @click="handleGenreClick(genre)" class="border-1 px-3"> {{ genre }} </div>
  </div>
</template>
