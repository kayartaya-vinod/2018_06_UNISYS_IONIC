import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactsProvider } from '../../providers/contacts/contacts';
import { ContactDetailsPage } from '../contact-details/contact-details';


@IonicPage()
@Component({
  selector: 'page-add-edit-contact',
  templateUrl: 'add-edit-contact.html',
})
export class AddEditContactPage {

  title: string;
  mode: string; // ADD or EDIT
  contact = {};
  callback: any;

  constructor(
    public cPrvdr: ContactsProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.mode = this.navParams.data['mode'];
    this.mode = this.mode ? this.mode : 'ADD';

    if (this.mode == 'ADD') {
      this.title = 'Add new contact';
    }
    else {
      this.title = 'Edit contact details';
      this.contact = this.navParams.data['contact'];
      this.callback = this.navParams.data['callback'];
    }

  }

  save() {
    if (this.mode == 'ADD') {
      this.cPrvdr.add(this.contact)
        .subscribe(c => {
          this.navCtrl.pop()
            .then(() => {
              this.navCtrl.push(ContactDetailsPage, { id: c.id });
            });
        });
    }
    else {
      this.cPrvdr.update(this.contact)
        .subscribe(data => {
          this.navCtrl.pop()
            .then(() => this.callback(data));
        });
    }
  }

}
