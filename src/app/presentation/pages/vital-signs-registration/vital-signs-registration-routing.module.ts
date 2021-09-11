import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VitalSignsRegistrationPage } from './vital-signs-registration.page';

const routes: Routes = [
  {
    path: '',
    component: VitalSignsRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VitalSignsRegistrationPageRoutingModule {}
