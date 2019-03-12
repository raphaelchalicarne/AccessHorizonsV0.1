import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { UserProfilePage } from '../user-profile/user-profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
              private menuCtrl: MenuController) {}

  ionViewDidLoad() {
  }
  goToUserProfilePage(handicapType : string) {
      this.navCtrl.push(UserProfilePage, {userHandicap : handicapType});
  }

  onToggleMenu() {
      this.menuCtrl.open();
  }
}
