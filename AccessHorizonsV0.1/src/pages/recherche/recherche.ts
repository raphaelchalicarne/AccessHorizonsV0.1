import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultatsPage } from '../resultats/resultats';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';

@IonicPage()
@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html',
})
export class RecherchePage {
  adresse: string = '';
  longitud: number; 
  latitud:  number;
  resultat: any[] = [];
  filtrage: any = [];
  filtrage2 : string;

  ngOnInit() {
    this.filtrage = this.navParams.get('filtrage');
    this.filtrage2 = this.navParams.get('filtrage2');
  }

  constructor(public navCtrl: NavController, public userService: JaccedeProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log(this.filtrage);
  }
  
  faireRecherche(){
    this.userService.getAutocomplete(this.adresse)
    .subscribe(
      (data) => {
        this.resultat = data['features'];
        console.log(data);
      },
      (error) =>{
        console.error(error);
      })
  }

  goToPlaceList(longitud: number, latitud: number, name: string, osm: any){
    //console.log(osm);
    var filtrage = this.filtrage;
    var filtrage2 = this.filtrage2;
    this.navCtrl.push(ResultatsPage, {longitud :longitud, latitud: latitud, name:name, filtrage:filtrage, filtrage2:filtrage2, osm: osm});
  }
}
