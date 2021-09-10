import { INurseRepository } from "src/app/infrastructure/protocols/nurse-repository";
import { NurseDoesNotExist } from "../../errors/nurse-does-not-exist";
import { Nurse } from "../../models/nurse";
import { ILoginService } from "../../protocols/login";

export class LoginService implements ILoginService {
  constructor(private readonly nurseRepository: INurseRepository) {}

  login(username: String, password: String): Nurse {
    const nurse = this.nurseRepository.findByUsernameAndPassword(username, password);
    if (!nurse) throw new NurseDoesNotExist();
    return nurse;
  }
}
