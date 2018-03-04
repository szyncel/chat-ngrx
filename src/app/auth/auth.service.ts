import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';

@Injectable()
export class AuthService {
  users: User[] = [
    { login: "test", password: "test" },
    { login: "test2", password: "test123" },
    { login: "test3", password: "test123" }
  ];

  constructor() { }


  login(user:User) {

    let res = this.users.filter((u) => {
      return u.login == user.login && u.password == user.password;
    });
    if (res.length) {
      // localStorage.setItem('token', 'loggedIn');
      // return true
      return of({ login: user.login });
    };
    // return false;
    return _throw('Invalid username or password');
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token) return true;
    return false;
  }

  logout() {
    // localStorage.removeItem('token');
    return of(true);
  }



}


