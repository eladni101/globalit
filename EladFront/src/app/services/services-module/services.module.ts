import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CanMoveHomeService} from '../home-services/can-move-home.service'
import {DoUserLoginService} from '../login servcies/do-user-login.service'
import {ServerService} from '../common-services/server.service'
import {UserStateService} from '../common-services/user-state.service'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[CanMoveHomeService,DoUserLoginService,ServerService,UserStateService]
})
export class ServicesModule { }
