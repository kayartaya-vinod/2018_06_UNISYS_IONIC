import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactListPage } from '../contact-list/contact-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showAboutPage() {
    this.navCtrl.push(AboutPage);
  }

  showContactDetailsPage() {
    this.navCtrl.push(ContactListPage);
  }

}
