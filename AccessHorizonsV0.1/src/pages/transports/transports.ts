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
  //flag: boolean = false;

  constructor(public navCtrl: NavController, public userService: JaccedeProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportsPage');
  }
  faireRecherche(){
    this.userService.getAutocomplete(this.adresse)
    .subscribe(
      (data) => {
        this.resultat = data['features']
        //console.log(data)
      },
      (error) =>{
        console.error(error)
      })
  }

  goToResultsPage(longitud: number, latitud: number, adresse: string){
    this.navCtrl.push(AirportPage, {longitud :longitud, latitud: latitud, adresse:adresse});
  }
}
