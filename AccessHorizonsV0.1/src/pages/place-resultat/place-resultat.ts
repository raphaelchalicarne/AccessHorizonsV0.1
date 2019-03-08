import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';
import { DetailsAccessPage } from '../details-access/details-access';
import { LaisserAvisPage } from '../laisser-avis/laisser-avis'; 
import { CommentairesPage } from '../commentaires/commentaires';

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
  comments: any = [];
  
  note_globale: number = 2.3;
  stars_full: any[] = [];
  stars_empty: any[] = [];
  stars_half: any[] = [];
  flag2: boolean;

  ngOnInit() {
    this.name = this.navParams.get('name');
    this.adresse = this.navParams.get('adresse');
    this.googleID = this.navParams.get('googleID');
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: JaccedeProvider, public modalCtrl: ModalController) {
  }
  
  ionViewDidLoad() {
    if ((Number.isInteger(this.note_globale)) == false) {
      this.flag2 = true; //si note est decimale, montrer une moitié d'une étoile
    }
    this.traitementNote(this.note_globale);

  	this.userService.getDetails(this.googleID).subscribe(
  		(data) => {
  			this.details = data['accessibility'];
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

  openModal(){
     let details = this.details;
     let modal = this.modalCtrl.create(DetailsAccessPage, {details : details});
     modal.present();

     modal.onDidDismiss((data) => {
     })
  }

  laisserAvisModal(){
    let note = this.note_globale;
    let modal = this.modalCtrl.create(LaisserAvisPage, {note_globale : note});
    modal.present();
  }
  voirCommentaires(){
    let modal = this.modalCtrl.create(CommentairesPage);
    modal.present();
    //modal.present();
  }

  traitementNote(note){
    for (var i = 0; i < Math.floor(note); ++i) {
      this.stars_full.push(i);
    }
    for (var a = 0; a < 5-Math.ceil(note); ++a) {
      this.stars_empty.push(a);
    }
  }
}