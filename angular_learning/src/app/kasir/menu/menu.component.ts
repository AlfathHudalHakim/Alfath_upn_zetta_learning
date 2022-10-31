import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input('games') games: game[] = []
  @Output('gameAdded') onAddGame: EventEmitter<game> = new EventEmitter<game>();

  constructor() { }

  ngOnInit(): void {
  }

  addGame(game: Game):void {
    this.onAddGame.emit(game)
  }

}
