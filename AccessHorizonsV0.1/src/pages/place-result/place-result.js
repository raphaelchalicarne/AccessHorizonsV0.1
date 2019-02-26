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
var PlaceResultPage = /** @class */ (function () {
    function PlaceResultPage(navCtrl, navParams, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.name = '';
        this.adresse = '';
        this.googleID = '';
        this.details = [];
        this.website = '';
        this.label = '';
        this.flag = false;
        this.comments = [];
    }
    PlaceResultPage.prototype.ngOnInit = function () {
        this.name = this.navParams.get('name');
        this.adresse = this.navParams.get('adresse');
        this.googleID = this.navParams.get('googleID');
    };
    PlaceResultPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userService.getDetails(this.googleID).subscribe(function (data) {
            _this.details = data['accessibility'];
            _this.website = data['website'];
            if (_this.details != null) //Pour verifier que le vecteur de details n'est pas nul, sinon on trouve des erreurs d'execution
             {
                _this.flag = true;
                _this.label = _this.details[0].children[0].label;
            }
            else {
                _this.label = 'Rien';
            }
        }, function (error) {
            console.log(error);
        }); /*,
    this.userService.getComments(this.googleID).subscribe(
      (data) => {
        this.comments = data[];
      },
      (error) =>{
        console.log(error);
      }
      )*/
    };
    PlaceResultPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-place-result',
            templateUrl: 'place-result.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, JaccedeProvider])
    ], PlaceResultPage);
    return PlaceResultPage;
}());
export { PlaceResultPage };
//# sourceMappingURL=place-result.js.map