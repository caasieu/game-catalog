<script setup lang="ts">
import CategoriesSection from '@/features/home/components/categories-section.vue';
import TopTrending from '@/features/trending/components/top-trending.vue';


const showRatings = false;
</script>

<template>
  <div class="w-full flex flex-col gap-4 pt-20">
    <div class="px-3 sm:px-6">
      <TopTrending />
    </div>

    <CategoriesSection label="Mais Populares agora" :show-ratings="showRatings" />

  </div>
</template>
