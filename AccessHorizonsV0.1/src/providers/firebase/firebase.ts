import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
 
@Injectable()
export class FirebaseProvider {
  resultat = {};
 
  constructor(public db: AngularFireDatabase) { }
 
  getLieuItems() {
    return this.db.list('/lieu/');
  }

  getLieuResultats(){
    this.db.list('/resultats/').push(this.resultat);
    return this.db.list('/resultats/');
  }
 
  addItem(name) {
    this.db.list('/lieu/').push(name);
  }
 
  removeItem(id) {
    this.db.list('/lieu/').remove(id);
  }
}