<script setup lang="ts">
import FooterContainer from '@/components/ui/footer/footer-container.vue';
import HeaderContainer from '@/components/ui/header/header-container.vue';
</script>

<template>
  <HeaderContainer />

  <main>
    <RouterView />
  </main>

  <FooterContainer />
</template>
