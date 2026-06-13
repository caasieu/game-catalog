export interface Game {
  id: number
  name: string
  slug: string
  released: string
  rating: number
  background_image: string
}

export interface SearchGamesResponse {
  count: number
  next: string | null
  previous: string | null
  results: Game[]
}
