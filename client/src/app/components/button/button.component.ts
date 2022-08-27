import { Component, Input, OnInit } from '@angular/core';
import { Icon } from 'src/utils/icon';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input()
  text: string | undefined;

  @Input()
  icon: Icon | undefined;

  @Input()
  secondary: boolean = false;

  @Input()
  enhanced: boolean = false;

  /**
   * If true, stays in active state until clicked again
   */
  @Input()
  active: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
