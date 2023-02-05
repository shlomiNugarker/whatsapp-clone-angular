import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() messages: Message[] | null | undefined;

  @Output('selectModal') onSelectModal = new EventEmitter<string>();

  showSearchMessage() {
    this.onSelectModal.emit('search-message');
  }
  showContactInfo() {
    this.onSelectModal.emit('contact-info');
  }
}
