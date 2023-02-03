import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    return this.http.post<any>(
      `${this.apiUrl}/login`,
      {
        email,
        password,
      },
      this.httpOptions
    );

    // this is just the HTTP call,
    // we still need to handle the reception of the token
  }
  signup(email: string, password: string, fullname: string) {
    return this.http.post<any>(
      `${this.apiUrl}/signup`,
      {
        email,
        password,
        fullname,
      },
      this.httpOptions
    );
  }
  logout() {
    return this.http.post<any>(`${this.apiUrl}/logout`, this.httpOptions);
  }
}
