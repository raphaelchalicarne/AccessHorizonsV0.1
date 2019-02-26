var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the JaccedeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var JaccedeProvider = /** @class */ (function () {
    function JaccedeProvider(http) {
        this.http = http;
        this.apiKey = '93e6cdc203eeca0079b935f2370dee27d9840c34f1b064a9b71cd7292bde6a9b';
    }
    JaccedeProvider.prototype.getPlaces = function (longitud, latitud) {
        var myUrl = 'https://apidev.jaccede.com/v4/places/search?lng=' + longitud + '&lat=' + latitud + '&per_page=50&lang=fr&api_key=' + this.apiKey + '';
        return this.http.get(myUrl);
    };
    JaccedeProvider.prototype.getAutocomplete = function (city) {
        var limite = '2';
        var autoUrl = 'https://photon.komoot.de/api/?q=' + city + '&limit=' + limite + '';
        return this.http.get(autoUrl);
    };
    JaccedeProvider.prototype.getDetails = function (googleID) {
        return this.http.get('https://apidev.jaccede.com/v4/places/' + googleID + '?lang=fr&api_key=' + this.apiKey + '');
    };
    JaccedeProvider.prototype.getComments = function (googleID) {
        var myUrl = 'https://apidev.jaccede.com/v4/places/' + googleID + '/comments?api_key=' + this.apiKey + '';
        return this.http.get(myUrl);
    };
    JaccedeProvider.prototype.getFilters = function () {
        //return this.http.get('/filters')
        return this.http.get('https://apidev.jaccede.com/v4/accessibility_filters?lang=fr&api_key=93e6cdc203eeca0079b935f2370dee27d9840c34f1b064a9b71cd7292bde6a9b');
    };
    JaccedeProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], JaccedeProvider);
    return JaccedeProvider;
}());
export { JaccedeProvider };
//# sourceMappingURL=jaccede.js.map