import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RecherchePage} from '../recherche/recherche';
import { AjoutlieuPage } from '../ajoutlieu/ajoutlieu';
//import { FiltrePersonnelPage } from '../filtre-personnel/filtre-personnel';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-menu-services',
  templateUrl: 'menu-services.html',
})
export class MenuServicesPage {
  transports = ['airport', 'bus_station', 'subway_station', 'train_station', 'travel_agency', 'car_rental', 'gas_station', 'taxi_stand', 'transit_station', 'taxi_service'];
  restaurants = ['bar','cafe','internet_cafe','meal_delivery','meal_takeaway','restaurant','fast_food_restaurant','tea_house'];
  logement = ['hostel','lodging','vacation_appartment','rv_park','gite','hotel','luxury_hotel'];
  activites = ['establishment','aquarium','bazar','bowling_alley','casino','shopping_mall','shopping_center','cultural_center','fitness_center','recreation_center','movie_theater','circus','night_club','store','sports_complex','beach_resort','stadium','florist','art_gallery',''];
  loisirs = ['establishment','aquarium','bowling_alley','casino','shopping_mall','shopping_center','cultural_center','fitness_center','recreation_center','movie_theater','circus','night_club','sports_complex','beach_resort','stadium','art_gallery','gym','monument','museum','opera_house','park','amusement_park','national_park','public_swimming_pool','spa','performing_arts_theater','movie_rental','movie_rental_store','zoo'];
  commerces = ['establishment','shoe_store','movie_rental_store','convenience_store','department_store','wine_store','grocery_store','tattoo_shop','weelchair_store','clothing_store','pet_store','music_store','antique_furniture_store','furniture_store','toy_store','luggage_store','electronics_store','appliance_store','sporting_goods_store','chocolate_shop','cell_phone_store','boot_store','home_goods_store','grocery_or_supermarket','supermarket','car_repair','cheese_shop','perfume_store','hair_care','bakery','orthesist','optician','market','seafood_market','liquor_store','book_store','photo_lab','jewelry_store','green_grocers','florist','hardware_store','pharmacy','tobacco_shop','dentist','car_dealer','store','locksmith','shopping_center','shopping_mall','butcher_shop','travel_agency'];
  all = [];

  /*all_categories: any = [];
  temporary: any = [];*/

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {}
  goToRecherchePage(selection :number){
    switch (selection) {
      case 1:
        var transports = this.transports;
        this.navCtrl.push(RecherchePage, {filtrage: transports});
        break;     
      case 2:
        var restaurants = this.restaurants;
        this.navCtrl.push(RecherchePage, {filtrage: restaurants});
        break;
      case 3:
        var logement = this.logement;
        this.navCtrl.push(RecherchePage, {filtrage: logement});
        break;
      case 4:
        var activites = this.activites;
        this.navCtrl.push(RecherchePage, {filtrage: activites});
        break;
      case 5:
        var commerces = this.commerces;
        this.navCtrl.push(RecherchePage, {filtrage: commerces});
        break;
    }
  }

  goToAjoutlieuPage(){
    this.navCtrl.push(AjoutlieuPage);
  }
}
