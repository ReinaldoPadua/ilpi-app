import { Nurse } from "../models/nurse";

export interface ILoginService {
  login(username: String, password: String): Nurse;
}
