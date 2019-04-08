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

//Cette page n'affiche que les détails de résultats issus de la base de données Firebase. Les résultats issus de J'accède sont 
//pris en charge par la page PlaceResultat

export class LieuResultatPage {
	resultatFirebase: any[];
	nom: string;
	entree: any;
	interieur: any;
  exterieur: any;
  equipement: any;
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
    this.exterieur = this.navParams.get('exterieur');
    this.equipement = this.navParams.get('equipement');
  	this.selection = this.navParams.get('selection');
  }

  ionViewDidLoad(){
  	console.log(this.nom);
  	//console.log(this.entree);
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  DetailsAccessModal(){ //pour accéder aux détails d'accessibilité
     let nom = this.nom;
     let entree = this.entree;
     let interieur = this.interieur;
     let exterieur = this.exterieur;
     let equipement = this.equipement;
     let modal = this.modalCtrl.create(DetailsAccessPage, {nom:nom, entree:entree, interieur:interieur, exterieur:exterieur, equipement:equipement});
     modal.present();
     modal.onDidDismiss((data) => {
     })
  }
}