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
    nom: 'Orly',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public db: AngularFireDatabase) {
  }

  ngOnInit(){
  	this.initForm();
  }

  initForm(){
  	this.aeroportForm = this.formBuilder.group({
  		name: ['', Validators.required],
  		type: ['']
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutaeroportPage');
  }

  saveAirport(){
    this.db.list('aeroport').push(this.aeroport);
    console.log('Aeroport sauvegardé');

}
}
