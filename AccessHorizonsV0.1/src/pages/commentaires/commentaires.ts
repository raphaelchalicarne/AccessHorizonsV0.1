import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { JaccedeProvider} from '../../providers/jaccede/jaccede';
import { HTTP } from '@ionic-native/http/ngx';

@IonicPage()
@Component({
  selector: 'page-commentaires',
  templateUrl: 'commentaires.html',
})
export class CommentairesPage {
  googleID: string = '';
  commentaires: any[] = [];
  flag: boolean = false;

  apiKey: string = '93e6cdc203eeca0079b935f2370dee27d9840c34f1b064a9b71cd7292bde6a9b';

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              public userService: JaccedeProvider, 
              public viewCtrl: ViewController,
              private http: HTTP) {
    this.googleID = navParams.get('googleID'); 
  }

  ionViewDidLoad() {
    /*this.userService.getComments(this.googleID).subscribe(
      (data) => {
        if (data != null){ //S'il n'y a pas de commentaires
          this.flag = true;
          this.commentaires = data['items'];
        }
        //console.log('data', data);
      },
      (error) =>{
        console.log(error);
      })*/

    let myUrl = 'https://apidev.jaccede.com/v4/places/'+this.googleID+'/comments?api_key='+this.apiKey+'';
    this.http.get(myUrl, {}, {})
    .then(data => {
      this.commentaires = JSON.parse(data.data);
      if (this.commentaires != null){
        this.flag = true;
      }
    })
    .catch(error =>{
      //alert(error);
    });
  }
  closeModal(){
  	this.viewCtrl.dismiss();
  }
}
