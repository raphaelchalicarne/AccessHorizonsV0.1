import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransportsPage} from '../transports/transports';
/**
 * Generated class for the MenuServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-services',
  templateUrl: 'menu-services.html',
})
export class MenuServicesPage {
  transports = ['airport', 'bus_station', 'subway_station', 'train_station', 'travel_agency', 'car_rental', 'gas_station', 'taxi_stand', 'transit_station', 'taxi_service', 'car_repair'];
  restaurants = [];
  logement = [];
  activites = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuServicesPage');
  }
  goToTransportsPage(selection :number){
    switch (selection) {
      case 1:
        var transports = this.transports;
        this.navCtrl.push(TransportsPage, {filtrage: transports});
        break;     
      case 2:
        var restaurants = this.restaurants;
        this.navCtrl.push(TransportsPage, {filtrage: restaurants});
        break;
      case 3:
        var logement = this.logement;
        this.navCtrl.push(TransportsPage, {filtrage: logement});
        break;
      case 4:
        var activites = this.activites;
        this.navCtrl.push(TransportsPage, {filtrage: activites});
        break;
    }
    /*    if (selection == 1) {
      var transports = this.transports;
      this.navCtrl.push(TransportsPage, {filtrage: transports});
     } 
    if (selection == 2) {
      var restaurants = this.restaurants;
      this.navCtrl.push(TransportsPage, {filtrage: restaurants});
     }
    if (selection == 3) {
      var logement = this.logement;
      this.navCtrl.push(TransportsPage, {filtrage: logement});
     } 
    if (selection == 4) {
      var activites = this.activites;
      this.navCtrl.push(TransportsPage, {filtrage: activites});
     }  */
  }
}
