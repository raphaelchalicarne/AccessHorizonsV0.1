import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})

export class TestPage {
  //lieu: FirebaseListObservable<any[]>;
  resultat: FirebaseListObservable<any[]>;
  newItem = '';
  item: any;
  lieu: FirebaseObjectObservable<any>;
  name: string;

 
  constructor(public navCtrl: NavController, public params: NavParams, public firebaseProvider: FirebaseProvider, public db: AngularFireDatabase) {
    //this.lieu = this.firebaseProvider.getLieuItems();
    this.resultat = this.firebaseProvider.getLieuResultats();
    console.log('save1');
    console.log(this.lieu);
    this.lieu = this.db.object('/lieu');
  }
  
  getLieuItemsParNom(nom: string){
   //  var ref = firebase.database().ref('lieu/').child("Nom");
   //  ref.on("value", function(snapshot) {
   // console.log(snapshot.val());
   var item;
   for (item in this.lieu){
     console.log(item)
   }


    //let lieu = this.params.get('lieu');
    //console.log(lieu);
    //console.log(lieu.name);
    var k;
    //console.log(this.lieu.name);
    // let path = 'lieu/name';
    // this.item = this.db.object(path);
    // this.item.subscribe(snapshot => {
    //   this.handleItemData(snapshot);
    // })
    // for (k in this.db.object('lieu/name')){
    //   console.log(k);
      //let lieu = this.params.get('lieu')
      //this.item = this.db.list('/lieu/')[k];
      //console.log(lieu.name.value);
      //if (lieu[k].nom == 'Orly'){
        //console.log(this.db.list('/resultats/'));
        //this.db.list('/resultats/').push(lieu);
        //this.resultat = this.firebaseProvider.getLieuResultats();
        //console.log('resultat ajoute');
  
     //}

    }

    // handleItemData(snapshot){
    //   this.name = snapshot.val().name;
    // }


getNom(){
  return this.db.object('lieu/{name}');
  console.log(this.db.object('lieu/{name}'));
}

  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }
 
  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }

  ionViewDidLoad() {
    //console.log(this.lieu);
    console.log(this.db.object('lieu/{name}'));
  }



}