export interface GameType {
  id: string | number
  name: string
}

export interface GameCardType extends GameType {
  genres: Array<string>
}

export interface GameDescriptionType extends GameType {
  description: string
}
