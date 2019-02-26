import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
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
    AuthPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    IonicModule.forRoot(MyApp)
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
    AuthPage
    //,PlaceResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JaccedeProvider
  ]
})
export class AppModule {}
