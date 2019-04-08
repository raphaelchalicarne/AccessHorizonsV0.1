import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { MyApp } from './app.component';
import { MenuServicesPage} from '../pages/menu-services/menu-services';
import { JaccedeProvider } from '../providers/jaccede/jaccede';
import { HttpClientModule } from '@angular/common/http';

import { RecherchePage } from '../pages/recherche/recherche';
import { ResultatsPage } from '../pages/resultats/resultats';
import { RechercheManuellePage } from '../pages/recherche-manuelle/recherche-manuelle';
import { PlaceResultatPage } from '../pages/place-resultat/place-resultat';
import { LieuResultatPage } from '../pages/lieuresultat/lieuresultat';
import { AuthPage } from '../pages/auth/auth';
import { AuthService } from '../services/auth.service';
import { AjoutlieuPage } from '../pages/ajoutlieu/ajoutlieu';
import { EntreePage } from '../pages/entree/entree';
import { InterieurPage } from '../pages/interieur/interieur';
import { ExterieurPage } from '../pages/exterieur/exterieur';
import { EquipementPage } from '../pages/equipement/equipement';
import { ParametresPage } from '../pages/parametres/parametres';
import { CommentairesPage } from '../pages/commentaires/commentaires';
import { DetailsAccessPage } from '../pages/details-access/details-access';
import { LaisserAvisPage } from '../pages/laisser-avis/laisser-avis';
import { MapModalPage } from '../pages/map-modal/map-modal';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpModule } from '@angular/http';

const firebaseConfig = {
    apiKey: "AIzaSyDnD8ksYh0fAI-tOlrIXdcXjO0w20ws1Gk",
    authDomain: "access-horizons-862e8.firebaseapp.com",
    databaseURL: "https://access-horizons-862e8.firebaseio.com",
    projectId: "access-horizons-862e8",
    storageBucket: "access-horizons-862e8.appspot.com",
    messagingSenderId: "310689614362"
    };


@NgModule({
  declarations: [
    MyApp,
    MenuServicesPage,
    RecherchePage,
    ResultatsPage,
    RechercheManuellePage,
    PlaceResultatPage,
    LieuResultatPage,
    AuthPage,
    AjoutlieuPage,
    AuthPage,
    EntreePage,
    InterieurPage,
    ExterieurPage,
    EquipementPage,
    ParametresPage,
    CommentairesPage,
    DetailsAccessPage,
    LaisserAvisPage,
    MapModalPage ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HttpModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuServicesPage,
    RecherchePage,
    RechercheManuellePage,
    ResultatsPage,
    PlaceResultatPage,
    LieuResultatPage,
    AuthPage,
    AjoutlieuPage,
    AuthPage,
    EntreePage,
    InterieurPage,
    ExterieurPage,
    EquipementPage,
    ParametresPage,
    CommentairesPage,
    DetailsAccessPage,
    LaisserAvisPage,
    MapModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JaccedeProvider,
    //FirebaseProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
