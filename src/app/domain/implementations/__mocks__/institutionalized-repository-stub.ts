import { IInstitutionalizedRepository } from "src/app/infrastructure/protocols/institutionalized-repository";
import { Institutionalized } from "../../models/institutionalized";

export const MOCK_INSTITUTIONALIZED: Institutionalized = {
  id: 'mock_id',
  username: 'mock_login',
  password: 'mock_password',
  name: 'mock institutionalized 1',
  enrollment: '001',
  clinicalHistory: [],
};

export const MOCK_INSTITUTIONALIZED_LIST: Array<Institutionalized> = [MOCK_INSTITUTIONALIZED];

export const makeInstitutionalizedStub = (): IInstitutionalizedRepository => {
  class InstitutionalizedRepository implements IInstitutionalizedRepository {
    get(): Promise<Institutionalized[]> {
      return new Promise(resolve => resolve(MOCK_INSTITUTIONALIZED_LIST));
    }

    async findById(id: String): Promise<Institutionalized> {
      return new Promise(resolve => resolve({ ...MOCK_INSTITUTIONALIZED, id: id.toString() }));
    }

    async update(institutionalized: Institutionalized): Promise<Institutionalized> {
      return new Promise(resolve => resolve(institutionalized));
    }

    async save(institutionalized: Institutionalized): Promise<Institutionalized> {
      return new Promise(resolve => resolve(institutionalized));
    }
  }

  return new InstitutionalizedRepository();
}
