import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';
import { DetailsAccessPage } from '../details-access/details-access';
import { LaisserAvisPage } from '../laisser-avis/laisser-avis';

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

  ngOnInit() {
    this.name = this.navParams.get('name');
    this.adresse = this.navParams.get('adresse');
    this.googleID = this.navParams.get('googleID');
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: JaccedeProvider, public modalCtrl: ModalController) {
  }
  
  ionViewDidLoad() {
  	this.userService.getDetails(this.googleID).subscribe(
  		(data) => {
  			this.details = data['accessibility'];
        //console.log(data);
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
       console.log(data);
     })
  }
  laisserAvis(){
    let modal = this.modalCtrl.create(LaisserAvisPage);
    modal.present();
  }
}