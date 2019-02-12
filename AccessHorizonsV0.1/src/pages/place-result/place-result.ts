import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-place-result',
  templateUrl: 'place-result.html',
})
export class PlaceResultPage {
  name: string='';
  
  ngOnInit() {
    this.name = this.navParams.get('name');
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceResultPage');
  }

}
