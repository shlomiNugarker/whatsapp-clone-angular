import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Chat } from 'src/app/models/chat';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private http: HttpClient) {}

  chats: Chat[] = [
    {
      id: '1',
      userId: ['1', '2'],
      createdAt: 455445454,
      messages: [
        {
          id: 'fgsdfg',
          userId: 'sdgdsgf',
          text: 'hey there :)',
          createdBy: '61',
          reactions: [],
          createdAt: 43436535,
          replies: [],
        },
        {
          id: 'fgg',
          userId: 'sdgdsgf',
          text: 'hey tdfhere :)',
          createdBy: '61',
          reactions: [],
          createdAt: 43436535,
          replies: [],
        },
        {
          id: 'fgg',
          userId: 'sdgdsgf',
          text: 'hey tf sdf  sd here :)',
          createdBy: '61',
          reactions: [],
          createdAt: 43436535,
          replies: [],
        },
      ],
    },
  ];

  private apiUrl = 'http://localhost:3030/api/chats';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private _chats$ = new BehaviorSubject<Chat[]>([]);
  public chats$ = this._chats$.asObservable();

  public query() {
    this._chats$.next(this.chats);
    // return this.http.get<Chat[]>(this.apiUrl).pipe(
    //   tap((_) => console.log('fetched chats')),
    //   map((chats) => {
    //     this._chats$.next(chats);
    //   }),
    //   catchError(this.handleError<Chat[]>('query Chats', []))
    // );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
