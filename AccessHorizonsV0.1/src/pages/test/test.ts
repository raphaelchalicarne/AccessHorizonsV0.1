import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})

export class TestPage {
  lieu: FirebaseListObservable<any[]>;
  resultat: FirebaseListObservable<any[]>;
  newItem = '';
  item: any;

 
  constructor(public navCtrl: NavController, public params: NavParams, public firebaseProvider: FirebaseProvider, public db: AngularFireDatabase) {
    this.lieu = this.firebaseProvider.getLieuItems();
    this.resultat= this.firebaseProvider.getLieuResultats();
    console.log('save1');
  }
  
  getLieuItemsParNom(nom: string){
    let lieu = params.get('lieu');
    var k;
    for (k in lieu){
      //this.item = this.db.list('/lieu/')[k];
      //console.log(this.item);
      if (lieu[k].nom == 'Orly'){
        console.log(this.db.list('/resultats/'));
        this.db.list('/resultats/').push(lieu);
        //this.resultat = this.firebaseProvider.getLieuResultats();
        console.log('resultat ajoute');
  
      }

    }

  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }
 
  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }

  ionViewDidLoad() {
    //console.log(this.lieu);
  }



}