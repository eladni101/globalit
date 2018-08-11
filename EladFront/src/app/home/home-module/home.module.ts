import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'

import {CanMoveHomeService} from '../../services/home-services/can-move-home.service'

import { HomeViewComponent } from '../home-view/home-view.component';

const HomeRoutes: Routes = [
  {path:'home',canActivate:[CanMoveHomeService],component:HomeViewComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [HomeViewComponent],
  exports:[HomeViewComponent]
})
export class HomeModule { }
