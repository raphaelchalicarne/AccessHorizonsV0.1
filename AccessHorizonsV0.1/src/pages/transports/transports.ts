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
  adresse: string = '';
  longitud: number; 
  latitud:  number;
  resultat: any[] = [];
  filtrage: any = [];

  ngOnInit() {
    this.filtrage = this.navParams.get('filtrage');
  }

  constructor(public navCtrl: NavController, public userService: JaccedeProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log(this.filtrage);
  }
  faireRecherche(){
    this.userService.getAutocomplete(this.adresse)
    .subscribe(
      (data) => {
        this.resultat = data['features'];
      },
      (error) =>{
        console.error(error);
      })
  }

  goToPlaceList(longitud: number, latitud: number, adresse: string){
    var filtrage = this.filtrage;
    this.navCtrl.push(AirportPage, {longitud :longitud, latitud: latitud, adresse:adresse, filtrage:filtrage});
  }
}
