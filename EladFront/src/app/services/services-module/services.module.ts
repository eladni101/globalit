import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RedirectAuthenticatedUserService} from '../home-services/redirectAuthenticatedUser.service'
import {RedirectUnauthenticatedUserService} from '../login servcies/redirectUnauthenticatedUser.service'
import {ServerService} from '../common-services/server.service'
import {UserStateService} from '../common-services/user-state.service'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[RedirectAuthenticatedUserService,RedirectUnauthenticatedUserService,ServerService,UserStateService]
})
export class ServicesModule { }
