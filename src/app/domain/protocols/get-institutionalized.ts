import { Institutionalized } from "../models/institutionalized";

export interface IGetInstitutionalizedService {
  get(): Array<Institutionalized>;
}
