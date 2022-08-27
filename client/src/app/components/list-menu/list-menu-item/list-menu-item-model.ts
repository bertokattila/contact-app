import { Icon } from 'src/utils/icon';

export class ListMenuItem {
  constructor(
    public text: string,
    public icon: Icon,
    public callBack: Function
  ) {}
}
