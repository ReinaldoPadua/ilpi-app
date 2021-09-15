import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NurseDoesNotExist } from 'src/app/domain/errors/nurse-does-not-exist';
import { Nurse } from 'src/app/domain/models/nurse';
import { ILoginService } from 'src/app/domain/protocols/login';

/*
  To-do:
    - [ ] Campos do formulário devem espelhar/interagir com propriedade "user" da LoginPage
    - [ ] Função "login()" deve usar o username e password da propriedade "user" (valores do formulário de login)
    - [X] Criar feedback/alert/diálogo de login/senha incorretos
    - [X] Criar feedback/alert/diálogo de carregamento, enquanto busca o login
    - [X] Se login/senha corretos, redirecionar para "/home"
*/

interface CustomMessage {
  message: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  isLoading: boolean = false;
  error?: CustomMessage = undefined;
  user: Nurse = {} as Nurse

  constructor(
    private loginService: ILoginService,
    private router: Router
  ) {}

  closeAlert = () => {
    this.error = undefined;
  }

  async login() {
    try {
      this.isLoading = true;
      const user = await this.loginService.login('teste', 'teste');
      if (!user) throw new NurseDoesNotExist();
      this.router.navigate(['/home'])
      this.isLoading = false;
    } catch (ex: any) {
      console.log(ex)
      if (typeof ex === typeof (new NurseDoesNotExist())) { this.error = { message: ex.message }; }
      if (!this.error) this.error = { message: "Internal server error" };
      this.isLoading = false;
    }
  }
}
