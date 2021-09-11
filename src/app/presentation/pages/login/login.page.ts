import { Component } from '@angular/core';
import { Nurse } from 'src/app/domain/models/nurse';
import { ILoginService } from 'src/app/domain/protocols/login';

/*
  To-do:
    - [ ] Campos do formulário devem espelhar/interagir com propriedade "user" da LoginPage
    - [ ] Função "login()" deve usar o username e password da propriedade "user" (valores do formulário de login)
    - [ ] Criar feedback/alert/diálogo de login/senha incorretos
    - [ ] Criar feedback/alert/diálogo de carregamento, enquanto busca o login
    - [ ] Se login/senha corretos, redirecionar para "/home"
*/

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  user: Nurse = {} as Nurse

  constructor(private loginService: ILoginService) {}

  async login() {
    try {
      const user = await this.loginService.login('teste', 'teste');
      console.log(user)
    } catch (ex) {
      console.log(ex)
    }
  }
}
