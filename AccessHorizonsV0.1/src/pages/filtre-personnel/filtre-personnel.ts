import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransportsPage } from '../transports/transports';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-filtre-personnel',
  templateUrl: 'filtre-personnel.html',
})
export class FiltrePersonnelPage {
  all_categories: any = [];
  temporary: any = [];
  filtrage_personnel: any = [];
  names:any = [];
  items:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }


  ionViewDidLoad() {
       this.http.get('../assets/categories.json').subscribe(data => {
       this.temporary = data;
       var element;
       for (element in this.temporary.items){
         this.all_categories.push([this.temporary.items[element].name, this.temporary.items[element].label]);
         this.names.push(this.temporary.items[element].label);
       }
       console.log(this.names);
      })
  }
  goToTransportsPage(){
  	var filtrage = this.filtrage_personnel;
  	this.navCtrl.push(TransportsPage, {filtrage: filtrage});
  }
  initializeItems(){
  	this.items = this.names;
  }
  onInput(ev: any){
  	this.initializeItems();

  	const val = ev.target.value;

  	if (val && val.trim() != '') {
  		this.items = this.items.filter((item) => {
  			return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  		})
  	}
  }
}
