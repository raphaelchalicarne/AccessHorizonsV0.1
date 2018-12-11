import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransportsPage } from './transports';

@NgModule({
  declarations: [
    TransportsPage,
  ],
  imports: [
    IonicPageModule.forChild(TransportsPage),
  ],
})
export class TransportsPageModule {}
