import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { Chat } from '../../models/chat';
import { User } from '../../models/user';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/services/auth-service/auth.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.scss'],
})
export class ChatPreviewComponent implements OnInit, OnDestroy {
  @Output('selectModal') onSelectModal = new EventEmitter<string>();
  @Output('selectChat') onSelect = new EventEmitter<number>();
  @Input() chats: Chat[] | null | undefined;
  @Input() chat: Chat | null | undefined;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  otherUser: User | null = null;
  userSubScription: Subscription | undefined;
  currentUser: User | null = null;

  ngOnInit(): void {
    this.userSubScription = this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });

    console.log(this.chat);

    if (this.chat) this.getOtherUser(this.chat);
  }

  ngOnDestroy(): void {
    if (this.userSubScription) this.userSubScription.unsubscribe();
  }

  lastMessage() {
    const lastNsg = this.chat?.messages[this.chat?.messages.length - 1];
    const username =
      (lastNsg?.userId === this.currentUser?.id
        ? this.currentUser?.fullname
        : this.otherUser?.fullname
      )?.split(' ')[0] + ': ' || '';

    return username + lastNsg?.text || 'No messages yet...';
  }

  lastDate() {
    return (
      this.chat?.messages[this.chat?.messages?.length - 1]?.createdAt || ''
    );
  }

  async getOtherUser(chat: Chat) {
    let userIdToGet: number | undefined;
    userIdToGet =
      chat.userId === this.currentUser?.id ? chat.userId2 : chat.userId;

    if (userIdToGet)
      this.otherUser = await this.userService.getUserById(userIdToGet);
  }
}
