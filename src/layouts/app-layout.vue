<script setup lang="ts">
import BottomNav from '@/components/ui/nav/bottom/bottom-nav.vue';


</script>

<template>
  <div>
    <span> Main app layout </span>
  </div>

  <main class="px-3 pb-50 bg-quinary">
    <RouterView />
  </main>

  <BottomNav>

  </BottomNav>
</template>
