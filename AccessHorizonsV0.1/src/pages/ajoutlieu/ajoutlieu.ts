import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntreePage } from '../entree/entree';
import { InterieurPage } from '../interieur/interieur';

import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';



@Component({
  selector: 'page-ajoutlieu',
  templateUrl: 'ajoutlieu.html',
})

export class AjoutlieuPage {


	lieuForm: FormGroup;
  entreeForm: FormGroup;
  interieurForm: FormGroup;
  entree = {
      plainpied: '',
      ressault: '',
      marches: '',
      nbremarches: '',
      maincourante: '',
      nez:'',
      bande:'',
      planincline: '',
      enseignelisible: '',
      entreeprincipale:'',
      visiteurvisible:'',
      interphone:'',
      marquageportevitree:'',
      porteautomatique:'',
      poigneeergo:'',
      portemaintienouvert:'',
      largeurporte:'',
      }

  interieur = {
    alleeslarges:'',
    eclairage:'',
    espacecalme:'',
    fauteuilroulant:'',
    plusieursniveaux:'',
    ascenseur:'',
    marche:'',
    escaliermeca:'',
    }

  lieu = {
    name:'',
    ville:'',
    entree:'',
    interieur:'',
    }

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private formBuilder: FormBuilder, public db: AngularFireDatabase) {
  }

  ngOnInit(){
  	this.initForm();
  }

  initForm(){
  	this.entreeForm = this.formBuilder.group({
      plainpied: [''],
      ressault: [''],
      marches: [''],
      nbremarches: [''],
      maincourante: [''],
      nez:[''],
      bande:[''],
      planincline: [''],
      enseignelisible: [''],
      entreeprincipale:[''],
      visiteurvisible:[''],
      interphone:[''],
      marquageportevitree:[''],
      porteautomatique:[''],
      poigneeergo:[''],
      portemaintienouvert:[''],
      largeurporte:[''],
  	})

    this.interieurForm = this.formBuilder.group({
      alleeslarges:[''],
      eclairage:[''],
      espacecalme:[''],
      fauteuilroulant:[''],
      plusieursniveaux:[''],
      ascenseur:[''],
      marche:[''],
      escaliermeca:[''],
      })

    this.lieuForm = this.formBuilder.group({
      name:[''],
      ville:[''],
      entree: [''],
      interieur: [''],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutlieuPage1');
  }


  saveLieu(){
    //this.lieuForm.controls['plainpied'].setValue(document.getElementById('plainpied').checked),
    //this.lieuForm.controls['ressault'].setValue(document.getElementById('ressault').checked),
    //this.lieuForm.controls['marches'].setValue(document.getElementById('marches').checked),

    this.entree = {
    plainpied: this.entreeForm.get('plainpied').value,
    ressault : this.entreeForm.get('ressault').value,
    marches : this.entreeForm.get('marches').value,
    nbremarches : this.entreeForm.get('nbremarches').value,
    maincourante: this.entreeForm.get('maincourante').value,
    nez: this.entreeForm.get('nez').value,
    bande: this.entreeForm.get('bande').value,
    planincline: this.entreeForm.get('planincline').value,
    enseignelisible: this.entreeForm.get('enseignelisible').value,
    entreeprincipale: this.entreeForm.get('entreeprincipale').value,
    visiteurvisible: this.entreeForm.get('visiteurvisible').value,
    interphone: this.entreeForm.get('interphone').value,
    marquageportevitree: this.entreeForm.get('marquageportevitree').value,
    porteautomatique:this.entreeForm.get('porteautomatique').value,
    poigneeergo: this.entreeForm.get('poigneeergo').value,
    portemaintienouvert: this.entreeForm.get('portemaintienouvert').value,
    largeurporte: this.entreeForm.get('largeurporte').value,
    }

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

    this.lieu = {
      nom: this.lieuForm.get('name').value,
      ville: this.lieuForm.get('ville').value,
      entree: this.entree,
      interieur: this.interieur,
    }

    this.db.list('lieu').push(this.lieu);
    console.log('Lieu sauvegardé1');
    }
    //console.log(this.lieuForm.value);
    //console.log(this.db.list('lieu').get('value'));


  gotoEntreePage(){
    let lieuForm = this.lieuForm;
    let entreeForm = this.entreeForm;
    this.navCtrl.push(EntreePage, {lieuForm:lieuForm, entreeForm:entreeForm});
  }

  gotoInterieurPage(){
    let lieuForm = this.lieuForm;
    let interieurForm = this.interieurForm;
    this.navCtrl.push(InterieurPage, {lieuForm:lieuForm, interieurForm:interieurForm});
  }






}