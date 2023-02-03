import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3030/api/user';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getUserById(userId: string) {
    return this.http.get<any>(
      `${this.apiUrl}/userId/${userId}`,
      this.httpOptions
    );
  }
  getUserByEmail(userId: string) {
    return this.http.get<any>(
      `${this.apiUrl}/email/${userId}`,
      this.httpOptions
    );
  }
}
