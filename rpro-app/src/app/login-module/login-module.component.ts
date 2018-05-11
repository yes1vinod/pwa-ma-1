import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.css']
})
export class LoginModuleComponent {

  constructor(private router: Router) {}
  cards = [
    { title: 'Login Form', cols: 1, rows: 1 }
  ];

  fnLogin() {
    console.log('login buttong has been clicked');
    this.router.navigate(['home']);
  }


}
