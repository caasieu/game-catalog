<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';

import AppLogo from '../shared/app-logo.vue';
import HeaderSearchInput from './header-search-input.vue';
import HeaderContent from './header-content.vue';

const route = useRoute()

const isSearchPage = computed(() => route.path === '/search')
</script>

<template>
  <header
    class="fixed top-0 left-0 z-50 flex flex-col w-full min-h-[2rem] gap-3 px-6 py-3 shadow-sm backdrop-blur-lg bg-background/95">
    <div class="flex flex-row items-center justify-between w-full text-xs">
      <AppLogo />

      <HeaderContent />
    </div>

    <!-- Mobile: input de pesquisa apenas na rota /search -->
    <div v-if="isSearchPage" class="block lg:hidden">
      <HeaderSearchInput />
    </div>
  </header>
</template>
