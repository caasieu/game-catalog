<script setup lang="ts">
//import BottomNav from '@/components/ui/nav/bottom/bottom-nav.vue';
import HeaderWrapper from '@/components/ui/header/header-wrapper.vue';
import FooterWrapper from '@/components/ui/footer/footer-wrapper.vue';


</script>

<template>
  <HeaderWrapper />

  <main>
    <RouterView />
  </main>

  <FooterWrapper />
</template>
