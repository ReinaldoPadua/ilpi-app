import { Component, OnInit } from '@angular/core';
import { IGetInstitutionalizedService } from 'src/app/domain/protocols/get-institutionalized';
import { Institutionalized } from '../../../domain/models/institutionalized';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isLoading = true;
  institutionalized: Institutionalized[] = [];

  constructor(
    private getInstitutionalizedService: IGetInstitutionalizedService,
    private router: Router
  ) {}

  ngOnInit() {
    const user = sessionStorage.getItem('ilpiAppLoggedUser');
    if (!user || user === '' || user === null) {
      this.router.navigate(['/login']);
    }
    this.getInstitutionalizedService.get().then((data) => {
      console.log(data);
      this.institutionalized = data;
      this.isLoading = false;
    });
  }

  selectInstitutionalized(id: string) {
    this.router.navigate(['/vitalSigns/' + id]);
  }
}
