<script setup lang="ts">

interface NavButtonType {
  label: string,
  path: string,
  icon: string
};

defineProps<{ props: NavButtonType }>()

</script>


<template>
  <RouterLink :to="props.path">
    <div class="flex flex-col items-center justify-center gap-1 h-full min-w-[4rem]">
      <i class="pi" :class="props.icon" style="font-size: 1.2rem;"></i>
      <span class="text-[8pt]"> {{ props.label }} </span>
    </div>
  </RouterLink>
</template>
