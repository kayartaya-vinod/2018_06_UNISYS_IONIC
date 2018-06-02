import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactDetailsPage } from '../contact-details/contact-details';

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
    this.navCtrl.push(ContactDetailsPage);
  }

}
