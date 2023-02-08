import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Chat } from 'src/app/models/chat';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit {
  @Input() chats: Chat[] | null | undefined;
  @Input() selectedChatId: string | undefined;
  @Input() currentUser: User | null | undefined;
  @Output('selectModal') onSelectModal = new EventEmitter<string>();
  @Output('selectChat') onSelect = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

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
}
