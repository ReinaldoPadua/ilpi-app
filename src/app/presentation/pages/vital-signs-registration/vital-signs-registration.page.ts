import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { VitalSigns } from 'src/app/domain/models/vital-signs';

@Component({
  selector: 'app-vital-signs-registration',
  templateUrl: 'vital-signs-registration.page.html',
  styleUrls: ['vital-signs-registration.page.scss'],
})
export class VitalSignsRegistrationPage {

  constructor() {}

  vitalSigns: VitalSigns = {
    saturation: 0,
    bloodPressure: 0,
    heartRate: 0,
    respiratoryFrequency: 0,
    bodyTemperature: 0,
  }

  logForm() {
    console.log(this.vitalSigns)
  }
}
