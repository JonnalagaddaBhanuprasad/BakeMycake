import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }


  isLoggedIn: boolean = false;

  login(adminCode: string) {
    console.log(adminCode);
      this.isLoggedIn = adminCode === "Bhanu";
      console.log(this.isLoggedIn);
      
  }

  logout() {
      this.isLoggedIn = false;
  }
}