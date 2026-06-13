<script setup lang="ts">
import SearchBox from '@/features/search/components/search-box.vue';
import SearchResults from '@/features/search/components/search-results.vue';
import type { Game } from '@/features/search/types/search.types';
import { ref } from 'vue';


const games = ref<Game[]>([]);


</script>

<template>
  <div>
    <SearchBox />

    <SearchResults :games="games" />
  </div>
</template>
