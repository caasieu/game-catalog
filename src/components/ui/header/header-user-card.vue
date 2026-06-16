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
    <template #container>
      <div @click.stop class="flex flex-col w-[200px] text-sm">
        <div class="flex items-center shadow-sm h-[3rem] px-3 bg-card border-b-1 border-border">
          <h3 class="font-semibold">
            Definições do Usuário
          </h3>
        </div>

        <div class="flex flex-col gap-3 pb-3">
          <div class="flex items-center border-border border-b-1  px-3 h-[3rem]">
            <AppThemeChangeButton />
          </div>

          <div class=" px-3 ">
            <AppLogoutButton :showIcon="false" />
          </div>
        </div>
      </div>
    </template>
  </Popover>
</template>
