import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AirportPage } from '../airport/airport';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';
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
  adresse: string = "";
  longitud: number; 
  latitud:  number;
  resultado: any[] = [];
  flag: boolean = false;
  
  constructor(public navCtrl: NavController, public userService: JaccedeProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportsPage');
  }
  montrerRecherche(){
    //console.log(this.adresse);
    this.userService.getAutocomplete(this.adresse)
    .subscribe(
      (data) => {
        this.resultado = data['features']
        this.longitud = this.resultado[0].geometry.coordinates[0]
        this.latitud = this.resultado[0].geometry.coordinates[1]
        console.log(data)
        console.log(this.longitud, this.latitud);
      },
      (error) =>{
        console.error(error)
      })
  }

  goToResultsPage(){
    this.navCtrl.push(AirportPage)
  }
}
