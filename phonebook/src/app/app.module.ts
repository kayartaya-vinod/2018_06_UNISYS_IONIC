import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPageModule } from '../pages/about/about.module';
import { ContactsProvider } from '../providers/contacts/contacts';
import { ContactDetailsPageModule } from '../pages/contact-details/contact-details.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactListPageModule } from '../pages/contact-list/contact-list.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AboutPageModule,
    ContactDetailsPageModule,
    ContactListPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ContactsProvider
  ]
})
export class AppModule { }
