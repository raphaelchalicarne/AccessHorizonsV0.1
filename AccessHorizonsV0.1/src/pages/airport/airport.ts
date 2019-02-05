import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';
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
  places: any[] = [];
  constructor(public navCtrl: NavController, public userService: JaccedeProvider) {
  }

  ionViewDidLoad() {
    this.userService.getPlaces()
    .subscribe(
      (data) => { // Success
        this.places = data['items'];
        console.log(data)
      },
      (error) =>{
        console.error(error);
      })
  }

}
