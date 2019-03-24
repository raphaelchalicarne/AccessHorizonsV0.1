import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-laisser-avis',
  templateUrl: 'laisser-avis.html',
})
export class LaisserAvisPage {
  buttons = [1,2,3,4,5];
  note_initiale: number = 2;
  note_finale: number;
  nombre: number = 1;
  isOutline:any[] = [true,true,true,true,true];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    //this.note_initiale = navParams.get('note_globale');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaisserAvisPage');
  }
  closeModal(){ //fermer la fenetre SANS ENVOYER AUCUNE INFO
  	this.viewCtrl.dismiss();
  }
  recalculerNote(element: number){
    for (var i =1; i < 6; ++i){
      if (i != element) {
        this.isOutline[i-1] = true;
      }
      else{
        this.isOutline[i-1] = false;
      }
    }
    this.note_finale = (this.nombre/(this.nombre+1))*this.note_initiale + element/(this.nombre+1);
    this.note_finale = Math.round(this.note_finale*10)/10;
  }
  
  /*lors qu'on retourne à la page principale de resultats en appuyant sur le 
  bouton d'Envoyer, les infos introduites par l'utilisateur 
  sont envoyés à la base de donnés*/
  updateFirebase(){
    //ICI code pour envoyer donnés à la base de donnés
    this.viewCtrl.dismiss();
  }
}
