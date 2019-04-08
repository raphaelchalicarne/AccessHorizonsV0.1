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
  nbremarches: any;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ngOnInit(){
  	this.lieuForm = this.navParams.get('lieuForm');
  	this.entreeForm = this.navParams.get('entreeForm');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Entrée1');
    console.log(this.entreeForm.value);
  }

  dismissModal(){
  	this.viewCtrl.dismiss();
  }

  saveEntree(){
    this.entreeForm.controls['plainpied'].setValue((<HTMLInputElement> document.getElementById('plainpied')).checked);
    this.entreeForm.controls['ressault'].setValue((<HTMLInputElement>document.getElementById('ressault')).checked);
    this.entreeForm.controls['marches'].setValue((<HTMLInputElement> document.getElementById('marches')).checked);
    var k;
    for (k=1; k<4; k++){
      console.log(k);
          if ((<HTMLInputElement> document.getElementById(k)).checked == true){
            this.nbremarches = k;
          }}
    if ((<HTMLInputElement> document.getElementById('4')).checked == true){
            this.nbremarches = 'plus de 3';
          }
    this.entreeForm.controls['nbremarches'].setValue(this.nbremarches);
    this.entreeForm.controls['maincourante'].setValue((<HTMLInputElement> document.getElementById('maincourante')).checked);
    this.entreeForm.controls['nez'].setValue((<HTMLInputElement> document.getElementById('nez')).checked);
    this.entreeForm.controls['bande'].setValue((<HTMLInputElement> document.getElementById('bande')).checked);
    this.entreeForm.controls['planincline'].setValue((<HTMLInputElement> document.getElementById('plan')).checked);
    this.entreeForm.controls['enseignelisible'].setValue((<HTMLInputElement> document.getElementById('enseigne')).checked);
    this.entreeForm.controls['entreeprincipale'].setValue((<HTMLInputElement> document.getElementById('entreeprincipale')).checked);
    this.entreeForm.controls['visiteurvisible'].setValue((<HTMLInputElement> document.getElementById('visiteurvisible')).checked);
    this.entreeForm.controls['interphone'].setValue((<HTMLInputElement> document.getElementById('interphone')).checked);
    this.entreeForm.controls['porteautomatique'].setValue((<HTMLInputElement> document.getElementById('porteautomatique')).checked);
    this.entreeForm.controls['poigneeergo'].setValue((<HTMLInputElement> document.getElementById('poigneeergo')).checked);
    this.entreeForm.controls['portemaintienouvert'].setValue((<HTMLInputElement> document.getElementById('portemaintienouvert')).checked);
    this.entreeForm.controls['largeurporte'].setValue((<HTMLInputElement> document.getElementById('largeurplus')).checked);
   
    this.entree = {
    plainpied: this.entreeForm.get('plainpied').value,
    ressault: this.entreeForm.get('ressault').value,
    marches : this.entreeForm.get('marches').value,
    nbremarches : this.nbremarches,
    maincourante: this.entreeForm.get('maincourante').value,
    nez: this.entreeForm.get('nez').value,
    bande: this.entreeForm.get('bande').value,
    planincline: this.entreeForm.get('planincline').value,
    enseignelisible: this.entreeForm.get('enseignelisible').value,
    entreeprincipale: this.entreeForm.get('entreeprincipale').value,
    visiteurvisible: this.entreeForm.get('visiteurvisible').value,
    interphone: this.entreeForm.get('interphone').value,
    porteautomatique:this.entreeForm.get('porteautomatique').value,
    poigneeergo: this.entreeForm.get('poigneeergo').value,
    portemaintienouvert: this.entreeForm.get('portemaintienouvert').value,
    largeurporte: this.entreeForm.get('largeurporte').value,
    }

  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  }



 