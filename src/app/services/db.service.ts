import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  users: User[] = []

  constructor() { }

  registerUser(user: User): boolean {
    const users = localStorage.getItem('users')
    this.users = users ? JSON.parse(users!) : []
    if (!this.users.length) {
      this.users.push(user)
      localStorage.setItem('users', JSON.stringify(this.users))
      return true
    } else {
      const userExists = this.users.find(u => u.email === user.email)
      if (!userExists) {
        this.users.push(user)
        localStorage.setItem('users', JSON.stringify(this.users))
        return true
      }
      return false
    }
  }

}


