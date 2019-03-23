import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';

import { ResultatsPage } from '../resultats/resultats';
//import { JaccedeProvider } from '../../providers/jaccede/jaccede';
import leaflet from 'leaflet';

import { enableProdMode } from '@angular/core';
enableProdMode();

//Tiles disponibles
const Stamen = leaflet.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: 'abcd',
  minZoom: 3,
  maxZoom: 17,
  ext: 'jpg'});


@IonicPage()
@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html',
})
/*
export class RecherchePage {
  adresse: string = '';
  //longitud: number;
  //latitud:  number;

  resultat: any[] = [];
  filtrage: any = [];

  ngOnInit() {
    this.filtrage = this.navParams.get('filtrage');
  }

  constructor(public navCtrl: NavController,
              public userService: JaccedeProvider,
              public navParams: NavParams,
              private menuCtrl: MenuController) {
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

  onToggleMenu() {
      this.menuCtrl.open();
  }
}

}*/

export class RecherchePage {
  @ViewChild('map') mapContainer: ElementRef;
  center: any = [46.96525, 2.7885984];
  message: string = 'Casa';
  map: any;
  latitud: number;
  longitud: number;
  marker: any;
  adresse: any;
  filtrage: any[] = [];
  flag: boolean = false;

  ngOnInit() {
    this.filtrage = this.navParams.get('filtrage');
  }

  constructor(public navCtrl: NavController, public navParams: NavParams){}

  ionViewDidEnter(){
    console.log('entrar');
  }
  ionViewDidLoad(){
    this.loadmap();

  }
  
  loadmap(){
    //document.getElementById('map').innerHTML = "<div id='map' style='width: 100%; height: 100%;'></div>";
    var map = leaflet.map('map',{
      center: this.center,
      zoom: 6
    });
    /*var Mapbox = leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia3JpczExc2lyayIsImEiOiJjanRrMDh5NGEwMm1lM3ltc21kMDRtd3h3In0.SrKlBOp57MHXmgwFT6wSPw',{
      maxZoom: 19, //zoom possible de faire
      attribution: 'Map data &copy; ',
      id: 'mapbox.streets'});*/
    var OpenStreetMap = leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', 
      minZoom: 3,
      maxZoom: 18,
    });
    //Tile (carte) de Open S Map (gratuite)
    OpenStreetMap.addTo(map);

    map.clicked = 0;
    function onMapClick(e){
      map.clicked = map.clicked + 1;
      setTimeout(function(){
        if(map.clicked == 1){
          if (this.marker != undefined){
            map.removeLayer(this.marker); //Eliminer le marker deja crée
          }
          this.marker = new leaflet.marker(e.latlng).addTo(map);
          this.marker.bindPopup("<h4 text-center>C'est ici ?</h4><h5 text-center>Cliquez le bouton</h5>");
          map.clicked = 0;
        }
      }, 200);
    
  }; //fin de onMapClick()
  
  this.adresse = map.addEventListener("click", function(e){
    map.panTo(e.latlng);
    this.latlng = e.latlng;
  });

  map.addEventListener("dblclick", function(e){

  });
  map.on("click", onMapClick);
  map.on("dblclick", function(e){
    map.clicked = 0;
  });
}; //fin de la function loadMap()

  goToPlaceList(){
    let adresse = this.adresse;
    let longitud = this.adresse.latlng.lng;
    let latitud = this.adresse.latlng.lat;
    var filtrage = this.filtrage;
    console.log('coordinates', adresse.latlng);
    this.navCtrl.push(ResultatsPage, {longitud :longitud, latitud: latitud, filtrage:filtrage});
  }
  ionViewCanLeave(){
    //document.getElementById('map').outerHTML = '<div id="map" style="width:100%; height:89%;"></div>';
    //document.getElementById('map').outerHTML = "";
    console.log('salir');
  }
}

