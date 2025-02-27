import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl + 'api/login/'; // URL вашего API для логина

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }

  // Метод для проверки, авторизован ли пользователь
  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth-token'); // Проверяем наличие токена
  }

  // Метод для выхода
  logout(): void {
    localStorage.removeItem('auth-token'); // Удаляем токен
  }
}
