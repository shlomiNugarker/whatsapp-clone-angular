import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Chat } from 'src/app/models/chat';
import { ChatService } from 'src/app/services/chat-service/chat.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  constructor(private chatService: ChatService) {}

  subscription: Subscription | undefined;
  chats: Chat[] | undefined;
  selectedChat: Chat | null = null;

  modalNameToShow: string = ''; // 'new-chat', 'profile', 'search-message', 'contact-info', 'communities', 'status

  ngOnInit(): void {
    this.chatService.query();
    this.subscription = this.chatService.chats$.subscribe((chats) => {
      this.chats = chats;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  onSelectChat(chatId: string) {
    if (!this.chats) return;
    const chatIdx = this.chats.findIndex((chat) => chat.id === chatId);
    this.selectedChat = this.chats[chatIdx];
  }

  onShowModal(name: string) {
    this.modalNameToShow = name;
  }
}
