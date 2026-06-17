import axios from 'axios'
import type { RawgGameType, RawgSearchResponse } from '../types/rawg-types'

const api = axios.create({
  baseURL: 'https://api.rawg.io/api',
})

export async function getTrendingGame() {
  const { data } = await api.get('/games', {
    params: {
      key: import.meta.env.VITE_RAWG_API_KEY,
      dates: '2020-01-01,2022-12-31',
      ordering: '-metacritic',
      page_size: 1,
    },
  })

  return data.results[0]
}

export async function getTrendingGameForHeroSection() {
  const { data } = await api.get('/games', {
    params: {
      key: import.meta.env.VITE_RAWG_API_KEY,
      dates: '2025-01-01,2026-12-31',
      ordering: '-metacritic',
      page_size: 1,
    },
  })

  return data.results[0]
}

export async function getTrendingGames(page = 1, pageSize = 12) {
  const { data } = await api.get('/games', {
    params: {
      key: import.meta.env.VITE_RAWG_API_KEY,
      ordering: '-added',
      page,
      page_size: pageSize,
    },
  })

  return data
}

export async function searchGames(query: string): Promise<RawgSearchResponse> {
  const { data } = await api.get<RawgSearchResponse>('/games', {
    params: {
      key: import.meta.env.VITE_RAWG_API_KEY,
      search: query,
      page_size: 20,
    },
  })

  return data
}

export async function getGameDetails(id: string | number) {
  const { data } = await api.get<RawgGameType>(`/games/${id}`, {
    params: {
      key: import.meta.env.VITE_RAWG_API_KEY,
    },
  })

  return data
}
