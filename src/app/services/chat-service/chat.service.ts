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
          chat.messages = JSON.parse(chat.messages as any) || [];
        });

        this._chats$.next(chats);
      })
    );
  }

  public sendMessage(chat: Chat, currUserId: number, messageText: string) {
    const messageToAdd = this.getNewMessage(currUserId, messageText);

    chat.messages.push(messageToAdd);
    let chatToSave = Object.assign({}, chat);

    chatToSave.messages = JSON.stringify(chat.messages) as any;

    return this.http
      .put<Chat>(
        `${this.apiUrl}/${chatToSave.id}`,
        chatToSave,
        this.httpOptions
      )
      .pipe(
        map((chat) => {
          console.log(chat);

          // this._chats$.next(chat);
        })
      )
      .subscribe();
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
