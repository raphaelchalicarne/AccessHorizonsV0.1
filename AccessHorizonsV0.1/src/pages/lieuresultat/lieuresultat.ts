import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController} from 'ionic-angular';

import { DetailsAccessPage } from '../details-access/details-access';
import { LaisserAvisPage } from '../laisser-avis/laisser-avis';
import { CommentairesPage } from '../commentaires/commentaires';

@IonicPage()
@Component({
  selector: 'page-lieuresultat',
  templateUrl: 'lieuresultat.html',
})
export class LieuResultatPage {
	resultatFirebase: [];
	nom: string;
	entree: any;
	interieur: any;
	selection: number;

	constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private menuCtrl: MenuController) {
  }

  ngOnInit(){
  	this.resultatFirebase = this.navParams.get('resultatFirebase');
  	this.nom = this.navParams.get('nom');
  	this.entree = this.navParams.get('entree');
  	this.interieur = this.navParams.get('interieur');
  	this.selection = this.navParams.get('selection');
  }

  ionViewDidLoad(){
  	console.log(this.nom);
  	console.log(this.entree);
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  DetailsAccessModal(){
     let nom = this.nom;
     let entree = this.entree;
     let interieur = this.interieur;
     let modal = this.modalCtrl.create(DetailsAccessPage, {nom:nom, entree:entree, interieur:interieur});
     modal.present();
     modal.onDidDismiss((data) => {
     })
  }
}