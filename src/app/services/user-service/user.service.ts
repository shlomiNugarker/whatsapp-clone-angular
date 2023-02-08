import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3030/api/user';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
  };

  private _users$ = new BehaviorSubject<User[]>([]);
  public users$ = this._users$.asObservable();

  query(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get<any>(url, this.httpOptions).pipe(
      tap((_) => console.log('fetched users: ')),
      map((users) => {
        this._users$.next(users);
      }),
      catchError(this.handleError<any[]>('getUserById', []))
    );
  }

  getUserById(userId: string): Observable<any> {
    const url = `${this.apiUrl}/userId/${userId}`;
    return this.http.get<any>(url, this.httpOptions).pipe(
      tap((_) => console.log('fetched user with id: ', userId)),
      catchError(this.handleError<any[]>('getUserById', []))
    );
  }

  getUserByEmail(email: string) {
    const url = `${this.apiUrl}/email/${email}`;
    return this.http.get<any>(url, this.httpOptions).pipe(
      tap((_) => console.log('fetched user with email: ', email)),
      catchError(this.handleError<any[]>('getUserByEmail', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
