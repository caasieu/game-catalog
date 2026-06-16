<script lang="ts" setup>
interface SelectType {
  id: number;
  type: string;
  label: string;
  options: Array<string>;
}

defineProps<{ select: SelectType }>();
</script>

<template>
  <div class="flex flex-row items-center gap-1 text-xs">
    <span> {{ select.label }} </span>
    <select type="select" class="border-1 px-1">
      <option value="" disabled>Escolha</option>
      <option v-for="option in select.options" :key="option" :value="option"> {{ option }} </option>
    </select>
  </div>
</template>
