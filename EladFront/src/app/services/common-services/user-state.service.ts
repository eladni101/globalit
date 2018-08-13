import { Injectable } from '@angular/core';
import {UserDto} from '../../common-class/user-dto'
import {loginStateDto} from '../../common-class/login-state-dto'
@Injectable({
  providedIn: 'root'
})
export class UserStateService {
   user :UserDto ;
  private loginState :loginStateDto; 
  constructor() { 
    this.user=new UserDto()
    this.loginState=new loginStateDto();
  }

  setEmail(email :string){this.user.email=email;}

  getEmail(){return this.user.email}

  setlogInStateOfUser(doUserlogIn:boolean){this.loginState.IsUserLogIn=doUserlogIn}

  getlogInStateOfUser(){return this.loginState.IsUserLogIn}

  getUserFirstName(){return this.user.first_name}

  getUserLastName(){return this.user.last_name}

  setUserResetPassword(IsUserReset:boolean){this.loginState.IsUserResetPassword=IsUserReset}

  getUserForgot(){return this.loginState.IsUserResetPassword}
  
  setInformation(lastName,firstName,email){
    this.user.last_name=lastName;
    this.user.first_name=firstName
    this.user.email=email
  }
}
