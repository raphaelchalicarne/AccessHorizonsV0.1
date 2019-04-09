import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { RecherchePage } from '../recherche/recherche';
import { AjoutlieuPage } from '../ajoutlieu/ajoutlieu';
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
  //activites = ['establishment','aquarium','bazar','bowling_alley','casino','shopping_mall','shopping_center','cultural_center','fitness_center','recreation_center','movie_theater','circus','night_club','store','sports_complex','beach_resort','stadium','florist','art_gallery',''];
  loisirs = ['aquarium','bowling_alley','casino','cultural_center','recreation_center','movie_theater','stadium','art_gallery','monument','museum','opera_house','performing_arts_theater','movie_rental',];
  commerces = ['shoe_store','movie_rental_store','convenience_store','department_store','wine_store','grocery_store','tattoo_shop','weelchair_store','clothing_store','pet_store','music_store','antique_furniture_store','furniture_store','toy_store','luggage_store','electronics_store','appliance_store','sporting_goods_store','chocolate_shop','cell_phone_store','boot_store','home_goods_store','grocery_or_supermarket','supermarket','car_repair','cheese_shop','perfume_store','hair_care','bakery','orthesist','optician','market','seafood_market','liquor_store','book_store','photo_lab','jewelry_store','green_grocers','florist','hardware_store','pharmacy','tobacco_shop','dentist','car_dealer','store','locksmith','shopping_center','shopping_mall','butcher_shop','travel_agency'];
  all = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient,
              private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {}
  goToRecherchePage(selection :number){
    switch (selection) {
      case 1:
        var transports = this.transports;
        this.navCtrl.push(RecherchePage, {filtrage: transports, filtrage2: 'Transports',selection: selection});
        break;
      case 2:
        var restaurants = this.restaurants;
        this.navCtrl.push(RecherchePage, {filtrage: restaurants, filtrage2: 'Restaurants', selection: selection});
        break;
      case 3:
        var logement = this.logement;
        this.navCtrl.push(RecherchePage, {filtrage: logement, filtrage2: 'Logements', selection: selection});
        break;
      case 4:
        var loisirs = this.loisirs;
        this.navCtrl.push(RecherchePage, {filtrage: loisirs, filtrage2: 'Loisirs', selection: selection});
        break;
      case 5:
        var commerces = this.commerces;
        this.navCtrl.push(RecherchePage, {filtrage: commerces, filtrage2: 'Commerces', selection: selection});
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
