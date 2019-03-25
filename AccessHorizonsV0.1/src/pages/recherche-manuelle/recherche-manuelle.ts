import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';

@IonicPage()
@Component({
  selector: 'page-recherche-manuelle',
  templateUrl: 'recherche-manuelle.html',
})
export class RechercheManuellePage {
  adresse: string = '';

  resultat: any[] = [];
  constructor(public navCtrl: NavController, 
  			  public userService: JaccedeProvider, 
  			  public navParams: NavParams,
  			  public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RechercheManuellePage');
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
  returnInfo(longitud: number, latitud: number){
  	//console.log('long',longitud);
  	//console.log('lat',latitud);
  	let flag = true;
  	this.viewCtrl.dismiss({longitud: longitud, latitud:latitud, flag: flag})
  }
  closeModal(){
  	let flag = false;
  	this.viewCtrl.dismiss({flag: flag});
  }
}
