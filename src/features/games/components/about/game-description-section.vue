<script setup lang="ts">
import GameDescriptionImage from './game-description-image.vue';

defineProps<{
  label?: string,
  description?: string,
  background_image?: string
}>()
</script>

<template>
  <div class="flex flex-col gap-3">

    <div class="flex flex-col gap-1 text-sm">
      <div>
        <h5 class="font-semibold text-red-300"> {{ label }} </h5>
      </div>

      <div>
        <span> {{ description }} </span>
      </div>
    </div>


    <div>
      <GameDescriptionImage :background_image="background_image" />
    </div>
  </div>
</template>
