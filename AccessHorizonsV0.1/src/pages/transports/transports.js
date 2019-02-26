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
import { AirportPage } from '../airport/airport';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';
var TransportsPage = /** @class */ (function () {
    function TransportsPage(navCtrl, userService, navParams) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.navParams = navParams;
        this.adresse = '';
        this.resultat = [];
        this.filtrage = [];
    }
    TransportsPage.prototype.ngOnInit = function () {
        this.filtrage = this.navParams.get('filtrage');
    };
    TransportsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransportsPage');
        console.log(this.filtrage);
    };
    TransportsPage.prototype.faireRecherche = function () {
        var _this = this;
        this.userService.getAutocomplete(this.adresse)
            .subscribe(function (data) {
            _this.resultat = data['features'];
        }, function (error) {
            console.error(error);
        });
    };
    TransportsPage.prototype.goToPlaceList = function (longitud, latitud, adresse) {
        var filtrage = this.filtrage;
        this.navCtrl.push(AirportPage, { longitud: longitud, latitud: latitud, adresse: adresse, filtrage: filtrage });
    };
    TransportsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-transports',
            templateUrl: 'transports.html',
        }),
        __metadata("design:paramtypes", [NavController, JaccedeProvider, NavParams])
    ], TransportsPage);
    return TransportsPage;
}());
export { TransportsPage };
//# sourceMappingURL=transports.js.map