import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result-modal',
  templateUrl: 'result-modal.html',
})
export class ResultModalPage {
  adresse: string = '';
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	this.adresse = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultModalPage');
  }

}
