import {Component, Inject} from '@angular/core';
import {ListGame} from "../../models/games.model";
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

  gameList : ListGame;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { gameList: ListGame }) {
    this.gameList = data.gameList;
    console.log(this.gameList);
  }

}
