import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams, ViewController } from 'ionic-angular'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AjoutlieuPage } from '../ajoutlieu/ajoutlieu';

import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';


@Component({
  selector: 'page-entree',
  templateUrl: 'entree.html',
})

export class EntreePage {
	lieuForm: any;
	entreeForm: any; 
  entree: any;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ngOnInit(){
  	this.lieuForm = this.navParams.get('lieuForm');
  	this.entreeForm = this.navParams.get('entreeForm');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Entrée');
    console.log(this.entreeForm.value);
  }

  dismissModal(){
  	this.viewCtrl.dismiss();
  }

  saveEntree(){
    console.log((<HTMLInputElement> document.getElementById('ressault')).checked);
    console.log('ok');
    console.log((<HTMLInputElement> document.getElementById('plainpied')).checked);
    console.log((<HTMLInputElement> document.getElementById('plan')).checked);
    this.entreeForm.controls['plainpied'].setValue((<HTMLInputElement> document.getElementById('plainpied')).checked),
    this.entreeForm.controls['ressault'].setValue((<HTMLInputElement>document.getElementById('ressault')).checked),
    this.entreeForm.controls['marches'].setValue((<HTMLInputElement> document.getElementById('marches')).checked),
    this.entreeForm.controls['planincline'].setValue((<HTMLInputElement> document.getElementById('plan')).checked);



    this.entree = {
    plainpied: this.entreeForm.get('plainpied').value,
    ressault: this.entreeForm.get('ressault').value,
    marches : this.entreeForm.get('marches').value,
    nbremarches : this.entreeForm.get('nbremarches').value,
    maincourante: this.entreeForm.get('maincourante').value,
    nez: this.entreeForm.get('nez').value,
    bande: this.entreeForm.get('bande').value,
    planincline: this.entreeForm.get('planincline').value,
    enseignelisible: this.entreeForm.get('enseignelisible').value,
    entreeprincipale: this.entreeForm.get('entreeprincipale').value,
    visiteurvisible: this.entreeForm.get('visiteurvisible').value,
    interphone: this.entreeForm.get('interphone').value,
    marquageportevitree: this.entreeForm.get('marquageportevitree').value,
    porteautomatique:this.entreeForm.get('porteautomatique').value,
    poigneeergo: this.entreeForm.get('poigneeergo').value,
    portemaintienouvert: this.entreeForm.get('portemaintienouvert').value,
    largeurporte: this.entreeForm.get('largeurporte').value,
    }
  }



  }



 