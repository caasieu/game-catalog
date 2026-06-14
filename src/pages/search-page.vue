<script setup lang="ts">

import SearchResults from '@/features/search/components/search-results.vue';
import type { Game } from '@/features/search/types/search.types';
import { ref } from 'vue';


const games = ref<Game[]>([]);


</script>

<template>
  <div>
    <SearchResults :games="games" />
  </div>
</template>
