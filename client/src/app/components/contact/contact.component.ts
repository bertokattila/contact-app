import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Icon } from 'src/utils/icon';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  readonly Icon = Icon;
  mouseover: boolean = false;

  @Input()
  name: string = '';

  @Input()
  phone: string = '';

  @Input()
  profilePicture: string = undefined;

  @Output()
  removeContact = new EventEmitter();

  @Output()
  editContact = new EventEmitter();

  ngOnInit(): void {}
  onMouseEnter() {
    this.mouseover = true;
  }

  onMouseLeave() {
    this.mouseover = false;
  }

  doSomething() {
    alert('ok');
  }

  onRemove = (): void => {
    this.removeContact.emit();
  };

  onEdit = (): void => {
    this.editContact.emit();
  };
}
