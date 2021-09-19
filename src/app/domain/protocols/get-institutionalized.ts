import { Institutionalized } from "../models/institutionalized";

export abstract class IGetInstitutionalizedService {
  get(): Promise<Institutionalized[]> { return; };
}
