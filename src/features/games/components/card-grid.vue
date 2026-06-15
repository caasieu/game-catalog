<script setup lang="ts">
import FavoriteButton from './favorite-button.vue';
import CardGridImage from './card-grid-image.vue';
import CardGridGenre from './card-grid-genre.vue';


/*interface GameType {
  id: number;
  name: string;
}

defineProps<{ game: GameType }>();
*/

const genres = [
  'Horror',
  'Ação',
  'Aventura',
]
</script>

<template>
  <div class="flex flex-col justify-between gap-2 border-1 p-2 min-h-[20rem]">
    <CardGridImage />

    <div class="flex flex-col w-full gap-2">
      <div>
        <span> Nome do Game </span>
      </div>


      <div class="flex flex-row gap-2 text-xs">
        <CardGridGenre v-for="genre in genres" :key="genre" :genre="genre" />
      </div>
    </div>

    <div class="w-full flex flex-col gap-2 items-center text-xs">
      <FavoriteButton />

    </div>
  </div>
</template>
