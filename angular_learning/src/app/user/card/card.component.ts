import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
export interface List {nama:string, id:string, umur:number, gender:string, email:string, posisi:string, status:string, alamatLengkap:alamat[]} 
export interface alamat { alamat:string, zip:number, kota:string, negara:string }

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  private listid : string|null =null
  public list : List|null = null

  constructor(private route: ActivatedRoute , private service : UserService) { 
    this.listid = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if(typeof this.listid === 'string'){
      this.list = this.service.getListById(this.listid)
    }
    
    
  }

}
