import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RechercheDirectePage } from './recherche-directe';

@NgModule({
  declarations: [
    RechercheDirectePage,
  ],
  imports: [
    IonicPageModule.forChild(RechercheDirectePage),
  ],
})
export class RechercheDirectePageModule {}
