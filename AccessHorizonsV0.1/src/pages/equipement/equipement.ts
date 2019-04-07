import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams, ViewController } from 'ionic-angular'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AjoutlieuPage } from '../ajoutlieu/ajoutlieu';

import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';


@Component({
  selector: 'page-equipement',
  templateUrl: 'equipement.html',
})

export class EquipementPage {
	equipementForm: FormGroup;
  equipement: any;


  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
  }


  ngOnInit(){
  	this.equipementForm = this.navParams.get('equipementForm');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad equipement3');
    console.log(this.equipementForm.value);
  }


  saveEquipement(){

    this.equipementForm.controls['toilettes'].setValue((<HTMLInputElement> document.getElementById('toilettes')).checked);
    this.equipementForm.controls['plainpiedamenage'].setValue((<HTMLInputElement> document.getElementById('plainpiedamenage')).checked);
    this.equipementForm.controls['marche'].setValue((<HTMLInputElement> document.getElementById('marche')).checked);
    this.equipementForm.controls['automate'].setValue((<HTMLInputElement> document.getElementById('automate')).checked);
    this.equipementForm.controls['bouclemagn'].setValue((<HTMLInputElement> document.getElementById('bouclemagn')).checked);
    this.equipementForm.controls['personnelsigne'].setValue((<HTMLInputElement> document.getElementById('personnelsigne')).checked);
    this.equipementForm.controls['personnelaccueil'].setValue((<HTMLInputElement> document.getElementById('personnelaccueil')).checked);
    this.equipementForm.controls['titrage'].setValue((<HTMLInputElement> document.getElementById('titrage')).checked);
    this.equipementForm.controls['hauteurcaisse'].setValue((<HTMLInputElement> document.getElementById('hauteurcaisse')).checked);
    this.equipementForm.controls['materieldispo'].setValue((<HTMLInputElement> document.getElementById('materieldispo')).checked);


    this.equipement = {
      toilettes:this.equipementForm.get('toilettes').value,
      plainpiedamenage:this.equipementForm.get('plainpiedamenage').value,
      marche: this.equipementForm.get('marche').value,
      automate: this.equipementForm.get('automate').value,
      bouclemagn: this.equipementForm.get('bouclemagn').value,
      personnelsigne: this.equipementForm.get('personnelsigne').value,
      personnelaccueil: this.equipementForm.get('personnelaccueil').value,
      titrage: this.equipementForm.get('titrage').value,
      hauteurcaisse:this.equipementForm.get('hauteurcaisse').value,
      materieldispo:this.equipementForm.get('materieldispo').value,
    }
  }

 closeModal(){
  this.viewCtrl.dismiss();
  }
  }



 