import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './user/list/list.component';

const routes: Routes = [
  {
    path:'user',
    loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule),
  },
  {
    path : '**',
    redirectTo : 'user'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
