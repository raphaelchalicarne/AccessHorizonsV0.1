import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';
import { PlaceResultPage } from '../place-result/place-result';
//import {ResultModalPage} from '../result-modal/result-modal';

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
  goToPlace(name: string){
    this.navCtrl.push(PlaceResultPage, {name:name, });
  }
}
