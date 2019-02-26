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
  	this.lieuForm = this.formBuilder.group({
  		name: ['', Validators.required],
  		ville: [''],
      critere1:[''],
      critere2:[''],
      critere3:[''],
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutlieuPage');
  }


  saveLieu(){
    this.lieu = {
    nom: this.lieuForm.get('name').value,
    ville: this.lieuForm.get('ville').value,
    critere1 : this.lieuForm.get('critere1').value,
    critere2 : this.lieuForm.get('critere2').value,
    critere3 : this.lieuForm.get('critere3').value,
    }

    this.db.list('lieu').push(this.lieu);
    console.log('Lieu sauvegardé3');
    console.log(this.lieuForm.get('name').value);
    //console.log(this.db.once('value'));




}
}