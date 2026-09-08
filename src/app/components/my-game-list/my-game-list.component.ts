import {Component, Inject} from '@angular/core';
import {Game, GamesList, UpdateGamesList} from "../../models/games.model";
import {NgClass, NgForOf} from "@angular/common";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {GameApiService} from "../../services/game-api.service";

@Component({
  selector: 'app-my-game-list',
  standalone: true,
  imports: [
    NgForOf,
    MatIcon,
    MatIconButton,
    NgClass,
    MatButton
  ],
  templateUrl: './my-game-list.component.html',
  styleUrl: './my-game-list.component.scss'
})
export class MyGameListComponent {

  gamesList : GamesList;
  selectedGames : Game[] = [];
  updateGamesList : UpdateGamesList;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { gamesList: GamesList },
              private gameApiService: GameApiService) {
    this.gamesList = data.gamesList;
    this.updateGamesList = {
      gamesListId: this.gamesList.id,
      newGameId: null,
      removeGameId: null,
      newName: null,
    };
  }

  onDeleteGame(game: Game) {
    if(this.isGameSelected(game)) {
      this.selectedGames = this.selectedGames.filter(g=>g.id!==game.id);
    }
    else {
      this.selectedGames.push(game);
    }
  }

  isGameSelected(game:Game): boolean {
    return this.selectedGames.some(g => g.id === game?.id);
  }

  saveModifGamesList(){
    this.updateGamesList.removeGameId = this.selectedGames?.map(g => g.id);
    this.gameApiService.updateGamesList(this.updateGamesList).subscribe({
      next: res => console.log('updateGamesList ok', res),
      error: err => console.error('updateGamesList error', err),
    });
  }

}
