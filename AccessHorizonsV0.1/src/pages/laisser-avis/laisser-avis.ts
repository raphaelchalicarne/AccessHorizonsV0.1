import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-laisser-avis',
  templateUrl: 'laisser-avis.html',
})
export class LaisserAvisPage {
  buttons = [1,2,3,4,5];
  note_globale: number = 2;
  note_finale: number;
  nombre: number = 1;
  isOutline:any[] = [true,true,true,true,true];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaisserAvisPage');
  }
  closeModal(){ //fermer la fenetre SANS ENVOYER AUCUNE INFO
  	let message = "Modal closed";
  	this.viewCtrl.dismiss({data : message});
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
    console.log(this.note_globale);
    this.note_finale = (this.nombre/(this.nombre+1))*this.note_globale + element/(this.nombre+1);
    console.log(this.note_finale);
  }
  
  /*lors qu'on retourne à la page principale de resultats, les infos
  introduites par l'utilisateur sont envoyés à la base de donnés*/
  updateFirebase(){
    //ICI code pour envoyer donnés à la base de donnés
    this.viewCtrl.dismiss();
  }
}
