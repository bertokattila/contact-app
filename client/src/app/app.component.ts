import { Component } from '@angular/core';
import { Icon } from 'src/utils/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly Icon = Icon;
  private showAddContactModal: boolean = false;
  title = 'Contacts app';

  setShowAddContactModal(val: boolean) {
    this.showAddContactModal = val;
  }
  getShowAddContactModal(): boolean {
    return this.showAddContactModal;
  }
  doSomething = () => {
    alert('asd');
  };
}
