import { INurseRepository } from "src/app/infrastructure/protocols/nurse-repository";
import { NurseDoesNotExist } from "../../errors/nurse-does-not-exist";
import { Nurse } from "../../models/nurse";
import { LoginService } from "./login";

interface ISutTypes {
  sut: LoginService;
  nurseRepositoryStub: INurseRepository;
}

const MOCK_NURSE: Nurse = {
  id: 'mock_id',
  username: 'mock_login',
  password: 'mock_password',
  name: 'mock nurse name',
  corenNumber: '0001',
}

const makeNurseRepositoryStub = (): INurseRepository => {
  class NurseRepository implements INurseRepository {
    async findByUsernameAndPassword(username: String, password: String): Promise<Nurse | undefined> {
      return new Promise(resolve => resolve(MOCK_NURSE));
    }
  }

  return new NurseRepository();
}

const makeSut = (): ISutTypes => {
  const nurseRepositoryStub = makeNurseRepositoryStub();
  const sut = new LoginService(nurseRepositoryStub);
  return { sut, nurseRepositoryStub };
};

describe('Login Service Test Suite', () => {
  it('Should return existing nurse', async () => {
    const { sut, nurseRepositoryStub } = makeSut();
    const expected = MOCK_NURSE;
    spyOn(nurseRepositoryStub, 'findByUsernameAndPassword').and.returnValue(new Promise(resolve => resolve(expected)));
    const response = await sut.login('mock_username', 'mock_password');
    expect(response).toEqual(expected);
  });

  it('Should throw custom error if nurse does not exist', () => {
    const { sut, nurseRepositoryStub } = makeSut();
    spyOn(nurseRepositoryStub, 'findByUsernameAndPassword').and.returnValue(null);
    expect(() => { sut.login('mock_username', 'mock_password') }).toThrow(new NurseDoesNotExist());
  });

  it('Should call login method from nurse repository with provided username and password', () => {
    const { sut, nurseRepositoryStub } = makeSut();
    const expected = MOCK_NURSE;
    spyOn(nurseRepositoryStub, 'findByUsernameAndPassword').and.returnValue(new Promise(resolve => resolve(expected)));
    sut.login('mock_username', 'mock_password');
    expect(nurseRepositoryStub.findByUsernameAndPassword).toHaveBeenCalledWith('mock_username', 'mock_password');
  });
});
