<script setup lang="ts">
import GameCardSearch from '@/features/games/components/game-card-search.vue';


const gameResults = [
  {
    id: '234234', name: 'GTA 6', genres: [
      'Crime',
      'Ação',
      'Exploração',
    ]
  },
  {
    id: '456474', name: 'Call of Duty', genres: [
      'FPS',
      'Ação',
    ]
  },
  {
    id: '864244', name: 'Resident Evil 7', genres: [
      'Horror',
      'Ação',
      'Aventura',
    ]
  },
  {
    id: '234234', name: 'eFootball 2026', genres: [
      'Sports',
      'Futebol',
      'Arcade',
    ]
  },
  {
    id: '456474', name: 'Call of Duty', genres: [
      'FPS',
      'Ação',
    ]
  },
  {
    id: '864244', name: 'Resident Evil 7', genres: [
      'Horror',
      'Ação',
      'Aventura',
    ]
  },
  {
    id: '234234', name: 'eFootball 2026', genres: [
      'Sports',
      'Futebol',
      'Arcade',
    ]
  },
]
</script>

<template>
  <div class="flex flex-col gap-2 px-6 pt-[7rem] lg:pt-[4.5rem]">
    <div class="font-semibold text-sm">
      <h4> Escolha os seus jogos </h4>
    </div>

    <div class="
    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
    gap-3
  ">
      <GameCardSearch v-for="game in gameResults" :key="game.id" :gameProps="game" />
    </div>
  </div>
</template>

<style scoped></style>
