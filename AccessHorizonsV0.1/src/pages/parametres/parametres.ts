import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { MenuServicesPage } from '../menu-services/menu-services';

@IonicPage()
@Component({
  selector: 'page-parametres',
  templateUrl: 'parametres.html',
})
export class ParametresPage {

  typeHandicap: string;
  typeAutonomie: string;

  ngOnInit() {
    this.typeHandicap = 'moteur'; //On considère qu'un utilisateur est handicapé moteur par défaut
    this.typeAutonomie = 'autonome'; //On considère qu'un utilisateur est autonome par défaut
  }

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

  saveHandicap(param) {
    this.typeHandicap = param;
  }

  saveAutonomie(param) {
    this.typeAutonomie = param;
  }

  //isOutlineHandicap: any[] = [typeHandicap=='moteur',typeHandicap=='visuel'];

}
