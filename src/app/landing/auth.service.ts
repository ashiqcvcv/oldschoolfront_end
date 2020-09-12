import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { User } from './user.model';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  selectedUser : User = {
    fullName : '',email:'',password:''
  }

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth' : 'True'})};

  constructor(private http: HttpClient){}
  ApiUrl = environment.apiBaseUrl + '/index';

  postUser(user : User){
    return this.http.post(this.ApiUrl + '/register',user,this.noAuthHeader);
  }

  login(authCredentials){
    return this.http.post(this.ApiUrl + '/authenticate',authCredentials,this.noAuthHeader);
  }

  getUserProfile(){
    return this.http.get(this.ApiUrl + '/userProfile');
  }
  
  deleteToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  setToken(token : string){
    return localStorage.setItem('token',token);
  }

  setUsertype(type : string){
    return localStorage.setItem('userType',type);
  }

  getUsertype(){
    return localStorage.getItem('userType');
  }

  getUserPayload(){
    var token = this.getToken();
    if(token){
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }else{
      return null
    }
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if(userPayload){
      return userPayload.exp > Date.now()/1000;
    }else{
      return false;
    }
  }
}
