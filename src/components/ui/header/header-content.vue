<script setup lang="ts">
import { useRoute } from 'vue-router';
import AppRouteButton from '../shared/app-route-button.vue';
import HeaderActions from './header-actions.vue';
import HeaderSearchInput from './header-search-input.vue';

const currentRoute = useRoute()
const routes = [
  { path: '/', label: 'Home', icon: '' },
  { path: '/trending', label: 'Tendências', icon: '' },
  { path: '/favorites', label: 'Meus Favoritos', icon: '' },
]

</script>

<template>
  <div class="flex flex-row items-center gap-2">
    <!-- rotas de navegação visiveis apenas para desktop -->
    <div class="hidden md:flex flex-row items-center justify-end gap-2 h-[2rem] ">
      <div v-for="route in routes" class="p-2 rounded-sm" :class="{
        'bg-primary text-white': currentRoute.path === route.path
      }" :key="route.label">
        <AppRouteButton :route="route" />
      </div>

      <div class="hidden md:block lg:hidden p-2 rounded-sm" :class="{
        'bg-primary text-white': currentRoute.path === '/search'
      }">
        <AppRouteButton key="Pesquisar" :route="{ path: '/search', label: 'Pesquisar', icon: '' }" />
      </div>

      <!-- Desktop: input de pesquisa sempre visível para desktop -->
      <div class="hidden lg:block">
        <HeaderSearchInput />
      </div>
    </div>

    <HeaderActions />
  </div>
</template>
