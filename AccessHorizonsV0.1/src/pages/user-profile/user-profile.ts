import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import {MenuServicesPage} from '../menu-services/menu-services';

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html'
})
export class UserProfilePage {

  handicapType : string;
  ngOnInit() {
      this.handicapType = this.navParams.get('userHandicap');
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private menuCtrl: MenuController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }
  goToMenuServicesPage() {
      this.navCtrl.push(MenuServicesPage);
  }

  onToggleMenu() {
      this.menuCtrl.open();
  }
}
