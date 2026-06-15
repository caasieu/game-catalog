<script setup lang="ts">
import { Drawer } from "primevue";
import { ref } from "vue";

import PremiumBtn from "./premium-btn.vue";
import DrawCategories from "./draw-categories.vue";
import UserCardDrawer from "../user-card-drawer.vue";
import LogoutButton from "../LogoutButton.vue";

const visible = ref(false);


const categories = [
  {
    label: 'Principais',
    routes: [
      { label: 'Home', icon: 'pi-home', path: '/' },
      { label: 'Novidades', icon: 'pi-lightbulb', path: '/news' },
      { label: 'Pesquisar', icon: 'pi-search', path: '/search' },
    ]
  },
  {
    label: 'Biblioteca',
    routes: [
      { label: 'Favoritos', icon: 'pi-heart', path: '/favorites' },
      { label: 'Progress', icon: 'pi-stopwatch', path: '/progress' },
    ]
  },
]


</script>

<template>
  <div class="card flex justify-center md:hidden ">
    <button @click="visible = true" class="border-1 flex flex-row items-center justify-center gap-2 h-[2rem] p-2 ">
      <i class="pi pi-bars" style="font-size: 12pt;"></i>
    </button>

    <Drawer v-model:visible="visible" position="right">
      <template #container>
        <div class="w-full px-6">

          <div class="flex flex-row justify-between items-center h-[6rem] border-b-1">
            <UserCardDrawer />

            <div>
              <i class="pi pi-chevron-right"></i>
            </div>
          </div>

          <div class="flex flex-col gap-2 ">
            <DrawCategories v-for="category in categories" :key="category.label" :category="category"
              @close="visible = false" />


            <div class="flex flex-col gap-3 text-lg py-4">
              <div class="w-full h-[3rem]">
                <PremiumBtn />
              </div>

              <div class="w-full h-[3rem]">
                <LogoutButton />
              </div>
            </div>
          </div>
        </div>
      </template>

    </Drawer>
  </div>
</template>
