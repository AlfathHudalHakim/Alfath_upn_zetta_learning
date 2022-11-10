import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { CreateComponent } from './create/create.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    ListComponent,
    CardComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatSliderModule,
    MatFormFieldModule
  ]
})
export class UserModule { }
