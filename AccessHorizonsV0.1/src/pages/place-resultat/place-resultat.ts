import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController} from 'ionic-angular';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';
import { HTTP } from '@ionic-native/http/ngx';

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
  info: any;

  name: string='';
  adresse: string = '';

  googleID: string = '';
  details: any = [];
  website: string = '';
  label: string = '';
  flag: boolean = false;
  
  longitud: any;
  latitud: any;

  phone: any;

  flag_note: boolean = false;
  stars_full: any[] = [];
  stars_empty: any[] = [];
  stars_half: any[] = [];
  flag2: boolean;

  selection: number;
  error: string = '';

  note_globale: number;
  note_globale2: number;
  note_access_mobilite: number = 2.4;  //A MODIFIER
  note_accueil: number = 2.4; //A MODIFIER
  note_infos: number = 3;
  note_etat: number = 3;
  note_services:number = 3;
  note_personnel: number = 3;

  headers1: any;
  headers2: any;
  status1: any;
  status2: any;

  apiKey: string = '93e6cdc203eeca0079b935f2370dee27d9840c34f1b064a9b71cd7292bde6a9b';

  //tipo: any;

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
              private menuCtrl: MenuController,
              private http: HTTP) {
  }
 
  ionViewDidLoad() {

  	//https://apidev.jaccede.com/v4/places/ChIJE3ej1mD0ikcR2l81qN05xEM?lang=fr&api_key=93e6cdc203eeca0079b935f2370dee27d9840c34f1b064a9b71cd7292bde6a9b
  	let myUrl = 'https://apidev.jaccede.com/v4/places/'+this.googleID+'?lang=fr&api_key='+this.apiKey+'';
    this.http.get(myUrl,{}, {})
    .then(data => {
      //alert(data.data); //data is a JSON String
     // alert(typeof data.data); 

      //CODIGO CORRECTO

      this.info = JSON.parse(data.data); // On transforme data (string) en OBJECT
      //alert(typeof this.info); OBJECT
      this.latitud = this.info['latitude'];
      this.longitud = this.info['longitude'];
      this.details = this.info['accessibility'];
      //alert(this.details);
      //alert(this.details[0].label);
      this.note_globale = this.info['rating'];
      this.phone = this.info['phone'];
      this.website = this.info['website'];
      if (this.note_globale != null){ //si la note n'est pas null, montrer note
          this.flag_note = true;
          if ((Number.isInteger(this.note_globale)) == false) {
          this.flag2 = true; //si note est decimale, montrer une moitié d'une étoile
          }
          this.traitementNote(this.note_globale); //traiter les icons (étoiles à montrer)
       }
      /*if (this.details != null) //Pour verifier que le vecteur de details n'est pas nul, sinon on trouve des erreurs d'execution
       { 
         this.flag = true;
         this.label = this.details[0].children[0].label;
       }
       else {
         this.label = 'Rien';
       }*/
    })
    .catch(error =>{
    	alert(error);
        alert('Une erreur est apparue !');
    });
    /* ANCIENNE VERSION DE REQUETE A J'ACCEDE (Pour navigateur)
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
    })*/
  }

  DetailsAccessModal(){
     let details = this.details;
     let name = this.name;
     let modal = this.modalCtrl.create(DetailsAccessPage, {details : details, name : name});
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
  InformationsCriteres(){
    
  }

  onToggleMenu() {
      this.menuCtrl.open();
  }
}

