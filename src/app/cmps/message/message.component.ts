import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import { Subscription } from 'rxjs';
import { Chat } from 'src/app/models/chat';
import { Message } from 'src/app/models/message';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit, OnDestroy {
  @Input() messages: Message[] | null = null;
  @Input() selectedChat: Chat | null = null;
  @Input() modalNameToShow: string | undefined;
  @Input() otherUser: User | null = null; // the user you are chatting,depends on selectedChat
  @Output('selectModal') onSelectModal = new EventEmitter<string>();
  @Output('onSendMessage') onSendMsg = new EventEmitter<string>();

  currentUser: User | null = null;
  userSubscription: Subscription | undefined;
  textMsg: string = '';
  infoText: string = 'Click here for contact info';
  isEmojiShown: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });

    setTimeout(() => {
      const listEl = document.querySelector('.list-messages');
      listEl?.scrollTo(0, listEl.scrollHeight);
    }, 30);

    // setTimeout(() => (this.infoText = this.otherUser?.email || ''), 3000);
  }

  addEmoji(ev: any) {
    // console.log(ev.emoji);
    this.textMsg += ev.emoji.native;
  }
  focusOut() {
    console.log('focusOut');
  }

  showEmoji() {
    this.isEmojiShown = !this.isEmojiShown;
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

  showSearchMessage() {
    this.onSelectModal.emit('search-message');
  }

  showContactInfo(contactId: number | undefined) {
    this.onSelectModal.emit('contact-info');
  }
  onSend() {
    this.onSendMsg.emit(this.textMsg);
    this.textMsg = '';
  }
}
