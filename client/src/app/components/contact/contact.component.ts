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
  hide: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.hide = new EventEmitter();
  }

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

  onRemove() {
    // /this.removeContact.emit();
    console.log(this.hide);
  }
}
