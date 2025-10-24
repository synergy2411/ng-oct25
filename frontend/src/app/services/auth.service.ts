import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  private usersCollection: { email: string; password: string }[] = [];

  constructor() {}

  userRegister(email: string, password: string) {
    return new Promise((resolve, reject) => {
      const position = this.usersCollection.findIndex(
        (user) => user.email === email
      );
      if (position >= 0) {
        console.log('Email already taken. Try Again!');
        reject(new Error('Email already taken. Try Again!'));
      } else {
        this.usersCollection.push({ email, password });
        resolve({ email, password });
      }
    });
  }

  userLogin(email: string, password: string) {
    return new Promise((resolve, reject) => {
      const position = this.usersCollection.findIndex(
        (user) => user.email === email
      );
      if (position >= 0) {
        if (
          this.usersCollection[position].email === email &&
          this.usersCollection[position].password === password
        ) {
          this.isLoggedIn = true;
          resolve({ message: 'success' });
        } else {
          console.error('Bad Credentials');
          reject(new Error('Bad Credentials'));
          this.isLoggedIn = false;
        }
      } else {
        console.error('Email not found!');
        reject('Email not found!');
      }
    });
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  userLogout() {
    return new Promise((resolve) => {
      this.isLoggedIn = false;
      resolve({ message: 'successfully logout' });
    });
  }
}
