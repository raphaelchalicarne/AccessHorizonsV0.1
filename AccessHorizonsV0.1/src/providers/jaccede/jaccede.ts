import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the JaccedeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JaccedeProvider {
  //longitud: number = 4.832262;
  //latitud: number = 45.757744;
  apiKey: string = '93e6cdc203eeca0079b935f2370dee27d9840c34f1b064a9b71cd7292bde6a9b';

  constructor(public http: HttpClient) {
  }
  getPlaces(longitud, latitud){
  	//return this.http.get('https://apidev.jaccede.com/v4/places/search?lng=4.832262&lat=45.757744&lang=fr&api_key=93e6cdc203eeca0079b935f2370dee27d9840c34f1b064a9b71cd7292bde6a9b');
    let myUrl = 'https://apidev.jaccede.com/v4/places/search?lng='+longitud+'&lat='+latitud+'&lang=fr&api_key='+this.apiKey+'';
    return this.http.get(myUrl)
  }
  getDetails(){
  	return this.http.get('https://apidev.jaccede.com/v4/places/ChIJE3ej1mD0ikcR2l81qN05xEM?api_key=93e6cdc203eeca0079b935f2370dee27d9840c34f1b064a9b71cd7292bde6a9b');
  }
  getFilters(){
  	//return this.http.get('/filters')
  	return this.http.get('https://apidev.jaccede.com/v4/accessibility_filters?lang=fr&api_key=93e6cdc203eeca0079b935f2370dee27d9840c34f1b064a9b71cd7292bde6a9b')
  }
  getAutocomplete(city){
  	let limite = '4';
  	let autoUrl = 'https://photon.komoot.de/api/?q='+city+'&limit='+limite+'';
  	return this.http.get(autoUrl)
  }
}

