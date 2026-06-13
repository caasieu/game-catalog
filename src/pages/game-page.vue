<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
console.log("game id: ", route.params.id);

</script>

<template>
  <div>
    <span> Game Page </span>
  </div>
</template>
