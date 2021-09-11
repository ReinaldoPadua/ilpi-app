import { IInstitutionalizedRepository } from "src/app/infrastructure/protocols/institutionalized-repository";
import { makeInstitutionalizedStub, MOCK_INSTITUTIONALIZED_LIST } from "../__mocks__/institutionalized-repository-stub";
import { GetInstitutionalizedService } from "./get-institutionalized";

interface ISutTypes {
  sut: GetInstitutionalizedService;
  institutionalizedRepoStub: IInstitutionalizedRepository;
}

const makeSut = (): ISutTypes => {
  const institutionalizedRepoStub = makeInstitutionalizedStub();
  const sut = new GetInstitutionalizedService(institutionalizedRepoStub);
  return { sut, institutionalizedRepoStub };
};

describe('Get Institutionalized Service Test Suite', () => {
  it('Should return all institutionalized from repository', async () => {
    const { sut, institutionalizedRepoStub } = makeSut();
    const expected = MOCK_INSTITUTIONALIZED_LIST;
    spyOn(institutionalizedRepoStub, 'get').and.returnValue(new Promise(resolve => resolve(expected)));
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
