<script setup lang="ts">
import GameDescription from '@/features/games/game-description.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
console.log("game id: ", route.params.id);

</script>

<template>
  <div class="w-full flex flex-col gap-4">
    <GameDescription />
  </div>
</template>
