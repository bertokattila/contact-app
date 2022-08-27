import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { Icon } from 'src/utils/icon';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  readonly Icon = Icon;

  blobProfileImage: Blob = undefined;

  imgFile: string = undefined;

  name: string = '';

  phone: string = '';

  email: string = '';

  @Input()
  visible: boolean = false;

  @Output()
  hide = new EventEmitter();

  @Output()
  contact = new EventEmitter<Contact>();

  onCancel() {
    this.hide.emit();
  }

  onDone() {
    const contact = new Contact(
      this.name,
      this.phone,
      this.email,
      this.imgFile
    );
    this.contact.emit(contact);
  }

  preventHide(e: any) {
    e.stopPropagation();
  }

  onImageChange(e: any) {
    const reader = new FileReader();
    if (e.target.files && e.target.files.length === 1) {
      const [file] = e.target.files;
      this.blobProfileImage = file;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgFile = reader.result as string;
        console.log(this.imgFile);
      };
    }
  }

  onRemoveImage() {
    this.blobProfileImage = undefined;
    this.imgFile = undefined;
  }

  constructor() {}

  ngOnInit(): void {}
}
