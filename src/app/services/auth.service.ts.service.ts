import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() { }

  isAuthenticated(user: User): boolean {
    const credentials = localStorage.getItem('credentials');
    if (credentials) {
      const info = JSON.parse(credentials) as User;
      return info.email === user.email && user.password === user.password;
    }
    return false

  }

}

interface User {
  email: string;
  password: string;
}
