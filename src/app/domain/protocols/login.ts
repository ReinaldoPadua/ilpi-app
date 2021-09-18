import { Nurse } from '../models/nurse';

export abstract class ILoginService {
  login(username: string, password: string): Promise<Nurse> {
    return;
  }
}
