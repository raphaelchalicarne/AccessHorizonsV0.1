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
  longitud: number; 
  latitud:  number;
  adresse: string = '';
  resultado: any[] = [];
  flag: boolean= false;

  /*ngOnInit() {
      this.adresse = this.navParams.get('userHandicap');
      this.longitud = this.navParams.get('');
      this.latitud = this.navParams.get('');
  }*/
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: JaccedeProvider) {
  }

  /*ionViewWillEnter() {
    this.userService.getAutocomplete(this.adresse)
    .subscribe(
    	(data) => {
    		this.resultado = data['features']
    		this.longitud = this.resultado[0].geometry.coordinates[0]
    		this.latitud = this.resultado[0].geometry.coordinates[1]
    		//console.log(data);
    	},
    	(error) =>{
    		console.error(error)
    	}),
    this.userService.getPlaces(this.longitud, this.latitud)
    .subscribe(
      (data) => { // Success
      	console.log(this.longitud);
        this.places = data['items'];
        console.log(data)
      },
      (error) =>{
      	console.log(this.latitud);
        console.error(error);
      })
  };*/
  /*
  mostrarPlaces(){
  	this.flag = true;
  	console.log(this.longitud, this.latitud);
  	this.userService.getPlaces(this.longitud, this.latitud)
    .subscribe(
      (data) => { // Success
        this.places = data['items'];
        this.flag = true;
      },
      (error) =>{
        console.error(error);
      })
  }*/
}
