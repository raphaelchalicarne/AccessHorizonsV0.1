import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'page-ajoutaeroport',
  templateUrl: 'ajoutaeroport.html',
})

export class AjoutaeroportPage {

	aeroportForm: FormGroup;
  aeroport = {
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
  	this.aeroportForm = this.formBuilder.group({
  		name: ['', Validators.required],
  		ville: [''],
      entree:[''],
      exterieur:[''],
      interieur:[''],
      services:[''],
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutaeroportPage');
  }


  saveAirport(){
    this.aeroport = {
    nom: this.aeroportForm.get('name').value,
    ville: this.aeroportForm.get('ville').value,
    entree : this.aeroportForm.get('entree').value,
    exterieur : this.aeroportForm.get('exterieur').value,
    interieur : this.aeroportForm.get('interieur').value,
    services : this.aeroportForm.get('services').value,
    }

    this.db.list('aeroport').push(this.aeroport);
    console.log('Aeroport sauvegardé4');
    console.log(this.aeroportForm.get('name').value);
    //console.log(this.db.ref().once('value'));

}
}
