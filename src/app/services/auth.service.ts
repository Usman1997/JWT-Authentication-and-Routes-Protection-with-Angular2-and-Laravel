import { Injectable } from '@angular/core';
import {Http,Headers } from '@angular/http';
import 'rxjs/Rx';
import {tokenNotExpired} from 'angular2-jwt';
@Injectable()
export class AuthService {
  user :any;
  authToken: any;
  constructor(private http:Http) { }
  registerUser(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:8000/api/user/signup',user,{headers:headers}).map(res =>res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8000/api/user/signin',user,{headers:headers})
    .map(res=>res.json());
    }

    getProfile(){
      let headers = new Headers();
      this.loadToken();
      headers.append('Content-Type','application/json');
      return this.http.get('http://localhost:8000/api/user/profile/?token='+this.authToken,{headers:headers})
      .map(res=>res.json());
    }


    storeUser(token,user){
      localStorage.setItem('token_id',token);
      localStorage.setItem('user',JSON.stringify(user));
      this.authToken = this.authToken;
      this.user = user;
    }

    loadToken(){
      const token = localStorage.getItem('token_id');
      this.authToken = token;
    }

    Logout(){
      this.authToken = null;
      this.user = null;
      localStorage.clear();

    }

    isLogged(){
      return tokenNotExpired('token_id');
    }

    
}
