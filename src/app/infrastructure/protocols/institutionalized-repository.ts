import { Institutionalized } from '../../domain/models/institutionalized';

export interface IInstitutionalizedRepository {
  get(): Promise<Institutionalized[]>;
  findById(id: string): Promise<Institutionalized>;
  save(institutionalized: Institutionalized): Promise<Institutionalized>;
  update(institutionalized: Institutionalized): Promise<Institutionalized>;
}
