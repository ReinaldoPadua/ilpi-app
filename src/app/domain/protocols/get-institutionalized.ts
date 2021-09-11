import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { Institutionalized } from "../models/institutionalized";

export interface IGetInstitutionalizedService {
  get(): Promise<Institutionalized[]>;
}
