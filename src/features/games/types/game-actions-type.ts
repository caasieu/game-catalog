export interface GameActionsType {
  id: string | number
}

export interface GameFavoriteType extends GameActionsType {
  favorite: boolean
}

export interface GameSavedType extends GameActionsType {
  saved: boolean
}
