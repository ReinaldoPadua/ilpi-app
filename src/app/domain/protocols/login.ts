import { InjectionToken } from '@angular/core';
import { Nurse } from "../models/nurse";

export abstract class ILoginService {
  login(username: String, password: String): Promise<Nurse> { return; };
}
