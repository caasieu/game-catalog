<script setup lang="ts">
import NotificationsCard from './notifications-card.vue';

withDefaults(
  defineProps<{
    avatarClass?: string,
    cardAvatarClass?: string,
  }>(),
  {
    avatarClass: '',
    cardAvatarClass: ''
  }
)
</script>

<template>
  <div class="flex flex-col w-full ">
    <div class="bg-gray-200 h-[2rem] flex items-center" :class="avatarClass">
      <span> Hoje </span>
    </div>


    <div class="flex flex-col w-full">
      <NotificationsCard v-for="value in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="value" :avatarClass="cardAvatarClass" />
    </div>
  </div>
</template>
