import type { SearchGamesResponse } from '../types/search.types'

const API_KEY = import.meta.env.VITE_RAWG_API_KEY

const BASE_URL = 'https://api.rawg.io/api'

export async function searchGames(query: string, page: number = 1): Promise<SearchGamesResponse> {
  const url =
    `${BASE_URL}/games` +
    `?key=${API_KEY}` +
    `&search=${encodeURIComponent(query)}` +
    `&page=${page}`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to search games')
  }

  return response.json()
}
