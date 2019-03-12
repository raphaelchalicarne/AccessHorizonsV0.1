import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'page-ajoutlieu',
  templateUrl: 'ajoutlieu.html',
})

export class AjoutlieuPage {

	lieuForm: FormGroup;
  lieu = {
    nom:'',
    ville:'',
    entree:'',
    exterieur:'',
    interieur:'',
    services:'',
   };

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public db: AngularFireDatabase) {
  }

  ngOnInit(){
  	this.initForm();
  }

  initForm(){
  	this.lieuForm = this.formBuilder.group({
  		name: ['', Validators.required],
  		ville: [''],
      entree: [''],
      exterieur: [''],
      interieur: [''],
      services: [''],
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutlieuPage');
  }


  saveLieu(){
    this.lieu = {
    nom: this.lieuForm.get('name').value,
    ville: this.lieuForm.get('ville').value,
    entree : this.lieuForm.get('entree').value,
    exterieur : this.lieuForm.get('exterieur').value,
    interieur : this.lieuForm.get('interieur').value,
    services : this.lieuForm.get('services').value,
    }

    this.db.list('lieu').push(this.lieu);
    console.log('Lieu sauvegardé3');
    console.log(this.lieuForm.get('name').value);
    //console.log(this.db.once('value'));




}
}