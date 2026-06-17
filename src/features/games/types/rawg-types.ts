export interface RawgGenreType {
  id: number
  name: string
}

export interface RawgGameType {
  id: number
  name: string
  background_image: string
  rating: number
  genres: RawgGenreType[]
  description_raw: string
}

export interface RawgGamesResponse {
  results: RawgGameType[]
}

export interface SearchGamesParams {
  query?: string
  genres?: string
  page?: number
  pageSize?: number
}

export interface RawgSearchResponse {
  results: RawgGameType[]
}
