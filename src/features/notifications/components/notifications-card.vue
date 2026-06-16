<script setup lang="ts">
withDefaults(
  defineProps<{
    avatarClass?: string
  }>(),
  {
    avatarClass: 'px-1.5 sm:px-3'
  }
)
</script>

<template>
  <div class="w-full " :class="avatarClass">
    <div class="flex flex-row items-start justify-start gap-2 py-2 border-t-1 " :class="avatarClass">

      <div class="flex flex-row items-start justify-center h-full">
        <div class="flex items-center justify-center h-[1.5rem] w-[1.5rem] border-1 p-2">
          <span> N </span>
        </div>
      </div>

      <div class="flex flex-col justify-start w-full h-full ">
        <div class="flex flex-row items-start justify-between text-sm">
          <div> <span class="font-semibold"> name of the notification </span> </div>

          <div> <span> 5h atrás </span> </div>
        </div>

        <div class="text-sm">
          <span> description of the notification </span>
        </div>
      </div>
    </div>
  </div>
</template>
