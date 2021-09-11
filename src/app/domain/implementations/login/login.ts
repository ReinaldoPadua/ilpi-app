import { Injectable } from "@angular/core";
import { NurseRepository } from "src/app/infrastructure/implementations/nurseRepository";
import { INurseRepository } from "src/app/infrastructure/protocols/nurse-repository";
import { NurseDoesNotExist } from "../../errors/nurse-does-not-exist";
import { Nurse } from "../../models/nurse";
import { ILoginService } from "../../protocols/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService implements ILoginService {
  constructor(private nurseRepository: NurseRepository) {}

  login(username: String, password: String): Promise<Nurse> {
    const nurse = this.nurseRepository.findByUsernameAndPassword(username, password);
    if (!nurse) throw new NurseDoesNotExist();
    return nurse;
  }
}
