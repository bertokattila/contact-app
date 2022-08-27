import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
