<script setup lang="ts">
import GameDescriptionSection from './game-description-section.vue';

const gameAbout = {
  label: '',
  background_image: '/images/background.jpg',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt quos, natus tenetur illo fugit corrupti placeat molestiae aperiam dolor? Soluta rerum incidunt quia reprehenderit consequuntur repellendus, voluptate similique nulla?",
}
</script>

<template>
  <div class="
    px-6
    pt-[7rem] lg:pt-[4.5rem]
    flex flex-col
    w-full
  ">
    <div class="">
      <h4 class="text-lg font-semibold"> Sobre o jogo </h4>
    </div>

    <div class="flex flex-col gap-4">
      <GameDescriptionSection :label="gameAbout?.label" :background_image="gameAbout?.background_image"
        :description="gameAbout?.description" />
    </div>
  </div>
</template>
