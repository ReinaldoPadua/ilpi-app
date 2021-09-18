import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { IInstitutionalizedRepository } from 'src/app/infrastructure/protocols/institutionalized-repository';
import { VitalSignsRegistrationPage } from 'src/app/presentation/pages/vital-signs-registration/vital-signs-registration.page';
import { InstitutionalizedDoesNotExist } from '../../errors/institutionalized-does-not-exist';
import { VitalSigns } from '../../models/vital-signs';
import {
  makeInstitutionalizedStub,
  MOCK_INSTITUTIONALIZED,
} from '../__mocks__/institutionalized-repository-stub';
import { RegisterVitalSignsService } from './register-vital-signs';
import { IRegisterVitalSignsService } from '../../../domain/protocols/register-vital-signs';
interface ISutTypes {
  sut: RegisterVitalSignsService;
  institutionalizedRepoStub: IInstitutionalizedRepository;
}

const MOCK_VITAL_SIGNS: VitalSigns = {
  saturation: 1.2,
  bloodPressure: 1.2,
  heartRate: 1.2,
  respiratoryFrequency: 1.2,
  bodyTemperature: 1.2,
};

const makeSut = (): ISutTypes => {
  const institutionalizedRepoStub = makeInstitutionalizedStub();
  const sut = new RegisterVitalSignsService(institutionalizedRepoStub);
  return { sut, institutionalizedRepoStub };
};

describe('Register Vital Signs Service Test Suite', () => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return updated institutionalized with collected vital signs', async () => {
    const expected = MOCK_INSTITUTIONALIZED;
    const { sut, institutionalizedRepoStub } = makeSut();
    spyOn(institutionalizedRepoStub, 'update').and.returnValue(
      new Promise((resolve) => resolve(expected))
    );
    const response = await sut.register(MOCK_VITAL_SIGNS, expected.id);
    expect(response).toEqual(expected);
  });

  it('Should return custom error if provided institutionalized does not exist', async () => {
    const { sut, institutionalizedRepoStub } = makeSut();
    spyOn(institutionalizedRepoStub, 'findById').and.returnValue(null);
    await expectAsync(sut.register(MOCK_VITAL_SIGNS, 'mock_id')).toBeRejectedWith(
      new InstitutionalizedDoesNotExist('mock_id')
    );
  });

  it('Should call the findById method from the institutionalized repository with the provided id', async () => {
    const { sut, institutionalizedRepoStub } = makeSut();
    spyOn(institutionalizedRepoStub, 'findById').and.returnValue(
      new Promise((resolve) => resolve(MOCK_INSTITUTIONALIZED))
    );
    await sut.register(MOCK_VITAL_SIGNS, 'mock_id');
    expect(institutionalizedRepoStub.findById).toHaveBeenCalledWith('mock_id');
  });

  it('Should call the update method from the repository with the updated institutionalized', async () => {
    const { sut, institutionalizedRepoStub } = makeSut();
    spyOn(institutionalizedRepoStub, 'update');
    spyOn(institutionalizedRepoStub, 'findById').and.returnValue(
      new Promise((resolve) => resolve({ ...MOCK_INSTITUTIONALIZED }))
    );
    await sut.register(MOCK_VITAL_SIGNS, 'mock_id');
    const expected = {
      ...MOCK_INSTITUTIONALIZED,
      clinicalHistory: [...MOCK_INSTITUTIONALIZED.clinicalHistory, MOCK_VITAL_SIGNS],
    };
    expect(institutionalizedRepoStub.update).toHaveBeenCalledWith(expected);
  });
});
