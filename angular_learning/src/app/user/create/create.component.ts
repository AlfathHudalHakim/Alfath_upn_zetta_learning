import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public form : FormGroup 
  
  constructor(private fb : FormBuilder ,private router : Router, private Service : UserService) { 
    
    this.form = this.fb.group({
      id : [null ,[Validators.required]],
      nama : [null ,[Validators.required]],
      umur : [null ,[Validators.required,Validators.min(19)]],
      gender : [null ,[Validators.required]],
      email : [null ,[Validators.required , Validators.email]],
      posisi : [null ,[Validators.required]],
      status : [null ,[Validators.required]],
      alamatLengkap : this.fb.array([this.alamatformgroup()])
      
    })

  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  

  ngOnInit(): void {
  }

  get alamat() : FormArray{
    return this.form.get('alamatLengkap')as FormArray
  }
  
  alamatformgroup() : FormGroup {
    return this.fb.group({
      alamat : [null ,[Validators.required]],
      zip: [null ,[Validators.required,Validators.minLength(3),Validators.maxLength(6)]],
      kota : [null ,[Validators.required]],
      negara : [null ,[Validators.required]],
    })
  }

  submit() : void {
    const payload = this.form.value;
    console.log(payload);
    this.Service.addUser(payload);
    this.router.navigate(['user','list'])
  }



}