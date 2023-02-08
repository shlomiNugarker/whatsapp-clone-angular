import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, of, lastValueFrom } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser$ = new BehaviorSubject<User | null>(
    this.getCurrentUser()
  );
  public currentUser$ = this._currentUser$.asObservable();

  private apiUrl = 'http://localhost:3030/api/auth';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
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
        map((userWithToken) => {
          const { user, accessToken } = userWithToken;

          if (user && accessToken) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('accessToken', JSON.stringify(accessToken));
            this._currentUser$.next(user);
            return user;
          }
        })
      );
  }

  signup(email: string, password: string, fullname: string) {
    try {
      return lastValueFrom(
        this.http.post<any>(
          `${this.apiUrl}/signup`,
          {
            email,
            password,
            fullname,
          },
          this.httpOptions
        )
      );
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');

    this._currentUser$.next(null);
    return this.http.post<any>(`${this.apiUrl}/logout`, this.httpOptions);
  }

  isValidToken(accessToken: string) {
    return lastValueFrom(
      this.http.post<any>(
        `${this.apiUrl}/verify`,
        { accessToken },
        this.httpOptions
      )
    );
  }

  getCurrentUser() {
    const userFromStorage = localStorage.getItem('currentUser');
    const currentUser = userFromStorage ? JSON.parse(userFromStorage) : null;
    return currentUser;
  }

  getAccessToken() {
    const tokenFromStorage = localStorage.getItem('accessToken');
    const accessToken = tokenFromStorage ? JSON.parse(tokenFromStorage) : null;
    return accessToken;
  }
}
