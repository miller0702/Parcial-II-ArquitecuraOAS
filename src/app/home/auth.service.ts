import { TokenInterface } from './../interface/token-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthInterface } from './../interface/auth-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http  : HttpClient) { }

  baseUrl = "http://127.0.0.1:3100/auth";

  getToken (informacion : AuthInterface | any ) {
    return this.http.post<TokenInterface>(`${this.baseUrl}`, informacion);
  }



}
