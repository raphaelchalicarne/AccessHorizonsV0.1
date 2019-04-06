import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details-access',
  templateUrl: 'details-access.html',
})
export class DetailsAccessPage {
  details: any = [];
  label: string = '';
  flag: boolean = false;
  flag1: boolean = false; //true si il y a des données firebase à afficher
  nom: string;
  entree: any;
  interieur: any;
  infoentree: any;
  infointerieur: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.details = navParams.get('details');
    this.nom = navParams.get('nom');
    this.entree = navParams.get('entree');
    this.interieur = navParams.get('interieur');
  }

  ionViewDidLoad() {
    if (this.details != null) //Pour verifier que le vecteur de details n'est pas nul, sinon on trouve des erreurs d'execution
    { 
  		this.flag = true;
  		this.label = this.details[0].children[0].label;
  	}

    if (this.entree != null || this.interieur != null){
      this.flag1 = true;
      this.infoentree = this.infoEntree();
      this.infointerieur = this.infoInterieur();

    }
  	else {
  		this.label = 'Rien';
  	}

    console.log(this.infointerieur);
    console.log(this.interieur);
    console.log(this.flag1);
  }
  closeModal(){
  	this.viewCtrl.dismiss();
  }

  infoEntree(){
    var L = [];
    if (this.entree.bande == true){
      L.push('')};
    if (this.entree.plainpied == true){
      L.push('Accès : De plain pied')};
    if (this.entree.ressault == true){
      L.push('Ressault')};
    if (this.entree.marches == true){
      L.push('Présence de marches')};
    if (this.entree.enseignelisible == true){
      L.push('Enseigne visible et lisible')};
    if (this.entree.entreeprincipale == true){
      L.push('Lentrée évaluée est lentrée principale')};
    if (this.entree.visiteurvisible == true){
      L.push('Visiteur visible depuis lintérieur')};
    if (this.entree.porteautomatique == true){
      L.push('Ouverture de porte : automatique')};
    if (this.entree.porteautomatique == false){
      L.push('Ouverture de porte : manuelle')};
    if (this.entree.largeurporte == true){
      L.push('Largeur du passage de la porte dentrée (cm) : 90cm et plus')};
  return L;  
    }

    infoInterieur(){
    var L = [];
    if (this.interieur.alleeslarges == true){
      L.push('Allées larges')};
    if (this.interieur.eclairage == true){
      L.push('')};
    if (this.interieur.espacecalme == true){
      L.push('Espace calme')};
    if (this.interieur.fauteuiltotal == true){
      L.push('Accès en fauteuil roulant : total')};
    if (this.interieur.plusieurssniveaux == true){
      L.push('Il y a plusieurs niveaux')};
    if (this.interieur.ascenseur == true){
      L.push('Présence dascenseur(s)')};
    if (this.interieur.marche == true){
      L.push('Présence de marche(s)')};

    }

}