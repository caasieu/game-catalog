<script setup lang="ts">
import SearchInput from './search-input.vue';

</script>


<template>
  <nav class="hidden md:flex flex-row items-center justify-start gap-3">
    <RouterLink to="/">
      <span> Home </span>
    </RouterLink>

    <RouterLink to="/">
      <span> Novidades </span>
    </RouterLink>

    <RouterLink to="/">
      <span> Favoritos </span>
    </RouterLink>

    <RouterLink to="/">
      <span> Biblioteca </span>
    </RouterLink>


    <RouterLink to="/" class="hidden md:block lg:hidden">
      <span> Pesquisar </span>
    </RouterLink>

    <!-- Desktop: always visible -->
    <div class="hidden lg:block">
      <SearchInput />
    </div>
  </nav>
</template>
