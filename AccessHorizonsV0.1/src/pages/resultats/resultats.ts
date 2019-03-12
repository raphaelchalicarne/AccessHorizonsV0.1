import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';
import { PlaceResultatPage } from '../place-resultat/place-resultat';

@IonicPage()
@Component({
  selector: 'page-resultats',
  templateUrl: 'resultats.html',
})
export class ResultatsPage {
  places: any[] = []; //Les résultats de la requête à J'accede
  longitud: number; 
  latitud:  number;
  adresse: string = '';
  resultat: any[] = []; //Les résultats qui vont être montrés 
  filtrage:any = []; //Le filtrage demandé par l'utilisateur

  ngOnInit() { //On obtient les valeurs de la page anterieure
      this.adresse = this.navParams.get('adresse');
      this.longitud = this.navParams.get('longitud');
      this.latitud = this.navParams.get('latitud');
      this.filtrage = this.navParams.get('filtrage');
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: JaccedeProvider) {
  }
  ionViewDidLoad() {
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
  goToPlace(name: string, adresse: string, googleID: string){ //Passer à la page de résultats d'une place individuelle
    this.navCtrl.push(PlaceResultatPage, {name:name, adresse:adresse, googleID:googleID});
  }
  
}
