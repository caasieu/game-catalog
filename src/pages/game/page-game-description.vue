<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router';
import { useGameDetails } from '@/features/games/composables/use-game-details'
import GameDescriptionContainer from '@/features/games/components/about/game-description-container.vue';


const route = useRoute()

const {
  game,
  loading,
  error,
  loadGame,
} = useGameDetails()

watch(
  () => route.params.id,
  (id) => {
    if (id) loadGame(id as string)
  },
  { immediate: true }
)

</script>

<template>
  <div class="w-full flex flex-col gap-4">
    <div v-if="loading">Carregando...</div>
    <div v-if="error">{{ error }}</div>

    <GameDescriptionContainer v-if="game" :game="game" />
  </div>
</template>
