import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kasir',
  templateUrl: './kasir.component.html',
  styleUrls: ['./kasir.component.scss']
})
export class KasirComponent implements OnInit {
  public games: Game[] = [
    {id:'1', name: 'gta v', price: 500000},
    {id:'2', name: 'Assassins Creed', price: 450000},
    {id:'3', name: 'the witcher', price: 820000},
    {id:'4', name: 'far cry', price: 550000},
    {id:'5', name: 'fallout', price: 850000},
    {id:'6', name: 'fifa 23', price: 760000},
    {id:'7', name: 'DmC 5', price: 480000},
    {id:'8', name: 'spiderman', price: 800000},
  ]
  public selectedGames: SelectedGame[]

  constructor() { }

  ngOnInit(): void {
  }

  

}
