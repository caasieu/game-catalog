<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { GameImageType } from '../types/game-image-type';

const props = defineProps<{
  gameImageProps?: GameImageType
}>()

const router = useRouter();
const handleClick = () => router.push('/game/' + props.gameImageProps?.id);
</script>

<template>
  <div @click="handleClick"
    class="relative w-full min-h-[20rem] sm:min-h-[15rem] bg-card border-1 border-border rounded-sm">
    <img class="absolute inset-0 w-full h-full object-cover" alt="" :src="gameImageProps?.url" />
  </div>
</template>
