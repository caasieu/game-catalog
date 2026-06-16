<script setup lang="ts">
import type { NotificationType } from '../types/notification-type';

withDefaults(
  defineProps<{
    avatarClass?: string,
    notificationProps?: NotificationType
  }>(),
  {
    avatarClass: ''
  }
)

</script>

<template>
  <div class="w-full text-xs">
    <div class="flex flex-row items-start justify-start gap-2 border-border border-b-1 py-4 bg-card min-h-[5rem]"
      :class="avatarClass">

      <div class="flex flex-row items-start justify-center h-full">
        <div
          class="flex items-center justify-center h-[1.5rem] w-[1.5rem] bg-surface border-border border-1 rounded-full p-4">
          <i class="pi" :class="notificationProps?.icon" style="font-size: 10pt;"> </i>
        </div>
      </div>

      <div class="flex flex-col justify-start w-full h-full gap-2">
        <div class="flex flex-row items-start justify-between ">
          <div> <span class="font-semibold"> {{ notificationProps?.name }} </span> </div>

          <div> <span> {{ notificationProps?.datetime }} </span> </div>
        </div>

        <div class="">
          <span> {{ notificationProps?.description }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
