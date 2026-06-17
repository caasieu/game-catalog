<script setup lang="ts">

</script>

<template>
  <main class="bg-background">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:absolute left-0 top-0 w-full h-full">
      <div class="flex flex-col items-center w-full py-6 px-10 sm:p-6 ">
        <RouterView />
      </div>

      <div class="hidden md:block w-full h-full bg-primary">

      </div>
    </div>
  </main>
</template>
