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
  places: any[] = [];
  longitud: number; 
  latitud:  number;
  adresse: string = '';
  resultat: any[] = [];
  filtrage:any = [];

  ngOnInit() {
      this.adresse = this.navParams.get('adresse');
      this.longitud = this.navParams.get('longitud');
      this.latitud = this.navParams.get('latitud');
      this.filtrage = this.navParams.get('filtrage');
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: JaccedeProvider) {
  }
  ionViewDidLoad() {
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
    }
  )
  }
  goToPlace(name: string, adresse: string, googleID: string){
    this.navCtrl.push(PlaceResultatPage, {name:name, adresse:adresse, googleID:googleID});
  }
  
}
