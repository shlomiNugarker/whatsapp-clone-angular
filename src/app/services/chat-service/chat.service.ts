import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Chat } from 'src/app/models/chat';
import { AuthService } from '../auth-service/auth.service';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  currentUser: User | null = null;

  private apiUrl = 'http://localhost:3030/api/chat';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private _chats$ = new BehaviorSubject<Chat[]>([]);
  public chats$ = this._chats$.asObservable();

  public query() {
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
    if (!this.currentUser) return of();

    return this.http.get<Chat[]>(`${this.apiUrl}/${this.currentUser.id}`).pipe(
      tap((_) => console.log('fetched chats')),
      map((chats) => {
        this._chats$.next(chats);
      })
    );
  }
}
