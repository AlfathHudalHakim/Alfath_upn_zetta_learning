import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path :'list',
    pathMatch:'full',
    component:ListComponent
  
  },
  {
    path :'create',
    pathMatch:'full',
    component:CreateComponent
  
  },
  {
    path: 'card/:id' ,
    pathMatch:'full',
    component:CardComponent
  },

  {
    path: '**',
    pathMatch:'full',
    redirectTo:'list'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
