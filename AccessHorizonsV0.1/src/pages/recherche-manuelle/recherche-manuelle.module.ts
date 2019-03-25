import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RechercheManuellePage } from './recherche-manuelle';

@NgModule({
  declarations: [
    RechercheManuellePage,
  ],
  imports: [
    IonicPageModule.forChild(RechercheManuellePage),
  ],
})
export class RechercheManuellePageModule {}
