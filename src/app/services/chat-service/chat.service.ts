import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Chat } from 'src/app/models/chat';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  chats = [
    {
      id: '1',
      userId: ['1', '2'],
      messages: [
        {
          id: 1,
          text: 'hey there :)',
          createdBy: '61',
          reactions: [],
          createdAt: 43436535,
        },
        {
          id: 1,
          text: 'hey dsfd :)',
          createdBy: '15',
          reactions: [],
          createdAt: 4343535,
        },

        {
          id: 1,
          text: ' aer aef a ffrgg there :)',
          createdBy: '12',
          reactions: [],
          createdAt: 43434535,
        },
      ],
    },
    {
      id: '2',
      userId: ['1', '2'],
      messages: [
        {
          id: 1,
          text: 'hey there :)',
          createdBy: '61',
          reactions: [],
          createdAt: 43436535,
        },
        {
          id: 1,
          text: 'hey dsfd :)',
          createdBy: '15',
          reactions: [],
          createdAt: 4343535,
        },
        {
          id: 1,
          text: 'dg tgggg deg sdhere :)',
          createdBy: '14',
          reactions: [],
          createdAt: 43432535,
        },
        {
          id: 1,
          text: 'hey sg  adeffaf af afra  :)',
          createdBy: '13',
          reactions: [],
          createdAt: 43453535,
        },
        {
          id: 1,
          text: ' aer aef a ffrgg there :)',
          createdBy: '12',
          reactions: [],
          createdAt: 43434535,
        },
      ],
    },
  ];

  private apiUrl = 'http://localhost:3030/api/chats';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getChats(): Observable<Chat[]> {
    return of(this.chats as any);
    // return this.http.get<Chat[]>(this.apiUrl).pipe(
    //   tap((_) => console.log('fetched chats')),
    //   catchError(this.handleError<Chat[]>('getChats', []))
    // );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
