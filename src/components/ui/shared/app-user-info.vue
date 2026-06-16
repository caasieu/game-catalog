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
  <div class="flex flex-row items-center gap-2 h-full">
    <div :class="['relative', avatarClass]">
      <img class="absolute inset-0 w-full h-full object-cover" alt="user header"
        src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
    </div>

    <div class="flex flex-col text-sm">
      <span class="font-semibold"> Walter White </span>
      <span> @walter </span>
    </div>
  </div>
</template>
