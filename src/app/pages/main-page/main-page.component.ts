import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Chat } from 'src/app/models/chat';
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
  selectedChatSubScription: Subscription | undefined;
  chats: Chat[] | undefined;
  contacts: User[] = [];
  currentUser: User | null = null;
  selectedChat: Chat | null = null;
  otherUser: User | null = null;

  modalNameToShow: string = ''; // 'new-chat', 'profile', 'search-message', 'contact-info', 'communities', 'status, 'image-preview'

  ngOnInit(): void {
    this.chatService.query().subscribe();
    this.chatSubscription = this.chatService.chats$.subscribe((chats) => {
      this.chats = chats;
      if (this.selectedChat) {
        this.onSelectChat(this.selectedChat);
      }
    });

    this.userSubScription = this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });

    this.selectedChatSubScription = this.chatService.selectedChat$.subscribe(
      (chat) => {
        this.selectedChat = chat;
      }
    );

    this.getContacts();
  }

  ngOnDestroy(): void {
    if (this.chatSubscription) this.chatSubscription.unsubscribe();
    if (this.messageSubscription) this.messageSubscription.unsubscribe();
    if (this.contactsSubscription) this.contactsSubscription.unsubscribe();
    if (this.userSubScription) this.userSubScription.unsubscribe();
    if (this.selectedChatSubScription)
      this.selectedChatSubScription.unsubscribe();
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
      (chat) => chat.userId === contactId || chat.userId2 === contactId
    );

    return chatWithContactIdx;
  }

  async onSelectContact(contactId: number) {
    const chatInChatsListIdx = this.getChatFromChatsList(contactId);

    if (chatInChatsListIdx === -1) {
      if (!this.currentUser?.id) return;

      const newChat = this.chatService.getNewChat(
        this.currentUser.id,
        contactId
      );

      await this.getOtherUser(newChat as unknown as Chat);

      // this.selectedChat = newChat as unknown as Chat;
      this.chatService.setSelectChat(newChat as unknown as Chat);
      this.onShowModal('');
      return;
    }

    if (
      chatInChatsListIdx !== -1 &&
      typeof chatInChatsListIdx === 'number' &&
      this.chats
    ) {
      this.chatService.setSelectChat(this.chats[chatInChatsListIdx]);
      this.getOtherUser(this.selectedChat);
      this.onShowModal('');
    }
    return;
  }

  async getOtherUser(chat: Chat | null) {
    let userIdToGet: number | undefined;
    userIdToGet =
      chat?.userId === this.currentUser?.id ? chat?.userId2 : chat?.userId;

    if (userIdToGet)
      this.otherUser = await this.userService.getUserById(userIdToGet);
  }

  onSelectChat(chat: Chat) {
    if (!this.chats?.length) return;
    this.chatService.setSelectChat(chat);
    this.getOtherUser(this.selectedChat);
  }

  getContacts() {
    this.userService.query().subscribe();
    this.contactsSubscription = this.userService.users$.subscribe((users) => {
      this.contacts = users.filter((user) => user.id !== this.currentUser?.id);
    });
  }

  onShowModal(name: string) {
    this.modalNameToShow = name;
  }
}
