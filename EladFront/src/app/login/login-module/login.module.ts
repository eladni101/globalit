import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {RouterModule,Routes} from '@angular/router'

import { LoginUserViewComponent } from '../login-user-view/login-user-view.component';
import { ForgotPasswordViewComponent } from '../forgot-password-view/forgot-password-view.component';
import {RedirectUnauthenticatedUserService} from '../../services/login servcies/redirectUnauthenticatedUser.service'

const LoginRoutes: Routes = [
  {path:'',canActivate:[RedirectUnauthenticatedUserService],component:LoginUserViewComponent},
  {path:'forgot',canActivate:[RedirectUnauthenticatedUserService],component:ForgotPasswordViewComponent},
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(LoginRoutes)
  ],
  declarations: [LoginUserViewComponent, ForgotPasswordViewComponent],
  exports:[LoginUserViewComponent,ForgotPasswordViewComponent]
})
export class LoginModule { }
