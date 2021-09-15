import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { NurseDoesNotExist } from 'src/app/domain/errors/nurse-does-not-exist';
import { ILoginService } from 'src/app/domain/protocols/login';

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

  loginData = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private loginService: ILoginService,
    private router: Router
  ) {}

  closeAlert = () => {
    this.error = undefined;
  }

  async login() {
    const { username, password } = this.loginData.value;
    try {
      this.isLoading = true;
      const user = await this.loginService.login(username, password);
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
