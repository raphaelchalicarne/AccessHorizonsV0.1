import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntreePage } from '../entree/entree';
import { InterieurPage } from '../interieur/interieur';
import { ExterieurPage } from '../exterieur/exterieur';
import { EquipementPage } from '../equipement/equipement';
import { TestPage } from '../test/test';

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
  exterieurForm: FormGroup;
  equipementForm: FormGroup;

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
    fauteuiltotal:'',
    plusieursniveaux:'',
    ascenseur:'',
    marche:'',
    escaliermeca:'',
    }

  exterieur = {
    aproximite:'',
    grande:'',
    danslenceinte:'',
    abaisses:'',
    paves:'',
    etroits:'',
    devers:'',
    pente:'',
  }

  equipement = {
    toilettes:'',
    plainpiedamenage:'',
    marche:'',
    automate:'',
    bouclemagn:'',
    personnelsigne:'',
    personnelaccueil:'',
    titrage:'',
    hauteurcaisse:'',
    materieldispo:'',
  }

  lieu = {
    nom:'',
    ville:'',
    categorie:'',
    entree:{},
    interieur:{},
    equipement:{},
    exterieur:{}
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
  	});

    this.interieurForm = this.formBuilder.group({
      alleeslarges:[''],
      eclairage:[''],
      espacecalme:[''],
      fauteuiltotal:[''],
      plusieursniveaux:[''],
      ascenseur:[''],
      marche:[''],
      escaliermeca:[''],
      });

    this.exterieurForm = this.formBuilder.group({
      aproximite:[''],
      grande:[''],
      danslenceinte:[''],
      abaisses:[''],
      paves:[''],
      etroits:[''],
      devers:[''],
      pente:[''],
    });

    this.equipementForm = this.formBuilder.group({
      toilettes:[''],
      plainpiedamenage:[''],
      marche:[''],
      automate:[''],
      bouclemagn:[''],
      personnelsigne:[''],
      personnelaccueil:[''],
      titrage:[''],
      hauteurcaisse:[''],
      materieldispo:[''],
    })

    this.lieuForm = this.formBuilder.group({
      nom:[''],
      ville:[''],
      categorie:[''],
      entree: [''],
      interieur: [''],
      exterieur: [''],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutlieuPage1');
    console.log(this.interieurForm.value);
  }


  saveLieu(){

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

    this.lieu = {
      nom: this.lieuForm.get('nom').value,
      ville: this.lieuForm.get('ville').value,
      categorie: this.lieuForm.get('categorie').value,
      entree: this.entree,
      interieur: this.interieur,
      exterieur: this.exterieur,
      equipement: this.equipement,
    }

    this.db.list('lieu').push(this.lieu);
    console.log('Lieu sauvegardé');
    }


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


  gotoExterieurPage(){
    let exterieurForm = this.exterieurForm;
    this.navCtrl.push(ExterieurPage, {exterieurForm:exterieurForm});
  }

  gotoEquipementPage(){
    let equipementForm = this.equipementForm;
    this.navCtrl.push(EquipementPage, {equipementForm:equipementForm});
  }

  gotoTestPage(){
    let lieu = this.lieu;
    this.navCtrl.push(TestPage, {lieu:lieu});
  }

}