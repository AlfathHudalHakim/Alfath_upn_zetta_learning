import { Component, OnInit, EventEmitter, Output } from '@angular/core';
export interface Game {title:string, id:string, harga:number}  
export interface selectedGame {title:string, id:string, harga:number, jumlah:number}  

@Component({
  selector: 'app-kasir',
  templateUrl: './kasir.component.html',
  styleUrls: ['./kasir.component.scss']
})

export class KasirComponent implements OnInit {
  @Output ('gameAdded') onAddGame : EventEmitter<Game> = new EventEmitter<Game>()

  judul: string = 'List Game';

  public games: Game[] = [
    {
      id:'1',
      title: 'FIFA 23',
      harga:899000
    },
    {
      id:'2',
      title: 'Spiderman',
      harga:700000
    },
    {
      id:'3',
      title: 'The Witcher 3',
      harga:400000
    },
    {
      id:'4',
      title: 'DmC 5',
      harga:250000
    },
    {
      id:'5',
      title: 'GTA V',
      harga:300000
    },
    {
      id:'5',
      title: 'Warcraft',
      harga:100000
    },
  ];

  public selectedGames : selectedGame[]=[]

  addGame(game :Game){
    this.onAddGame.emit(game)
    const duplicated =this.selectedGames.findIndex(({id})=>id===game.id)

    if(duplicated>=0){
      this.selectedGames[duplicated].jumlah +=1
    }
    else{
      this.selectedGames.push({...game, jumlah: 1})
    }
  }
  constructor() { }

  ngOnInit(): void { }

}
