<script setup lang="ts">
import { ref } from 'vue';
import CardGridSearch from '@/features/games/components/card-grid-search.vue';


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
  <div class="flex flex-col gap-2 px-3 sm:px-6 pt-[7rem] lg:pt-[4.5rem]">
    <div class="font-semibold">
      <h4> Escolha os seus jogos </h4>
    </div>

    <div class="
    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
    gap-3
  ">
      <!--<CardGrid v-for="game in games" :key="game.name" :game="game" />-->
      <CardGridSearch v-for="game in games" :key="game.name" />
    </div>
  </div>
</template>

<style scoped></style>
