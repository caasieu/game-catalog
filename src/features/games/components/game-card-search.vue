<script setup lang="ts">

import GameCardImage from './game-card-image.vue';
import GameCardFavoriteButton from './game-card-favorite-button.vue';
import GameCardSaveButton from './game-card-save-button.vue';


/*interface GameType {
  id: number;
  name: string;
}

defineProps<{ game: GameType }>();
*/
</script>

<template>
  <div class="flex flex-col justify-between gap-2 border-1 p-2 min-h-[20rem]">
    <GameCardImage />


    <div class="flex flex-col w-full gap-2">
      <div>
        <span> Nome do Game </span>
      </div>

    </div>

    <div class="w-full flex flex-col gap-2 items-center text-xs">
      <GameCardFavoriteButton />

      <GameCardSaveButton />
    </div>
  </div>
</template>
