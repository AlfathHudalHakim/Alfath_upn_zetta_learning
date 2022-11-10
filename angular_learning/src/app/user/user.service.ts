import { Injectable } from '@angular/core';
export interface User {name:string, id:string, age:number, gender:string, email:string, posisi:string, status:string, alamat:string, pos:number, kota:string, negara:string}  
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users : BehaviorSubject<User[]> = new BehaviorSubject<User[]> ([
    {
      name:'alfath',
      id:'1', 
      age:18, 
      gender:'laki-laki', 
      email:'dawdwad@gmail.com', 
      posisi:'ketua', 
      status:'jomblo', 
      alamat:'sungai penuh', 
      pos:37111, 
      kota:'sungai penuh', 
      negara:'Indonesia'
    }
  ]) 

  constructor() { }
}
