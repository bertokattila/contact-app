import { Component } from '@angular/core';
import { Icon } from 'src/utils/icon';
import { Contact } from './model/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly Icon = Icon;
  private showAddContactModal: boolean = false;
  title = 'Contacts app';
  contacts: Contact[] = [];

  setShowAddContactModal(val: boolean) {
    this.showAddContactModal = val;
  }

  getShowAddContactModal(): boolean {
    return this.showAddContactModal;
  }

  doSomething = () => {
    alert('asd');
  };

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }
}
