<script setup lang="ts">

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBreakpoints } from '@vueuse/core'

import { Popover } from 'primevue';
import NotificationsPerDay from '@/features/notifications/components/notifications-per-day.vue';
import ScrollPanel from 'primevue/scrollpanel';
import { notificationsList } from '@/features/notifications/composables/notifications-list';


const router = useRouter()

const popover = ref()

const breakpoints = useBreakpoints({
  mobile: 0,
  tablet: 768,
  desktop: 1024,
})

const isDesktop = breakpoints.greaterOrEqual('desktop')

function handleNotifications(event: MouseEvent) {
  if (isDesktop.value) {
    popover.value.toggle(event)
  } else {
    router.push('/notifications')
  }
}

</script>

<template>
  <div @click="handleNotifications"
    class="relative bg-surface border-1 border-border flex flex-row items-center justify-center h-[2rem] rounded-sm">
    <button class="h-[2rem] w-[2rem]">
      <i class="pi pi-bell" style="font-size: 10pt;"></i>
    </button>

    <!-- notification count -->
    <div
      class="absolute flex items-center justify-center -right-1 -top-1 bg-primary text-white text-[6pt] h-3 w-3 p-2 rounded-full">
      <span> 9+ </span>
    </div>
  </div>

  <Popover ref="popover">
    <template #container>
      <div @click.stop>
        <div class="flex items-center shadow-sm h-[3rem] px-3 bg-card border-b-1 border-border">
          <h3 class="font-semibold">
            Notificações
          </h3>
        </div>

        <div class="card">
          <ScrollPanel style="width: 300px; height: 350px" :dt="{
            bar: {
              //background: 'black',
            },

          }">

            <NotificationsPerDay v-for="notification in notificationsList" :key="notification.day"
              :day="notification.day" :resultsList="notification.results" avatarClass="px-3" cardAvatarClass="px-3" />
          </ScrollPanel>
        </div>
      </div>
    </template>
  </Popover>
</template>
