<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'

import GameCardSearch from '@/features/games/components/game-card-search.vue'
import { useGameSearch } from '@/features/games/composables/use-search'

const route = useRoute()

const {
  games,
  loading,
  search,
} = useGameSearch()

watch(
  () => route.query.q,
  (query) => search(query?.toString() ?? ''),
  { immediate: true }
)

</script>

<template>
  <div class="flex flex-col gap-2 px-6 pt-[7rem] lg:pt-[4.5rem]">
    <div class="font-semibold text-sm">
      <h4>
        Resultados para "{{ route.query.q }}"
      </h4>
    </div>

    <div v-if="loading" class="py-10 text-center">
      Carregando...
    </div>

    <div v-else class="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-3
      ">
      <GameCardSearch v-for="game in games" :key="game.id" :gameProps="game" />
    </div>
  </div>
</template>
