import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProfilePage } from './user-profile';
import {MenuServicesPage} from '../menu-services/menu-services';

@NgModule({
  declarations: [
    UserProfilePage, MenuServicesPage
  ],
  entryComponents:[MenuServicesPage],
  imports: [
    IonicPageModule.forChild(UserProfilePage),
  ],
})
export class UserProfilePageModule {}
