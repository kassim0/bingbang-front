import {Component, Inject} from '@angular/core';
import {Game, GamesList} from "../../models/games.model";
import {NgClass, NgForOf} from "@angular/common";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: { gamesList: GamesList }) {
    this.gamesList = data.gamesList;
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

  }

}
