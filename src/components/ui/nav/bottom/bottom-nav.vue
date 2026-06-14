<script setup lang="ts">
import NavBtn from './nav-btn.vue';


const routes = [
  { label: 'Home', icon: 'pi-home', path: '/' },
  { label: 'Novidades', icon: 'pi-bell', path: '/search' },
  { label: 'Favoritos', icon: 'pi-heart', path: '/search' },
  { label: 'Biblioteca', icon: 'pi-cog', path: '/' },
  { label: 'Pesquisar', icon: 'pi-search', path: '/search' },
]

</script>


<template>
  <div class="fixed md:hidden z-50 bottom-0 left-0 w-full h-[4rem] flex flex-row items-center justify-center ">
    <div
      class="border-t-1 border-secondary/10 shadow-sm bg-quinary/99 px-3 flex flex-row justify-between items-center w-full h-full">
      <NavBtn v-for="route in routes" :key="route.label" :props="route" />
    </div>
  </div>
</template>
