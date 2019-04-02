import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';

@Injectable()
export class JaccedeProvider {
  apiKey: string = '93e6cdc203eeca0079b935f2370dee27d9840c34f1b064a9b71cd7292bde6a9b';

  constructor(public http2: HttpClient, private http: HTTP) {
  }
  getPlaces(longitud, latitud){
    let myUrl = 'https://apidev.jaccede.com/v4/places/search?lng='+longitud+'&lat='+latitud+'&per_page=50&lang=fr&api_key='+this.apiKey+'';
    /*this.http.get(myUrl,{}, {})
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });*/
    return this.http2.get(myUrl);
  }
  getAutocomplete(place){
    let limite = '5';
    let autoUrl = 'https://photon.komoot.de/api/?q='+place+'&limit='+limite+'';
    return this.http2.get(autoUrl);
  }
  getDetails(googleID){
  	return this.http2.get('https://apidev.jaccede.com/v4/places/'+googleID+'?lang=fr&api_key='+this.apiKey+'');
  }
  getComments(googleID){
    let myUrl = 'https://apidev.jaccede.com/v4/places/'+googleID+'/comments?api_key='+this.apiKey+'';
    return this.http2.get(myUrl)  
  }
  getName(place){
    let limite = '4';
    let url = 'https://nominatim.openstreetmap.org/search/?q='+place+'&format=json&limit='+limite+'';
    return this.http2.get(url);
  }
}

