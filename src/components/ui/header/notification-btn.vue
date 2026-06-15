<script setup lang="ts">

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBreakpoints } from '@vueuse/core'

import { Popover } from 'primevue';


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
    <div class="flex flex-col gap-3 min-w-[300px]">
      <h3 class="font-semibold">
        Notificações
      </h3>

      <div class="border-b pb-2">
        New comment on your review
      </div>

      <div class="border-b pb-2">
        New game added to wishlist
      </div>

      <div>
        Friend is now online
      </div>
    </div>
  </Popover>
</template>
