<script setup lang="ts">
import BottomNav from '@/components/ui/nav/bottom/bottom-nav.vue';
import HeaderWrapper from '@/components/ui/nav/header/header-wrapper.vue';


</script>

<template>
  <HeaderWrapper />

  <main class="px-3 pb-50">
    <RouterView />
  </main>

  <BottomNav />
</template>
