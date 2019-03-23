import { Component, ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ResultatsPage } from '../resultats/resultats';
//import { JaccedeProvider } from '../../providers/jaccede/jaccede';
import leaflet from 'leaflet';

import { enableProdMode } from '@angular/core';
enableProdMode();

//@IonicPage()
@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html',
})
/*
export class RecherchePage {
  adresse: string = '';
  resultat: any[] = [];
  filtrage: any = [];

  ngOnInit() {
    this.filtrage = this.navParams.get('filtrage');
  }

  constructor(public navCtrl: NavController, public userService: JaccedeProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  faireRecherche(){
    this.userService.getAutocomplete(this.adresse)
    .subscribe(
      (data) => {
        this.resultat = data['features'];
        console.log('data', data);
      },
      (error) =>{
        console.error(error);
      })
  }

  goToPlaceList(longitud: number, latitud: number, adresse: string){ //Passer à la page de liste de places 
    var filtrage = this.filtrage;
    this.navCtrl.push(ResultatsPage, {longitud :longitud, latitud: latitud, adresse:adresse, filtrage:filtrage});
  }
}*/

export class RecherchePage {
  @ViewChild("mapa") mapContainer: ElementRef;
  center: any = [45.75, 4.83];
  message: string = 'Casa';
  lat: number = 45.75334;
  long: number = 4.842;
  latitud: number;
  longitud: number;
  marker: any;
  adresse: any[] = [];
  filtrage: any[] = [];

  ngOnInit() {
    this.filtrage = this.navParams.get('filtrage');
  }

  constructor(public navCtrl: NavController, public navParams: NavParams){}

  ionViewDidLoad(){
    this.loadmap();
    console.log('Load');
  }
  loadmap(){
    var mapa;
    mapa = leaflet.map("mapa",{
      center: this.center,
      zoom: 13
    });
    leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia3JpczExc2lyayIsImEiOiJjanRrMDh5NGEwMm1lM3ltc21kMDRtd3h3In0.SrKlBOp57MHXmgwFT6wSPw',{
      maxZoom: 19, //zoom possible de faire
      attribution: 'Map data &copy; ',
      id: 'mapbox.streets'
    }).addTo(mapa);
    
    function onMapClick(e){
      //console.log('Coord', e.latlng);
      var adresse = e.latlng;
      if (this.marker != undefined){
        mapa.removeLayer(this.marker);
      }
      this.latitud = e.latlng.lat;     
      //console.log('aqui',this.adresse);
      this.marker = new leaflet.marker(e.latlng).addTo(mapa);
      this.marker.bindPopup("<h3>Hello</h3>"+e.latlng);
      this.adresse = this.marker.getLatLng();
      console.log(this.adresse);
    }
    this.adresse = this.marker.getLatLng();
    mapa.on('click', onMapClick);
    }
  

  goToPlaceList(){
    //console.log(this.marker);
    var filtrage = this.filtrage;
    var adresse = this.adresse;
    //console.log('adresse',adresse);
    //let longitud = this.adresse.long;
    //let latitud = this.adresse.lat;
    //console.log('lat', this.latitud);
    //console.log('long',longitud);
    //console.log(filtrage);
    //this.navCtrl.push(ResultatsPage, {longitud :longitud, latitud: latitud, adresse:adresse, filtrage:filtrage});
  }
}