<script setup lang="ts">
import ToggleSwitch from 'primevue/toggleswitch';
import { ref } from 'vue';

const checked = ref(false);

</script>


<template>
  <div class="card flex justify-between items-center">
    <span>
      {{ checked ? 'Dark Mode' : 'Light Mode' }}
    </span>

    <ToggleSwitch v-model="checked" />
  </div>
</template>
