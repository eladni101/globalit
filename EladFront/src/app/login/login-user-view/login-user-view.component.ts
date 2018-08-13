import { Component, OnInit ,AfterViewInit} from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import {IResponseServer} from '../../common-class/iresponse-server'
import {ServerService} from '../../services/common-services/server.service'
import{Router} from '@angular/router'
import {UserStateService} from '../../services/common-services/user-state.service'
import {checkEmailValidator} from '../../validators/ValidateEmail'

@Component({
  selector: 'app-login-user-view',
  templateUrl: './login-user-view.component.html',
  styleUrls: ['./login-user-view.component.css']
})
export class LoginUserViewComponent implements OnInit,IResponseServer,AfterViewInit{

  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  errorLogin=false;
  constructor(private serverService:ServerService,private router : Router ,public userStateService :UserStateService ) { }

  ngOnInit() {
    document.getElementsByTagName("body")[0].setAttribute("background",'LoginForm');
    this.serverService.SetUrl("login.php");
  }

  onSubmit(){
    let email =this.profileForm.get("email").value
    let password =this.profileForm.get("password").value
    let obj = {email:email,password:password}
    this.serverService.Post(obj,this);
  }
  HandleResponse(data:any){
  console.log(data)
   if(data.error!=null){
     console.log("error login")
     this.errorLogin=true
   }
   else{
     let firstName = data.user.profile.first_name
     let lastName =  data.user.profile.last_name
     let email = this.profileForm.get('email').value
    localStorage.setItem("currentUser",JSON.stringify({email: email,firstName:firstName,lastName:lastName }));
     this.userStateService.setlogInStateOfUser(true)
     this.userStateService.setInformation(lastName,firstName,email)
     this.userStateService.setUserResetPassword(false)
     this.router.navigateByUrl('home');
   }
  }
  forgotPassdWord(){
    this.userStateService.setEmail(this.profileForm.get('email').value)
    this.router.navigateByUrl("forgot") 
  }
  ngAfterViewInit(){
    this.profileForm.controls['email'].setValidators([checkEmailValidator()]);
  }

}
