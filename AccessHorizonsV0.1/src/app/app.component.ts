import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';      

import * as firebase from 'firebase'; 

import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/auth';
//import { UserProfilePage } from '../pages/user-profile/user-profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  authPage:any = AuthPage;
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
              this.isAuth = true;
              this.content.setRoot(HomePage);
          } else {
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

