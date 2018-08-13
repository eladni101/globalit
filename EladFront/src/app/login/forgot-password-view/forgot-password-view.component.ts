import { Component, OnInit,AfterViewInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import {UserStateService} from '../../services/common-services/user-state.service'
import {checkEmailValidator} from '../../validators/ValidateEmail'
import{Router} from '@angular/router'
import {IResponseServer} from '../../common-class/iresponse-server'
import {ServerService} from '../../services/common-services/server.service'
@Component({
  selector: 'app-forgot-password-view',
  templateUrl: './forgot-password-view.component.html',
  styleUrls: ['./forgot-password-view.component.css']
})
export class ForgotPasswordViewComponent implements OnInit,IResponseServer,AfterViewInit {

  profileForm = new FormGroup({
    email: new FormControl(''),
  });
  errorForgot =false;
  constructor(private serverService:ServerService,private userStateService :UserStateService,private router : Router ) { }

  ngOnInit() {
    this.profileForm.patchValue({email : this.userStateService.getEmail() })
    this.serverService.SetUrl("forgot-password.php");
  }
  onSubmit(){
    let email =this.profileForm.get("email").value
    let obj = {email:email}
    this.serverService.Post(obj,this);
  }
  HandleResponse(data:any){
    console.log(data)
    if(data.error){
      this.errorForgot=true
    }
    else{
      this.userStateService.setUserResetPassword(true)
      this.router.navigateByUrl("");
    }
   }
   ngAfterViewInit(){
    this.profileForm.controls['email'].setValidators([checkEmailValidator()]);
  }
}
