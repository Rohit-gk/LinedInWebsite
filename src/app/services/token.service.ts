import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor() { }

  setToken(token: string) {
    return localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token:');
  }

  removeToken() {
    return localStorage.removeItem('token');
  }
  
  isLoginSuccess():boolean{
    return !!this.getToken();
  }

  getRole(){
    debugger;
    let token = this.getToken()!;
    let decodedJWT = JSON.parse(window.atob(token?.split('.')[1]));
    return decodedJWT.Role
  }



}
