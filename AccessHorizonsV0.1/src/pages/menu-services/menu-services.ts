import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController} from 'ionic-angular';
import {RecherchePage} from '../recherche/recherche';
import {RechercheDirectePage } from '../recherche-directe/recherche-directe';
import { AjoutlieuPage } from '../ajoutlieu/ajoutlieu';
import { HttpClient } from '@angular/common/http';

import { JaccedeProvider } from '../../providers/jaccede/jaccede';
import { HTTP } from '@ionic-native/http/ngx';

@IonicPage()
@Component({
  selector: 'page-menu-services',
  templateUrl: 'menu-services.html',
})
export class MenuServicesPage {
  transports = ['airport', 'bus_station', 'subway_station', 'train_station', 'travel_agency', 'car_rental', 'gas_station', 'taxi_stand', 'transit_station', 'taxi_service'];
  restaurants = ['bar','cafe','internet_cafe','meal_delivery','meal_takeaway','restaurant','fast_food_restaurant','tea_house'];
  logement = ['hostel','lodging','vacation_appartment','rv_park','gite','hotel','luxury_hotel'];
  //activites = ['establishment','aquarium','bazar','bowling_alley','casino','shopping_mall','shopping_center','cultural_center','fitness_center','recreation_center','movie_theater','circus','night_club','store','sports_complex','beach_resort','stadium','florist','art_gallery',''];
  loisirs = ['aquarium','bowling_alley','casino','cultural_center','fitness_center','recreation_center','movie_theater','circus','night_club','sports_complex','beach_resort','stadium','art_gallery','gym','monument','museum','opera_house','park','amusement_park','national_park','public_swimming_pool','spa','performing_arts_theater','movie_rental','movie_rental_store','zoo'];
  commerces = ['establishment','shoe_store','movie_rental_store','convenience_store','department_store','wine_store','grocery_store','tattoo_shop','weelchair_store','clothing_store','pet_store','music_store','antique_furniture_store','furniture_store','toy_store','luggage_store','electronics_store','appliance_store','sporting_goods_store','chocolate_shop','cell_phone_store','boot_store','home_goods_store','grocery_or_supermarket','supermarket','car_repair','cheese_shop','perfume_store','hair_care','bakery','orthesist','optician','market','seafood_market','liquor_store','book_store','photo_lab','jewelry_store','green_grocers','florist','hardware_store','pharmacy','tobacco_shop','dentist','car_dealer','store','locksmith','shopping_center','shopping_mall','butcher_shop','travel_agency'];
  all = [];

  adresse: string = '';
  service: string = '';
  resultat: any[] = [];
  longitud: any;
  latitud: any;

  info: any;
  items: any = [];

  apiKey: string = '93e6cdc203eeca0079b935f2370dee27d9840c34f1b064a9b71cd7292bde6a9b';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http2: HttpClient,
              private menuCtrl: MenuController,
              public modalCtrl: ModalController,
              private http: HTTP, 
              public userService: JaccedeProvider) {
  }

  ionViewDidLoad() {}

  faireRecherche(){
  	this.userService.getAutocomplete(this.adresse)
  	.subscribe(
  		(data) => {
  			this.resultat = data['features'];
  			this.latitud = this.resultat[0].geometry.coordinates[1];
  			this.longitud = this.resultat[0].geometry.coordinates[0];
			//https://apidev.jaccede.com/v4/places/search/match?lat=45.767&lng=4.833&name=resto&lang=fr&api_key=93e6cdc203eeca0079b935f2370dee27d9840c34f1b064a9b71cd7292bde6a9b
  			let myUrl = 'https://apidev.jaccede.com/v4/places/search/match?lat='+this.latitud+'&lng='+this.longitud+'&name='+this.service+'&lang=fr&api_key='+this.apiKey+'';
  			this.http.get(myUrl, {}, {})
  			.then(data => {
  				this.info = JSON.parse(data.data);
  				alert(data);
  				this.items = this.info['items'];
  				alert(this.items);
  				this.showResults(this.items);
  			})
  			.catch(error =>{
  				alert('Une erreur est apparue !');
  			})
  			//console.log(myUrl);
  			//console.log(this.latitud);
  		},
  		(error) =>{  
  			alert(error);
  		})
  	
  }
  showResults(items: any){
  	//manque IF pour eviter erreurs
  	alert(items[0]['name']);
  	let modal  = this.modalCtrl.create(RechercheDirectePage, {items: items});
  	modal.present();
  }

  goToRecherchePage(selection :number){
    switch (selection) {
      case 1:
        var transports = this.transports;
        this.navCtrl.push(RecherchePage, {filtrage: transports, selection: selection});
        break;
      case 2:
        var restaurants = this.restaurants;
        this.navCtrl.push(RecherchePage, {filtrage: restaurants, selection: selection});
        break;
      case 3:
        var logement = this.logement;
        this.navCtrl.push(RecherchePage, {filtrage: logement, selection: selection});
        break;
      case 4:
        var loisirs = this.loisirs;
        this.navCtrl.push(RecherchePage, {filtrage: loisirs, selection: selection});
        break;
      case 5:
        var commerces = this.commerces;
        this.navCtrl.push(RecherchePage, {filtrage: commerces, selection: selection});
        break;
    }
  }

  goToAjoutlieuPage(){
    this.navCtrl.push(AjoutlieuPage);
  }

  onToggleMenu() {
      this.menuCtrl.open();
  }
}
