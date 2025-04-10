import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import this

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule, // ✅ Make sure it's imported
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
]
})
export class AuthModule { }
