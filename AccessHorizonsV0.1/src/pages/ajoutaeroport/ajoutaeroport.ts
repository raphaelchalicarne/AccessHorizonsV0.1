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
    critere1:'',
    critere2:'',
    critere3:'',
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
      critere1:[''],
      critere2:[''],
      critere3:[''],
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutaeroportPage');
  }


  saveAirport(){
    this.aeroport = {
    critere1 : this.aeroportForm.get('critere1').value,
    critere2 : this.aeroportForm.get('critere2').value,
    critere3 : this.aeroportForm.get('critere3').value,
    nom: this.aeroportForm.get('name').value,
    ville: this.aeroportForm.get('ville').value,
    }
    this.db.list('aeroport').push(this.aeroport);
    console.log('Aeroport sauvegardé3');
    console.log(this.aeroportForm.get('name').value);


}
}
