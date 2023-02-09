import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chat } from '../../models/chat';
@Component({
  selector: 'app-chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.scss'],
})
export class ChatPreviewComponent {
  @Output('selectModal') onSelectModal = new EventEmitter<string>();
  @Output('selectChat') onSelect = new EventEmitter<number>();
  @Input() chats: Chat[] | null | undefined;
  @Input() chat: Chat | null | undefined;

  lastMessage() {
    return (
      this.chat?.messages[this.chat?.messages.length - 1].text ||
      'No messages yet...'
    );
  }
}
