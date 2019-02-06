import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AirportPage } from '../airport/airport';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';

@IonicPage()
@Component({
  selector: 'page-transports',
  templateUrl: 'transports.html',
})
export class TransportsPage {
  adresse: string = "";
  longitud: number; 
  latitud:  number;
  resultat: any[] = [];
  flag: boolean = false;

  constructor(public navCtrl: NavController, public userService: JaccedeProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportsPage');
  }
  faireRecherche(){
    //console.log(this.adresse);
    this.userService.getAutocomplete(this.adresse)
    .subscribe(
      (data) => {
        this.resultat = data['features']
        //this.longitud = this.resultat[0].geometry.coordinates[0]
        //this.latitud = this.resultat[0].geometry.coordinates[1]
        console.log(data)
      },
      (error) =>{
        console.error(error)
      })
  }

  /*goToResultsPage(long: number, lat: number, lieu: string){
    this.navCtrl.push(AirportPage, {latitud :lat, longitud :long, adresse: lieu})
  }*/
  goToResultsPage(longitud: number, latitud: number, adresse: string){
    this.navCtrl.push(AirportPage, {longitud :longitud, latitud: latitud, adresse:adresse});
  }
}
