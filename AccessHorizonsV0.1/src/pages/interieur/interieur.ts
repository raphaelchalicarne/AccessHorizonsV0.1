import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams, ViewController } from 'ionic-angular'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AjoutlieuPage } from '../ajoutlieu/ajoutlieu';

import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';


@Component({
  selector: 'page-interieur',
  templateUrl: 'interieur.html',
})

export class InterieurPage {
	lieuForm: any[]=[];
	interieurForm: any[]=[];


  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ngOnInit(){
  	this.lieuForm = this.navParams.get('lieuForm');
  	this.interieurForm = this.navParams.get('interieurForm');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Intérieur1');
    console.log(this.interieurForm.value);
  }

  dismissModal(){
  	this.viewCtrl.dismiss();
  }

  saveInterieur(){
    console.log(this.interieurForm.value);

    this.interieurForm.controls['alleeslarges'].setValue(document.getElementById('alleeslarges').checked);
    this.interieurForm.controls['eclairage'].setValue(document.getElementById('eclairage'));
    this.interieurForm.controls['espacecalme'].setValue(document.getElementById('espacecalme'));
    this.interieurForm.controls['fauteuiltotal'].setValue(document.getElementById('fauteuiltotal'));
    this.interieurForm.controls['plusieursniveaux'].setValue(document.getElementById('plusieursniveaux').checked),
    this.interieurForm.controls['ascenseur'].setValue(document.getElementById('ascenseur').checked),
    this.interieurForm.controls['marche'].setValue(document.getElementById('marche').checked),
    this.interieurForm.controls['escaliermeca'].setValue(document.getElementById('escaliermeca').checked), 

    console.log(this.interieurForm.get('alleeslarges').value)

    this.interieur = {
    alleeslarges: this.interieurForm.get('alleeslarges').value,
    eclairage: this.interieurForm.get('eclairage').value,
    espacecalme : this.interieurForm.get('espacecalme').value,
    fauteuiltotal: this.interieurForm.get('fauteuiltotal').value,
    plusieursniveaux: this.interieurForm.get('plusieursniveaux').value,
    ascenseur: this.interieurForm.get('ascenseur').value,
    marche: this.interieurForm.get('marche').value,
    escaliermeca: this.interieurForm.get('escaliermeca').value,
    }
  }



  }



 