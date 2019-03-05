import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-laisser-avis',
  templateUrl: 'laisser-avis.html',
})
export class LaisserAvisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaisserAvisPage');
  }
  closeModal(){
  	let message = "Modal closed";
  	this.viewCtrl.dismiss({data : message});
  }

}
