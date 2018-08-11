import { Injectable } from '@angular/core';
import {CanActivate,Router} from '@angular/router'
import {UserStateService} from '../common-services/user-state.service'
@Injectable({
  providedIn: 'root'
})
export class CanMoveHomeService {
  constructor(private userStateService:UserStateService,private router:Router) { }
  
    canActivate(){
      let loogedIn=this.userStateService.getlogIn()
      if(!loogedIn){
        this.router.navigateByUrl("")
      }
      return loogedIn;
    }
}
