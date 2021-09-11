import { Nurse } from "src/app/domain/models/nurse";

export abstract class INurseRepository {
  findByUsernameAndPassword(username: String, password: String): Promise<Nurse | undefined> { return; };
}
