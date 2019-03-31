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
	lieuForm: FormGroup;
	entreeForm: FormGroup;
  entree: any;


  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ngOnInit(){
  	this.lieuForm = this.navParams.get('lieuForm');
  	this.entreeForm = this.navParams.get('entreeForm');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Entrée');
  }

  dismissModal(){
  	this.viewCtrl.dismiss();
  }

  saveEntree(){

    this.entreeForm.controls['plainpied'].setValue(document.getElementById('plainpied').checked),
    this.entreeForm.controls['ressault'].setValue(document.getElementById('ressault').checked),
    this.entreeForm.controls['marches'].setValue(document.getElementById('marches').checked),
    this.entreeForm.controls['nbremarches'].setValue(document.getElementById('1').checked),
    this.entreeForm.controls['maincourante'].setValue(document.getElementById('maincourante').checked),
    this.entreeForm.controls['nez'].setValue(document.getElementById('nez').checked),
    this.entreeForm.controls['bande'].setValue(document.getElementById('bande').checked),
    this.entreeForm.controls['planincline'].setValue(document.getElementById('planincline').checked),
    this.entreeForm.controls['enseignelisible'].setValue(document.getElementById('enseignelisible').checked),
    this.entreeForm.controls['entreeprincipale'].setValue(document.getElementById('entreeprincipale').checked),
    this.entreeForm.controls['visiteurvisible'].setValue(document.getElementById('visiteurvisible').checked),
    this.entreeForm.controls['interphone'].setValue(document.getElementById('interphone').checked),
    this.entreeForm.controls['enseignelisible'].setValue(document.getElementById('enseignelisible').checked),
    this.entreeForm.controls['marquageportevitree'].setValue(document.getElementById('marquageportevitree').checked),
    this.entreeForm.controls['porteautomatique'].setValue(document.getElementById('porteautomatique').checked),
    this.entreeForm.controls['poigneeergo'].setValue(document.getElementById('poigneeergo').checked),
    this.entreeForm.controls['portemaintienouvert'].setValue(document.getElementById('portemaintienouvert').checked),
    this.entreeForm.controls['largeurporte'].setValue(document.getElementById('largeurplus').checked),


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

    console.log(this.entreeForm.value);
  }



  }



 