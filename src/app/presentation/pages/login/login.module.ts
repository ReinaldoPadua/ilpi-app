import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginPage } from './login.page';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoaderComponentModule } from './../../components/loader/loader.module';
import { AlertComponentModule } from './../../components/alert/alert.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    LoaderComponentModule,
    AlertComponentModule
  ],
  exports: [LoginPage],
  declarations: [LoginPage]
})
export class LoginPageModule {}
