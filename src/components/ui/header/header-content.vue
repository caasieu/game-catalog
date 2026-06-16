<script setup lang="ts">
import AppRouteButton from '../shared/app-route-button.vue';
import HeaderActions from './header-actions.vue';
import HeaderSearchInput from './header-search-input.vue';

const routes = [
  { path: '/', label: 'Home', icon: '' },
  { path: '/trending', label: 'Tendências', icon: '' },
  { path: '/favorites', label: 'Meus Favoritos', icon: '' },
]

</script>

<template>
  <div class="flex flex-row items-center gap-3">
    <!-- rotas de navegação visiveis apenas para desktop -->
    <div class="hidden md:flex flex-row items-center justify-start gap-3">
      <AppRouteButton v-for="route in routes" :key="route.label" :route="route" />
      <AppRouteButton key="Pesquisar" :route="{ path: '/search', label: 'Pesquisar', icon: '' }"
        class="hidden md:block lg:hidden" />

      <!-- Desktop: input de pesquisa sempre visível para desktop -->
      <div class="hidden lg:block">
        <HeaderSearchInput />
      </div>
    </div>

    <HeaderActions />
  </div>
</template>
