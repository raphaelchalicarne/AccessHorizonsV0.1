import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {TransportsPage} from '../transports/transports';
/**
 * Generated class for the MenuServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-services',
  templateUrl: 'menu-services.html',
})
export class MenuServicesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuServicesPage');
  }
  goToTransportsPage(){
  	this.navCtrl.push(TransportsPage)
  }
}
