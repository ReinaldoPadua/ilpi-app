import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { Institutionalized } from '../../domain/models/institutionalized';

import { IInstitutionalizedRepository } from '../protocols/institutionalized-repository';

import { Injectable } from '@angular/core';

@Injectable()
export class InstitutionalizedRepository implements IInstitutionalizedRepository {
  private institutionalizedCollection: AngularFirestoreCollection<Institutionalized>;

  constructor(private db: AngularFirestore) {
    this.institutionalizedCollection = db.collection<Institutionalized>('institutionalized');
  }

  async save(institutionalized: Institutionalized) {
    const id = await this.create(institutionalized);
    institutionalized.id = id;
    return institutionalized;
  }

  update(institutionalized: Institutionalized) {
    this.institutionalizedCollection.doc(institutionalized.id).update(institutionalized);
    return institutionalized;
  }

  get() {
    return this.institutionalizedCollection.valueChanges({ idField: 'id' });
  }

  findById(id: string) {
    return this.institutionalizedCollection.doc(id).valueChanges({ idField: 'id' });
  }

  private create(institutionalized: Institutionalized) {
    return new Promise<any>((resolve, reject) => {
      this.institutionalizedCollection.add(institutionalized).then(
        (res) => {
          resolve(res.id);
        },
        (err) => reject(err)
      );
    });
  }
}
