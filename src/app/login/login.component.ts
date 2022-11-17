import { Component, ElementRef, OnInit } from '@angular/core';
import { Login } from './login';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  mainForm!:NgForm;
  successMessage: string | undefined;
  loginToken: Login = {
    email: undefined,
    password: undefined,
    success: false,
  };
  // logInSuccess: boolean = false;
  // email!: string;
  // password!: string;
  constructor(private route:Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  checkCredentials(loginForm: NgForm) {
    this.mainForm = loginForm;
    console.log('checking');
    console.log(this.loginToken.email);
    console.log(this.loginToken.password);

    // if (
    //   this.loginToken.email === 'admin@gmail.com' &&
    //   this.loginToken.password === 'Admin123'
    // ) {
    //   this.loginToken.success = true;
    //   this.login();
    // } 
    this.login();
    // else {
    //   // this.messageElement.nativeElement.classList.replace("alert-success", "alert-danger");
    //   this.successMessage =
    //     'You are not allowed to see the content, please log in as an admin';
    //     setTimeout(() => {
    //       this.successMessage = undefined;
    //       this.mainForm.reset();
    //     }, 3500);
    // }
  }

  login() {
    if (this.loginService.checkCredential(this.loginToken)) {
      this.successMessage = 'Welcome Admin';
      //We take out the message so it doesn't bother
      
      setTimeout(() => {
        this.successMessage = undefined;
        // this.mainForm.reset();
        
      }, 1800);

      setTimeout(()=>{
        this.route.navigate(['/rooms']);
      }, 1700);
    
      
    }else{
      this.successMessage =
        'You are not allowed to see the content, please log in as an admin';
        setTimeout(() => {
          this.successMessage = undefined;
          this.mainForm.reset();
        }, 3500);
    }
    
  }
}
