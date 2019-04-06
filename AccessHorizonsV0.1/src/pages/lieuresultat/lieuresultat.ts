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
	selection: number;

	constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private menuCtrl: MenuController) {
  }

  ngOnInit(){
  	this.resultatFirebase = this.navParams.get('resultatFirebase');
  	this.nom = this.navParams.get('nom');
  	this.selection = this.navParams.get('selection');
  }

  ionViewDidLoad(){
  	console.log(this.nom);
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}