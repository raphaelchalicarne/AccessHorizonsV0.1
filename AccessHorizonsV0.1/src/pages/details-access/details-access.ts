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
  exterieur: any;
  equipement: any;
  infoentree: any;
  infointerieur: any;
  infoexterieur: any;
  infoequipement: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.details = navParams.get('details');
    this.nom = navParams.get('nom');
    this.entree = navParams.get('entree');
    this.interieur = navParams.get('interieur');
    this.exterieur = navParams.get('exterieur');
    this.equipement = navParams.get('equipement');

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
      this.infoexterieur = this.infoExterieur();
      this.infoequipement = this.infoEquipement();

    }
  	else {
  		this.label = 'Rien';
  	}

    console.log(this.infointerieur);
    console.log(this.exterieur);
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
    if (this.entree.nbremarches != null){
      L.push('Nombre de marches :', this.entree.nbremarches)};
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
    return L;
    }

    infoExterieur(){
    var L=[];
    if (this.exterieur.aproximite == true){
      L.push('Stationnement handicapé à proximité de l','établissement')};
    if (this.exterieur.grande == true){
      L.push('Place plus grande que les autres places')};
    if (this.exterieur.danslenceinte == true){
      L.push('Stationnement handicapé dans lenceinte de létablissement')};
    if (this.exterieur.abaisses == true){
      L.push('Troittoirs abaissés à proximité')};
    if (this.exterieur.paves == true){
       L.push('Présence de pavés')};
    if (this.exterieur.etroits == true){
       L.push('Trottoirs étroits')};
    if (this.exterieur.devers == true){
       L.push('Dévers important')};
    if (this.exterieur.pente == true){
      L.push('Rue en pente')};
    return L;
  }

    infoEquipement(){
    var L = [];
    if (this.equipement.toilettes == true){
      L.push('Présence de toilettes')};
    if (this.equipement.planpiedamenage == true){
      L.push('Les toilettes sont de plain pied et aménagées')};
    if (this.equipement.planpiedamenage == false){
      L.push('Toilettes non aménagées')};    
    if (this.equipement.marche == true){
      L.push('Marche(s) pour accéder aux toilettes')};
    if (this.equipement.automate == true){
      L.push('')};
    if (this.equipement.bouclemagn == true){
       L.push('')};
    if (this.equipement.personnelsigne == true){
       L.push('Personnel initié à la langue des signes')};
    if (this.equipement.personnelaccueil == true){
       L.push('Personnel formé à laccueil des personnes en situation de handicap')};
    if (this.equipement.titrage == true){
      L.push('Sous titrage')}; 
    if (this.equipement.hauteurcaisse == true){
       L.push('Caisses à hauteur adaptée')};
    if (this.equipement.materieldispo == true){
      L.push('Matériel à disposition')};       
    return L;
    }
}