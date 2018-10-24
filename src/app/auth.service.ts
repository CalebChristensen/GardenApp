import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // adminLogin(){
  //   return this.http.post<Login>('https://efa-gardenapp-backend.herokuapp.com/api/auth/login')
  // }

  login(email: string, password: string) {
    return this.http.post<Login>('https://efa-gardenapp-backend.herokuapp.com/api/auth/login', { email: email, password: password })
    .pipe(map(user => {
      if(user && user.token){
        sessionStorage.setItem('currentUser', JSON.stringify(user.token))
      }

      return user;
    }))
  }

}
