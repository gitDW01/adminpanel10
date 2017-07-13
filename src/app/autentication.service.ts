import { Injectable } from '@angular/core';

@Injectable()
export class AutenticationService {
  private isUserLoggedIn;
  private username;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserUsername(username) {
    if(username) {
      this.setUserLoggedIn();
    }
    this.username = username;
  }

  getUserUsername() {
    return this.username;
  }


  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

}
