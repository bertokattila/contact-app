import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {}

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
}
