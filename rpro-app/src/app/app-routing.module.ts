import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginModuleComponent } from './login-module/login-module.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginModuleComponent },
  { path: 'home', component: HomepageComponent }

];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true

      }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
