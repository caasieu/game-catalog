<script setup lang="ts">
import GameCardImage from './game-card-image.vue';
import GameCardGenre from './game-card-genre.vue';
import GameCardFavoriteButton from './game-card-favorite-button.vue';
import type { GameCardType } from '../types/game-type.ts';

defineProps<{
  gameProps?: GameCardType
}>();
</script>

<template>
  <div
    class="flex flex-col justify-between gap-2 bg-surface border-1 border-border rounded-sm text-xs p-2 min-h-[25rem] sm:min-h-[20rem]">
    <GameCardImage :gameImageProps="{ id: gameProps?.id, url: gameProps?.image }" />

    <div class="flex flex-col w-full gap-2">
      <div>
        <span> {{ gameProps?.name }} </span>
      </div>

      <div class="flex flex-row flex-wrap gap-2 ">
        <GameCardGenre v-for="genre in gameProps?.genres" :key="genre" :genre="genre" />
      </div>
    </div>

    <div class="w-full flex flex-col gap-2 items-center ">
      <GameCardFavoriteButton />
    </div>
  </div>
</template>
