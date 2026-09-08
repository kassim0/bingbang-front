export interface Game{
  id: number;
  slug?: string;
  name: string;
  releaseDate: string;
  backgroundImage: string;
  rawgId: string;
}

export interface GamesList {
  id: number;
  name: string;
  position : number;
  games : GamesListEntry[];
}

export interface GamesListEntry {
  id: number;
  game : Game;
  gamesList : GamesList;
  position : number;
}

export interface UpdateGamesList{
  gamesListId : number;
  newGameId : number[] | null;
  removeGameId : number [] | null;
  newName : string | null;
}
