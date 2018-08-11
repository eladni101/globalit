import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {RouterModule,Routes} from '@angular/router'

import { LoginHomeViewComponent } from '../login-home-view/login-home-view.component';
import { LoginForgotViewComponent } from '../login-forgot-view/login-forgot-view.component';
import {DoUserLoginService} from '../../services/login servcies/do-user-login.service'

const LoginRoutes: Routes = [
  {path:'',canActivate:[DoUserLoginService],component:LoginHomeViewComponent},
  {path:'forgot',canActivate:[DoUserLoginService],component:LoginForgotViewComponent},
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(LoginRoutes)
  ],
  declarations: [LoginHomeViewComponent, LoginForgotViewComponent],
  exports:[LoginHomeViewComponent,LoginForgotViewComponent]
})
export class LoginModule { }
