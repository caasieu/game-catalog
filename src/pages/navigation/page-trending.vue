<script setup lang="ts">
import GameCategoriesSection from '@/features/games/components/categories/game-categories-section.vue';
import TopTrending from '@/features/trending/components/top-trending.vue';


</script>

<template>
  <div class="w-full flex flex-col gap-4 pt-14 sm:pt-20">
    <div class="sm:px-6">
      <TopTrending />
    </div>

    <div class="px-6">
      <GameCategoriesSection label="Mais Populares agora" :showPagination="false" />
    </div>
  </div>
</template>
