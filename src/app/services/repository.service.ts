import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private firestoreDb: AngularFirestore) { }

  public GetAll(){
    return this.firestoreDb.collection('test').doc('dV9oVyJk85jeOfZcUXgC').get();
  }

  public SetItem(){
    this.firestoreDb.collection('test').doc('nuevo').set({name:'prueba set'});
  }


}
