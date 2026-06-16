<script setup lang="ts">
</script>

<template>
  <div class="
    relative w-full
    h-[15rem] sm:h-[20rem]
    sm:rounded-sm overflow-hidden
  ">
    <div class="absolute left-0 top-0 z-10 w-full h-full z-0 px-6 py-6 text-sm">

      <div class="
      flex flex-col
      justify-end sm:justify-center items-start
      gap-3 w-full h-full sm:w-[50%]
      ">

        <div class="text-white ">
          <h3>
            Bem-vindo à Gameia
          </h3>
        </div>

        <div class="text-white ">
          <h1 class="text-2xl md:text-4xl font-bold">
            Jogos em tendências e muito mais por onde explorar.
          </h1>
        </div>

        <div class="bg-background rounded-sm text-xs p-2 px-3 ">
          <button> Ver detalhes </button>
        </div>
      </div>

    </div>

    <div class="absolute left-0 top-0 z-0 w-full h-full ">
      <img class="absolute inset-0 w-full h-full object-cover " alt="user header" src="/images/background.jpg" />
    </div>
  </div>
</template>
