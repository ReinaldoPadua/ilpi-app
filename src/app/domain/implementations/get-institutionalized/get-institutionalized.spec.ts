import { IInstitutionalizedRepository } from 'src/app/infrastructure/protocols/institutionalized-repository';
import {
  makeInstitutionalizedStub,
  MOCK_INSTITUTIONALIZED_LIST,
} from '../__mocks__/institutionalized-repository-stub';
import { GetInstitutionalizedService } from './get-institutionalized';

interface ISutTypes {
  sut: GetInstitutionalizedService;
  institutionalizedRepoStub: IInstitutionalizedRepository;
}

const makeSut = (): ISutTypes => {
  const institutionalizedRepoStub = makeInstitutionalizedStub();
  const sut = new GetInstitutionalizedService(institutionalizedRepoStub);
  return { sut, institutionalizedRepoStub };
};

describe('Que o institucionalizado esteja cadastrado na solução e Que eu possa escolher um institucionalizado para coletar os sinais vitais', () => {
  it('Should return all institutionalized from repository', async () => {
    const { sut, institutionalizedRepoStub } = makeSut();
    const expected = MOCK_INSTITUTIONALIZED_LIST;
    spyOn(institutionalizedRepoStub, 'get').and.returnValue(
      new Promise((resolve) => resolve(expected))
    );
    const response = await sut.get();
    expect(response).toEqual(expected);
  });

  it('Should call the institutionalized repository get method', () => {
    const { sut, institutionalizedRepoStub } = makeSut();
    spyOn(institutionalizedRepoStub, 'get');
    sut.get();
    expect(institutionalizedRepoStub.get).toHaveBeenCalledWith();
  });
});
