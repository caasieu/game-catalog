<script setup lang="ts">
import GameCard from '@/features/games/components/game-card.vue';


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
  <div class="
  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
  gap-3
  ">
    <GameCard v-for="game in gameResults" :key="game.id" :gameProps="game" />
  </div>
</template>
