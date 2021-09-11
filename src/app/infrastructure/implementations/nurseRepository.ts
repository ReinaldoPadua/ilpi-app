import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Nurse } from 'src/app/domain/models/nurse';
import { INurseRepository } from '../protocols/nurse-repository';

@Injectable({
    providedIn: 'root'
})
export class NurseRepository implements INurseRepository {
    private usersCollection: AngularFirestoreCollection<Nurse>

    constructor(private db: AngularFirestore) {
        this.usersCollection = this.db.collection<Nurse>('users')
    }

    async findByUsernameAndPassword(username: String, password: String): Promise<Nurse | undefined> {
      const users = await this.db.collection<Nurse>('users', ref => ref.where("username", "==", username)).get().toPromise();
      const user = users.docs.filter(x => x.data().password == password);
      return (user && user.length > 0) ? user[0].data() : undefined;
    }

}
