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
  closeModal(){ //fermer la fenetre SANS ENVOYER AUCUNE INFO
  	let message = "Modal closed";
  	this.viewCtrl.dismiss({data : message});
  }
  /*lors qu'on retourne à la page principale de resultats, les infos
  introduites par l'utilisateur sont envoyés à la base de donnés*/

  updateFirebase(){
    //ICI code pour envoyer donnés à la base de donnés
    this.viewCtrl.dismiss();
  }
}
