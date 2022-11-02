import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../kasir/kasir.component';
import { selectedGame } from '../kasir/kasir.component';
@Component({
  selector: 'app-bayar',
  templateUrl: './bayar.component.html',
  styleUrls: ['./bayar.component.scss']
})
export class BayarComponent implements OnInit {
  @Output ('gameAdded') onAddGame : EventEmitter<Game> = new EventEmitter<Game>()
  @Input() games!: selectedGame[];

  constructor() { }

  ngOnInit(): void {
  }

}
