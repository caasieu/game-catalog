import { ref } from 'vue'
import { getGameDetails } from '../services/rawg-service'
import type { RawgGameType } from '../types/rawg-types'

export function useGameDetails() {
  const game = ref<RawgGameType | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function loadGame(id: string | number) {
    loading.value = true
    error.value = null

    try {
      const data = await getGameDetails(id)
      game.value = data
    } catch (err) {
      console.error(err)
      error.value = 'Failed to load game details'
    } finally {
      loading.value = false
    }
  }

  return {
    game,
    loading,
    error,
    loadGame,
  }
}
