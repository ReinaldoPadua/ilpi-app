import { InjectionToken } from '@angular/core';
import { Nurse } from "../models/nurse";

export interface ILoginService {
  login(username: String, password: String): Promise<Nurse>;
}

export const I_LOGIN_SERVICE = new InjectionToken<ILoginService>('ILoginService');
