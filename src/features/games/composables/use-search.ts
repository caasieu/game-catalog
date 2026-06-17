import { ref } from 'vue'
import { searchGames } from '../services/rawg-service'
import type { RawgGameType } from '../types/rawg-types'

export interface SearchGameType {
  id: number
  name: string
  genres: string[]
  image: string
  rating: number
}

function mapGame(game: RawgGameType): SearchGameType {
  return {
    id: game.id,
    name: game.name,
    genres: game.genres.map((genre) => genre.name),
    image: game.background_image,
    rating: game.rating,
  }
}

export function useGameSearch() {
  const games = ref<SearchGameType[]>([])
  const loading = ref(false)

  async function search(query: string) {
    if (!query) {
      games.value = []
      return
    }

    loading.value = true

    try {
      const data = await searchGames(query)
      games.value = data.results.map(mapGame)
    } finally {
      loading.value = false
    }
  }

  return {
    games,
    loading,
    search,
  }
}
