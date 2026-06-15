<script setup lang="ts">
import RouteButton from './route-button.vue';
import SearchInput from './search-input.vue';

const routes = [
  { path: '/', label: 'Home', icon: '' },
  { path: '/news', label: 'Novidades', icon: '' },
  { path: '/favorites', label: 'Favoritos', icon: '' },
  { path: '/progress', label: 'Progresso', icon: '' },
]

</script>


<template>
  <nav class="hidden md:flex flex-row items-center justify-start gap-3">
    <RouteButton v-for="route in routes" :key="route.label" :route="route" />
    <RouteButton key="Pesquisar" :route="{ path: '/search', label: 'Pesquisar', icon: '' }"
      class="hidden md:block lg:hidden" />

    <!-- Desktop: always visible -->
    <div class="hidden lg:block">
      <SearchInput />
    </div>
  </nav>
</template>
