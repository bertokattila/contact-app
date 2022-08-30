import { Component } from '@angular/core';
import { Icon } from 'src/utils/icon';
import { Contact } from './model/contact';
import { ContactDataDto } from './model/contactDataDto';
import { ProfilePictureDto } from './model/profilePictureDto';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private contactService: ContactService) {}
  readonly Icon = Icon;
  private showAddContactModal: boolean = false;
  title = 'Contacts app';

  contacts: { [id: string]: Contact } = {};

  contactToEdit: Contact = new Contact(-1, '', '', '', undefined);

  setShowAddContactModal(val: boolean) {
    this.showAddContactModal = val;
  }

  getShowAddContactModal(): boolean {
    return this.showAddContactModal;
  }

  removeContact = (id: number) => {
    delete this.contacts[id.toString()];
    this.contactService.deleteContact(id).subscribe();
  };

  addContact(contact: Contact) {
    this.setShowAddContactModal(false);
    this.contacts[contact.id.toString()] = contact;
  }

  editContact(id: number) {
    this.setShowAddContactModal(true);
    this.contactToEdit = this.contacts[id.toString()];
  }

  ngOnInit(): void {
    this.contactService
      .getContacts()
      .subscribe((contacts: ContactDataDto[]) => {
        if (contacts) {
          for (const contact of contacts) {
            this.contacts[contact.id.toString()] = new Contact(
              contact.id,
              contact.name,
              contact.phone,
              contact.email,
              undefined /// loaded later by lazy loading
            );
          }
          for (const key in this.contacts) {
            this.contactService
              .getImage(this.contacts[key].id)
              .subscribe((resp: ProfilePictureDto) => {
                if (resp.picture) {
                  this.contacts[resp.id.toString()].image =
                    'data:' + resp.type + ';base64,' + resp.picture;
                }
              });
          }
        }
      });
  }
}
