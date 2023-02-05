import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chat } from 'src/app/models/chat';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent {
  @Input() chats: Chat[] | null | undefined;
  @Input() selectedChatId: string | undefined;
  @Output('selectModal') onSelectModal = new EventEmitter<string>();
  @Output('selectChat') onSelect = new EventEmitter<string>();

  selectChat(chatId: string) {
    this.onSelect.emit(chatId);
  }

  showProfile() {
    this.onSelectModal.emit('profile');
  }
  showNewChat() {
    this.onSelectModal.emit('new-chat');
  }
  showCommunities() {
    this.onSelectModal.emit('communities');
  }
  constructor() {}
}
