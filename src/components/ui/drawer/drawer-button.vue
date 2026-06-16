<script setup lang="ts">
import { ref } from "vue";

import DrawerContainer from "./drawer-container.vue";

const visible = ref(false);
</script>

<template>
  <div class="card flex justify-center md:hidden ">
    <button @click="visible = true" class="border-1 flex flex-row items-center justify-center gap-2 h-[2rem] p-2 ">
      <i class="pi pi-bars" style="font-size: 12pt;"></i>
    </button>

    <DrawerContainer v-model:visible="visible" />
  </div>
</template>
