import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { LoaderComponentModule } from './../../components/loader/loader.module';
import { AlertComponentModule } from './../../components/alert/alert.module';
import { LogoffBtnComponentModule } from './../../components/logoff-btn/logoff-btn.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    LoaderComponentModule,
    AlertComponentModule,
    LogoffBtnComponentModule
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
