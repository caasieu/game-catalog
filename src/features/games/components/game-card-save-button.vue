<script setup lang="ts">
import { computed, ref } from 'vue';
import type { GameSavedType } from '../types/game-actions-type';

const props = defineProps<{
  gameSavedProps?: GameSavedType
}>()

const isSaved = ref(props.gameSavedProps?.saved ?? false)

// computa qual label e ícone usar baseado no valor de 'isSaved'
const savedState = computed(() => ({
  label: isSaved.value
    ? 'Remover da biblioteca'
    : 'Salvar na biblioteca',

  icon: isSaved.value
    ? 'pi-bookmark-fill'
    : 'pi-bookmark'
}))

// acções
function toggleSaved() { isSaved.value = !isSaved.value; }

</script>

<template>
  <button @click="toggleSaved"
    class="flex flex-row items-center justify-center py-2 gap-2 w-full border-1 border-red-300">
    <i class="pi" :class="savedState.icon" style="font-size: 8pt;"></i>
    <span>{{ savedState.label }}</span>
  </button>
</template>
