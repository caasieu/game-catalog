<script setup lang="ts">
import { notificationsList } from '../composables/notifications-list.ts';
import NotificationsPerDay from './notifications-per-day.vue';


</script>

<template>
  <div class="w-full pt-15">
    <div class="flex items-center px-6 h-[3rem] border-b-1 border-border">
      <h2 class="font-semibold"> Notificações </h2>
    </div>

    <NotificationsPerDay v-for="notification in notificationsList" :key="notification.day" :day="notification.day"
      :resultsList="notification.results" avatarClass="px-6" cardAvatarClass="px-6" />
  </div>
</template>
