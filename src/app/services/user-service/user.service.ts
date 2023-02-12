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

  // readonly apiUrl = '/api/user';
  readonly apiUrl = 'http://localhost:3030/api/user';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
  };

  cashingUsers: { [key: string]: User } = {};

  private _users$ = new BehaviorSubject<User[]>([]);
  public users$ = this._users$.asObservable();

  public query(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get<any>(url, this.httpOptions).pipe(
      map((users) => {
        this._users$.next(users);
      }),
      catchError(this.handleError<any[]>('getUserById', []))
    );
  }

  public async getUserById(userId: number) {
    const url = `${this.apiUrl}/userId/${userId}`;
    try {
      if (this.cashingUsers[userId]) return this.cashingUsers[userId];
      const user = await lastValueFrom(
        this.http.get<any>(url, this.httpOptions)
      );
      this.cashingUsers[userId] = user;

      return user;
    } catch (err) {
      console.log(err);
    }
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
  async updateImageProfile(url: string) {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) await this.updateUser({ ...currentUser, imgUrl: url });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
