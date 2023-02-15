import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from 'src/app/models/chat';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { ChatService } from 'src/app/services/chat-service/chat.service';
import { SocketService } from 'src/app/services/socket-service/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'myApp';
  constructor(
    private socketService: SocketService,
    private authService: AuthService,
    private router: Router,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.socketService.actions.on(
      'chat-updated',
      ({ chat }: { chat: Chat }) => {
        this.chatService.updateChatObservable(chat);
      }
    );

    this.socketService.actions.on('chat-added', ({ chat }: { chat: Chat }) => {
      this.chatService.addChatObservable(chat);
    });
  }

  ngOnDestroy(): void {
    this.socketService.actions.off('chat-updated');
    this.socketService.actions.off('chat-added');
  }

  logout() {
    this.authService.logout().subscribe((res) => {
      this.router.navigateByUrl('/sign-in-page');
    });
  }
}
