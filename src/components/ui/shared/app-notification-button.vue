<script setup lang="ts">

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBreakpoints } from '@vueuse/core'

import { Popover } from 'primevue';
import NotificationsPerDay from '@/features/notifications/components/notifications-per-day.vue';
import ScrollPanel from 'primevue/scrollpanel';


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
  <div @click="handleNotifications" class="relative border-1 flex flex-row items-center justify-center h-[2rem] p-2 ">
    <button>
      <i class="pi pi-bell" style="font-size: 12pt;"></i>
    </button>

    <!-- notification count -->
    <div class="absolute -right-2 -top-2 bg-red-300 border-1 text-[8pt] ">
      <span> 99+ </span>
    </div>
  </div>

  <Popover ref="popover">
    <template #container>
      <div @click.stop>
        <div class="flex items-center shadow-sm border-b-1 h-[3rem] px-3">
          <h3 class="font-semibold">
            Notificações
          </h3>
        </div>

        <div class="card">
          <ScrollPanel style="width: 300px; height: 350px" :dt="{
            bar: {
              background: 'black',
            }
          }">
            <NotificationsPerDay avatarClass="px-3" cardAvatarClass="px-1.5 " />

            <NotificationsPerDay avatarClass="px-3" cardAvatarClass="px-1.5 " />
          </ScrollPanel>
        </div>
      </div>
    </template>
  </Popover>
</template>
