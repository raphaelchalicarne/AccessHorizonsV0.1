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
  //accessibility: any = [];

  ngOnInit() {
    this.name = this.navParams.get('name');
    this.adresse = this.navParams.get('adresse');
    this.googleID = this.navParams.get('googleID');

  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: JaccedeProvider) {
  }
  
  ionViewDidLoad() {
  	this.userService.getDetails(this.googleID)
  	.subscribe(
  		(data) => {
  			this.details = data['accessibility'];
  			this.website = data['website'];
  			if (this.details != null) {
  				this.flag = true;
  				this.label = this.details[0].children[0].label;
  				console.log(this.details);
  				console.log(this.details[0]);
  				console.log(this.details[1]);
  			}
  			else {
  				this.label = "Nada";
  			}
  		},
  		(error) =>{
  			console.log(error);
  		})
  }
    
  }
