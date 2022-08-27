import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { ListMenuComponent } from './components/list-menu/list-menu.component';
import { ListMenuItemComponent } from './components/list-menu/list-menu-item/list-menu-item.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TextFieldComponent,
    ListMenuComponent,
    ListMenuItemComponent,
    ContactComponent,
    AddContactComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
