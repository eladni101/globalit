import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'

import {RedirectAuthenticatedUserService} from '../../services/home-services/redirectAuthenticatedUser.service'

import { MainViewComponent } from '../main-view/main-view.component';

import {HeaderComponent} from '../../header/header.component'
const HomeRoutes: Routes = [
  {path:'home',canActivate:[RedirectAuthenticatedUserService],component:MainViewComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [MainViewComponent,HeaderComponent],
  exports:[MainViewComponent,HeaderComponent]
})
export class HomeModule { }
