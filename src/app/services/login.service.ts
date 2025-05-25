import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<LoginResponse>('http://localhost:3000/login', { email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem('authToken', value.token)
        sessionStorage.setItem('username', value.name)
      })
    )
  }
}
