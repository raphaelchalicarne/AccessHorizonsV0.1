import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, MenuController} from 'ionic-angular';

import { ResultatsPage } from '../resultats/resultats';
import { RechercheManuellePage} from '../recherche-manuelle/recherche-manuelle';
import * as leaflet from '.staging/leaflet-18e1094c';
//import leaflet from 'leaflet';

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
  clicked: number;
  marker: any;
  newMarker: any;
  adresse: any;
  filtrage: any[] = [];
  filtrage2: string;
  flag: boolean = false;
  count: number = 0;

  click: boolean = false;
  selection: number;

  ngOnInit() {
    this.filtrage = this.navParams.get('filtrage');
    this.filtrage2 = this.navParams.get('filtrage2');
    this.selection = this.navParams.get('selection');
  }

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private menuCtrl: MenuController){}

  ionViewDidEnter(){
    if (this.flag == false){
      this.loadmap();
      this.flag = true;
    }

  }

  loadmap(){
    if (map == undefined){
      var map = leaflet.map('map',{
        center: this.center,
        zoom: 6
      });
    }

     //console.log(map);
    //Tile (carte) de Mapbox --> API gratuite jusqu'à 50000 requetes
    /*var Mapbox = leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia3JpczExc2lyayIsImEiOiJjanRrMDh5NGEwMm1lM3ltc21kMDRtd3h3In0.SrKlBOp57MHXmgwFT6wSPw',{
      maxZoom: 19, //zoom possible de faire
      attribution: 'Map data &copy; ',
      id: 'mapbox.streets'});
    Mapbox.addTo(map);*/


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
            map.removeLayer(this.marker);
          }
          this.marker = new leaflet.marker(e.latlng).addTo(map);
          this.marker.bindPopup("<h5 text-center>Appuyez sur Rechercher</h5>");
          map.clicked = 0;
        }
      }, 200);

  }; //fin de onMapClick()
  this.map = map;
  this.adresse = map.addEventListener("click", function(e){ //Centrer
    map.panTo(e.latlng);
    this.latlng = e.latlng; //ajoute la property latlng à l'objet this.adresse
  });
  map.addEventListener("dblclick", function(e){

  });
  map.on("click", onMapClick);
  map.on("dblclick", function(e){
    map.clicked = 0;
  });

}; //fin de la function loadMap()*/
  goToRechercheTextuelle(){
    var selection = this.selection;
    var filtrage = this.filtrage;
    var filtrage2 = this.filtrage2;
    let modal = this.modalCtrl.create(RechercheManuellePage,{filtrage: filtrage, filtrage2: filtrage2, selection: selection});
    modal.present();
  }

  goToPlaceList(){
    if (this.adresse.latlng){ //si la proprieté existe, il y a eu un click, on exécute la recherche de places
      let adresse = this.adresse;
      let longitud = this.adresse.latlng.lng;
      let latitud = this.adresse.latlng.lat;
      var filtrage = this.filtrage;
      //var filtrage2 = this.filtrage2;
      var selection = this.selection;

      this.navCtrl.push(ResultatsPage, {longitud :longitud, latitud: latitud, filtrage:filtrage, selection: selection});
    } else {
      console.log('No existe');
    }
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
