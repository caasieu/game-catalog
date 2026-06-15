<script setup lang="ts">
import { ref } from 'vue'
import { useBreakpoints } from '@vueuse/core'

import { Popover } from 'primevue';

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
  }
}


</script>

<template>
  <div @click="handleNotifications" class="flex flex-row items-center gap-2 h-full">
    <div class="relative h-[2rem] w-[2rem]">
      <img class="absolute inset-0 w-full h-full object-cover" alt="user header"
        src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
    </div>

    <div class="flex flex-col text-sm">
      <span class="font-semibold"> Walter White </span>
      <span> @walter </span>
    </div>
  </div>


  <Popover ref="popover">
    <div class="flex flex-col gap-3 min-w-[150px]">
      <h3 class="font-semibold">
        Notificações
      </h3>

      <div class="border-b pb-2">
        Visitar Perfil
      </div>

      <div>
        Terminar Sessão
      </div>
    </div>
  </Popover>
</template>
