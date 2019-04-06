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

  adresse2: any = [];

  googleID: string = '';
  details: any = [];
  website: string = '';
  label: string = '';
  //flag: boolean = false;
  url: string;
  flag: string;
  longitude: any;
  latitude1: any;
  latitude2: any;
  phone: number;
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

  tipo: any;

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
  	//this.url = 'https://apidev.jaccede.com/v4/places/'+this.googleID+'?lang=fr&api_key='+this.apiKey+'';
  	//https://apidev.jaccede.com/v4/places/ChIJE3ej1mD0ikcR2l81qN05xEM?lang=fr&api_key=93e6cdc203eeca0079b935f2370dee27d9840c34f1b064a9b71cd7292bde6a9b
  	let myUrl = 'https://apidev.jaccede.com/v4/places/'+this.googleID+'?lang=fr&api_key='+this.apiKey+'';
    this.http.get(myUrl,{}, {})
    .then(data => {
      alert(data.data);
      alert(data.data.latitude);
      alert(data.data.address.city);
      alert(typeof data.data);
      //alert(data.headers);
      //alert(data.status);
      //alert(data.url);
      
      this.headers1 = data.headers;
      //this.headers2 = JSON.parse(data.headers);
      

      this.status1 = data.status;
      //this.data = data.data;

      this.info = data.data;

      this.latitude2 = data.data.latitude;

      if (this.info != null) {
      	this.flag = "Data existe";
      	this.tipo = typeof this.info;
      }
      else{
      	this.flag = "Data Es NULL";
      }
      this.error = "No hay error";
      //this.latitude1 = this.info.latitude;
      //this.latitude2 = this.info["latitude"];
      //this.phone = this.info['phone'];
      //this.adresse2 = this.info["address"];
      //this.details = this.info.accessibility;

      //this.details = JSON.parse(data.data.accessibility);
      
      //this.latitude1 = JSON.parse(data.data.latitude);
      //this.longitude = JSON.parse(data.data.longitude);
      //this.longitude = JSON.parse(data.data.longitude);

      //this.note_globale = JSON.parse(data.data.rating);
      //this.adresse2 = JSON.parse(data.data.address);
      /*if (this.note_globale != null){ //si la note n'est pas null, montrer note
          this.flag_note = true;
          if ((Number.isInteger(this.note_globale)) == false) {
          this.flag2 = true; //si note est decimale, montrer une moitié d'une étoile
          }
          this.traitementNote(this.note_globale); //traiter les icons (étoiles à montrer)
       }*/
      //this.website = JSON.parse(data.data.website);
    })
    .catch(error =>{
    	this.error = error;
    	alert(error);
        //alert('Error !');
    });
    /*this.userService.getDetails(this.googleID).subscribe(
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
    let latitud = parseFloat(this.latitude1);
    let longitud = parseFloat(this.longitude);
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

