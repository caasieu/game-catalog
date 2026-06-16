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
  <div class="flex flex-col justify-between gap-2 border-1 p-2 min-h-[20rem]">
    <GameCardImage :gameImageProps="{ id: '72343888', url: '/images/characters.webp' }" />

    <div class="flex flex-col w-full gap-2">
      <div>
        <span> {{ gameProps?.name }} </span>
      </div>

      <div class="flex flex-row gap-2 text-xs">
        <GameCardGenre v-for="genre in gameProps?.genres" :key="genre" :genre="genre" />
      </div>
    </div>

    <div class="w-full flex flex-col gap-2 items-center text-xs">
      <GameCardFavoriteButton />
    </div>
  </div>
</template>
