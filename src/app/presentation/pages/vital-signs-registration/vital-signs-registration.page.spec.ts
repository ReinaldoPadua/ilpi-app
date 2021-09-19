import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { VitalSignsRegistrationPage } from './vital-signs-registration.page';
import { RegisterVitalSignsService } from 'src/app/domain/implementations/register-vital-signs/register-vital-signs';
import { IRegisterVitalSignsService } from 'src/app/domain/protocols/register-vital-signs';
import { By } from '@angular/platform-browser';

describe('Vital Signs Registration Page Test Suite', () => {
  let component: VitalSignsRegistrationPage;
  let fixture: ComponentFixture<VitalSignsRegistrationPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [VitalSignsRegistrationPage],
        imports: [FormsModule, RouterTestingModule],
        providers: [RegisterVitalSignsService, { provide: IRegisterVitalSignsService }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(VitalSignsRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Que a funcionalidade siga os mesmos padrões de interface definidos para toda a solução', async () => {
    const logo = fixture.debugElement.query(By.css('.logo'));
    expect(logo).toBeTruthy();
  });


});
