import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AirportPage } from '../airport/airport';
/**
 * Generated class for the TransportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transports',
  templateUrl: 'transports.html',
})
export class TransportsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportsPage');
  }
  goToAirports(){
  	this.navCtrl.push(AirportPage)
  }
}
