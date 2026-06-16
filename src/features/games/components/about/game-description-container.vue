<script setup lang="ts">
import GameDescriptionSection from './game-description-section.vue';

</script>

<template>
  <div class="
    px-3 sm:px-6
    pt-[7rem] lg:pt-[4.5rem]
    flex flex-col
    w-full
  ">
    <div class="">
      <h4 class="text-lg font-semibold"> Sobre o jogo </h4>
    </div>

    <div class="flex flex-col gap-4">
      <GameDescriptionSection v-for="value in [1, 2, 3]" :key="value" />
    </div>
  </div>
</template>
