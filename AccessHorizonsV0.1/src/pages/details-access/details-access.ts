import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { HTTP } from '@ionic-native/http/ngx';


@IonicPage()
@Component({
  selector: 'page-details-access',
  templateUrl: 'details-access.html',
})
export class DetailsAccessPage {
  details: any = [];
  label: string = '';
  flag: boolean = false;
  name: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private http: HTTP) {
  	this.details = navParams.get('details');
    this.name = navParams.get('name');
  }

  ionViewDidLoad() {
    //alert(this.details);
    //alert(typeof this.details); // Array ?
    if (this.details != null) //Pour verifier que le vecteur de details n'est pas nul, sinon on trouve des erreurs d'execution
    { 
  		this.flag = true;
  		//this.label = this.details[0].children[0].label;
  	}
  	else {
  		//this.label = 'Rien';
  	}
  }
  closeModal(){
  	this.viewCtrl.dismiss();
  }

}
