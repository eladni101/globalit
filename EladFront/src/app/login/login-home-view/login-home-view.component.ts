import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import {IResponseServer} from '../../common-class/iresponse-server'
import {ServerService} from '../../services/common-services/server.service'
import{Router} from '@angular/router'
import {UserStateService} from '../../services/common-services/user-state.service'
import {checkEmailValidator} from '../../validators/email-check'

@Component({
  selector: 'app-login-home-view',
  templateUrl: './login-home-view.component.html',
  styleUrls: ['./login-home-view.component.css']
})
export class LoginHomeViewComponent implements OnInit,IResponseServer {

  profileForm = new FormGroup({
    email: new FormControl('',[checkEmailValidator()]),
    password: new FormControl('')
  });
  constructor(private serverService:ServerService,private router : Router ,private userStateService :UserStateService ) { }

  ngOnInit() {
    document.getElementsByTagName("body")[0].setAttribute("background",'LoginForm');
    this.serverService.SetUrl("login.php");
  }

  onSubmit(){
    let email =this.profileForm.get("email").value
    let password =this.profileForm.get("password").value
    let obj = {email:email,password:password}
    console.log(JSON.stringify(obj))
    this.serverService.Post(JSON.stringify(obj),this);
  }
  HandleResponse(data:any){
    console.log(data);
  }
  forgotPassdWord(){
   
    this.userStateService.setEmail(this.profileForm.get('email').value)
    this.router.navigateByUrl("forgot") 
  }

}
