<script setup lang="ts">
import GameCategoriesSection from '@/features/games/components/categories/game-categories-section.vue';

</script>

<template>
  <div class="w-full flex flex-col gap-4 pt-20 px-6">
    <GameCategoriesSection label="Meus favoritos" :showPagination="false" />
  </div>
</template>
