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
import { JaccedeProvider } from '../providers/jaccede/jaccede';
import { HttpClientModule } from '@angular/common/http';
import { RecherchePage } from '../pages/recherche/recherche';
//import { FiltrePersonnelPage } from '../pages/filtre-personnel/filtre-personnel';
//import {PlaceResultPage} from '../pages/place-result/place-result';
}
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserProfilePage,
    MenuServicesPage, 
    RecherchePage,
    //FiltrePersonnelPage,
    TransportsPage,
    AirportPage
    //,PlaceResultPage
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
    //FiltrePersonnelPage, 
    TransportsPage,
    AirportPage
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
