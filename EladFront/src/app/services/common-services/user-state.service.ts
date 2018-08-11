import { Injectable } from '@angular/core';
import {UserDto} from '../../common-class/user-dto'

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  user :UserDto ;
  logedIn :boolean=false;
  constructor() { this.user=new UserDto('')}

  setEmail(email :string){this.user.email=email;}

  getEmail(){return this.user.email}

  setlogIn(log:boolean){this.logedIn=log}

  getlogIn(){return this.logedIn}
}
