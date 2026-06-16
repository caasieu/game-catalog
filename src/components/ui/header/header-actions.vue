<script setup lang="ts">
import DrawerButton from '../drawer/drawer-button.vue';
import HeaderUserCard from './header-user-card.vue';
import AppPremiumButton from '../shared/app-premium-button.vue';
import AppNotificationButton from '../shared/app-notification-button.vue';

</script>

<template>
  <div class="flex flex-row items-center justify-end h-full gap-3">
    <HeaderUserCard />

    <AppNotificationButton />

    <div class="hidden sm:block h-[2rem]">
      <AppPremiumButton />
    </div>

    <DrawerButton />
  </div>
</template>
