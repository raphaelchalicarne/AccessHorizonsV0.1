import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AjoutaeroportPage } from '../ajoutaeroport/ajoutaeroport';

/**
 * Generated class for the AirportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-airport',
  templateUrl: 'airport.html',
})
export class AirportPage {

	/*aeroport = {
		latitude: 1,
		longitude: 2,
		nom: 'Aeroport test',
		ville: 'Ville'

	};*/

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
  	/*this.db.list('aeroport').push(this.aeroport);*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AirportPage');
  }

  onNewAirport(){
    this.navCtrl.push(AjoutaeroportPage);
  }


  }

