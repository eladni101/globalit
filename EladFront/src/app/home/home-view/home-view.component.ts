import { Component, OnInit } from '@angular/core';
import {UserStateService} from '../../services/common-services/user-state.service'
@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor(private userStateService:UserStateService) { }

  ngOnInit() {
    document.getElementsByTagName("body")[0].setAttribute("background",'');
  }

}
