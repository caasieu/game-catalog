<script setup lang="ts">
import GameDescriptionContainer from '@/features/games/components/about/game-description-container.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
console.log("game id: ", route.params.id);

</script>

<template>
  <div class="w-full flex flex-col gap-4">
    <GameDescriptionContainer />
  </div>
</template>
