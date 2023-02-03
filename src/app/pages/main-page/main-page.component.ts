import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from 'src/app/models/chat';
import { ChatService } from 'src/app/services/chat-service/chat.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  chats: Chat[] | null = null;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.loadChats();
  }

  loadChats() {
    this.chatService
      .getChats()
      .subscribe((chats: Chat[]) => (this.chats = chats));
    console.log(this.chats);
  }
}
