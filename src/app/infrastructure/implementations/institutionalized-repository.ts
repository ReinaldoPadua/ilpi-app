import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Institutionalized } from '../../domain/models/institutionalized';
import { IInstitutionalizedRepository } from '../protocols/institutionalized-repository';
import { Injectable, InjectionToken } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InstitutionalizedRepository implements IInstitutionalizedRepository {
  private institutionalizedCollection: AngularFirestoreCollection<Institutionalized>;

  constructor(private db: AngularFirestore) {
    this.institutionalizedCollection = this.db.collection<Institutionalized>('institutionalized');
  }

  async get(): Promise<Institutionalized[]> {
    const institutionalizeds = await this.institutionalizedCollection.get().toPromise();
    return institutionalizeds.docs.map(x => x.data()) as Institutionalized[];
  }

  async findById(id: string): Promise<Institutionalized> {
    return this.institutionalizedCollection.doc(id).valueChanges({ idField: 'id' }).toPromise();
  }

  async save(institutionalized: Institutionalized): Promise<Institutionalized> {
    const id = await this.create(institutionalized);
    institutionalized.id = id.toString();
    return institutionalized;
  }

  async update(institutionalized: Institutionalized): Promise<Institutionalized> {
    this.institutionalizedCollection.doc(institutionalized.id.toString()).update(institutionalized);
    return institutionalized;
  }

  private async create(institutionalized: Institutionalized): Promise<String> {
    return (await this.institutionalizedCollection.add(institutionalized)).id;
  }
}
