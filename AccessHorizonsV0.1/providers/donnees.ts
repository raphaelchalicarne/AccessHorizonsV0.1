import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the JaccedeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DonneesProvider {

  constructor(public http: HttpClient) {}
  getPlaces(){
  	return this.http.get('https://www.gstatic.com/firebasejs/5.8.2/firebase.js?api_key=AIzaSyDnD8ksYh0fAI-tOlrIXdcXjO0w20ws1Gk');
    //return this.http.get('/api')
  }
  /*getCategories(){
  	return this.http.get('https://apidev.jaccede.com/v4/categories?api_key=93e6cdc203eeca0079b935f2370dee27d9840c34f1b064a9b71cd7292bde6a9b');
  }
  getFilters(){
  	//return this.http.get('/filters')
  	return this.http.get('https://apidev.jaccede.com/v4/accessibility_filters?lang=fr&api_key=93e6cdc203eeca0079b935f2370dee27d9840c34f1b064a9b71cd7292bde6a9b')
  }*/
}