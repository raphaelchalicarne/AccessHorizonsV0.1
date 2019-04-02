import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';
import { PlaceResultatPage } from '../place-resultat/place-resultat';

import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-resultats',
  templateUrl: 'resultats.html',
})
export class ResultatsPage {
  places: any[] = []; //Les résultats bruts de la requête à J'accede
  adresse: string = '';
  resultat: any[] = []; //Les résultats qui vont être montrés
  resultatFirebase:any[];

  longitud: number;
  latitud:  number;
  filtrage:any = []; //Le filtrage demandé par l'utilisateur
  filtrage2: string;

  selection: number;

  ngOnInit() { //On obtient les valeurs envoyés de la page anterieure
      this.adresse = this.navParams.get('adresse');
      this.longitud = this.navParams.get('longitud');
      this.latitud = this.navParams.get('latitud');
      this.filtrage = this.navParams.get('filtrage');
      this.filtrage2 = this.navParams.get('filtrage2');
      this.selection = this.navParams.get('selection');
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userService: JaccedeProvider,
              private menuCtrl: MenuController) {
  }
  ionViewDidLoad() {
    this.resultatFirebase = this.getLieu(this.adresse, this.filtrage2);
    console.log(this.adresse);
    console.log(this.filtrage2);
    console.log(this.resultatFirebase);
    this.userService.getPlaces(this.longitud, this.latitud) //Requete à J'accede
    .subscribe(
      (data) => {
        this.places = data['items'];
        if (this.filtrage.length == 0) { //S'il y a pas de filtrage, montrer TOUS les resultats
          this.resultat = this.places;
        }
        if (this.filtrage.length != 0) { // Réaliser le filtrage pour montrer les résultats qui coincident
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
    }
  )

  }

   getLieu(ville: string, categorie: string){
   var resultats = [];
   var ref = firebase.database().ref('lieu');
   ref.once("value")
     .then(function(snapshot) {
       snapshot.forEach(function(childSnapshot){
         var data = childSnapshot.val();
         console.log(data);
         if (data.ville == ville && data.categorie == categorie){
           console.log(data);
           resultats.push(data);
           console.log(resultats);
         }
         else{
           console.log('error');
         }
         })
       })
     return resultats;
   }

  goToPlace(name: string, adresse: string, googleID: string){ //Passer à la page de résultats d'une place individuelle
    var selection = this.selection;
    this.navCtrl.push(PlaceResultatPage, {name:name, adresse:adresse, googleID:googleID, selection: selection});
  }

  onToggleMenu() {
      this.menuCtrl.open();
  }
}
