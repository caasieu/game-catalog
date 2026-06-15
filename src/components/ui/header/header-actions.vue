<script setup lang="ts">
import UserCard from '../user-card.vue';
import DrawerButton from './drawer-button.vue';
//import HeaderUserCard from './header-user-card.vue';
import NotificationBtn from './notification-btn.vue';
import PremiumBtn from './premium-btn.vue';

</script>

<template>
  <div class="flex flex-row items-center justify-end h-full gap-3">
    <!-- <HeaderUserCard /> -->
    <UserCard />

    <NotificationBtn />


    <div class="hidden sm:block h-[2rem]">
      <PremiumBtn />
    </div>

    <DrawerButton />
  </div>
</template>
