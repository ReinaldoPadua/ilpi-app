import { Component, Inject, OnInit } from '@angular/core';
import { IGetInstitutionalizedService } from 'src/app/domain/protocols/get-institutionalized';
import { GetInstitutionalizedService } from '../../../domain/implementations/get-institutionalized/get-institutionalized';
import { Institutionalized } from '../../../domain/models/institutionalized';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public institutionalized: Institutionalized[];

  constructor(
    private getInstitutionalizedService: IGetInstitutionalizedService
  ) {}

  ngOnInit() {
    this.getInstitutionalizedService.get().then((data) => {
      this.institutionalized = data;
    });
  }
}
