import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
//import * as leaflet from '.staging/leaflet-18e1094c';
import leaflet from 'leaflet';

import { enableProdMode } from '@angular/core';
enableProdMode();

@IonicPage()
@Component({
  selector: 'page-map-modal',
  templateUrl: 'map-modal.html',
})
export class MapModalPage {
  @ViewChild('carte') mapContainer: ElementRef;
  longitud: number;
  latitud: number;
  center: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.latitud = navParams.get('latitud');
  	this.longitud = navParams.get('longitud');
  	this.center = [this.latitud, this.longitud];
  }

  ionViewDidLoad() {
    this.loadmap();
    };

  closeModal(){
  	this.viewCtrl.dismiss();
  }
  loadmap(){
  	var map = leaflet.map('carte',{
  		center: this.center,
  		zoom: 16,
  	});
    //Tile (carte) de Open Street Map
  	var OpenStreetMap = leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  		minZoom: 10,
  		maxZoom: 19,
	  });
  	OpenStreetMap.addTo(map);

  	var marker = leaflet.marker(this.center).addTo(map);
  	marker.bindPopup("<h3 text-center>C'est ici !</h3>");
  };
}
