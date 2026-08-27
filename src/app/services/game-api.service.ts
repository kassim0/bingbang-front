import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewGameList, RawgResponseDto, RawgResultsDto} from '../models/rawg.models';
import {GamesList} from "../models/games.model";

@Injectable({providedIn: 'root'})
export class GameApiService {

  private base = '/api';

  constructor(private http: HttpClient) {}

  searchGames(name: string) {
    return this.http.get<RawgResponseDto>(`${this.base}/rawg/${name}`);
  }

  saveGame(game: RawgResultsDto) {
    return this.http.post<RawgResultsDto>(`${this.base}/games`, game);
  }

  saveListGame(newGameList:NewGameList) {
    return this.http.post<RawgResultsDto>(`${this.base}/saveGamesList`, newGameList);
  }

  getListGame() {
    return this.http.get<GamesList[]>(`${this.base}/getGamesLists`);
  }
}
