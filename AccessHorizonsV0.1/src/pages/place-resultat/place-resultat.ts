import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController} from 'ionic-angular';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';

import { DetailsAccessPage } from '../details-access/details-access';
import { LaisserAvisPage } from '../laisser-avis/laisser-avis';
import { CommentairesPage } from '../commentaires/commentaires';
import { MapModalPage } from '../map-modal/map-modal';

@IonicPage()
@Component({
  selector: 'page-place-resultat',
  templateUrl: 'place-resultat.html',
})
export class PlaceResultatPage {
  name: string='';
  adresse: string = '';
  googleID: string = '';
  details: any = [];
  website: string = '';
  label: string = '';
  flag: boolean = false;
  longitud: any;
  latitud: any;

  flag_note: boolean = false;
  stars_full: any[] = [];
  stars_empty: any[] = [];
  stars_half: any[] = [];
  flag2: boolean;

  selection: number;

  note_globale: number;
  note_access_mobilite: number = 2.4;  //A MODIFIER
  note_accueil: number = 2.4; //A MODIFIER
  note_infos: number = 3;
  note_etat: number = 3;
  note_services:number = 3;
  note_personnel: number = 3;

  ngOnInit() {
    this.name = this.navParams.get('name');
    this.adresse = this.navParams.get('adresse');
    this.googleID = this.navParams.get('googleID');
    this.selection = this.navParams.get('selection');
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userService: JaccedeProvider,
              public modalCtrl: ModalController,
              private menuCtrl: MenuController) {
  }
 
  ionViewDidLoad() {
    this.userService.getDetails(this.googleID).subscribe(
      (data) => {
        this.details = data['accessibility'];
        this.latitud = data['latitude'];
        this.longitud = data['longitude']; 
        //console.log(data);
        this.note_globale = data['rating']; //Note (rating) de J'accede
        if (this.note_globale != null){ //si la note n'est pas null, montrer note
          this.flag_note = true;
          if ((Number.isInteger(this.note_globale)) == false) {
          this.flag2 = true; //si note est decimale, montrer une moitié d'une étoile
          }
          this.traitementNote(this.note_globale); //traiter les icons (étoiles à montrer)
        }
        this.website = data['website'];
        if (this.details != null) //Pour verifier que le vecteur de details n'est pas nul, sinon on trouve des erreurs d'execution
        { 
          this.flag = true;
          this.label = this.details[0].children[0].label;
        }
        else {
          this.label = 'Rien';
        }
      },
      (error) =>{
        console.log(error);
    })
  }

  DetailsAccessModal(){
     let details = this.details;
     let nom = this.name;
     let modal = this.modalCtrl.create(DetailsAccessPage, {details : details, nom : nom});
     modal.present();
     modal.onDidDismiss((data) => {
     })
  }

  laisserAvisModal(){
    let note = this.note_globale;
    let selection = this.selection;
    let modal = this.modalCtrl.create(LaisserAvisPage, {selection : selection});
    modal.present();
  }

  voirCommentaires(){ //Voir les commentaires de j'accede
    let googleID = this.googleID;
    let modal = this.modalCtrl.create(CommentairesPage, {googleID : googleID});
    modal.present();
  };

  mapModal(){ //Montrer la ubication du site
    let latitud = parseFloat(this.latitud);
    let longitud = parseFloat(this.longitud);
    let modal = this.modalCtrl.create(MapModalPage, {latitud: latitud, longitud: longitud});
    modal.present();
  };
  traitementNote(note){ //Modifier la note globale reçue pour la pouvoir montrer comme étoiles
    for (var i = 0; i < Math.floor(note); ++i) {
      this.stars_full.push(i);
    }
    for (var a = 0; a < 5-Math.ceil(note); ++a) {
      this.stars_empty.push(a);
    }

  }

  onToggleMenu() {
      this.menuCtrl.open();
  }
}

