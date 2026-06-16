<script setup lang="ts">
import { ref } from 'vue'
import { useBreakpoints } from '@vueuse/core'

import { Popover } from 'primevue';
import AppUserInfo from '../shared/app-user-info.vue';
import AppLogoutButton from '../shared/app-logout-button.vue';
import AppThemeChangeButton from '../shared/app-theme-change-button.vue';

const popover = ref()

const breakpoints = useBreakpoints({
  mobile: 0,
  tablet: 768,
  desktop: 1024,
})

const isDesktop = breakpoints.greaterOrEqual('desktop')

function handleSettings(event: MouseEvent) {
  if (isDesktop.value) {
    popover.value.toggle(event)
  }
}


</script>

<template>
  <AppUserInfo @click="handleSettings" />


  <Popover ref="popover">
    <div class="flex flex-col gap-3 min-w-[150px]">
      <h3 class="font-semibold">
        Definições do Usuário
      </h3>

      <div class="border-b pb-2">
        <AppThemeChangeButton />
      </div>

      <AppLogoutButton :showIcon="false" />
    </div>
  </Popover>
</template>
