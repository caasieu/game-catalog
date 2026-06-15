<script setup lang="ts">

import { useRouter } from 'vue-router';
const router = useRouter();
const handleClick = () => router.push('/game/1');
</script>

<template>
  <div @click="handleClick" class="relative w-full min-h-[15rem] bg-gray-100">
    <img class="absolute inset-0 w-full h-full object-cover" alt="user header" src="/images/characters.webp" />
  </div>
</template>
