<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import HeaderActions from './header-actions.vue';
import HeaderNav from './header-nav.vue';
import SearchInput from './search-input.vue';


const route = useRoute()

const isSearchPage = computed(() => route.path === '/search')


</script>


<template>
  <header class="fixed top-0 left-0 z-50 flex flex-col w-full min-h-[2rem] gap-3 px-3 py-3 shadow-xs bg-white/98">
    <div class="flex flex-row items-center justify-between w-full ">
      <div>
        <h4> Gameya </h4>
      </div>

      <div class="flex flex-row items-center gap-3">

        <HeaderNav />

        <HeaderActions />
      </div>

    </div>


    <!-- Mobile: only on search page -->
    <div v-if="isSearchPage" class="block lg:hidden">
      <SearchInput />
    </div>
  </header>
</template>
