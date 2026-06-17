<script setup lang="ts">
import type { RawgGameType } from '../../types/rawg-types.ts';
import GameDescriptionSection from './game-description-section.vue';

defineProps<{
  game: RawgGameType
}>()

</script>

<template>
  <div class="
    px-6
    pt-[7rem] lg:pt-[4.5rem]
    flex flex-col
    w-full
  ">
    <div class="">
      <h4 class="text-lg font-semibold"> Sobre o jogo </h4>
    </div>

    <div class="flex flex-col gap-4">
      <GameDescriptionSection :label="game.name" :background_image="game.background_image"
        :description="game?.description_raw" />
    </div>
  </div>
</template>
