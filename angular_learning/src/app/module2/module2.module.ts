import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module2Component } from './module2.component';



@NgModule({
  declarations: [
    Module2Component
  ],
  imports: [
    CommonModule
  ],
  exports : [
    Module2Component
  ]
})
export class Module2Module { }
