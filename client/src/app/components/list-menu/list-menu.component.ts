import { Component, Input, OnInit } from '@angular/core';
import { Icon } from 'src/utils/icon';
import { ListMenuItem } from './list-menu-item/list-menu-item-model';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css'],
})
export class ListMenuComponent implements OnInit {
  @Input()
  listMenuItems: ListMenuItem[] = [];
  readonly Icon = Icon;
  private showList: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  onClick(): void {
    this.showList = !this.showList;
  }
  getShowList(): boolean {
    return this.showList;
  }
}
