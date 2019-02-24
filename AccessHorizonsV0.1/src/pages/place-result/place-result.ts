import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JaccedeProvider } from '../../providers/jaccede/jaccede';

@IonicPage()
@Component({
  selector: 'page-place-result',
  templateUrl: 'place-result.html',
})
export class PlaceResultPage {
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: JaccedeProvider) {
  }
  
  ionViewDidLoad() {
  	this.userService.getDetails(this.googleID).subscribe(
  		(data) => {
  			//console.log('data', data);
  			this.details = data['accessibility'];
  			this.website = data['website'];
  			if (this.details != null) //Pour verifier que le vecteur de details n'est pas nul, sinon on trouve des erreurs d'execution
  			{ 
  				this.flag = true;
  				this.label = this.details[0].children[0].label;
  				//console.log('details:', this.details);
  			}
  			else {
  				this.label = 'Rien';
  			}
  		},
  		(error) =>{
  			console.log(error);
  		})/*,
    this.userService.getComments(this.googleID).subscribe(
      (data) => {
        this.comments = data[];
      },
      (error) =>{
        console.log(error);
      }
      )*/
  }
    
}
