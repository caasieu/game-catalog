<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const search = ref('')
function updateRoute(value: string) {
  router.replace({
    path: '/search',
    query: {
      q: value,
    },
  })
}

watch(search, (value) => {
  updateRoute(value)
})

function handleSearch() {
  updateRoute(search.value)
}
</script>

<template>
  <div
    class="relative bg-surface border-1 border-border rounded-sm px-3 h-[2rem] w-full lg:min-w-[20rem] flex flex-row items-center gap-3">
    <span>
      <i class="pi pi-search" style="font-size: 10pt;"></i>
    </span>

    <input v-model="search" @keyup.enter="handleSearch" class="absolute left-0 top-0 w-full h-full pl-10 pr-3  "
      placeholder="Pesquisar jogos..." />
  </div>
</template>
