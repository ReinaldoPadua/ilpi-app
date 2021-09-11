import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { VitalSignsRegistrationPage } from './vital-signs-registration.page';
import { VitalSignsRegistrationPageRoutingModule } from './vital-signs-registration-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VitalSignsRegistrationPageRoutingModule
  ],
  declarations: [VitalSignsRegistrationPage]
})
export class VitalSignsRegistrationPageModule {}
