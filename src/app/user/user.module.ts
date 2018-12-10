
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ]
})
export class UserModule { }
