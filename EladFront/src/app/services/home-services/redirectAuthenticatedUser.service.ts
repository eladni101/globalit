import { Injectable } from '@angular/core';
import {CanActivate,Router} from '@angular/router'
import {UserStateService} from '../common-services/user-state.service'
@Injectable({
  providedIn: 'root'
})
export class RedirectAuthenticatedUserService implements CanActivate {
  constructor(private userStateService:UserStateService,private router:Router) { }
  
    canActivate(){
      let loogedIn=this.userStateService.getlogInStateOfUser()
      if(!loogedIn){
        this.router.navigateByUrl("")
      }
      return loogedIn;
    }
}
