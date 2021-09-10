import { Institutionalized } from "../../domain/models/institutionalized";

export interface IInstitutionalizedRepository {
  get(): Array<Institutionalized>;
}
