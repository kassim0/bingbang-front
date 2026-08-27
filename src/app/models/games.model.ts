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
  games : Game[];
}
