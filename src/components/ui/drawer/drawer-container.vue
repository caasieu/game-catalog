<script setup lang="ts">
import { Drawer } from "primevue";


import DrawerCategories from "./drawer-categories.vue";
import AppUserInfo from "../shared/app-user-info.vue";
import AppLogoutButton from "../shared/app-logout-button.vue";
import AppPremiumButton from "../shared/app-premium-button.vue";
import AppThemeChangeButton from "../shared/app-theme-change-button.vue";


const props = defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  'update:visible': [value: boolean]
}>()

function closeDrawer() {
  emit('update:visible', false)
}

const categories = [
  {
    label: 'Principais',
    routes: [
      { label: 'Home', icon: 'pi-home', path: '/' },
      { label: 'Tendências', icon: 'pi-lightbulb', path: '/trending' },
      { label: 'Pesquisar', icon: 'pi-search', path: '/search' },
    ]
  },
  {
    label: 'Biblioteca',
    routes: [
      { label: 'Favoritos', icon: 'pi-heart', path: '/favorites' },
    ]
  },
]
</script>

<template>
  <Drawer :visible="props.visible" @update:visible="emit('update:visible', $event)" position="right">
    <template #container>
      <div class="w-full px-6">
        <div class="flex flex-row justify-between items-center h-[6rem] border-b-1">
          <AppUserInfo avatarClass="h-[4rem] w-[4rem]" />

          <!-- Botão "X" para fechar drawer, chama funcão closeDrawer e emit o evento -->
          <div @click="closeDrawer">
            <i class="pi pi-times"></i>
          </div>
        </div>

        <div class="flex flex-col gap-2 ">
          <DrawerCategories v-for="category in categories" :key="category.label" :category="category"
            @click="closeDrawer" />

          <AppThemeChangeButton />

          <div class="flex flex-col gap-3 text-lg py-4">
            <div class="w-full h-[3rem]">
              <AppPremiumButton />
            </div>

            <div class="w-full h-[3rem]">
              <AppLogoutButton :showIcon="false" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </Drawer>
</template>
