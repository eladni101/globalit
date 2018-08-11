import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginHomeViewComponent } from '../../login-home-view/login-home-view.component';
import { LoginForgotViewComponent } from '../../login-forgot-view/login-forgot-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginHomeViewComponent, LoginForgotViewComponent]
})
export class LoginModule { }
