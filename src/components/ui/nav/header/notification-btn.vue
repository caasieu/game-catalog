<script setup lang="ts">
</script>

<template>
  <RouterLink to="/">
    <div class="relative border-1 flex flex-row items-center justify-center h-[2rem] p-2 ">
      <button>
        <i class="pi pi-bell" style="font-size: 12pt;"></i>
      </button>

      <!-- notification count -->
      <div class="absolute -right-2 -top-2 bg-red-300 border-1 text-[8pt] ">
        <span> 99+ </span>
      </div>
    </div>
  </RouterLink>
</template>
