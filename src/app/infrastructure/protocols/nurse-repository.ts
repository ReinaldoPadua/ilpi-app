import { Nurse } from "src/app/domain/models/nurse";

export interface INurseRepository {
  findByUsernameAndPassword(username: String, password: String): Nurse | undefined;
}
