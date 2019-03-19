import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { MenuServicesPage} from '../pages/menu-services/menu-services';
import { JaccedeProvider } from '../providers/jaccede/jaccede';
import { HttpClientModule } from '@angular/common/http';
import { RecherchePage } from '../pages/recherche/recherche';
import { ResultatsPage} from '../pages/resultats/resultats';
import { PlaceResultatPage } from '../pages/place-resultat/place-resultat';
//import { FiltrePersonnelPage } from '../pages/filtre-personnel/filtre-personnel';
//import {PlaceResultPage} from '../pages/place-result/place-result';
import { AuthPage } from '../pages/auth/auth';
import { AuthService } from '../services/auth.service';
import { AjoutlieuPage } from '../pages/ajoutlieu/ajoutlieu';
import { EntreePage } from '../pages/entree/entree';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './firebase.credentials';

 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserProfilePage,
    MenuServicesPage, 
    RecherchePage,
    ResultatsPage,
    PlaceResultatPage,
    //FiltrePersonnelPage,
    AuthPage,
    AjoutlieuPage,
    //,PlaceResultPage
    AuthPage,
    EntreePage ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserProfilePage, 
    MenuServicesPage,
    RecherchePage,
    ResultatsPage,
    PlaceResultatPage,
    //FiltrePersonnelPage,
    AuthPage,
    AjoutlieuPage,
    AuthPage,
    EntreePage

    //,PlaceResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JaccedeProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
