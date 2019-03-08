import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { JaccedeProvider} from '../../providers/jaccede/jaccede';

@IonicPage()
@Component({
  selector: 'page-commentaires',
  templateUrl: 'commentaires.html',
})
export class CommentairesPage {
  googleID: string = '';
  commentaires: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: JaccedeProvider, public viewCtrl: ViewController) {
    this.googleID = navParams.get('googleID');
  }

  ionViewDidLoad() {
    this.userService.getComments(this.googleID).subscribe(
      (data) => {
        this.commentaires = data['items'];
        console.log('data', this.commentaires);
      },
      (error) =>{
        console.log(error);
      })
  }
  closeModal(){
  	this.viewCtrl.dismiss();
  }
}
