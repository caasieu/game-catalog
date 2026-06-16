<script setup lang="ts">

import SelectBox from '@/features/shared/components/select-box.vue';
import GameCategoriesGrid from './game-categories-grid.vue';



const genres = {
  id: 0,
  type: 'genres',
  label: 'Gêneros',
  options: [
    'Todos', 'Drama', 'Sci-Fi', 'Indie'
  ],
};


const ratings = {
  id: 0,
  type: 'ratings',
  label: 'Classificação',
  options: [
    'Popular', 'Trending', 'New'
  ],
};

defineProps<{ label: string, showRatings: boolean }>();
</script>

<template>
  <div class="flex flex-col gap-2 px-3 sm:px-6">
    <div class="flex flex-row justify-between items-end w-full">
      <div class="font-semibold">
        <h4> {{ label }} </h4>
      </div>

      <div class="flex flex-col items-end sm:flex-row gap-3 sm:items-center justify-end">
        <SelectBox :select="genres" />

        <SelectBox v-if="showRatings" :select="ratings" />
      </div>
    </div>

    <GameCategoriesGrid />
  </div>
</template>
