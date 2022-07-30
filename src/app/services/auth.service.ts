import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;

  constructor() { }

  loggin(user: User): boolean {
    const dbUser = localStorage.getItem('users');
    if (dbUser) {
      const db = JSON.parse(dbUser) as User[];
      const userFound = db.find(u => u.email === user.email && u.password === user.password)
      if (userFound) {
        this.isLogged = true;
        return true;
      } else {
        this.isLogged = false;
        return false;
      }
    }
    return false;
  }

  isAuthenticated(): boolean {
    return this.isLogged;
  }

}
