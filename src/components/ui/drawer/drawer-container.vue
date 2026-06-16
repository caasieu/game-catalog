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
      <div class="w-full bg-surface text-xs" @click.stop>
        <div class="flex flex-row justify-between items-center h-[6rem] border-b-1 border-border text-xs px-6 ">
          <AppUserInfo avatarClass="h-[3rem] w-[3rem] " />

          <!-- Botão "X" para fechar drawer, chama funcão closeDrawer e emit o evento -->
          <div @click="closeDrawer">
            <i class="pi pi-times" style="font-size: 12pt;"></i>
          </div>
        </div>



        <div class="card ">
          <div class="overflow-y-auto" style="height: calc(100vh - 6rem)">
            <div class="flex flex-col gap-2 px-6 pb-40">
              <DrawerCategories @navigate="closeDrawer" v-for="category in categories" :key="category.label"
                :category="category" />

              <div class="flex  items-center w-full h-[3rem]">
                <AppThemeChangeButton />
              </div>

              <div class="flex flex-col gap-3 text-xs py-4">
                <div class="w-full h-[3rem]">
                  <AppPremiumButton />
                </div>

                <div class="w-full h-[3rem]">
                  <AppLogoutButton :showIcon="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Drawer>
</template>
