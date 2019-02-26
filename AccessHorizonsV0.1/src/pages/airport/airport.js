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
import { JaccedeProvider } from '../../providers/jaccede/jaccede';
import { PlaceResultPage } from '../place-result/place-result';
var AirportPage = /** @class */ (function () {
    function AirportPage(navCtrl, navParams, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.places = [];
        this.adresse = '';
        this.resultat = [];
        this.filtrage = [];
    }
    //filtrage:any = ['establishment', 'parking'];
    AirportPage.prototype.ngOnInit = function () {
        this.adresse = this.navParams.get('adresse');
        this.longitud = this.navParams.get('longitud');
        this.latitud = this.navParams.get('latitud');
        this.filtrage = this.navParams.get('filtrage');
    };
    AirportPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userService.getPlaces(this.longitud, this.latitud)
            .subscribe(function (data) {
            _this.places = data['items'];
            if (_this.filtrage.length == 0) {
                _this.resultat = _this.places;
            }
            if (_this.filtrage.length != 0) {
                var i;
                for (i in _this.places) {
                    if (_this.filtrage.includes(_this.places[i].category.name)) {
                        _this.resultat.push(_this.places[i]);
                    }
                }
            }
            (function (error) {
                console.error(error);
            });
        });
    };
    //adresse: string
    /*showPlace(){
      let nombre =
      let modal = this.modalCtrl.create(ResultModalPage, {data: nombre});
      modal.present();
    }*/
    AirportPage.prototype.goToPlace = function (name, adresse, googleID) {
        this.navCtrl.push(PlaceResultPage, { name: name, adresse: adresse, googleID: googleID });
    };
    AirportPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-airport',
            templateUrl: 'airport.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, JaccedeProvider])
    ], AirportPage);
    return AirportPage;
}());
export { AirportPage };
//# sourceMappingURL=airport.js.map