import { Institutionalized } from '../../domain/models/institutionalized';
import { Observable } from 'rxjs';

export interface IInstitutionalizedRepository {
  get(): Observable<Institutionalized[]>;
  findById(id: string): Observable<Institutionalized>;
  save(institutionalized: Institutionalized): Promise<Institutionalized>;
  update(institutionalized: Institutionalized): Institutionalized;
}
