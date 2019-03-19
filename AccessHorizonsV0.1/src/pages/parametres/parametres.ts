import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { MenuServicesPage } from '../menu-services/menu-services';

@IonicPage()
@Component({
  selector: 'page-parametres',
  templateUrl: 'parametres.html',
})
export class ParametresPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParametresPage');
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  goToMenu() {
    this.navCtrl.setRoot(MenuServicesPage);
    this.menuCtrl.close();
  }

}
