<script setup lang="ts">
import GameCategoriesGrid from './game-categories-grid.vue';

defineProps<{ label: string, showPagination?: boolean }>();
</script>

<template>
  <div class="flex flex-col gap-2 ">
    <div class="flex flex-row justify-between items-center w-full">
      <div class="font-semibold text-sm">
        <h4> {{ label }} </h4>
      </div>

      <div v-if="showPagination" class="flex flex-row gap-2 items-center justify-end">
        <div class="bg-surface border-1 border-border rounded-sm text-xs">
          <button class="w-[2rem] h-[2rem]">
            <i class="pi pi-chevron-left" style="font-size: 8pt;"></i>
          </button>
        </div>

        <div class="bg-surface border-1 border-border rounded-sm text-xs">
          <button class="w-[2rem] h-[2rem]">
            <i class="pi pi-chevron-right" style="font-size: 8pt;"></i>
          </button>
        </div>
      </div>
    </div>

    <GameCategoriesGrid />
  </div>
</template>
