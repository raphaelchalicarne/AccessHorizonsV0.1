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
	exterieurForm: any[]=[];


  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
  }


  ngOnInit(){
  	this.exterieurForm = this.navParams.get('exterieurForm');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Exterieur1');
    console.log(this.exterieurForm.value);
  }


  saveExterieur(){

    console.log(document.getElementById('aproximite').checked);
    console.log(this.exterieurForm.get('aproximite').value);

    this.exterieurForm.controls['aproximite'].setValue(document.getElementById('aproximite').checked),
    this.exterieurForm.controls['grande'].setValue(document.getElementById('grande').checked),
    this.exterieurForm.controls['danslenceinte'].setValue(document.getElementById('danslenceinte').checked),

    console.log(this.exterieurFrom.value);
    this.exterieur = {
      aproximite:this.exterieurForm.get('aproximite').value,
      grande:this.exterieurForm.get('grande').value,
      danslenceinte: this.exterieurForm.get('danslenceinte').value,
      /*abaisses: this.exterieurForm.get('abaisses').value,
      paves: this.exterieurForm.get('paves').value,
      etroits: this.exterieurForm.get('etroits').value,
      devers: this.exterieurForm.get('devers').value,
      pente: this.exterieurForm.get('pente').value,*/
    }
  



  }
  }



 