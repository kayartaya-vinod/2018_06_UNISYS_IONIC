import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactListPage } from './contact-list';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ContactListPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactListPage),
    PipesModule
  ],
})
export class ContactListPageModule {}
