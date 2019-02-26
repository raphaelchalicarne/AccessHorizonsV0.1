var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransportsPage } from '../transports/transports';
var MenuServicesPage = /** @class */ (function () {
    function MenuServicesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transports = ['airport', 'bus_station', 'subway_station', 'train_station', 'travel_agency', 'car_rental', 'gas_station', 'taxi_stand', 'transit_station', 'taxi_service', 'car_repair'];
        this.restaurants = ['bar', 'cafe', 'internet_cafe', 'meal_delivery', 'meal_takeaway', 'restaurant', 'fast_food_restaurant', 'tea_house'];
        this.logement = ['hostel', 'lodging', 'vacation_appartment', 'rv_park', 'gite', 'hotel', 'luxury_hotel'];
        this.activites = ['aquarium', 'bazar', 'bowling_alley', 'casino', 'shopping_mall', 'shopping_center', 'cultural_center', 'fitness_center', 'recreation_center', 'movie_theater', 'circus', 'night_club', 'store', 'sports_complex', 'beach_resort', 'stadium', 'florist', 'art_gallery', ''];
        this.loisirs = ['aquarium', 'bowling_alley', 'casino', 'shopping_mall', 'shopping_center', 'cultural_center', 'fitness_center', 'recreation_center', 'movie_theater', 'circus', 'night_club', 'sports_complex', 'beach_resort', 'stadium', 'art_gallery', 'gym', 'monument', 'museum', 'opera_house', 'park', 'amusement_park', 'national_park', 'public_swimming_pool', 'spa', 'performing_arts_theater', 'movie_rental', 'movie_rental_store', 'zoo'];
        this.comerces = ['shoe_store', 'movie_rental_store', 'convenience_store', 'department_store', 'wine_store', 'grocery_store', 'tattoo_shop', 'weelchair_store', 'clothing_store', 'pet_store', 'music_store', 'antique_furniture_store', 'furniture_store', 'toy_store', 'luggage_store', 'electronics_store', 'appliance_store', 'sporting_goods_store', 'chocolate_shop', 'cell_phone_store', 'boot_store', 'home_goods_store', 'grocery_or_supermarket', 'supermarket', 'car_repair', 'cheese_shop', 'perfume_store', 'hair_care', 'bakery', 'orthesist', 'optician', 'market', 'seafood_market', 'liquor_store', 'book_store', 'photo_lab', 'jewelry_store', 'green_grocers', 'florist', 'hardware_store', 'pharmacy', ''];
        this.all = [];
    }
    MenuServicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuServicesPage');
    };
    MenuServicesPage.prototype.goToTransportsPage = function (selection) {
        switch (selection) {
            case 1:
                var transports = this.transports;
                this.navCtrl.push(TransportsPage, { filtrage: transports });
                break;
            case 2:
                var restaurants = this.restaurants;
                this.navCtrl.push(TransportsPage, { filtrage: restaurants });
                break;
            case 3:
                var logement = this.logement;
                this.navCtrl.push(TransportsPage, { filtrage: logement });
                break;
            case 4:
                var activites = this.activites;
                this.navCtrl.push(TransportsPage, { filtrage: activites });
                break;
            case 5:
                var all = this.all;
                this.navCtrl.push(TransportsPage, { filtrage: all });
                break;
        }
        /*    if (selection == 1) {
          var transports = this.transports;
          this.navCtrl.push(TransportsPage, {filtrage: transports});
         }
        if (selection == 2) {
          var restaurants = this.restaurants;
          this.navCtrl.push(TransportsPage, {filtrage: restaurants});
         }
        if (selection == 3) {
          var logement = this.logement;
          this.navCtrl.push(TransportsPage, {filtrage: logement});
         }
        if (selection == 4) {
          var activites = this.activites;
          this.navCtrl.push(TransportsPage, {filtrage: activites});
         }  */
    };
    MenuServicesPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-menu-services',
            templateUrl: 'menu-services.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], MenuServicesPage);
    return MenuServicesPage;
}());
export { MenuServicesPage };
//# sourceMappingURL=menu-services.js.map