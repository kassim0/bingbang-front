export interface Game{
  id: number;
  slug?: string;
  name: string;
  releaseDate: string;
  backgroundImage: string;
  rawgId: string;
}

export interface ListGame {
  id: number;
  listName: string;
  listOrder : number;
  listGames : Game[];
}
