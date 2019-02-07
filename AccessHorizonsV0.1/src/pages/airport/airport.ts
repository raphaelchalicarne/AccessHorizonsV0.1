import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';

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
  flag: boolean= false;

  ngOnInit() {
      this.adresse = this.navParams.get('adresse');
      this.longitud = this.navParams.get('longitud');
      this.latitud = this.navParams.get('latitud');
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: JaccedeProvider) {
  }

  ionViewDidLoad() {
    this.userService.getPlaces(this.longitud, this.latitud)
    .subscribe(
      (data) => { // Success
        this.places = data['items'];
        //console.log(data)
      },
      (error) =>{
        console.error(error);
      })
  }
}
