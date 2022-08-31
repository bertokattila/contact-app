import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactDto } from 'src/app/model/contactDto';
import { ContactService } from 'src/app/services/contact.service';
import { Icon } from 'src/utils/icon';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  readonly Icon = Icon;

  blobProfileImage: Blob = undefined;

  imgType: string = undefined;

  /// if the contact was edited, but the image stayed the same,
  /// we do not want to send it again as it would be unnecesary overhead
  imageChanged: boolean = false;

  @Input()
  visible: boolean = false;

  @Input()
  contactToEdit: Contact = new Contact(-1, '', '', '', undefined);

  @Output()
  hide = new EventEmitter();

  @Output()
  contact = new EventEmitter<Contact>();

  shake: boolean = false;

  onCancel() {
    this.clear();
    this.hide.emit();
  }

  onDone() {
    if (
      this.contactToEdit.name.length <= 0 ||
      this.contactToEdit.phone.length <= 0 ||
      this.contactToEdit.email.length <= 0
    ) {
      return;
    }

    const contactDto = new ContactDto(
      this.contactToEdit.name,
      this.contactToEdit.phone,
      this.contactToEdit.email
    );

    if (this.contactToEdit.id === -1) {
      // if it is a new contact
      this.contactService.sendContact(contactDto).subscribe((response) => {
        const contact = new Contact(
          response.id,
          this.contactToEdit.name,
          this.contactToEdit.phone,
          this.contactToEdit.email,
          this.contactToEdit.image
        );
        this.contact.emit(contact);

        if (this.blobProfileImage !== undefined) {
          this.contactService
            .sendImage(
              this.blobProfileImage,
              response.id.toString(),
              this.imgType
            )
            .subscribe();
        }
        this.clear();
      });
    } else {
      // if it is a contact to edit
      this.contactService
        .editContact(this.contactToEdit.id, contactDto)
        .subscribe((_response) => {
          const contact = new Contact(
            this.contactToEdit.id,
            this.contactToEdit.name,
            this.contactToEdit.phone,
            this.contactToEdit.email,
            this.contactToEdit.image
          );
          this.contact.emit(contact);

          if (this.imageChanged) {
            this.contactService
              .sendImage(
                this.blobProfileImage === undefined
                  ? null
                  : this.blobProfileImage,
                this.contactToEdit.id.toString(),
                this.imgType === undefined ? null : this.imgType
              )
              .subscribe();
          }
          this.clear();
        });
    }
  }

  preventHide(e: any) {
    e.stopPropagation();
  }

  onImageChange(e: any) {
    const reader = new FileReader();
    if (e.target.files && e.target.files.length === 1) {
      const [file] = e.target.files;
      this.blobProfileImage = file;
      this.imgType = file.type;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.contactToEdit.image = reader.result as string;
        this.imageChanged = true;
      };
    }
  }

  onRemoveImage() {
    this.blobProfileImage = undefined;
    this.contactToEdit.image = undefined;
    this.imgType = undefined;
    this.imageChanged = true;
  }

  clear() {
    this.imageChanged = false;
    this.blobProfileImage = undefined;
    this.imgType = undefined;
    this.contactToEdit = new Contact(-1, '', '', '', undefined);
  }

  ngOnInit(): void {}
}
