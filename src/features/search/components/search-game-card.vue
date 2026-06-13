<script setup lang="ts">
interface GameType {
  id: number;
  name: string;
}

defineProps<{ game: GameType }>();
</script>

<template>
  <div
    class="relative p-2 md:p-2.5 min-h-65 md:min-h-80 lg:min-h-95 bg-primary rounded-md flex flex-col overflow-hidden">

    <div class="relative w-full h-[80%] md-[65%] flex flex-col">
      <div class="relative flex-1 w-full h-full overflow-hidden">

        <div class="absolute top-0 left-1 z-10">
          <span class="text-white bg-secondary/50 px-4 py-0.5 rounded-md text-xs"> mini info </span>
        </div>

        <div class="relative w-full h-full bg-quaternary/50 rounded-md overflow-hidden">
          <img class="absolute inset-0 w-full h-full object-cover" alt="user header"
            src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" />
        </div>
      </div>
    </div>

    <!-- CARD LOWER BODY CONTENT SECTION -->
    <div class="flex-1 flex flex-col gap-2">
      <div class="border-b-1 border-secondary/10 py-2">
        <span class="font-semibold text-black text-sm md:text-md"> {{ game.name }} </span>
      </div>

      <div class="flex flex-col gap-2 text-xs">
        <button class="w-full bg-quaternary py-2 px-4 rounded-sm text-quinary">
          Ver Detalhes
        </button>

        <button class="hidden md:block w-full bg-secondary text-quinary py-2 px-4 rounded-sm text-quinary">
          Adicionar aos Favoritos
        </button>
      </div>
    </div>
  </div>
</template>
