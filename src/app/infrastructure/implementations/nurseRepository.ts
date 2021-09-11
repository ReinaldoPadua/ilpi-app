import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Nurse } from 'src/app/domain/models/nurse';
import { INurseRepository } from '../protocols/nurse-repository';

@Injectable({
    providedIn: 'root'
})

export class NurseService implements INurseRepository {
    private usersCollection: AngularFirestoreCollection<Nurse>
    private users: Observable<Nurse[]>
    private nurse: Nurse
    constructor(private db: AngularFirestore) {
        this.usersCollection = db.collection<Nurse>('users')
    }

    findByUsernameAndPassword(username: String, password: String) {
        this.users = this.usersCollection.valueChanges({ username: username, password: password })
        this.users.subscribe(res => {
            this.nurse = res[0]
        })

        return this.nurse
    }

}
