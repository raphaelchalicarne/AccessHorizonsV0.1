import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';
import { PlaceResultPage } from '../place-result/place-result';
//import {ResultModalPage} from '../result-modal/result-modal';
=======
import { IonicPage, NavController} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the AirportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
>>>>>>> origin/Gaëlle

@IonicPage()
@Component({
  selector: 'page-airport',
  templateUrl: 'airport.html',
})
export class AirportPage {
  places: any[] = [];
  longitud: number; 
  latitud:  number;
  adresse: string = '';
  resultado: any[] = [];

<<<<<<< HEAD
  ngOnInit() {
      this.adresse = this.navParams.get('adresse');
      this.longitud = this.navParams.get('longitud');
      this.latitud = this.navParams.get('latitud');
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: JaccedeProvider) {
=======
	aeroport = {
		latitude: 1,
		longitude: 2,
		nom: 'Aeroport test',
		ville: 'Ville'

	};

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
  	this.db.list('aeroport').push(this.aeroport);
>>>>>>> origin/Gaëlle
  }

  ionViewDidLoad() {
    this.userService.getPlaces(this.longitud, this.latitud)
    .subscribe(
      (data) => { 
        this.places = data['items'];
        console.log(data)
      },
      (error) =>{
        console.error(error);
      })
  }
  //adresse: string
  /*showPlace(){
    let nombre = 
    let modal = this.modalCtrl.create(ResultModalPage, {data: nombre});
    modal.present();
  }*/
  goToPlace(name: string, adresse: string){
    this.navCtrl.push(PlaceResultPage, {name:name, adresse:adresse});
  }
}
