import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuServicesPage } from './menu-services';

@NgModule({
  declarations: [
    MenuServicesPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuServicesPage),
  ],
})
export class MenuServicesPageModule {}
