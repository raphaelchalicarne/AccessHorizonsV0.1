import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsAccessPage } from './details-access';

@NgModule({
  declarations: [
    DetailsAccessPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsAccessPage),
  ],
})
export class DetailsAccessPageModule {}
