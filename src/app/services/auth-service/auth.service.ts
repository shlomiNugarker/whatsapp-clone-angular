import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3030/api/auth';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<any>(
        `${this.apiUrl}/login`,
        {
          email,
          password,
        },
        this.httpOptions
      )
      .pipe(
        tap((res: any) => console.log(`login!, res=${res}`)),
        catchError(this.handleError<any>('login'))
      );

    // this is just the HTTP call,
    // we still need to handle the reception of the token
  }

  signup(email: string, password: string, fullname: string) {
    return this.http
      .post<any>(
        `${this.apiUrl}/signup`,
        {
          email,
          password,
          fullname,
        },
        this.httpOptions
      )
      .pipe(
        tap((res: any) => console.log(`signup!, res=${res}`)),
        catchError(this.handleError<any>('signup'))
      );
  }
  logout() {
    return this.http.post<any>(`${this.apiUrl}/logout`, this.httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
