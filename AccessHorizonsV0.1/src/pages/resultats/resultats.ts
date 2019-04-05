import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';
import { PlaceResultatPage } from '../place-resultat/place-resultat';
import { HTTP } from '@ionic-native/http/ngx';

@IonicPage()
@Component({
  selector: 'page-resultats',
  templateUrl: 'resultats.html',
})
export class ResultatsPage {
  places: any[] = []; //Les résultats bruts de la requête à J'accede
  adresse: string = '';
  resultat: any[] = []; //Les résultats qui vont être montrés

  longitud: number;
  latitud:  number;
  filtrage:any = []; //Le filtrage demandé par l'utilisateur

  selection: number;
  message: string;
  flag: boolean = false;
  
  apiKey: string = '93e6cdc203eeca0079b935f2370dee27d9840c34f1b064a9b71cd7292bde6a9b';

  ngOnInit() { //On obtient les valeurs envoyés de la page anterieure
      //this.adresse = this.navParams.get('adresse');
      this.longitud = this.navParams.get('longitud');     
      this.latitud = this.navParams.get('latitud');      
      this.filtrage = this.navParams.get('filtrage');
      this.selection = this.navParams.get('selection');
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userService: JaccedeProvider,
              private menuCtrl: MenuController,
              private http: HTTP) {
  }
  ionViewDidLoad() {
    let myUrl = 'https://apidev.jaccede.com/v4/places/search?lng='+this.longitud+'&lat='+this.latitud+'&per_page=50&lang=fr&api_key='+this.apiKey+'';
    this.http.get(myUrl,{}, {})
    .then(data => {
      this.places = JSON.parse(data.data);
      // FILTRAGE
      if (this.filtrage.length == 0){ 
        this.resultat = this.places;
      }
      if (this.filtrage.length != 0){
        var i;
        for (i in this.places){
          if (this.filtrage.includes(this.places[i].category.name)) {
              this.resultat.push(this.places[i]);
            }
        }
      }
    })
    .catch(error => {
      console.log('error');
    });
    /*this.userService.getPlaces(this.longitud, this.latitud) //Requete à J'accede
    .subscribe(
      (data) => {
        this.places = data['items'];
        if (this.places) {
          this.flag = true;  
        }
        console.log(this.places);
        if (this.filtrage.length == 0) { //S'il y a pas de filtrage, montrer TOUS les resultats
          this.resultat = this.places;
        }
        if (this.filtrage.length != 0) { // Réaliser le filtrage pour montrer les résultats qui coincident
          var i;
          for (i in this.places){
            if (this.filtrage.includes(this.places[i].category.name)) {
              this.resultat.push(this.places[i]);
            }
          }
        }
      (error) =>{
        console.error(error);
      }
    }
  )*/

  } 


  goToPlace(name: string, adresse: string, googleID: string){ //Passer à la page de résultats d'une place individuelle
    var selection = this.selection;
    this.navCtrl.push(PlaceResultatPage, {name:name, adresse:adresse, googleID:googleID, selection: selection});
  }

  onToggleMenu() {
      this.menuCtrl.open();
  }
}
