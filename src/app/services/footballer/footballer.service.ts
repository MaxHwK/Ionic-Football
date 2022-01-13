import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Footballer } from 'src/app/models/footballer.model';

@Injectable({
  providedIn: 'root'
})

export class FootballerService {
  private dbPath = '/footballers';
  footballersRef: AngularFirestoreCollection<Footballer>;

  constructor(
    private db: AngularFirestore
  ) {
    this.footballersRef = db.collection(this.dbPath);
  }

  getAllFootballers(): any {
    return this.footballersRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
            return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewFootballers(footballer: Footballer): any {
    return new Observable(obs => {
      this.footballersRef.add({...footballer}).then(() => {
        obs.next();
      })
    })
  }

  get(id: any): any {
    return new Observable(obs => {
      this.footballersRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(footballer: Footballer) {
    return new Observable(obs => {
      this.footballersRef.doc(footballer.id).update(footballer);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`footballers/${id}`).delete();
  }
}
