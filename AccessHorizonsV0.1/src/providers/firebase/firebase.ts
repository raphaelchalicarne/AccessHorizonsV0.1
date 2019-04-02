import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
 
import * as firebase from 'firebase'; 

@Injectable()
export class FirebaseProvider {
  lieu: FirebaseListObservable<any[]>;
  resultats = [];
 
  constructor(public db: AngularFireDatabase) {
    this.lieu = this.db.list('/lieu/');
  }

  getLieu(ville: string, categorie: string){
   var resultats = [];
   var ref = firebase.database().ref('lieu');
   ref.once("value")
     .then(function(snapshot) {
       snapshot.forEach(function(childSnapshot){
         var data = childSnapshot.val();
         if (data.nom == ville && data.categorie == categorie){
           console.log(data);
           resultats.push(data);
           console.log(resultats);
         }
         })
       })
     this.resultats = resultats;
     return this.resultats;
   }
 

}