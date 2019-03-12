import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';



@Component({
  selector: 'page-ajoutlieu',
  templateUrl: 'ajoutlieu.html',
})

export class AjoutlieuPage {

	lieuForm: FormGroup;
  lieu = {
    nom:'',
    ville:'',
    plainpied:'',
    ressault:'',
    marches:'',
    nbremarches:'',
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
      plainpied: [''],
      ressault: [''],
      marches: [''],
      nbremarches: [''],
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutlieuPage1');
  }


  saveLieu(){
    this.lieuForm.controls['plainpied'].setValue(document.getElementById('plainpied').checked),
    this.lieuForm.controls['ressault'].setValue(document.getElementById('ressault').checked),
    this.lieuForm.controls['marches'].setValue(document.getElementById('marches').checked),

    this.lieu = {
    nom: this.lieuForm.get('name').value,
    ville: this.lieuForm.get('ville').value,
    plainpied: this.lieuForm.get('plainpied').value,
    ressault : this.lieuForm.get('ressault').value,
    marches : this.lieuForm.get('marches').value,
    nbremarches : this.lieuForm.get('nbremarches').value,
    }

    this.db.list('lieu').push(this.lieu);
    console.log('Lieu sauvegardé1');
    console.log(this.lieuForm.get('name').value);
    if (this.lieuForm.get('name').value == 'bla'){
      console.log(this.lieuForm.get('value'));
    }
    console.log(this.lieuForm.value);
    //console.log(this.db.list('lieu').get('value'));







}
}