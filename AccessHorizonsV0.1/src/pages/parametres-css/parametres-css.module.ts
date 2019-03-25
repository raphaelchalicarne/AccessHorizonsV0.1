import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParametresCssPage } from './parametres-css';

@NgModule({
  declarations: [
    ParametresCssPage,
  ],
  imports: [
    IonicPageModule.forChild(ParametresCssPage),
  ],
})
export class ParametresCssPageModule {}
