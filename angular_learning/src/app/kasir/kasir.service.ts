export interface Game {title:string, id:string, harga:number}  
export interface selectedGame {title:string, id:string, harga:number, jumlah:number}  
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn :'root'
})

export class kasirService{
    private games : BehaviorSubject<Game[]> = new BehaviorSubject<Game[]> ([
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
            id:'6',
            title: 'Warcraft',
            harga:100000
          },
    ])

    private selectedGames : BehaviorSubject<selectedGame[]> = new BehaviorSubject<selectedGame[]>([]);

    public games$ = this.games.asObservable();
    public selectedGames$ = this.selectedGames.asObservable();

    addGame(game :Game){
        const duplicated =this.selectedGames.value.findIndex(({id})=>id===game.id)
        let jumlah : 0;
        if(duplicated>=0){
            this.selectedGames.value[duplicated].jumlah+=1
        }
        else{
            this.selectedGames.value.push({...game, jumlah: 1})
        }
      }
    
}