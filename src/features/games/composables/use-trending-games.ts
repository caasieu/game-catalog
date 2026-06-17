import { ref } from 'vue'

import { getTrendingGames } from '../services/rawg-service'

import type { RawgGameType, RawgGenreType } from '../types/rawg-types'
import type { GameCardType } from '../types/game-type'

function mapGame(game: RawgGameType): GameCardType {
  return {
    id: game.id,
    name: game.name,
    genres: game.genres.map((g: RawgGenreType) => g.name),
    image: game.background_image,
    rating: game.rating,
  }
}

export function useTrendingGames() {
  const page = ref(1)
  const games = ref<GameCardType[]>([])
  const loading = ref(false)

  async function loadGames() {
    loading.value = true

    try {
      const data = await getTrendingGames(page.value)

      games.value = data.results.map(mapGame)
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  async function nextPage() {
    page.value++
    await loadGames()
  }

  async function prevPage() {
    if (page.value <= 1) return

    page.value--
    await loadGames()
  }

  return {
    page,
    games,
    loading,
    loadGames,
    nextPage,
    prevPage,
  }
}
