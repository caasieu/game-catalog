<script setup lang="ts">
import { ref } from 'vue';
import SearchGameCard from './search-game-card.vue';


const games = ref([
  { id: 0, name: "Gta 6" },
  { id: 1, name: "Call of Duty" },
  { id: 2, name: "Little Adventures" },
  { id: 3, name: "Counter Strike 8" },
  { id: 4, name: "gta vice city" },
  { id: 5, name: "gta vice city" },
  { id: 6, name: "gta vice city" },
  { id: 7, name: "gta vice city" },
])

</script>

<template>

  <div class="
    grid
    grid-cols-2
    md:grid-cols-3
    lg:grid-cols-5
    gap-3
  ">
    <SearchGameCard v-for="game in games" :key="game.name" :game="game" />
  </div>
</template>

<style scoped></style>
