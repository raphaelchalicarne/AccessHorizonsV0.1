import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import * as firebase from 'firebase';

import { AuthPage } from '../pages/auth/auth';
import { ParametresPage } from '../pages/parametres/parametres';
import { MenuServicesPage } from '../pages/menu-services/menu-services';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MenuServicesPage;
  authPage:any = AuthPage;
  paramPage:any = ParametresPage;
  isAuth: boolean;
  @ViewChild('content') content: NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      let config = {
        apiKey: "AIzaSyDnD8ksYh0fAI-tOlrIXdcXjO0w20ws1Gk",
        authDomain: "access-horizons-862e8.firebaseapp.com",
        databaseURL: "https://access-horizons-862e8.firebaseio.com",
        projectId: "access-horizons-862e8",
        storageBucket: "access-horizons-862e8.appspot.com",
        messagingSenderId: "310689614362"
      };
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged(
      (user) => {
          if (user) {
              // Lorsqu'un utilisateur est connecté, la base de l'application est la page MenuServices.
              this.isAuth = true;
              this.content.setRoot(MenuServicesPage);
          } else {
              /* Lorsqu'un utilisateur est déconnecté, la page racine de
              l'application est la page d'authentification, qui change
              d'apparence selon que l'on cherche à se connecter ou à créer
              un nouveau compte */
              this.isAuth = false;
              this.content.setRoot(AuthPage, {mode: 'connect'});
          }
      }
      );
    });
  }

  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }

  onDisconnect() {
      firebase.auth().signOut();
      this.menuCtrl.close();
  }
}
