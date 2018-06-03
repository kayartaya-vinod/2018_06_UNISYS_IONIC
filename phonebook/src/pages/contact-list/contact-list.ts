import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactsProvider } from '../../providers/contacts/contacts';
import { ContactDetailsPage } from '../contact-details/contact-details';

@IonicPage()
@Component({
  selector: 'page-contact-list',
  templateUrl: 'contact-list.html',
})
export class ContactListPage {

  contacts = [];

  constructor(
    public cPrvdr: ContactsProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.cPrvdr.getAll()
      .subscribe(data => this.contacts = data);
  }

  showContactDetailsFor(contactId: number) {
    this.navCtrl.push(ContactDetailsPage, 
      { id: contactId, callback: ()=>this.ionViewDidLoad() });
  }

}
