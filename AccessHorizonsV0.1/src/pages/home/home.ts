import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProfilePage } from '..pages/user-profile/user-profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
  
  goToUserProfilePage() {
    this.navCtrl.push(UserProfilePage);
  }

}