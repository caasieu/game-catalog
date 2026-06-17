<script setup lang="ts">
import GameCard from '@/features/games/components/game-card.vue';

defineProps<{
  games: Array<{
    id: number
    name: string
    image: string
    genres: string[]
    rating: number
  }>
}>()

</script>

<template>
  <div class="
  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
  gap-3
  ">
    <GameCard v-for="game in games" :key="game.id" :gameProps="game" />
  </div>
</template>
