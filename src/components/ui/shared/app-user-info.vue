<script setup lang="ts">
withDefaults(
  defineProps<{
    avatarClass?: string
  }>(),
  {
    avatarClass: 'h-[2rem] w-[2rem]'
  }
)
</script>

<template>
  <div class="flex flex-row items-center gap-2 h-full ">
    <div :class="['relative', avatarClass]" class="bg-card rounded-sm overflow-hidden">
      <img class="absolute inset-0 w-full h-full object-cover" alt="user header"
        src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
    </div>

    <div class="flex flex-col">
      <span class="font-bold"> Walter White </span>
      <span class=""> @walter </span>
    </div>
  </div>
</template>
