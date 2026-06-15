<script setup lang="ts">
import FavoriteButton from './favorite-button.vue';
import SaveButton from './save-button.vue';


/*interface GameType {
  id: number;
  name: string;
}

defineProps<{ game: GameType }>();
*/
</script>

<template>
  <div class="flex flex-col justify-between gap-2 border-1 p-2 min-h-[20rem]">
    <div class="relative w-full min-h-[15rem] bg-gray-100">
      <img class="absolute inset-0 w-full h-full object-cover" alt="user header" src="/images/characters.webp" />
    </div>

    <div class="flex flex-col w-full gap-2">
      <div>
        <span> Nome do Game </span>
      </div>

    </div>

    <div class="w-full flex flex-col gap-2 items-center text-xs">
      <FavoriteButton />

      <SaveButton />
    </div>
  </div>
</template>
