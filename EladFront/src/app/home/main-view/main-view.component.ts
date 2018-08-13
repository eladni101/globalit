import { Component, OnInit } from '@angular/core';
import {UserStateService} from '../../services/common-services/user-state.service'
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor(private userStateService:UserStateService) { }

  ngOnInit() {
    document.getElementsByTagName("body")[0].setAttribute("background",'');
  }
  

}
