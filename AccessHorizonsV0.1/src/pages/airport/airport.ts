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
  //longitud= 4.832262;
  //latitud = 45.757744;
  longitud: number; 
  latitud:  number;
  adresse: string = 'Place Bellecour';
  resultado: any[] = [];
  flag: boolean= false;

  constructor(public navCtrl: NavController, public userService: JaccedeProvider) {
  }

  ionViewWillEnter() {
    this.userService.getAutocomplete(this.adresse)
    .subscribe(
    	(data) => {
    		//console.log('funciona');
    		this.resultado = data['features']
    		this.longitud = this.resultado[0].geometry.coordinates[0]
    		this.latitud = this.resultado[0].geometry.coordinates[1]
    		//console.log(this.longitud);
    		console.log('latitud', this.latitud);
            //console.log(this.resultado[0].geometry.coordinates);
            //console.log(this.resultado[1].properties.city)
    		//console.log(data);
    	},
    	(error) =>{
    		console.error(error)
    	})/*,
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
      })*/
  };
  mostrarPlaces(){
  	//console.log('funciona');
  	this.flag = true;
  	console.log(this.longitud, this.latitud);
  	this.userService.getPlaces(this.longitud, this.latitud)
    .subscribe(
      (data) => { // Success
      	console.log(this.longitud);
        this.places = data['items'];
        console.log(data)
        this.flag = true;
      },
      (error) =>{
      	console.log(this.latitud);
        console.error(error);
      })
  }
}
