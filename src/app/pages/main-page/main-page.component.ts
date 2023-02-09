import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Chat } from 'src/app/models/chat';
import { Message } from 'src/app/models/message';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { ChatService } from 'src/app/services/chat-service/chat.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  constructor(
    private chatService: ChatService,
    private userService: UserService,
    private authService: AuthService
  ) {}

  chatSubscription: Subscription | undefined;
  messageSubscription: Subscription | undefined;
  contactsSubscription: Subscription | undefined;
  userSubScription: Subscription | undefined;
  chats: Chat[] | undefined;
  contacts: User[] = [];
  currentUser: User | null = null;
  selectedChat: Chat | null = null;
  otherUser: User | null = null;

  modalNameToShow: string = ''; // 'new-chat', 'profile', 'search-message', 'contact-info', 'communities', 'status

  ngOnInit(): void {
    this.chatService.query().subscribe();
    this.chatSubscription = this.chatService.chats$.subscribe((chats) => {
      this.chats = chats;
    });

    this.userSubScription = this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });

    this.getContacts();
  }

  ngOnDestroy(): void {
    if (this.chatSubscription) this.chatSubscription.unsubscribe();
    if (this.messageSubscription) this.messageSubscription.unsubscribe();
    if (this.contactsSubscription) this.contactsSubscription.unsubscribe();
    if (this.userSubScription) this.userSubScription.unsubscribe();
  }

  sendMessage(messageText: string) {
    if (!this.selectedChat || !this.currentUser?.id || !this.otherUser?.id)
      return;

    this.chatService.sendMessage(
      this.selectedChat,
      this.currentUser?.id,
      messageText
    );
  }

  getChatFromChatsList(contactId: number) {
    const chatWithContactIdx = this.chats?.findIndex(
      (chat) => chat.userId === contactId
    );

    return chatWithContactIdx;
  }

  onSelectContact(contactId: number) {
    const chatInChatsListIdx = this.getChatFromChatsList(contactId);
    console.log(this.chats, chatInChatsListIdx);

    if (this.chats && chatInChatsListIdx) {
      this.selectedChat = this.chats[chatInChatsListIdx];
      return;
    }
    console.log('chat not found, create one! (todo)');
  }

  async getOtherUser() {
    let userIdToGet: number | undefined;
    userIdToGet =
      this.selectedChat?.userId === this.currentUser?.id
        ? this.selectedChat?.userId2
        : this.selectedChat?.userId;

    if (userIdToGet)
      this.otherUser = await this.userService.getUserById(userIdToGet);
  }

  onSelectChat(chatId: number) {
    if (!this.chats) return;
    const chatIdx = this.chats.findIndex((chat) => chat.id === chatId);
    this.selectedChat = this.chats[chatIdx];

    this.getOtherUser();
  }

  getContacts() {
    this.userService.query().subscribe();
    this.contactsSubscription = this.userService.users$.subscribe((users) => {
      this.contacts = users;
    });
  }

  onShowModal(name: string) {
    this.modalNameToShow = name;
  }
}
