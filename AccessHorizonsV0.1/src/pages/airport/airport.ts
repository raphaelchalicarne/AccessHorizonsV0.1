import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';
import { PlaceResultPage } from '../place-result/place-result';

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
  filtrage:any = [];
  //filtrage:any = ['establishment', 'parking'];

  ngOnInit() {
      this.adresse = this.navParams.get('adresse');
      this.longitud = this.navParams.get('longitud');
      this.latitud = this.navParams.get('latitud');
      this.filtrage = this.navParams.get('filtrage');
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: JaccedeProvider) {
  }

  ionViewDidLoad() {
    console.log(this.filtrage);
    this.userService.getPlaces(this.longitud, this.latitud)
    .subscribe(
      (data) => { 
        this.places = data['items'];
        console.log(this.places);
        var i;
        for (i in this.places){
          console.log(i);
          if (this.filtrage.includes(this.places[i].category.name)) {
            this.resultado.push(this.places[i]);
            }
          }
          console.log(this.resultado);
        },
        //console.log(data);
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
  goToPlace(name: string, adresse: string, googleID: string){
    this.navCtrl.push(PlaceResultPage, {name:name, adresse:adresse, googleID:googleID});
  }
}
