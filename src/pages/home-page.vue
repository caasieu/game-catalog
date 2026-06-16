<script setup lang="ts">
import CategoriesSection from "@/features/home/components/categories-section.vue";
import HeroSection from "@/features/home/components/hero-section.vue";
import SectionGenres from "@/features/home/components/section-genres.vue";

const showRatings = true;
</script>

<template>
  <div class="w-full flex flex-col gap-4">
    <HeroSection />

    <SectionGenres />
    <CategoriesSection label="Categorias que você pode gostar" :showRatings="showRatings" />
  </div>
</template>
