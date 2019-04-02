import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';
import { ResultatsPage } from '../resultats/resultats';

@IonicPage()
@Component({
  selector: 'page-recherche-manuelle',
  templateUrl: 'recherche-manuelle.html',
})
export class RechercheManuellePage {
  adresse: string = '';
  resultat: any[] = [];
  filtrage: any;
  filtrage2: string;
  selection: number;

  constructor(public navCtrl: NavController,
  			  public userService: JaccedeProvider,
  			  public navParams: NavParams,
  			  public viewCtrl: ViewController) {
    this.filtrage = navParams.get('filtrage');
    this.filtrage2 = navParams.get('filtrage2');
    this.selection = navParams.get('selection');
  }

  ionViewDidLoad() {
  }
  faireRecherche(){
  	this.userService.getAutocomplete(this.adresse)
  	.subscribe(
  		(data) => {
  			this.resultat = data['features'];
  			//console.log(data);
  		},
  		(error) =>{
  			console.log(error);
  		})
  }

  closeModal(){
  	let flag = false;
  	this.viewCtrl.dismiss();
  }
  goToPlaceList(longitud: number, latitud: number){
    var filtrage = this.filtrage;
    var filtrage2 = this.filtrage2;
    var selection = this.selection;
    var adresse = this.adresse;
    console.log(filtrage);
    console.log(filtrage2);
    this.navCtrl.push(ResultatsPage, {adresse:adresse,longitud :longitud, latitud: latitud, filtrage:filtrage, filtrage2:filtrage2, selection: selection});

  }
  }

    /*faireRecherche2(){
    this.userService.getName(this.adresse)
    .subscribe(
      (data) =>{
        console.log(data);
      },
      (error) =>{
        console.log(error);
     })
  }
   /*returnInfo(longitud: number, latitud: number){
    //console.log('long',longitud);
    //console.log('lat',latitud);
    let flag = true;
    this.viewCtrl.dismiss({longitud: longitud, latitud:latitud, flag: flag})
  }*/
