import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-add-edit-contact',
  templateUrl: 'add-edit-contact.html',
})
export class AddEditContactPage {

  title: string;
  mode: string; // ADD or EDIT
  contact = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.mode = this.navParams.data['mode'];
    this.mode = this.mode? this.mode : 'ADD';

    if(this.mode=='ADD') {
      this.title = 'Add new contact';
    }
    else {
      this.title = 'Edit contact details';
      this.contact = this.navParams.data['contact'];
    }

  }

}
