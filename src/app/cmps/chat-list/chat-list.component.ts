import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent {
  chats: number[] = [1, 3, 4, 5, 6, 7, 8, 9.1, 11, 13, 14, 15, 16, 17, 18];
}
