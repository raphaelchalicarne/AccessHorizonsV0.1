import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavParams, MenuController, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as firebase from 'firebase';

/*La définition des pages est nécéssaire pour pouvoir rediriger vers ces pages*/
import { ParametresPage } from '../parametres/parametres';
import { MenuServicesPage } from '../menu-services/menu-services';

@Component({
  selector: 'page-auth',
  templateUrl: './auth.html'
})
export class AuthPage implements OnInit {

  mode: string;
  authForm: FormGroup;
  errorMessage: string;

  constructor(private authService: AuthService,
              private navParams: NavParams,
              private menuCtrl: MenuController,
              private formBuilder: FormBuilder,
              private navCtrl: NavController) {}

  ngOnInit() {
      this.mode = this.navParams.get('mode');
      this.initForm();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  initForm() {
      this.authForm = this.formBuilder.group({
          email: ['',[Validators.required, Validators.email]],
          password: ['', Validators.required]
      });
  }

  onSubmitForm() {
      const email = this.authForm.get('email').value;
      const password = this.authForm.get('password').value;
      if (this.mode === 'new') {
          this.authService.signUpUser(email,password).then(
          () => {
              this.navCtrl.setRoot(ParametresPage);
              /* Si l'utilisateur crée un nouveau compte, il est redirigé vers
              la page de paramètres pour pouvoir rentrer les informations liées
              à son handicap*/
          },
          (error) => {
              this.errorMessage = error;
          }
        );
      } else if (this.mode === 'connect') {
          this.authService.signInUser(email,password).then(
          () => {
              this.navCtrl.setRoot(MenuServicesPage);
              /* Si l'utilisateur se connecte pour une enième fois,
              il est redirigé vers la page d'accueil et il n'a pas à rentrer
              à nouveau les informations liées à son handicap.*/
          },
          (error) => {
              this.errorMessage = error;
          }
        );
      }
  }
}
