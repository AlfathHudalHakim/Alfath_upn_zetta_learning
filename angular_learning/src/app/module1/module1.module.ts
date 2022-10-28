import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1Component } from './module1.component';



@NgModule({
  declarations: [
    Module1Component
  ],
  imports: [
    CommonModule
  ],
  exports : [
    Module1Component
  ]
})
export class Module1Module { }
