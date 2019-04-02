import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';
import { PlaceResultatPage } from '../place-resultat/place-resultat';
import { FirebaseProvider } from '../../providers/firebase/firebase';

import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-resultats',
  templateUrl: 'resultats.html',
})
export class ResultatsPage {
  places: any[] = [];
  longitud: number; 
  latitud:  number;
  name: string = '';
  resultat: any[] = [];
  resultatFirebase: any[];
  filtrage:any = [];
  filtrage2: string;
  osm: any;

  ngOnInit() {
      this.name = this.navParams.get('name');
      this.longitud = this.navParams.get('longitud');
      this.latitud = this.navParams.get('latitud');
      this.filtrage = this.navParams.get('filtrage');
      this.filtrage2 = this.navParams.get('filtrage2');
      this.osm = this.navParams.get('osm');
      console.log(this.osm);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: JaccedeProvider, public firebaseProvider: FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log('Resultats1');
    console.log(this.name);
    console.log(this.filtrage2);
    this.resultatFirebase = this.getLieu(this.name, this.filtrage2);
    console.log(this.resultatFirebase);
    // if (this.resultatFirebase == []){
    //   console.log('Recherche Jaccede');
    this.userService.getPlaces(this.longitud, this.latitud)
      .subscribe(
        (data) => { 
          this.places = data['items'];
          if (this.filtrage.length == 0) {
            this.resultat = this.places;
          }
          if (this.filtrage.length != 0) {
          var i;
            for (i in this.places){
              if (this.filtrage.includes(this.places[i].category.name)) {
                this.resultat.push(this.places[i]);
            }
          }
        }
      (error) =>{
        console.error(error);
      }
    })
  // }
  
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
     return resultats;
   }

  goToPlace(name: string, adresse: string, googleID: string){
    this.navCtrl.push(PlaceResultatPage, {name:name, adresse:adresse, googleID:googleID});
  }
  
}
