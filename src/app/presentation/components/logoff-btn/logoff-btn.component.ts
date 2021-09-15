import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'logoff-btn',
  templateUrl: './logoff-btn.component.html',
  styleUrls: []
})
export class LogoffBtnComponent {

  constructor(
    private router: Router
  ) { }

  logoff() {
    sessionStorage.removeItem("ilpiAppLoggedUser");
    this.router.navigate(['/login']);
  }
}
