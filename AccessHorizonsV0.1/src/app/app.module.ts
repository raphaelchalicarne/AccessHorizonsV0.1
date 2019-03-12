import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { JaccedeProvider } from '../providers/jaccede/jaccede';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { MenuServicesPage} from '../pages/menu-services/menu-services';
import { RecherchePage } from '../pages/recherche/recherche';
import { ResultatsPage} from '../pages/resultats/resultats';
import { PlaceResultatPage } from '../pages/place-resultat/place-resultat';
import { DetailsAccessPage } from '../pages/details-access/details-access'
import { LaisserAvisPage } from '../pages/laisser-avis/laisser-avis';
import { CommentairesPage} from '../pages/commentaires/commentaires';

import { AuthPage } from '../pages/auth/auth';
import { AuthService } from '../services/auth.service';
import { AjoutlieuPage } from '../pages/ajoutlieu/ajoutlieu';

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
    DetailsAccessPage,
    LaisserAvisPage,
    CommentairesPage,
    AuthPage,
    AjoutlieuPage,
    AuthPage  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
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
    DetailsAccessPage,
    LaisserAvisPage,
    CommentairesPage,
    AuthPage,
    AjoutlieuPage,
    AuthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JaccedeProvider
  ]
})
export class AppModule {}
