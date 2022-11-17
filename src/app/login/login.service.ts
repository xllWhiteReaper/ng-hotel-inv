import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  successMessage: string | undefined;
  constructor() {}
  loginToken!: Login;
  isAdmin: boolean | undefined = undefined;

  checkCredential(loginToken: Login) {
    this.loginToken = loginToken;

    if (
      this.loginToken.email === 'admin@gmail.com' &&
      this.loginToken.password === 'Admin123'
    ){
      this.loginToken.success = true;
      this.isAdmin = true;
      return this.login();
    }
    else if (
      this.loginToken.email === 'user2022@gmail.com' &&
      this.loginToken.password === 'User123'
    ){
      this.loginToken.success = true;
      this.isAdmin = false;
      return this.login();
    }
    return this.login();
  }

  login() {
    if (this.loginToken.success) {
      return true;
      //   this.successMessage = 'Welcome Admin';
      //   //We take out the message so it doesn't bother

      //   setTimeout(() => {
      //     this.successMessage = undefined;
      //     // this.mainForm.reset();

      //   }, 3500);

      //   setTimeout(()=>{
      //     // this.route.navigate(['/rooms']);
      //   }, 1700);
      // }
    }
    return false;
  }
}
