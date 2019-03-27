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
  selection: number;

  isOutlineGlobal:any[] = [true,true,true,true,true];

  isOutline:any = {
    Acces : [true, true, true, true, true],
    Accueil: [true, true, true, true, true],
    Infos: [true, true, true, true, true],
    Etat: [true, true, true, true, true],
    Services: [true, true, true, true, true],
    Personnel: [true, true, true, true, true]
  }
  notes: any = {
    Acces: 0,
    Accueil: 0,
    Infos: 0,
    Etat: 0,
    Services: 0,
    Personnel: 0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.selection = navParams.get('selection');
    console.log(this.selection);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaisserAvisPage');
    //console.log(this.isOutline.Acces)
    console.log(this.isOutline['Acces']);
  }
  closeModal(){ //fermer la fenetre SANS ENVOYER AUCUNE INFO
  	this.viewCtrl.dismiss(); 
  }
  recalculerNote(element: number){
    for (var i =1; i < 6; ++i){
      if (i != element) {
        this.isOutlineGlobal[i-1] = true;
      }
      else{
        this.isOutlineGlobal[i-1] = false;
      }
    }
    this.note_finale = (this.nombre/(this.nombre+1))*this.note_initiale + element/(this.nombre+1);
    this.note_finale = Math.round(this.note_finale*10)/10;
  }
  
  recalculerOutline(element: number, type: string){ 
    /*console.log(element);
    console.log(type);
    console.log(this.isOutline[type]);
    console.log(this.isOutline[type][element-1]);*/
    for (var i =1; i < 6; ++i){
      if (i != element) {
        this.isOutline[type][i-1] = true;
      }
      else{
        this.isOutline[type][i-1] = false;
      }
    }
    this.notes[type] = element;
    console.log(this.notes);
  
  }

  /*lors qu'on retourne à la page principale de resultats en appuyant sur le 
  bouton d'Envoyer, les infos introduites par l'utilisateur 
  sont envoyés à la base de donnés*/
  updateFirebase(){
    //ICI code pour envoyer donnés à la base de donnés
    this.viewCtrl.dismiss(); 
  }
}
