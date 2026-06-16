<script setup lang="ts">
</script>

<template>
  <div class="
    relative
    flex flex-col
    md:flex-row
    items-center
    justify-between
    gap-8

    w-full
    min-h-[35rem]
  ">
    <div
      class="absolute left-0 top-0 z-10 text-white h-full w-full px-6 pt-20 pb-5 flex flex-col justify-center items-center md:flex-row md:items-center md:justify-between">
      <div class="w-full lg:w-[55%]">
        <h1 class="text-2xl md:text-4xl font-bold">
          Escolha os seus jogos favoritos,
          complete missões diárias, ganhe tokens
          e desbloqueie ganhos exclusivos.
        </h1>
      </div>

      <div class="relative w-full h-full lg:w-[45%] lg:h-[90%] ">
        <img class="absolute inset-0 w-full h-full object-cover" alt="user header" src="/images/characters.webp" />
      </div>
    </div>

    <div class="absolute w-full h-full z-0 ">
      <!-- <img src="..." class="max-w-full md:max-w-md" />-->
      <img class="absolute inset-0 w-full h-full object-cover " alt="user header" src="/images/background.jpg" />

      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    </div>
  </div>
</template>
