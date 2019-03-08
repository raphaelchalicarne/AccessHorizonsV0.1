import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DetailsAccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-access',
  templateUrl: 'details-access.html',
})
export class DetailsAccessPage {
  details: any = [];
  label: string = '';
  flag: boolean = false;
  nom: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.details = navParams.get('details');
    this.nom = navParams.get('nom');
  }

  ionViewDidLoad() {
    //console.log(this.details);
    if (this.details != null) //Pour verifier que le vecteur de details n'est pas nul, sinon on trouve des erreurs d'execution
    { 
  		this.flag = true;
  		this.label = this.details[0].children[0].label;
  	}
  	else {
  		this.label = 'Rien';
  	}
  }
  closeModal(){
  	let message = "Modal closed";
  	this.viewCtrl.dismiss({data : message});
  }

}
