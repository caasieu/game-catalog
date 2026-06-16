<script lang="ts" setup>
import type { SelectType } from '../types/select-type';

defineProps<{ select: SelectType }>();
</script>

<template>
  <div class="flex flex-row items-center gap-1 text-xs">
    <span> {{ select.label }} </span>
    <select type="select" class="bg-surface border-1 border-border rounded-sm px-1">
      <option value="" disabled>Escolha</option>
      <option v-for="option in select.options" :key="option" :value="option"> {{ option }} </option>
    </select>
  </div>
</template>
