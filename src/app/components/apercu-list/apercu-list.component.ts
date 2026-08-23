import {Component, Input} from '@angular/core';
import {ListGame} from "../../models/games.model";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-apercu-list',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './apercu-list.component.html',
  styleUrl: './apercu-list.component.scss'
})
export class ApercuListComponent {

  @Input()
  listGame!: ListGame;


}
