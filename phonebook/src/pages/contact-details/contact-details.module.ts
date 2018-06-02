import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactDetailsPage } from './contact-details';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ContactDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactDetailsPage),
    PipesModule
  ],
})
export class ContactDetailsPageModule { }
