import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Chat } from 'src/app/models/chat';
import { AuthService } from '../auth-service/auth.service';
import { User } from 'src/app/models/user';
import { UtilsService } from '../utils-service/utils.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private utilsService: UtilsService
  ) {}

  currentUser: User | null = null;

  readonly apiUrl = 'http://localhost:3030/api/chat';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
  };

  private _chats$ = new BehaviorSubject<Chat[]>([]);
  public chats$ = this._chats$.asObservable();

  public query() {
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
    if (!this.currentUser) return of();

    return this.http.get<Chat[]>(`${this.apiUrl}/${this.currentUser.id}`).pipe(
      map((chats) => {
        chats.forEach((chat) => {
          chat = this.parseChat(chat);
        });

        this._chats$.next(chats);
      })
    );
  }

  parseChat(chat: Chat) {
    if (chat.messages) chat.messages = JSON.parse(chat.messages as any) || [];
    if (chat.replies) chat.replies = JSON.parse(chat.replies as any) || [];
    if (chat.reactions)
      chat.reactions = JSON.parse(chat.reactions as any) || [];

    return chat;
  }

  stringifyChat(chat: Chat) {
    if (chat.messages) chat.messages = JSON.stringify(chat.messages) as any;
    if (chat.replies) chat.replies = JSON.stringify(chat.replies) as any;
    if (chat.reactions) chat.reactions = JSON.stringify(chat.reactions) as any;
    return chat;
  }

  public sendMessage(chat: Chat, currUserId: number, messageText: string) {
    const messageToAdd = this.getNewMessage(currUserId, messageText);

    chat.messages.push(messageToAdd);
    let chatToSave = Object.assign({}, chat);

    this.saveChat(chatToSave);
  }

  saveChat(chat: Chat) {
    chat = this.stringifyChat(chat);
    chat.id ? this.updateChat(chat) : this.addChat(chat);
  }

  updateChat(chat: Chat) {
    return this.http
      .put<Chat>(`${this.apiUrl}/${chat.id}`, chat, this.httpOptions)
      .pipe(
        map((chat: Chat) => {
          const updatedChats = this._chats$.value.filter((c) =>
            c.id === chat.id ? chat : c
          );

          this._chats$.next(updatedChats);
        })
      )
      .subscribe();
  }

  public addChat(chat: Chat) {
    return this.http
      .post<Chat>(`${this.apiUrl}`, chat, this.httpOptions)
      .pipe(
        map((chat: Chat) => {
          chat = this.parseChat(chat);
          const updatedChats = [chat, ...this._chats$.value];
          this._chats$.next(updatedChats);
        })
      )
      .subscribe();
  }

  getNewChat(userId: number, userId2: number) {
    return {
      userId,
      userId2,
      createdAt: new Date().getTime(),
      reactions: [],
      messages: [],
      replies: [],
    };
  }

  getNewMessage(currUserId: number, messageText: string) {
    return {
      id: this.utilsService.makeId(10),
      userId: currUserId,
      text: messageText,
      createdAt: new Date().getTime(),
      reactions: [],
      replies: [],
    };
  }
}
