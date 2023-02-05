import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.scss'],
})
export class NewChatComponent {
  @Output('selectModal') onSelectModal = new EventEmitter<string>();

  goBack() {
    this.onSelectModal.emit('');
  }
}
