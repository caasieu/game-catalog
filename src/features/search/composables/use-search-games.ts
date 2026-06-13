import { ref } from 'vue'

import { searchGames } from '../services/rawg-search.service'

import type { Game } from '../types/search.types'

export function useSearchGames() {
  const games = ref<Game[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const search = async (query: string, page: number = 1) => {
    if (!query.trim()) {
      games.value = []
      return
    }

    loading.value = true
    error.value = null

    try {
      const response = await searchGames(query, page)

      games.value = response.results
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  return {
    games,
    loading,
    error,
    search,
  }
}
