import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import {UserStateService} from '../../services/common-services/user-state.service'
import {checkEmailValidator} from '../../validators/email-check'
@Component({
  selector: 'app-login-forgot-view',
  templateUrl: './login-forgot-view.component.html',
  styleUrls: ['./login-forgot-view.component.css']
})
export class LoginForgotViewComponent implements OnInit {

  profileForm = new FormGroup({
    email: new FormControl('',[checkEmailValidator()]),
  });
  constructor(private userStateService :UserStateService) { }

  ngOnInit() {
    this.profileForm.patchValue({email : this.userStateService.getEmail() })
  }

}
