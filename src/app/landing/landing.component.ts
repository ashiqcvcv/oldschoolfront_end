import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormControlName,FormGroup, FormControl, EmailValidator, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  model = new FormGroup({
    type : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required,Validators.pattern(this.emailRegex)]),
    password : new FormControl('',Validators.required)
  })
  signup = new FormGroup({
    type : new FormControl('',Validators.required),
    fullName : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required,Validators.pattern(this.emailRegex)]),
    password : new FormControl('',Validators.required)
  })
  serverErrorMessages : string;
  showSucessMessage : boolean;
  constructor(public authService : AuthService,private router: Router) { }
  display="";
  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      if(this.authService.getUsertype() === 'student'){
        this.router.navigateByUrl('/student');
      }else if(this.authService.getUsertype()==='tutor'){
        this.router.navigateByUrl('/tutor');
      }
      
    }
  }

  onLogin(){
    if(this.model.valid){
      this.authService.login(this.model.value).subscribe(
        res => {
          this.authService.setToken(res['token']);
          this.authService.setUsertype(res['type']);
          if(res['type']==='student'){
            this.router.navigateByUrl('/student');
          }else if(res['type']==='tutor'){
            this.router.navigateByUrl('/tutor');}
          let body = document.querySelector('.modal-open');
          body.classList.remove('modal-open');
          body.removeAttribute('style');
          let divFromHell = document.querySelector('.modal-backdrop');
          body.removeChild(divFromHell);
        },
        err => {
          this.serverErrorMessages = err.error.message;
        }
      )
    }
  }

  resetForm(){
    this.authService.selectedUser = {
      fullName : '',
      email : '',
      password : ''
    }
  }

  onSignUp(){
    this.authService.postUser(this.signup.value).subscribe(
      res=>{
        this.serverErrorMessages = '';
        this.showSucessMessage = true;
        setTimeout(()=> this.showSucessMessage = false,4000);
        this.resetForm();
      },err => {
        if (err.status === 422) {
        this.showSucessMessage = false;
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    )
  }

  errorClear(){
    this.serverErrorMessages = '';
    this.showSucessMessage = false;
  }


}
