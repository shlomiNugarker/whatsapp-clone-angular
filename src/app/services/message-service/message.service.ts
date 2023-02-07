import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from '../auth-service/auth.service';
import { User } from 'src/app/models/user';
import { Message } from 'src/app/models/message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  currentUser: User | null = null;

  private apiUrl = 'http://localhost:3030/api/message';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private _messages$ = new BehaviorSubject<Message[]>([]);
  public messages$ = this._messages$.asObservable();

  public query(chatId: string) {
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
    if (!this.currentUser) return of();

    return this.http.get<Message[]>(`${this.apiUrl}/${chatId}`).pipe(
      tap((_) => console.log('fetched messages')),
      map((messages) => {
        this._messages$.next(messages);
      })
    );
  }
}
