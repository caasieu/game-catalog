<script setup lang="ts">
import { computed, ref } from 'vue';
import type { GameFavoriteType } from '../types/game-actions-type';

const props = defineProps<{
  gameFavoriteProps?: GameFavoriteType
}>()

const isFavorite = ref(props.gameFavoriteProps?.favorite ?? false)

// computa qual label e ícone usar baseado no valor de 'isFavorite'
const favoriteState = computed(() => ({
  label: isFavorite.value
    ? 'Remover dos favoritos'
    : 'Adicionar aos favoritos',

  icon: isFavorite.value
    ? 'pi-heart-fill'
    : 'pi-heart'
}))

// acções
function toggleFavorite() { isFavorite.value = !isFavorite.value; }

</script>

<template>
  <button @click="toggleFavorite"
    class="flex flex-row items-center justify-center py-2 gap-2 w-full text-white bg-primary rounded-sm">
    <i class="pi" :class="favoriteState.icon" style="font-size: 10pt;"></i>
    <span>{{ favoriteState.label }}</span>
  </button>
</template>
