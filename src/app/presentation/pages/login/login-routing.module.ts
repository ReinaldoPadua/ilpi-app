import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { I_LOGIN_SERVICE } from "../../../domain/protocols/login";
import { LoginService } from "../../../domain/implementations/login/login";
import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [{ provide: I_LOGIN_SERVICE, useClass: LoginService }]
})
export class LoginPageRoutingModule {}
