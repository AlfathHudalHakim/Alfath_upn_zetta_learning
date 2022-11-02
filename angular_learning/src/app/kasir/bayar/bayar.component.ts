import { Component, OnInit, Input, Output, EventEmitter, AfterContentChecked } from '@angular/core';
import { Game } from '../kasir/kasir.component';
import { selectedGame } from '../kasir/kasir.component';
@Component({
  selector: 'app-bayar',
  templateUrl: './bayar.component.html',
  styleUrls: ['./bayar.component.scss']
})
export class BayarComponent implements OnInit, AfterContentChecked {
  @Output ('gameAdded') onAddGame : EventEmitter<Game> = new EventEmitter<Game>()
  @Input() games!: selectedGame[];

  public total:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    console.log("tes")
    this.total = this.games.reduce((total, game) => total += game.jumlah * game.harga , 0)
  }

}
