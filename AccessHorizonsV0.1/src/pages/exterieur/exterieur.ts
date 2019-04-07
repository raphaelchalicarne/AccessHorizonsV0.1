import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams, ViewController } from 'ionic-angular'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AjoutlieuPage } from '../ajoutlieu/ajoutlieu';

import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';


@Component({
  selector: 'page-exterieur',
  templateUrl: 'exterieur.html',
})

export class ExterieurPage {
	exterieurForm: FormGroup;
  exterieur: any;


  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
  }


  ngOnInit(){
  	this.exterieurForm = this.navParams.get('exterieurForm');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Exterieur');
    //console.log(this.exterieurForm.value);
  }


  saveExterieur(){

    this.exterieurForm.controls['aproximite'].setValue((<HTMLInputElement> document.getElementById('aproximite')).checked);
    this.exterieurForm.controls['grande'].setValue((<HTMLInputElement> document.getElementById('grande')).checked);
    this.exterieurForm.controls['danslenceinte'].setValue((<HTMLInputElement> document.getElementById('danslenceinte')).checked);
    this.exterieurForm.controls['abaisses'].setValue((<HTMLInputElement> document.getElementById('abaisses')).checked);
    this.exterieurForm.controls['paves'].setValue((<HTMLInputElement> document.getElementById('paves')).checked);
    this.exterieurForm.controls['etroits'].setValue((<HTMLInputElement> document.getElementById('etroits')).checked);
    this.exterieurForm.controls['devers'].setValue((<HTMLInputElement> document.getElementById('devers')).checked);
    this.exterieurForm.controls['pente'].setValue((<HTMLInputElement> document.getElementById('pente')).checked);


 

    this.exterieur = {
      aproximite:this.exterieurForm.get('aproximite').value,
      grande:this.exterieurForm.get('grande').value,
      danslenceinte: this.exterieurForm.get('danslenceinte').value,
      abaisses: this.exterieurForm.get('abaisses').value,
      paves: this.exterieurForm.get('paves').value,
      etroits: this.exterieurForm.get('etroits').value,
      devers: this.exterieurForm.get('devers').value,
      pente: this.exterieurForm.get('pente').value,
    }
  }

closeModal(){
  this.viewCtrl.dismiss();
  }

  }



 