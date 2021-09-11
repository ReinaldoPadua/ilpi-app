import { Component, Inject } from '@angular/core';
import { LoginService } from 'src/app/domain/implementations/login/login';
import { ILoginService, I_LOGIN_SERVICE } from 'src/app/domain/protocols/login';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  user: {}

  constructor(private loginService: LoginService) {}

  async login() {
    try {
      const user = await this.loginService.login('teste', 'teste');
      console.log(user)
    } catch (ex) {
      console.log(ex)
    }
  }
}
