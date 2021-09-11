import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { InstitutionalizedRepository } from '../infrastructure/implementations/institutionalized-repository';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public messages: any[];

  constructor(
    private data: DataService,
    private institutionalizedRepository: InstitutionalizedRepository
  ) {}

  ngOnInit() {
    console.log('ngOnInit');
    const response = this.institutionalizedRepository.get();
    response.subscribe((res) => {
      console.log(res[0]);
      this.messages = res;
    });

    const response2 = this.institutionalizedRepository.findById('togPI6eg7cpZPIqBzFgH');
    response2.subscribe((res) => {
      res.name = `velhinho + ${new Date()}`;
      const response3 = this.institutionalizedRepository.update(res);
      this.messages.push(response3);
    });
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 30000);
  }
}
