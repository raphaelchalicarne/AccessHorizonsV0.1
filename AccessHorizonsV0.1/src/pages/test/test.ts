import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import * as firebase from 'firebase';


@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})

export class TestPage {
  lieu: FirebaseListObservable<any[]>;
  resultats = [];

 
  constructor(public navCtrl: NavController, public params: NavParams, public firebaseProvider: FirebaseProvider, public db: AngularFireDatabase) {
    this.resultats = this.firebaseProvider.getLieu('Lyon','Activites');
    console.log('save1');
    console.log(this.resultats);

  } 
  
  // getLieuItemsFiltre(ville: string, categorie: string){
  //  var resultats = [];
  //  console.log(resultats);
  //  var ref = firebase.database().ref('lieu');
  //  ref.once("value")
  //    .then(function(snapshot) {
  //      snapshot.forEach(function(childSnapshot){
  //        var data = childSnapshot.val();
  //        if (data.nom == ville && data.categorie == categorie){
  //          console.log(data);
  //          resultats.push(data);
  //          console.log(resultats);
  //        }
  //        })
  //      })
  //    this.resultats = resultats;
  //  }




  ionViewDidLoad() {
    //console.log(this.lieu);
    //console.log(this.db.object('lieu/{name}'));

  }



}