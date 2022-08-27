import { Component, Input, OnInit } from '@angular/core';
import { Icon } from 'src/utils/icon';
import { ListMenuItem } from './list-menu-item-model';

@Component({
  selector: 'app-list-menu-item',
  templateUrl: './list-menu-item.component.html',
  styleUrls: ['./list-menu-item.component.css'],
})
export class ListMenuItemComponent implements OnInit {
  @Input()
  data: ListMenuItem | undefined;

  constructor() {}

  ngOnInit(): void {}
}
