import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Chat } from 'src/app/models/chat';
import { Message } from 'src/app/models/message';
import { ChatService } from 'src/app/services/chat-service/chat.service';
import { MessageService } from 'src/app/services/message-service/message.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  constructor(
    private chatService: ChatService,
    private messageService: MessageService
  ) {}

  chatSubscription: Subscription | undefined;
  messageSubscription: Subscription | undefined;
  chats: Chat[] | undefined;
  selectedChat: Chat | null = null;
  messages: Message[] | null = null; // in specific selected chat
  modalNameToShow: string = ''; // 'new-chat', 'profile', 'search-message', 'contact-info', 'communities', 'status

  ngOnInit(): void {
    this.chatService.query().subscribe();
    this.chatSubscription = this.chatService.chats$.subscribe((chats) => {
      // console.log(chats);
      this.chats = chats;
    });
  }

  ngOnDestroy(): void {
    if (this.chatSubscription) this.chatSubscription.unsubscribe();
    if (this.messageSubscription) this.messageSubscription.unsubscribe();
  }

  onSelectChat(chatId: string) {
    if (!this.chats) return;
    const chatIdx = this.chats.findIndex((chat) => chat.id === chatId);
    this.selectedChat = this.chats[chatIdx];
    this.getMessages(this.selectedChat.id);
  }

  getMessages(chatId: string) {
    this.messageService.query(chatId).subscribe();
    this.messageSubscription = this.messageService.messages$.subscribe(
      (messages) => {
        // console.log(messages);
        this.messages = messages;
      }
    );
  }

  onShowModal(name: string) {
    this.modalNameToShow = name;
  }
}
