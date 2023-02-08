import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, lastValueFrom, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  private apiUrl = 'http://localhost:3030/api/user';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
  };

  private _users$ = new BehaviorSubject<User[]>([]);
  public users$ = this._users$.asObservable();

  public query(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get<any>(url, this.httpOptions).pipe(
      tap((_) => console.log('fetched users: ')),
      map((users) => {
        this._users$.next(users);
      }),
      catchError(this.handleError<any[]>('getUserById', []))
    );
  }

  public getUserById(userId: string): Observable<any> {
    const url = `${this.apiUrl}/userId/${userId}`;
    return this.http.get<any>(url, this.httpOptions).pipe(
      tap((_) => console.log('fetched user with id: ', userId)),
      catchError(this.handleError<any[]>('getUserById', []))
    );
  }

  public getUserByEmail(email: string) {
    const url = `${this.apiUrl}/email/${email}`;
    return this.http.get<any>(url, this.httpOptions).pipe(
      tap((_) => console.log('fetched user with email: ', email)),
      catchError(this.handleError<any[]>('getUserByEmail', []))
    );
  }

  public async updateUser(user: User) {
    const url = `${this.apiUrl}/${user.id}`;
    const savedUser = await lastValueFrom(
      this.http.put<any>(url, user, this.httpOptions)
    );
    return this.authService.updateCurrentUser(savedUser);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
