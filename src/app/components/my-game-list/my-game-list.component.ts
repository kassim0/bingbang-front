import {Component, Inject} from '@angular/core';
import {GamesList} from "../../models/games.model";
import {NgForOf} from "@angular/common";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-my-game-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './my-game-list.component.html',
  styleUrl: './my-game-list.component.scss'
})
export class MyGameListComponent {

  gamesList : GamesList;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { gamesList: GamesList }) {
    this.gamesList = data.gamesList;
    console.log(this.gamesList);
  }

}
