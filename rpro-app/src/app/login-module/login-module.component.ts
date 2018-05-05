import { Component } from '@angular/core';

@Component({
  selector: 'login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.css']
})
export class LoginModuleComponent {
  cards = [
    { title: 'Login Form', cols: 1, rows: 1 }
  ];
}
