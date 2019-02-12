import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { MenuServicesPage} from '../pages/menu-services/menu-services';
import { TransportsPage } from '../pages/transports/transports';
import {AirportPage} from '../pages/airport/airport';
<<<<<<< HEAD
import {ResultModalPage} from '../pages/result-modal/result-modal';
import {PlaceResultPage} from '../pages/place-result/place-result';
import { JaccedeProvider } from '../providers/jaccede/jaccede';
import { HttpClientModule } from '@angular/common/http';
 
=======
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { FIREBASE_CONFIG } from './firebase.credentials';

>>>>>>> origin/Gaëlle
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserProfilePage,
    MenuServicesPage, 
    TransportsPage,
    AirportPage,
    ResultModalPage,
    PlaceResultPage
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    HttpClientModule, 
    IonicModule.forRoot(MyApp)
=======
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
>>>>>>> origin/Gaëlle
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserProfilePage, 
    MenuServicesPage, 
    TransportsPage,
    AirportPage,
    ResultModalPage,
    PlaceResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JaccedeProvider
  ]
})
export class AppModule {}
