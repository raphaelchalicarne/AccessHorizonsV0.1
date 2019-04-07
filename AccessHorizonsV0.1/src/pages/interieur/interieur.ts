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
	interieurForm: FormGroup;
  interieur: any;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ngOnInit(){
  	this.interieurForm = this.navParams.get('interieurForm');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Intérieur');
    //console.log(this.interieurForm.value);
  }

  dismissModal(){
  	this.viewCtrl.dismiss();
  }

  saveInterieur(){
    //console.log(this.interieurForm.value);

    this.interieurForm.controls['alleeslarges'].setValue((<HTMLInputElement> document.getElementById('alleeslarges')).checked);
    this.interieurForm.controls['eclairage'].setValue((<HTMLInputElement> document.getElementById('eclairage')).checked);
    this.interieurForm.controls['espacecalme'].setValue((<HTMLInputElement> document.getElementById('espacecalme')).checked);
    this.interieurForm.controls['fauteuiltotal'].setValue((<HTMLInputElement> document.getElementById('fauteuiltotal')).checked);
    this.interieurForm.controls['plusieursniveaux'].setValue((<HTMLInputElement> document.getElementById('plusieursniveaux')).checked),
    this.interieurForm.controls['ascenseur'].setValue((<HTMLInputElement> document.getElementById('ascenseur')).checked),
    this.interieurForm.controls['marche'].setValue((<HTMLInputElement> document.getElementById('marche')).checked),
    this.interieurForm.controls['escaliermeca'].setValue((<HTMLInputElement> document.getElementById('escaliermeca')).checked), 


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

  closeModal(){
    this.viewCtrl.dismiss();
  }


  }



 