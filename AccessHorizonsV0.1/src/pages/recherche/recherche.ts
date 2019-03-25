import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, MenuController} from 'ionic-angular';

import { ResultatsPage } from '../resultats/resultats';
import { RechercheManuellePage} from '../recherche-manuelle/recherche-manuelle';
//import { JaccedeProvider } from '../../providers/jaccede/jaccede';
import leaflet from 'leaflet';

import { enableProdMode } from '@angular/core';
enableProdMode();


@IonicPage()
@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html',
})

export class RecherchePage {
  @ViewChild('map') mapContainer: ElementRef;
  center: any = [46.96525, 2.7885984];
  message: string = 'Casa';
  map: any;
  latitud: number;
  longitud: number;
  marker: any;
  newMarker: any;
  adresse: any;
  filtrage: any[] = [];
  flag: boolean = false;

  ngOnInit() {
    this.filtrage = this.navParams.get('filtrage');
  }

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private menuCtrl: MenuController){}

  ionViewDidEnter(){
  }
  ionViewDidLoad(){
    this.loadmap();
    //console.log(this.map)
  }
  
  loadmap(){
    var map = leaflet.map('map',{
      center: this.center,
      zoom: 6
    });
    console.log(map);
    //Tile (carte) de Mapbox --> API gratuite jusqu'à 50000 requetes
    /*var Mapbox = leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia3JpczExc2lyayIsImEiOiJjanRrMDh5NGEwMm1lM3ltc21kMDRtd3h3In0.SrKlBOp57MHXmgwFT6wSPw',{
      maxZoom: 19, //zoom possible de faire
      attribution: 'Map data &copy; ',
      id: 'mapbox.streets'});
    Mapbox.addTo(map);
      */

    var OpenStreetMap = leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', 
      minZoom: 3,
      maxZoom: 18,
    });
    //Tile (carte) de Open Street Map (gratuite)
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
          console.log('inside marker', this.marker);
          map.clicked = 0;
        }
      }, 200);
    
  }; //fin de onMapClick()
  console.log('markeer', this.marker);
  this.adresse = map.addEventListener("click", function(e){ //Centrer
    map.panTo(e.latlng);
    this.latlng = e.latlng;
  });

  map.addEventListener("dblclick", function(e){

  });
  map.on("click", onMapClick);
  map.on("dblclick", function(e){
    map.clicked = 0;
  });
  this.map = map;
}; //fin de la function loadMap()
  goToRechercheManuelle(){
    console.log(this.marker);
    if (this.marker != undefined){
      this.map.removeLayer(this.marker);
    }
    let modal = this.modalCtrl.create(RechercheManuellePage);
    modal.present();
    modal.onDidDismiss((data) => {
      //console.log(data)
      if (data.flag == true) {
        //console.log(this.map);
        this.marker = new leaflet.marker([data.latitud,data.longitud]).addTo(this.map);
        this.marker.bindPopup("<h4 text-center>C'est ici ?</h4><h5 text-center>Cliquez le bouton</h5>");
        //console.log('marker',this.newMarker);
      }
    })
  }

  goToPlaceList(){
    let adresse = this.adresse;
    let longitud = this.adresse.latlng.lng;
    let latitud = this.adresse.latlng.lat;
    var filtrage = this.filtrage;
    this.navCtrl.push(ResultatsPage, {longitud :longitud, latitud: latitud, filtrage:filtrage});
  }
  onToggleMenu() {
      this.menuCtrl.open();
  }
}

/* //VERSION ANCIENNE 
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
