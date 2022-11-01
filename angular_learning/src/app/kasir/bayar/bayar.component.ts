import { Component, OnInit, Input} from '@angular/core';
import { selectedGame } from '../kasir/kasir.component';

@Component({
  selector: 'app-bayar',
  templateUrl: './bayar.component.html',
  styleUrls: ['./bayar.component.scss']
})
export class BayarComponent implements OnInit {
  @Input() games!: selectedGame[];

  constructor() { }

  ngOnInit(): void {
  }

}
