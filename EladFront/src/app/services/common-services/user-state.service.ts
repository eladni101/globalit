import { Injectable } from '@angular/core';
import {UserDto} from '../../common-class/user-dto'

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  user :UserDto ;
  logedIn :boolean=false;
  passwordSendToMail:boolean=false;
  constructor() { this.user=new UserDto('')}

  setEmail(email :string){this.user.email=email;}

  getEmail(){return this.user.email}

  setlogIn(log:boolean){this.logedIn=log}

  getlogIn(){return this.logedIn}

  getUserFirstName(){return this.user.first_name}

  getUserLastName(){return this.user.last_name}

  setUserForgot(IsForgot){this.passwordSendToMail=IsForgot}

  getUserForgot(){return this.passwordSendToMail}
  
  setInformation(lastName,firstName,email){
    this.user.last_name=lastName;
    this.user.first_name=firstName
    this.user.email=email
  }
}
