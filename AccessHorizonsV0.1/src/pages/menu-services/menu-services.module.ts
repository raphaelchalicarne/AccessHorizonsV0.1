import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuServicesPage } from './menu-services';

import {TransportsPage} from '../transports/transports';

@NgModule({
  declarations: [
    MenuServicesPage, TransportsPage
  ],
  imports: [
    IonicPageModule.forChild(MenuServicesPage),
  ],
  entryComponents:[TransportsPage]
})
export class MenuServicesPageModule {}
