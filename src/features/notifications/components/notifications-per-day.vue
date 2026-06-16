<script setup lang="ts">
import type { NotificationType } from '../types/notification-type.ts';
import NotificationsCard from './notifications-card.vue';

withDefaults(
  defineProps<{
    avatarClass?: string,
    cardAvatarClass?: string,
    day?: string,
    resultsList?: Array<NotificationType>
  }>(),
  {
    avatarClass: '',
    cardAvatarClass: '',
  }
)
</script>

<template>
  <div class="flex flex-col w-full ">
    <div class="bg-surface h-[2rem] flex items-center" :class="avatarClass">
      <span> {{ day }} </span>
    </div>


    <div class="flex flex-col w-full">
      <NotificationsCard v-for="notification in resultsList" :key="notification.id" :notificationProps="notification"
        :avatarClass="cardAvatarClass" />
    </div>
  </div>
</template>
