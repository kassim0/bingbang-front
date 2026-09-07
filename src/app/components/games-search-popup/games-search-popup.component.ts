import {Component, Input} from '@angular/core';
import {MatButton, MatButtonModule} from "@angular/material/button";
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions, MatDialogClose
} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {SearchBarComponent} from "../share/search-bar/search-bar.component";
import {NewGameList, RawgResultsDto} from "../../models/rawg.models";
import {NgForOf, NgIf} from "@angular/common";
import {MatList, MatListItem} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {GameItemComponent} from "../share/game-item/game-item.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {GameApiService} from "../../services/game-api.service";
import {MatIcon} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-games-search-popup',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    SearchBarComponent, NgForOf, NgIf, MatList, MatListItem, MatDivider, GameItemComponent, MatIcon, MatProgressSpinnerModule,
  ],
  templateUrl: './games-search-popup.component.html',
  styleUrl: './games-search-popup.component.scss'
})
export class GamesSearchPopupComponent {

  reponse : RawgResultsDto[] | undefined;
  newList : NewGameList = {name: '', rawgGames: []};
  addedGames: RawgResultsDto[] = [];
  listNameInput : string = "";
  isSearching : boolean = false;

  @Input()
  gameNameSearch:string='';

  constructor(
    public dialogRef: MatDialogRef<GamesSearchPopupComponent>,
    private gameApiService: GameApiService) {
  }

  close() {
    if(this.addedGames.length > 0){
      this.newList.rawgGames = this.addedGames;
      this.newList.name = this.listNameInput;
      this.saveListGames(this.newList);
    }
    this.dialogRef.close();
  }

  receiveData(data: string) {
    this.gameNameSearch = data;
    this.isSearching = true;
    this.gameApiService.searchGames(this.gameNameSearch).subscribe({
      next: (reponse) => {
        this.reponse = reponse.results;
        this.isSearching = false;
      },
      error: () => {
        this.isSearching = false;
      }
    });
  }

  onAddGame(game: RawgResultsDto){
    this.addedGames.push(game);
  }

  onRemoveGame(game: RawgResultsDto){
    this.addedGames = this.addedGames.filter(g=>g.id!==game.id);
  }

  saveListGames(newList : NewGameList) {
    this.gameApiService.saveGamesList(newList).subscribe({});
  }

}
