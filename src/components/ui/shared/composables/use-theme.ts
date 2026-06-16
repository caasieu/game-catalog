import { ref, watch } from 'vue'

export const isDark = ref(localStorage.getItem('theme') === 'dark')

function applyTheme() {
  document.documentElement.classList.toggle('dark', isDark.value)

  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

watch(isDark, applyTheme, { immediate: true })

export function useTheme() {
  return {
    isDark,
  }
}
