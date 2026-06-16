<script setup lang="ts">
import ToggleSwitch from 'primevue/toggleswitch';
import { useTheme } from './composables/use-theme';


const { isDark } = useTheme()

</script>


<template>
  <div class="card flex justify-between items-center">
    <span>
      {{ isDark ? 'Dark Mode' : 'Light Mode' }}
    </span>

    <ToggleSwitch v-model="isDark" />
  </div>
</template>
