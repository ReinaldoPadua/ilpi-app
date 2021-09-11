import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';

import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IGetInstitutionalizedService } from './domain/protocols/get-institutionalized';
import { GetInstitutionalizedService } from './domain/implementations/get-institutionalized/get-institutionalized';
import { IInstitutionalizedRepository } from './infrastructure/protocols/institutionalized-repository';
import { InstitutionalizedRepository } from './infrastructure/implementations/institutionalized-repository';
import { NurseRepository } from './infrastructure/implementations/nurseRepository';
import { INurseRepository } from './infrastructure/protocols/nurse-repository';
import { LoginService } from './domain/implementations/login/login';
import { ILoginService } from './domain/protocols/login';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    AngularFirestore,
    { provide: IGetInstitutionalizedService, useClass: GetInstitutionalizedService },
    { provide: IInstitutionalizedRepository, useClass: InstitutionalizedRepository },
    { provide: INurseRepository, useClass: NurseRepository },
    { provide: ILoginService, useClass: LoginService },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
