import { Institutionalized } from '../../domain/models/institutionalized';

export abstract class IInstitutionalizedRepository {
  get(): Promise<Institutionalized[]> { return; };
  findById(id: string): Promise<Institutionalized> { return; };
  save(institutionalized: Institutionalized): Promise<Institutionalized> { return; };
  update(institutionalized: Institutionalized): Promise<Institutionalized> { return; };
}
