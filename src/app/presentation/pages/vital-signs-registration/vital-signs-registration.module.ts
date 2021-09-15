import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { VitalSignsRegistrationPage } from './vital-signs-registration.page';
import { VitalSignsRegistrationPageRoutingModule } from './vital-signs-registration-routing.module';
import { LogoffBtnComponentModule } from './../../components/logoff-btn/logoff-btn.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VitalSignsRegistrationPageRoutingModule,
    LogoffBtnComponentModule
  ],
  declarations: [VitalSignsRegistrationPage]
})
export class VitalSignsRegistrationPageModule {

  constructor(private router: Router) { }

  back() {
    this.router.navigate(['/home'])
  }

}
