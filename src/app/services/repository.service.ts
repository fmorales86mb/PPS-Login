import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private firestoreDb: AngularFirestore, private authDb: AngularFireAuth) { }

  public GetAll(){
    return this.firestoreDb.collection('test').doc('dV9oVyJk85jeOfZcUXgC').get();
  }

  public SetItem(){
    this.firestoreDb.collection('test').doc('nuevo').set({name:'prueba set'});
  }

  public Authenticate(){
    return this.authDb.signInWithEmailAndPassword('test@test.com', 'test123');
  }

}
