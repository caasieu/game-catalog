<script setup lang="ts">
import ToggleSwitch from 'primevue/toggleswitch';
import { useTheme } from './composables/use-theme';


const { isDark } = useTheme()

</script>


<template>
  <div class="card flex justify-between items-center w-full">
    <span>
      {{ isDark ? 'Dark Mode' : 'Light Mode' }}
    </span>

    <ToggleSwitch v-model="isDark" />
  </div>
</template>

<style>
.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
  background-color: var(--color-primary) !important;
}
</style>
