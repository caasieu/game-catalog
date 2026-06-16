<script setup lang="ts">
import GameCategoriesSection from "@/features/games/components/categories/game-categories-section.vue";
import HomeHeroSection from "@/features/home/components/home-hero-section.vue";
import SectionGenres from "@/features/shared/components/section-genres.vue";

const showPagination = true;
</script>

<template>
  <div class="w-full flex flex-col gap-4">
    <HomeHeroSection />

    <div class="flex flex-col gap-4 px-6">
      <SectionGenres />
      <GameCategoriesSection label="Categorias que você pode gostar" :showPagination="showPagination" />
    </div>
  </div>
</template>
