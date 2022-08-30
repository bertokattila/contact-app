import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

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

  @Input()
  shake: boolean = false;

  @Output()
  valueChange = new EventEmitter<string>();
  onChange() {
    this.valueChange.emit(this.value);
  }
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.shake) {
      console.log(changes.shake.currentValue);
    }
  }
}
