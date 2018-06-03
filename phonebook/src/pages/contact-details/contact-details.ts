import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ContactsProvider } from '../../providers/contacts/contacts';
import { AddEditContactPage } from '../add-edit-contact/add-edit-contact';

@IonicPage()
@Component({
  selector: 'page-contact-details',
  templateUrl: 'contact-details.html',
})
export class ContactDetailsPage {

  callback: any;
  contact = {};

  constructor(
    public alertCtrl: AlertController,
    public cPrvdr: ContactsProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.callback = this.navParams.data['callback'];
    
    this.cPrvdr.getById(this.navParams.data['id'])
      .subscribe(data => this.contact = data);
  }


  confirmAndDelete() {
    this.alertCtrl.create({
      title: 'Deleting this record!',
      message: 'If you confirm, this record is permanantly deleted from the address book. Are you sure?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            // delete the record and pop this page off
            this.cPrvdr.delete(this.contact['id'])
              .subscribe(() => {
                if(this.callback && typeof this.callback=='function') {
                  this.callback();
                }
                this.navCtrl.pop();
              });
          }
        },
        {
          text: 'No',
          handler: () => { }
        }
      ]
    }).present();
  }

  edit() {
    this.navCtrl.push(AddEditContactPage, 
      {mode: 'EDIT', contact: this.contact});
  }

}
