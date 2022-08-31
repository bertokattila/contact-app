import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
})
export class TextFieldComponent implements OnInit {
  @Input()
  placeholder: string = 'Example';

  @Input()
  label: string = 'Label';

  @Input()
  value: string = '';

  @Output()
  valueChange = new EventEmitter<string>();
  onChange() {
    this.valueChange.emit(this.value);
  }
  constructor() {}

  ngOnInit(): void {}
}
