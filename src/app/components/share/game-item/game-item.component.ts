import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RawgResultsDto} from "../../../models/rawg.models";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-game-item',
  standalone: true,
  imports: [MatIconButton, MatIcon],
  templateUrl: './game-item.component.html',
  styleUrl: './game-item.component.scss'
})
export class GameItemComponent {

  @Input()
  game: RawgResultsDto | undefined;

  @Input()
  gamesSelected : RawgResultsDto[] = [];

  @Output()
  addGame = new EventEmitter<RawgResultsDto>();

  @Output()
  removeGame = new EventEmitter<RawgResultsDto>();

  onAddGame() {
    if (this.game) {
      if(this.isGameSelected()) {
        this.removeGame.emit(this.game);
      }
      else{
        this.addGame.emit(this.game);
      }

    }
  }

  isGameSelected(): boolean {
    return this.gamesSelected.some(g => g.id === this.game?.id);
  }

}
