<script setup lang="ts">

</script>

<template>
  <main>
    <div class="flex flex-col sm:flex-row sm:justify-between sm:absolute left-0 top-0 w-full h-full">
      <div class="flex flex-col items-center w-full p-6 ">
        <RouterView />
      </div>

      <div class="hidden md:block w-full h-full bg-red-300">
        <span> </span>
      </div>
    </div>
  </main>
</template>
