import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Icon } from 'src/utils/icon';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  readonly Icon = Icon;

  @Input()
  visible: boolean = false;

  @Output()
  hide = new EventEmitter();

  onHide() {
    this.hide.emit();
  }
  preventHide(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  constructor() {}

  ngOnInit(): void {}
}
