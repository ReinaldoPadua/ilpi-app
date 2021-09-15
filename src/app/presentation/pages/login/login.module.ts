import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginPage } from './login.page';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoaderComponent } from './../../components/loader/loader.component';
import { AlertComponent } from './../../components/alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ],
  exports: [LoginPage],
  declarations: [LoginPage, LoaderComponent, AlertComponent]
})
export class LoginPageModule {}
