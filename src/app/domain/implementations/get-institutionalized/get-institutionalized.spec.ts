import { IInstitutionalizedRepository } from "src/app/infrastructure/protocols/institutionalized-repository";
import { Institutionalized } from "../../models/institutionalized";
import { GetInstitutionalizedService } from "./get-institutionalized";

interface ISutTypes {
  sut: GetInstitutionalizedService;
  institutionalizedRepoStub: IInstitutionalizedRepository;
}

const MOCK_INSTITUTIONALIZED_LIST: Array<Institutionalized> = [
  {
    id: 'mock_id',
    username: 'mock_login',
    password: 'mock_password',
    name: 'mock institutionalized 1',
    enrollment: '001',
    clinicalHistory: [],
  }
];

const makeInstitutionalizedStub = (): IInstitutionalizedRepository => {
  class InstitutionalizedRepository implements IInstitutionalizedRepository {
    get(): Array<Institutionalized> {
      return MOCK_INSTITUTIONALIZED_LIST;
    }
  }

  return new InstitutionalizedRepository();
}

const makeSut = (): ISutTypes => {
  const institutionalizedRepoStub = makeInstitutionalizedStub();
  const sut = new GetInstitutionalizedService(institutionalizedRepoStub);
  return { sut, institutionalizedRepoStub };
};

describe('Get Institutionalized Service Test Suite', () => {
  it('Should return all institutionalized from repository', () => {
    const { sut, institutionalizedRepoStub } = makeSut();
    const expected = MOCK_INSTITUTIONALIZED_LIST;
    spyOn(institutionalizedRepoStub, 'get').and.returnValue(expected);
    const response = sut.get();
    expect(response).toEqual(expected);
  });

  it("Should call the institutionalized repository get method", () => {
    const { sut, institutionalizedRepoStub } = makeSut();
    spyOn(institutionalizedRepoStub, 'get')
    sut.get();
    expect(institutionalizedRepoStub.get).toHaveBeenCalledWith();
  })
});
