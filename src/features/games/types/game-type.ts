export interface GameType {
  id: number
  name: string
  image: string
  genres: string[]
  rating: number
}

export interface GameCardType extends GameType {
  genres: Array<string>
}

export interface GameDescriptionType extends GameType {
  description: string
}
