<script setup lang="ts">
import { notificationsList } from '../composables/notifications-list.ts';
import NotificationsPerDay from './notifications-per-day.vue';


</script>

<template>
  <div class="w-full pt-20">
    <div class="px-6 h-[2rem]">
      <h2 class="font-semibold"> Notificações </h2>
    </div>

    <NotificationsPerDay v-for="notification in notificationsList" :key="notification.day" :day="notification.day"
      :resultsList="notification.results" avatarClass="px-6" cardAvatarClass="px-6" />
  </div>
</template>
