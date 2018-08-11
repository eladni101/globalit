import { Component, OnInit } from '@angular/core';
import {UserStateService} from '../services/common-services/user-state.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userStateService:UserStateService) { }
  
    ngOnInit() {
    }
  
    logout(){
      this.userStateService.setlogIn(false)
      localStorage.setItem("currentUser",null);
    }
    

}
