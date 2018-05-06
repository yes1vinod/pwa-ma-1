import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Routing imports
import { AppRoutingModule } from './app-routing.module';
import { LoginModuleComponent } from './login-module/login-module.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule,
   MatSelectModule, MatOptionModule,MatInputModule } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    LoginModuleComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
