import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Chat } from 'src/app/models/chat';
import { Message } from 'src/app/models/message';
import { User } from 'src/app/models/user';
import { ChatService } from 'src/app/services/chat-service/chat.service';
import { MessageService } from 'src/app/services/message-service/message.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  constructor(
    private chatService: ChatService,
    private messageService: MessageService,
    private userService: UserService
  ) {}

  chatSubscription: Subscription | undefined;
  messageSubscription: Subscription | undefined;
  contactsSubscription: Subscription | undefined;
  chats: Chat[] | undefined;
  contacts: User[] = [];
  selectedChat: Chat | null = null;
  messages: Message[] | null = null; // in specific selected chat
  modalNameToShow: string = ''; // 'new-chat', 'profile', 'search-message', 'contact-info', 'communities', 'status

  ngOnInit(): void {
    this.chatService.query().subscribe();
    this.chatSubscription = this.chatService.chats$.subscribe((chats) => {
      this.chats = chats;
    });

    this.getContacts();
  }

  ngOnDestroy(): void {
    if (this.chatSubscription) this.chatSubscription.unsubscribe();
    if (this.messageSubscription) this.messageSubscription.unsubscribe();
    if (this.contactsSubscription) this.contactsSubscription.unsubscribe();
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
        this.messages = messages;
      }
    );
  }

  getContacts() {
    this.userService.query().subscribe();
    this.contactsSubscription = this.userService.users$.subscribe((users) => {
      console.log(users);
      this.contacts = users;
    });
  }

  onShowModal(name: string) {
    this.modalNameToShow = name;
  }
}
