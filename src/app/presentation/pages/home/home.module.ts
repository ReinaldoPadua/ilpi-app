import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IGetInstitutionalizedService } from 'src/app/domain/protocols/get-institutionalized';
import { GetInstitutionalizedService } from 'src/app/domain/implementations/get-institutionalized/get-institutionalized';
import { InstitutionalizedRepository } from 'src/app/infrastructure/implementations/institutionalized-repository';
import { IInstitutionalizedRepository } from 'src/app/infrastructure/protocols/institutionalized-repository';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  /*providers: [
    AngularFirestore,
    { provide: IGetInstitutionalizedService, useExisting: GetInstitutionalizedService },
    { provide: IInstitutionalizedRepository, useExisting: InstitutionalizedRepository }
  ]*/
})
export class HomePageModule {}
