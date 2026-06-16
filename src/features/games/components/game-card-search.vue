<script setup lang="ts">

import GameCardImage from './game-card-image.vue';
import GameCardFavoriteButton from './game-card-favorite-button.vue';
import GameCardSaveButton from './game-card-save-button.vue';
import type { GameCardType } from '../types/game-type.ts';

defineProps<{
  gameProps?: GameCardType
}>();
</script>

<template>
  <div class="flex flex-col justify-between gap-2 bg-surface border-1 border-border rounded-sm p-2 min-h-[20rem]">
    <GameCardImage :gameImageProps="{ id: '72343888', url: '/images/characters.webp' }" />

    <div class="flex flex-col w-full gap-2">
      <div>
        <span> {{ gameProps?.name }} </span>
      </div>

    </div>

    <div class="w-full flex flex-col gap-2 items-center text-xs">
      <GameCardFavoriteButton />

      <GameCardSaveButton />
    </div>
  </div>
</template>
