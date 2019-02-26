import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiltrePersonnelPage } from './filtre-personnel';

@NgModule({
  declarations: [
    FiltrePersonnelPage,
  ],
  imports: [
    IonicPageModule.forChild(FiltrePersonnelPage),
  ],
})
export class FiltrePersonnelPageModule {}
