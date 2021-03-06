import { Injectable } from '@angular/core';
import { INurseRepository } from 'src/app/infrastructure/protocols/nurse-repository';
import { NurseDoesNotExist } from '../../errors/nurse-does-not-exist';
import { Nurse } from '../../models/nurse';
import { ILoginService } from '../../protocols/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements ILoginService {
  constructor(private nurseRepository: INurseRepository) {}

  async login(username: string, password: string): Promise<Nurse> {
    const nurse = await this.nurseRepository.findByUsernameAndPassword(username, password);
    if (!nurse) {
      throw new NurseDoesNotExist();
    }
    return nurse;
  }
}
