<script setup lang="ts">
import NotificationsPerDay from './notifications-per-day.vue';

</script>

<template>
  <div class="w-full pt-20">
    <div class="px-3 sm:px-6 h-[2rem]">
      <h2 class="font-semibold"> Notificações </h2>
    </div>

    <NotificationsPerDay avatarClass="px-3 sm:px-6" cardAvatarClass="px-1.5 sm:px-3" />

    <NotificationsPerDay avatarClass="px-3 sm:px-6" cardAvatarClass="px-1.5 sm:px-3" />
  </div>
</template>
