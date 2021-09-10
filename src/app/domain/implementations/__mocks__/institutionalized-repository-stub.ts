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
    get(): Array<Institutionalized> {
      return MOCK_INSTITUTIONALIZED_LIST;
    }

    findById(id: String): Institutionalized {
      return { ...MOCK_INSTITUTIONALIZED, id } ;
    }

    update(institutionalized: Institutionalized): Institutionalized {
      return institutionalized;
    }
  }

  return new InstitutionalizedRepository();
}
