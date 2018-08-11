import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'



const appRoutes: Routes = [
  {path:'',loadChildren:'../login/login-module/login.module#LoginModule'},
  {path:'',loadChildren: '../home/home-module/home.module#HomeModule'},


]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
