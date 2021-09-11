import { Component, Inject, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { InstitutionalizedRepository } from '../infrastructure/implementations/institutionalized-repository';
import { IGetInstitutionalizedService } from '../domain/protocols/get-institutionalized';
import { GetInstitutionalizedService } from '../domain/implementations/get-institutionalized/get-institutionalized';
import { Institutionalized } from '../domain/models/institutionalized';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public institutionalized: Institutionalized[];

  constructor(
    private getInstitutionalizedService: GetInstitutionalizedService
  ) {}

  ngOnInit() {
    this.getInstitutionalizedService.get().then((data) => {
      this.institutionalized = data;
    });
  }
}
