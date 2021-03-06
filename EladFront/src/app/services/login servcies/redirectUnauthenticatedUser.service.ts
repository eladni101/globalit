import { Injectable } from '@angular/core';
import {UserStateService} from '../common-services/user-state.service'
import {CanActivate,Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class RedirectUnauthenticatedUserService implements CanActivate {

  constructor(private userStateService:UserStateService,private router:Router) { }
  
  
    canActivate(){
      let currentUser = JSON.parse(localStorage.getItem("currentUser"))
     if(currentUser!=null){
        this.userStateService.setlogInStateOfUser(true);
        this.userStateService.setInformation(currentUser.lastName,currentUser.firstName,currentUser.email)
        this.router.navigateByUrl("home")
     }
     return true;
    }
}
