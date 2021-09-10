import { Institutionalized } from "../../domain/models/institutionalized";

export interface IInstitutionalizedRepository {
  get(): Array<Institutionalized>;
  findById(id: String): Institutionalized;
  update(institutionalized: Institutionalized): Institutionalized;
}
