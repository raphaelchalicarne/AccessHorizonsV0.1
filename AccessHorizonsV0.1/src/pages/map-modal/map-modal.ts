import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import leaflet from 'leaflet';

import { enableProdMode } from '@angular/core';
enableProdMode();

/*const Stamen = leaflet.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: 'abcd',
  minZoom: 3,
  maxZoom: 16,
  ext: 'jpg'});*/
/*const OpenStreetMap = leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', 
  minZoom: 15,
  maxZoom: 19,
});*/

@IonicPage()
@Component({
  selector: 'page-map-modal',
  templateUrl: 'map-modal.html',
})
export class MapModalPage {
  //@ViewChild('carte') mapContainer: ElementRef;
  longitud: number;
  latitud: number;
  //center = [45.7669575731, 4.834583];
  center: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.latitud = navParams.get('latitud');
  	this.longitud = navParams.get('longitud');
  	this.center = [this.latitud, this.longitud];
  	console.log('center', this.center);
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
  	var OpenStreetMap = leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
  		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', 
  		minZoom: 15,
  		maxZoom: 19,
	});
  	OpenStreetMap.addTo(map);

  	var marker = leaflet.marker(this.center).addTo(map);
  	marker.bindPopup("<h3>C'est ici !</h3>");
  };
}
