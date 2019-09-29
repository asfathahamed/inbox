import { Component, Input } from '@angular/core';
import { Message } from '../data/message';

@Component({
  selector: 'mail-item',
  templateUrl: './mail-item.component.html',
  styles: [`
    .my-icon {
      height: 16px;
      width: 16px;
    }
  `]
})
export class MailItemComponent  {
  @Input() message;
}
