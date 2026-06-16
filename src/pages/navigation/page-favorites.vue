<script setup lang="ts">
import GameCategoriesSection from '@/features/games/components/categories/game-categories-section.vue';

const showRatings = false;
</script>

<template>
  <div class="w-full flex flex-col gap-4 pt-20">
    <GameCategoriesSection label="Meus favoritos" :showRatings="showRatings" />
  </div>
</template>
