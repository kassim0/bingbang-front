import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ListGamesPopupComponent} from "../list-games-popup/list-games-popup.component";
import {MatDialog} from "@angular/material/dialog";
import {GameApiService} from "../../services/game-api.service";
import {ListGame} from "../../models/games.model";
import {ApercuListComponent} from "../apercu-list/apercu-list.component";
import {MatButton} from "@angular/material/button";
import {MyGameListComponent} from "../my-game-list/my-game-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    ApercuListComponent,
    MatButton,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  backgroundImage: string = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)';
  isDragging = false;
  hasCustomImage = false;
  listGames : ListGame[] = [];

  constructor(public dialog:MatDialog,
              private gameApiService: GameApiService) {

  }

  ngOnInit(): void {
    this.gameApiService.getListGame().subscribe(listGames => {
      this.listGames = listGames;
    });
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;

    const file = event.dataTransfer?.files[0];
    if (!file || !file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.backgroundImage = `url('${reader.result}')`;
      this.hasCustomImage = true;
    };
    reader.readAsDataURL(file);
  }

  OpenPopup() {
    const dialogRef = this.dialog.open(ListGamesPopupComponent,{
      width: '40%',
      height:'90%',
      data: {}
    })

    dialogRef.afterClosed().subscribe(() => {
      this.gameApiService.getListGame().subscribe(listGames => {
        this.listGames = listGames;
      })
    })
  }

  openMyListPopup(listGames : ListGame){
    console.log(listGames);
    const dialogRef = this.dialog.open(MyGameListComponent,{
      width: '40%',
      height:'90%',
      data: {gameList : listGames}
    })
  }


}
