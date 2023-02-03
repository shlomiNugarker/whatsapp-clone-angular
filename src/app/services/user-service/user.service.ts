import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3030/api/user';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

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
