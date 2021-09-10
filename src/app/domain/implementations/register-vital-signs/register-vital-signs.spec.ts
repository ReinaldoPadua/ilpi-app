import { IInstitutionalizedRepository } from "src/app/infrastructure/protocols/institutionalized-repository";
import { InstitutionalizedDoesNotExist } from "../../errors/institutionalized-does-not-exist";
import { VitalSigns } from "../../models/vital-signs";
import { makeInstitutionalizedStub, MOCK_INSTITUTIONALIZED } from "../__mocks__/institutionalized-repository-stub";
import { RegisterVitalSignsService } from "./register-vital-signs";

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
  return { sut, institutionalizedRepoStub }
}

describe('Register Vital Signs Service Test Suite', () => {
  it('Should return updated institutionalized with collected vital signs', () => {
    const expected = MOCK_INSTITUTIONALIZED;
    const { sut, institutionalizedRepoStub } = makeSut();
    spyOn(institutionalizedRepoStub, 'update').and.returnValue(expected);
    const response = sut.register(MOCK_VITAL_SIGNS, expected.id);
    expect(response).toEqual(expected);
  });

  it('Should return custom error if provided institutionalized does not exist', () => {
    const { sut, institutionalizedRepoStub } = makeSut();
    spyOn(institutionalizedRepoStub, 'findById').and.returnValue(null);
    expect(() => { sut.register(MOCK_VITAL_SIGNS, 'mock_id') }).toThrow(
      new InstitutionalizedDoesNotExist('mock_id')
    );
  });

  it('Should call the findById method from the institutionalized repository with the provided id', () => {
    const { sut, institutionalizedRepoStub } = makeSut();
    spyOn(institutionalizedRepoStub, 'findById').and.returnValue(MOCK_INSTITUTIONALIZED);
    sut.register(MOCK_VITAL_SIGNS, 'mock_id');
    expect(institutionalizedRepoStub.findById).toHaveBeenCalledWith('mock_id');
  });

  it('Should call the update method from the repository with the updated institutionalized', () => {
    const { sut, institutionalizedRepoStub } = makeSut();
    spyOn(institutionalizedRepoStub, 'update')
    spyOn(institutionalizedRepoStub, 'findById').and.returnValue({ ...MOCK_INSTITUTIONALIZED });
    sut.register(MOCK_VITAL_SIGNS, 'mock_id');
    const expected = {
      ...MOCK_INSTITUTIONALIZED,
      clinicalHistory: [...MOCK_INSTITUTIONALIZED.clinicalHistory, MOCK_VITAL_SIGNS],
    };
    expect(institutionalizedRepoStub.update).toHaveBeenCalledWith(expected);
  });
});
